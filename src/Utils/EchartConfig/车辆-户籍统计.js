import {
    getAdapterFont, getEchartNumberColor, getEchartColor, echartXYColor, getBarColor,
  } from '../../Utils/Com'
  import echarts from 'echarts'
  export const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: ''
      },
      backgroundColor:'rgba(255,255,255,0)',//通过设置rgba调节背景颜色与透明度
      formatter: function (datas) {
        console.log(datas)
          let base = "data:image/png;base64,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"
          //背景图片base64 绝对定位
          let bgimg = "<img style='width:1.8rem;height:1.2rem;position: absolute;left: 0;right: 0;top: 0;bottom: 0' src='"+ base +"'/>";
          let res = ''
          let val = ''
          let per = ''
          // console.log(datas)
          for (let i = 0, length = datas.length; i < length; i++) {
            val = datas[i].value
            per = 100*val/datas[i].name.split('_')[1]
            res += '<div style="position: relative;padding: 0.1rem 0.1rem;width:1.8rem;height:1.2rem;">' +
            '<p style="padding-left:0.2rem;margin:0;font-size: .24rem;text-align: left;color: #00F9FC;font-family: "HY55";font-weight:bold;">' + datas[i].name.split('_')[0] + '</p >' + '<p style="position: absolute;left: 0.3rem;bottom:0.55rem;font-size: .24rem;text-align: left;color: #00F9FC;font-family: "DINBOLD";font-weight: bold;">' + (val).toLocaleString() + '<span style="padding-left: 0.1rem;"> ' + parseFloat(per.toFixed(2))+'%'+ '</span >' + '</p >'
            + bgimg + '</div >'
          }
          return res
        },
        // eslint-disable-next-line
        position: function (point, params, dom, rect, size) {
          // 固定在顶部
          return [point[0]-40, -10];
        },
        "rich": {
          "a": {
              "color": "#999",
              "lineHeight": 22,
              "align": "center"
          },
          "c": {
              "fontSize": 12,
              "color": "#C9E7FF",
              fontFamily: "DINBOLD",
                padding:  [5,0,0,8]
          },
          "per": {
              "color": "#C9E7FF",
              fontFamily: "DINBOLD",
              "fontSize": 12,
              "padding": [5, 0,0,0],
              "borderRadius": 2
          }
      },
  },
    grid: {
      left: '10%',
      right: '3%',
      bottom: '20%',
      top: '20%',
      // containLabel: false
    },
    dataZoom : [
      // {
      //   type: 'slider',
      //   show: true,
      //   start: 0,
      //   end: 30,
      //   height: 12,
      //   bottom: '5%',
      //   borderColor: 'transparent',
      //   handleSize: 4,
      // },
      // {
      //   type: 'inside',
      //   start: 0,
      //   end: 30,
      // }
      {
        show: false,
        startValue: 0,
        endValue: 9,
      },
      {
        type: 'inside',
        start: 0,
        // startValue: 1,
        // endValue: 5,
        zoomLock: true,
        height: 10,
        width: '90%',
        left: '5%',
        bottom: '0%',
        handleSize: 10,
        backgroundColor: 'none',
        borderColor: 'none',
        showDetail: false,
        fillerColor: 'rgba(255,255,255,.06)'
      }
    ],
    xAxis: {
      show: true,
      triggerEvent: false,
      type: 'category',
      // rotate: -90,
      interval: 1,
      axisLabel: {
        show: true,
        interval: 0,
        textStyle: {
          fontSize: getAdapterFont(6),
          color: getEchartColor
        },
        formatter: function (val) {
          let value = val.split('_')[0]
          let info = ''
          if (value && value.length > 2) {
            info = value.substring(0, 2) + ' ...'
          } else {
            info = value
          }
          return info
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: echartXYColor
        }
      },
      axisTick: {
        show: false,
        inside: true
      },
      boundaryGap: true,
      data: []
    },
    yAxis: {
      show: true,
      minInterval: 1,
      type: 'value',
      axisLabel: {
        show: true,
        interval: 0,
        textStyle: {
          fontSize: getAdapterFont(6),
          color: getEchartNumberColor
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: echartXYColor
        }
      },
      axisTick: {
        show: false,
        inside: true
      },
      // 动态调整
      // interval: 50,
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgb(41,72,127,0.5)'
        },
        showMaxLabel: true
      }
    },
    series: [{
      name: '人数',
      type: 'bar',
      barGap: 0.4,
      barWidth: 8,
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: getBarColor[0]},
              {offset: 1, color: getBarColor[1]}
            ]
          )
        }
      },
      emphasis: {
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: getBarColor[2]},
              {offset: 1, color: getBarColor[3]}
            ]
          )
        }
      },
      data: [0,0,0]
    }]
  }
  