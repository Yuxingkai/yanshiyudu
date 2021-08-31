<template>
 <el-dialog :visible.sync="dialogVisible" width="21.28rem"  append-to-body class="labelDetail">
  <div class="labelDetail_box">
    <div class="labelDetail_title">
      <span class="text">人口标签库</span>
    </div>
    <div class="labelDetail_content">
      <div class="basicInfo">
        <div class="basicInfo_title">系统标签</div>
        <div class="basicInfo_detail">
          <div class="basicInfo_detail_item" v-for="(item,index) in 18" :key='index'>
            <span>陌生人</span>
          </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="basicInfo_title">关注人员</div>
        <div class="basicInfo_detail">
          <div class="basicInfo_detail_item" v-for="(item,index) in 8" :key='index' :class="{select: index == 1}">
            <span>陌生人</span>
          </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="basicInfo_title">关爱人员</div>
        <div class="basicInfo_detail">
          <div class="basicInfo_detail_item" v-for="(item,index) in 8" :key='index'>
            <span>老人</span>
          </div>
        </div>
      </div>
    </div>
  </div>
 </el-dialog>
</template>
<script>
// import peopleInfoItem from './peopleInfoItem'
export default {
  name: 'labelDetail',
  components: {
    // peopleInfoItem
  },
  data () {
    return {
     dialogVisible: false,
     tabIndex: 0,
    }
  },
  mounted () {
    this.$bus.on('labelDetail', () => {
      this.dialogVisible = true
    })
  },
  computed: {
    // realWidth: function () {
    //   return this.click ? '34.84rem' : '34.44rem'
    // }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.labelDetail {
  .el-dialog {
    margin-top: 1.6rem!important;
    margin: 1.0rem auto!important;
    // height: 19.42rem;
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    .el-dialog__headerbtn {
      font-size: 0.5rem;
    }
    .el-dialog__body {
      padding: 0.5rem 0.6rem 0.4rem;
    }
  }
}


</style>
<style lang="scss" scoped>
.labelDetail_box {
    position: relative;
  .labelDetail_title {
    position: absolute;
    top: -0.4rem;
    left: 0;
    .text {     
      font-size: 0.36rem;
      font-family: "HY65";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
  }

  .labelDetail_content {
    display: flex;
    flex-direction: column;
    
    .basicInfo {
    padding-top: 0.6rem;
      .basicInfo_title {
        color: #00F9FC;
        padding-left: 0.4rem;
        font-size: 0.32rem;
        font-family: "HY65";
        border-left: 3px solid #00F9FC;
      }
      .basicInfo_detail {
        display: flex;
        flex-wrap: wrap;    
        // background: rgba(0, 249, 252, 0.04);
        border-radius: 8px;
        // margin-top: 0.44rem;
        padding: 0.38rem 0.38rem 0.04rem 0.38rem ;
        .basicInfo_detail_item {
          width: 1.8rem;
          height: 0.74rem;
          line-height: 0.74rem;
          margin-right: 0.4rem;
          margin-bottom: 0.4rem;
          text-align: center;
          background: rgba(0, 249, 252, 0.04);
          border-radius: 4px;
          border: 1px solid rgba(201, 231, 255, 0.2);
          font-size: 0.28rem;
          font-family: "HY55";         
          // &:nth-child(1) {
          //   text-align: left;
          // }
          // &:nth-child(5) {
          //   text-align: right;
          // }
          // &:nth-child(6) {
          //   text-align: left;
          // }
        }
        .select {
          border: 1px solid #50E3C2;
        }
      }
    }
  }
}
</style>