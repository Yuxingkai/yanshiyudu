// import { getAdapterFont, getPieColor, echartsTooltipBG, echartsTooltipSt } from '../Com'
// import echarts from 'echarts'

// let list = [{
//     name: '通行设备',
//     value: 16,
//     value1: 1236,
//     value2: 333,
// }, {
//     name: '监控设备',
//     value: 6,
//     value1: 11112,
//     value2: 333,
// }, {
//     name: '物联设备',
//     value: 19,
//     value1: 38924,
//     value2: 333,
// }
// ];
// let data = ['通行设备'];
// let values = [16, 1, 3];


export const option = {
// backgroundColor:'balck',
  xAxis: {
    max: 40,
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
  },
  grid: {
    containLabel: true,
    left: '0px', // 距离dom间距
    right: '0px',
    top: '7%',
    bottom: '1%',
  },
  yAxis: [{
    data: [],
    inverse: true,
    type: "category",

    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      // margin: 30,
      // position: 'top',
      verticalAlign: "bottom",
      align: "left",
      padding: [0, 10, 10, 10],
      inside:false,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      },
    }
  }],
  series: [{ //内
    type: 'bar',
    barWidth: 8,
    // barGap:'180%',
    legendHoverLink: false,
    symbolRepeat: true,
    silent: true,
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: '#1C5A9E' // 0% 处的颜色
        }, {
          offset: 1,
          color: '#07FE78' // 100% 处的颜色
        }]
      }
    },
    data: [
      {
        name: '通行设备',
        value: 20,
        value1: 20,
        value2: 10,
      }
    ],
    z: 1,
    animationEasing: 'elasticOut'
  },
    {
      type: 'pictorialBar',
      animationDuration: 0,
      symbolRepeat: 'fixed',
      symbolMargin: '15%',
      symbol: 'roundRect',
      symbolSize: [6, 10],
      symbolBoundingData: 40,
      itemStyle: {
        normal: {
          color: '#12272A',

        }
      },
      label: {
        normal: {
          show: false,
          // position: ['230px', '-4px'],//右边数字
          position: 'right',
          align: 'right',
          verticalAlign: 'bottom',
          padding: [0, 36, 15, 0],
          offset: [0, 2],
          distance: 30,
          textStyle: {
            color: '#C9E7FF',
            fontSize: 14,
            // verticalAlign: 'middle',
          },
          // formatter: '{b|{c}}' + '|' + '' +'离线',//c是数值
          // formatter:function(params){
          //   let str =  '{a|'+ params.data.value1 +'}' + '|' +'{b|'+ params.data.value2 +'}' +'{c| '+ '离线' +'}'
          //   // console.log(params)
          //   return str
          // },
          rich: {
            a: {
              color: '#C9E7FF',
              // display: 'inline-block',
              // height: 15,
              // backgroundColor: 'blue',
              align: 'center',
              verticalAlign: 'center',
              fontSize: 14,
              fontFamily: "DINBOLD",
            },
            b: {
              color: '#E3D41A',
              // height: '20',
              // backgroundColor: 'blue',
              align: 'center',
              verticalAlign: 'center',
              fontSize: 14,
              fontFamily: "DINBOLD",
            },
            c: {
              color: '#C9E7FF',
              fontSize: 12,
              fontFamily: "HY55",
              // display: 'inline-block',
              // height: 15,
              // backgroundColor: 'blue',
              height: 18,
              lineHeight: 10,//反向尝试
              verticalAlign: 'bottom'
            },
          }
        },

      },
      data: [
        {
          name: '通行设备',
          value: 20,
          value1: 20,
          value2: 0,
        }
      ],
      z: 0,
      animationEasing: 'elasticOut'
    },
    { //分隔
      type: 'pictorialBar',
      itemStyle: {
        color: '#000'
      },
      symbolRepeat: 'fixed',
      symbolMargin: '2',
      symbol: 'roundRect',
      symbolClip: true,
      symbolSize: [2, 10],
      symbolPosition: 'start',
      symbolOffset: [0, 0],
      symbolBoundingData: 20,
      data: [
        {
          name: '通行设备',
          value: 20,
          value1: 20,
          value2: 10,
        }
      ],
      z: 2,
      animationEasing: 'elasticOut'
    }
  ]
};