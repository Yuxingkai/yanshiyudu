<template>
  <div class='real_houseItem' :style="{width: width}">
    <div class="real_houseItem_up">5</div>
    <div class="real_houseItem_center">{{102 + data}}</div>
    <div class="real_houseItem_bottom">
      <div class="bottom_left"><span>自住</span></div>
      <div class="bottom_right">
        <span class="party"></span>
        <span class="care_empty"></span>
        <span class="ipeople"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "real_houseItem",
  props: {
    // item: {
    //   default: function() {
    //     return {
    //       a : '未处理'
    //     }
    //   },
    //   type: Object
    // },
    data: {
      // default: '6.2rem',
      default: 1,
      type: Number
    },
    width: {
      // default: '6.2rem',
      default: '2.8rem',
      type: String
    },
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.real_houseItem {
  height: 1.6rem;
  background: rgba(31, 53, 97, 0.5);
  position: relative;
  padding-bottom: 0.1rem;
  box-sizing: border-box;
  .real_houseItem_up {
    position: absolute;
    top: 0;
    right: 0;
    width: 0.36rem;
    height: 0.36rem;
    text-align: center;
    line-height: 0.4rem;
    font-family: "DINBOLD";
    font-size: 0.24rem;
    font-weight: bold;
    color: #DCF6FF;
    background: url("../assets/imgs/realhouse/house_bg.png");
    background-size: 100% 100%;
  }
    .real_houseItem_center {
      text-align: center;
      padding-top: 0.3rem;
      padding-bottom: 0.4rem;
      font-family: "DINBOLD";
      font-size: 0.36rem;
      font-weight: bold;
      color: #ffffff;
    }
    .real_houseItem_bottom {
      display: flex;
      .bottom_left {
        flex: 1;
        text-align: left;
        span {
          display: inline-block;
          width: 0.8rem;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          background-color: #90FCA7;
          color: #333333;
          font-family: "HY55";
          font-size: 0.28rem;
          margin-left: 0.2rem;
        }
      }
      .bottom_right {
        flex: 1;
        text-align: right;
        span {
          margin-right: 0.2rem;
        }
        .party {
         display: inline-block;
         width: 0.24rem;
         height: 0.24rem;
         background: url("../assets/imgs/realhouse/china_party.png");
         background-size: 100% 100%;            
        }
        .party_empty {
         display: inline-block;
         width: 0.24rem;
         height: 0.24rem;
         background: url("../assets/imgs/realhouse/party_empty.png");
         background-size: 100% 100%;            
        }
        .care {
         display: inline-block;
         width: 0.24rem;
         height: 0.24rem;
         background: url("../assets/imgs/realhouse/care.png");
         background-size: 100% 100%;            
        }
        .care_empty {
         display: inline-block;
         width: 0.24rem;
         height: 0.24rem;
         background: url("../assets/imgs/realhouse/care_empty.png");
         background-size: 100% 100%;            
        }
        .ipeople {
         display: inline-block;
         width: 0.24rem;
         height: 0.24rem;
         background: url("../assets/imgs/realhouse/i_people.png");
         background-size: 100% 100%;            
        }
        .people_empty {
         display: inline-block;
         width: 0.24rem;
         height: 0.24rem;
         background: url("../assets/imgs/realhouse/people_empty.png");
         background-size: 100% 100%;            
        }
      }
    }
}
</style>
