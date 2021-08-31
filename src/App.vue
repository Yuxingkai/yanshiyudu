<template>
  <div id="container">
    <!-- 地图弹窗容器 -->
    <popManager />
    <!-- <a-locale-provider :locale="zh_CN"> -->
      <router-view/>
    <!-- </a-locale-provider> -->
  </div>
</template>

<script>
import popManager from './components/uikits/PopupManager'
// import zh_CN from 'ant-design-vue/es/locale-provider/zh_CN';
  // import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
  // import moment from 'moment';
  // import 'moment/locale/zh-cn';
  // moment.locale('zh-cn');
export default {
  provide() {
    return {
      reload: this.reload,
      // zh_CN: zh_CN,
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  name: "home",
  components: {
    popManager
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(
        () => {
          this.isRouterAlive = true
        }
      )
    }
  }
};
</script>

<style lang="scss">
#container {
  // width: 100%;
  height: 100%;//小于一定高度会有问题
  width: 38.4rem;
  // height: 21.6rem;
  color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'HY55' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.popper__arrow {
  display: none !important;
}
// .el-cascader-panel {
//     background: #101824!important;
//     border: 1px solid rgba(186, 210, 229, 0.3) !important;
// }
.el-cascader__dropdown {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-cascader-menu {
  border-right: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  color: #00f9fc !important;
}
.el-cascader-node:hover {
  color: #00f9fc !important;
  background-color: rgba(186, 210, 229, 0.3) !important;
}
.in-active-path {
  background-color: rgba(186, 210, 229, 0.3) !important;
}
.el-cascader-node {
  background-color: unset !important;
}
.el-picker-panel {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-picker-panel__body {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-date-picker__time-header {
  border-bottom: none !important;
}
.el-time-panel .el-popper {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-time-panel__content {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-button + .el-button {
  background: rgba(40, 191, 255, 0.3) !important;
  border: 1px solid #51cfff !important;
}
.el-time-panel__footer {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-date-picker__time-header {
  background: #101824 !important;
  border-bottom: none !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-date-picker .el-picker-panel__content {
  background: #101824 !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-picker-panel__footer {
  background: #101824 !important;
  border-color: none !important;
  background-color: none !important;
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background: #00f9fc !important;
}
.el-select-dropdown__list {
  background: #101824 !important;
}
.el-select-dropdown {
  border: 1px solid rgba(186, 210, 229, 0.3) !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: rgba(186, 210, 229, 0.3) !important;
}
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background: #00f9fc !important;
}
.el-date-table td.today span {
  color: #00f9fc !important;
}
.el-select-dropdown__item.selected {
  color: #00f9fc !important;
}
</style>
