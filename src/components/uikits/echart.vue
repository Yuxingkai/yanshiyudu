<template>
  <div :style="{width: width,height:height}">
    <div v-show="!hasError" class="echarts" :class="{handClass: hand === 'true' }" :id="domID" :style="{width: width,height:height}" />
    <div v-show="hasError">{{ err }}</div>
  </div>
</template>

<script>
import echarts from 'echarts'
// import 'echarts.min.js'
import { guid } from '../../Utils/Com'
import $ from 'jquery'
// let _ = require('lodash')
export default {
  data () {
    return {
      hasError: false,
      err: '',
      domID: 'd_' + guid(),
      option: null,
      chart: null
    }
  },
  props: {
    width: {
      default: '100%',
      type: String
    },
    height: {
      default: '100%',
      type: String
    },
    config: {
      default: '',
      type: String
    },
    hand: {
      default: 'false',
      type: String
    }
  },
  created: function () {
    this.option = require('../../Utils/EchartConfig/' + this.config).option
  },
  mounted: function () {
    // console.log(this.width, this.height)
    try { 
      if (this.option == null) {
        this.err = '找不到配置信息'
        this.hasError = true
      } else {
        this.hasError = false
        this.chart = echarts.init(document.getElementById(this.domID))
        document.getElementById(this.domID).style.height = '100%'
        this.chart.clear()
        this.chart.setOption(this.option, true)
        this.$forceUpdate()
      }
    } catch (e) {
      this.err = e.message
      this.hasError = true
    }
    $(window).bind('resize', this.resizeB)
  },
  activated () {
    let timer = setTimeout(() => {
      this.raiseSroll()
      clearTimeout(timer)
    }, 400)
    $(window).bind('resize', this.resizeB)
  },
  deactivated () {
    $(window).unbind('resize', this.resizeB)
    this.raiseSroll(false)
  },
  methods: {
    refresh: function () {
      this.chart.setOption(this.option)
    },
    dispatchAction (e) {
      setTimeout(() => {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        this.chart.dispatchAction({
          type: 'highlight', // 选中图例。 原来的legendSelect
          seriesIndex: 0,
          dataIndex: 0
        })
        this.chart.on('mouseout', (params) => {
          console.log('echarts', params)
          this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
        })
        this.chart.on('mouseover', (params) => {
          if (params.name === e[0].name) {
            this.chart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: 0
            })
          } else {
            this.chart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 0
            })
          }
        })
      }, 400)
      this.chart.setOption(this.option)
    },
    resizeB: function () {
      console.log('调用了改变echart自适应')
      let timer1 = setTimeout(() => {
        this.chart.resize()
        console.log('调用了改变echart自适应')
        this.refresh()
        clearTimeout(timer1)
      }, 400)
    }
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  beforeDestory () {
    this.hasError = true
  }
}
</script>

<style scoped>
.echarts {
  height: 100% !important;
}
.echarts div {
  height: 100% !important;
}
</style>
<style>
.handClass > div > canvas {
  cursor: col-resize !important;
}
</style>
