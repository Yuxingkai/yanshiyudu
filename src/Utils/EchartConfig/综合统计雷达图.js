let dataArr = ["结垢","变形","腐蚀","破裂","脱节","异物穿入","树根","接口材料脱落","起伏","沉积","残墙、坝根","渗漏","浮渣","错口","支管暗接","障碍物"]
export const option = {
    legend: {
        bottom: 0,
        data: [{
            name: '本次测评结果',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAUklEQVQoke3LvRVAMBSA0c/L+2mNYgPbmEerM4q5JBGdjnPSu/0dlq1NwCrSELlIqaJaUauYFswLbhmPgnsm4iQi7wqMwEyfQzrD448f/vgGuAFbnRDPluumVgAAAABJRU5ErkJggg=='
        },{
            name: '本次测评结果1',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAUklEQVQoke3LvRVAMBSA0c/L+2mNYgPbmEerM4q5JBGdjnPSu/0dlq1NwCrSELlIqaJaUauYFswLbhmPgnsm4iQi7wqMwEyfQzrD448f/vgGuAFbnRDPluumVgAAAABJRU5ErkJggg=='
        }],
        show: false
    },
    tooltip: {
        formatter: function(data) {
            var html = '';
            for (var i = 0; i < dataArr.length; i++) {
                html += dataArr[i] + ' : ' + data.value[i] + '<br>'
            }
            return html
        }
    },
    radar: {
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#4E73F1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#A0D4D1' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        axisLine: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#4E73F1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#A0D4D1' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        name: {
            textStyle: {
                color: '#fff'
            }
        },
        indicator: [{
                name: '结垢',
                max: 800
            },
            {
                name: '变形',
                max: 800
            },
            {
                name: '腐蚀',
                max: 800
            },
            {
                name: '破裂',
                max: 800
            },
            {
                name: '脱节',
                max: 800
            },
            {
                name: '异物穿入',
                max: 800
            },
            {
                name: '树根',
                max: 800
            },
            {
                name: '接口材料脱落',
                max: 800
            },
            {
                name: '起伏',
                max: 800
            },
            {
                name: '沉积',
                max: 800
            },
            {
                name: '残墙、坝根',
                max: 800
            },
            {
                name: '渗漏',
                max: 800
            },
            {
                name: '浮渣',
                max: 800
            },
            {
                name: '错口',
                max: 800
            },
            {
                name: '支管暗接',
                max: 800
            },
            {
                name: '障碍物',
                max: 800
            }
        ]
    },

    series: [{
        type: 'radar',
        tooltip: {
            show: true
        },
        lineStyle: {
            width: 1,
            opacity: 1
        },
        areaStyle: {
            color: "white" ,
            opacity: 0
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#9DDDDD' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'red' // 100% 处的颜色
            }]
        },
        data: [{
                value: [10,10,30,10,10,30],
                name: '本次测评结果'
            }
        ]
    },]
};