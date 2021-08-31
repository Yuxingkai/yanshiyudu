
import echarts from 'echarts'
 
// var chartData = [762,737,634,530,426,323];
// var chartName = ['田林街道','徐家汇','洋泾街道','陆家嘴','洋泾街道'];

// var max = Math.max.apply(null,option.series[1].dat);
// var emptyData = option.series[1].data.map(function(v) {
//     var item = {
//         value: max,
//         label: {   //右边数值
//             formatter: '{a|' + v + '}',
//             position: 'right',
//             verticalAlign: "top",
//             rich: {
//                 a: {
//                     color:'#00F9FC',
//                     fontSize: 12,
//                     padding:[5, 10]
//                 }
//             }
//         }
//     }
//     return item
// })

export const option = {
    // backgroundColor: '#061330',
    // tooltip: {
    //     show: false,
    //     trigger: 'item',
    //     formatter: function(params,){
    //         var res = "";
    //         var name = chartName[params.dataIndex];
    //         var value =chartData[params.dataIndex]
    //         res = name + "<br />访问量：" + value;
    //         return res;
    //     },
    // },
    grid: {
        top: '10%',
        right: '10%',
        left: '8%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        show: true,
        // inverse: true,
        data:[],
        axisTick:{       //y轴刻度线
           show:false
        },
        axisLabel: {
            formatter: '{value}',
            color: '#C9E7FF',
            fontSize:12,
            show: false
        },
        axisLine: {
            show:true,
            color: '#29487F'
        },
        splitLine: {
            show:false
        },
    }],
    yAxis: [
        {
            type: "category",
            name: "",
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                verticalAlign: "top",
                show: true,
                color: '#C9E7FF',
                fontSize:12,
            },
            axisLine: {
                show: true,
                color: '#29487F',
            },
            // inverse: true,
            data: []
        }
    ],
    
    series: [
           {
            type: 'bar',
            barWidth: '8',
            silent:true,
            itemStyle: {
                normal: {
                    color: 'rgba(7, 36, 74, 0)',
                    barBorderRadius: [0,20],
                }
            },
            label: {
                show:true,
            },
            data: []
        },{
            show: true,
            // inverse: false,
            type: 'bar',
            barWidth: '8',
            z: 2,
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#347ce9' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#28c3db' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [0,20,20,0],
                }
            },
            data: [],
           }
    ]
};
