
// import echarts from 'echarts'
/* eslint-disable */

export const option = {
    color:['#2773D0','#34B8F2','#21F1E1','#C5E7E4','#E9BC5C'],
	title : {	      
	        x:'center',
	        textStyle: {
	            fontSize: 20
	        },
	        subtext: '',
	        subtextStyle: {
	        	color: '#000',
	        	fontSize: 16
	        }
	    },
	// tooltip : {
	//         trigger: 'item',
	//         formatter: "{a}->{b}: <br/>{c}  ({d}%)",
	//         textStyle : {
	//         	align:'left',
	//         	fontSize:15
	//         }
	//     },
	legend: {
        orient: 'vertical',
        right: '1%',
        top: '16%',
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 4,
       textStyle: {
            color: '#77899c',
            rich: {
                uname: {
                    width:100,
                    // align: 'left',
                    color: '#C9E7FF',
                    padding:  [0,10,0,10]
                },
                unum1: {
                    width: 40,
                    // align: 'right',
                    color: '#2773D0',
                    padding:  [0,0,0,10]
                },
                unum2: {
                    width: 40,
                    // align: 'right','#2773D0','#34B8F2','#21F1E1','#C5E7E4','#E9BC5C'
                    color: '#34B8F2',
                    padding:  [0,0,0,10]

                },
                unum3: {
                    width: 40,
                    // align: 'right',
                    color: '#21F1E1',
                    padding:  [0,0,0,10]

                },
                unum4: {
                    width: 40,
                    // align: 'right',
                    color: '#C5E7E4',
                    padding:  [0,0,0,10]
                },
                unum5: {
                    width: 40,
                    // align: 'right',
                    color: '#E9BC5C',
                    padding:  [0,0,0,10]

                },
                unum6: {
                    width: 40,
                    // align: 'right',
                    color: '#54A1FD',
                    padding:  [0,0,0,10]

                }
            }
        },
        // data: ["自住房屋_95.42%", "出租房屋_0.09%", "空置房屋_4.49%", "自住人数_99.74%", "出租人数_0.26%"],
        formatter:function(name){
    
            let res = ''
            // console.log(name.split('_')[0])
            // res =  '{uname|'+ name.split('_')[0] +'}' + '{unum|'+ name.split('_')[1] +'}'
            let str = name.split('_')[1].length>8 ? name.split('_')[1].substring(0,8)+"..." : name.split('_')[1]
            switch(name.split('_')[0]){
                case '0' :
                    res =  '{uname|'+ str +'}' + '{unum1|'+ name.split('_')[2] +'}' +'{unum1|'+ name.split('_')[3] +'}'
                   break; //可选
                case '1' :
                res =  '{uname|'+ str +'}' + '{unum2|'+ name.split('_')[2] +'}' + '{unum2|'+ name.split('_')[3] +'}'
                   break; //可选
                case '2' :
                   res =  '{uname|'+ str +'}' + '{unum3|'+ name.split('_')[2] +'}'  + '{unum3|'+ name.split('_')[3] +'}'
                      break; //可选
                case '3' :
                    res =  '{uname|'+ str +'}' + '{unum4|'+ name.split('_')[2] +'}'  + '{unum4|'+ name.split('_')[3] +'}'
                         break; //可选
                case '4' :
                    res =  '{uname|'+ str +'}' + '{unum5|'+ name.split('_')[2] +'}' + '{unum5|'+ name.split('_')[3] +'}'
                            break; //可选
                case '5' :
                    res =  '{uname|'+ str +'}' + '{unum6|'+ name.split('_')[2] +'}' + '{unum6|'+ name.split('_')[3] +'}'
                        break; //可选
                //你可以有任意数量的case语句
                default : //可选
                res =  '{uname|'+ str +'}' + '{unum|'+ name.split('_')[2] +'}' + '{unum|'+ name.split('_')[3] +'}'
            }
            return res  
	        }
    },
	series : [
	     {
            name: '',
            type: 'pie',
            radius: ['60%', '70%'],//radius : ['30%', '50%'],
            center: ['20%', '50%'],
            label: {
                show: false,
                position: 'center'
            },
           emphasis: {
                label: {
                    formatter: "{a}",
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                // {name: "自住房屋_99.74%",
                // value: 6861
                // }
            ],
            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
        }
	    ]
};
