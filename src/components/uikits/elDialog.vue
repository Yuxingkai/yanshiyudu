<template>
  <!-- <el-dialog :visible.sync="dialogVisible2" :modal-append-to-body="false" width="100%" :modal='false' top='0' :close-on-press-escape='false' :close-on-click-modal='false' custom-class='elmentDialog' @close='closeDialog' :destroy-on-close='true' :title='title' :show-close='showX'> -->
    <!-- <slot name="right" /> -->
    <!-- 内层嵌套dialog -->

  <!-- </el-dialog> -->
  <div class="box_dialog elmentDialog">
     <slot name="right" />
  </div>
</template>
<script>
export default {
  name: 'myDialog',
  props: {
    title: {
      type: [String],
      default: ''
    },
    showX: {
      type: [Boolean],
      default: true
    }
  },
  data () {
    return {
      dialogVisible2: true
    }
  },
  mounted () {

  },
  methods: {
    // 关闭弹窗即触发关闭右侧父级内容
    closeDialog () {
      this.$bus.emit('/dialog/right', { dialogVisible: false })
    }
  }
}
</script>
<style lang="scss" scoped>
// .tabDetail .el-dialog__wrapper {
//   width: 100%;
//   height: 100%;
//   top: 0;
//   position: absolute !important;
// }
.box_dialog {
  width: 100%;
  height: 100%;
}
</style>