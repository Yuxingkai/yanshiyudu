<template>
  <div
    style="position: relative;width:100%;height:100%;display: table;"
    class="trans"
    :class="[typeClass, typeScaleInfo]">
    <div
      class="buildingInfo"
      :class="showMask === 'true' ? 'film' : ' ' ">
      <div
        class="film_main clear"
        :style="css">
        <!--<span class="popBg"/>-->
        <div
          class="buildingInfo_main"
          :class="{'overf' : overF}">
          <div class="buildingInfo_header">
            <h3 style="font-size: 24px;color: white">
              {{ title }}
              <!--<span/>-->
              <!--<span :style="{}"/>-->
            </h3>
            <p class="pCon"><span>0</span></p>
            <!--<p class="pSmall"><span><img-->
              <!--src="../../../assets/images/small.svg"-->
              <!--alt=""></span></p>-->
            <p
              class="pClose"
              @click="pClose">
              <span>
                <img
                  style="vertical-align: unset"
                  src="../assets/imgs/close.png"
                  alt="">
              </span>
            </p>
          </div>
          <div
            class="buildingInfo_content"
            style="">
            <slot/>
            <loading :visible="isLoading"/>
            <div
              class="footer"
              :style="footer">
              <div
                class="p_footer"
                :style="css2">
                <slot name="footer"/>
              </div>
              <slot name="equipment"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      css: {
        type: [String],
        default: '0'
      },
      showMask: {
        type: [String],
        default: 'false'
      },
      title: {
        type: [String],
        default: 'false'
      },
      level: {
        type: [Number],
        default: 1
      },
      isLoading: {
        type: [Boolean],
        default: false
      },
      activeColor: {
        type: [String],
        default: '0'
      },
      css2: {
        type: [String],
        default: '0'
      },
      footer: {
        type: [String],
        default: '0'
      },
      overFlow: {
        type: [String],
        default: 'false'
      },
      typeChoose: {
        type: [String],
        default: '3'
      },
      typeScale: {
        type: [String],
        default: '1'
      }
    },
    data () {
      return {
        overF: true,
        typeClass: 'type1',
        typeScaleInfo: 'typeScaleInfo1'
      }
    },
    methods: {
      pClose () {
        window.pop.close(this.level)
        this.$emit('closed')
      },
      overFl () {

      }
    },
    mounted () {
      this.overFlow === 'false' ? this.overF = false : this.overF = true
      if (this.typeChoose === '5') {
        this.typeClass = 'type5'
      } else if (this.typeChoose === '4') {
        this.typeClass = 'type4'
      } else if (this.typeChoose === '3') {
        this.typeClass = 'type3'
      } else if (this.typeChoose === '2') {
        this.typeClass = 'type2'
      } else if (this.typeChoose === '1') {
        this.typeClass = 'type1'
      } else {
        this.typeClass = 'type0'
      }
      if (this.typeScale === '0') {
        this.typeScaleInfo = 'typeScaleInfo0'
      } else {
        this.typeScaleInfo = 'typeScaleInfo1'
      }
    }
  }
</script>

<style scoped>
  h3,
  p {
    margin: 0;
  }

  .buildingInfo {
    color: rgba(255,255,255,.8);
    font-size: .32rem;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    background: rgba(0, 0, 0, .5);
    margin: 0 auto;
  }
  .buildingInfo_main {
    margin: 0 1.2rem;
    padding: 1rem 0 0.5rem 0;
    height: 100%;
  }
  .film {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
  }

  .film_main {
    width: 8rem;
    /*padding: 1rem 1.2rem 0.5rem 1.2rem;*/
    text-align: left;
    /*box-sizing: border-box;*/
    margin: 0 auto;
    position: relative;
  }
  .type0 .film_main:before {
    content: '';
    width: 5rem;
    height: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    /*background: url("../../../assets/images/popUpImg/popBg_topLeft.png") no-repeat left;*/
    /*background-size: contain;*/
  }
  .type0 .film_main:after {
    content: '';
    width: 2rem;
    height: 3rem;
    position: absolute;
    right: -0.4rem;
    top: 0;
    /*background: url("../../../assets/images/popUpImg/popBg_topRight.png") no-repeat left;*/
    /*background-size: contain;*/
  }
  .type0 .popBg {
    width: 100%;
    height: 3rem;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -.2rem;
  }
  .type0 .popBg:before {
    content: '';
    width: 5rem;
    height: 3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    /*background: url("../../../assets/images/popUpImg/popBg_bottomLeft.png") no-repeat left;*/
    /*background-size: contain;*/
  }
  .type0 .popBg:after {
    content: '';
    width: 5rem;
    height: 3rem;
    position: absolute;
    right: -0.9rem;
    bottom: 0;
    /*background: url("../../../assets/images/popUpImg/popBg_bottomRight.png") no-repeat left;*/
    /*background-size: contain;*/
  }
  .type0 .buildingInfo_main {
    /*border: .02rem solid #004e8b;*/
    box-sizing: border-box;
    padding-bottom: .1rem;
    margin: .1rem;
    position: relative;
    background: #334D82;
    /*box-shadow: inset 0 1px 8px 0 rgba(102,149,255,0.50), inset 0 1px 18px 0 rgba(0,78,255,0.50);*/
    /*background:linear-gradient(45deg, transparent .2rem, #334D82 0);*/
  }
  .type0 .buildingInfo_main:before {
    content: '';
    width: 60%;
    height: .2rem;
    background: #334D82;
    transform: skew(45deg);
    position: absolute;
    left: 0.09rem;
    bottom: -.2rem;
  }
  .type0 .buildingInfo_main:after {
    content: '';
    width: 60%;
    height: .2rem;
    background: #334D82;
    transform: skew(-45deg);
    position: absolute;
    right: 0.09rem;
    bottom: -.2rem;
  }
  .buildingInfo_main.overf{
    overflow: hidden;
  }
  .type0 .buildingInfo .buildingInfo_header {
    position: relative;
    box-sizing: border-box;
    padding-left: .24rem;
    height: 1.2rem;
    line-height: 1.3rem;
    font-size: .44rem;
    /*background: rgba(44, 136, 255, .35);*/
    /*background: url("../../../assets/images/popUpImg/popBg_header.png") no-repeat center;*/
    /*background-size: 100% 100%;*/
  }

  .buildingInfo .buildingInfo_header h3 {
    font-size: .36rem;
    position: relative;
    display: inline-block;
    padding-right: .4rem;
    padding-bottom: .2rem;
    margin-left: .6rem
  }

  .buildingInfo .buildingInfo_header h3 span {
    display: inline-block;
    position: absolute;
  }

  .buildingInfo .buildingInfo_header h3 span:nth-of-type(1) {
    height: .08rem;
    width: .62rem;
    background: #b5e1ea;
    left: -.12rem;
    bottom: .18rem;
  }

  .buildingInfo .buildingInfo_header h3 span:nth-of-type(2) {
    height: .74rem;
    width: 100%;
    border-bottom: 1px solid #0062b1;
    border-right: 1px solid #0062b1;
    left: .6rem;
    bottom: .2rem;
  }

  .buildingInfo .buildingInfo_header p {
    width: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    height: 1.2rem;
    /*border-left: 1px solid #1d4d94;*/
    display: inline-block;
    position: absolute;
  }

  .buildingInfo .buildingInfo_header p span {
    width: .9rem;
    text-align: center;
    margin-top: .25rem;
    height: .9rem;
    border-radius: 50%;
    display: inline-block;
  }

  .buildingInfo .buildingInfo_header p.pCon {
    right: 1.54rem;
    border-left: none;
    display: none;
  }

  .buildingInfo .buildingInfo_header p.pCon span {
    color: transparent;
  }

  .buildingInfo .buildingInfo_header p.pSmall {
    right: .77rem;
    cursor: pointer;
    display: none;
  }

  .buildingInfo .buildingInfo_header p.pClose {
    right: 1.6rem;
    top: .4rem;
    cursor: pointer;
    z-index: 2;
    line-height: 1.1rem;
  }

  .buildingInfo .buildingInfo_header p.pSmall span img {
    width: .3rem;
    text-align: center;
    line-height: .3rem;
    height: .3rem;
  }

  .buildingInfo .buildingInfo_header p.pClose span img {
    width: .4rem;
    height: .4rem;
    text-align: center;
  }

  .buildingInfo .buildingInfo_header p.pClose:hover span {
    /*background: rgba(255, 8, 8, 0.76);*/
    background: #1893FF;
  }

  .buildingInfo .buildingInfo_header p.pSmall:hover span {
    background: rgba(255, 8, 8, 0.76);
  }
  .buildingInfo_content {
    position: relative;
    width:100%;
    height:100%;
    display: table;
    padding-bottom: .4rem;
  }
  .film_main {
    position: relative;
  }
  .type1 .film_main:before {
    content: '';
    width: 100%;
    height: 80%;
    /*background:  url("../../../assets/images/popUpImg/popBgC_1.png") repeat center;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type1 .buildingInfo_main:before {
    content: '';
    width: 100%;
    height: 100%;
    /*background: url("../../../assets/images/popUpImg/popBgT_1.png") no-repeat top,*/
    /*url("../../../assets/images/popUpImg/popBgB_1.png") no-repeat bottom;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type2 .film_main:before {
    content: '';
    width: 100%;
    height: 80%;
    /*background:  url("../../../assets/images/popUpImg/popBgC_4.png") repeat center;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type2 .buildingInfo_main:before {
    content: '';
    width: 100%;
    height: 100%;
    /*background: url("../../../assets/images/popUpImg/popBgT_2.png") no-repeat top,*/
    /*url("../../../assets/images/popUpImg/popBgB_2.png") no-repeat bottom;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type4 .film_main:before {
    content: '';
    width: 100%;
    height: 80%;
    /*background:  url("../../../assets/images/popUpImg/popBgC_4.png") repeat center;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type4 .buildingInfo_main:before {
    content: '';
    width: 100%;
    height: 100%;
    /*background: url("../../../assets/images/popUpImg/popBgT_4.png") no-repeat top,*/
    /*url("../../../assets/images/popUpImg/popBgB_4.png") no-repeat bottom;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type3 .film_main:before {
    content: '';
    width: 100%;
    height: 80%;
    /*background:  url("../../../assets/images/popUpImg/popBgC_3.png") repeat center;*/
    /*background-size: 100%;*/
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .type3 .buildingInfo_main:before {
    content: '';
    width: 100%;
    height: 100%;
    /*background: url("../../../assets/images/popUpImg/popBgT_3.png") no-repeat top,*/
    /*url("../../../assets/images/popUpImg/popBgB_3.png") no-repeat bottom;*/
    /*background-size: 100%;*/
    background: linear-gradient(to right,rgba(4, 6, 18, 0.8) 85%,rgba(4, 6, 18, 0) 100%);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .footer {
    margin: .2rem 0 0 0;
    bottom: .1rem;
    box-sizing: border-box;
    padding: 0 .12rem;
    position: relative;
    color: #48B4FF;
  }

  .footer div.p_footer {
    width: 100%;
    position: relative;
    height: 1rem;
    line-height: 1rem;
    padding-left: .438rem;
    box-sizing: border-box;
    background-color: #12203B;
    /*border: .01rem solid #2c88ffb3;*/
  }

  .footer div.p_footer::before {
    /*content: "";*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: .168rem;*/
    /*height: 100%;*/
    /*background: #2c88ff40;*/
  }

  .footer div.p_footer::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: .168rem;
    height: 100%;
    /* background: #2c88ff40; */
  }

  .footer span {
    margin-right: .6rem;
  }

  .footer span input {
    background-color: #ff5d5b;
    vertical-align: middle;
    margin-top: -.05rem;
  }

  .ball {
    position: relative;
    margin-left: .45rem;
  }

  .ball::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -.45rem;
    background: #032d12;
    border-radius: 50%;
    width: .356rem;
    height: .356rem;
  }

  .ball::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -.375rem;
    background: #30d200;
    border-radius: 50%;
    width: .22rem;
    height: .22rem;
  }

  .equipment {
    position: absolute;
    top: .09rem;
    right: .1rem;
    z-index: 1;
  }

  .equipment b {
    background: -webkit-linear-gradient(#071225, #182c5f);
    background: -o-linear-gradient(#071225, #182c5f);
    background: -moz-linear-gradient(#071225, #182c5f);
    background: linear-gradient(#071225, #182c5f);
    position: absolute;
    top: 50%;
    right: .2rem;
    width: .5rem;
    height: .5rem;
    transform: translateY(-50%)
  }

  .equipment>span {
    margin: 0 ;
    background: #112147;
    cursor: pointer;
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
  }
  @media screen and (min-width: 3001px) {
    .trans{
      transform: scale(1.3);
    }
    .typeScaleInfo0 {
      transform: scale(1.25);
    }
  }
  @media screen and (min-width: 6001px) {
    .trans {
      transform: scale(1.6);
    }
  }
</style>
