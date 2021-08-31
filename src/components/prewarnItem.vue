<template>
  <div class='prewarnItem_'>
    <div class="prewarnItem_pic">
      <span class="camera"></span>
    </div>
    <div class="prewarnItem_info">
      <div>
        <span class="prewarnItem_info_name">张三</span>
        <span class="prewarnItem_info_belong">关爱人员</span>
      </div>
      <div style="display:flex;">
        <span class="prewarnItem_info_address">特斯联小区二号楼1020室</span>
        <span v-if="type == 1" class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;" 
        :style="{'color': item.a == '未处理' ? '#FF9999': (item.a == '已处理' ? '#00F9FC' : '#F8E71C')}">{{item.a}}</span>
        <span v-if="type == 2" class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;"
         :style="{'color': item.b == '人脸开门' ? '#FFD796': (item.b == '刷卡开门' ? '#FFF89D' : '#9DFFA5')}">
         <span :class="{logoFace:item.b == '人脸开门',logoCard:item.b == '刷卡开门',logoNfc:item.b == '手机NFC开门'}"></span>{{item.b}}</span>
      </div>
      <div style="display:flex;padding-top: 0.14rem;">
        <span class="prewarnItem_info_laber">吸毒人员管控</span>
        <span class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">今日 14:24:22</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "prewarnItem",
  props: {
    item: {
      default: function() {
        return {
          a : '未处理',
          b : '手机NFC开门',
        }
      },
      type: Object
    },
    type: {
      default: '2',//
      type: String
    },
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.prewarnItem_{
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 0.38rem;
  box-sizing: border-box;
  text-align: center;
  &pic{
    width: 1.38rem;
    height: 1.84rem;
    margin-right: 0.38rem;
    border: 1px solid rgba(201, 231, 255, 0.2);
    .camera {
        width: 0.9rem;
        height: 0.9rem;
        display: inline-block;
        // margin-right: 0.22rem;
        margin-top: 0.48rem;
        background: url("../assets/imgs/common/camera.png");
        background-size: 100% 100%;
    }
  }
  &info{
    flex: 1;
    text-align: left;
    .prewarnItem_info_name{     
      margin: 0.24rem  0.54rem 0.24rem 0;
      display: inline-block;
      font-family: "HY75";
      color: #C9E7FF;
    }
    .prewarnItem_info_belong{
      color: #50E3C2;
      font-size: 0.28rem;
      font-family: "HY65";
    }
    .prewarnItem_info_address {
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      opacity:0.7;
    }

    .prewarnItem_info_laber{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      opacity:0.6;
    }
    .prewarnItem_info_staus{
      font-family: "HY65";
      font-size: 0.28rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .logoFace {
        width: 0.32rem;
        height: 0.32rem;
        display: inline-block;
        background: url("../assets/imgs/realpeople/face.png");
        background-size: 100% 100%;
        margin-right: 0.02rem;
      }
      .logoCard {
        width: 0.32rem;
        height: 0.32rem;
        display: inline-block;
        background: url("../assets/imgs/realpeople/card.png");
        background-size: 100% 100%;
        margin-right: 0.02rem;
      }
      .logoNfc {
        width: 0.32rem;
        height: 0.32rem;
        display: inline-block;
        background: url("../assets/imgs/realpeople/nfc.png");
        background-size: 100% 100%;
        margin-right: 0.02rem;
      }
    }
    .prewarnItem_info_time{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
    } 
  }
}
</style>
