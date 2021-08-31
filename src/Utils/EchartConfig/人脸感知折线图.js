import echarts from 'echarts'
var fontColor = '#30eee9';
export const option ={
  // backgroundColor:'#000',
  grid: {
    left: '5%',
    right: '10%',
    top:'15%',
    bottom: '0%',
    containLabel: true
  },
  tooltip : {
    show: true,
    trigger: 'item'
  },
  legend: {
    show:true,
    top: 0,
    right: '10',
    icon: 'stack',
    itemWidth:10,
    itemHeight:10,
    textStyle:{
      color:'#1bb4f6'
    },
    data:[]
  },
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      axisLabel:{
        color: fontColor
      },
      axisLine:{
        show:true,
        lineStyle:{
          color:'#397cbc'
        }
      },
      axisTick:{
        show:false,
      },
      splitLine:{
        show:true,
        lineStyle:{
          color:'#195384'
        }
      },
      data :  [
      ]
    }
  ],
  yAxis : [
    {
      type : 'value',
      // name : '信息量',
      axisLabel : {
        formatter: '{value}',
        textStyle:{
          color:'#2ad1d2'
        }
      },
      axisLine:{
        lineStyle:{
          color:'#27b4c2'
        }
      },
      axisTick:{
        show:false,
      },
      splitLine:{
        show:true,
        lineStyle:{
          color:'#11366e'
        }
      }
    },

  ],
  series : [
    {
      name:'居民人员',
      type:'line',
      stack: '总量',
      symbol:'circle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color:'#0092f6',
          lineStyle: {
            color: "#0092f6",
            width:1
          },
          areaStyle: {
            //color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: 'rgba(7,44,90,0.3)'
            }, {
              offset: 1,
              color: 'rgba(0,146,246,0.9)'
            }]),
          }
        }
      },
      markPoint:{
        itemStyle:{
          normal:{
            color:'red'
          }
        }
      },
      data: []
    },
    {
      name:'陌生人员',
      type:'line',
      stack: '总量',
      symbol:'circle',
      symbolSize: 8,

      itemStyle: {
        normal: {
          color:'#00d4c7',
          lineStyle: {
            color: "#00d4c7",
            width:1
          },
          areaStyle: {
            //color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: 'rgba(7,44,90,0.3)'
            }, {
              offset: 1,
              color: 'rgba(0,212,199,0.9)'
            }]),
          }
        }
      },
      data:[]
    },
  ]
};