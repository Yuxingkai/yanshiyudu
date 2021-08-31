<template>

   <div class="filterDialog">
     <div class="filterDialog_item" v-for="(items,index) in datas" :key='index' v-show="items.count > 0">
        <div class="filterDialog_title">
          <span>{{items.category}}</span>
          <span>{{items.count}}</span>
        </div>
        <div class="all_item" v-if="items.category != '物联设备'">
          <div class="detail_item" v-for="(item,i) in items.deviceType" :key='i' :class="{active: item.active}" @click='selectF(item)'>
            <div class="detail_item_icon">        
              <box4>
                <div class="icon_">
                  <span :class="'camera'+index+i"></span>
                </div>
              </box4>
            </div>
            <div class="detail_item_title">{{item.typeName}}</div>
          </div>
        </div>
        <div class="small_item" v-if="items.category == '物联设备'">
          <div class="detail_item" v-for="(item,index) in items.deviceType" :key='index' :class="{active: item.active}" @click='selectF(item)'>
            <div class="detail_item_t">
              <span  :class="item.name"></span>
              <span class="text">{{item.typeName}}</span>
              </div>
          </div>
        </div>
     </div>
   </div>

</template>
<script>
// import searchItem from '../../components/searchItem'
// import prewarnItem from '../../components/houseDetailItem'
// import realhouseItem from '../../components/real_houseItem'
export default {
  name: 'filterDialog',
  data () {
    return {
     showD: true,
     click: false,
     activeName: 'second',
     activeName1: 'second',
     input: '',
    //  equipType: {
    //    'accessDevice': '通行设备',
    //    'iotDevice' : '物联设备',
    //    'monitorDevice' : '监控设备',
    //  },//码表
    }
  },
  props: {
    datas: {
            type: Array,
            default: null
        },
  },
  components: {
    // searchItem,
    // prewarnItem,
    // realhouseItem
  },
  mounted () {
    this.$bus.on('filterDialog', (item) => {
      this.showD = true
      console.log(item,111111111111)
    })
  },
  computed: {
    // centerWidth: function () {
    //   //14.6rem
    //   return '15.1rem'
    // }
  },
  methods: {
    selectF(e) {
      //传回父组件修改值
      console.log(e)
      this.$emit('doSelectF',e)
    },
    handleClick() {
        // console.log(tab, event);
      },
    gernerateColor(index) {
      return 'color' + (index + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .filterDialog {
    position: absolute;
    top: 2.8rem;
    right: 0;
    z-index: 18;
    width: 8rem;
    height: 18rem;
    padding: 0.46rem 0.34rem;
    box-sizing: border-box;
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    .filterDialog_item {

      .filterDialog_title {
        display: flex;
        width: 100%;
        height: 0.8rem;
        padding: 0.2rem 0.3rem;
        box-sizing: border-box;
        background: rgba(78, 101, 131, 0.65);
        align-items: center;
        span:nth-child(1){
          flex: 1;
          text-align: left;
          color: #C9E7FF;
          display: inline-block;
          font-family: "HY65";
          font-size: 0.36rem;
        }        
        span:nth-child(2){
          flex: 1;
          text-align: right;
          color: #00F9FC;
          display: inline-block;
          font-family: "DINBOLD";
          font-weight: bold;
          font-size: 0.56rem;  
        }
      }
      .all_item{
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.4rem;
        margin-bottom: 0.6rem;
        .detail_item {
          width: 2rem;
          height: 2.56rem;
          margin-right: 0.6rem;
          margin-bottom: 0.44rem;
          box-sizing: border-box;
          background: linear-gradient(319deg, #080C18 0%, #011F41 100%);
          border: 1px solid rgba(201, 231, 255, 0.2);
          &:hover {        
            background: rgba(74, 144, 226, 0.35);
            box-shadow: 0px 0px 3px 3px rgba(74, 144, 226, 0.35);
            border: 1px solid;
            border-image: linear-gradient(317deg, rgba(0, 74, 133, 1), rgba(0, 233, 246, 1)) 1 1;
          }
          .detail_item_icon {
            width: 0.92rem;
            height: 0.92rem;
            margin: 0 auto;
            margin-top: 0.48rem;
            margin-bottom: 0.28rem;
            .icon_ {
              width: 0.92rem;
              height: 0.92rem;
              display: flex;
              justify-content: center;
              align-items: center;
             .camera00{
               width: 0.52rem;
              height: 0.52rem;
              display: inline-block;
              background: url("../../assets/imgs/realEquip/door_access.png");
              background-size: 100% 100%;            
             }
              .camera01{
               width: 0.52rem;
              height: 0.52rem;
              display: inline-block;
              background: url("../../assets/imgs/realEquip/equip.png");
              background-size: 100% 100%;            
             }
              .camera02{
               width: 0.52rem;
              height: 0.52rem;
              display: inline-block;
              background: url("../../assets/imgs/realEquip/agedAlarm.png");
              background-size: 100% 100%;            
             }
            .camera10,.camera11{
               width: 0.52rem;
              height: 0.52rem;
              display: inline-block;
              background: url("../../assets/imgs/realEquip/catch_camera.png");
              background-size: 100% 100%;            
             }
            }
          }
          .detail_item_title {
            color: #C9E7FF;
            font-family: "HY55";
            font-size: 0.32rem;
          }
        }
        .detail_item:nth-child(3){
          margin-right: 0;
        }
        .active {
            // background: linear-gradient(135deg, #00E9F6 0%, #004A85 100%);
            background: rgba(74, 144, 226, 0.35);
            box-shadow: 0px 0px 3px 3px rgba(74, 144, 226, 0.35);
            border: 1px solid;
            border-image: linear-gradient(317deg, rgba(0, 74, 133, 1), rgba(0, 233, 246, 1)) 1 1;         
        }
      }
      .small_item{
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.4rem;
        margin-bottom: 0.6rem;
        .detail_item {
          width: 2rem;
          height: 0.8rem;
          margin-right: 0.6rem;
          margin-bottom: 0.44rem;
          box-sizing: border-box;
          background: linear-gradient(319deg, #080C18 0%, #011F41 100%);
          border: 1px solid rgba(201, 231, 255, 0.2);
          &:hover {        
            background: rgba(74, 144, 226, 0.35);
            box-shadow: 0px 0px 3px 3px rgba(74, 144, 226, 0.35);
            border: 1px solid;
            border-image: linear-gradient(317deg, rgba(0, 74, 133, 1), rgba(0, 233, 246, 1)) 1 1;
          }
          .detail_item_t {
            height: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #C9E7FF;
            font-family: "HY55";
            font-size: 0.32rem;
            .text {
              max-width: 1rem;
              overflow: hidden; 
              text-overflow:ellipsis; 
              white-space: nowrap;
            }
            .smokeDetector {
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/smokeDetector.png");
              background-size: 100% 100%;   
             }
            .waterPressureSensor {
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/waterPressureSensor.png");
              background-size: 100% 100%;   
             }
             .smartSeat{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/smartSeat.png");
              background-size: 100% 100%;                 
             }
             .smartlamp{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/smartlamp.png");
              background-size: 100% 100%;    
             }
             .manholeCover{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/manholeCover.png");
              background-size: 100% 100%;                 
             }
             .groundLock{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/groundlock.png");
              background-size: 100% 100%;   
             }
             .geomagnetic{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/geomagnetic.png");
              background-size: 100% 100%; 
             }
             .fireCock{
               width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/fireCock.png");
              background-size: 100% 100%;                 
             }
             .electricArc{
               width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/electricArc.png");
              background-size: 100% 100%; 
             }
             .charger{
                width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              margin-right: 0.12rem;
              background: url("../../assets/imgs/maps/color/online/charger.png");
              background-size: 100% 100%;                
             }
          }
        }
        .detail_item:nth-child(3n){
          margin-right: 0;
        }
        .active {
            // background: linear-gradient(135deg, #00E9F6 0%, #004A85 100%);
            background: rgba(74, 144, 226, 0.35);
            box-shadow: 0px 0px 3px 3px rgba(74, 144, 226, 0.35);
            border: 1px solid;
            border-image: linear-gradient(317deg, rgba(0, 74, 133, 1), rgba(0, 233, 246, 1)) 1 1;         
        }       
      }
    }

  }
</style>