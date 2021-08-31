<template>
    <div class="item_search">
      <el-input v-model="input" placeholder="请输入楼栋号"></el-input>
      <div class="line"></div>
      <div class="searchlogo"></div>
    </div>
</template>

<script>
export default {
  name: "searchItem",
  // props: {
  //   item: {
  //     default: function() {
  //       return {
  //         a : '未处理'
  //       }
  //     },
  //     type: Object
  //   }
  // },
  data () {
    return {
     input: ''
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
    .item_search {
      width: 4.5rem;
      height: 0.6rem;
      border-radius: 3px;
      border: 1px solid rgba(201, 231, 255, 0.2);
      // margin-top: 0.2rem;
      // margin-bottom: 0.2rem;
      display: flex;
      flex-direction: row;
      .input {
        flex: 1;
       }
       .line {
         width: 0.02rem;
        height: 0.4rem;
        background-color: #00F9FC;
        margin-top: 0.1rem;
         }
        .searchlogo {
          width: 0.32rem;
          height: 0.32rem;
          margin: 0.14rem 0.18rem;
          background: url("../assets/imgs/common/searchlogo.png");
          background-size: 100% 100%;
          }
      }
</style>
