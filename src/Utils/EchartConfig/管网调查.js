export const option = {
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 14
        },
        // formatter:function(params){
        //     let str =  params.name
        //     console.log(params)
        //     return str
        // },
    },
    legend: {
        right: '15%',
        top: '0%',
        textStyle: {
            color: 'white',
            fontSize: 12
        },
        icon: 'square'
    },
    xAxis: {
        type: 'category',
        data: ['检测', '修复'],
        axisLine: {  //这是x轴文字颜色
            lineStyle: {
                color: "#fff",
            }
        },
        axisLabel: {
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {  //这是x轴文字颜色
            lineStyle: {
                color: "#fff"
            }
        }
    },
    grid: {
        left: '3%',
        top: '15%',
        bottom: '3%',
        containLabel: true
    },
    series: [{
        name: '待完成',
        data: [],
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            color: 'rgba(48, 122, 253, 1)'
        },
        // labelLine: {
        //     lineStyle: {
        //         type: 'dotted'
        //     }
        // }
    },{
        name: '已完成',
        data: [],
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            color: 'rgba(222, 183, 3, 1)'
        }
    }]
};