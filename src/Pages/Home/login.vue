<template>
  <div class="fullscreen">
    <div class="innerClass">
        <img class="LOGO" src="../../assets/imgs/zhihuipaishui/login/LOGO.png" alt="">
        <div class="title">
          <div class="titleT">于都县智慧排水管网</div>
          <div class="titleB">信息管理平台</div>
          <img class="henxian" src="../../assets/imgs/zhihuipaishui/login/henxian.png" alt="">
        </div>
        <div class="right">
          <form action="">
            <div class="right_t">
              <input type="text" autocomplete  value="" v-model="userName" placeholder="用户：手机号/昵称">
            </div>
            <div class="right_b">
              <input type="password" value="" autocomplete v-model="password" placeholder="密码：请输入您的密码">
            </div>
            <div class="codeInput">
              <div class="syscode">
                <input type="text" v-model="code" placeholder="请输入验证码">
              </div>
              <div class="sysPic" style="border: none">
                <img style="width: 100%;height: 100%;margin: 0" :src="codeImage" alt="">
              </div>
              <img :class="{go: addRotate}" @click="getCode" src="../../assets/imgs/zhihuipaishui/login/fresh.png" alt="">
            </div>
            <!-- <div class="checkBox" style="border: none">
               <el-checkbox v-model="checked">记住密码</el-checkbox>
                <el-checkbox v-model="checked">记住我</el-checkbox>
            </div> -->
            <div class="login" @click="handleLogin">
              登录
            </div>
          </form>
            <!-- <div style="border: none;text-align:left;text-decoration:underline;color: #4F8DE5;font-size: 24px;margin-top: .5rem;">
                忘记密码？
            </div> -->
        </div>
    </div>
    <loading :visible="isLoading" />
  </div>
</template>
<script>
// import allRouter from '../router/allRouter'
import { getCookie } from '../../Utils/Com'
import $ from 'jquery'
import autoForm from './autoForm'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
let _ = require('lodash')
import user from '../../Utils/user.js'

import { apiNames, ChineseName, EnglishName } from '../../Utils/config'
import { setTimeout } from 'timers';
import { userInfo } from 'os';

export default {
  inject: ['reload'],
  name: 'login',
  data() {
    return {
      userName: null,
      password: null,
      code: null,
      isLoading: false,
      codeImage: null,
      addRotate: false,
      currdatetime: 0,
      menus: [
        {
          name: '工程管理',
          path: '/pjManagement'
        },
        {
          name: '管网综合',
          path: '/ppline'
        },
        {
          name: '排水许可',
          path: '/psLisence'
        },
        {
          name: '设施运维',
          path: '/deviceOperation'
        },
        {
          name: '数据字典',
          path: '/wdatadics'
        },
        {
          name: '用户管理',
          path: '/usermanage'
        }
      ]
    }
  },
  props: {
  },
  mounted() {
    this.getCodeP()
  },
  created() {
    document.onkeydown = (e) => {
      if (!e) e = window.event
      if ((e.keyCode === 13) && this.$route.path === '/login') {
        this.handleLogin()
      }
    }
  },
  methods: {
    queryAllDictItems () {
      this.$get(apiNames['获取全部字典']).then((res) => {
          if (res.code == 200) {
            window.localStorage.setItem('allDictItems', JSON.stringify(res.result))
          }
      })
    },
    getCode() {
      this.addRotate = true
      setTimeout(() => {
        this.addRotate = false;
      },1000)
      this.getCodeP()
    },
    getCodeP () {
      this.currdatetime = new Date().getTime();
      this.$get(`${apiNames['获取验证码']}${this.currdatetime}`).then(res => {
        if (res.code == 0) { 
          this.codeImage = res.result
        }
      })
    },
    login() {
      let loginParams = {
        username: this.userName,
        password: this.password,
        captcha: this.code,
        checkKey: this.currdatetime
      };
      // this.$router.push({
      //           path: "/home",
      //           query: ''
      //         });
      this.$post(apiNames['用户登陆'],loginParams).then(res=> { 
           if (res.code == 200) {
              let { userInfo, token } = res.result
              window.localStorage.setItem('token', token)
              window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
              this.getPermission()
              this.queryAllDictItems()
           } else if (res.code == 500) {
              this.$newthost({
                content: res.message
              })
           }
       })
    },
    getPermission () {
      this.currdatetime = new Date().getTime();
      this.$get(`${apiNames['登陆后获取用户菜单权限']}`, this.currdatetime).then(res => {
        if (res.code == 200) {
          let routes = res.result.menu
          window.localStorage.setItem('addRoutes', JSON.stringify(routes))
          this.menus = this.menus.filter((menu) => {
              let num = routes.findIndex((item) => {
                return  menu.path == item.path
              })
              return num !== -1
          })
          this.$router.push(this.menus[0].path);
        }
      })
    },
    handleLogin() {
      if (!this.userName || !this.password || !this.code) {
        this.$message.warning('用户名,密码或验证码不能为空')
      } else {
        this.login()
      }
    },
  },
  destroyed() {
  },
}
</script>
<style lang="scss" scoped>
.fullscreen {
  // position: absolute;
  // position: relative;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/imgs/zhihuipaishui/login/backOut.png');
  background-size: 100% 100%;
  overflow: hidden;
  .innerClass {
    width: 35.54rem;
    height: calc(100% - 2.52rem);
    background-image: url('../../assets/imgs/zhihuipaishui/login/backInner.png');
    background-size: 100% 100%;
    margin: 1.26rem 0 0 1.42rem;
    position: relative;
    .right {
      width: 11.76rem;
      height: calc(100% - 4.7rem);
      position: absolute;
      right: 0;
      background: #FFFFFF;
       padding: 4.7rem 0 0 1.3rem;
      div {
        width: 9.18rem;
        height: 1.68rem;
        border: .04rem solid rgba(125, 125, 125, .2);
        border-radius: .2rem;
      }
      input {
        width: 98%;
        height: 100%;
        border: none;
        caret-color:black;
        text-indent: .3rem;
        font-size: .48rem;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #7E7E7E;
      }
      ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #7E7E7E!important;
        font-size: .48rem;
      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #7E7E7E!important;
        font-size: .48rem;
      }
      ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #7E7E7E!important;
        font-size: .48rem;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #7E7E7E!important;
        font-size: .48rem;
      }
      .codeInput {
        border: none;
        margin-top: .52rem;
        display: flex;
        .syscode {
          width: 5.32rem;
        }
        .sysPic {
          width: 2.48rem;
          height: 1.3rem;
          margin: .16rem 0 0 .38rem;
        }
        img {
          width: .72rem;
          height: .52rem;
          margin-left: .22rem;
          margin-top: .62rem;
          cursor: pointer;
        }
      }
      .checkBox {
        text-align:left;
        .el-checkbox {
            transform: scale(1.8);
            margin-left: .7rem;
            margin-top: 1rem;
            margin-right: 1.4rem;
        }
      }
      .login {
        background: #4F8DE5;
        font-size: .72rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FEFEFE;
        line-height: 1.62rem;
        cursor: pointer;
        margin-top: .8rem;
      }
      .right_t {
      }
      .right_b {
        margin-top: .52rem;
      }
    }
    .LOGO {
      width: 6.44rem;
      height: 2.1rem;
      position: absolute;
      left: 1.02rem;
      top: .8rem;
    }
    .title {
      position: absolute;
      left: 4.56rem;
      top: 6.64rem;
      line-height: 1.68rem;
      color: #FFFFFF;
      letter-spacing: .15rem;
      .titleT {
        font-size: 1.42rem;
        font-family: HYZhongHeiJ;
        font-weight: 400;
      }
      .titleB {
        font-size: .84rem;
        font-family: HYZhongHeiJ;
        font-weight: 400;
      }
      .henxian {
        width: 11.66rem;
        height: .1rem;
        position: absolute;
        left: 1.1rem;
        top: 2.5rem;
      }
    }
  }
}
@keyframes move {
  0% { transform:rotate( 0deg ) };
  100%{ transform:rotate( 720deg ) }
}
.go{
  animation: move 2s infinite;
}
</style>
