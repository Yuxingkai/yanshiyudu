
// import echarts from 'echarts'
/* eslint-disable */

let innerFontColor = '#FFFFFF';
let outerFontColor = '#666666';
let scale = 1;
let echartData = {
    inner: [
        {value:335,unit:'个', name:'直达'},
        {value:679,unit:'个', name:'营销广告'},
    ],
    outer: [
        {value:251, unit:'个',name:'谷歌'},
        {value:147, unit:'个',name:'必应'},
        {value:102, unit:'个',name:'其他'}
    ]
}

let legend1 = echartData.inner.map(v => v.name);
let legend2 = echartData.outer.map(v => v.name);
let legendData = [...legend1, ...legend2];


export const option = {
    color: ["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80",
            "#8d98b3","#FFEA01","#B8D07C","#fca4bb","#dc69aa",
            "#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050",
            "#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    legend: {
        orient: 'vertical',
        right: '5%',
        top: '10%',
        itemWidth: 14 * scale,
        itemHeight: 14 * scale,
        data:legendData,
        textStyle: {
            color: '#77899c',
            rich: {
                uname: {
                    width:50,
                    align: 'left',
                    color: '#fff'
                },
                unum: {
                    width: 60,
                    align: 'right',
                    color: 'red'
                }
            }
        },
        formatter: function(name) {
            console.log (option)
            var oa0 = option.series[0].data;
            var oa1 = option.series[1].data;
            var sum0=0;
            var sum1=0;
            for(var j=0; j<oa0.length; j++)
            {
                sum0+=oa0[j].value;
                sum1+=oa1[j].value;
            }    	 
            for(var i = 0; i < option.series[0].data.length; i++){	        	 
                if(name===oa0[i].name && i===0){
                     return   '{uname|}'+'{unum|'+option.series[0].name+'}{uname|'+option.series[1].name+'}\n'+'{uname|'+ name +'}{unum|' + (oa0[i].value/sum0 * 100).toFixed(2)+'%' + '}' +'{unum|' + (oa1[i].value/sum1 * 100).toFixed(2)+'%' + '}';
                 }else if (name==oa0[i].name){
                    return	'{uname|'+ name +'}{unum|' + (oa0[i].value/sum0 * 100).toFixed(2)+'%' + '}' +'{unum|' + (oa1[i].value/sum1 * 100).toFixed(2)+'%' + '}';
                }
            }
        //    let res =  '{uname|'+ '' +'}' + '{unum|'+ '' +'}'
        //    return res  
        }
    },
    series: [
        {
            name:'',
            type:'pie',
            // selectedMode: 'single',
            center: ['30%', '50%'],
            radius: ['40%', '50%'],
            label: {
                show: false,
                normal: {
                    show: false,
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:echartData.inner
        },
        {
            name:'',
            type:'pie',
            center: ['30%', '50%'],
            radius: ['60%', '70%'],
            data:echartData.outer,
            label: {
                show: false,
                normal: {
                    show: false,
                    color: outerFontColor,
                    fontSize: 12 * scale,
                    lineHeight: 16 * scale,
                    padding: [20 * scale, 1,0,0],
                    formatter: function(params){
                        // return '{a|'+params.name+'}\n{b|'+params.percent+'}{a|'+(params.data.unit || '')+'}'
                        return params.name+'\n{b|'+params.percent+'}'+(params.data.unit || '');
                   
                    },
                    rich:{
                        b: {
                            fontWeight: 'bold',
                            color: outerFontColor
                        }
                    }
                }
            }
        }
    ]
};