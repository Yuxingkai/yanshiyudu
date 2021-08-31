
import echarts from 'echarts'

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 0,
        shadowColor: '#203665'
    }
};
export const option = {
    // backgroundColor: "#20263f",
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [27,30],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['20%', '50%'],
        startAngle: 270, //起始角度
        data: [{
            value: 22222,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#3a7ad5',
                            align: 'center',
                            fontSize: 22,
                            fontFamily: "DINBOLD",
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#BAD2E5',
                            align: 'center',
                            fontFamily: "HY65",
                            fontSize: 12
                        }
                    },
                    formatter: function(params){
                        return "{b|当前驻留}\n\n"+"{a|"+params.value+"}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'normal',
                        color: '#C9E7FF'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:  'rgba(128, 128, 128, 0)',
                    shadowColor: '#00D9E9',
                    shadowBlur: 0
                }
            }
        }, {
            value: 22075,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#1BF8FF'},
                            // {offset: 0.5, color: '#0CB9FF'},11336E
                            {offset: 1, color: '#11336E'}
                        ]
                    )
                },
            }
        }]
    }, {
        name: '第二个圆环',
        type: 'pie',
        clockWise: false,
        radius: [35, 40],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '50%'],
        startAngle: 270, //起始角度
        data: [{
            value: 52210,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#3a7ad5',
                            align: 'center',
                            fontSize: 22,
                            fontFamily: "DINBOLD",
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#BAD2E5',
                            align: 'center',
                            fontFamily: "HY65",
                            fontSize: 12
                        }
                    },
                    formatter: function(params){
                        return "{b|居民驻留}\n\n"+"{a|"+params.value+"}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:  'rgba(128, 128, 128, 0)',
                    shadowColor: '#00D9E9',
                    shadowBlur: 0
                }
            }
        }, {
            value: 50900,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#1BF8FF'},
                            // {offset: 0.5, color: '#0CB9FF'},11336E
                            {offset: 1, color: '#11336E'}
                        ]
                    )
                },
            }
        }]
    }, {
        name: '第三个圆环',
        type: 'pie',
        clockWise: false,
        radius: [35, 40],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['80%', '50%'],
        startAngle: 270, //起始角度
        data: [{
            value: 75334,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#3a7ad5',
                            align: 'center',
                            fontSize: 22,
                            fontFamily: "DINBOLD",
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#BAD2E5',
                            align: 'center',
                            fontFamily: "HY65",
                            fontSize: 12
                        }
                    },
                    formatter: function(params){
                        return "{b|陌生人}\n\n"+"{a|"+params.value+"}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0)',
                    shadowColor: '#00D9E9',
                    shadowBlur: 0
                }
            }
        }, {
            value: 25123,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#1BF8FF'},
                            // {offset: 0.5, color: '#0CB9FF'},11336E
                            {offset: 1, color: '#11336E'}
                        ]
                    )
                }, 
            }
        }]
    }]
}