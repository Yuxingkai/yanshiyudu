<template>
  <div :style="css" :class="{'typeHoverclass' : typeHoverInfo === '1'}" class="box2">
    <div :class="typeClass" class="box2C">
      <span class="sp1" />
      <span class="sp2" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box2',
  props: {
    css: {
      type: [String],
      default: ''
    },
    type: {
      type: String,
      default: '2'
    },
    typeHover: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      typeClass: 'type2',
      typeHoverInfo: this.typeHover
    }
  },
  created () {
    this.boxstyle()
  },
  watch: {
    type (oldtype) {
      if (oldtype === '1') {
        this.typeClass = 'type1'
      } else if (oldtype === '3') {
        this.typeClass = 'type3'
      } else if (oldtype === '4') {
        this.typeClass = 'type4'
      } else {
        this.typeClass = 'type2'
      }
    }
  },
  methods: {
    boxstyle () {
      let a = this.type
      if (a === '1') {
        this.typeClass = 'type1'
      } else if (a === '3') {
        this.typeClass = 'type3'
      } else if (a === '4') {
        this.typeClass = 'type4'
      } else {
        this.typeClass = 'type2'
      }
    }
  },
  mounted () {
    // console.log(this.typeHover, this.typeHoverInfo, typeof (this.typeHoverInfo), 'box2')
  }
}
</script>

<style scoped lang="scss">
.box2 {
  cursor: pointer;
}
.box2C {
  width: 100%;
  height: 100%;
  position: relative;
  // background: url("../../Assets/imgs/uikit/gezi2.png");
  background-color: transparent;
  background-size: 0.2rem 0.2rem;
  /*background-repeat: no-repeat;*/
}
.typeHoverclass .box2C:hover {
  width: 100%;
  height: 100%;
  position: relative;
  /*background: url("../../assets/images/lan3/gezi3.png");*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.box2C .sp1:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  border-color: #00F9FC transparent transparent transparent;
  border-style: solid;
  border-width: 0.1rem 0.1rem 0.1rem 0;
  height: 0;
  width: 0;
  display: inline-block;
}
// .box2C .sp1:after {
//   position: absolute;
//   content: "";
//   right: 0;
//   top: 0;
//   // width: 0.1rem;
//   // height: 0.1rem;
//   // border-right: 0.02rem solid #1893FF;
//   // border-top: 0.02rem solid #1893FF;
//     border-color: transparent #00F9FC  transparent transparent;
//     border-style: solid;
//     border-width: 0 0.1rem 0.1rem 0.1rem;
//     height: 0;
//     width: 0;
//     display: inline-block;
// }
.box2C .sp2:before {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  border-color: transparent   transparent #00F9FC transparent;
  border-style: solid;
  border-width: 0.1rem 0 0.1rem 0.1rem ;
  height: 0;
  width: 0;
  display: inline-block;
}
// .box2C .sp2:after {
//   position: absolute;
//   content: "";
//   left: 0;
//   bottom: 0;
//   border-color:  transparent transparent transparent #00F9FC;
//   border-style: solid;
//   border-width: 0.1rem 0.1rem 0 0.1rem ;
//   height: 0;
//   width: 0;
//   display: inline-block;
// }
// .type1 {
//   padding: 0.1rem 0.1rem 0;
// }
// .type1 .sp1:before {
//   border-left: 2px solid #1893FF;
//   border-top: 2px solid #1893FF;
// }
// .type1 .sp1:after {
//   border-right: 2px solid #1893FF;
//   border-top: 2px solid #1893FF;
// }
// .type1 .sp2:before {
//   border-right: 2px solid #1893FF;
//   border-bottom: 2px solid #1893FF;
// }
// .type1 .sp2:after {
//   border-left: 2px solid #1893FF;
//   border-bottom: 2px solid #1893FF;
// }
// .type3 {
//   // background: url("../../Assets/imgs/uikit/gezi2.png");
//   background-repeat: repeat;
//   background-size: 0.15rem 0.15rem;
// }
// .type4 {
//   // background: url("../../Assets/imgs/uikit/gezi3.png");
//   background-repeat: repeat;
//   background-size: 0.15rem 0.15rem;
// }
</style>
