
export const option = {
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 12
        },
        position: ['30%', '30%'],
        formatter:function(params){
            let str =  params.name
            console.log(params)
            return str
        },
    },
    legend: {
        right: '10%',
        top: '10%',
        orient: 'vertical',
        textStyle: {
            color: 'white'
        },
        icon: 'circle'
    },
    series: [
        {
            name: '排水设施',
            type: 'pie',
            radius: ['30%', '40%'],
            left: -150,
            top: -20,
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                // {value: 1048, name: '搜索引擎搜索 1048'},
                // {value: 735, name: '直接访问        735'},
                // {value: 580, name: '邮件营销        580'},
                // {value: 484, name: '联盟广告        484'},
                // {value: 300, name: '视频广告        300'}
            ]
        }
    ]
};