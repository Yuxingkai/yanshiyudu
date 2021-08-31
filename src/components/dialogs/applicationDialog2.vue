<template>
  <div class="applicationDialog_box" v-show="isShow" @click='showOff'>
    <div class="box_head">
      <div class="title">应用中心</div>
    </div>
    <div class="box_body">
      <div class="box_left">
        <div class="title">基础应用</div>
        <div class="content">
          <div class="part" v-for="(v,i) in base" :key='i'>
            <div class="name">{{v.name}}</div>
            <div class="items">
              <div class="item" v-for="(item,index) in v.item" :key='index' @click='goDirect(item.text, item.path)'>
                <span :class="item.class"></span>
                <span class="text">{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_right">
        <div class="title">场景应用</div>
        <div class="content">
          <div class="part" v-for="(v,i) in sence" :key='i'>
            <div class="name">{{v.name}}</div>
            <div class="items">
              <div class="item" v-for="(item,index) in v.item" :key='index'>
                <span :class="item.class"></span>
                <span class="text">{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'applicationDialog',
  components: {

  },
  props: {
    isShow: {
      default: true,//
      type: Boolean
    },
  },
  data () {
    return {
        base: [
          {
            name: '一标多实',
            item: [
              {
                text: '实有人口',
                class:  'realpeople'
              },
              {
                text: '实有房屋',
                class:  'realhouse'
              },
              {
                text: '实有车辆',
                class:  'realcar'
              },
              {
                text: '实有预警',
                class:  'realPrewarn'
              },
              {
                text: '实有设备',
                class:  'realequip'
              },
            ]
          },
          {
            name: '智能检索',
            item: [
              {
                text: '人口检索',
                class:  'peoplesearch'
              },
              {
                text: '设备检索',
                class:  'equipsearch'
              },
              {
                text: '事件检索',
                class:  'eventsearch'
              },
              {
                text: '通行检索',
                class:  'accesssearch'
              },
              {
                text: '人脸检索',
                class:  'facesearch'
              },
              {
                text: '人口结构化 检索',
                class:  'p_search'
              },
              {
                text: '车辆结构化 检索',
                class:  'car_search'
              },
            ]
          },
          {
            name: '视频调阅',
            item: [
              {
                text: '视频调阅',
                class:  'video',
                path: '/video'
              }
            ]
          }
        ],
        sence: [
          {
            name: '物联感知',
            item: [
              {
                text: '人脸感知',
                class:  'facesence'
              },
              {
                text: '通行感知',
                class:  'accesssence'
              },
              {
                text: '消防感知',
                class:  'x_sence'
              },
              {
                text: '运维感知',
                class:  'run_sence'
              }
            ] 
          }
        ]
    }
  },
  mounted () {
 
  },
  computed: {

  },
  methods: {
    showOff(){
      this.$emit('showApplicationDialog')
    },
    goDirect(v, path) {
        switch(v){
            case '实有人口':
            this.$store.commit('showPageNum',2)
            break;
            case '实有房屋':
            this.$store.commit('showPageNum',3)
            break;
            case '实有车辆':
            this.$store.commit('showPageNum',4)
            break;
            case '实有预警':
            this.$store.commit('showPageNum',6)
            break;
            case '实有设备':
            this.$store.commit('showPageNum',5)
            break;
            default : 
             break;

        }
        console.log(path)
        if (path) {
          this.$router.push({
            path,
            query: ''
          });
        } else {
          this.$router.push({
            path: "/home",
            query: ''
          });
        }
            //跳转至登陆页
            // console.log(this.$router.currentRoute.path)
            // if (this.$router.currentRoute.path != "/home") {
            //   this.$router.push({
            //     path: "/home",
            //     query: ''
            //   });
            // }
    }
  }
}
</script>
<style lang="scss" scoped>
.applicationDialog_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8888;
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    padding: 0 1rem 0 1rem;
    .box_head  {
      .title {
        margin: 0 auto;
        width: 23.2rem;
        height: 2.16rem;
        text-align: center;
        line-height: 1.36rem;
        color: #00F9FC;
        font-family: "HY65";
        font-size: 0.52rem;  
        background: url("../../assets/imgs/application/title.png");
        background-size: 100% 100%;   
      }
    }
    .box_body {
      display: flex;
      // flex-direction: row;
        .title {
          width: 100%;
          height: 1rem;        
          background: url("../../assets/imgs/application/leftT.png");
          background-size: 100% 100%;  
          text-align: left;
          padding: 0.2rem 0 0 0.6rem;
          box-sizing: border-box;
          font-size: 0.44rem; 
          color: #00F9FC;
          font-family: "HY75";
        }
      .box_left , .box_right {
        flex: 1;
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        .content{
          width: 100%;
          height: 100%;
          padding: 0.52rem 0 0 0.72rem;
          box-sizing: border-box;
          .part{
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            .name{
              width: 2.8rem;
              height: 1.06rem;
              text-align: center;
              line-height: 1.06rem;
              background: url("../../assets/imgs/application/name.png");
              background-size: 100% 100%;    
              font-size: 0.44rem; 
              color: #C9E7FF;
              font-family: "HY65";
              margin-bottom: 0.3rem;
            }
            .items{
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              .item{
                margin: 0.3rem 0.92rem 0 0;
                width: 2.3rem;
                height: 2.3rem;    
                border: 1px solid rgba(201, 231, 255, 0.2);
                border-radius: 10px;
                border: 1px solid #00F9FC;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 0.28rem; 
                color: #C9E7FF;
                font-family: "HY65";
                &:hover{
                   background: rgba(22, 121, 212, 0.6);
                }
                .text{
                  width: 1.6rem;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
      .box_right{
        margin-right: 0rem;
        // flex: 1;
        // display: flex;
        // flex-direction: column;
      }
      .realpeople {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/realpeople.png");
          background-size: 100% 100%;     
      }
      .realhouse {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/realhouse.png");
          background-size: 100% 100%;     
      }
      .realcar {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/realcar.png");
          background-size: 100% 100%;     
      }
      .realPrewarn {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/realPrewarn.png");
          background-size: 100% 100%;     
      }
      .realequip {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/realequip.png");
          background-size: 100% 100%;     
      }

      .peoplesearch {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/peoplesearch.png");
          background-size: 100% 100%;     
      }
      .equipsearch {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/equipsearch.png");
          background-size: 100% 100%;     
      }
      .eventsearch {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/eventsearch.png");
          background-size: 100% 100%;     
      }
      .accesssearch {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/accesssearch.png");
          background-size: 100% 100%;     
      }
       .accesssearch {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/accesssearch.png");
          background-size: 100% 100%;     
      }
      .facesearch {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/facesearch.png");
          background-size: 100% 100%;     
      }
      .p_search {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/p_search.png");
          background-size: 100% 100%;     
      }
      .car_search {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/car_search.png");
          background-size: 100% 100%;     
      }
      .video {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/video.png");
          background-size: 100% 100%;     
      }    
      .facesence {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/facesence.png");
          background-size: 100% 100%;     
      }
      .accesssence {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/accesssence.png");
          background-size: 100% 100%;     
      }
      .x_sence {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/x_sence.png");
          background-size: 100% 100%;     
      }
      .run_sence {
          width: 0.8rem;
          height: 0.8rem; 
          background: url("../../assets/imgs/application/run_sence.png");
          background-size: 100% 100%;     
      }      
    }
}
</style>