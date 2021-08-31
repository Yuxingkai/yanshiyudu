<template>
  <div id="wrapper">
    <transition
      name="qrcode-transition"
      enter-active-class="showUp"
      leave-active-class="hideDown"
    >
    </transition>
    <div id="pano"></div>
  </div>
</template>
<script>
import bus from "./eventBus.js";
export default {
  props: {
    scene: {
      type: String,
      default: ""
    },
    hotspot: {
      type: String,
      default: ""
    }
  },
  name: "vtour",
  data() {
    return {
      show: false,
      houseId: "",
      krpano: ""
    };
  },
  mounted() {
    let that = this;
    embedpano({
      swf: "./vtour/tour.swf",
      xml: "./vtour/tour.xml",
      target: "pano",
      html5: "prefer",
      mobilescale: 1.0,
      passQueryParameters: true,
      onready: that.onready_callback
    });
    target.addHandler("message", that.handleMessage);
  },
  methods: {
    addHotspot(obj) {
      let that = this;
      if (this.krpano) {
        let hs_name = "hs" + ((Date.now() + Math.random()) | 0); // create unique/randome name
        this.krpano.call("addhotspot(" + hs_name + ")");
        this.krpano.set("hotspot[" + hs_name + "].url", obj.icon);
        this.krpano.set("hotspot[" + hs_name + "].ath", obj.ath);
        this.krpano.set("hotspot[" + hs_name + "].atv", obj.atv);
        this.krpano.set("hotspot[" + hs_name + "].scale", 0.8);
        this.krpano.set("hotspot[" + hs_name + "].distorted", true);
        this.krpano.set(
          "hotspot[" + hs_name + "].onclick",
          function(hs) {
            //console.log(obj.type,obj.id,that.krpano.get("view"))
            if (obj.type == "camera") {
              let dataObj = {
                Data: {
                  DeviceId: "0746c49a823342b0b53769b4aefedd8f ",
                  DeviceName: "菊儿胡同摄像头"
                }
              };
              bus.$emit("showliveInfo", dataObj);
            }
            if (obj.type == "house") {
              that.houseId = "f1a2745aa1e641ddbd5e56d2a5a0fd6d";
              //bus.$emit('showHouseInfo', dataObj.PointId + '&' + dataObj.Name + '&' + that.CurrentType + '&' + Date.now(), 'building')
            }
          }.bind(null, hs_name)
        );
      }
    },
    onready_callback(t) {
      let that = this;
      this.krpano = t;
      if (this.krpano) {
        if (that.scene) {
          that.krpano.call(
            "loadscene('" +
              that.scene +
              "',ull, MERGE, BLEND(1.0, easeInCubic))"
          );
          that.krpano.call("looktohotspot('" + that.hotspot + "',170,false);");
        }
      }
    },
    handleMessage(event) {
      let that = this;
      //alert("message "+event.message)
      //let str='{type:\'camera\',id:345}'
      //let obj=eval('(' + str + ')');
      console.log("message received:" + event.message);
      if (event.message == "camera1") {
        let dataObj = {
          Data: [
            {
              DeviceId: "0746c49a823342b0b53769b4aefedd8f",
              DeviceName: "菊儿胡同摄像头",
              CameraTypeArr: ["1"],
              IsAuthorized: true
            }
          ]
        };
        bus.$emit("showlivesInfo", dataObj);
      } else if (event.message == "house_101") {
        that.houseId = "00f04a0868044da18559403450e0c9f1" + "&" + Date.now();
        bus.$emit("getHouseInfo", that.houseId, 1);
      } else if (event.message == "house_102") {
        that.houseId = "a5e4387fab4a4664978cac38164ac0f0" + "&" + Date.now();
        bus.$emit("getHouseInfo", that.houseId, 1);
      } else if (event.message == "house_103") {
        that.houseId = "3c5c44d4911c4f798608401ce3efdc75" + "&" + Date.now();
        bus.$emit("getHouseInfo", that.houseId, 1);
      } else if (event.message == "house_104") {
        that.houseId = "39b59981fd164936b4830b79c3e040d2" + "&" + Date.now();
        bus.$emit("getHouseInfo", that.houseId, 1);
      }
    }
  },
  destroyed() {
    removepano("pano");
  }
};
</script>
<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
#pano {
  width: 100%;
  height: 100%;
}
button {
  position: absolute;
  left: 100px;
  top: 10px;
  z-index: 4010;
}
.showUp {
  animation: showup 0.4s ease-in;
}
.hideDown {
  animation: hidedown 0.4s ease-out;
}

@keyframes showup {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes hidedown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(110%);
  }
}
</style>
