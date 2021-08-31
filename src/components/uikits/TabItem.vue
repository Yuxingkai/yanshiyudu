<template>
  <div
    class="pane"
    :style="css"
    v-show="show">
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    css: {
      type: [String],
      default: ''
    }
  },
  methods: {
    updateNav: function () {
      this.$parent.updateNav()
    }
  },
  watch: {
    label () {
      this.updateNav()
    },
    show () {
      this.$emit('show')
    }
  },
  mounted () {
    this.updateNav()
  }
}
</script>
