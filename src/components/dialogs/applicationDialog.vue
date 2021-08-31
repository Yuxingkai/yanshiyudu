<template>
  <div
    class="applicationDialog_box"
    v-show="isShow"
    @click='showOff'
  >
    <div class="box_head">
      <div class="title">应用中心</div>
    </div>
    <div class="box_body">
      <div class="box_up">
        <div class="title">基础应用</div>
        <div class="content">
          <div class="box_2">
            <div class="part" v-if="base[0]">
              <div class="name">{{base[0].name}}</div>
              <div class="items">
                <div
                  class="item"
                  v-for="(item,index) in base[0].items"
                  :key='index'
                  @click='goDirect(item.permissionName, item.code)'
                >
                  <span :class="item.code"></span>
                  <span class="text">{{item.permissionName}}</span>
                </div>
              </div>
            </div>
            <div
              class="part"
              style="flex: 0.5;"
              v-if="base[1]"
            >
              <div class="name">{{base[1].name}}</div>
              <div class="items">
                <div
                  class="item"
                  v-for="(item,index) in base[1].items"
                  :key='index'
                  @click='goDirect(item.permissionName, item.code)'
                >
                  <span :class="item.code"></span>
                  <span class="text">{{item.permissionName}}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="box_2"
            v-if="base[2]"
          >
            <div class="part">
              <div class="name">{{base[2].name}}</div>
              <div class="items">
                <div
                  class="item"
                  v-for="(item,index) in base[2].items"
                  :key='index'
                  @click='goDirect(item.permissionName, item.code)'
                >
                  <span :class="item.code"></span>
                  <span class="text">{{item.permissionName}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="part">
            <div class="name">{{base[2].name}}</div>
            <div class="items">
              <div class="item" v-for="(item,index) in base[2].item" :key='index' @click='goDirect(item.text, item.path)'>
                <span :class="item.class"></span>
                <span class="text">{{item.text}}</span>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="box_down">
        <div class="title">场景应用</div>
        <div class="content">
          <div
            class="part"
            v-for="(v,i) in sence"
            :key='i'
          >
            <div class="name">{{v.name}}</div>
            <div class="items">
              <div
                class="item"
                v-for="(item,index) in v.items"
                :key='index'
                @click='goDirect(item.permissionName, item.code)'
              >
                <span :class="item.code"></span>
                <span class="text">{{item.permissionName}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="class_bg_video">
      <img :src="guidGif" />
    </div>
    <div class="cover"></div>
    <!-- <div class="mb"></div> -->
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
  data() {
    return {
      /**
       * 没有初始值，导致base[0].name 直接提示报错
       * 暂时这样处理，新的应用页面出来再改
       */
      base: [{
        name:''
      },
      {
        name:''
      },
       {
        name:''
      }
      ],
      sence: [],
      guidGif: require('../../assets/imgs/guidGif.gif')
    }
  },
  mounted() {
    this.base=[]
    //拿到权限，配置列表
    let temp = JSON.parse(window.localStorage.getItem('order'))

    for (const value of temp) {
      let application = {
        name: value.permissionName,
        items: value.children
      }
      
      /*
        基础应用
      */


      //一标多实
      if (value.code == 'ybds') {
        this.base.push(application) 
      }
      //视频调阅
      if (value.code == 'spdy') {
        this.base.push(application)
      }
      //智能检索
      if (value.code == 'znjs') {
        this.base.push(application)
      }

      /*
        场景应用
      */

      //物联感知
      if (value.code == 'wlgz') {
        this.sence.push(application) 
      }
      console.log(this.base)
    }
  },
  computed: {

  },
  methods: {
    showOff() {
      this.$emit('showApplicationDialog')
    },
    goDirect(v, path) {
      switch (v) {
        case '驾驶舱':
          this.$store.commit('showPageNum', 1)
          break;
        case '实有人口':
          this.$store.commit('showPageNum', 2)
          break;
        case '实有房屋':
          this.$store.commit('showPageNum', 3)
          break;
        case '实有车辆':
          this.$store.commit('showPageNum', 4)
          break;
        case '实有预警':
          this.$store.commit('showPageNum', 6)
          break;
        case '实有设备':
          this.$store.commit('showPageNum', 5)
          break;
        case '通行感知':
          this.$store.commit('showPageNum', 7)
          break;
        default:
          break;

      }
      //如果path属于['controlCabin','realpeople','realhouse','realcar','realequip','realPrewarn']
      // console.log(['controlCabin','realpeople','realhouse','realcar','realequip','realPrewarn'].indexOf(path) != -1)
      if (['accesssence', 'controlCabin', 'realpeople', 'realhouse', 'realcar', 'realequip', 'realPrewarn'].indexOf(path) != -1) {
        this.$router.push({
          path: "/home",
          query: ''
        });

      } else {
        this.$router.push({
          path: "/" + path,
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
  background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(
      139deg,
      rgba(83, 140, 206, 1),
      rgba(5, 77, 125, 1)
    )
    1 1;

  .box_head {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 33;
    .title {
      cursor: pointer;
      margin: 0 auto;
      width: 23.2rem;
      height: 2.16rem;
      text-align: center;
      line-height: 1.36rem;
      color: #00f9fc;
      font-family: 'HY65';
      font-size: 0.52rem;
      background: url('../../assets/imgs/application/title.png');
      background-size: 100% 100%;
    }
  }
  .box_body {
    z-index: 33;
    position: absolute;
    top: 2.16rem;
    width: 100%;
    display: flex;
    padding: 0 1rem 0 1rem;
    box-sizing: border-box;
    // flex-direction: row;
    flex-direction: column;
    .title {
      width: 100%;
      height: 1rem;
      background: url('../../assets/imgs/application/T_line.png');
      background-size: 100% 100%;
      text-align: left;
      padding: 0.2rem 0 0 0.6rem;
      box-sizing: border-box;
      font-size: 0.44rem;
      color: #00f9fc;
      font-family: 'HY75';
    }
    .box_up,
    .box_down {
      // flex: 1;
      margin-right: 2rem;
      display: flex;
      flex-direction: column;
      .content {
        width: 100%;
        height: 100%;
        padding: 0.52rem 0 0 0.72rem;
        box-sizing: border-box;
        .box_2 {
          display: flex;
          flex-direction: row;
        }
        .part {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          flex: 1;
          .name {
            width: 2.8rem;
            height: 1.06rem;
            text-align: center;
            line-height: 1.06rem;
            background: url('../../assets/imgs/application/name.png');
            background-size: 100% 100%;
            font-size: 0.44rem;
            color: #c9e7ff;
            font-family: 'HY65';
            margin-bottom: 0.3rem;
          }
          .items {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            cursor: pointer;
            .item {
              margin: 0.3rem 0.92rem 0 0;
              width: 2.3rem;
              height: 2.3rem;
              border: 1px solid rgba(201, 231, 255, 0.2);
              border-radius: 10px;
              border: 1px solid #00f9fc;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-size: 0.28rem;
              color: #c9e7ff;
              font-family: 'HY65';
              &:hover {
                background: rgba(22, 121, 212, 0.6);
              }
              .text {
                width: 1.6rem;
                display: inline-block;
              }
            }
          }
        }
      }
    }
    .box_right {
      margin-right: 0rem;
      // flex: 1;
      // display: flex;
      // flex-direction: column;
    }
    .controlCabin {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/controlCabin.png');
      background-size: 100% 100%;
    }
    .realpeople {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/realpeople.png');
      background-size: 100% 100%;
    }
    .facetoFace {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/facetoFace.png');
      background-size: 100% 100%;
    }
    .realhouse {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/realhouse.png');
      background-size: 100% 100%;
    }
    .realcar {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/realcar.png');
      background-size: 100% 100%;
    }
    .realPrewarn {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/realPrewarn.png');
      background-size: 100% 100%;
    }
    .realequip {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/realequip.png');
      background-size: 100% 100%;
    }

    .peoplesearch {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/peoplesearch.png');
      background-size: 100% 100%;
    }
    .equipsearch {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/equipsearch.png');
      background-size: 100% 100%;
    }
    .microcardCar {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/equipsearch.png');
      background-size: 100% 100%;
    }
    .eventsearch {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/eventsearch.png');
      background-size: 100% 100%;
    }
    .eventAlarm {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/eventsearch.png');
      background-size: 100% 100%;
    }
    .doorAccess {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/accesssearch.png');
      background-size: 100% 100%;
    }
    .accesssearch {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/accesssearch.png');
      background-size: 100% 100%;
    }
    .facesearch {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/facesearch.png');
      background-size: 100% 100%;
    }
    .microcardFace {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/facesearch.png');
      background-size: 100% 100%;
    }
    .p_search {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/p_search.png');
      background-size: 100% 100%;
    }
    .peopleStructural {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/p_search.png');
      background-size: 100% 100%;
    }
    .carStructural {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/car_search.png');
      background-size: 100% 100%;
    }
    .car_search {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/car_search.png');
      background-size: 100% 100%;
    }
    .video {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/video.png');
      background-size: 100% 100%;
    }
    .facesence {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/facesence.png');
      background-size: 100% 100%;
    }
    .accesssence {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/accesssence.png');
      background-size: 100% 100%;
    }
    .x_sence {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/x_sence.png');
      background-size: 100% 100%;
    }
    .run_sence {
      width: 0.8rem;
      height: 0.8rem;
      background: url('../../assets/imgs/application/run_sence.png');
      background-size: 100% 100%;
    }
  }
  .class_bg_video {
    position: absolute;
    right: -5rem;
    bottom: -5rem;
    width: 16rem;
    height: 16rem;
    // background-color: rgba(74, 144, 226, 0.35);
    img {
      mix-blend-mode: lighten;
    }
  }
  .cover {
    position: absolute;
    z-index: 22;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000712;
    opacity: 0.3929;
  }
  // .mb{
  //   position: absolute;
  //   z-index: 2;
  //   right: -5rem;
  //   bottom: -5rem;
  //   width: 16rem;
  //   height: 16rem;
  //   background: rgba(74, 144, 226,0.2);
  //   }
}
</style>