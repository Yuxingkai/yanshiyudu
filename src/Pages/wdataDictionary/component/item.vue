<template>
  <li>
    <div @click="toggle" :class="liClass">
        <div style="position: absolute;top: -.1rem;">{{model.menuName}}</div>
        <a-icon v-if="model.childTree.length !== 0" style="position: absolute;right: .5rem;top: .45rem;" :type="caretType" />
    </div>
    <transition name="slide">
      <ul v-show="open">
        <items v-for="(item,index) in model.childTree" :model="item" :key="index"></items>
      </ul>
    </transition>
  </li>
</template>
 
<script>
  export default {
    name: "items",
    props:['model'],
    data() {
      return {
        open:false,
        caretType: 'caret-left'
      }
    },
    methods:{
      toggle() {
        this.open = !this.open
        if (this.open) {
            this.caretType = 'caret-down'
        } else {
            this.caretType = 'caret-left'
        }
      }
    },
    computed:{
      liClass() {
        let _this = this;
        let option = `level_${this.model.level}`;
        let res = {};
        res[option] = true;
        return res;
      }
    }
  }
</script>
 
<style scoped lang="scss">
      .left_menu {
        width: 7.42rem;
      }
      .left_menu_son {
        width: 7.42rem;
      }
      .active {
        width: 7.42rem;
        height: 1.5rem;
        margin-top: -0.28rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/usermanage/menuActive.png');
        background-size: 100% 100%;
        font-size: .4rem;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: 1.2rem;
        cursor: pointer;
      }
  ul {
    list-style: none;
    text-align: left;
    .level_1 {
      /*border: 1px #ff0000 solid;*/
      background-image: url('../../../assets/imgs/zhihuipaishui/usermanage/list1.png');
      background-size: 100% 100%;
      font-size: .48rem;
      margin-top: -0.28rem;
      font-family: SimHei;
      color: #FFFFFF;
      line-height: 1.5rem;
      height: 1.5rem;
      position: relative;
      text-align: left;
      text-indent: 1.9rem;
      cursor: pointer;
    }
    .level_2 {
      /*border: 1px #00ff00 solid;*/
      text-indent: 1rem;
      margin-top: -0.28rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/usermanage/listsmall.png');
        background-size: 100% 100%;
        font-size: .4rem;
        font-family: SimHei;
        color: #FFFFFF;
        text-indent: 2.5rem;
        line-height: 1.4rem;
        height: 1.4rem;
        position: relative;
        cursor: pointer;
        cursor: pointer;
      /*background: #00ff00;*/
    }
    .level_3 {
      /*border: 1px #0000ff solid;*/
      text-indent: 3rem;
      margin-top: -0.28rem;
      background-image: url('../../../assets/imgs/zhihuipaishui/usermanage/listsmall.png');
        background-size: 100% 100%;
        font-size: .4rem;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: 1.4rem;
        height: 1.4rem;
        position: relative;
        cursor: pointer;
      /*background: #0000ff;*/
    }
    .level_4 {
      /*border: 1px #ffff00 solid;*/
      text-indent: 4rem;
      margin-top: -0.28rem;
      background-image: url('../../../assets/imgs/zhihuipaishui/usermanage/listsmall.png');
        background-size: 100% 100%;
        font-size: .4rem;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: 1.4rem;
        height: 1.4rem;
        position: relative;
        cursor: pointer;
      /*background: #ffff00;*/
    }
  }
  .slide-enter-active,.slide-leave-active {
    transition: all 0.2s;
  }
  .slide-enter,.slide-leave-to {
    transform: translateY(-20px);
  }
  .slide-enter-to,.slide-leave {
    transform: translateY(0px);
  }
</style>