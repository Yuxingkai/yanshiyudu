<template>
  <div
    class="hello"
  >
    <!-- 此处可添加头部菜单等 -->
    <div class="header">
      <div class="title">于都县智慧排水管网信息管理平台</div>
      <div>
        <div class="menus">
          <div v-for="(item, index) in menus" :key="index" :class="nowIndex === index ? 'active' : ''" @click="linkTo(index, item.path)">{{ item.name }}</div>
        </div>
      </div>
      <div class="logOut" @click="logOut">
        退出登录
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import { apiNames } from '../Utils/config'
export default {
  name: 'home',
  data() {
    return {
      menus: [
        {
          name: '运营面板',
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
          name: '工程管理',
          path: '/wdatadics'
        },
        {
          name: '用户管理',
          path: '/usermanage'
        }
      ],
      nowIndex: 0,
      allRoutes: []
    }

  },
  mounted() {
    this.updateMenus()
    // this.queryAllDictItems()
    this.selectIndex()
  },

  watch: {
  },
  created() {
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    updateMenus () {
      this.allRoutes = JSON.parse(window.localStorage.getItem('addRoutes'))
      
      this.menus = this.menus.filter((menu) => {
          let num = this.allRoutes.findIndex((item) => {
            return  menu.path == item.path
          })
          return num !== -1
      })
    },
    linkTo (index, path) {
      this.nowIndex = index
      this.$router.push(path)
    },
    logOut () {
      this.$router.push({path: '/login'})
      localStorage.clear()
    },
    findIndex (arr, path) {
      let index = 0
        arr.forEach((item, i) => {
          if (path === item.path) {
            index = i
          }
        })
      return index
    },
    selectIndex () {
      console.log(this.menus)
      switch(this.$route.path){
        case '/pjManagement':
          this.nowIndex = this.findIndex(this.menus, '/pjManagement')
          break;
        case '/ppline':
          this.nowIndex = this.findIndex(this.menus, '/ppline')
        break;
        case '/wdatadics':
          this.nowIndex = this.findIndex(this.menus, '/wdatadics')
        break;
        case '/usermanage':
          this.nowIndex = this.findIndex(this.menus, '/usermanage')
        break;
        default:
          this.nowIndex = 0
          break;
      }
    }
  },
  beforeDestroy() {
  }
}
</script>
<style scoped lang='scss'>
.hello {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url('../assets/imgs/zhihuipaishui/background.png');
  background-size: 100% 100%;
  box-sizing: border-box;
  // -webkit-user-select: text;
  // padding-top: 70px;
  .show-enter-active,
  .show-leave-active {
    transition: opacity 0.6s;
  }
  .show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(8rem);
  }
  .header {
    height: 2.14rem;
    width: 100%;
    display: flex;
    .title {
      margin-left: 2.46rem;
      margin-right: 1rem;
      letter-spacing: .08rem;
      font-size: .84rem;
      font-family: HYZhongHeiJ;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 2.04rem;
      background-image:-webkit-linear-gradient(bottom, #4EABFE, #C6E2FC); 
      -webkit-background-clip:text; 
      -webkit-text-fill-color:transparent;
    }
    .menus {
      display: flex;
      font-size: .4rem;
      margin-top: .6rem;
      font-family: Adobe Heiti Std;
      // padding: .68rem 0 0 4.78rem;
      .active {
        color: rgba(0, 183, 238, 1);
      }
      div {
        width: 2.84rem;
        height: 1.12rem;
        line-height: 0.92rem;
        background-image: url('../assets/imgs/zhihuipaishui/transparent.png');
        background-size: 100% 100%;
        cursor: pointer;
        margin-right: .62rem;
      }
      div:hover {
        color: rgba(0, 183, 238, 1);
      }
    }
    .logOut {
      // width: 1.52rem;
      // height: .46rem;
      padding: .05rem .3rem;
      background: #012a55;
      border: .02rem solid #0094c8;
      position: absolute;
      top: .1rem;
      right: .1rem;
      cursor: pointer;
    }
    .logOut:hover {
      background: rgba(0, 183, 238, 1);
    }

  }
  .content {
    width: 100%;
    height: calc(100% - 2.14rem);
    position: relative;
  }
}
</style>