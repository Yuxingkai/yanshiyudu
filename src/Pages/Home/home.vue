<template>
  <div class="content">
    home
  </div>
</template>
<script>


export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  components: {
  
  },
  created() {
  },
  mounted() {
    
  },
  methods: {

  },
  watch: {
    
  },
  computed: {
  },
  beforeRouteEnter(to, from, next) {
    //判断是否从login页面跳过来
    next(
      vm => {
        // console.log(from);//不知道为什么是undefined      
        vm.isfromOther = (from.path == '/login')
      }
    );
  },
}
</script>
<style scoped lang="scss">
// .content {
//   width: 100%;
//   height: 100%;

// }
</style>