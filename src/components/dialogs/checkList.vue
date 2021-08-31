<template>
  <div>
    <!-- 此处遍历 -->
    <a-row v-for="item in options" :key="item.name">
      <a-col>
        <check-item :options='item'></check-item>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import checkItem from './checkItem'
export default {
  name: 'checkList',
  components: {
    checkItem
  },
  props: {
    options: {
      type: [Object, Array, Number, String],
      default: ''
    }
  }
}
</script>
