<template>
  <div class="RelationChart">
    <div id="map" class="map" ref="map" style="height: 861px">
    </div>
  </div>
</template>
<script>
import RelationChart from 'relation-chart'
// let relationData = require('./data.json')
// import { relationData } from './data'
export default {
  data () {
    return {
      // relationData: []
    }
  },
  props: {
    relationData: {
      type: [Object, Array],
      default: () => {
        return []
      }
    }
  },
  mounted () {
    const defaultConfig = {
      // width: 1000,                 // 总画布svg的宽,单位为px,默认为容器的宽
      // height: 800,                // 高，默认为容器的高
      isHighLight: true,        // 是否启动 鼠标 hover 到节点上高亮与节点有关的节点，其他无关节点透明的功能
      isScale: true,              // 是否启用缩放平移zoom功能
      scaleExtent: [0.5, 1.5],    // 缩放的比例尺
      chargeStrength: -300,        // 万有引力
      collide: 100,                 // 碰撞力的大小 （节点之间的间距）
      nodeWidth: 160,             // 每个node节点所占的宽度，正方形
      margin: 20,                 // node节点距离父亲div的margin
      alphaDecay: 0.0228,          // 控制力学模拟衰减率
      r: 30,                      // 头像的半径 [30 - 45]
      relFontSize: 12,           // 关系文字字体大小
      linkSrc: 30,                // 划线时候的弧度
      linkColor: '#bad4ed',        // 链接线默认的颜色
      strokeColor: '#7ecef4',     // 头像外围包裹的颜色
      strokeWidth: 3,             // 头像外围包裹的宽度
    }
    // new RelationChart(domElement, data[, config])
    new RelationChart(this.$refs.map, this.relationData)
  },
  // watch:  {
  //   relationData: {
  //     handler() {
  //       new RelationChart(this.$refs.map, this.relationData)
  //         console.log(this.relationData);
  //         console.log('relationData changed');
  //       },
  //       immediate: true,
  //       deep: true

  //   }
  // },
}
</script>
<style lang="scss" scoped >
.RelationChart {
  width: 100%;
  height: 100%;
  padding: 0.2rem 0.4rem;
}
</style>