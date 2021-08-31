import { getAdapterFont, getPieColor, echartsTooltipBG, echartsTooltipSt } from '../Com'
// import echarts from 'echarts'
export const option = {
  title: {
    text: '',
    subtext: '',
    textStyle: {
      color: '#FFD78A',
      fontSize: getAdapterFont(8),
    },
    subtextStyle: {
      fontSize: getAdapterFont(8),
      color: ['#4BD3FF']
    },
    x: 'center',
    y: '45%',
  },
  tooltip: {
    backgroundColor: echartsTooltipBG,
    extraCssText: echartsTooltipSt,
    trigger: 'item',
    // formatter: "{a} <br/>{b}:({d}%)"
    formatter: '<p style="color:#fff;padding:0 5px;font-size: .32rem"> {b}:{c} 人({d}%) </p >',
    // position: function (point, params, dom, rect, size) {
    //   // 固定在顶部
    //   return [point[0], '10%'];
    // }
  },
  grid: {
    bottom: '0',
    left: '0',
    top: '0%',
    right: '10%'
  },
  series: [
    // 主要展示层的
    {
      radius: ['68%', '80%'],
      center: ['50%', '50%'],
      type: 'pie',
      color: getPieColor,
      hoverAnimation: true,
      hoverOffset: 1,
      // minAngle: 10,
      clockwise: false,
      cursor: 'default',
      // roseType : 'radius',
      label: {
        normal: {
          show: true,
          // formatter: [
          //     '{a|{b}}',
          //     '{b|{c}   {d}%}'
          // ].join('\n'),
          formatter: '{b}: {d}%',
          padding: [0, 10],
          textStyle: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: getAdapterFont(7),
            align: 'center'
          },
          position: 'outside',
          rich: {
            a: {
              fontSize: getAdapterFont(7),
              lineHeight: getAdapterFont(14),
              align: 'left',
              color: 'rgba(255, 255, 255, 0.6)'
            },
            b: {
              fontSize: getAdapterFont(8),
              align: 'left',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'dingular'
            }
          }
        },
        emphasis: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true,
          length: getAdapterFont(2),
          length2: getAdapterFont(2)
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        // shadowColor: 'rgba(0, 0, 0, .4)',
        // shadowBlur: 20
      },
      name: '人员比例占比',
      data: [{
        name: '20岁以下',
        value: 0
      }, {
        name: '20岁到40岁',
        value: 0
      }, {
        name: '40岁到60岁',
        value: 0
      }, {
        name: '60岁以上',
        value: 0
      }],
    },
  ]
}
