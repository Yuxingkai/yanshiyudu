import Thost from './thost.vue'

export default {
  extends: Thost,
  computed: {
    style () {
      return {
        position: 'fixed',
        left: '50%',
        top: '5%',
        // transform: 'translate(-50%,-50%)',
        zIndex: '100000000000'
        // bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.creatTimer()
  },
  methods: {
    creatTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    }
  },
  beforeDestory () {
    this.clearTimer()
  },
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      timer: ''
    }
  }
}
