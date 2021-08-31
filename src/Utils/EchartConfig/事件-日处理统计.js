import echarts from 'echarts'


let color = [
    "#4E76FF",
    "#00F1FE"
];


// let yAxisData1 = [10, 18, 30, 17, 10, 10, 10, 100];
// let yAxisData2 = [23, 23, 100, 10, 19, 23, 20, 10];

const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

export const option = {
    // backgroundColor: '#fff',
    color: color,
    legend: {
      icon: 'rect',
      top: '5%',
      right: '5%',
      itemWidth: 12,
      itemHeight: 4,
      itemGap: 20,
      textStyle: {
          color: '#556677'
      }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
                fontSize: 14,
                fontFamily: "DINBOLD",
                color: "#c9e7ff",
            },
        },
        formatter:  '<p style="color:#fff;padding:0 5px;font-size: .32rem">{c}</p >',
    },
    grid: {
        left: '25px',
        top: '35px',
        right: '20px',
        bottom: '0px',
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}',
            // interval: 0,
            textStyle: {
                // color: "rgba(255,255,255,0.6)",
                color: "#c9e7ff",
                fontSize: 14,
                fontFamily: "DINBOLD",
            }
        },
        axisLine: {
            lineStyle: {
                color: "#29487F"
            }
        },
        axisTick: {
            show: false
        },
        data: [],
    }],
    yAxis: [{
        type: "value",
        // name: '万（人）',
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,0.6)",
                fontSize: 14,
                fontFamily: "DINBOLD",
            }
        },
        nameTextStyle: {
            color: "rgba(255,255,255,0.6)",
            fontSize: 12,
            lineHeight: 10
        },
        // 分割线
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "rgba(255,255,255,0)"
            }
        },
        axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#29487F'
            }
          },
        axisTick: {
            show: false
        }
    }],
    series: [{
        // name: "2018",
        name: "人次",
        type: "line",
        smooth: true,
        symbolSize: 8,
        symbol: "none", //去掉折线点
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[0],
                // shadowBlur: 3,
                // shadowColor: hexToRgba(color[0], 0.5),
                // shadowOffsetY: 8
            }
        },
        // symbol: 'circle',//数据交叉点样式
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0.1)
                        }
                    ],
                    false
                ),
                // shadowColor: hexToRgba(color[0], 0.1),
                // shadowBlur: 10
            }
        },
        data: []
    }, 
    // {
    //     name: "人数",
    //     type: "line",
    //     smooth: true,
    //     symbolSize: 8,
    //     zlevel: 3,
    //     lineStyle: {
    //         normal: {
    //             color: color[1],
    //             // shadowBlur: 3,
    //             // shadowColor: hexToRgba(color[1], 0.5),
    //             // shadowOffsetY: 8
    //         }
    //     },
    //     // symbol: 'circle',//数据交叉点样式 (实心点)
    //     symbol: "none", //去掉折线点
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(
    //                 0,
    //                 0,
    //                 0,
    //                 1,
    //                 [{
    //                         offset: 0,
    //                         color: hexToRgba(color[1], 0.3)
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: hexToRgba(color[1], 0.1)
    //                     }
    //                 ],
    //                 false
    //             ),
    //             // shadowColor: hexToRgba(color[1], 0.1),
    //             // shadowBlur: 10
    //         }
    //     },
    //     data: yAxisData2
    // }
]
};