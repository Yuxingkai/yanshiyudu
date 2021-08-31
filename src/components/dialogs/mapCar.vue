<template>
 <!--<el-dialog :visible.sync="dialogVisible" append-to-body>-->
  <div class="mapCarDialog">
      <div class="header">
          <div>{{param.e.name}}</div>
          <div><img @click="close" :src="closeImg" alt="" /></div>
      </div>
    <div class="mapCarDialog_content">
      <div class="mapCarDialog_content_info">
          <div class="info_item"><span class="info_name">车牌号</span>: {{ param.e.plateNo }} </div>
          <div class="info_item"><span class="info_name">通行位置</span>: {{ param.e.description }} </div>
          <div class="info_item"><span class="info_name">车主姓名</span>：{{ param.e.peopleName }} </div>
          <div class="info_item"><span class="info_name">通行时间</span>: <span class="info_time">{{ param.e.alarmTime }}</span> </div>
      </div>
      <div class="mapCarDialog_content_tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="抓拍照片" name="first">
              <img style="width: 100%;height: 100%" :src="tvSrc" alt="">
          </el-tab-pane>
          <el-tab-pane label="通行视频" name="second">
              <player
                      :src="tvSrc"
                      style="transform: scale(1);transform-origin: 0 0;" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
 <!--</el-dialog>-->
</template>
<script>
  //掉接口
  import { apiNames, videoStream } from '../../Utils/config'
  import user from '../../Utils/user'
  import { Post, PostCopy } from '../../Utils/Http'
export default {
  name: 'mapCarDialog',

  data () {
    return {
      closeImg: require('../../assets/imgs/close.png'),
     dialogVisible: true,
     click: true,
     activeName: 'first',
      tvSrc: ''
    }
  },
  props: {
    param: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  mounted () {

  },
  computed: {

  },
  methods: {

    getstrema () {
      let that = this
      let reqParam = user.getRequestHeader()
      reqParam.ID = this.param.e.thingID
      Post({
        async: true,
        url: apiNames['获取流媒体'],
        data: reqParam,
        dataType: 'json',
        success: function (data) {
          if (data.Code === 0) {
            that.tvSrc = 'rtmp://' + videoStream + data.Data.RTMP
          }
        },
        error: function (err) {
          console.log(JSON.stringify(err) + 'popup 获取门禁信息')
        }
      })
    },
    handleClick(tab, event) {
      if(tab.name == 'second'){
        this.getstrema();
      }else{
        this.tvSrc = this.param.e.images[0]
      }
    },
    close() {
      window.pop.close(this.param.level)
    },
  }
}
</script>
<style lang="scss">
.el-dialog {
  width: 15.3rem;
  background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  .el-dialog__headerbtn {
    font-size: 0.5rem;
  }
}
.el-dialog__body {
  // background-color: rgba(0, 0, 0, 0.1) !important;
}
.el-dialog__header {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.mapCarDialog {
  .el-tabs__content{
    height: 8rem;
      padding-bottom: .3rem;
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__active-bar{
    width: 0.6rem!important;
    background-color: #00F9FC;
    left: 0.34rem;
  }
  .el-tabs__item {
    color: rgba(201, 231, 255, 0.6);
    font-family: "HY65";
    font-size: 0.32rem; 
  }
  .el-tabs__item.is-active{
    color: #00F9FC;
  }
}
</style>
<style lang="scss" scoped>
.mapCarDialog {
    width: 15.3rem;
    background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
    box-shadow: 0px 0px 0.12rem 0.12rem rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(
                    139deg,
                    rgba(83, 140, 206, 1),
                    rgba(5, 77, 125, 1)
    )
    1 1;
    padding: 0 .4rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .header {
        display: flex;
        padding: 0.34rem 0 0 0;
        justify-content: space-between;
        div {
            font-size: 0.36rem;
            font-family: HYQiHei-GES, HYQiHei;
            color: #ffffff;
        }
        img {
            width: 0.36rem;
            height: 0.36rem;
            cursor: pointer;
        }
    }
  .mapCarDialog_content{
    .mapCarDialog_content_info{
      display: flex;
      flex-wrap: wrap;
      .info_laber {
        margin-left: 0.6rem;
        color: #FF9999;
        font-size: 0.24rem;
      }
      .info_item{
        width: 6.78rem;
        text-align: left;
        padding: 0.3rem 0;
        font-size: 0.32rem;
        font-family: "HY55";
        color: #C9E7FF;        
        .info_name {
          display: inline-block;
          width: 1.4rem;
          text-align:justify;
          text-align-last:justify;
        }

      }
      // div:nth-child(even){
      //   padding-left: 0.6rem;
      // }
    }
  }

}
</style>