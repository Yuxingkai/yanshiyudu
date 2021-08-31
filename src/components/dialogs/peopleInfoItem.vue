<template>
  <div class="peopleInfoItem">
    <div class="peopleInfoItem_img">
      <div class="img" v-if="peopleInfo.headPic" style="">
        <img :src="faceUrlEx+peopleInfo.headPic" alt="" style="width:100%;height:100%" class="img_filter">
      </div>
      <div class="img" v-else>
        <div class="tip">
          <img  class="tip_noimg" src="../../assets/imgs/common/noimg.png" alt="">
        </div>
      </div>
      <span class="peopleInfoItem_imgLable">{{peopleInfo.tags&&peopleInfo.tags[0]}}</span>
    </div>
    <div class="peopleInfoItem_detail">
      <div class="peopleInfoItem_detail_left">
        <div>姓名: {{peopleInfo.name}}</div>
        <div class="detail_gap">民族: {{peopleInfo.nation}}</div>
        <div class="detail_gap">学 历：{{peopleInfo.educationCode}}</div>
        <div class="detail_gap">身份证号：{{peopleInfo.credentialNoDes}}</div>
        <div class="detail_gap">户 籍：{{peopleInfo.domiclle}}</div>
      </div>
      <div class="peopleInfoItem_detail_right">
        <div>性别: 男</div>
        <div class="detail_gap">政治面貌: {{peopleInfo.poitical}}</div>
        <div class="detail_gap">婚姻状况: {{peopleInfo.maritalStatus}}</div>
        <div class="detail_gap">出生日期: {{peopleInfo.birthDate}}</div>
        <div class="detail_gap">联系方式: {{peopleInfo.phoneNo}}</div>
      </div>
    </div>
    <!-- <div class="relationInfo" @click="clickRelation">关系人信息</div> -->
  </div>
</template>
<script>
import { faceUrl } from '../../Utils/config.js'
export default {
  name: 'peopleInfoItem',
  props: {
    peopleInfo: {
      default: function() {
        return {}
      },
      type: Object
    },
  },
  data () {
    return {
     dialogVisible: false,
     isShow: true,
     faceUrlEx: faceUrl,//拼接地址
    }
  },
  mounted () {

  },
  methods: {
    clickRelation() {
      this.isShow = !this.isShow
      this.$emit('clickRelation', this.isShow)
    }
  }
}
</script>
<style lang="scss" scoped>
  .peopleInfoItem {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 0.4rem 0 0.4rem 0;
    box-sizing: border-box; 
    .peopleInfoItem_img {
      width: 3.1rem;
      padding-right: 1.8rem;
      padding-left: 1.2rem;
      
        &:nth-of-type(1) {
          .img {
            width: 3.1rem;
            height: 3.8rem;
            background: rgba(0, 249, 252, 0.02);
            border: 1px solid rgba(201, 231, 255, 0.2);
            .tip {
              width: 3.1rem;
              height: 3.8rem;
              // text-align: center;
              // line-height:  1.84rem;
              // padding-top: 0.2rem;
              color: #C9E7FF;
              font-size: 0.28rem;
              font-family: "HY65";
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .tip_noimg {
                width: 0.88rem;
                height: 0.88rem;
              }
            }
          }
        }
      
      .peopleInfoItem_imgLable {
          color: #C9E7FF;
          font-family: "HY55";
          font-size: 0.28rem;
          display: inline-block;
          margin-top: 0.44rem;
      }
    }
    .peopleInfoItem_detail {
      flex: 1;
      display: flex;
      div {
       font-family: "HY55";
       font-size: 0.28rem;  
       color: rgba(255, 255, 255, 0.8);  
      }
      &_left{
        flex: 1;
        text-align: left;
      }
      &_right{
        text-align: left;
        flex: 1;
      }
      .detail_gap {
        margin-top: 0.46rem;
      }
 
    }
    .relationInfo {
      position: absolute;
      top: 0.2rem;
      right: 1rem;  
      padding: 0.14rem 0.24rem;
      background: #4EA7FE;
      border: 1px solid #51CFFF;
      border-radius: 5px;
      color: #C5E4FF;
      font-family: "HY55";
      font-size: 0.28rem;
    }
  }
</style>