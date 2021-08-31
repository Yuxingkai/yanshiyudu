<template>
 <el-dialog  :visible.sync="dialogVisible" :width="realWidth" append-to-body>
   <div class="houseDetailDialog">
     <div class="houseDetailDialog_title">
        特斯联小区
     </div>   
    <div class="houseDetailDialog_content">
         <div class="overlook">
          <div v-for="(item, index) in 7" :key="index" class="overlook_item">
            <span class="text">楼栋总数：</span><span :class='gernerateColor(index)'>300</span>
          </div>
         </div>
         <div class="content_detail">
           <div class="content_detail_left">
             <div class="item">
              <div class="item_title">楼栋列表</div>
              <searchItem></searchItem>
              <div class="item_body">
                <div v-for="(item, index) in 7" :key="index" class="item_body_data">
                  特斯联1号楼1单元
                </div>
              </div>
             </div>
           </div>
           <div class="content_detail_center" :style="{width: centerWidth}">
             <div class="item">
               <div class="item_title">
                 <div class="title_name">
                   楼栋详情
                 </div>
                 <div class="search">
                    <searchItem></searchItem>
                 </div>
               </div>
               <div class="house_detail">
                 <div class="legend">
                  <div class="legend_item">
                    <span class="legend_logo1"></span><span class="legend_title">总人数 </span><span class="legend_num">283</span>
                  </div>
                  <div class="legend_item">
                    <span class="legend_logo2"></span><span class="legend_title">党员人数 </span><span class="legend_num">28</span>
                  </div>
                  <div class="legend_item legend_item2">
                    <span class="legend_logo3"></span><span class="legend_title">重点人员 </span><span class="legend_num">23</span>
                  </div>
                  <div class="legend_item legend_item3">
                    <span class="legend_logo4"></span><span class="legend_title">关爱人员 </span><span class="legend_num">283</span>
                  </div>
                  <div class="legend_item">
                    <span class="legend_logo5"></span><span class="legend_title">总户数 </span><span class="legend_num">83</span>
                  </div>
                  <div class="legend_item">
                    <span class="legend_logo6"></span><span class="legend_title">出租房 </span><span class="legend_num">83</span>
                  </div>
                  <div class="legend_item legend_item2">
                    <span class="legend_logo7"></span><span class="legend_title">闲置房 </span><span class="legend_num">23</span>
                  </div>
                 </div>
                 <div class="houseItems">
                   <div v-for="(item, index) in 7" :key="index" class="houseItems_item">
                     <div class="floor">{{index + 1}}F</div>
                     <div class="floor_right" :class="{rightjust: index == 0}">
                      <div v-for="(item, index) in 7" :key="index" class="floor_right_item">
                         <realhouseItem :data='item'></realhouseItem>
                      </div>
                     </div>
                     <div class="more">
                       <span></span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="content_detail_right">
             <div class="title">房屋详情</div>
             <div class="content">
               <div class="head">
                 <span>房间号</span>
                 <span>22</span>
                 <span>居住人数</span>
                 <span>5</span>
               </div>
               <div class="container">
                  <div v-for="(item, index) in 16" :key="index">
                    <prewarnItem></prewarnItem>
                  </div>
               </div>
             </div>
           </div>
         </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>
import searchItem from '../../components/searchItem'
import prewarnItem from '../../components/houseDetailItem'
import realhouseItem from '../../components/real_houseItem'


export default {
  name: 'houseDetail',
  data () {
    return {
     dialogVisible: false,
     click: false,
     activeName: 'second',
     activeName1: 'second',
     input: '',
    }
  },
  components: {
    searchItem,
    prewarnItem,
    realhouseItem
  },
  mounted () {
    this.$bus.on('houseDetail', (item) => {
      this.dialogVisible = true
      console.log(item,111111111111)
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '21rem' : '29rem'
    },
    centerWidth: function () {
      //14.6rem
      return '15.1rem'
    }
  },

  methods: {

    handleClick() {
        // console.log(tab, event);
      },
    gernerateColor(index) {
      return 'color' + (index + 1)
    }
  }
}
</script>
<style lang="scss">
.el-dialog {
  width: 23.2rem;
  // height: 18rem!important;
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
 padding: 0.5rem 0.6rem;
}

.houseDetailDialog{
  .el-input {

  .el-input__inner {
    height: 100%;
    border: 0!important;
    background-color: transparent!important;
    }
  }
}


</style>
<style lang="scss" scoped>
  .houseDetailDialog {
    position: relative;
    .houseDetailDialog_title {
      position: absolute;
      top: -0.6rem;
      left: -0.3rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .houseDetailDialog_content {
      display: flex;
      flex-direction: column;
      padding-top: 0.3rem;
      .overlook {
        display: flex;
        flex-direction: row;
        font-size: 0.24rem;
        padding-bottom: 0.2rem;
        .overlook_item{
          margin-right: 0.9rem;
          .text {
            color: #C9E7FF;
            font-family: "HY55";
          }
          .color1 {
            font-family: "DINBOLD";
            color: #FF5B71;
          }
          .color2,.color6 {
            font-family: "DINBOLD";
            color: #90FCA7;
          }
          .color3, .color7 {
            font-family: "DINBOLD";
            color: #D5CAFF;
          }
          .color4 {
            font-family: "DINBOLD";
            color: #FFD78A;
          }
          .color5 {
            font-family: "DINBOLD";
            color: #DCF6FF;
          }

        }
      }
      .content_detail {
        display: flex;
        flex-direction: row;
        .content_detail_left {
          width: 4.5rem;
          height: 15rem;
          
          margin-right: 0.5rem;
          display: flex;
          flex-direction: row;
          .item {
            display: flex;
            width: 100%;
            text-align: left;
            flex-direction: column;
            .item_title{
              color: #00F9FC;
              font-family: "HY65";
              font-size: 0.32rem;
              margin-bottom: 0.2rem;
              margin-top: 0.2rem;
            }
            .item_body {
              height: 14rem;
              margin-top: 0.2rem;
              background: rgba(0, 249, 252, 0.02);
              border: 1px solid rgba(201, 231, 255, 0.2);
              box-sizing:border-box;
              .item_body_data {
                text-align: left;
                height: 0.3rem;
                // line-height: 0.3rem;
                padding: 0.24rem;
                font-family: "HY65";
                color: #C9E7FF;
                font-size: 0.28rem;
                &:hover{
                  background: rgba(78, 101, 131, 0.4);
                  border-left: 0.06rem solid #00F9FC;
                }
              }
            }
          }

        }
        .content_detail_center {
          width: 14.6rem;
          height: 10rem;
          flex: none;
          // background-color: pink;
          .item {
            display: flex;
            width: 100%;
            text-align: left;
            flex-direction: column;
            .item_title{
              justify-content: space-between;
              display: flex;
              flex-direction: row;
              color: #00F9FC;
              font-family: "HY65";
              font-size: 0.32rem;
              .title_name {
              padding-top: 0.2rem;

              }
              
            } 
            .house_detail {
              margin-top: 0.16rem;
              width: 100%;
              height: 14.2rem;
              background: rgba(0, 249, 252, 0.02);
              border: 1px solid rgba(201, 231, 255, 0.2);
              box-sizing:border-box;
              padding: 0.42rem 0.46rem;
              .legend {
                display: flex;
                flex-wrap: wrap;
                
                .legend_item {
                  width: 3.4rem;
                  color: #C9E7FF;
                  display: flex;
                  align-items: center;
                  margin-bottom: 0.2rem;
                  .legend_title {
                    font-family: "HY55";
                    font-size: 0.28rem;
                    margin-left: 0.05rem;                    
                    margin-right: 0.12rem;                    
                  }
                  .legend_num {
                    font-family: "DINBOLD";
                    font-size: 0.28rem;
                    font-weight: bold;
                  }
                  .legend_logo1 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/all_people.png");
                    background-size: 100% 100%;  
                  }
                   .legend_logo2 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/china_party.png");
                    background-size: 100% 100%;  
                  }
                  .legend_logo3 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/i_people.png");
                    background-size: 100% 100%;  
                  }
                  .legend_logo4 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/care.png");
                    background-size: 100% 100%;  
                  }
                  .legend_logo5 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/all_house.png");
                    background-size: 100% 100%;  
                  }
                  .legend_logo6 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/rent_house.png");
                    background-size: 100% 100%;  
                  }
                  .legend_logo7 {
                    display: inline-block;
                    width: 0.28rem;
                    height: 0.28rem;
                    background: url("../../assets/imgs/realhouse/empty_house.png");
                    background-size: 100% 100%;  
                  }
                }
                .legend_item2 {
                  padding-left: 1rem;
                  box-sizing:border-box;
                  //  justify-content: center;
                }
                .legend_item3 {
                  justify-content: flex-end;
                }

              }
              .houseItems {
                height: 12.6rem;
                overflow-y: scroll;
                .houseItems_item {
                  display: flex;
                  margin-bottom: 0.56rem;
                  .floor {
                    // padding-right: 0.46rem;
                    height: 1.6rem;
                    line-height: 1.6rem;
                    // box-sizing: border-box;
                    width: 0.64rem;
                    color: #00F9FC;
                    font-family: "DINBOLD";
                    font-size: 0.36rem;
                    font-weight: bold; 
                    flex: none;                  
                  }
                  .more {
                    width: 0.64rem;
                    height: 1.6rem;
                    line-height: 1.6rem;
                    text-align: right;
                    span {
                      display: inline-block;
                      width: 0.2rem;
                      height: 0.2rem;
                      background: url("../../assets/imgs/realhouse/more.png");
                      background-size: 100% 100%;  
                    }
                  }
                  .floor_right {
                   display: flex;
                   overflow: hidden;
                   width: 13rem;
                   flex: none; 
                   .floor_right_item {
                     margin-right: 0.6rem;
                     &:last-child {
                       margin-right: 0;
                     }
                   }                   
                  }
                  .rightjust {
                    justify-content: flex-end;
                  }
                }
              }
            }           
          }
        }
        .content_detail_right {
          margin-left: 0.5rem;
          width: 7.3rem;
          height: 15rem;
          // background-color: pink;
          display: flex;
          width: 100%;
          text-align: left;
          flex-direction: column;
          .title {
            color: #00F9FC;
            font-family: "HY65";
            font-size: 0.32rem;
            padding-top: 0.2rem;
          }
          .content {
            margin-top: 0.16rem;
            height: 14.8rem;
            background: rgba(0, 249, 252, 0.02);
            border: 1px solid rgba(201, 231, 255, 0.2);
            padding: 0.3rem 0.4rem ;
            box-sizing:border-box;
            .head{
              width: 100%;
              span {
                font-family: "DINBOLD";
                font-size: 0.28rem;
                font-weight: bold;
                color: #FFD78A;
                margin-right: 0.2rem;
              }
              span:nth-child(2) {
                margin-right: 0.6rem;
              }
            }
            .container{
              width: 100%;
              height: 13.2rem;
              overflow-y: scroll;
            }
          }
        }
      }
    }
  }
</style>