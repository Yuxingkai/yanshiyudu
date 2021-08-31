import echarts from 'echarts'
export const option = {
  // backgroundColor: "#0f375f",
  legend: {
    data: ["人脸次数", "人数"],
    top: "5%",
    right: '10',
    textStyle: {
      color: "rgba(250,250,250,0.6)",
      fontSize: 14
    }
  },
  barWidth: 8,
  grid: {
    left: '20%',
    right: '15%',
    bottom: '3%',
  },
  xAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,0.2)"
      }
    },
    axisTick: {
      show: false
    },
    axisLine: { //  改变x轴颜色
      lineStyle: {
        color: '#26D9FF'
      }
    },
    axisLabel: { //  改变x轴字体颜色和大小
      textStyle: {
        color: "rgba(250,250,250,0.6)",
        fontSize: 16
      }
    }
  },
  yAxis: {
    type: 'category',
    data: [],
    // data: ['住户人脸次数/人数', '陌生人脸次数/人数', '老人脸次数/人数', '关爱人脸次数/人数','关注人脸次数/人数'],
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: { //  改变y轴颜色
      lineStyle: {
        color: '#26D9FF'
      }
    },
    axisLabel: { //  改变y轴字体颜色和大小
      //formatter: '{value} m³ ', //  给y轴添加单位
      textStyle: {
        color: "rgba(250,250,250,0.6)",
        fontSize: 12
      }
    }
  },
  series: [{
    type: 'bar',
    name: "人脸次数",
    itemStyle: {
      normal: {
        label: {
          show: false, //开启显示
          position: 'right', //在上方显示
          textStyle: { //数值样式
            color: "rgba(250,250,250,0.6)",
            fontSize: 16,
            fontWeight: 600
          }
        },
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
          offset: 0,
          color: 'rgba(61,126,235,1)'
        }, {
          offset: 1,
          color: 'rgba(61,126,235,0)'
        }]),
        borderWidth: 2,
        barBorderRadius:15
      }
    },
    data: [0, 0, 0, 0, 0]
  },
    {
      type: 'bar',
      name: "人数",
      itemStyle: {
        normal: {
          label: {
            show: false, //开启显示
            position: 'right', //在上方显示
            textStyle: { //数值样式
              color: "rgba(250,250,250,0.6)",
              fontSize: 16,
              fontWeight: 600
            }
          },
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: 'rgba(15,197,243,1)'
          }, {
            offset: 1,
            color: 'rgba(15,197,243,0)'
          }]),
          borderWidth: 2,
          barBorderRadius:15
        }
      },
      data: [0, 0, 0, 0, 0]
    }
  ]
};