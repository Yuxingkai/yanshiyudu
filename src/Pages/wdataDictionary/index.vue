<template>
  <div class="userContainer">
     <!-- <List/> -->
     <div class="left">
        <div class="left_menu">
          工程管理
        </div>
        <div class="left_menu_son" :class="{active: nowIndex === index}" v-for="(item, index) in menus" :key="index" @click="selectList(item, index)">
          {{ item.name }}
        </div>
        <div class="left_menu" @click="chooseDict">
          数据字典
        </div>
        <!-- <div class="left_menu_son" :class="{active: nowIndex === index}" v-for="(item, index) in menus" :key="index" @click="selectList(item, index)">
          {{ item.name }}
        </div> -->
      </div>
      <div class="right">
        <div class="Breadcrumb1">
          <img src="../../assets/imgs/zhihuipaishui/usermanage/breadline.png" alt="">
          <span>&nbsp;&nbsp;{{ firstName }}/{{ name }}</span>
        </div>
         <component :is="componentName"></component> <!-- 动态组件-->
      </div>
  </div>
</template>
<script>
import xmList from './component/xmList'
import gcList from './component/gcList'
import roadList from './component/roadList'
 import List from './component/list'
export default {
  name: 'wdataDictionary',
  components: {
    List,
    xmList,
    gcList,
    roadList
  },
  data() {
    return {
        componentName: 'xmList',
        menus: [
          {
              name: '项目列表',
              id: 'xmList'
          },
          {
              name: '工程列表',
              id: 'gcList'
          },
          {
              name: '道路-小区列表',
              id: 'roadList'
          }
        ],
        firstName: '工程管理',
        name: '用户列表',
        nowIndex: 0,
      }
  },
  mounted() { 
    // this.updateMenus()
  },

  watch: {
  },
  created() {
  },
  methods: {
    chooseDict () {
      this.componentName = 'list'
      this.name = ''
      this.firstName = '数据字典'
    },
    updateMenus () {
      // let routes = JSON.parse(window.localStorage.getItem('addRoutes'))
      // routes = routes.filter((item) => {
      //     return item.path === '/usermanage'
      // })
      // let childArr = routes[0].children
      // childArr.forEach(element => {
      //   if (element.path == '/userlist') {
      //       this.menus.push({
      //           name: '用户列表',
      //           id: 'userList'
      //       })
      //   } else if (element.path == '/rolelist') {
      //       this.menus.push({
      //           name: '角色列表',
      //           id: 'roleList'
      //       })
      //   } else if (element.path == '/menulist') {
      //       this.menus.push({
      //           name: '菜单列表',
      //           id: 'menuList'
      //       })
      //   }
      // });
      this.componentName = this.menus[0].id
      this.selectList(this.menus[0],0)
    },
    selectList (item, index) {
      this.componentName = item.id;
      this.name = item.name
      this.firstName = '工程管理'
      this.nowIndex = index
    },
  },
  beforeDestroy() {
  }
}
</script>
<style scoped lang='scss'>
.userContainer {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/imgs/zhihuipaishui/background.png');
    background-size: 100% 100%;
    display: flex;
    .left {
      width: 7.42rem;
      padding-left: .56rem;
      .left_menu {
        width: 7.42rem;
        height: 1.76rem;
        background-image: url('../../assets/imgs/zhihuipaishui/usermanage/list1.png');
        background-size: 100% 100%;
        font-size: .48rem;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: 1.4rem;
        text-align: left;
        text-indent: 1.9rem;
        margin-top: .2rem
      }
      .left_menu_son {
        width: 7.42rem;
        height: 1.5rem;
        margin-top: -0.28rem;
        background-image: url('../../assets/imgs/zhihuipaishui/usermanage/listsmall.png');
        background-size: 100% 100%;
        font-size: .4rem;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: 1.2rem;
        cursor: pointer;
      }
      .active {
        width: 7.42rem;
        height: 1.5rem;
        margin-top: -0.28rem;
        background-image: url('../../assets/imgs/zhihuipaishui/usermanage/menuActive.png');
        background-size: 100% 100%;
        font-size: .4rem;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: 1.2rem;
        cursor: pointer;
      }
    }
    .right {
      flex: 1;
      background-image: url('../../assets/imgs/zhihuipaishui/rightBack.png');
      background-size: 100% 100%;
      .Breadcrumb1 {
        width: 29.46rem;
        height: 1.24rem;
        background: #043870;
        margin-left: .38rem;
        margin-top: .2rem;
        text-align: left;
        line-height: 1.24rem;
        img {
          width: .32rem;
          height: .28rem;
          margin-left: .46rem;
        }
  }
    }
}
</style>