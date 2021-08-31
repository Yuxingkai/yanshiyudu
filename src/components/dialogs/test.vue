<template>
    <div class="container">
        <img class="face" :src="src" alt="">
    </div>
</template>

<script>
  export default {
    name: 'test',
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
      let hostname = window.location.hostname
      let origin = 'http://' + hostname + ':5003/api/'
      this.src = origin + this.dataObj.faceUrl
      console.log(this.dataObj)
    }
  }
</script>

<style scoped lang="scss">
    .container {
        width: 2.36rem;
        height: 3.04rem;
        background-image: url("../../assets/imgs/maps/mapContainer.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .face {
            width: 2.04rem;
            height: 2.72rem;
            margin: 0.16rem 0 0 .16rem;
        }
    }
</style>