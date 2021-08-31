<template>
  <div class="fullscreen">
    <div class="config-container">
      <div class="one">
        <span class="text">守望者智慧社区应用平台</span>
        <span class="englist">Community Application Platform</span>
      </div>
      <div class="config-box">
        <div
          class="back_btn"
          @click="goBack"
        >&lt; 返回</div>
        <div class="title">空间配置</div>
        <div class="select">
          <div class="select_one">
            <div class="select_name">用户账号</div>
            <div class="select_input">
              <!-- <el-select v-model="value1" multiple placeholder="请选择" :popper-append-to-body='false'> -->
              <el-select
                v-model="value1"
                placeholder="请选择"
                :popper-append-to-body='false'
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.username"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="select_two">
            <div class="select_name">行政区划</div>
            <div class="select_input">
              <el-cascader
                v-model="spaceValue"
                :options="cascaderOptions"
                :show-all-levels="false"
              ></el-cascader>
            </div>
          </div>
        </div>
        <div class="village">
          <div
            v-for='(item,index) in villages'
            :key='index'
            class="village_item"
          >
            {{item.name}}

            <span @click='delV(item)'>X</span>
          </div>
        </div>
        <div class="config_btn">
          <div
            @click="quit"
            class="quit_btn"
          >重置</div>
          <div
            @click="submit"
            class="sure_btn"
          >确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import allRouter from '../router/allRouter'
import { getCookie } from '../../Utils/Com'
import $ from 'jquery'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
let _ = require('lodash')
import { apiNames } from '../../Utils/config'

export default {

  name: 'spaceConfig',//超级用户空间配置
  data() {
    return {
      loginLoading: false,
      tslAuthCode: '',
      formData: {
        username: '',
        password: ''
      },
      submitText: '登录',
      routerArr: [],
      logging: false,
      villages: [
        // {name: '田林十二村',id: 1},
        // {name: '田林十san村',id: 2},
      ],
      options: [],
      value1: '',
      spaceValue: [],
      cascaderOptions: []
    }
  },
  props: {
  },
  components: {
  },
  mounted() {
    this.init()
  },
  created() { },
  watch: {
    spaceValue(val) {
      console.log(val)
      if (val) {
        let data = val[val.length - 1].split('_')
        console.log(data)
        if (data[2] == 0) {
          let obj = {}
          obj.name = data[1]
          obj.value = data[0]
          obj.areaCode = data[0]
          var result = this.villages.some(item => {
            if (item.value == obj.value)
              return true
          })
          if (result) {
            return
          } else {
            this.villages.push(obj)
          }
        }
      }
    },
    value1(val) {
      console.log(val)
      if (val) {
        this.getUser(val)
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/login",
        query: ''
      });
    },
    submit() {
      if (!this.value1) {
        this.$newthost({
          content: '请选择用户!'
        })
        return
      }
      //  if(this.villages.length == 0){
      //       this.$newthost({
      //               content: '请选择空间!'
      //       })   
      //     return  
      //   }
      //去绑定 用户与空间
      this.$put(apiNames['绑定用户空间'],
        {
          editUserID: this.editUserID ? '1' : '2',
          userID: this.value1,
          vartualSpaceList: this.villages,
        }
      ).then(res => {
        if (res.responseStatus.resultCode === 0) {
          // this.$cookie.delete("access-token");
          this.$newthost({
            content: '用户绑定空间成功!'
          })
          //跳转至详情页
          this.$router.push({
            path: "/login",
            query: ''
          });
          console.log(res)
        } else {
          this.$newthost({
            content: res.data.name
          })
        }
      })
      //  this.$router.push('/login')

    },
    quit() {
      this.value1 = ''
      this.spaceValue = []
    },
    getUsers() {
      // 先用户认证 再 掉登陆接口取用户，再绑定
      this.$post(apiNames['获取全部用户'], {
        "pageSize": 999,
        "pageNo": 1
      },
        { headers: { 'Authorization': "Bearer " + window.localStorage.getItem('user-token') } }
      ).then(res => {
        // console.log(1111111111, res)
        //筛选user
        this.options = res.rows.filter((v)=>{
         return v.platformRole == 'user'

        })
      })
    },
    getUser(id) {
      let roleCodesString = window.localStorage.getItem('roleCodes')
      this.$post(apiNames['获取用户空间列表'], {
        userID: id,
        roleCodes: JSON.parse(roleCodesString)
      }).then(res => {
        if (res.responseStatus.resultCode === 0) {
          let arr = res.data.vartualSpaceList
          let temp = []
          arr.forEach((item) => {
            item.username = item.name
            item.value = item.areaCode
            temp.push(item.name)
          })
          // this.value1 =  temp
          // this.options = arr
          this.villages = arr
          //给villages赋值
        } else {
          this.$newthost({
            content: res.data.name
          })
        }
      })
    },
    init() {
      this.getUsers()
      this.$get(apiNames['获取所有空间列表']).then(res => {
        if (res.responseStatus.resultCode === 0) {
          console.log(res.data)
          this.cascaderOptions = res.data
        } else {
          this.$newthost({
            content: res.data.name
          })
        }
      })
    },
    delV(e) {
      console.log(e)
      let tempArr = []
      this.villages.forEach((item) => {
        if (item.areaCode != e.areaCode) {
          tempArr.push(item)
        }
      })
      this.villages = tempArr
    },
    handleLogin() {
      if (!this.form.username || !this.form.password) {
        this.$message.warning('用户名或密码不能为空')
      } else {
        this.submit()
        // this.submitFrom()
      }
    },
    // 登陆成功之后获取路由菜单
    getMenuRouter() {
      // this.routerArr = _.cloneDeep(allRouter)
      // this.Http({
      //   url: this.apiNames['获取当前角色菜单权限'],
      //   success: (data) => {
      //     if (data.respCode === '0000') {
      //       // 配置菜单进行展示
      //       // console.log('登录之后当前权限菜单', JSON.stringify(data.data))
      //       window.localStorage.setItem('menusInfo', JSON.stringify(data.data.filter(item => item.parentFunctionCode === '-1')))
      //       let mapCon = '{"mapType":"GD","url":"http://webapi.amap.com/maps?v=1.4.7&key=2e89ebc989557d9731edf8b5e8fd75b6","viewMode":"3D","pitch":30,"expandZoomRange":true,"zooms":[10,20],"zoom":18.4,"mapstyle":"amap://styles/b0cb4e73e4bd6c0cf3aa8991b18388fd","isRecordExtent":false,"isShowTextAtMaxZoom":true,"isShowLayerControl":true}'
      //       window.localStorage.setItem('mapParams', JSON.stringify(mapCon))
      //       let a = true
      //       if (a) {
      //         let funcMenus = JSON.parse(window.localStorage.getItem('menusInfo'))
      //         for (let i = 0; i < filterAsyncRouter(funcMenus).length; i++) {
      //           this.routerArr[0].children.push(filterAsyncRouter(funcMenus)[i])
      //         }
      //         this.$router.options.routes = []
      //         this.$router.options.routes = this.routerArr
      //         this.$router.addRoutes(this.routerArr)
      //         // console.log("%c this.$router>>>>>>>>", "color:blue", this.$router);
      //         console.log("%c this.$router>>>>>>>>", "color:blue", this.$router.options);
      //         this.$store.state.isReload = true
      //       }
      //     }
      //   }
      // }, 'get')
    },
    hasLogged() {
      // 已登录
      // let isToken = getCookie('access-token-Bluecms')
      // if (isToken) this.$router.push('/')
    }
  },
  destroyed() {
  },
}
</script>
<style lang="scss" scope>
.fullscreen {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/imgs/common/login_bg.png');
  background-size: 100% 100%;
}
@media (max-width: 768px) {
  .config-container {
    width: auto;
  }
}
.config-container {
  margin: 0 auto;
}
.config-container .el-input {
  border-radius: 4px;
}
.config-container .one {
  display: flex;
  flex-direction: column;
  line-height: 0.6rem;
  font-size: 0.6rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.config-container .one .text {
  display: flex;
  color: #00f9fc;
  font-family: 'HY65';
  font-size: 0.84rem;
}
.config-container .one .englist {
  display: flex;
  color: #00f9fc;
  font-family: 'HY55';
  font-size: 0.28rem;
}
.config-container {
  .config-box {
    padding-top: 0.8rem;
    width: 16.16rem;
    // height: 10.08rem;
    padding-bottom: 0.9rem;
    box-sizing: border-box;
    background: url('../../assets/imgs/common/login_border.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .back_btn {
      position: absolute;
      top: 0;
      left: 0;
      color: #c9e7ff;
      font-family: 'HY65';
      font-size: 0.28rem;
      padding-top: 0.4rem;
      margin-left: 0.4rem;
      cursor: pointer;
      &:hover {
        color: #00f9fc;
      }
    }
    .title {
      font-family: 'HY55';
      font-size: 0.44rem;
      color: #c9e7ff;
      margin-bottom: 0.6rem;
    }
    .select {
      display: flex;
      width: 12.44rem;
      margin: 0 auto;
      flex-direction: column;
      .select_one {
        text-align: left;
        margin-bottom: 0.64rem;
        .select_name {
          margin-bottom: 0.28rem;
          font-family: 'HY55';
          font-size: 0.4rem;
          color: #c9e7ff;
        }
      }
      .select_two {
        text-align: left;
        .select_name {
          font-family: 'HY55';
          font-size: 0.4rem;
          margin-bottom: 0.28rem;
          color: #c9e7ff;
        }
      }
    }
    .village {
      width: 12.44rem;
      margin: 0.3rem auto;
      display: flex;
      flex-wrap: wrap;
      .village_item {
        display: inline-block;
        padding: 0.2rem 0.4rem;
        border-radius: 0.4rem;
        margin-bottom: 0.3rem;
        font-family: 'HY55';
        font-size: 0.28rem;
        color: #c9e7ff;
        background: rgba(201, 231, 255, 0.2);
        margin-right: 0.6rem;
        span {
          margin-left: 0.24rem;
        }
      }
    }
    .config_btn {
      margin: 0 auto;
      display: flex;
      width: 12.44rem;
      // height: 1.36rem;
      text-align: center;
      margin-top: 1.4rem;
      color: #fff;
      font-family: 'HY55';
      font-size: 0.44rem;
    }
    .quit_btn {
      flex: 1;
      height: 1rem;
      line-height: 1rem;
      margin-right: 1.2rem;
      background: url('../../assets/imgs/common/quit.png');
      background-size: 100% 100%;
      cursor: pointer;
    }
    .sure_btn {
      flex: 1;
      height: 1rem;
      line-height: 1rem;
      background: url('../../assets/imgs/common/sure.png');
      background-size: 100% 100%;
      cursor: pointer;
    }
    .quit_btn:hover {
      background: url('../../assets/imgs/common/active.png');
      background-size: 100% 100%;
    }
    .sure_btn:hover {
      background: url('../../assets/imgs/common/active.png');
      background-size: 100% 100%;
    }
  }
}
</style>
<style lang="scss">
.config-box {
  .el-select {
    width: 100% !important;
  }
  .el-cascader {
    width: 100% !important;
    line-height: unset;
  }
  .el-input__inner {
    // width: 3.4rem!important;
    height: 0.8rem !important;
    background: #101824;
    border: 1px solid rgba(186, 210, 229, 0.3) !important;
  }
  .el-input__icon {
    line-height: 0.8rem !important;
  }
  .el-select-dropdown {
    background: #101824 !important;
    border-radius: 3px !important;
    border: 1px solid rgba(186, 210, 229, 0.3) !important;
    color: #c9e7ff !important;
    padding: 0.2rem !important;
  }
  .el-select-dropdown__item.selected {
    color: #00f9fc !important;
    background: rgba(78, 101, 131, 0.65) !important;
  }
  .el-select-dropdown__item.hover {
    color: #00f9fc !important;
    background: rgba(78, 101, 131, 0.65) !important;
  }
  .popper__arrow {
    display: none !important;
  }
  .el-tag.el-tag--info {
    border-radius: 0.38rem;
    color: #c9e7ff;
    border: none;
    background: rgba(201, 231, 255, 0.2);
  }
  .el-tag--small {
    height: 0.48rem;
    padding: 0.04rem 0.2rem 0.04rem 0.2rem;
    line-height: 0.44rem;
  }
}
</style>

