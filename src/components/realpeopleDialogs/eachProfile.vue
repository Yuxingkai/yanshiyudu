<template>
 <el-dialog :visible.sync="dialogVisible" v-if="dialogVisible" :width="realWidth" append-to-body>
  <div class="eachProfileDialog">
    <div class="eachProfile_title">
      <span class="text">一人一档</span>
    </div>
    <div class="eachProfile_content">
        <div class="eachProfile_left">
          <div class="left_up">
            <div class="left_up_pic fixMr">
              <div class="image" v-if="idPicSrc">
                <img
                  class="people-pic"
                  :src="faceUrlEx+idPicSrc"
                >
              </div>
              <div class="image_no" v-else>
                <img
                  src="../../assets/imgs/common/noimg.png"
                >
              </div>
              <div class="title">证件照片</div>
            </div>
            <div class="left_up_pic fixMr" >
              <div class="image" v-if="headPic">
                <img
                  class="people-pic"
                  :src="faceUrlEx+headPic"
                >
              </div>
              <div class="image_no" v-else>
                <img                
                  src="../../assets/imgs/common/noimg.png"
                >
              </div>
              <div class="title">采集照片</div>
            </div>
          </div>
          <div class="left_info">
            <div class="profileInfo">
                <div class="profileInfo_record"><span class="jus_title">{{peopleInfo.peopleName?peopleInfo.peopleName:'未知'}}</span><span>{{getAgeSexN(peopleInfo.genderCode,peopleInfo.birthDate,peopleInfo.nationCode)}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">手机号码: </span><span>{{peopleInfo.phoneNo}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">证件类型: </span>{{typeCard[peopleInfo.credentialType]}}</div>
                <div class="profileInfo_detail"><span class="jus_name">证件号码: </span ><span>{{peopleInfo.credentialNo}}</span></div>
                <!-- <div class="profileInfo_detail"><span class="jus_name">居住地址: </span>{{juzhuAddress}}</div> -->
                <div class="profileInfo_detail"><span class="jus_name">户籍位置: </span>{{peopleInfo.domiclleDetailAddress}}</div>
                <div class="profileInfo_detail"><span class="jus_name">人口标签: </span><span class="laberStyle">{{labers}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">车辆信息: </span><span class="colorStyle">{{plateNo}}</span></div>
            </div>
          </div>
          <div class="left_down">
            <div v-for="(item, index) in houseData" :key="index" class="dataItem" @click='doTab(index)'>
              <span>{{item.name}}</span>
              <span>{{item.num}}</span>
            </div>
          </div>
        </div>
        <div class="eachProfile_center">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="同户关系" name="first">
              <div class="nodata" v-show="relationshipInfo.length == 0">
                 暂无数据！
              </div>
                <div class="RelationChart" style="width: 100%;height: 100%; padding: 0.2rem 0.4rem;" >
                  <div id="map" class="map" ref="map" style="height: 861px;width: 890px">
                  </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="通行记录" name="second">
              <accessLog :credentialNo='credentialNo' @getJump='getJump' />
            </el-tab-pane>
            <el-tab-pane style="position: relative" label="行为轨迹" name="third">
              <!--行为轨迹11-->
              <div id="map1" style="width: 100%;height: 16.48rem">
                <!-- <houseMapUI /> -->
              </div>
            </el-tab-pane>
            <el-tab-pane label="抓拍记录" name="fouth">
              <div class="nodata" v-show="faceLog.length == 0">
                暂无数据！
              </div>
              <div class="detailBox" v-for="(item,index) in faceLog" :key="index">
                <div class="dot"></div>
                <div class="date">{{item.date}} 
                    <span class='more' @click="doMore(item.date)">>></span>
                </div>
                <div class="detail">
                  <div class="detail_box" v-for="(box,index) in item.list" :key="index" v-show="box.isCanShow">
                    <div class="time">{{formatDate(box.faceCaptureTime,'HH:mm:ss')}}               
                       <div class="inOut">{{box.inOutType == 1?'进':(box.inOutType == 2?'出':'-')}}</div>
                    </div>
                    <div class="address">{{box.address}}</div>
                    <div class="img">
                      <img
                        class="people-pic"
                        :src="faceUrlEx+box.faceUrl"
                      > 
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="房屋信息" name="fifth">
              <div class="houseInfo" v-if='houseInfo.length>0'>
                <div class="houseInfoItem" v-for="(item, index) in houseInfo" :key="index">
                  <div class="name">{{item.villageName}}</div>
                  <div class="content">
                    <div class="house_Detail_icon" :class="{'icon1' : item.spaceUsingType == 2, 'icon2': item.spaceUsingType == 1,'icon3': item.spaceUsingType == 3}"></div>
                    <span>{{item.houseName}}</span>
                  </div>
                </div>
              </div>
                  <div class="houseInfo" v-else>
                    暂无数据！
                </div>
            </el-tab-pane>
            <el-tab-pane label="通行门禁" name="sixth">
                <div class="accessInfo" v-for="(item, index) in accseeLog" :key="index">
                  <div class="village">{{item.village}}</div>
                  <div class="accessInfoItem" v-for="(v, i) in item.accessInfo" :key="i">
                    <div class="content">
                      <box4 class="box_">
                        <div class="icon_">
                          <span :class='v.type'></span>
                        </div>
                      </box4>
                      <span>{{v.installAddr}}</span>
                    </div>
                  </div>
              </div>
                <div class="accessInfos" v-if="accseeLog.length == 0">
                    暂无通行门禁！
                </div>            
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="eachProfile_right" v-if='showRight'>
          <div class="right_filter">
            <!-- <span class="jusPL" :class="{'active': activeClass == 'first'}" @click="doChange(0)">全部</span> -->
            <span :class="{'active': activeClass == 'second'}" @click="doChange(1)">通行轨迹</span>
            <span :class="{'active': activeClass == 'third'}" @click="doChange(2)">人脸轨迹</span>
            <div class="search_">
              <span class="search" @click="search"></span>
            </div>
            <div class="filter_box" v-if='searchBox'>
              <div class="laberType">
                <div class="left">通行位置</div>
                <div class="right">
                  <el-select v-model="value" placeholder="请选择" popper-class='selcet-panel' :popper-append-to-body='false'>
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>     
              <div class="laberType">
                <div class="left">通行开始时间</div>
                <div class="right">
                  <el-date-picker
                    v-model="startTime"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择开始时间">
                  </el-date-picker>
                </div>
              </div>      
              <div class="laberType">
                <div class="left">通行结束时间</div>
                <div class="right">
                  <el-date-picker
                    v-model="endTime"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择结束时间">
                  </el-date-picker>
                </div>
              </div>       
            </div>
          </div>
          <!-- 通行记录 -->
          <div class="filter_content" style="display: flex; flex-wrap: wrap;" v-if='accessRecords.length > 0 && activeClass == "second"'>
            <div class="detailBox_access" v-for="(v,index) in accessRecords" :key="index">
              <div class="detail">
                <div class="detail_box">
                  <div class="time">{{formatDate(v.openTime,'MM-dd HH:mm:ss')}}
                    <div class="inOut">{{v.inOutType == 1?'进':(v.inOutType == 2?'出':'-')}}</div>
                  </div>
                  <div class="address">{{v.address}}</div>
                  <div class="img">
                    <img
                      class="people-pic"
                      :src="faceUrlEx+v.faceUrl"
                    >      
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="filter_content" v-if='accessRecords.length == 0 && activeClass == "second"'>
                    暂无数据！
            </div> 
          <!-- 人脸抓拍 -->
          <div class="filter_content" v-if='trailLogs.length > 0 && activeClass == "third"'>
            <div class="detailBox" v-for="(item,index) in trailLogs" :key="index">
              <div class="dot"></div>
              <div class="date">{{item.date}}
                <span class='more' @click="doAdd(item.date)">>></span>
              </div>
              <div class="detail">
                <div class="detail_box" v-for="(v,index) in item.list" :key="index" v-show="v.isCanShow">
                  <div class="time">{{formatDate(v.faceCaptureTime,'HH:mm:ss')}}
                    <div class="inOut">{{v.inOutType == 1?'进':(v.inOutType == 2?'出':'-')}}</div>
                  </div>
                  <div class="address">{{v.address}}</div>
                  <div class="img">
                    <img
                      class="people-pic"
                      :src="faceUrlEx+v.faceUrl"
                    >      
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="filter_content" v-if='trailLogs.length == 0 && activeClass == "third"'>
                    暂无数据！
            </div>            
        </div>
    </div>
  </div>
 </el-dialog>
</template>
<script>
import accessLog from '../accessLog'
// import RelationChart from '../relationCharts/RelationChart'
//掉接口
import { apiNames,faceUrl } from '../../Utils/config'
import { formatDate } from '../../Utils/Com.js'
import RelationChart from 'relation-chart'
// import houseMapUI from '../../Maps/houseMapUI'
export default {
  name: 'eachProfileDialog',
  components: {
    accessLog,
    // houseMapUI
    // RelationChart
  },
  data () {
    return {
     width: '100%',
     height: '100%',
     left: 0,
     top: 0,
     z: 9,
     dialogVisible: false,
     activeName: 'first',
     activeClass: 'second',
     formatDate: formatDate,
     click: true,
     showRight: false,
     faceUrlEx: faceUrl,//拼接地址
     houseData: [
        { name: '同户关系', num: 0,},
        { name: '通行记录', num: 0,},
        { name: '行为轨迹', num: 0,},
        { name: '抓拍记录', num: 0,},
        { name: '房屋信息', num: 0,},
        { name: '通行门禁', num: 0,},
      ],
      typeCard: {
        1:'身份证',
        2:'护照',
        3:'港澳通行证',
        4:'台胞证',
        99:'其他',
        '':'-',
      },
      peopleInfo: {},
      plateNo: '',
      relationshipInfo: '',
      labers: '',
      houseInfo: [],//房屋信息
      credentialNo: '',//身份证号
      idPicSrc: '',//证件照地址
      // juzhuAddress: '',//居住地址
      headPic: '',//采集照地址
      faceLog: [],//抓拍记录
      accseeLog: [],//通行门禁
      //关系码表
      relationList:{
        1:'主人',
        2:'配偶',
        3:'儿子',
        4:'儿媳',
        5:'女儿',
        6:'女婿',
        7:'孙子／外孙',
        8:'孙女／外孙女',
        9:'孙媳妇／外孙媳妇',
        10:'孙女婿／外孙女婿',
        11:'父母',
        12:'公婆',
        13:'岳父母',
        14:'祖父母／外祖父母',
        15:'兄弟姐妹',
        16:'其他亲属',
        17:'员工',
        18:'租客',
        99:'其他'
      },
      relationData: {
        //先生成节点 再生成链接
          // nodes: [
          //     {
          //         "name": "牛亚明",
          //         "avatar": require('../../assets/imgs/headImg.png'),
          //         "role_id": 0,
          //     },
          //     {
          //         "name": "住户1",
          //         "avatar": require('../../assets/imgs/headImg.png'),
          //         "role_id": 1,
          //     },
          // ],
          // links: [
          //   //  1-主人，2-配偶，3-儿子，4-儿媳，5-女儿，6-女婿，7-孙子／外孙，8-孙女／外孙女，9-孙媳妇／外孙媳妇，10-孙女婿／外孙女婿，
          //     {
          //         "source": 0,
          //         "target": 1,
          //         "relation": "配偶",
          //         "color": "734646"
          //     },

          //   //   // 11-父母，12-公婆，13-岳父母，14-祖父母／外祖父母，15-兄弟姐妹，16-其他亲属，17-员工，21-租客，99-其他
      
          // ],
      },
      nationCode: {
        1: '汉族',
        2: '蒙古族',
        3: '回族',
        4: '藏族',
        5: '维吾尔族',
        6: '苗族',
        7: '彝族',
        8: '壮族',
        9: '布依族',
        10: '朝鲜族',
        11: '满族',
        12: '侗族',
        13: '瑶族',
        14: '白族',
        15: '土家族',
        16: '哈尼族',
        17: '哈萨克族',
        18: '傣族',
        19: '黎族',
        20: '傈僳族',
        21: '佤族',
        22: '畲族',
        23: '高山族',
        24: '拉祜族',
        25: '水族',
        26: '东乡族',
        27: '纳西族',
        28: '景颇族',
        29: '柯尔克孜族',
        30: '土族',
        31: '达斡尔族',
        32: '仫佬族',
        33: '羌族',
        34: '布朗族',
        35: '撒拉族',
        36: '毛南族',
        37: '仡佬族',
        38: '锡伯族',
        39: '阿昌族',
        40: '普米族',
        41: '塔吉克族',
        42: '怒族',
        43: '乌孜别克族',
        44: '俄罗斯族',
        45: '鄂温克族',
        46: '德昂族',
        47: '保安族',
        48: '裕固族',
        49: '京族',
        50: '塔塔尔族',
        51: '独龙族',
        52: '鄂伦春族',
        53: '赫哲族',
        54: '门巴族',
        55: '珞巴族',
        56: '基诺族',
        99: '其他',
      },
      showIndex: '6',
      searchBox: false,
      options: [],
      value: '',
      time: '',
      endTime: '',
      startTime: '',
      trailLogs: [],
      accessRecords: [],//通行记录
    }
  },
  mounted () {
    this.$bus.on('eachProfileDialog', (e) => {
      this.dialogVisible = true
      this.activeName = 'first'
      this.activeClass = 'second'
      this.showRight = false,
      console.log(e)
      // this.juzhuAddress = e.juzhuAddress
      // this.juzhuAddress = e.houseExtend&&e.houseExtend.address
      this.credentialNo = e.credentialNoEncrypt || e.credentialNo//传加密的
      console.log(this.credentialNo)
      this.labers = e.labelNames
      this.init(e)
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '34.84rem' : '34.44rem'
    }
  },
  methods: {
    search() {
      this.searchBox = !this.searchBox
      if(!this.searchBox) {
        console.log('search')
        if(this.activeClass == 'third' ){
          this.getPeopleCatch()//按要求查抓拍
        }
        if(this.activeClass == 'second' ){
          this.getAccessRoute()//获取通行
        }
      }
    },
    doChange(i){
      switch(i){
          case 0 :
            //语句
          this.activeClass = 'first' 
            break; 
          case 1 :
          this.activeClass = 'second'
          this.getAccessRoute() //d地图
          this.getWZ()
            break; 
          case 2 :
           this.activeClass = 'third' 
           //掉抓拍人脸
           this.getWZ()
            this.getPeopleCatch()
            this.getFaceRoute()//d地图
            break; 
          default : 
            this.activeClass = 'first' 
      }
    },
    doMore(time){
              const showItem = (time,faceLog) => {
                faceLog.forEach(item => {
                   if(item.date == time) {
                     item.list.forEach((object,i) => {object.isCanShow = !object.isCanShow })
                      }
                     }
                   )
                  return faceLog;
                }
             this.faceLog = showItem(time,this.faceLog)
    },
    doAdd(time){
              const showItem = (time,trailLogs) => {
                trailLogs.forEach(item => {
                   if(item.date == time) {
                     item.list.forEach((object,i) => {object.isCanShow = !object.isCanShow })
                      }
                     }
                   )
                  return trailLogs;
                }
             this.trailLogs = showItem(time,this.trailLogs)
    },
    init(e) {
      let that = this
      this.getWZ()
      this.$post(apiNames['一人一档人员信息'],{
        credentialNo: this.credentialNo,//传加密的
        virtualSpaceCode: this.$store.state.virtualSpaceCodes
        }).then(res=> {         
           if (res.responseStatus.resultCode === 0) { 

               that.peopleInfo = res.data.peopleInfo&&res.data.peopleInfo[0] ? res.data.peopleInfo&&res.data.peopleInfo[0] : {}
               that.plateNo = res.data.plateNo
               that.houseInfo = res.data.houseDetail
               that.idPicSrc = that.peopleInfo.idPic
               that.headPic = that.peopleInfo.headPic
              // that.houseData[1] = res.data.accessNum
              that.relationshipInfo = res.data.relationshipInfo
              that.houseData[0].num = res.data.relationshipInfo.length
              that.houseData[1].num = res.data.accessNum
              that.houseData[3].num = res.data.faceNum
              that.houseData[4].num = res.data.houseNum
              that.houseData[5].num = res.data.countAccessThingNum
              //处理关系节点
            let datas = {
              nodes: [],
              links: [],
            }
            let num
            let num1
            res.data.relationshipInfo.forEach((item,i)=>{
                  if(item.peopleName == that.peopleInfo.peopleName){
                    num1 = i
                  }
                 if(item.spaceOwnerRelation == 1){
                    num = i
                  }
            })
            res.data.relationshipInfo.forEach((item,j) => {
             
      
              let  nodesobj = {       
                    "name": item.peopleName,
                    "avatar": this.faceUrlEx + item.headPic,
                    "role_id": j,
                }
              
              let  linksobj = {
                  "source": num,
                  "target": j,
                  "relation": that.relationList[item.spaceOwnerRelation],
                  "color": num1 == j?'00F9FC':"734646"
              }

                  datas.nodes.push(nodesobj)
                  if(j != num){
                    datas.links.push(linksobj)
                  }
              })
              console.log(num)
              console.log(datas)
              this.relationData = datas
               setTimeout(()=>{  
                    new RelationChart(this.$refs.map, datas)
                 },500)
              // relationshipInfo: [,…]
              // 0: {credentialNo: "130104197801102413", relationshipCredentialNo: "130104197801102413", peopleName: "牛亚明",…}
              // credentialNo: "130104197801102413"
              // ownerRelation: 1
              // peopleName: "牛亚明"
              // relationshipCredentialNo: "130104197801102413"
              // 1: {credentialNo: "1", relationshipCredentialNo: "130104197801102413", peopleName: "住户1",…}
              // credentialNo: "1"
              // ownerRelation: 3
              // peopleName: "住户1"
              // relationshipCredentialNo: "130104197801102413"
             } else {
              this.$newthost({
                  content: res.data.name
                })     
             }
       }) 
       this.$post(apiNames['一人一档通行门禁'],{
         credentialNo:  this.credentialNo
         }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
             that.accseeLog = res.data
             console.log('一人一档通行门禁'+res)
             console.log(res)
             } else {
              this.$newthost({
                  content: res.data.name
                })     
             }
       })
      this.$post(apiNames['一人一档抓拍记录'],{
        credentialNo: this.credentialNo,
        pageNum: '1',
        pageSize: '88',
        address: '',
        endTime: this.endTime?this.endTime:this.formatDate(new Date(),'yyyy-MM-dd HH:mm:ss'),//必传，没有填空
        startTime: this.startTime?this.startTime:this.formatDate(new Date(+new Date()- 7*3600*24*1000),'yyyy-MM-dd HH:mm:ss'),
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
            //  that.faceLog = res.data
             console.log(res)
             //遍历faceLog 加isCanShow字段 默认前6个true,点击天，给天的所以子项改成true 
              const showItem = (faceLog) => {
                faceLog.forEach(item => {
                   item.list.forEach(
                     (object,i) => {
                       if(i<6){
                         object.isCanShow = true
                       }else {
                         object.isCanShow = false
                       }
                     }
                   )
                })
                //去掉空数据
                let temp = []
                faceLog.forEach(item => {
                  if(item.list.length>0){
                    temp.push(item)
                  }
                })
                return temp;
              }
             this.faceLog = showItem(res.data)
             } else {
              this.$newthost({
                  content: res.data.name
                })       
             }
       }) 
      // this.$post(apiNames['一人一档通行记录'],{
      //   credentialNo: e.credentialNoEncrypt,
      //   pageNum: 1,
      //   pageSize: 20,
      //   }).then(res=> { 
      //      if (res.responseStatus.resultCode === 0) { 
      //        this.
      //        console.log(res)
      //        } else {
      //         this.$newthost({
      //             content: res.data.name
      //           })      
      //        }
      //  })  
      this.getAccessRoute()          
    },
    //获取人脸抓拍
    getPeopleCatch(){
      this.$post(apiNames['一人一档抓拍记录'],{
        credentialNo:  this.credentialNo,
        pageNum: '1',
        pageSize: '88',
        address: '',
        endTime: this.formatDate(new Date(),'yyyy-MM-dd HH:mm:ss'),//必传，没有填空
        startTime: this.formatDate(new Date(+new Date()- 7*3600*24*1000),'yyyy-MM-dd HH:mm:ss'),
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
            //  that.faceLog = res.data      
            const showItem = (faceLog) => {
                faceLog.forEach(item => {
                    item.list&&item.list.forEach(
                     (object,i) => {
                       if(i<6){
                         object.isCanShow = true
                       }else {
                         object.isCanShow = false
                       }
                     }
                   )
                })
                //去掉空数据
                let temp = []
                faceLog.forEach(item => {
                  if(item.list.length>0){
                    temp.push(item)
                  }
                })
                return temp;
              }
             this.trailLogs = showItem(res.data)
             } else {
              this.$newthost({
                  content: res.data.name
                })       
             }
       }) 
    },
    getFaceRoute(){
      this.$post(apiNames['一人一档行为轨迹'],{
        credentialNo: this.credentialNo,
        thingCode: this.value,//通行位置
        startTime: this.startTime,
        endTime: this.time,
        pageNum: '1',
        pageSize: '88',
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
             // this.drawTrack(res.data)
            let lineArr = []
             res.data&&res.data.coordinate&&res.data.coordinate.forEach((
               item
             )=>{
               let temp = []
               temp[0] = item.longitude
               temp[1] = item.latitude
              lineArr.push(temp)
             })
             this.$bus.emit('drawLine', lineArr)
             } else {
              this.$newthost({
                  content: res.data.name
                })       
             }
       })  
    },
   getAccessRoute(){
      this.$post(apiNames['一人一档通行轨迹'],{
        // credentialNo: '0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f',//交道口测试
        credentialNo: this.credentialNo,
        thingCode: this.value,//通行位置
        startTime: this.startTime,
        endTime: this.time,
        pageNum: '1',
        pageSize: '88',
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
             // this.drawTrack(res.data)
             this.accessRecords = res.data&&res.data.accessInfo || []
             //处理数组 
             let lineArr = []
             res.data&&res.data.coordinate&&res.data.coordinate.forEach((
               item
             )=>{
               let temp = []
               temp[0] = item.longitude
               temp[1] = item.latitude
              lineArr.push(temp)
             })
             this.$bus.emit('drawLine', lineArr)
             } else {
              this.$newthost({
                  content: res.data.name
                })       
             }
       })  
    },
    //获取通行位置
    getWZ(){
            // 获取通行出入口位置
      // this.$post(apiNames['所有地图撒点子孙'],
      //   {
      //     virtualSpaceCodes: this.$store.state.virtualSpaceCodes,
      //     usingType: ['6'],//此接口 array:usingType 传入 6 通行设备
      //   })
      this.$post(apiNames['通行轨迹位置列表'],
        {
          virtualSpaceCode: this.$store.state.virtualSpaceCodes,
          type: this.activeClass == 'second'?"access":"camera",
        })
        .then(res => {
          if (res.responseStatus.resultCode === 0) {
            // 遍历，转name:code
            let datas = res.data
            console.log(datas)
            if (datas.length > 0) {
              var array = [
                {
                  label:'全部',
                  value:'',
                }
              ];
              for (var i = 0; i < datas.length; i++) {
                var resultObj = {};
                resultObj.label = datas[i]['name'];
                resultObj.value = datas[i]['code'];
                array.push(resultObj);
              }
              this.options = array
            }else {
               this.options = []
            }

          } else {
            this.$newthost({
              content: res.data.name
            })
          }
        })
    },
    drawTrack (data) {
    },
    getAgeSexN(genderCode,birthDate,nationCode){
      let sex = genderCode == 1 ? '女' : (genderCode == 2 ? '男' : '其他')
      let age = birthDate ? (new Date().getFullYear() - new Date(birthDate).getFullYear()) : '-'
      let N = nationCode? this.nationCode[nationCode] : '-'
      return sex + '/'+ age +  '/' + N
    },
    doTab(i) {
      switch(i){
          case 0 :
            //语句
          this.showRight = false
          this.activeName = 'first' 
            break; 
          case 1 :
           this.showRight = false
          this.activeName = 'second' 
            break; 
          case 2 :
           this.showRight = true
           this.activeName = 'third' 
            break; 
          case 3 :
           this.showRight = false
            this.activeName = 'fouth' 
            break; 
          case 4 :
           this.showRight = false
            this.activeName = 'fifth' 
            break; 
          case 5 :
           this.showRight = false
            this.activeName = 'sixth' 
            break; 
          default : 
           this.showRight = false
            this.activeName = 'first' 
      }
    },
    getJump() {
      this.activeName = 'third'
      this.activeClass = 'second'
      this.showRight = true
    },
    handleClick(event) {
        if(event.name == 'third'){
          this.showRight = true
        }else {
          this.showRight = false
        }
      },
    clickRelation(e) {
        // e就是子组件传过来的值
        this.click = e
      },
  },
  beforeDestroy () {
      this.$bus.off('eachProfileDialog')//移出监听
    }
}
</script>
<style lang="scss">
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
.eachProfileDialog {
  .el-tabs__header {
    margin: 0!important;
    background: rgba(44, 76, 113, 0.4);
  }
  .el-tabs__nav .is-top {
    color: #FFFFFF;
    font-size: 0.32rem;
    font-family: "HY65";
  }
    .el-tabs__item {
         padding: 0 20px 0 20px !important;
         height: 0.92rem;
         line-height: 0.92rem;
    }
  .el-tabs__item.is-active{
    color: #00F9FC;
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__active-bar{
    width: 1rem!important;
    background: linear-gradient( to right,transparent -4%, #00FBFD 40%,#00F9FC 70%,transparent 104%);
    left: 0.14rem;
    bottom: 0.1rem;
    // width: 50px;
    border-radius: 50%;
    height: 2px;

  }
  .el-tabs__content{
    height: 16.48rem;
    // background-color: pink;
    // background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    // background: transparent;
    overflow-y: scroll;
    padding-top: 0.2rem;
        // height: 16rem;
      .detailBox {
            // height: 3rem;
            position: relative;
            margin-left: 0.25rem;
            margin-top: 0.3rem;
            border-left: 1px dashed #C9E7FF;
          .dot {
                width: 0.48rem;
                height: 0.48rem;
                background: url("../../assets/imgs/common/dot.png");
                background-size: 100% 100%;
                position: absolute;
                top: -0.32rem;
                left: -0.24rem;
              }
          .date {
               position: absolute;
                top: -0.32rem;
                left: 0.24rem;
                padding-left: 0.2rem;
                color: #c9e7ff;            
                font-family: "DINBOLD";
                font-weight: bold;
                font-size: 0.32rem;
                .more {
                    color: #C9E7FF;
                    font-size: 0.24rem;
                    font-family: "HY65";
                    margin-left: 0.2rem;
                    cursor: pointer;
                }
                
            }
            .detail {
              padding-left: 0.43rem;
              padding-bottom: 0.36rem;
              display: flex;
              flex-wrap: wrap;
              .detail_box:last-child{
                  margin-right: 0rem;
                }
              .detail_box {
                display: flex;
                flex-direction: column;
                margin-right: 0.7rem;
                .time {
                  padding-top: 0.26rem;
                  color: #BAD2E5;        
                  min-height: 0.4rem;    
                  font-family: "DINBOLD";
                  font-weight: bold;
                  font-size: 0.28rem;
                  position: relative;
                  .inOut{
                    position: absolute;
                    right: 0;
                    top: 0.22rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    text-align: center;
                    line-height: 0.4rem;
                    border: 1px solid #00F9FC;
                    box-sizing: border-box;
                    border-radius: 0.4rem;
                    font-family: "HY55";
                    font-size: 0.24rem;
                    color: #BAD2E5;
                  }
                }
                .address {
                  padding: 0.2rem 0 0.2rem;
                  min-height: 0.4rem;
                  // box-sizing: border-box;
                  font-family: "HY55";
                  font-size: 0.24rem;
                  color: #BAD2E5;
                }
                .img {
                  width: 2.88rem;
                  height: 2rem;
                  background-color: #fff;
                }

              }
            }
      }

      .detailBox:last-child {
                border-left: unset;
      }
      .houseInfo {
         display: flex;
          flex-wrap: wrap;
          padding: 0 0.4rem;
        .houseInfoItem {
          display: flex;
          flex-direction: column;
          margin-right: 0.7rem;
          width: 2.88rem;
          .name {
            color: #FFFFFF;
            font-family: "HY65";
            font-size: 0.28rem;
            padding: 0.12rem 0;
            height: 0.34rem;
          }
          .content{
            width: 2.88rem;
            height: 3.2rem;
            font-family: "HY55";
            font-size: 0.24rem;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .icon1 {
              width: 0.94rem;
              height: 0.87rem;
              margin-bottom: 0.34rem;
              background: url("../../assets/imgs/common/icon1.png");
              background-size: 100% 100%; 
            }
            .icon2 {
              width: 0.94rem;
              height: 0.87rem;
              margin-bottom: 0.34rem;
              background: url("../../assets/imgs/common/icon2.png");
              background-size: 100% 100%; 
            }
            .icon3 {
              width: 0.94rem;
              height: 0.87rem;
              margin-bottom: 0.34rem;
              background: url("../../assets/imgs/common/icon4.png");
              background-size: 100% 100%; 
            }
          }
        }
      }
      .accessInfo {
          display: flex;

          padding: 0 0.4rem;
          flex-direction: column;
          .village {
              color: #C9E7FF;
              font-family: "HY65";
              font-size: 0.28rem;  
              padding:  0.1rem 0 0.1rem 0;
          }
        .accessInfoItem {
          display: flex;
          // flex-direction: column;
          flex-wrap: wrap;
          margin-right: 0.7rem;
          width: 2.88rem;
          height: 3.2rem;
          border: 1px solid rgba(201, 231, 255, 0.2);
          .content {
            display: flex;
            width: 2.88rem;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .box_ {
              width: 0.92rem;
              height: 0.92rem;
              margin-bottom: 0.2rem;
              color: #C9E7FF;
              font-family: "HY65";
              font-size: 0.32rem;   
            }
            span {
              color: #C9E7FF;
              font-family: "HY55";
              font-size: 0.24rem;   
            }
            .camera{
              display: inline-block;
              width: 0.92rem;
              height: 0.92rem;
              background: url("../../assets/imgs/realEquip/camera.png");
              background-size: 100% 100%;  
            }
            .access{
              display: inline-block;
              width: 0.92rem;
              height: 0.92rem;
              background: url("../../assets/imgs/realEquip/access.png");
              background-size: 100% 100%;  
            }
          }
          }
      }
  }
}
      .eachProfile_right {
          .el-input__inner {
          width: 6.4rem!important;
          height: 0.64rem!important!important;; 
          background: #101824;
          border: 1px solid rgba(186, 210, 229, 0.3)!important;
        }
        .el-input__suffix {
          margin-right: 0!important;
        }
        .el-input__icon {
          line-height: 0.64rem!important;
        }
        .el-select-dropdown {  
            background: #101824!important;
            border-radius: 3px!important;
            border: 1px solid rgba(186, 210, 229, 0.3)!important;
            color: #C9E7FF!important;
            padding: 0.2rem!important;
          }
        .el-select-dropdown__item.selected {
          color: #00F9FC!important;
        }
        .el-select-dropdown__item.hover {
              color: #00F9FC!important;
              background: rgba(78, 101, 131, 0.65)!important;
          }
        .popper__arrow {
          display: none!important;
        }  
      }
</style>
<style lang="scss" scoped>
.eachProfileDialog {
  position: relative;


  .eachProfile_title {
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

  .eachProfile_content {
    display: flex;
    flex-direction: row;
    padding-top: 0.6rem;
    .people-pic {
        width: 100%;
        height: 100%;
        background: #040613;
        border: 1px solid rgba(201, 231, 255, 0.2);
            }
    // height: 4rem;
    .eachProfile_left {
      // background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
      .left_up {
        display: flex;
        flex-direction: row;       
        .fixMr {
          margin-right: 0.8rem;
        }
        .left_up_pic{
          display: flex;
          flex-direction: column;           
          .image {
            width: 3.36rem;
            height: 4.33rem;
            // background-color: pink;
            padding:0.26rem;
            box-sizing:border-box;
            background: #040613;
            border: 1px solid rgba(201, 231, 255, 0.2)

          }
          .image_no {
            width: 3.36rem;
            height: 4.33rem;
            // background-color: pink;
            padding:0.26rem;
            box-sizing:border-box;
            background: #040613;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 2rem;
              height: 2rem;
            }

          }
          .title {
            text-align: center;
            padding-top: 0.22rem;
          }
        }
      }
      .left_info {
        .profileInfo {
          .profileInfo_record {
            margin-top: 0.6rem;
             color: #C9E7FF;
              font-family: "HY75";
              font-size: 0.32rem;             
            .jus_title {
              color: #ffffff;
              font-family: "HY75";
              font-size: 0.32rem;
              margin-right: 0.4rem;            
            }
          }
          .profileInfo_detail {
            margin-top: 0.6rem;
            color: #C9E7FF;
            font-family: "HY75";
            font-size: 0.32rem;           
            .jus_name {
              font-family: "HY75";
              font-size: 0.32rem;  
            }
            .numStyle {
              font-family: "DINBOLD";
              font-size: 0.32rem;
            }
            .laberStyle {
              color: #50E3C2;
              text-decoration:underline;
            }
            .colorStyle {
              color: #50E3C2;
            }
          }
        }
      }
      .left_down {
          display: flex;
          flex-wrap: wrap;
        //   justify-content: space-around;
          // margin-left: 0.34rem;
          margin-top: 1.24rem;
          width: 8rem;
          .dataItem {
            // flex: 1;
            cursor: pointer;
            width: 1.5rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            margin-bottom: 0.44rem;
            span:nth-child(1){
              font-size: 0.24rem;
              color: #BAD2E5;
              font-family: "HY65";
            }
            span:nth-child(2){
              font-size: 0.44rem;
              height: 1.3rem;
              width: 1.3rem;
              margin: 0 auto;
              color: #c9e7ff;            
              font-family: "DINBOLD";
              font-weight: bold;
              line-height: 1.3rem;
              background: url("../../assets/imgs/common/circleBg_item.png");
              background-size: 100% 100%;
            //   margin-top: 0.08rem;
            }
          }
      }
    }

    .eachProfile_center {
      flex: 1;
      .nodata {
        text-align: center;
        font-size: 0.36rem;
        font-family: "HY65";
        color: #C9E7FF;
        margin-top: 2rem;
      }
      // background: rgba(44, 76, 113, 0.4);
    }
    .eachProfile_right {
      width: 8rem;
      padding-left: 0.38rem;
      padding-top: 0.3rem;
      .right_filter {
        display: flex;
        padding-bottom: 0.12rem;
        position: relative;
        .jusPL {
          margin-left: 0.18rem;
        }
        .active {
          color: #00F9FC;
        }
        span {
          margin-right: 0.6rem;
          font-size: 0.28rem;
          font-family: "HY55";
          color: #C9E7FF;
        }
        
        .search_{
          flex: 1;
          text-align: right;
          cursor: pointer;

          .search{
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          background: url("../../assets/imgs/search.png");
          background-size: 100% 100%;            
          }
        }
        .filter_box {
          position: absolute;
          top: 0.6rem;
          left: 0.2rem;
          z-index: 1;
          width: 7.2rem;
          height: 4.84rem;
          background: #101824;
          border-radius: 3px;
          border: 1px solid rgba(186, 210, 229, 0.3);
          display: flex;
          flex-direction: column;
          padding: 0.4rem;
          box-sizing: border-box;
            .laberType {
                  width: 100%;
                  // width: 5rem;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: space-around;
                  // margin-right: 1rem;
                  text-align: left;
                  .left {
                    width: 100%;
                    font-size: 0.28rem;
                    font-family: "HY65";
                    color: #BAD2E5;        
                  }
                  .right {
                    width: 100%;
                    margin-top: 0.1rem;
                    margin-bottom: 0.4rem;
                  }
              }

        }
      }
      .filter_content {
        overflow-y: scroll;
        height: 16rem;
         .detailBox_access{
            margin-left: 0.25rem;
            margin-top: 0.3rem; 
            width: 45%; 
            .detail {
              padding-left: 0.43rem;
              padding-bottom: 0.36rem;
              display: flex;
              flex-wrap: wrap;
              .detail_box:nth-child(odd){
                  margin-right: 0.7rem;
                }
              .detail_box {
                display: flex;
                flex-direction: column;
                .time {
                  padding-top: 0.26rem;
                  color: #BAD2E5;            
                  font-family: "DINBOLD";
                  font-weight: bold;
                  font-size: 0.28rem;
                  position: relative;
                  .inOut{
                    position: absolute;
                    right: 0;
                    top: 0.22rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    text-align: center;
                    line-height: 0.4rem;
                    border: 1px solid #00F9FC;
                    box-sizing: border-box;
                    border-radius: 0.4rem;
                    font-family: "HY55";
                    font-size: 0.24rem;
                    color: #BAD2E5;
                  }

                }
                .address {
                  padding: 0.2rem 0 0.2rem;
                  font-family: "HY55";
                  font-size: 0.24rem;
                  color: #BAD2E5;
                }
                .img {
                  width: 2.88rem;
                  height: 2rem;
                  background-color: #fff;
                }

              }
            }  
         }
        .detailBox {
            // height: 3rem;
            position: relative;
            margin-left: 0.25rem;
            margin-top: 0.3rem;
            border-left: 1px dashed #C9E7FF;
          .dot {
                width: 0.48rem;
                height: 0.48rem;
                background: url("../../assets/imgs/common/dot.png");
                background-size: 100% 100%;
                position: absolute;
                top: -0.32rem;
                left: -0.24rem;
              }
          .date {
               position: absolute;
                top: -0.32rem;
                left: 0.24rem;
                padding-left: 0.2rem;
                color: #c9e7ff;            
                font-family: "DINBOLD";
                font-weight: bold;
                font-size: 0.32rem;
                .more {
                    color: #C9E7FF;
                    font-size: 0.24rem;
                    font-family: "HY65";
                    margin-left: 0.2rem;
                    cursor: pointer;
                }
                
            }
            .detail {
              padding-left: 0.43rem;
              padding-bottom: 0.36rem;
              display: flex;
              flex-wrap: wrap;
              .detail_box:nth-child(odd){
                  margin-right: 0.7rem;
                }
              .detail_box {
                display: flex;
                flex-direction: column;
                .time {
                  padding-top: 0.26rem;
                  color: #BAD2E5;            
                  font-family: "DINBOLD";
                  font-weight: bold;
                  font-size: 0.28rem;
                  position: relative;
                  .inOut{
                    position: absolute;
                    right: 0;
                    top: 0.22rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    text-align: center;
                    line-height: 0.4rem;
                    border: 1px solid #00F9FC;
                    box-sizing: border-box;
                    border-radius: 0.4rem;
                    font-family: "HY55";
                    font-size: 0.24rem;
                    color: #BAD2E5;
                  }

                }
                .address {
                  padding: 0.2rem 0 0.2rem;
                  font-family: "HY55";
                  font-size: 0.24rem;
                  color: #BAD2E5;
                }
                .img {
                  width: 2.88rem;
                  height: 2rem;
                  background-color: #fff;
                }

              }
            }
          }

        .detailBox:last-child {
                border-left: unset;
          }
      }
    }
  }
}
</style>