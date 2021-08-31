<template>
  <div
    style="position: relative;width:100%;height:100%;"
    class="">
    <div class="box5_f">
      <div
        class="box5"
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
  name: 'Box5',
  props: {
    padding: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '1'
    },
    css: {
      type: String,
      default: ''
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
        this.typeClass = 'blue'
      } else if (a === '4') {
        this.typeClass = 'yellow'
      } else if (a === '5') {
        this.typeClass = 'green'
      } else if (a === '6') {
        this.typeClass = 'black'
      } else if (a === '7') {
        this.typeClass = 'white'
      } else {
        this.typeClass = 'type1'
      }
    }
  }
}
</script>

<style scoped>
.box5_f {
  height: 100%;
  box-sizing: border-box;
  /*padding: 0.04rem 0;*/
}
.box5 {
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
.box5 .border span {
  width: 5%;
  height: 1px;
  background: #009fe8;
  position: absolute;
}
.type1 {
  border-left: 1px solid #009fe8;
  border-right: 1px solid #009fe8;
}
.type1 > .border > span:nth-of-type(1) {
  left: 0;
  top: 0;
}
.type1 > .border > span:nth-of-type(2) {
  left: 0;
  bottom: 0;
}
.type1 > .border > span:nth-of-type(3) {
  right: 0;
  bottom: 0;
}
.type1 > .border > span:nth-of-type(4) {
  right: 0;
  top: 0;
}
.type1 > .border > span:nth-of-type(5) {
  width: 75%;
  background: #009fe887;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.type1 > .border > span:nth-of-type(6) {
  width: 75%;
  background: #009fe887;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
}
.box5 > .border > span:nth-of-type(n + 7) {
  display: none;
}
.type2 .border span {
  opacity: .5;
}
.type2 > .border > span:nth-of-type(1) {
  width: 40%;
  left: 0;
  top: 0;
}
.type2 > .border > span:nth-of-type(2) {
  width: 10%;
  right: 0;
  top: 0;
}
.type2 > .border > span:nth-of-type(3) {
  width: 1px;
  height: 40%;
  right: 0;
  top: 0;
}
.type2 > .border > span:nth-of-type(4) {
  width: 40%;
  right: 0;
  bottom: 0;
}
.type2 > .border > span:nth-of-type(5) {
  width: 10%;
  left: 0;
  bottom: 0;
}
.type2 > .border > span:nth-of-type(6) {
  width: 1px;
  height: 40%;
  left: 0;
  bottom: 0;
}
.blue {
  background:rgba(54,132,195,1);
  color: white;
  font-size: .32rem;
  padding: .08rem .1rem;
  margin-top: -.13rem;
}
.blue > .border > span {
  background: white;
}
.blue > .border > span:nth-of-type(1) {
   width: 5px;
   left: 2px;
   top: 2px;
 }
.blue > .border > span:nth-of-type(2) {
  width: 85%;
  right: 2px;
  top: 2px;
}
.blue > .border > span:nth-of-type(3) {
  width: 1px;
  height: 60%;
  right: 2px;
  top: 2px;
}
.blue > .border > span:nth-of-type(4) {
  width: 1px;
  height: 5px;
  right: 2px;
  bottom: 2px;
}
.blue > .border > span:nth-of-type(5) {
  width: 5px;
  right: 2px;
  bottom: 2px;
}
.blue > .border > span:nth-of-type(6) {
  width: 85%;
  left: 2px;
  bottom: 2px;
}
.blue > .border > span:nth-of-type(7) {
  display: block;
  width: 1px;
  height: 60%;
  left: 2px;
  bottom: 2px;
}
.blue > .border > span:nth-of-type(8) {
  display: block;
  width: 1px;
  height: 5px;
  left: 2px;
  top: 2px;
}
.black {
  background:black;
  color: white;
  font-size: .32rem;
  padding: .05rem .1rem;
  margin-top: -.13rem;
}
.black > .border > span {
  background: white;
}
.black > .border > span:nth-of-type(1) {
  width: 5px;
  left: 2px;
  top: 2px;
}
.black > .border > span:nth-of-type(2) {
  width: 85%;
  right: 2px;
  top: 2px;
}
.black > .border > span:nth-of-type(3) {
  width: 1px;
  height: 60%;
  right: 2px;
  top: 2px;
}
.black > .border > span:nth-of-type(4) {
  width: 1px;
  height: 5px;
  right: 2px;
  bottom: 2px;
}
.black > .border > span:nth-of-type(5) {
  width: 5px;
  right: 2px;
  bottom: 2px;
}
.black > .border > span:nth-of-type(6) {
  width: 85%;
  left: 2px;
  bottom: 2px;
}
.black > .border > span:nth-of-type(7) {
  display: block;
  width: 1px;
  height: 60%;
  left: 2px;
  bottom: 2px;
}
.black > .border > span:nth-of-type(8) {
  display: block;
  width: 1px;
  height: 5px;
  left: 2px;
  top: 2px;
}
.yellow {
  background:rgba(231,214,80,1);
  color: black;
  font-size: .32rem;
  padding: .05rem .1rem;
  margin-top: -.13rem;
}
.yellow > .border > span {
  background: black;
}
.yellow > .border > span:nth-of-type(1) {
  width: 5px;
  left: 2px;
  top: 2px;
}
.yellow > .border > span:nth-of-type(2) {
  width: 85%;
  right: 2px;
  top: 2px;
}
.yellow > .border > span:nth-of-type(3) {
  width: 1px;
  height: 60%;
  right: 2px;
  top: 2px;
}
.yellow > .border > span:nth-of-type(4) {
  width: 1px;
  height: 5px;
  right: 2px;
  bottom: 2px;
}
.yellow > .border > span:nth-of-type(5) {
  width: 5px;
  right: 2px;
  bottom: 2px;
}
.yellow > .border > span:nth-of-type(6) {
  width: 85%;
  left: 2px;
  bottom: 2px;
}
.yellow > .border > span:nth-of-type(7) {
  display: block;
  width: 1px;
  height: 60%;
  left: 2px;
  bottom: 2px;
}
.yellow > .border > span:nth-of-type(8) {
  display: block;
  width: 1px;
  height: 5px;
  left: 2px;
  top: 2px;
}
.green {
  background:linear-gradient(180deg,rgba(254,255,254,1) 0%,rgba(45,163,56,1) 54%,rgba(49,137,41,1) 100%);
  color: black;
  font-size: .32rem;
  padding: .05rem .1rem;
  margin-top: -.13rem;
}
.green > .border > span {
  background: black;
}
.green > .border > span:nth-of-type(1) {
  width: 5px;
  left: 2px;
  top: 2px;
}
.green > .border > span:nth-of-type(2) {
  width: 85%;
  right: 2px;
  top: 2px;
}
.green > .border > span:nth-of-type(3) {
  width: 1px;
  height: 60%;
  right: 2px;
  top: 2px;
}
.green > .border > span:nth-of-type(4) {
  width: 1px;
  height: 5px;
  right: 2px;
  bottom: 2px;
}
.green > .border > span:nth-of-type(5) {
  width: 5px;
  right: 2px;
  bottom: 2px;
}
.green > .border > span:nth-of-type(6) {
  width: 85%;
  left: 2px;
  bottom: 2px;
}
.green > .border > span:nth-of-type(7) {
  display: block;
  width: 1px;
  height: 60%;
  left: 2px;
  bottom: 2px;
}
.green > .border > span:nth-of-type(8) {
  display: block;
  width: 1px;
  height: 5px;
  left: 2px;
  top: 2px;
}
.white {
  background:white;
  color: black;
  font-size: .32rem;
  padding: .05rem .1rem;
  margin-top: -.13rem;
}
.white > .border > span {
  background: black;
}
.white > .border > span:nth-of-type(1) {
  width: 5px;
  left: 2px;
  top: 2px;
}
.white > .border > span:nth-of-type(2) {
  width: 85%;
  right: 2px;
  top: 2px;
}
.white > .border > span:nth-of-type(3) {
  width: 1px;
  height: 60%;
  right: 2px;
  top: 2px;
}
.white > .border > span:nth-of-type(4) {
  width: 1px;
  height: 5px;
  right: 2px;
  bottom: 2px;
}
.white > .border > span:nth-of-type(5) {
  width: 5px;
  right: 2px;
  bottom: 2px;
}
.white > .border > span:nth-of-type(6) {
  width: 85%;
  left: 2px;
  bottom: 2px;
}
.white > .border > span:nth-of-type(7) {
  display: block;
  width: 1px;
  height: 60%;
  left: 2px;
  bottom: 2px;
}
.white > .border > span:nth-of-type(8) {
  display: block;
  width: 1px;
  height: 5px;
  left: 2px;
  top: 2px;
}
</style>
