<template>
    <div class="container">
        <img class="car" :src="src" alt="">
    </div>
</template>

<script>
  export default {
    name: 'car',
    props: {
      dataObj: {
        default: () => {
          return {}
        },//fire,people,vehicle
        type: Object
      }
    },
    data() {
      return {
        src: ''
      }
    },
    mounted () {
      this.src = this.dataObj.picUrl
      console.log(this.dataObj)
    }
  }
</script>

<style scoped lang="scss">
    .container {
        width: 2.4rem;
        height: 1.68rem;
        background-image: url("../../assets/imgs/maps/mapContainer.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .car {
            width: 2.04rem;
            height: 1.24rem;
            margin: 0.22rem 0 0 .16rem;
        }
    }
</style>