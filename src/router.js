import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Main from './Pages/Main.vue'
Vue.use(Router)



//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/index',
      component: Main,
      children: [
        {
          path: '/index',
          name: 'index',
          redirect: '/home',
          component: () =>
            import(/* webpackChunkName: "home" */ './Pages/Home/index.vue'),
          meta: {
            keepAlive: true
          },
          // children: [
          //   {
          //     path: '/home',
          //     name: 'home',
          //     component: () =>
          //       import(/* webpackChunkName: "home" */ './Pages/Home/home.vue'),
          //     meta: {
          //       keepAlive: true
          //     }
          //   }
          // ]
        },
        {
          path: '/pjManagement',
          name: 'pjManagement',
          component: () =>
          import(/* webpackChunkName: "home" */ './Pages/projectManagement'),
          children: [
            {
              path: '/pjManagement',
              name: 'pjManagement',
              components: {
                left: () => import('./Pages/projectManagement/components/left.vue'),
                right: () => import('./Pages/projectManagement/components/right.vue'),
              },
            }
          ],
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/ppline',
          name: 'ppline',
          component: () =>
            import(/* webpackChunkName: "home" */ './Pages/projectManagement'),
          children: [
            {
              path: '/ppline',
              name: 'ppline',
              components: {
                left: () => import('./Pages/pipelineCoordination/components/left.vue'),
                right: () => import('./Pages/pipelineCoordination/components/updateRight.vue'),
              },
            },
            {
              path: 'ppline2',
              name: 'ppline2',
              components: {
                left: () => import('./Pages/pipelineCoordination/components/left.vue'),
                right: () => import('./Pages/pipelineCoordination/components/jiaohe.vue'),
              },
            },
            {
              path: 'ppline3',
              name: 'ppline3',
              components: {
                left: () => import('./Pages/pipelineCoordination/components/left.vue'),
                right: () => import('./Pages/pipelineCoordination/components/suyuan.vue'),
              },
            },
          ],
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/psLisence',
          name: 'psLisence',
          component: () =>
            import(/* webpackChunkName: "home" */ './Pages/psLisence'),
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/deviceOperation',
          name: 'deviceOperation',
          component: () =>
            import(/* webpackChunkName: "home" */ './Pages/deviceOperation'),
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/wdatadics',
          name: 'wdataDictionary',
          component: () =>
            import(/* webpackChunkName: "home" */ './Pages/wdataDictionary'),
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/usermanage',
          name: 'userManage',
          component: () =>
            import(/* webpackChunkName: "home" */ './Pages/userManage'),
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/login',
      component: () =>
        import(/* webpackChunkName: "login" */ './Pages/Home/login.vue'),
      meta: {
      }
    },
    {
      path: '/spaceConfig',
      component: () =>
        import(/* webpackChunkName: "login" */ './Pages/Home/spaceConfig.vue'),
      meta: {
      }
    },
    // {
    //   path: '*',
    //   component: () =>
    //     import(/* webpackChunkName: "404" */ './PubCompents/404.vue'),
    //   meta: {
    //     title: '404'
    //   }
    // }
    // {
    //   path: '/gateDetail',
    //   component: () =>
    //     import(/* webpackChunkName: "404" */ './customize/yuzhongqu/gateDetail.vue'),
    //   meta: {

    //   }
    // }

  ]
})
router.beforeEach((to, from, next) => {
  if (from.path !== '/') {
    NProgress.start()
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // let addRoutes = window.localStorage.getItem('addRoutes')
  // next()
  const isLogin = window.localStorage.getItem('token')
  if (!isLogin && to.path !== '/login') {
    next('/login')
    NProgress.done()
  } else {
    //检验token是否为真
    // get(apiNames['获取全部权限'],{},{
    //   headers: {'Authorization': "Bearer " + window.localStorage.getItem('user-token')
    //   }}
    // ).then(res=> {
    //   console.log(res)
    // }).catch(
    //   err =>{
    //     next('/login')
    //   }
    // )
    next()
  }
})
// 路由完成之后的操作
router.afterEach(() => {
  NProgress.done()
  window.scrollTo(0, 0)
  // if (isLogin() && route.path === '/login') {
  //   message.warning('您已经登录,如需切换账号,请先退出此账号', 0.5, () => {
  //     router.push({ path: '/main/search/face' })
  //   })
  // }
})
export default router