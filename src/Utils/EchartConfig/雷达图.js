// let data = [582, 421.2, 622.1, 625.3, 265, 224]
// let indicator = [{
//         name: '套餐1',
//         max: 2000
//     },
//     {
//         name: '套餐2',
//         max: 2000
//     },
//     {
//         name: '套餐3',
//         max: 2000
//     },
//     {
//         name: '套餐4',
//         max: 2000
//     },
//     {
//         name: '套餐5',
//         max: 2000
//     },
//     {
//         name: '套餐6',
//         max: 2000
//     },
// ]

export const option = {

    radar: {
        center: ['30%', '50%'],
        radius: '65%',
        name: {
            formatter: function(name, indicator) {
                let arr;
                //   if(name=='开卡绑定数'||name=='渠道批量办理业务'){
                //         arr = [
                //         '{a|'+name+'}{b|'+indicator.value+'万}'
                //     ]
                //   }else{
                arr = [
                    '{a|' + name + '}'
                ]
                //   }

                return arr.join('\n')
            },
            textStyle: {
                rich: { //根据文字的组设置格式
                    a: {
                        color: '#BCDCFF',
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: 'Source Han Sans CN',
                    },
                    // b:{
                    //     fontSize:14,
                    //     verticalAlign:'top',
                    //     width:57,
                    //     color:'#8E88FE',
                    //     fontWeight:600,
                    //     align:'center'
                    // },
                }

            }
        },
        nameGap: 0,
        indicator: [
            {
                name: 'Φ150 - Φ530',
                max: 400,
                // color: '#5cacff'
            },
            {
                name: 'Φ600 - Φ1000',
                max: 400,
                // color: '#66e6fb'
            },
            {
                name: 'Φ1050 - Φ1400',
                max: 400,
                // color: '#df74a0'
            },
            {
                name: '≥Φ1500',
                max: 400,
                // color: '#ecc92d'
            }
        ],
        splitLine: {
            show: false

        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [
        {
            type: 'radar',
            data: [],
            // value:14,
            label: {
                show: true,
                formatter: function(params) {
                    console.log(params)
                    return params.value;
                },
                color: '#8E88FE',
                // position:[-20,-10,-10,-10],
                align: 'right',
                distance: 10,
                align: 'right'
            },
            symbolSize: [6, 6],
            lineStyle: { //边缘颜色
                width: 0
            },
            itemStyle: {
                borderWidth: 4,
                color: '#fff',
                borderColor: '#5cacff',
            },
            areaStyle: {
                color: '#7D77F1',
                opacity: 0.6
            }
        },
        {
            type: 'radar',
            data: [
                [400, 400, 400, 400, 400, 400],
            ],
            symbol: 'none',
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: '#4175F5'
            },

            areaStyle: {
                color: '#4175F5',
                opacity: 0.06
            }
        },
        // {
        //     type: 'radar',
        //     data: [
        //         [400, 400, 400, 400, 400, 400],
        //     ],

        //     symbol: 'none',
        //     lineStyle: {
        //         width: 0
        //     },
        //     itemStyle: {
        //         color: '#2C72C8'
        //     },

        //     areaStyle: {
        //         color: '#2C72C8',
        //         opacity: 0.12
        //     }
        // },
        {
            type: 'radar',
            data: [
                [300, 300, 300, 300, 300, 300]
            ],

            symbol: 'none',
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: '#4175F5'
            },

            areaStyle: {
                color: '#4175F5',
                opacity: 0.18
            }
        },
        {
            type: 'radar',
            data: [
                [200, 200, 200, 200, 200, 200]
            ],

            symbol: 'none',
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: '#4175F5'
            },

            areaStyle: {
                color: '#4175F5',
                opacity: 0.19
            }
        },
        {
            type: 'radar',
            data: [
                [150, 150, 150, 150, 150, 150]
            ],

            symbol: 'none',
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: '#4175F5'
            },

            areaStyle: {
                color: '#4175F5',
                opacity: 0.19
            }
        },
        {
            type: 'radar',
            data: [
                [100, 100, 100, 100, 100, 100],
            ],

            symbol: 'none',
            lineStyle: {
                width: 0
            },
            itemStyle: {
                color: '#4175F5'
            },

            areaStyle: {
                color: '#4175F5',
                opacity: 0.17
            }
        // },
        // {
        //     type: 'radar',
        //     data: [
        //         [1000, 1000, 1000, 1000, 1000, 1000],
        //     ],
        //     symbol: 'none',
        //     lineStyle: {
        //         width: 0
        //     },
        //     itemStyle: {
        //         color: '#4175F5'
        //     },

        //     areaStyle: {
        //         color: '#4175F5',
        //         opacity: 0.16
        //     }
        // },
        // {
        //     type: 'radar',
        //     data: [
        //         [800, 800, 800, 800, 800, 800],
        //     ],

        //     symbol: 'none',
        //     lineStyle: {
        //         width: 0
        //     },
        //     itemStyle: {
        //         color: '#4175F5'
        //     },

        //     areaStyle: {
        //         color: '#4175F5',
        //         opacity: 0.13
        //     }
        },
    ]
};