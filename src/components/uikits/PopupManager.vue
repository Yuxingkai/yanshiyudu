<template>
  <transition name="bounce">
    <div
      class="popupAb popManager"
      :class="show4 ? 'newpopupManager' : ''"
      v-if="show1 || show2 || show3 || show4">
      <!--class="popup"-->
      <div
        class="popup"
        @click.stop="containClose"
        v-if="show1">
        <component
          ref="component_1"
          :param="param1"
          :is="component1"/>
      </div>
      <transition name="bounce">
        <div
          @click.stop="containClose"
          class="popup"
          v-if="show2">
          <component
            ref="component_2"
            :param="param2"
            :is="component2"/>
        </div>
      </transition>
      <transition name="bounce">
        <div
          @click.stop="containClose"
          class="popup"
          v-if="show3">
          <component
            ref="component_3"
            :param="param3"
            :is="component3"/>
        </div>
      </transition>
      <transition name="bounce">
        <div
          @click.stop="containClose"
          class="popup"
          v-if="show4">
          <component
            ref="component_4"
            :param="param4"
            :is="component4"/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      component1: null,
      component2: null,
      component3: null,
      component4: null,
      param1: null,
      param2: null,
      param3: null,
      param4: null
    }
  },
  props: {
    param: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  created: function () {
    window.pop = this
  },
  methods: {
    containClose () {
      this.$bus.emit('close')
    },
    show: function (args) {
      if (args.level === undefined || args.component === undefined) {
        return
      }
      if (args.level === 1) {
        this.component1 = args.component
        this.param1 = args.param
        this.show1 = true
      } else if (args.level === 2) {
        this.component2 = args.component
        this.param2 = args.param
        this.show2 = true
      } else if (args.level === 3) {
        this.component3 = args.component
        this.param3 = args.param
        this.show3 = true
      } else if (args.level === 4) {
        this.component4 = args.component
        this.param4 = args.param
        this.show4 = true
      }
    },
    close: function (level) {
      if (level === 1) {
        this.show1 = false
      } else if (level === 2) {
        this.show2 = false
      } else if (level === 3) {
        this.show3 = false
      } else if (level === 4) {
        this.show4 = false
      }
    }
  },
  beforeDestory: {
  }
}
</script>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in .2s;
  }

  .bounce-leave-active {
    animation: bounce-in .2s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    /*50% {*/
      /*transform: scale(1.05);*/
    /*}*/
    100% {
      transform: scale(1);
    }
  }

  .popup {
    top: 0;
    bottom: 0;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .popupAb {
    top: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .newpopupManager {
    background:rgba(0,0,0,.6)!important;
  }
  .popManager {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
