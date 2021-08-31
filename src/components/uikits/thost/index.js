import Thost from './thost.vue'
import Thosts from './function'
const thost = {
  install: (Vue) => {
    Vue.component(Thost.name, Thost)
    Vue.prototype.$newthost = Thosts
  }
}
export default {
  thost
}
