<template>
  <transition name="bounce">
    <div
      class="notify"
      :style="style"
      v-if="visible">
      <div
        style="text-align: center"
        class="tipComtent">
        <img
          style="width: .4rem;height: .4rem;vertical-align: middle;"
          src="../../../assets/imgs/Rectangle.png"
          alt="">
        <span class="content">{{ content }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Thost',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
  },
  mounted () {
  },
  computed: {
    style () {
      return {
      }
    }
  }
}
</script>

<style scoped>
  .bounce-enter-active {animation: bounce-in .5s; }
  .bounce-leave-active {animation: bounce-in .5s reverse; }
  @keyframes bounce-in {
    0% {transform: scale(0) translate(-50%, -50%); }
    50% {transform: scale(1.05) translate(-50%, -50%); }
    100% {transform: scale(1) translate(-50%, -50%); }
  }
  .notify {display: table;font-size: .42rem; color: white;height: 1.16rem;background:rgba(99,127,203,1);left: 50%;
    top: 5%;transform: translate(-50%, -50%);
    border-radius: .12rem;padding: 0 .5rem}
  .tipType{width: 1.2rem;display: table-cell; vertical-align: middle; line-height: 2.48; }
  .tipType span{margin-left: .4rem}
  .tipType span.success{display: block; width:.9rem; height: .9rem; background: url("../../../assets/imgs/alert/success.svg") no-repeat; background-size: 99%; }
  .tipType span.err{display: block; width:.9rem; height: .9rem; background: url("../../../assets/imgs/alert/err.svg") no-repeat; background-size: cover; }
  .tipType span.waring{display: block; width:.9rem; height: .9rem; background: url("../../../assets/imgs/alert/waring.svg") no-repeat; background-size: cover; }
  .tipComtent{box-sizing: border-box;display: table-cell;vertical-align: middle}
  .tipComtent span:nth-of-type(1){font-size: .38rem; color: #ffffffe6;line-height: .6rem;white-space: nowrap;}
  .tipComtent span:nth-of-type(2){font-size: .32rem; color: #ffffff9e;padding: 0 .2rem}
  .tipClose{position: absolute; right: .16rem; top: .02rem; width: .3rem; cursor: pointer; }
  .tipClose img{width: .3rem; }
</style>
