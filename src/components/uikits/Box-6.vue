<template>
  <div
    style="position: relative;width:100%;height:100%;"
    class="">
    <div
      class="flashDIV"
      v-if="isFlash"/>
    <div
      class="box3_f"
      :class="{ 'redColor': isRed ,'grayColor': isGrag}">
      <div
        class="box3"
        :style="css"
        :class="typeClass">
        <div class="border">
          <span/><span/><span/><span/><span/><span/>
          <span/><span/><span/><span/><span/><span/>
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box6',
  props: {
    padding: {
      type: String,
      default: ''
    },
    type: {
      type: null,
      default: 1
    },
    css: {
      type: String,
      default: ''
    },
    isFlash: {
      type: Boolean,
      default: false
    },
    isRed: {
      type: Boolean,
      default: false
    },
    isGrag: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      typeClass: 'type1'
    }
  },
  mounted () {
    this.boxstyle()
  },
  methods: {
    boxstyle () {
      let a = this.type
      if (a === '2') {
        this.typeClass = 'type2'
      } else if (a === '3') {
        this.typeClass = 'type3'
      } else {
        this.typeClass = 'type1'
      }
    }
  }
  // watch: {
  //   'isFlash': function (newval, oldval) {
  //     let that = this
  //     if (newval === true) {
  //       setTimeout(function () {
  //         that.isFlash = false
  //       }, 5000)
  //     }
  //   }
  // },
  // destoryed: function () {
  //   this.isFlash = false
  // },
  // created: function () {
  //   let that = this
  //   if (this.isFlash === true) {
  //     setTimeout(function () {
  //       that.isFlash = false
  //     }, 5000)
  //   }
  // }
}
</script>

<style scoped>
  .flash{
    -webkit-animation: glow 300ms ease-out infinite alternate;
    -moz-animation: glow 300ms ease-out infinite alternate;
    -o-animation: glow 300ms ease-out infinite alternate;
    -ms-animation: glow 300ms ease-out infinite alternate;
    /*这里使用了呼吸动画*/
    animation: glow 300ms ease-out infinite alternate;
    border-radius: 2px;
    box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3c1c;
    color: #efe;
    display: block;
    outline: none;
  }
  .flash div{border:0}
  .flash div div>span{border:0 !important;background: none !important;}
  /*以下定义动画帧*/
  @keyframes glow {
    0% {
      border-color: #393;
      box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3cff;
    }
    50% {
      border-color: #393;
      box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3cff;
    }
    51% {
      border-color: #6f6;
      box-shadow: 0 0 20px #ff3c3c, inset 0 0 10px #ff3c3cff;
    }
    100% {
      border-color: #6f6;
      box-shadow: 0 0 20px #ff3c3c, inset 0 0 10px #ff3c3cff;
    }
  }
  /*@-moz-keyframes glow {*/
  /*0% {*/
  /*border-color: #393;*/
  /*box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3c1c;*/
  /*}*/
  /*100% {*/
  /*border-color: #6f6;*/
  /*box-shadow: 0 0 20px #ff3c3c, inset 0 0 20px #ff3c3c99;*/
  /*}*/
  /*}*/
  /*@-o-keyframes glow {*/
  /*0% {*/
  /*border-color: #393;*/
  /*box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3c1c;*/
  /*}*/
  /*100% {*/
  /*border-color: #6f6;*/
  /*box-shadow: 0 0 20px #ff3c3c, inset 0 0 20px #ff3c3c99;*/
  /*}*/
  /*}*/
  /*@-ms-keyframes glow {*/
  /*0% {*/
  /*border-color: #393;*/
  /*box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3c1c;*/
  /*}*/
  /*100% {*/
  /*border-color: #6f6;*/
  /*box-shadow: 0 0 20px #ff3c3c, inset 0 0 20px #ff3c3c99;*/
  /*}*/
  /*}*/
  /*@keyframes glow {*/
  /*0% {*/
  /*border-color: #393;*/
  /*box-shadow: 0 0 5px #ff3c3c38, inset 0 0 5px #ff3c3c1c;*/
  /*}*/
  /*100% {*/
  /*border-color: #6f6;*/
  /*box-shadow: 0 0 20px #ff3c3c, inset 0 0 20px #ff3c3c99;*/
  /*}*/
  /*}*/
  .flashDIV{
    position: absolute;
    left:0;
    bottom:0;
    top:0;
    right:0;
    animation:flash 1s;
    animation-iteration-count:infinite
  }
  @keyframes flash
  {
    0% {opacity:0.66;background: red}
    50% {opacity:0.66;background: red}
    51% {opacity:0;}
    100% {opacity:0;}
  }
  .box3_f{
    height:100%;
    box-sizing: border-box;
    padding: .04rem 0;
  }
  .box3 {
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    border-left: 1px solid #009fe8;
    border-right: 1px solid #009fe8;
  }
  .box3 .border span {
    width: 5%;
    height: 1px;
    background: #009fe8;
    position: absolute;
  }
  .type1>.border>span:nth-of-type(1) {
    left: 0;
    top: 0;
  }
  .type1>.border>span:nth-of-type(2) {
    left: 0;
    bottom: 0;
  }
  .type1>.border>span:nth-of-type(3) {
    right: 0;
    bottom: 0;
  }
  .type1>.border>span:nth-of-type(4) {
    right: 0;
    top: 0;
  }
  .type1>.border>span:nth-of-type(5) {
    width: 75%;
    background:#009fe887;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .type1>.border>span:nth-of-type(6) {
    width: 75%;
    background: #009fe887;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }
  .box3>.border>span:nth-of-type(n + 7) {
    display: none;
  }
  .redColor .box3 {
    border-left: 1px solid #ff0000d1;
    border-right: 1px solid #ff0000d1;
  }

  .redColor .type1 .border span {
    width: 5%;
    height: 1px;
    background: #ff0000d1;
    position: absolute;
  }
  .redColor .type1>.border>span:nth-of-type(5) {
    width: 75%;
    background: #ff000047;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .redColor .type1>.border>span:nth-of-type(6) {
    width: 75%;
    background: #ff000047;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }

  .grayColor .box3 {
    border-left: 1px solid #009fe8;
    border-right: 1px solid #009fe8;
  }

  .grayColor .type1 .border span {
    width: 5%;
    height: 1px;
    background: #adb2bfd1;
    position: absolute;
  }
  .grayColor .type1>.border>span:nth-of-type(5) {
    width: 75%;
    background: #adb2bf47;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .grayColor .type1>.border>span:nth-of-type(6) {
    width: 75%;
    background: #adb2bf47;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }
  .type2>.border>span:nth-of-type(n + 7) {
    display: block;
  }
  .type2 {
    border: none;
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }
  .type2>.border>span:nth-of-type(1) {
    left: 0;
    top: 0;
  }
  .type2>.border>span:nth-of-type(2) {
    left: 0;
    bottom: 0;
  }
  .type2>.border>span:nth-of-type(3) {
    right: 0;
    bottom: 0;
  }
  .type2>.border>span:nth-of-type(4) {
    right: 0;
    top: 0;
  }
  .type2>.border>span:nth-of-type(5) {
    width: 75%;
    background: #31f1fe38;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .type2>.border>span:nth-of-type(6) {
    width: 75%;
    background: #31f1fe38;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }
  .type2>.border>span:nth-of-type(7) {
    width: .02rem;
    height: 30%;
    background: #31f1febd;
    left: 0;
    top: 0;
  }
  .type2>.border>span:nth-of-type(8) {
    width: .02rem;
    height: 30%;
    background: #31f1febd;
    right: 0;
    top: 0;
  }
  .type2>.border>span:nth-of-type(9) {
    width: .06rem;
    height: 30%;
    background: #31f1febd;
    left: -.02rem;
    top: 35%;
  }
  .type2>.border>span:nth-of-type(10) {
    width: .06rem;
    height: 30%;
    background: #31f1febd;
    right: -.02rem;
    top: 35%;
  }
  .type2>.border>span:nth-of-type(11) {
    width: .02rem;
    height: 30%;
    background: #31f1febd;
    left: 0;
    bottom: 0;
  }
  .type2>.border>span:nth-of-type(12) {
    width: .02rem;
    height: 30%;
    background: #31f1febd;
    right: 0;
    bottom: 0;
  }
  .type3 {
    border: none;
    box-sizing: border-box;
    padding: .2rem .1rem;
  }
  .type3>.border span {
    background: none;
    display: block;
    height: .12rem;
  }
  .type3>.border>span:nth-of-type(1) {
    width: 30%;
    border-left: 1px solid #31f1febd;
    border-top: 1px solid #31f1febd;
    left: 0;
    top: .12rem;
  }
  .type3>.border>span:nth-of-type(2) {
    width: 20%;
    border-left: 1px solid #31f1febd;
    border-top: 1px solid #31f1febd;
    transform: skew(-60deg) translateX(.1rem);
    left: 30%;
    top: 0px;
  }
  .type3>.border>span:nth-of-type(3) {
    width: 20%;
    border-right: 1px solid #31f1febd;
    border-top: 1px solid #31f1febd;
    transform: skew(60deg) translateX(-.1rem);
    left: 50%;
    top: 0px;
  }
  .type3>.border>span:nth-of-type(4) {
    width: 30%;
    border-right: 1px solid #31f1febd;
    border-top: 1px solid #31f1febd;
    right: 0;
    top: .12rem;
  }
  .type3>.border>span:nth-of-type(5) {
    width: 30%;
    transform: translateX(0);
    border-top: 1px solid #31f1febd;
    left: 0;
    bottom:0;
    background: none;
  }
  .type3>.border>span:nth-of-type(6) {
    width: 20%;
    border-left: 1px solid #31f1febd;
    border-bottom: 1px solid #31f1febd;
    transform: skew(60deg) translateX(.1rem);
    left: 30%;
    bottom: 0px;
    background: none;
  }
  .type3>.border>span:nth-of-type(7) {
    display: block;
    width: 20%;
    height: .12rem;
    border-right: 1px solid #31f1febd;
    border-bottom: 1px solid #31f1febd;
    transform: skew(-60deg) translateX(-.1rem);
    left: 50%;
    bottom: 0px;
    background: none;
  }
  .type3>.border>span:nth-of-type(8) {
    display: block;
    width: 30%;
    transform: translateX(0);
    border-top: 1px solid #31f1febd;
    right: 0;
    bottom: 0px;
    background: none;
  }
  .type3>.border>span:nth-of-type(9n) {
    display: none;
  }

</style>
