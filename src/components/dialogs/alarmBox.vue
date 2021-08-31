<template>
  <div
    class="peopleAlarmDialog_box"
    v-if="dialogVisible"
  >
    <el-dialog
      :visible.sync="visibleBox"
      width="20rem"
      append-to-body
      v-if="visibleBox"
    >
      <div
        class="content_"
        v-if="checki == 1"
      >
        <div class="camera">
          <player :src="tvSrc" />
        </div>
      </div>
      <div
        class="content_"
        v-if="checki == 2"
      >
        <div
          class="camera"
          v-if="allData.images&&allData.images[0]"
        >
          <img
            class="people-pic"
            :src="allData.images&&allData.images[0]"
          >
        </div>
        <div
          class="camera"
          v-else
        >
          <!-- <div :class="{people: true}"></div> -->
          <div class="tip">
            <img
              class="tip_noimg"
              src="../../assets/imgs/common/noimg.png"
              alt=""
            >
          </div>
        </div>
      </div>
      <div
        class="content_"
        v-if="checki == 3"
      >
        <div
          class="RelationChart"
          style="width: 100%;height: 100%; padding: 0.2rem 0.4rem;"
        >
          <div
            id="map"
            class="map"
            ref="map"
            style="height: 480px;width: 890px"
          >
          </div>
        </div>
      </div>
    </el-dialog>
    <div class="peopleAlarmDialog">
      <div class="alarm_title">
        <div class="text">{{allData.alarmTypeName}} <span
            class="lable"
            v-if="allData.state"
          >{{allData.state}}</span></div>
        <div
          class="quitBtn"
          @click="dialogVisible=false"
        >X</div>
      </div>
      <div
        class="alarm_content_people"
        v-if='type == "people"'
      >
        <div class="alarm_content_add">
          <div class="alarm_content_left">
            <div class="alarm_content_left_info">
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">报警类型: </div>
                <div class="info_detail_right">人口预警</div>
              </div>
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">人员姓名: </div>
                <div class="info_detail_right">{{peopleInfo&&peopleInfo.name}}</div>
              </div>
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">报警时间: </div>
                <div class="info_detail_right">{{allData&&allData.alarmTime}}</div>
              </div>
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">最近通行时间: </div>
                <div class="info_detail_right">{{peopleInfo&&peopleInfo.lastAccessTime}}</div>
              </div>
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">居住地址: </div>
                <div class="info_detail_right">{{peopleInfo&&peopleInfo.domiclleDetailAddress}}</div>
              </div>
            </div>
            <div class="alarm_content_left_btn">
              <div
                class="video"
                @click='check(1)'
              >查看视频</div>
              <div
                class="img"
                @click='check(2)'
              >查看图片</div>
            </div>
          </div>
          <div class="alarm_content_right">
            <peopleInfoItem :peopleInfo="peopleInfo" />
            <div
              class="relationInfo"
              @click='check(3)'
            >关系人信息</div>
          </div>
          <div class="alarm_content_process">
            <div
              class="process_item"
              v-for="(item,index) in alarmHistoryContent"
              :key="index"
            >
              <div class="name">
                {{item.processName}}
                <div
                  class="dot"
                  v-if="index != alarmHistoryContent.length-1"
                ></div>
                <div
                  v-else
                  class="active"
                ></div>
              </div>
              <div class="content">
                <div
                  class="info"
                  v-for="(v,i) in item.processContent.split('/n')"
                  :key='i'
                >
                  {{v}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="alarm_content_device"
        v-if='type == "device"'
      >
        <div class="basicInfo">
          <div class="basicInfo_title">报警详情</div>
          <div class="basicInfo_detail">
            <div class="basicInfo_detail_box">
              <div class="basicInfo_detail_item">
                <span>报警位置：</span>
                <span>{{allData.address}}</span>
              </div>
              <div class="basicInfo_detail_item">
                <span>报警时间：</span>
                <span>{{allData.alarmTime}}</span>
              </div>
              <div class="basicInfo_detail_item">
                <span>报警详情：</span>
                <span>{{allData.alarmHistoryContent&&allData.alarmHistoryContent&&allData.alarmHistoryContent[0].processContent}}</span>
              </div>
            </div>
            <div class="basicInfo_detail_item">
              <span>报警类型：</span>
              <span>{{allData.alarmTypeName}}</span>
            </div>
          </div>
        </div>
        <div class="basicInfo">
          <div class="basicInfo_title">设备详情</div>
          <div class="basicInfo_detail">
            <div class="basicInfo_detail_box">
              <div class="basicInfo_detail_item">
                <span>设备名称：</span>
                <span>{{deviceInfo&&deviceInfo.name}}</span>
              </div>
              <div class="basicInfo_detail_item">
                <span>设备厂家：</span>
                <span>{{deviceInfo&&deviceInfo.productBrand}}</span>
              </div>
              <div class="basicInfo_detail_item">
                <span>安装位置：</span>
                <span>{{deviceInfo&&deviceInfo.installAddr}}</span>
              </div>
            </div>
            <div class="basicInfo_detail_item">
              <span>报警详情：</span>
              <span>{{allData.alarmTypeName}}</span>
            </div>
          </div>
        </div>
        <div class="basicInfo">
          <div class="basicInfo_title">责任人信息</div>
          <div class="basicInfo_list">
            <div class="processUserInfo">
              <div class="user">责任人</div>
              <div class="tel">手机号码</div>
              <div class="status">报警状态</div>
              <div class="alert">催办</div>
            </div>
            <div class="info_box" v-if="processUserInfo">
              <div
                class="processUserInfo"
                v-for="(v,i) in processUserInfo"
                :key="i"
              >
                <div class="user">{{v.userName}}</div>
                <div class="tel">{{v.phoneNo}}</div>
                <div class="status"></div>
                <div class="alert"></div>
              </div>
            </div>
            <div class="info_box" v-else>
              <div class="nodata">
                暂无数据
              </div>
            </div>
            <div class="process" v-if="alarmHistoryContent">
              <div
                class="process_item"
                v-for="(item,index) in alarmHistoryContent"
                :key="index"
              >
                <div class="name">
                  {{item.processName}}
                  <div
                    class="dot"
                    v-if="index != alarmHistoryContent.length-1"
                  ></div>
                  <div
                    v-else
                    class="active"
                  ></div>
                </div>
                <div class="day">{{item.processTime&&formatDate(item.processTime,'MM.dd')}}</div>
                <div class="time">{{item.processTime&&formatDate(item.processTime,'HH:mm:ss')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="alarm_content_people"
        v-if='type == "vehicle"'
      >
        <div class="alarm_content_add">
          <div class="alarm_content_left">
            <div class="alarm_content_left_info">
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">车牌号: </div>
                <div class="info_detail_right">沪A239843</div>
              </div>
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">报警时间: </div>
                <div class="info_detail_right">2020.01.26 13：11:23</div>
              </div>
              <div class="alarm_content_left_info_detail">
                <div class="info_detail_left">发现地点: </div>
                <div class="info_detail_right">田林十二村23号2020室</div>
              </div>
            </div>
            <div class="alarm_content_left_btn">
              <div
                class="video"
                @click='check(1)'
              >查看视频</div>
              <div
                class="img"
                @click='check(2)'
              >查看图片</div>
            </div>
          </div>
          <div class="alarm_content_right">
            <peopleInfoItem :peopleInfo="peopleInfo" />
            <div
              class="relationInfo"
              @click='check(3)'
            >关系人信息</div>
          </div>
          <div class="alarm_content_process">
            <div
              class="process_item"
              v-for="(item,index) in alarmHistoryContent"
              :key="index"
            >
              <div class="name">
                {{item.processName}}
                <div
                  class="dot"
                  v-if="index != alarmHistoryContent.length-1"
                ></div>
                <div
                  v-else
                  class="active"
                ></div>
              </div>
              <div class="content">
                <div
                  class="info"
                  v-for="(v,i) in item.processContent.split('/n')"
                  :key='i'
                >
                  {{v}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import peopleInfoItem from './peopleInfoItem'
import RelationChart from 'relation-chart'
import { apiNames } from '../../Utils/config'

export default {
  name: 'AlarmDialog',
  props: {
    type: {
      default: 'people',//fire,people,vehicle
      type: String
    },
    // dialogVisible: {
    //   default: false,//fire,people,vehicle
    //   type: Boolean
    // },
  },
  components: {
    peopleInfoItem
  },
  data() {
    return {
      dialogVisible: false,
      activeName: 'second',
      credentialNo: '',//
      click: true,
      deviceInfo: {},
      peopleInfo: {},
      allData: {},//报警位置
      processUserInfo: [],
      alarmHistoryContent: [],
      visibleBox: false,
      checki: 1,      //关系码表
      relationList: {
        1: '主人',
        2: '配偶',
        3: '儿子',
        4: '儿媳',
        5: '女儿',
        6: '女婿',
        7: '孙子／外孙',
        8: '孙女／外孙女',
        9: '孙媳妇／外孙媳妇',
        10: '孙女婿／外孙女婿',
        11: '父母',
        12: '公婆',
        13: '岳父母',
        14: '祖父母／外祖父母',
        15: '兄弟姐妹',
        16: '其他亲属',
        17: '员工',
        18: '租客',
        99: '其他'
      },
      relationData: {},
      tvSrc: '',
    }
  },
  mounted() {
    this.$bus.on('AlarmDialog', (item) => {
      this.dialogVisible = true
      // console.log(item)
      this.credentialNo = item.peopleInfo&&item.peopleInfo.credentialNo
      this.getInfos(item._id)
    })
  },
  created() {
    //  this.getInfos(item._id)
  },
  computed: {
    realWidth: function () {
      return this.click ? '24.34rem' : '34.44rem'
    }
  },
  methods: {
    check(i) {
      console.log(123)
      this.visibleBox = !this.visibleBox
      this.checki = i
      if (i == 3) {
        this.$post(apiNames['一人一档人员信息'], {
          credentialNo: this.credentialNo,
          virtualSpaceCode: this.$store.state.currentVirtualSpaceCode
        }).then(res => {
          console.log(this.peopleInfo.name)
          if (res.responseStatus.resultCode === 0) {


            //处理关系节点
            let datas = {
              nodes: [],
              links: [],
            }
            let num
            res.data.relationshipInfo.forEach((item, i) => {
              if (item.peopleName == this.peopleInfo.name) {
                num = i
              }
            })
            res.data.relationshipInfo.forEach((item, i) => {
              let nodesobj = {
                "name": item.peopleName,
                "avatar": item.headPic,
                "role_id": i,
              }
              let linksobj = {
                "source": num,
                "target": i,
                "relation": this.relationList[item.spaceOwnerRelation],
                "color": "734646"
              }

              datas.nodes.push(nodesobj)
              if (i != num) {
                datas.links.push(linksobj)
              }
            })
            console.log(num)
            console.log(datas)
            this.relationData = datas
            setTimeout(() => {
              new RelationChart(this.$refs.map, datas)
            }, 500)
          } else {
            this.$newthost({
              content: res.data.name
            })
          }
        })
      }
    },
    formatDate(date, fmt) {
      date = new Date(date);
      if (typeof (fmt) === "undefined") {
        fmt = "yyyy-MM-dd HH:mm:ss";
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'Y': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
        }
      }
      return fmt
    },
    //
    getInfos(id) {
      this.$get(apiNames['报警详情'] + id).then(res => {
        if (res.responseStatus.resultCode === 0) {
          console.log(res.data)
          this.deviceInfo = res.data.deviceInfo
          this.peopleInfo = res.data.peopleInfo
          this.allData = res.data
          this.alarmHistoryContent = res.data.alarmHistoryContent
          this.processUserInfo = res.data.alarmHistoryContent[0].processUserInfo

        } else {
          this.$newthost({
            content: res.data.name
          })
        }
      })
    },
    handleClick() {
      // console.log(tab, event);
    },
    clickRelation(e) {
      // e就是子组件传过来的值
      this.click = e
    }
  },
  beforeDestroy() {
    this.$bus.off('AlarmDialog')//移出监听
  }
}
</script>

<style lang="scss" scoped>
.peopleAlarmDialog_box {
  z-index: 11;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(4, 6, 18, 0.8) 85%,
    rgba(4, 6, 18, 0) 100%
  );

  .peopleAlarmDialog {
    border: 1px solid rgba(201, 231, 255, 0.2);
    padding-left: 0.74rem;
    padding-bottom: 0.74rem;
    width: 29rem;
    margin: 2rem auto;
    background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(
        139deg,
        rgba(83, 140, 206, 1),
        rgba(5, 77, 125, 1)
      )
      1 1;
    .el-dialog__headerbtn {
      font-size: 0.5rem;
    }

    .alarm_title {
      justify-content: space-between;
      display: flex;
      margin-top: 0.38rem;
      .text {
        font-size: 0.36rem;
        font-family: 'HY65';
        color: #ffffff;
        .lable {
          margin-left: 0.6rem;
          display: inline-block;
          color: #ffffff;
          font-size: 0.24rem;
          padding: 0.04rem 0.14rem;
          background: rgba(255, 101, 120, 0.3);
          border-radius: 3px;
          border: 1px solid #ff6578;
        }
      }
      .quitBtn {
        justify-content: flex-end;
        padding-right: 0.48rem;
        cursor: pointer;
      }
    }

    .alarm_content_people {
      display: flex;
      flex-direction: row;
      padding-top: 0.6rem;
      .alarm_content_add {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        // width: 24rem;
        .alarm_content_left {
          width: 10rem;
          height: 5.32rem;
          margin-right: 0.6rem;
          display: flex;
          border-right: 1px solid #1893ff;
          .alarm_content_left_btn {
            width: 2.1rem;
            margin-top: 0.6rem;
            margin-left: 0.2rem;
            margin-right: 1.4rem;
            .video,
            .img {
              width: 1.65rem;
              height: 0.56rem;
              line-height: 0.56rem;
              text-align: center;
              background: rgba(78, 167, 254, 0.1);
              border: 1px solid #51cfff;
              color: #c5e4ff;
              font-family: 'HY55';
              font-size: 0.24rem;
              cursor: pointer;
            }
            .img {
              margin-top: 0.4rem;
            }
          }
          .alarm_content_left_info {
            flex: 1;
            .alarm_content_left_info_detail {
              display: flex;
              margin-top: 0.6rem;
              color: rgba(255, 255, 255, 0.8);
              font-family: 'HY55';
              font-size: 0.28rem;
              .info_detail_left {
                flex: 2;
                text-align: right;
                padding-right: 0.1rem;
              }
              .info_detail_right {
                flex: 3;
                text-align: left;
              }
            }
          }
        }
        .alarm_content_right {
          width: 14.4rem;
          height: 5.32rem;
          position: relative;
          .relationInfo {
            position: absolute;
            top: 0;
            right: -2rem;
            width: 1.65rem;
            height: 0.56rem;
            line-height: 0.56rem;
            text-align: center;
            background: rgba(78, 167, 254, 0.1);
            border: 1px solid #51cfff;
            color: #c5e4ff;
            font-family: 'HY55';
            font-size: 0.24rem;
            cursor: pointer;
          }
          // border: 1px solid #1893FF;
        }
        .alarm_content_process {
          margin-top: 0.6rem;
          width: 95%;
          // border: 1px solid #1893FF;
          padding: 0.5rem 0.4rem;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          .process_item {
            width: 8.6rem;
            height: 2rem;
            display: flex;
            flex-direction: column;
            .name {
              height: 1rem;
              line-height: 1rem;
              color: #00f9fc;
              font-family: 'HY75';
              font-size: 0.24rem;
              border-top: 1px dashed rgba(201, 231, 255, 0.2);
              position: relative;
              .dot {
                width: 0.48rem;
                height: 0.48rem;
                background: url('../../assets/imgs/common/process_off.png');
                background-size: 100% 100%;
                position: absolute;
                top: -0.26rem;
                left: 4.1rem;
              }
              .active {
                width: 0.48rem;
                height: 0.48rem;
                background: url('../../assets/imgs/common/process_on.png');
                background-size: 100% 100%;
                position: absolute;
                top: -0.26rem;
                left: 4.1rem;
              }
            }
            .content {
              background: rgba(0, 249, 252, 0.04);
              border-radius: 0.16rem;
              padding: 0.2rem;
              box-sizing: border-box;
            }
            .info {
              color: #c5e4ff;
              font-family: 'HY65';
              font-size: 0.28rem;
              text-align: left;
              padding-left: 0.2rem;
            }
          }
        }
      }
    }
    .alarm_content_device {
      display: flex;
      flex-direction: column;

      .basicInfo {
        margin-top: 0.6rem;
        .basicInfo_list {
          display: flex;
          flex-direction: column;
          padding: 0 0.8rem 0.3rem 0.8rem;
          margin-top: 0.6rem;
          margin-right: 0.74rem;
          box-sizing: border-box;
          border: 1px solid rgba(201, 231, 255, 0.2);
          .info_box {
            height: 2rem;
            overflow-y: scroll;
            .nodata {
              margin-top: 0.2rem;
              color: #c5e4ff;
              font-family: 'HY55';
              font-size: 0.24rem;
            }
          }
          .processUserInfo {
            border-bottom: 1px solid rgba(201, 231, 255, 0.2);
            height: 1rem;
            line-height: 1rem;
            display: flex;
            flex-direction: row;
            .user,
            .tel,
            .alert,
            .status {
              padding-left: 0.6rem;
              text-align: left;
              flex: 3;
              color: #c5e4ff;
              font-family: 'HY55';
              font-size: 0.24rem;
            }
          }
          .process {
            margin-top: 0.8rem;
            display: flex;

            .process_item {
              width: 2.6rem;
              height: 2rem;
              display: flex;
              flex-direction: column;
              .name {
                height: 1rem;
                line-height: 1rem;
                color: #00f9fc;
                font-family: 'HY75';
                font-size: 0.24rem;
                border-top: 1px dashed rgba(201, 231, 255, 0.2);
                position: relative;
                .dot {
                  width: 0.48rem;
                  height: 0.48rem;
                  background: url('../../assets/imgs/common/process_off.png');
                  background-size: 100% 100%;
                  position: absolute;
                  top: -0.26rem;
                  left: 1.1rem;
                }
                .active {
                  width: 0.48rem;
                  height: 0.48rem;
                  background: url('../../assets/imgs/common/process_on.png');
                  background-size: 100% 100%;
                  position: absolute;
                  top: -0.26rem;
                  left: 1.1rem;
                }
              }
              .time,
              .day {
                color: #00f9fc;
                font-family: 'DINBOLD';
                font-size: 0.24rem;
              }
            }
          }
        }
        .basicInfo_title {
          color: #00f9fc;
          padding-left: 0.4rem;
          font-size: 0.32rem;
          text-align: left;
          font-family: 'HY65';
          border-left: 3px solid #00f9fc;
        }
        .basicInfo_detail {
          margin-top: 0.44rem;
          margin-right: 0.74rem;
          padding: 0.36rem 0.6rem;
          background: rgba(0, 249, 252, 0.04);
          border-radius: 0.2rem;
          .basicInfo_detail_box {
            display: flex;
            justify-content: space-between;
          }
          .basicInfo_detail_item {
            margin-bottom: 0.36rem;
            text-align: left;
            width: 6rem;
            font-size: 0.32rem;
            font-family: 'HY55';
            color: #c9e7ff;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-dialog {
  margin-top: 2.6rem !important;
  background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  .el-dialog__headerbtn {
    position: absolute;
    top: 0.2rem;
    right: 0.4rem;
  }
  .content_ {
    // width: 17.6rem;
    margin-top: 0.3rem;
    height: 10rem;
    background: #040613;
    border: 1px solid rgba(201, 231, 255, 0.2);
    .camera {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-right: 0.22rem;
      // margin-top: 0.48rem;
      // background: url("../assets/imgs/common/camera.png");
      // background-size: 100% 100%;
      .people-pic {
        width: 1.38rem;
        height: 1.84rem;
      }
      .tip {
        width: 1.38rem;
        height: 1.84rem;
        // text-align: center;
        // line-height:  1.84rem;
        // padding-top: 0.2rem;
        color: #c9e7ff;
        font-size: 0.28rem;
        font-family: 'HY65';
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
}
</style>
