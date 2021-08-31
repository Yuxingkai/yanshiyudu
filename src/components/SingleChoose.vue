<template>
  <div class='radio_'>
    <div class="singleChoose_one" >
      <span :class="{'choose_left' : cT == 1,'choose_bg' : !(cT == 1)}" @click="doSelect(1)"></span>
      <span>{{config[0]}}</span>
    </div>
    <div class="singleChoose_two" >
      <span :class="{'choose_left' : cT == 2,'choose_bg' : !(cT == 2)}" @click="doSelect(2)"></span>
      <span>{{config[1]}}</span>
    </div>
    <div class="singleChoose_three" v-if='config[2]'>
      <span :class="{'choose_left' :  cT == 3,'choose_bg' : !(cT == 3)}" @click="doSelect(3)"></span>
      <span>{{config[2]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "singChoose",
  props: {
    config: {
      default: function() {
        return []
      },
      type: Array
    },
    cT: {
      default: 1,//默仍选左
      type: Number
    },
  },
  methods: {
    doSelect(i) {  
        this.$emit("doSelect",i)
    }
  }
};
</script>

<style scoped lang="scss">
.radio_{
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 0.38rem;
  box-sizing: border-box;
  .singleChoose_one {
    // flex: 1;
    padding-right: 0.3rem;
    display: flex;
		align-items: center;/*垂直居中*/
    box-sizing: border-box;
    span:nth-child(1) {
     cursor: pointer;
    }
    span:nth-child(2) {
      font-size: 0.28rem;
      font-family: "HY75";
    }
  }
  .singleChoose_two {
    // flex: 1;
    display: flex;
		align-items: center;/*垂直居中*/
    padding-right: 0.3rem;
    span:nth-child(1) {
     cursor: pointer;
    }
    span:nth-child(2) {
      font-size: 0.28rem;
      font-family: "HY75";
    }
  }
  .singleChoose_three {
    // flex: 1;
    display: flex;
		align-items: center;/*垂直居中*/
    span:nth-child(1) {
     cursor: pointer;
    }
    span:nth-child(2) {
      font-size: 0.28rem;
      font-family: "HY75";
    }
  }
  .choose_left {
    width: 0.32rem;
    height: 0.32rem;
    display: inline-block;
    background: url("../assets/imgs/common/radio_bg.png");
    background-size: 100% 100%;
    margin-right: 0.2rem;
  }
  .choose_bg {
    width: 0.32rem;
    height: 0.32rem;
    display: inline-block;
    background: url("../assets/imgs/common/radio_o_bg.png");
    background-size: 100% 100%;
    margin-right: 0.2rem;
  }
}
</style>
