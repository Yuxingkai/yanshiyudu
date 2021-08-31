
// import echarts from 'echarts'
/* eslint-disable */


 
// 指定图表的配置项和数据
// var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
// var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
// var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];

// var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
export const option = {
    color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: { color: '#C9E7FF',},
        top: '0%',
        right: '3%',
        data: ['自住房', '出租房', '空置房'],
    },
    grid: { //图表的位置
        left: '2%',
        right: '4%',
        bottom: '0',
        top:'6%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#162551'
            }
        },
        axisLine: {
            show: false,
            color: '#29487F',
        },
        axisLabel: {
            color: '#C9E7FF',
            fontSize:12,
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            color: '#C9E7FF',
            textStyle: {
                fontSize: 10,
            },
            margin: 6,
            rotate: 40,

        },
        axisTick: {
            show: false
        },
        data: [],
    }],
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
    series: [{
            name: '自住房',
            type: 'bar',
            stack: 'sum',
            barWidth: '10px',
            data: []

        },
        {
            name: '出租房',
            type: 'bar',
            barWidth: '10px',
            stack: 'sum1',
            data: [],

        },
        {
            name: '空置房',
            type: 'bar',
            color: '#FFD52E',
            stack: 'sum1',
            barWidth: '10px',
            data: []

        },
    ]
};