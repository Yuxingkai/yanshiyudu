
export const option = {
    // backgroundColor:'#333',
    legend: [
        {
            orient: 'horizontal',
            x : '60%',
            y : '20%',
            align: 'left',
            data: ['未处理'],
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            textStyle:{
                fontSize: 12,
                color:'#fff'
            }
        },{
            orient: 'horizontal',
            x : '60%',
            y : '40%',
            align: 'left',
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            data: ['已超时'],
            textStyle:{
                fontSize: 12,
                color:'#fff'
            }
        },{
            orient: 'horizontal',
            x : '60%',
            y : '60%',
            align: 'left',
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            data: ['已处理'],
            textStyle:{
                fontSize: 12,
                color:'#fff'
            }
        }
    ],
    color: ['rgb(14, 109, 233)', 'rgb(172, 78, 211)', 'rgb(230, 175, 8)', 'rgb(0, 175, 109)', ' rgb(211, 78, 106)'],
    grid: {
        top: '0',
        left: "50%",
        containLabel: false
        // width: "100%",
        // left: '1%',
        // top: '0',
        // right: '0',
        // bottom: '0'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: true,
            textStyle: {
                color: "#fff",
                fontSize: 16,
            },
            show: true
        },
        data: []
    }],
    xAxis: [{
        show: false
    }],
    series: []
}