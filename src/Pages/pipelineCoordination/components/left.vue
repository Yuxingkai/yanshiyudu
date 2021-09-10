<template>
      <div class="left" :style="leftStyle">
        <div class="left_1" :style="leftStyle">
          <img class="lightClass" :src="lightPic" alt="">
          <div class="top">
            <div v-if="this.navigat" style="float: left;">专题图层</div>
            <div @click="showOrhide" style="float: right;"><img style="width: .38rem;height: .38rem;" :src="tucengPic" alt=""></div>
          </div>
          <div class="bottom">
            <div style="flex: 1;">
              <img class="duobianPic" :src="duobianPic" alt="">
              <!-- <div @click="exportCad" style="background: gray;">导出</div> -->
            </div>
            <div v-if="navigat" class="bottom_list animate__animated animate__fadeIn">
              <div class="bottom_list_title">
                专题
              </div>
              <div class="scrollContent">
                <div class="scrollContent_item">
                  <div class="scrollContent_item_title">
                      排水管网
                      <img @click="downOrUp" :src="jiantou" alt="">
                  </div>
                  <div v-if="content" class="content animate__animated animate__fadeIn">
                      <div style="width: 100%;">
                        <a-checkbox-group @change="onChange" v-model="checkedList">
                          <div @mouseenter="enter(index)" @mouseleave="leave(index)" style="position: relative;width: 100%;margin-bottom: .2rem;" v-for="(item, index) in arr1" :key="index">
                            <a-checkbox :value="item.value">
                              {{ item.name }}
                            </a-checkbox>
                            <div>
                              <img :style="item.style" :src="item.src" alt="">
                            </div>
                            <!-- <div v-if="index === 0">
                              <img style="width: .64rem;height: .32rem;margin-left: .6rem;" :src="item.src" alt="">
                            </div>
                            <div v-else-if="index === 5">
                              <img style="width: 1.14rem;height: .84rem;margin-left: .5rem;" :src="item.src" alt="">
                            </div>
                            <div v-else>
                              <img style="width: .32rem;height: .32rem;margin-left: .6rem;" :src="item.src" alt="">
                            </div> -->
                            <div v-if="index === nowIndex" class="actions">
                              <img :src="multiPic" @click.stop="multi(item)" alt="">
                              <img :src="addPic" @click.stop="addFeature(item)" alt="">
                              <img :src="item.editPicBoolen ? savePic : editPic" @click.stop="editFeature(item, index)" alt="">
                              <img :src="deletePic" @click.stop="deleteFeature(item)" alt="">
                              <img v-if="index === 0" :src="pointLine" @click.stop="addLine()" alt="">
                            </div>
                          </div>
                        </a-checkbox-group>
                      </div>
                  </div>
                </div>
                <div class="scrollContent_item">
                  <div class="scrollContent_item_title">
                      管网调查
                      <img @click="downOrUp2" :src="jiantou2" alt="">
                  </div>
                  <div v-if="content2" style="min-height: 1.18rem;" class="content animate__animated animate__fadeIn">
                      <div style="width: 100%;">
                        <a-checkbox-group @change="onChange2" v-model="checkedList2">
                          <div style="position: relative;width: 100%;margin-bottom: .2rem;" v-for="(item, index) in arr3" :key="index">
                            <a-checkbox :value="item.value">
                              {{ item.name }}
                            </a-checkbox>
                          </div>
                        </a-checkbox-group>
                      </div>
                  </div>
                </div>
                <div class="scrollContent_item">
                  <div class="scrollContent_item_title">
                      基础图层
                      <img @click="downOrUp1" :src="jiantou1" alt="">
                  </div>
                  <div v-if="content1" style="min-height: 1.18rem;" class="content animate__animated animate__fadeIn">
                      <div style="width: 100%;">
                        <a-checkbox-group @change="onChange1" v-model="checkedList1">
                          <div @mouseenter="enter1(index)" @mouseleave="leave1(index)" style="position: relative;width: 100%;margin-bottom: .2rem;" v-for="(item, index) in arr2" :key="index">
                            <a-checkbox :value="item.value">
                              {{ item.name }}
                            </a-checkbox>
                          </div>
                        </a-checkbox-group>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="piliangdaoru" class="multiShangchuan">
            <div class="importClass">
              ‖ 批量导入
            </div>
            <div style="display: flex;">
              <div class="selectFile">
                <input style="position: absolute;left: -9999px;" id="files" type="file" ref="refFile" @change="importCsv">
                <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="files">
                  选择文件
                </label>
              </div>
              <div class="selectFile" @click="xiazaiCsv">
                  下载模板
                  <!-- <a :href="`http://192.168.3.132:8082/yufan/gc/pipe/downloadcsv?fileFullName=${fileFullName}`" download="模板下载">下载模板</a> -->
              </div>
            </div>
            <div style="position: absolute;right: .4rem;bottom: .2rem;">
              请按照模板格式导入数据
            </div>
            <div class="closeButton" @click="closePopShow">
              X
            </div>
        </div>
      </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import Papa from 'papaparse';
import jschardet from 'jschardet';
import { apiNames } from '../../../Utils/config'
import { guid } from '../../../Utils/Com'
import { setShowHideByName, stGPserver, searchPointByP, deleteSingleLayer, editLayer, cancelEdit, multiAdd, setShowHideByName1, setShowHideByName2, addFeatureToMap } from '../../../Maps/mapApi.js'
import {notification, message} from 'ant-design-vue'
export default {
  name: 'left',
  data() {
    return {
      zhCN,
      realPj: [
      ],
      lightPic: require('../../../assets/imgs/zhihuipaishui/pjmanage/light.png'),
      tucengPic: require('../../../assets/imgs/zhihuipaishui/ppline/tuceng.png'),
      duobianPic: require('../../../assets/imgs/zhihuipaishui/ppline/duobianxing.png'),
      jiantou: require('../../../assets/imgs/zhihuipaishui/ppline/down.png'),
      jiantou1: require('../../../assets/imgs/zhihuipaishui/ppline/down.png'),
      jiantou2: require('../../../assets/imgs/zhihuipaishui/ppline/down.png'),
      tucentubiao: require('../../../assets/imgs/zhihuipaishui/ppline/cover.png'),
      addPic: require('../../../assets/imgs/zhihuipaishui/ppline/add.png'),
      editPic: require('../../../assets/imgs/zhihuipaishui/ppline/edit.png'),
      savePic: require('../../../assets/imgs/zhihuipaishui/ppline/save.png'),
      deletePic: require('../../../assets/imgs/zhihuipaishui/ppline/delete.png'),
      multiPic: require('../../../assets/imgs/zhihuipaishui/ppline/multiIn.png'),
      pointLine: require('../../../assets/imgs/zhihuipaishui/ppline/pointLine.png'),
      editPicBoolen: false,
      bool: false,
      bool1: false,
      bool2: false,
      content: true,
      content1: true,
      content2: true,
      arr1: [
        {
          name: '排水管',
          value: 3,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/paishuiguan.png'),
          editPicBoolen: false,
          fileFullName: 'ps_pipe.xlsx',
          type: 'pipe',
          style: 'width: .64rem;height: .32rem;margin-left: .6rem;'
        },
        {
          name: '雨水口',
          value: 1,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/yushuijianchajiaojing.png'),
          editPicBoolen: false,
          fileFullName: 'ps_comb.xlsx',
          type: 'comb',
          style: 'width: .32rem;height: .32rem;margin-left: .6rem;'
        },
        {
          name: '检查井',
          value: 2,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/wushuijianchajiaojing.png'),
          editPicBoolen: false,
          fileFullName: 'ps_manhole.xlsx',
          type: 'manhole',
          style: 'width: .32rem;height: .32rem;margin-left: .6rem;'
        },
        {
          name: '立管',
          value: 4,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/liguan.png'),
          editPicBoolen: false,
          fileFullName: 'ps_riser.xlsx',
          type: 'liguan',
          style: 'width: .38rem;height: .52rem;margin-left: .6rem;'
        },
        {
          name: '化粪池',
          value: 5,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/huafenchi.png'),
          editPicBoolen: false,
          fileFullName: 'ps_septictank.xlsx',
          type: 'huafenchi',
          style: 'width: .62rem;height: .42rem;margin-left: .6rem;'
        },
        {
          name: '排水口',
          value: 0,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png'),
          editPicBoolen: false,
          fileFullName: 'ps_outfall.xlsx',
          type: 'outfall',
          style: 'width: 1.14rem;height: .84rem;margin-left: .5rem;'
        }
      ],
      arr2: [
        {
          name: '地形图',
          value: 0,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/paishuiguan.png')
        },
        {
          name: '影像图',
          value: 1,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/paishuiguan.png')
        }
      ],
      arr3: [
        {
          name: '管网检测',
          value: 0,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/paishuiguan.png')
        },
        {
          name: '混接调查',
          value: 1,
          src: require('../../../assets/imgs/zhihuipaishui/map/tubiao/paishuiguan.png')
        }
      ],
      nowIndex: -1,
      navigat: true,
      leftStyle: '',
      checkedList: [0,1,2,3, 4, 5],
      // checkedList1: [0],
      checkedList1: [0, 1], //于都演示
      checkedList2: [],
      piliangdaoru: false,
      nowSelectValue: null,
      fileFullName: '',
      fileCsvName: '',
      nowSelectType: null
    }

  },
  mounted() { 
    this.showOrhide()
  },
  components: {
  },
  watch: {
  },
  created() {
  },
  methods: {
    exportCad() {
      stGPserver()
    },
    multi (item) {
      this.piliangdaoru = true
      this.nowSelectValue = item.value
      this.fileFullName = item.fileFullName
      this.fileCsvName = item.name
      this.nowSelectType = item.type
    },
    closePopShow () {
      this.piliangdaoru = false
    },
    xiazaiCsv () {
      const hide = message.loading({ content: '正在导出...', duration: 0 });
      // if (this.nowSelectValue == 2) {
      //   // 检查井
      //   this.$getWenjian(apiNames['后端批量导出检查井']).then(res => {
      //       hide()
      //       let blob = new Blob([res]);
      //   　　let a = document.createElement('a');
      //   　　a.href = URL.createObjectURL(blob);
      //   　　a.target = '_blank';
      //   　　a.download = (`检查井.xlsx`);
      //   　　document.body.appendChild(a);
      //   　　a.click();
      //   　　document.body.removeChild(a);
      //   })
      // } else if (this.nowSelectValue == 1) {
      //   // 雨水口
      //   this.$getWenjian(apiNames['后端批量导出雨水口']).then(res => {
      //       hide()
      //       let blob = new Blob([res]);
      //   　　let a = document.createElement('a');
      //   　　a.href = URL.createObjectURL(blob);
      //   　　a.target = '_blank';
      //   　　a.download = (`雨水口.xlsx`);
      //   　　document.body.appendChild(a);
      //   　　a.click();
      //   　　document.body.removeChild(a);
      //   })
      // } else if (this.nowSelectValue == 0) {
      //   // 排水口
      //   this.$getWenjian(apiNames['后端批量导出排水口']).then(res => {
      //       hide()
      //       let blob = new Blob([res]);
      //   　　let a = document.createElement('a');
      //   　　a.href = URL.createObjectURL(blob);
      //   　　a.target = '_blank';
      //   　　a.download = (`排水口.xlsx`);
      //   　　document.body.appendChild(a);
      //   　　a.click();
      //   　　document.body.removeChild(a);
      //   })
      // } else if (this.nowSelectValue == 4) {
      //   // 立管
      //   this.$getWenjian(apiNames['后端批量导出立管']).then(res => {
      //       hide()
      //       let blob = new Blob([res]);
      //   　　let a = document.createElement('a');
      //   　　a.href = URL.createObjectURL(blob);
      //   　　a.target = '_blank';
      //   　　a.download = (`立管.xlsx`);
      //   　　document.body.appendChild(a);
      //   　　a.click();
      //   　　document.body.removeChild(a);
      //   })
      // } else if (this.nowSelectValue == 5) {
      //   // 化粪池
      //   this.$getWenjian(apiNames['后端批量导出化粪池']).then(res => {
      //       hide()
      //       let blob = new Blob([res]);
      //   　　let a = document.createElement('a');
      //   　　a.href = URL.createObjectURL(blob);
      //   　　a.target = '_blank';
      //   　　a.download = (`化粪池.xlsx`);
      //   　　document.body.appendChild(a);
      //   　　a.click();
      //   　　document.body.removeChild(a);
      //   })
      // } else if (this.nowSelectValue == 3) {
      //   // 管线
      //   this.$getWenjian(apiNames['后端批量导出管线']).then(res => {
      //       hide()
      //       let blob = new Blob([res]);
      //   　　let a = document.createElement('a');
      //   　　a.href = URL.createObjectURL(blob);
      //   　　a.target = '_blank';
      //   　　a.download = (`排水管.xlsx`);
      //   　　document.body.appendChild(a);
      //   　　a.click();
      //   　　document.body.removeChild(a);
      //   })
      // }
      // window.open(`http://192.168.3.132:8082/yufan/gc/pipe/downloadcsv?fileFullName=${this.fileFullName}`)
      // let formData = new FormData();
      // formData.fileFullName = this.fileFullName
      // this.$get(`${apiNames['下载文件']}`, formData).then(res => {

      //     let blob = new Blob(["\ufeff" + res],{
      //     　　type:'text/csv'
      //     });
      //     let dataStr = new Date().toLocaleDateString().replace(/\//g,'-');
          
      //     　　let a = document.createElement('a');
      //     　　a.href = URL.createObjectURL(blob);
      //     　　a.target = '_blank';
      //     　　a.download = (this.fileCsvName + dataStr + '.csv');
      //     　　document.body.appendChild(a);
      //     　　a.click();
      //     　　document.body.removeChild(a);
      //   })
      this.$getWenjian(apiNames['下载文件'], {fileFullName: this.fileFullName}).then(res => {
            hide()
            let blob = new Blob([res]);
        　　let a = document.createElement('a');
        　　a.href = URL.createObjectURL(blob);
        　　a.target = '_blank';
        　　a.download = (`${this.fileCsvName}.xlsx`);
        　　document.body.appendChild(a);
        　　a.click();
        　　document.body.removeChild(a);
      })
    },
    // 检查编码，引用了 jschardet
    checkEncoding(base64Str) {
        
      // 这种方式得到的是一种二进制串
      var str = atob(base64Str.split(';base64,')[1])
      // console.log(str);
      // 要用二进制格式
      var encoding = jschardet.detect(str)
      encoding = encoding.encoding
      // console.log( encoding );
      if (encoding === 'windows-1252') {
          // 有时会识别错误（如UTF8的中文二字）
        encoding = 'ANSI'
      }
      return encoding
    },
    importCsv(){
      if (this.nowSelectValue == 2) {
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        const hide = message.loading({ content: '正在导入', duration: 0 });
        let formData = new FormData();
        formData.append('file', selectedFile);
        this.$post(apiNames['后端批量导入检查井'], formData).then(res => {
          hide()
          message.success({ content: '批量导入成功!', duration: 2 })
        })
      } else if (this.nowSelectValue == 1) {
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        const hide = message.loading({ content: '正在导入', duration: 0 });
        let formData = new FormData();
        formData.append('file', selectedFile);
        this.$post(apiNames['后端批量导入雨水口'], formData).then(res => {
          hide()
          message.success({ content: '批量导入成功!', duration: 2 })
        })
      } else if (this.nowSelectValue == 0) {
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        const hide = message.loading({ content: '正在导入', duration: 0 });
        let formData = new FormData();
        formData.append('file', selectedFile);
        this.$post(apiNames['后端批量导入排水口'], formData).then(res => {
          hide()
          message.success({ content: '批量导入成功!', duration: 2 })
        })
      } else if (this.nowSelectValue == 4) {
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        const hide = message.loading({ content: '正在导入', duration: 0 });
        let formData = new FormData();
        formData.append('file', selectedFile);
        this.$post(apiNames['后端批量导入立管'], formData).then(res => {
          hide()
          message.success({ content: '批量导入成功!', duration: 2 })
        })
      } else if (this.nowSelectValue == 5) {
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        const hide = message.loading({ content: '正在导入', duration: 0 });
        let formData = new FormData();
        formData.append('file', selectedFile);
        this.$post(apiNames['后端批量导入化粪池'], formData).then(res => {
          hide()
          message.success({ content: '批量导入成功!', duration: 2 })
        })
      } else if (this.nowSelectValue == 3) {
        let selectedFile = null
        selectedFile = this.$refs.refFile.files[0];
        const hide = message.loading({ content: '正在导入', duration: 0 });
        let formData = new FormData();
        formData.append('file', selectedFile);
        this.$post(apiNames['后端批量导入管线'], formData).then(res => {
          hide()
          message.success({ content: '批量导入成功!', duration: 2 })
        })
      }


      //  else {
      //   let selectedFile = null
      //   selectedFile = this.$refs.refFile.files[0];
      //   if (selectedFile === undefined){
      //     return
      //   }
      //   var reader = new FileReader();
      //   reader.readAsDataURL(selectedFile);
      //   reader.onload = evt => {
      //     const data = evt.target.result
      //     console.log(data, '获取的文件件');
      //     const encoding = this.checkEncoding(data)
      //     // console.log(encoding);
      //     // 转换成二维数组，需要引入Papaparse.js
      //     // 将csv转换成二维数组
      //     Papa.parse(selectedFile, {
      //       encoding: encoding,
      //       header: true,
      //       complete: async res => {
      //         // UTF8 \r\n与\n混用时有可能会出问题
      //         let data = res.data;
      //         data.pop();
      //         let filtArr = await this.groupByjuncid(data)
      //         filtArr[0].map((item) => {
      //           if (this.nowSelectValue == 0) {
      //               item.outfallid = 'A04' + guid()
      //           } else if (this.nowSelectValue == 1) {
      //               item.combid = 'A02' + guid()
      //           } else if (this.nowSelectValue == 2) {
      //               item.manholeid = 'A03' + guid()
      //           } else {
      //               item.pipeid = 'A01' + guid()
      //           }
      //           item.objectid = Number(item.objectid)
      //         })
      //         filtArr[1].map((item) => {
      //           // if (this.nowSelectValue == 0) {
      //           //     item.outfallid = 'A04' + guid()
      //           // } else if (this.nowSelectValue == 1) {
      //           //     item.combid = 'A02' + guid()
      //           // } else if (this.nowSelectValue == 2) {
      //           //     item.manholeid = 'A03' + guid()
      //           // } else {
      //           //     item.pipeid = 'A01' + guid()
      //           // }
      //           item.objectid = Number(item.objectid)
      //         })
      //         multiAdd(filtArr, this.nowSelectValue)
      //         console.log(filtArr);  // data就是文件里面的数据
      //       }
      //     });
      //   };
      // }
    },
    groupByjuncid (data) {
      let params = {
        params: data,
        type: this.nowSelectType
      }
      return new Promise((resolve, reject)=>{
          this.$post(`${apiNames['导出数据分组']}`, params).then(res => {
              let getData = res
              resolve(getData)
          })
      })
    },
    addFeature (item) {
      this.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
      setTimeout(() => {
        switch (item.value) {
          case 3:
            addFeatureToMap('polyLine', (res) => {
              console.log(res)
              let sx = res.geometry.paths[0][0][0]
              let sy = res.geometry.paths[0][0][1]
              let ex = res.geometry.paths[0][1][0]
              let ey = res.geometry.paths[0][1][1]
              this.$bus.emit('getPointData', {sx, sy, ex, ey})
            })
            this.$bus.emit('writeFormTosecond', 2)
            this.$bus.emit('writeFormInfo', {value: 2, title: '排水管'})
            break
          case 2:
            // 添加检查井
            addFeatureToMap('point', (res) => {
              console.log(res)
              let x = res.geometry.x
              let y = res.geometry.y
              this.$bus.emit('getPointXY', {x,y})
            })
            this.$bus.emit('writeFormInfo', {value: 0, title: '检查井'})
            break
          case 1:
            // 添加雨水口
            addFeatureToMap('point', (res) => {
              console.log(res)
              let x = res.geometry.x
              let y = res.geometry.y
              this.$bus.emit('getPointXY', {x,y})
            })
            this.$bus.emit('writeFormInfo', {value: 1, title: '雨水口'})
            break
          case 0:
            // 添加排水口
            addFeatureToMap('point', (res) => {
              let x = res.geometry.x
              let y = res.geometry.y
              this.$bus.emit('getPointXY', {x,y})
            })
            this.$bus.emit('writeFormInfo', {value: 3, title: '排水口'})
            break
          case 4:
            // 添加立管
            addFeatureToMap('point', (res) => {
              let x = res.geometry.x
              let y = res.geometry.y
              this.$bus.emit('getPointXY', {x,y})
            })
            this.$bus.emit('writeFormInfo', {value: 6, title: '立管'})
            break
          case 5:
            // 添加化粪池
            addFeatureToMap('point', (res) => {
              let x = res.geometry.x
              let y = res.geometry.y
              this.$bus.emit('getPointXY', {x,y})
            })
            this.$bus.emit('writeFormInfo', {value: 7, title: '化粪池'})
            break
        }
      }, 50)
    },
    addLine () {
      this.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
      setTimeout(() => {
        let objArr = [
          null, null
        ]
        
        this.$bus.emit('writeFormTosecond', 2)
        this.$bus.emit('writeFormInfo', {value: 2, title: '排水管'})
        searchPointByP((arr, num) => {
            // console.log(arr, '获取两点的信息')
            let data = arr.filter((item) => {
                return item.layerId !== 5 && item.layerId !== 0 && item.layerId !== 1
            })[0]
            if (num == 1) {
              objArr[0] = data
            } else {
              objArr[1] = data
            }
            this.$bus.emit('getPointObj', objArr)
            console.log(data, '获取两点的信息')
        })
      }, 50)
    },
    editFeature (item, index) {
      this.arr1[index].editPicBoolen = !this.arr1[index].editPicBoolen
      if (this.arr1[index].editPicBoolen) {
        notification.success({ message: '系统提示', description: '请在地图上选择'})
        editLayer(item.value)
      } else {
        // 保存的时候
        cancelEdit()
      }
    },
    deleteFeature (item) {
        deleteSingleLayer(item.value)
    },
    downOrUp () {
      this.bool = !this.bool
      this.content = !this.content
      if (this.bool) {
        this.jiantou = require('../../../assets/imgs/zhihuipaishui/ppline/up.png')
      } else {
        this.jiantou = require('../../../assets/imgs/zhihuipaishui/ppline/down.png')
      }
    },
    downOrUp1 () {
      this.bool1 = !this.bool1
      this.content1 = !this.content1
      if (this.bool1) {
        this.jiantou1 = require('../../../assets/imgs/zhihuipaishui/ppline/up.png')
      } else {
        this.jiantou1 = require('../../../assets/imgs/zhihuipaishui/ppline/down.png')
      }
    },
    downOrUp2 () {
      this.bool2 = !this.bool2
      this.content2 = !this.content2
      if (this.bool2) {
        this.jiantou2 = require('../../../assets/imgs/zhihuipaishui/ppline/up.png')
      } else {
        this.jiantou2 = require('../../../assets/imgs/zhihuipaishui/ppline/down.png')
      }
    },
    onChange(checkedValues) {
      setShowHideByName(checkedValues)
    },
    onChange1(checkedValues) {
      setShowHideByName1(checkedValues)
    },
    onChange2(checkedValues) {
      setShowHideByName2(checkedValues)
    },
    enter (index) {
      this.nowIndex = index
    },
    leave (index) {
      this.nowIndex = -1
    },
    enter1 (index) {
      // this.nowIndex = index
    },
    leave1 (index) {
      // this.nowIndex = -1
    },
    showOrhide () {
      this.navigat = !this.navigat
      if (!this.navigat) {
        this.leftStyle = 'width: 1.72rem;'
      } else {
        this.leftStyle = ''
      }
    }
  },
  beforeDestroy() {
  }
}
</script>
<style lang='scss'>
.left_1 .ant-checkbox-group {
  width: 100%;
}
</style>

<style scoped lang='scss'>
    .left {
      cursor: pointer;
      width: 7.72rem;
      height: 98%;
      position: absolute;
      z-index: 10;
      left: .4rem;
      top: 0;
      display: flex;
      flex-direction: column;
      .left_1 {
        flex: 1;
        margin-top: .2rem;
        width: 386px;
        background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        position: relative;
        .lightClass {
          width: 100%;
          height: .4rem;
          position: absolute;
          left: 0;
          top: -.2rem;
        }
        .top {
          overflow: hidden;
          border-bottom: .02rem solid #205187;
          padding: .4rem .44rem .2rem .74rem;
        }
        .bottom {
          display: flex;
          width: 100%;
          height: calc(100% - 1.1rem);
          .duobianPic {
            width: .44rem;
            margin-top: .2rem;
          }
          .bottom_list {
            width: 6.66rem;
            border-left: .02rem solid #205187;
            height: 100%;
            overflow: hidden;
            position: relative;
            .bottom_list_title {
              text-align: left;
              margin-top: .2rem;
              margin-left: .1rem;
            }
            .scrollContent {
              width: 100%;
              height: calc(100% - 1rem);
              position: absolute;
              overflow: auto;
              .scrollContent_item {
                width: 6.24rem;
                margin-left: .2rem;
                .scrollContent_item_title {
                  width: 6.04rem;
                  border-bottom: .02rem solid #205187;
                  font-size: .32rem;
                  text-align: left;
                  border: .02rem solid #205187;
                  padding: .1rem 0 .1rem .2rem;
                  position: relative;
                  img {
                    position: absolute;
                    right: .2rem;
                    top: .18rem;
                    width: .48rem;
                    height: .3rem;
                  }
                }
                .content {
                  min-height: 5.18rem;
                  width: calc(100% - .86rem);
                  border: .02rem solid #205187;
                  border-top: none;
                  text-align: left;
                  padding: .5rem 0 0 .86rem;
                  margin-bottom: .3rem;
                  .actions {
                    position: absolute;
                    right: .5rem;
                    top: 0;
                    img {
                      width: .32rem;
                      margin-right: .2rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .multiShangchuan {
        position: absolute;
        left: 8rem;
        top: 3rem;
        width: 6.4rem;
        height: 2.9rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        text-align: left;
        .importClass {
          margin:.3rem 0 0 .3rem;
        }
        .closeButton {
          position: absolute;
          right: .5rem;
          top: .3rem;
          width: .5rem;
          height: .5rem;
          border-radius: .25rem;
          text-align: center;
        }
        .closeButton:hover {
          background: gray;
        }
        .selectFile {
          position: relative;
          width: 2.14rem;
          height: .5rem;
          background: #205187;
          border: .02rem solid #00B7EE;
          border-radius: .1rem;
          text-align: center;
          color: rgba(0, 183, 238, 1);
          margin-left: .7rem;
          margin-top: .3rem;
        }
      }
    }
</style>