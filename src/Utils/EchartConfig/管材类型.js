export const option = {
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 12
        },
        position: ['30%', '30%'],
        formatter:function(params){
            let str =  params.value
            console.log(params)
            return str
        },
    },
    legend: {
        top: '5%',
        right: '10%',
        textStyle: {
            color: 'white'
        },
        orient: 'vertical',
        icon: 'circle'
    },
    series: [
        {
            name: '管材类型',
            type: 'pie',
            radius: ['40%', '50%'],
            left: -250,
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
                {value: 0, name: '雨水'},
                {value: 0, name: '污水'},
                {value: 0, name: '合流'}
            ]
        }
    ]
};