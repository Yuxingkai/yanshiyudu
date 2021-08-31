<template>
 <el-dialog :visible.sync="dialogVisible" width="41%">
  <div>
    <div class="peopleInfo">
        <div class="peopleInfo_left">姓&nbsp;&nbsp;&nbsp;&nbsp;名:张三 <span>吸毒人员</span></div>
        <div class="peopleInfo_right">通行位置: 特斯联小区西大门出入口</div>
    </div>
    <div class="peopleInfo">
        <div class="peopleInfo_left">居住地址: 特斯联2号楼1单元2020室</div>
        <div class="peopleInfo_right">通行时间: 2019.01.28 13:20:00</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="抓拍照片" name="first">抓拍照片</el-tab-pane>
        <el-tab-pane label="通行视频" name="second">通行视频</el-tab-pane>
    </el-tabs>
  </div>
 </el-dialog>
</template>
<script>

export default {
  name: 'indexPeopleDialog',
  data () {
    return {
     dialogVisible: true,
     activeName: 'second'
    }
  },
  mounted () {

  },
  methods: {
    handleClick() {
        // console.log(tab, event);
      }
  }
}
</script>
<style lang="scss">
.el-dialog__body {
  .peopleInfo {
    display: flex;
    &_left{
      flex: 1;
    }
    &_right{
      flex: 1;
    }
  }
}
</style>