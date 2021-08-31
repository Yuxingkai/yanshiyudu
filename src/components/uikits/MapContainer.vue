<template>
  <div
    :id="id"
    style="width:100%;height:100%;"/>
</template>

<script>
import $ from 'jquery'

function newGuid () {
  let guid = ''
  for (let i = 1; i <= 16; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16)
    guid += n
  }
  return 'map_' + guid
}

export default {
  props: {
    z: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      id: newGuid()
    }
  },
  // created: function () {

  // },
  mounted: function () {
    setTimeout(() => {
      this.raiseResizeMsg(true)
    }, 400)
    setTimeout(() => {
      this.raiseResizeMsg(true)
    }, 2000)
    $(window).bind('resize', this.resize)
  },
  destroyed: function () {
    $(window).unbind('resize', this.resize)
    this.raiseResizeMsg(false)
  },
  activated () {
    setTimeout(() => {
      this.raiseResizeMsg(true)
    }, 400)
    setTimeout(() => {
      this.raiseResizeMsg(true)
    }, 2000)
    $(window).bind('resize', this.resize)
  },
  deactivated () {
    $(window).unbind('resize', this.resize)
    this.raiseResizeMsg(false)
  },
  methods: {
    resize: function () {
      setTimeout(() => {
        this.raiseResizeMsg(true)
      }, 400)
      setTimeout(() => {
        this.raiseResizeMsg(true)
      }, 2000)
    },
    raiseResizeMsg: function (show) {
      try {
        let dom = $('#' + this.id)
        let data = {
          path: this.$route.path,
          width: dom.width() || 0,
          height: dom.height() || 0,
          left: 0,
          top: 0,
          z: this.z,
          show: show
        }
        if (dom.offset() !== undefined) {
          data.left = dom.offset().left
          data.top = dom.offset().top
        }
        this.$bus.emit('mapLayoutChanged', data)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
