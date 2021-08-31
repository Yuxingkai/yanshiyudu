import echarts from 'echarts'
// var dataLine = [];
var myColor = [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#1A72FF'
}, {
    offset: 0.5,
    color: '#1E69F9'
}, {
    offset: 1,
    color: '#3724CB'
}]),new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#1A72FF'
}, {
    offset: 0.11,
    color: '#1E69F9'
}, {
    offset: 1,
    color: '#3724CB'
}]),new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#1A72FF'
}, {
    offset: 0.11,
    color: '#1E69F9'
}, {
    offset: 1,
    color: '#3724CB'
}]),new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#0052A5'
}, {
    offset: 1,
    color: '#00E9F7'
}]),new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#0052A5'
}, {
    offset: 1,
    color: '#00E9F7'
}]),];
export const option = {
    // backgroundColor: '#101E40',

          grid: [
            {
              left: '8%',
              top: '15%',
              right: '2%',
              bottom: '15%',
              containLabel: true
            }
          ],
          xAxis: [
            {
              show: false,
              type: 'value'
            }
          ],
          yAxis: [
            {
              inverse: true,
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                textStyle: {
                  color: "#fff",
                  fontSize: 12,
                  fontFamily: "HY55"
                }
              },
              data: []
            },
            {
              axisTick: "none",
              axisLine: "none",
              inverse: true,
              show: true,
              axisLabel: {
                textStyle: {
                  color: "#00F9FC",
                  fontSize: 12,
                },
              },
              data: []
            },
            // {
            //   axisLine: {
            //     lineStyle: {
            //       color: "rgba(0,0,0,0)"
            //     }
            //   },
            //   data: [50000000, 22000000, 10000000, 5000000, 1]
            // }
          ],
          series: [
            {
              name: "条",
              type: "bar",
              stack: "b",
              yAxisIndex: 0,
              data: [],
              barWidth: 8,
              itemStyle: {
                normal: {
                  color: function(params) {
                    // var num = myColor.length;
                    return myColor[params.dataIndex];
                  },
                  barBorderRadius: [0, 30, 30, 0],
                }
              },
              emphasis: {
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#0052A5'
                    }, {
                        offset: 1,
                        color: '#00E9F7'
                    }])
                }
              },          
              z: 2
            },
            {
              name: "框",
              type: "bar",
              yAxisIndex: 1,
              barGap: "-100%",
              data: [],
              barWidth: 8,
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)"
                }
              },
              z: 1,
              // label: {
              //   normal: {
              //     show: true,
              //     position: "right",
              //     distance: 8,
              //     formatter: function(data) {
              //       console.log(data)
              //       return dataLine[data.dataIndex];
              //     },
              //     textStyle: {
              //       color: "#00F9FC",
              //       fontSize: 16,
              //       fontFamily: "DINBOLD"
              //     }
              //   }
              // }
            }
          ]
        }