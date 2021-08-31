// var value = [165];
// var value1 = [0.25];
// var max1 = Math.max.apply(null,value) * 1.2;
// var data1 = [];
//
// //data1存放背景条的数值，for循环使其数量与value一致
// // for (var i = value.length - 1; i >= 0; i--) {
// //   data1.push(max1);
// // };
// export const option = {
//   grid: {
//     left: "-25%",
//     top: "5%",
//     bottom: "5%",
//     right: "5%",
//     containLabel: true
//   },
//   xAxis: {
//     type: 'value',
//     // max : max1,
//     splitLine: {
//       show: false,
//     },
//     axisLine: {
//       show: false,
//     },
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       show: false
//     }
//   },
//   yAxis: {
//     type: 'category',
//     splitLine: {
//       show: false,
//     },
//     axisLine: {
//       show: false,
//     },
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       show: true,
//       interval: 0,
//       margin: 0,
//       align: 'left',
//       padding: [-30, 0, 0, 0],
//       textStyle: {
//         color: '#ffffff',
//         fontSize: 16
//       }
//     },
//     data : ['居民通行']
//   },
//   series: [{
//     //真实数值的条形图主体
//     name: '真实值',
//     type: 'bar',
//     animation: false,
//     barWidth: '15%',
//     label: {
//       show: false,
//       position: 'insideLeft',
//       padding: [50, 0, 0, -15],
//       distance: 15,
//       //color: co1,
//       // formatter: function(params) {
//       //     //console.info(params);
//       //     if (value1[params.dataIndex] < 0) {
//       //                         return '{a|较上年}{b|'  + (value1[params.dataIndex]*100).toFixed(0) + '%}';
//       //                     } else {
//       //                         return '{a|较上年}{c|+'  + (value1[params.dataIndex]*100).toFixed(0) + '%}';
//       //                     }
//       // },
//       rich: {
//         a: {
//           fontSize: 12,
//           color:'#fff',
//           //padding: [20, -30, 0, -30],
//         },
//         b: {
//           fontSize: 12,
//           color:'#13C2C2',
//           fontWeight:'bold',
//           padding: [0, 0, 0, 15],
//         },
//         c: {
//           fontSize: 12,
//           color:'#FF4242',
//           fontWeight:'bold',
//           padding: [0, 0, 0, 15],
//         }
//       }
//     },
//     itemStyle: {
//       normal: {
//         barBorderRadius:[0, 20, 20, 0],
//         color: {
//           x: 0,
//           y: 0,
//           x2: 1,
//           y2: 0,
//           colorStops: [{
//             offset: 0,
//             color: 'rgba(2,50,147,1)' // 0% 处的颜色
//           }, {
//             offset: 1,
//             color: 'rgba(36,237,255,1)' // 100% 处的颜色
//           }],
//         }
//       }
//     },
//     data : [200],
//     z:1
//   },{
//     //辅助3：背景条
//     name: '背景条',
//     type: 'bar',
//     animation: false,
//     barGap: '-100%',
//     barWidth: '15%',
//     label: {
//       show: true,
//       position: 'insideRight',
//       padding: [0, 0, 0, 0],
//       distance: 15,
//       color: '#fff',
//       formatter: function(params) {
//         //console.info(params);
//         return ' ' + value[params.dataIndex].toFixed(0);
//       }
//     },
//     itemStyle: {
//       normal: {
//         color: 'rgba(62,78,123,1)'
//       }
//     },
//     data : value[0],
//     z:0
//   }]
// }
import echarts from 'echarts'
// var data = [{
//   name: '频繁停电户数',
//   value: 110,
// }];
// var backGroundData = [],
//   nameData = [],
//   valueData = [],
//   maxValue = 0,
//   len = data.length;
// for (var i = 0; i < len; i++) {
//   if (data[i].value > maxValue) {
//     maxValue = data[i].value;
//   }
// }
// for (var j = 0; j < len; j++) {
//   // backGroundData.push(110 * 1.1);
//   nameData.push(data[j].name);
//   valueData.push(data[j].value);
// }

export const option = {
  // backgroundColor:'#070931',
  grid: {
    left: '10%',
    right:'5%',
    top: '35%',
    bottom: '25%',
  },
  tooltip: {
    show: false,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: '{b}：{c}',
    textStyle: {
      fontSize: "20"
    }
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel:{
      show:false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    // axisLabel: {
    //   show: false
    // },
    axisLabel: {
      show: true,
      interval: 0,
      margin: 0,
      align: 'left',
      padding: [-30, 0, 0, 0],
      textStyle: {
        color: '#ffffff',
        fontSize: 12
      },
      // formatter: function(param) {
      //   return param.split('_')[0]
  
      // },
    },
    data: []
  },
  series: [{
    barWidth: 8,
    z: 10,
    itemStyle: {
      color:function(params){
        if(params.name == '居民通行'){
          return  new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [{
              offset: 0,
              color: '#f05f1c' /*#0085FA*/
            }, {
              offset: 0.7,
              color: '#e9ea07' /*#00BBFD*/
            }])
        }else{
          return  new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [{
              offset: 0,
              color: '#0078FF' /*#0085FA*/
            }, {
              offset: 0.7,
              color: '#00E0FF' /*#00BBFD*/
            }])
        }
      },
      barBorderRadius: 15
    },
    // label: {
    //   show: true,
    //   position: ['90%', "-100%"],
    //   fontSize: 18,
    //   color:'#fff',
    //   offset: [-2, -30],
    //   rich:{
    //     a:{
    //       color:'#00FFFF',
    //       fontSize:15
    //     },
    //     b:{
    //       color:'#C9E7FF',
    //       fontSize:16
    //     }
    //   },
    // },
    type: 'bar',
    data: []
  },
    {
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      animation: false,
      z: -1,
      itemStyle: {
        color: 'rgba(42,41,71,.5)',
        barBorderRadius: 15
      },
      data: []
    }
  ]
};