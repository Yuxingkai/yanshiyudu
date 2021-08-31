<template>
 <el-dialog  :visible.sync="dialogVisible" v-if='dialogVisible' :width="realWidth" append-to-body>
   <div class="people_Detail">
     <div class="ppeople_Detail_title">
        人员详情
     </div>   
    <div class="people_Detail_content">
      <div class="img_box">
        <div class="info_img"  v-if="info.bkgUrl">
            <img
                  class="people-pic"
                  :src="faceUrlEx+info.bkgUrl"
                >
        </div>
        <div class="info_noimg" v-else>
            <img
              class="people-pic"
                  src="../../assets/imgs/common/noimg.png"
                >
        </div>
      </div>
      <div class="table_d">
        <table border="1">
          <tr>
            <th v-for="(v,key) in info.display" :key='key'>{{key}}</th>   
          </tr>
          <tr>
            <td v-for="(v,key) in info.display" :key='key'>{{v}}</td>
          </tr>
        </table>
      </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>
import { faceUrl } from '../../Utils/config'
export default {
  name: 'people_Detail',
    props: {
    type: {
      default: 1,//
      type: [String, Number]
    },
  },
  data () {
    return {
      faceUrlEx: faceUrl,//拼接地址
      info:{},
      dialogVisible: false,
      //码表
      headFeature:{
        0: '-',
        1: '眼镜',
        2: '帽子',
        3: '头盔',
        4: '口罩',
      },
      ////  附属物 1-手拉车 2-雨伞 3-抱小孩 4-围巾 99-其他
      carryonItem: {
        0: '-',
        1: '手拉车',
        2: '雨伞',
        3: '抱小孩',
        4: '围巾',
        99: '其他',
      },
      bag:{//1-双肩包 2-手提包 3-拎物品 4-单肩包或斜挎包 5-婴儿车 6-行李箱 99-其他
        0: '-',
        1: '双肩包',
        2: '手提包',
        3: '拎物品',
        4: '单肩包或斜挎包',
        5: '婴儿车',
        6: '行李箱',
        99: '其他',
      },
      topColor:{
        0: '-',
        1: '白色上身',
        2: '灰色上身',
        3: '黑色上身',
        4: '绿色上身',
        5: '蓝色上身',
        6: '红色上身',
        7: '紫色上身',
        8: '黄色上身',
        9: '粉色上身',
        10: '橙色上身',
        11: '棕色上身',
        12: '花色上身',
      },
      bottomColor:{
        0: '-',
        1: '白色下身',
        2: '灰色下身',
        3: '黑色下身',
        4: '绿色下身',
        5: '蓝色下身',
        6: '红色下身',
        7: '紫色下身',
        8: '黄色下身',
        9: '粉色下身',
        10: '橙色下身',
        11: '棕色下身',
        12: '花色下身',
      },
      topTextures:{
        0: '-',
        1: '格子上身',
        2: '花纹上身',
        3: '纯色上身',
        4: '条纹上身',
      },
      bottomStyle:{
        0: '-',
        1: '短裤',
        2: '裙子',
        3: '长裤',
      },
       topStyle:{
        0: '-',
        1: '长袖',
        2: '短袖',
        3: '无袖',
      },
      shoeStyle: {
        0: '-',
        1: '皮鞋',
        2: '运动鞋',
        3: '凉鞋', 
        4: '其他鞋', 
      },
      shoeColor: {
        0: '-',
        1: '白',
        2: '灰',
        3: '黑',
        4: '绿',
        5: '蓝',
        6: '红',
        7: '紫',
        8: '黄',
        9: '粉',
        10: '橙',
        11: '棕',
        12: '花', 
      }
    }
  },
  mounted () {
    this.$bus.on('people_Detail', (item) => {
      this.dialogVisible = true
      this.info = item
      console.log(item,111111111111)
    let peopleStructData = JSON.parse(localStorage.getItem('peopleStructData'))  
      let dataMap = new Map() 
      for (const item of peopleStructData) {
          dataMap.set(item.field+'Name', item.name)
      }
       let display = {};
       console.log(dataMap)
        for (const [key, value] of Object.entries(this.info)) {
            if (dataMap.has(key) && !!value) {
                display[dataMap.get(key)] = value
            }
        }
        this.info.display = display
        console.log(this.info);
        
    })      
  },
  computed: {
    realWidth: function () {
      return '18.5rem'
    }
  },
  methods: {
  },
  beforeDestroy () {
    this.$bus.off('people_Detail')//移出监听
  }
}
</script>
<style lang="scss">
.el-dialog {
  background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  .el-dialog__headerbtn {
    font-size: 0.5rem;
  }
}
.el-dialog__header{
  padding-top: 0.2rem!important;
}
.el-dialog__body {
//  background-color: rgba(0, 0, 0, 0.1) !important;
 padding: 0.5rem 0.62rem;
}
</style>
<style lang="scss" scoped>
  .people_Detail {
    position: relative;
    .people_Detail_title {
      position: absolute;
      top: -0.6rem;
      left: -0.2rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .people_Detail_content {
      // display: flex;
      // flex-direction: row;
      padding-top: 0.3rem;
      .img_box {
        width: 100%;
        height: 10.3rem;
        padding: 0.2rem;
        box-sizing:border-box;
        background: #040613;
        border: 1px solid rgba(201, 231, 255, 0.2);
        .info_img{
            width: 100%;
            height: 100%;
            background: #040613;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
      .info_noimg {
            width: 100%;
            height: 100%;
            background: #040613;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 2rem;
                height: 2rem;
                }
          }
      }
      .table_d{
        width: 100%;
        height: 1.76rem;
        margin-top: 0.4rem;      
        background:  rgba(74, 144, 226, 0.1);
        padding: 0.3rem;
        box-sizing:border-box;
        table {
          border:0;
          width: 100%;

          tr{
            height: 0.6rem;
            border-left:0;
            border-bottom:0;
            border-top:0;
            border-color: #1679D4;

            th{
              // width: 1.6rem;
              border-left:0;
              // border-bottom:0;
              border-top:0;
              border-color: #1679D4;
              text-align: center;
              font-size: 0.28rem;
              font-family: "HY55";
              color: #C9E7FF;
              &:last-child{
                 border-right:0;
              }
            //   &:nth-child(2){
            //   width: 1rem;
            // }
            }

            td{
              color: #00F9FC;
              border-left:0;
              border-bottom:0;
              border-top:0;
              border-color: #1679D4;
              text-align: center;
              font-size: 0.28rem;
              font-family: "HY55";
               &:last-child{
                 border-right:0;
              }
            }

          }
        }

      }
    }
  }
</style>