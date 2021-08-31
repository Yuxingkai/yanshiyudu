
export const option = {
  tooltip: {
      trigger: 'item',
      textStyle: {
          fontSize: 14
      },
      position: ['30%', '30%'],
      formatter:function(params){
          let str =  params.name
          console.log(params)
          return str
      },
  },
//   legend: {
//       right: '10%',
//       top: '5%',
//       orient: 'vertical',
//       textStyle: {
//           color: 'white',
//           fontSize: 12
//       },
//       icon: 'circle'
//   },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: ['65%', '75%'],
          left: -160,
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
              {value: 1048, name: '搜索引擎搜索 1048'},
              {value: 735, name: '直接访问        735'},
              {value: 580, name: '邮件营销        580'},
              {value: 484, name: '联盟广告        484'},
              {value: 300, name: '视频广告        300'}
          ]
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['35%', '45%'],
        left: -160,
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
            {value: 1048, name: '搜索引擎搜索 1048'},
            {value: 735, name: '直接访问        735'},
            {value: 580, name: '邮件营销        580'},
            {value: 484, name: '联盟广告        484'},
            {value: 300, name: '视频广告        300'}
        ]
    },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['0%', '25%'],
        left: -160,
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
            {value: 1048, name: '搜索引擎搜索 1048'},
            {value: 735, name: '直接访问        735'},
            {value: 580, name: '邮件营销        580'},
            {value: 484, name: '联盟广告        484'},
            {value: 300, name: '视频广告        300'}
        ]
    }
  ]
};