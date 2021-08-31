

// function array2obj(array, key) {
//     let resObj = {};
//     for (let i = 0; i < array.length; i++) {
//         resObj[array[i][key]] = array[i];
//     }
//     return resObj;
// }



// var objData = array2obj(data, "name");

import echarts from 'echarts'
export const option = {
    // backgroundColor:'#333',
    legend: [
        {
            // orient: 'horizontal',
            x : '50%',
            y : '20%',
            align: 'left',
            data: [],
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            textStyle:{
                fontSize: 12,
                color:'#fff',
                rich: {
                    uname: {
                        width: 100,
                        // align: 'left',
                        color: '#C9E7FF'
                    },
                    unum: {
                        fontFamily: "DINBOLD",
                        fontSize: 18,
                        color: '#00D7E4'
                    },
                    unum2: {
                        fontSize: 10,
                        fontFamily: "HY55",
                        color: '#FFD99A'
                    }
                },
            },
            formatter: function(params) {
                console.log(params)
                let name = params.split('-')[0]
                let total = params.split('-')[1]
                let off = params.split('-')[2]
                let res = ''
               res =  '{uname|'+ name +'}' + '{unum|'+ total +' / ' +'}' + '{unum2|'+ '离线'+ off +'}'
                return res 
            }

        },
        {
            // orient: 'horizontal',
            x : '50%',
            y : '40%',
            align: 'left',
            data: [],
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            textStyle:{
                fontSize: 12,
                color:'#fff',
                rich: {
                    uname: {
                        width: 100,
                        // align: 'left',
                        color: '#C9E7FF'
                    },
                    unum: {
                        fontFamily: "DINBOLD",
                        fontSize: 18,
                        color: '#00D7E4'
                    },
                    unum2: {
                        fontSize: 10,
                        fontFamily: "HY55",
                        color: '#FFD99A'
                    }
                },
            },
            formatter: function(params) {
                let name = params.split('-')[0]
                let total = params.split('-')[1]
                let off = params.split('-')[2]
                let res = ''
               res =  '{uname|'+ name +'}' + '{unum|'+ total +' / ' +'}' + '{unum2|'+ '离线'+ off +'}'
                return res 
            }

        },
        {
            // orient: 'horizontal',
            x : '50%',
            y : '60%',
            align: 'left',
            data: [],
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            textStyle:{
                fontSize: 12,
                color:'#fff',
                rich: {
                    uname: {
                        width: 100,
                        // align: 'left',
                        color: '#C9E7FF'
                    },
                    unum: {
                        fontFamily: "DINBOLD",
                        fontSize: 18,
                        color: '#00D7E4'
                    },
                    unum2: {
                        fontSize: 10,
                        fontFamily: "HY55",
                        color: '#FFD99A'
                    }
                },
            },
            formatter: function(params) {
                let name = params.split('-')[0] 
                let total = params.split('-')[1]
                let off = params.split('-')[2]
                let res = ''
               res =  '{uname|'+ name +'}' + '{unum|'+ total +' / ' +'}' + '{unum2|'+ '离线'+ off +'}'
                return res 
            }

        },
        {
            // orient: 'horizontal',
            x : '50%',
            y : '80%',
            align: 'left',
            data: [],
            icon: "circle",
            itemWidth: 10,
            itemHeight:10,
            textStyle:{
                fontSize: 12,
                color:'#fff',
                rich: {
                    uname: {
                        width: 100,
                        // align: 'left',
                        color: '#C9E7FF'
                    },
                    unum: {
                        fontFamily: "DINBOLD",
                        fontSize: 18,
                        color: '#00D7E4'
                    },
                    unum2: {
                        fontSize: 10,
                        fontFamily: "HY55",
                        color: '#FFD99A'
                    }
                },
            },
            formatter: function(params) {
                console.log(params)
                let name = params.split('-')[0]
                let total = params.split('-')[1]
                let off = params.split('-')[2]
                let res = ''
               res =  '{uname|'+ name +'}' + '{unum|'+ total +' / ' +'}' + '{unum2|'+ '离线'+ off +'}'
                return res 
            }

        },
        // {
        //     // orient: 'horizontal',
        //     x : '55%',
        //     y : '40%',
        //     align: 'left',
        //     icon: "circle",
        //     itemWidth: 10,
        //     itemHeight:10,
        //     data: ['处理中'],
        //     textStyle:{
        //         fontSize: 12,
        //         color:'#fff'
        //     }
        // },{
        //     // orient: 'horizontal',
        //     x : '55%',
        //     y : '60%',
        //     align: 'left',
        //     icon: "circle",
        //     itemWidth: 10,
        //     itemHeight:10,
        //     data: ['已处理'],
        //     textStyle:{
        //         fontSize: 12,
        //         color:'#fff'
        //     }
        // }
    ],
    color: [
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#00E2F1'
    }, {
        offset: 0.5,
        color: '#00E2F1'
    }, {
        offset: 1,
        color: '#00E2F1'
    }]), 
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#AF61D1'
    }, {
        offset: 0.5,
        color: '#AF61D1'
    }, {
        offset: 1,
        color: '#AF61D1'
    }]), 
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#B0EA58'
    }, {
        offset: 0.5,
        color: '#B0EA58'
    }, {
        offset: 1,
        color: '#B0EA58'
    }]), 
],
    grid: {
        top: '0',
        left: "20%",
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