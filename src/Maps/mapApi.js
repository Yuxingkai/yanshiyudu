import esriLoader from 'esri-loader'
import { MapClass, MapOverLayer, MapType, MapExtent, MapLineType, CoorSystem } from './mapClass'
import remoteLoad from './remoteLoad.js'
import '../assets/css/mapIcon.css'
import '../assets/css/mapTip.css'
import {notification, message} from 'ant-design-vue'
import {getFormatymdhmsDate} from '../Utils/Com'
// let mapConfigUrl = {
//   inUrl: 'http://192.168.3.132:6443',
//   outUrl: 'http://www.yu-fan.cn:6443'
// }

let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
let hostname = window.location.hostname
let origin = ''
let DomainSwitchingUrl = hostname === 'localhost' ? 'https://www.yu-fan.cn:8087' : origin
// let DomainSwitchingUrl = hostname === 'localhost' ? 'https://www.yu-fan.cn:8085' : origin  // 于都演示

let roadName = allDictItems.DomainSwitching.filter((item) => {return item.text == 'road'})[0].description
let pipeName = allDictItems.DomainSwitching.filter((item) => {return item.text == 'pipe'})[0].description
let manholeName = allDictItems.DomainSwitching.filter((item) => {return item.text == 'manhole'})[0].description
// let pipeName = 'facilitylayer'
// let pipeName = 'kunshan_facility'
// kunshan_yx  gd_yingxiang
let yxName = 'yudu_yx1'
// let zuobiaoxi = 'PROJCS["kszb",GEOGCS["GCS_kszb",DATUM["D_Beijing_1954",SPHEROID["Krasovsky_1940",6378245.0,298.3]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",29195.5],PARAMETER["False_Northing",-3401413.0],PARAMETER["Central_Meridian",121.0],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'
let zuobiaoxi = 4549
let dbName = allDictItems.DomainSwitching.filter((item) => {return item.text == 'dbName'})[0].description
// http://www.yu-fan.cn:
// let inRoadUrl = 'http://192.168.3.132:'
// 全局地图类
let mapClass = new MapClass()
// 全局地图参数
let mapParams
let toolbar = null
let editToolbar = null
let visible = []
let gloBalbaseMapLayertu = []
let gloBalbaseMapLayer = []
let globalFormObj = null
let selectedGraphic = null
let editValue = null
let evtGraphic = null
let graphicLayer = null
let useSearch = false
let dialog = null
let globalMapScale = 8000
let nowShowLayer = [0,1,2,3,4,5]
// var tooltip


let popTip
/**
 * 创建地图
 * @param {} extent 初始化地图范围
 * @param {string} container 地图容器
 * @param {function} callbackEvent(map) 回调函数
 */
let initMap = function (extent, container, mParams, callbackEvent) {
  mapParams = mParams
  let mExtent = new MapExtent(extent.xmin, extent.ymin, extent.xmax, extent.ymax)
  mapClass = new MapClass(container, mapParams.url, mExtent, mapParams.minzoom, mapParams.maxZoom)
  switch (mapParams.mapType) {
    case MapType.Esri:
      const options = {
        url: mapParams.apiUrl
      }
        esriLoader.loadScript(options).then(function () {
          esriLoader.loadCss(mapParams.apiCss)

          esriLoader.loadModules(['esri/map', 'esri/geometry/Extent', 'esri/layers/ArcGISTiledMapServiceLayer', 'esri/layers/ArcGISImageServiceLayer', 'esri/graphic',
            'esri/geometry/Point', 'esri/SpatialReference', 'esri/layers/ArcGISDynamicMapServiceLayer', 'esri/layers/FeatureLayer',
            'esri/symbols/PictureMarkerSymbol', 'esri/renderers/SimpleRenderer', 'esri/toolbars/draw', 'esri/symbols/SimpleMarkerSymbol',
            'esri/Color', 'esri/symbols/SimpleLineSymbol', 'esri/toolbars/edit', 'esri/layers/GraphicsLayer', 'esri/lang', 'dijit/TooltipDialog',
            'dijit/popup', 'dojo/dom-style', 'esri/symbols/SimpleFillSymbol', 'esri/renderers/UniqueValueRenderer', 'esri/symbols/TextSymbol', 'esri/layers/LabelClass', 'dojo/domReady!'])
            .then(([Map, Extent, ArcGISTiledMapServiceLayer, ArcGISImageServiceLayer, Graphic, Point, SpatialReference,
              ArcGISDynamicMapServiceLayer, FeatureLayer, PictureMarkerSymbol, SimpleRenderer, Draw,
              SimpleMarkerSymbol, Color, SimpleLineSymbol, Edit, GraphicsLayer, esriLang, TooltipDialog, dijitPopup, domStyle, SimpleFillSymbol, UniqueValueRenderer, TextSymbol, LabelClass]) => {
              mapClass.map = new Map(container, {
                logo: false,
                slider: false,
                fitExtent: true,
                showLabels : true,
                maxScale: 100,
                zoom: 10,
                // scale: 8000,
                maxZoom: 10 // 最大空间等级
                // extent: new Extent({
                //   xmin: '502552.6799999997',
                //   ymin: '2775430.682',
                //   xmax: '645862.9439000003',
                //   ymax: '2875160.9328000005'
                // })
              })
              let baseMapLayer = new ArcGISDynamicMapServiceLayer(`${DomainSwitchingUrl}/arcgis/rest/services/dx_gdjy_lsdjd2/MapServer`)
              // mapClass.map.addLayer(baseMapLayer, 2)
              // let bb = new ArcGISImageServiceLayer(`${DomainSwitchingUrl}/arcgis/rest/services/${yxName}/ImageServer`)
              // let gdbaselayer = new gaodelayer({layertype: "label"});//加载标注图

              // mapClass.map.addlayer(gdbaselayer);//添加高德地图到map容器

              let bb = new ArcGISImageServiceLayer(`${DomainSwitchingUrl}/arcgis/rest/services/${yxName}/ImageServer`)
              mapClass.map.addLayer(bb, 3)
              let yudu_road = new FeatureLayer(`${DomainSwitchingUrl}/arcgis/rest/services/baselayer/FeatureServer/0`, {
                name: `${roadName}`,
                id: `${roadName}`,
                outFields: ['*']
              })
              // ps_manhole 检查井
              let featureLayerArr = [
                {
                  name: 'ps_pipe',
                  url: `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
                },
                {
                  name: 'ps_manhole',
                  url: `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0` // 4
                },
                {
                  name: 'ps_comb',
                  url: `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`  // 3
                },
                {
                  name: 'ps_outfall',
                  url: `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
                },
                {
                  name: 'ps_riser',
                  url: `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/0`
                },
                {
                  name: 'ps_septictank',
                  url: `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/1`
                }
              ]
              // 排水管
              let defaultSymbol = new SimpleLineSymbol().setWidth(2).setColor(new Color([184,226,255]))
              //create renderer
              let renderer = new UniqueValueRenderer(defaultSymbol, "pipe_categ");

              //add symbol for each possible value
              renderer.addValue(1, new SimpleLineSymbol().setWidth(2).setColor(new Color([0,255,197])))
              renderer.addValue(2, new SimpleLineSymbol().setWidth(2).setColor(new Color([230,0,196])))
              renderer.addValue(3, new SimpleLineSymbol().setWidth(2).setColor(new Color([230,152,0])))
              renderer.addValue(4, new SimpleLineSymbol().setWidth(2).setColor(new Color([184,226,255])))
              
              let ps_pipe = new FeatureLayer(featureLayerArr[0].url, {
                name: featureLayerArr[0].name,
                id: "ps_pipe",
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ['*']
              })
              ps_pipe.setRenderer(renderer);


              // 检查井
              let manholeSymbol = new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png'),
                height:8,
                width:8
              })
              let manholeRenderer = new UniqueValueRenderer(manholeSymbol, "manhole_category");
              manholeRenderer.addValue(1, new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png'),
                height:8,
                width:8
              }))
              manholeRenderer.addValue(2, new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png'),
                height:8,
                width:8
              }))
              manholeRenderer.addValue(3, new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png'),
                height:8,
                width:8
              }))
              manholeRenderer.addValue(8, new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/zhuanzheyushui.png'),
                height:8,
                width:8
              }))
              manholeRenderer.addValue(9, new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/zhuanzhewushui.png'),
                height:8,
                width:8
              }))
              manholeRenderer.addValue(10, new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/zhuanzheheliu.png'),
                height:8,
                width:8
              }))

              let ps_manhole = new FeatureLayer(featureLayerArr[1].url, {
                name: featureLayerArr[1].name,
                id: "ps_manhole",
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ['*']
              })
              ps_manhole.setRenderer(manholeRenderer);

              console.log(ps_manhole.spatialReference, 'ps_manholespatialReferencespatialReferencespatialReferencespatialReference')
              // 雨水口
              let symbol_comb =  new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png'),
                height:10,
                width:10
              })

              let renderer_comb = new SimpleRenderer(symbol_comb);
              let ps_comb = new FeatureLayer(featureLayerArr[2].url, {
                name: featureLayerArr[2].name,
                id: "ps_comb",
                outFields: ['*']
              })
              
              // 排水口
              let symbol_outfall =  new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png'),
                height:32,
                width:32
              })

              let renderer_outfall = new SimpleRenderer(symbol_outfall);
              let ps_outfall = new FeatureLayer(featureLayerArr[3].url, {
                name: featureLayerArr[3].name,
                id: "ps_outfall",
                outFields: ['*']
              })

              // 立管图层
              let symbol_riser =  new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/liguan.png'),
                height:16,
                width:16
              })
              let renderer_riser = new SimpleRenderer(symbol_riser);
              let ps_riser = new FeatureLayer(featureLayerArr[4].url, {
                name: featureLayerArr[4].name,
                id: "ps_riser",
                outFields: ['*']
              })

              // 化粪池图层
              let symbol_septictank =  new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/tubiao/huafenchi.png'),
                height:8,
                width:8
              })
              let renderer_septictank = new SimpleRenderer(symbol_septictank);
              let ps_septictank = new FeatureLayer(featureLayerArr[5].url, {
                name: featureLayerArr[5].name,
                id: "ps_septictank",
                outFields: ['*']
              })

              // 缺陷图层
              let pipe_qx = new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/图标1/渗漏.png'),
                height: 16,
                width: 16
              })

              let renderer_pipeqx = new UniqueValueRenderer(pipe_qx, "defect_code");
              let defectCodeArr = ['PL', 'SL', 'CK', 'QF','TJ', 'BX', 'FS', 'TL','AJ', 'CR', 'CJ', 'ZAW','SG', 'FZ', 'JG', 'CQ']
              defectCodeArr.forEach((item) => {
                renderer_pipeqx.addValue(item, new PictureMarkerSymbol({
                  url: require(`../assets/imgs/zhihuipaishui/map/缺陷图标/${item}.png`),
                  height:16,
                  width:16
                }))
              })
              // let renderer_pipeqx = new SimpleRenderer(pipe_qx)
              let ps_qx = new FeatureLayer(`${DomainSwitchingUrl}/arcgis/rest/services/gwdch/FeatureServer/0`,{
                name: '排水管缺陷',
                id: "ps_qx",
                outFields: ['*']
              })
              ps_qx.setRenderer(renderer_pipeqx);

              // 混接图层
              let symbol_hunjie =  new PictureMarkerSymbol({
                url: require('../assets/imgs/zhihuipaishui/map/hunjie.png'),
                height:16,
                width:16
              })

              let renderer_hunjie = new SimpleRenderer(symbol_hunjie);
              let ps_hunjie = new FeatureLayer(`${DomainSwitchingUrl}/arcgis/rest/services/gwdch/FeatureServer/1`,{
                name: '排水管混接',
                id: "ps_hunjie",
                outFields: ['*']
              })
              let getDefinitionExpression = ps_pipe.getDefinitionExpression()
              console.log(getDefinitionExpression, 'getDefinitionExpressiongetDefinitionExpressiongetDefinitionExpression')
              ps_hunjie.setRenderer(renderer_hunjie);
              ps_comb.setRenderer(renderer_comb);
              ps_outfall.setRenderer(renderer_outfall);
              ps_riser.setRenderer(renderer_riser);
              ps_septictank.setRenderer(renderer_septictank);

              mapClass.map.addLayers([ps_pipe, ps_manhole, ps_comb, ps_outfall, yudu_road, ps_qx, ps_hunjie, ps_riser, ps_septictank])
              gloBalbaseMapLayer = gloBalbaseMapLayer.concat([ps_pipe, ps_manhole, ps_comb, ps_outfall, ps_riser, ps_septictank])
              gloBalbaseMapLayertu = gloBalbaseMapLayertu.concat([yudu_road, bb, ps_qx, ps_hunjie, baseMapLayer])
              mapClass.map.on('click', function (e) {
                // removeGraphics()
                console.log('点击地图了吗？')
              })
              ps_qx.setVisibility(false)
              // bb.setVisibility(false) // 于都演示
              ps_hunjie.setVisibility(false)
              ps_comb.setVisibility(false)
              ps_manhole.setVisibility(false)
              ps_outfall.setVisibility(false)
              ps_septictank.setVisibility(false)
              ps_riser.setVisibility(false)

              let manholeLabel = new TextSymbol().setColor(new Color("#a0d1fd"));
              manholeLabel.font.setSize("10pt");
              manholeLabel.font.setFamily("arial");
              let manholelabelClass = new LabelClass({
              labelExpressionInfo:{
              value:"{manholecode}" //以"Name"属性作为标记字段
              },
              
              labelPlacement: "above-right", //标记位置为正下方
              // maxScale: 1000,//标注显示的最大比例，超过就不显示
              minScale: 700//标记显示的最小比例，低于就不显示
              }); 
              let comblabelClass = new LabelClass({
                labelExpressionInfo:{
                value:"{combcode}" //以"Name"属性作为标记字段
                },
                
              labelPlacement: "below-right", //标记位置为正下方
              // maxScale: 1000,//标注显示的最大比例，超过就不显示
              minScale: 700//标记显示的最小比例，低于就不显示
              });

              let pipelabelClass = new LabelClass({
                labelExpressionInfo:{
                value:`{pipe_lengt}-{material_name}-DN{shape_data}` //以"Name"属性作为标记字段
                },
                
                labelPlacement: "above-along", //标记位置为正下方
                // maxScale: 1000,//标注显示的最大比例，超过就不显示 
                // minScale: 700//标记显示的最小比例，低于就不显示
              });

              let outfalllabelClass = new LabelClass({
                labelExpressionInfo:{
                value:`{outfallcode}` //以"Name"属性作为标记字段
                },
                
                labelPlacement: "above-along", //标记位置为正下方
                // maxScale: 1000,//标注显示的最大比例，超过就不显示
                // minScale: 700//标记显示的最小比例，低于就不显示
              });
              pipelabelClass.symbol = manholeLabel;
              comblabelClass.symbol = manholeLabel;
              manholelabelClass.symbol = manholeLabel;
              outfalllabelClass.symbol = manholeLabel;
              // manholelabelClass.labelPlacement = "below-left";
              console.log(ps_manhole, pipelabelClass, 'pipelabelClasspipelabelClass')
              ps_manhole.setLabelingInfo([ manholelabelClass ]);
              ps_comb.setLabelingInfo([ comblabelClass ]);
              ps_pipe.setLabelingInfo([ pipelabelClass ]);
              ps_outfall.setLabelingInfo([ outfalllabelClass ]);

              
              mapClass.map.on("zoom-end", function(){
                // console.log(mapClass.map.getScale())
                globalMapScale = mapClass.map.getScale()
                if (mapClass.map.getScale()>7000)
                { 
                  ps_comb.setVisibility(false)
                  ps_manhole.setVisibility(false)
                  ps_outfall.setVisibility(false)
                }
                else {
                  if (nowShowLayer.indexOf(1) == -1) {
                    ps_comb.setVisibility(false)
                  } else {
                    ps_comb.setVisibility(true)
                  }
                  if (nowShowLayer.indexOf(2) == -1) {
                    ps_manhole.setVisibility(false)
                  } else {
                    ps_manhole.setVisibility(true)
                  }
                  if (nowShowLayer.indexOf(0) == -1) {
                    ps_outfall.setVisibility(false)
                  } else {
                    ps_outfall.setVisibility(true)
                  }
                  if (nowShowLayer.indexOf(4) == -1) {
                    ps_riser.setVisibility(false)
                  } else {
                    ps_riser.setVisibility(true)
                  }
                  if (nowShowLayer.indexOf(5) == -1) {
                    ps_septictank.setVisibility(false)
                  } else {
                    ps_septictank.setVisibility(true)
                  }
                }
              });
              mapClass.map.setMapCursor('default')

              snappingManager()
              addArrowPoint()
              // ps_pipe.on('mouse-out', function (evt) {
              //     mouseOutLayer(evt)
              // })
              function mouseOverLayer(e){
                  // map.setMapCursor("pointer");
                  console.log(e.graphic);
                  var scrPt = mapClass.map.toScreen(e.graphic.geometry.getExtent().getCenter());
                  console.log(scrPt);
                  var textDiv = dojo.doc.createElement("div");
                  dojo.attr(textDiv,{
                      "id":"text"
                  });+
                  dojo.style(textDiv, {
                      "left": scrPt.x+10 + "px",
                      "top": scrPt.y+10 + "px",
                      "position": "absolute",
                      "z-index":99,
                      "background":"black",
                      "font-size":"10px",
                      "border":"1px solid #0096ff",
                      "padding": "0.1em 0.3em 0.1em",
                      "font-size": "11px",
                      "border-radius": "3px",
                      "box-shadow": "0 0 0.75em #777777"
                  });
                  textDiv.innerHTML =e.graphic.attributes.objectid;
                  dojo.byId("mapDiv").appendChild(textDiv);
              };
              function mouseOutLayer(e){
                  dojo.byId("mapDiv").removeChild(dojo.byId("text"));
              };
              ps_pipe.on('click', function (ev) {
                let zhuisuStart = window.localStorage.getItem('zhuisuStart')
                if (zhuisuStart == 'true') {
                  window.mapSuyuanClicked(ev.graphic.attributes)
                } else {
                  notification.success({ message: '系统提示', description: '已选择'})
                  window.mapPipeClicked(ev.graphic.attributes)
                }
                selectedGraphic = ev.graphic
                let symbol
                symbol= new SimpleLineSymbol(
                  SimpleLineSymbol.STYLE_SOLID,
                  new Color([0,128,25]),
                3);
                selectedGraphic.setSymbol(symbol);
              })
              ps_pipe.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_pipe.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })
              ps_comb.on('click', function (ev) {
                let zhuisuStart = window.localStorage.getItem('zhuisuStart')
                if (zhuisuStart == 'true') {
                  window.mapSuyuanClicked(ev.graphic.attributes)
                } else {
                  notification.success({ message: '系统提示', description: '已选择'})
                  if (otherCantClick !== true) {
                    window.mapCombClicked(ev.graphic.attributes)
                    selectedGraphic = ev.graphic
                  }
                }
              })
              ps_comb.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_comb.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })
              ps_manhole.on('click', function (ev) {
                let zhuisuStart = window.localStorage.getItem('zhuisuStart')
                if (zhuisuStart == 'true') {
                  window.mapSuyuanClicked(ev.graphic.attributes)
                } else {
                  notification.success({ message: '系统提示', description: '已选择'})
                  if (otherCantClick !== true) {
                    window.mapManholeClicked(ev.graphic.attributes)
                    selectedGraphic = ev.graphic
                  }
                }
              })
              ps_manhole.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_manhole.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })
              ps_outfall.on('click', function (ev) {
                let zhuisuStart = window.localStorage.getItem('zhuisuStart')
                if (zhuisuStart == 'true') {
                  window.mapSuyuanClicked(ev.graphic.attributes)
                } else {
                  notification.success({ message: '系统提示', description: '已选择'})
                  if (otherCantClick !== true) {
                    window.mapOutfallClicked(ev.graphic.attributes)
                    selectedGraphic = ev.graphic
                  }
                }
              })
              ps_outfall.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_outfall.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })

              ps_hunjie.on('click', function (ev) {
                notification.success({ message: '系统提示', description: '已选择'})
                if (otherCantClick !== true) {
                  window.mapHunjieClicked(ev.graphic.attributes)
                  selectedGraphic = ev.graphic
                }
              })
              ps_hunjie.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_hunjie.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })

              ps_septictank.on('click', function (ev) {
                notification.success({ message: '系统提示', description: '已选择'})
                if (otherCantClick !== true) {
                  window.mapseptictankClicked(ev.graphic.attributes)
                  selectedGraphic = ev.graphic
                }
              })
              ps_septictank.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_septictank.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })

              ps_riser.on('click', function (ev) {
                notification.success({ message: '系统提示', description: '已选择'})
                if (otherCantClick !== true) {
                  window.mapriserClicked(ev.graphic.attributes)
                  selectedGraphic = ev.graphic
                }
              })
              ps_riser.on('mouse-over', function (ev) {
                mapClass.map.setMapCursor('pointer')
              })
              ps_riser.on('mouse-out', function (ev) {
                mapClass.map.setMapCursor('default')
              })
              // centerAndZoomPoint = 
              setTimeout(() => {
                // setCenterAndZoom(416852.908, 2579585.975, 0.01)
                // setCenterAndZoom(415909, 2579571, 1)
                setCenterAndZoom(640734.481693324, 2871934.1235213242, 10) // 于都演示

                // mapClass.map.centerAndZoom(new Point(2579179, 415556, new SpatialReference({ wkid: zuobiaoxi })), 0.01)
                mapClass.map.setScale(1200)
                console.log(mapClass.map.getScale())
              }, 50)

              return Promise.resolve(mapClass.map)
            })
            .then(function (map) {
              callbackEvent(map)
            })
            .catch(err => {
              console.error(err)
              callbackEvent(null)
            })
      })
      break
    case MapType.Gaode:
      setTimeout(() => {
        remoteLoad(mapClass.baseMapURL).then(function () {
          setTimeout(() => {
            // mExtent 转高德
            let pt = wgs84ToGaode([
              [mapClass.mapExtent.xmin, mapClass.mapExtent.ymin],
              [mapClass.mapExtent.xmax, mapClass.mapExtent.ymax]
            ])

            mapClass.map = new window.AMap.Map(container, {
              resizeEnable: true,
              mapStyle: mapParams.mapstyle,
              center: [(pt[0][0] + pt[1][0]) / 2, (pt[0][1] + pt[1][1]) / 2],
              zooms: mapParams.zooms,
              zoom: mapParams.viewMode === '2D' ? Math.round(mapParams.zoom - 0.5) : 18,
              viewMode: mapParams.viewMode,
              pitch: mapParams.pitch,
              expandZoomRange: mapParams.expandZoomRange
            })
            selectlayer = new window.AMap.OverlayGroup()
            if (mapParams.isShowTextAtMaxZoom) {
              mapClass.map.on('zoomchange', function () {
                // console.log(mapClass.map.getZoom())
                showLayerAtMaxZoom()
              })
            }
            callbackEvent(mapClass.map)
          }, 300)
        })
      }, 100)
      break
    case MapType.GA:
      let pts = wgs84ToGaode([
        [mapClass.mapExtent.xmin, mapClass.mapExtent.ymin],
        [mapClass.mapExtent.xmax, mapClass.mapExtent.ymax]
      ])

      let centerX = (pts[0][0] + pts[1][0]) / 2
      let centerY = (pts[0][1] + pts[1][1]) / 2
      setTimeout(() => {
        mapClass.map = new window.IMAP.Map(container, {
          minZoom: mapParams.zooms[0],
          maxZoom: mapParams.zooms[1],
          zoom: mapParams.zoom,
          center: new window.IMAP.LngLat(centerX, centerY)
        })
        if (mapParams.isShowTextAtMaxZoom) {
          mapClass.map.addEventListener(window.IMAP.Constants.ZOOM_END, function () {
            showLayerAtMaxZoom()
          })
        }
        callbackEvent(mapClass.map)
      }, 300)
      break
    case MapType.Tianditu:
      setTimeout(() => {
        mapClass.map = window.L.map(container, {
          crs: window.L.CRS.CustomEPSG4326,
          center: [(mapClass.mapExtent.xmin + mapClass.mapExtent.xmax) / 2,
          (mapClass.mapExtent.ymin + mapClass.mapExtent.ymax) / 2],
          zoom: mapParams.zoom,
          minZoom: mapParams.zooms[0],
          maxZoom: mapParams.zooms[1],
          zoomControl: false
          // trackResize: true
        })
        // 添加底图
        let layer = new window.L.GXYZ(mapParams.url)
        mapClass.map.addLayer(layer)

        // // 添加注记图层
        // var labelLayer = new window.L.GWVTAnno('GWVTAnno')
        // var dataSource = new window.Custom.URLDataSource()
        // /* eslint-disable-next-line */
        // dataSource.url = 'http://118.178.118.175/mapserver/label/zjvmap/getDatas?x=${x}&y=${y}&l=${z}&styleId=tdt_biaozhunyangshi_2017'
        // labelLayer.addDataSource(dataSource)
        // mapClass.map.addLayer(labelLayer)

        if (mapParams.isShowTextAtMaxZoom) {
          mapClass.map.on('zoomend', function () {
            // console.log(mapClass.map.getZoom())
            showLayerAtMaxZoom()
          })
        }
        callbackEvent(mapClass.map)
      }, 300)

      break
  }
}

/**
 * 控制图层显示影藏
 *
 */
let setShowHideByName = (names) => {
  switch (mapParams.mapType) {
    case MapType.Esri:
      visible = [0,1,2,3,4,5]
      nowShowLayer = names
      if (names.indexOf(3) == -1) {
        gGraphicslayer.setVisibility(false)
        gloBalbaseMapLayer[0].setVisibility(false)
      } else {
        gGraphicslayer.setVisibility(true)
        gloBalbaseMapLayer[0].setVisibility(true)
      }

      if (names.indexOf(0) == -1) {
        gloBalbaseMapLayer[3].setVisibility(false)
      } else {
        if (globalMapScale < 7000) {
          gloBalbaseMapLayer[3].setVisibility(true)
        } else if (globalMapScale > 7000 ) {
          gloBalbaseMapLayer[3].setVisibility(false)
        }
      }
      if (names.indexOf(1) == -1) {
        gloBalbaseMapLayer[2].setVisibility(false)
      } else {
        if (globalMapScale < 7000) {
          gloBalbaseMapLayer[2].setVisibility(true)
        } else if (globalMapScale > 7000 ) {
          gloBalbaseMapLayer[2].setVisibility(false)
        }
      }
      if (names.indexOf(2) == -1) {
        gloBalbaseMapLayer[1].setVisibility(false)
      } else {
        if (globalMapScale < 7000) {
          gloBalbaseMapLayer[1].setVisibility(true)
        } else if (globalMapScale > 7000 ) {
          gloBalbaseMapLayer[1].setVisibility(false)
        }
      }
      if (names.indexOf(4) == -1) {
        gloBalbaseMapLayer[4].setVisibility(false)
      } else {
        if (globalMapScale < 7000) {
          gloBalbaseMapLayer[4].setVisibility(true)
        } else if (globalMapScale > 7000 ) {
          gloBalbaseMapLayer[4].setVisibility(false)
        }
      }
      if (names.indexOf(5) == -1) {
        gloBalbaseMapLayer[5].setVisibility(false)
      } else {
        if (globalMapScale < 7000) {
          gloBalbaseMapLayer[5].setVisibility(true)
        } else if (globalMapScale > 7000 ) {
          gloBalbaseMapLayer[5].setVisibility(false)
        }
      }
      break
    case MapType.Gaode:
      break
  }
}

let lineLayer;
let carLayer;
let carSymbol;
let isLine = true
let carurl = require("../assets/imgs/zhihuipaishui/jiantou.png")
// 绘制动画
let startAnimation = (posList) => {
  esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol', 'esri/graphic', 'esri/geometry/Polyline', 'esri/symbols/SimpleLineSymbol'])
            .then(([GraphicsLayer, Point, PictureMarkerSymbol, Graphic, Polyline, SimpleLineSymbol]) => {
              carSymbol = new PictureMarkerSymbol(carurl, 22, 13);
              lineLayer = new GraphicsLayer("lineLayer");
              mapClass.map.addLayer(lineLayer);

          
              carLayer = new GraphicsLayer("carLayer");
              mapClass.map.addLayer(carLayer);
              console.log(posList, 'posListposListposListposListposListposList')
              trajRun(posList)
              // trajRun(posList1, isLine, lineLayer, carLayer, carSymbol)
              // setInterval(() => {
              //   trajRun(posList, isLine, lineLayer, carLayer, carSymbol)
              // }, 1000)
            })
  

  

  // 绘制线路

}

let justDrawLine = (item) => {
  esriLoader.loadModules(['esri/geometry/Polyline', 'esri/symbols/SimpleLineSymbol', 'esri/graphic', 'esri/Color']).then(([Polyline, SimpleLineSymbol, Graphic, Color]) => {
    var path = [[item.startx,item.starty], [item.endx,item.endy]];

    // 生成绘制的图形
    var polylineJson = {
        "paths":[path],
        "spatialReference":{"wkid":4549}
      };
    var polyline = new Polyline(polylineJson);
    let symbol = new SimpleLineSymbol(
      SimpleLineSymbol.STYLE_SOLID,
      new Color([255,255,0]),
      3);
    var graphic = new Graphic(polyline, symbol);
    lineLayer.add(graphic);
  })
}

let clearGraphicsLayer = () => {
  if (lineLayer) {
    lineLayer.clear();
  };
  if (carLayer) {
    carLayer.clear();
  };
  if(timer) clearTimeout(timer);
  if(playTimer) clearTimeout(playTimer);
}

var playTimer;
var timer;
let trajRun = (posList) => {
  esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol', 'esri/graphic', 'esri/geometry/Polyline', 'esri/symbols/SimpleLineSymbol', 'esri/geometry/webMercatorUtils', 'esri/Color'])
            .then(([GraphicsLayer, Point, PictureMarkerSymbol, Graphic, Polyline, SimpleLineSymbol, webMercatorUtils, Color]) => {
              var speed = 4;
              var speed2 = 140;
              var carIndex = 0;

              lineLayer.clear();
              carLayer.clear();
              if(timer) clearTimeout(timer);
              if(playTimer) clearTimeout(playTimer);
              //划线
              function drowPolyline(){
                  //清除之前绘制
                  lineLayer.clear();
                  var path = [];
                  for(var i=0,len=posList.length;i<len;i++){
                      var point = [posList[i].lng,posList[i].lat];
                      path.push(point);
                  }

                  // 生成绘制的图形
                  var polylineJson = {
                      "paths":[path],
                      "spatialReference":{"wkid":4549}
                    };
                  var polyline = new Polyline(polylineJson);
                  let symbol = new SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID,
                    new Color([255,255,0]),
                    3);
                  var graphic = new Graphic(polyline, symbol);
                  lineLayer.add(graphic);
              }

              /**
               * 图片运动
               */
              var index=0;
              var intvaltime=0;
              function runStart () {
                  if(posList.length == 0){
                      return false;
                  }
                  if(timer) clearTimeout(timer);
                  timer = setTimeout(function () {
                      if(index == posList.length - 1) {
                          if(timer) clearTimeout(timer);
                      } else {
                          var p1 = changePosXY(posList[index]);
                          var p2 = changePosXY(posList[++index]);
                          // var p1 = {x:posList[index].lng,y:posList[index].lat};
                          // var p2 = {x:posList[++index].lng,y:posList[++index].lat};
                          var tempPoints = interpolation(p1, p2, speed);
                          var angle = Math.ceil(Angle(p1.x, p1.y, p2.x, p2.y))
                          carSymbol.setAngle(angle)   //设置小车角度
                          console.log(angle);
                          // if(Math.abs(angle)>=80 && Math.abs(angle)<=100){
                          //     if(angle<0){
                          //         carSymbol.setOffset(-17.5,0);
                          //     }else{
                          //         carSymbol.setOffset(17.5,0);
                          //     }
                          // }else if(Math.abs(angle)>=90){
                          //     carSymbol.setOffset(0,-18);
                          // }else{
                          //     carSymbol.setOffset(0,18);
                          // }
                          carIndex=0;
                          play(tempPoints);

                          intvaltime = tempPoints.length*speed2;
                          if(index < posList.length-1){
                              runStart();
                          }
                      }
                  }, intvaltime);
              }
              /**
               *经纬度转墨卡托
                */
              function changePosXY(pt){
                  // var lnglat = webMercatorUtils.lngLatToXY(pt.lng,pt.lat);
                  // return {x:lnglat[0],y:lnglat[1]};
                  return {x:pt.lng,y:pt.lat};
              }
              /**
               *墨卡托转经纬度
                */
              function changePosPoint(pt){
                  // var lnglat = webMercatorUtils.xyToLngLat(pt.x,pt.y);
                  // return {lng:lnglat[0],lat:lnglat[1]};
                  return {lng:pt.x,lat:pt.y};
              }
              /**
              * 根据回放速度在两点之间进行插值
              */
              function interpolation (pointA, pointB, speed){
                  var tmp = [];
                  if (speed == undefined) {
                      speed = 2;
                  }
                  var count = Math.abs(speed);

                  var x1 = Math.abs(pointB.x - pointA.x);
                  var y1 = Math.abs(pointB.y - pointA.y);
                  var z1 = Math.sqrt(x1*x1+y1*y1);
                  count = z1/count;

                  var disX = (pointB.x - pointA.x) / count;
                  var disY = (pointB.y - pointA.y) / count;
                  var i = 0;
                  while (i <= count) {
                      var x = pointA.x + i * disX;
                      var y = pointA.y + i * disY;
                      tmp.push({x:x,y:y});
                      i++;
                  }
                  tmp.push(pointB);//防止插值出来的最后一个点到不了B点
                  return tmp;
              }
              /*
              *计算图片的角度
                */
              function Angle (startx, starty, endx, endy) {
                  var tan = 0
                  if (endx == startx) {
                      tan = Math.atan(0) * 180 / Math.PI
                  } else {
                      tan = Math.atan(Math.abs((endy - starty) / (endx - startx))) * 180 / Math.PI;
                  }

                  if (endx >= startx && endy >= starty)//第一象限
                  {
                      return -tan;
                  } else if (endx > startx && endy < starty)//第四象限
                  {
                      return tan;
                  } else if (endx < startx && endy > starty)//第二象限
                  {
                      return tan - 180;
                  } else {
                      return 180 - tan;  //第三象限
                  }
              }
              /**
              * 播放
              */
              function play(tmpPoints) {
                  if(playTimer) clearTimeout(playTimer);
                  playTimer = setTimeout(function () {
                      if (carIndex < tmpPoints.length - 1) {
                          carLayer.clear();
                          // tmpPoints.forEach(item => {
                          //   let carGriphic = new Graphic(new Point(changePosPoint(item).lng,changePosPoint(item).lat), carSymbol);
                          //   carLayer.add(carGriphic);
                          // });
                          var point = changePosPoint(tmpPoints[carIndex + 1]);
                          point = new Point(point.lng,point.lat);
                          var carGriphic = new Graphic(point, carSymbol);
                          carLayer.add(carGriphic);
                          carIndex++;
                          play(tmpPoints);
                      }else {
                          carIndex = 0;
                          clearTimeout(playTimer);
                          trajRun(posList)
                      }
                  }, speed2);
              }

              if(isLine){
                  drowPolyline();
              }
              runStart();


            })
};

let setShowHideByName1 = (names) => {
  switch (mapParams.mapType) {
    case MapType.Esri:
      if (names.indexOf(1) == -1) {
        gloBalbaseMapLayertu[1].setVisibility(false)
      } else {
        gloBalbaseMapLayertu[1].setVisibility(true)
      }
      if (names.indexOf(0) == -1) {
        gloBalbaseMapLayertu[0].setVisibility(false)
        gloBalbaseMapLayertu[4].setVisibility(false)
      } else {
        gloBalbaseMapLayertu[0].setVisibility(true)
        gloBalbaseMapLayertu[4].setVisibility(true)
      }
      break
    case MapType.Gaode:
      break
  }
}

let setShowHideByName2 = (names) => {
  switch (mapParams.mapType) {
    case MapType.Esri:
      if (names.indexOf(0) == -1) {
        gloBalbaseMapLayertu[2].setVisibility(false)
      } else {
        gloBalbaseMapLayertu[2].setVisibility(true)
      }
      if (names.indexOf(1) == -1) {
        gloBalbaseMapLayertu[3].setVisibility(false)
      } else {
        gloBalbaseMapLayertu[3].setVisibility(true)
      }
      break
    case MapType.Gaode:
      break
  }
}
let addfeatureType = null
let enableCreatePoly = (formObj, addtype, search, type) => {
  globalFormObj = formObj
  addfeatureType = type
  useSearch = search
  esriLoader.loadModules(['esri/toolbars/draw'])
            .then(([Draw]) => {
              toolbar = new Draw(mapClass.map, { showTooltips: false });
              toolbar.on("draw-complete", (evt) => {
                if (useSearch) {
                  searchData(evt)
                } else {
                  addToMap(evt)
                }
              });
              if (addtype == 'polyLine') {
                notification.success({ message: '系统提示', description: '请在地图上添加管线'})
                toolbar.activate(Draw.POLYLINE);
              } else if (addtype == 'point') {
                notification.success({ message: '系统提示', description: '请在地图上添加点'})
                toolbar.activate(Draw.POINT);
              } else if (addtype == 'Circle') {
                notification.success({ message: '系统提示', description: '请在地图上画圆'})
                toolbar.activate(Draw.CIRCLE);
              } else if (addtype == 'Polygon') {
                notification.success({ message: '系统提示', description: '请在地图上画区域'})
                toolbar.activate(Draw.POLYGON);
              }
            })
}
let otherCantClick = null
let newTool = null
let addFeatureToMap = (addtype, callback) => {
  otherCantClick = true
  esriLoader.loadModules(['esri/toolbars/draw'])
            .then(([Draw]) => {
              newTool = new Draw(mapClass.map, { showTooltips: false });
              newTool.on("draw-complete", (evt) => {
                  addGraficToMap(evt)
                  otherCantClick = null
                  callback(evt)
              });
              if (addtype == 'polyLine') {
                notification.success({ message: '系统提示', description: '请在地图上添加管线'})
                newTool.activate(Draw.POLYLINE);
              } else if (addtype == 'point') {
                notification.success({ message: '系统提示', description: '请在地图上添加点'})
                newTool.activate(Draw.POINT);
              } else if (addtype == 'Circle') {
                notification.success({ message: '系统提示', description: '请在地图上画圆'})
                newTool.activate(Draw.CIRCLE);
              } else if (addtype == 'Polygon') {
                notification.success({ message: '系统提示', description: '请在地图上画区域'})
                newTool.activate(Draw.POLYGON);
              }
            })
}


let callbackSearchData = null
let searchDataArr = (addtype, search, callback) => {
  useSearch = search
  callbackSearchData = callback
  esriLoader.loadModules(['esri/toolbars/draw'])
            .then(([Draw]) => {
              toolbar = new Draw(mapClass.map, { showTooltips: false });
              toolbar.on("draw-complete", (evt) => {
                if (useSearch) {
                  searchData(evt)
                } else {
                  addToMap(evt)
                }
              });
              if (addtype == 'polyLine') {
                notification.success({ message: '系统提示', description: '请在地图上添加管线'})
                toolbar.activate(Draw.POLYLINE);
              } else if (addtype == 'point') {
                notification.success({ message: '系统提示', description: '请在地图上添加点'})
                toolbar.activate(Draw.POINT);
              } else if (addtype == 'Circle') {
                notification.success({ message: '系统提示', description: '请在地图上画圆'})
                toolbar.activate(Draw.CIRCLE);
              } else if (addtype == 'Polygon') {
                notification.success({ message: '系统提示', description: '请在地图上画区域'})
                toolbar.activate(Draw.POLYGON);
              }
            })
}

let spbpTool = null
let searchPointByP = (callback) => {
  esriLoader.loadModules(['esri/toolbars/draw','esri/symbols/PictureMarkerSymbol', 'esri/symbols/SimpleMarkerSymbol', 'esri/graphic',
  'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color', 'esri/tasks/IdentifyTask', 'esri/tasks/IdentifyParameters', 'esri/geometry/Polyline'])
            .then(([Draw, PictureMarkerSymbol, SimpleMarkerSymbol, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, IdentifyTask, IdentifyParameters, Polyline]) => {
              spbpTool = new Draw(mapClass.map, { showTooltips: false });
              let num = 0
              // let pointJson = [[null,null],[null,null]]
              let polylineJson = {
                "paths":[[[null,null], [null,null]]],
                "spatialReference":{"wkid":zuobiaoxi}
              };
              spbpTool.on("draw-complete", (evt) => {
                let geometry = evt.geometry;
                let symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.CROSS, 10,
                          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                          new Color([255,0,0]), 1),
                          new Color([0,255,0,0.25]));
                let graphic = new Graphic(geometry, symbol);
                mapClass.map.graphics.add(graphic);

                //定义空间查询对象，注意他的参数是整个地图服务，而不是单个图层
                var identifyTask = new IdentifyTask(`${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/MapServer`);
                //定义空间查询参数对象
                var params = new IdentifyParameters();
                //容差
                params.tolerance = 5;
                //是否返回几何信息
                params.returnGeometry = true;
                //空间查询的图层
                params.layerIds = [0,1,2,3,4,5];
                //空间查询的条件
                params.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
                params.width = mapClass.map.width;
                params.height = mapClass.map.height;
                //空间查询的几何对象
                params.geometry = geometry;
                params.mapExtent = mapClass.map.extent;
                //执行空间查询
                identifyTask.execute(params, (res) => {
                  let data = res.filter((item) => {
                      return item.layerId !== 5 && item.layerId !== 0 && item.layerId !== 1
                  })[0]
                  if (num == 1) {
                    polylineJson.paths[0][0][0] = data.feature.attributes.x_coor
                    polylineJson.paths[0][0][1] = data.feature.attributes.y_coor
                  } else {
                    polylineJson.paths[0][1][0] = data.feature.attributes.x_coor
                    polylineJson.paths[0][1][1] = data.feature.attributes.y_coor
                  }
                  callback(res, num)
                });
                  // searchData(evt)
                  // callback(evt)
                num++
                if (num == 2) {
                  otherCantClick = false
                  let polyline = new Polyline(polylineJson);
                  let symbol1 = new SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID,
                    new Color([0,126,28]),
                    3);
                  let graphicLine = new Graphic(polyline, symbol1);
                  console.log(graphicLine, '生成的线')
                  mapClass.map.graphics.add(graphicLine);
                  mapClass.map.setZoom(0.0001)
                  spbpTool.deactivate()
                }
              });
              notification.success({ message: '系统提示', description: '请在地图上添加点'})
              otherCantClick = true
              spbpTool.activate(Draw.POINT);
            })
}

let multiAdd = (data, nowSelectValue) => {
  esriLoader.loadModules(['esri/symbols/PictureMarkerSymbol', 'esri/toolbars/draw', 'esri/graphic', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color', 'esri/geometry/Polyline', 'esri/geometry/Point'])
            .then(([PictureMarkerSymbol, Draw, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, Polyline, Point]) => {
              let isnotExit = data[0]
              let isExit = data[1]
              // message.loading({ content: '上传中' });
              const hide = message.loading({ content: '正在上传...', duration: 0 });
                let allGraphic = []
                let hasGraphic = []
                if (isnotExit.length !== 0) {
                  let symbol;
                  let geometry;
                  for (let i = 0; i < isnotExit.length; i++) {
                    switch (nowSelectValue) {
                      case 0:
                        let pointJson1 = {"x": isnotExit[i].x_coor, "y": isnotExit[i].y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                        geometry = new Point(pointJson1)
                        symbol = new PictureMarkerSymbol(
                          {
                            url: require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png'),
                            height:16,
                            width:16
                          }
                        );
                        break;
                      case 1:
                        let pointJson2 = {"x": isnotExit[i].x_coor, "y": isnotExit[i].y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                        geometry = new Point(pointJson2)
                        symbol = new PictureMarkerSymbol(
                          {
                            url: require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png'),
                            height:16,
                            width:16
                          }
                        );
                        break;
                      case 2:
                        let pic = null
                        if (isnotExit[i].manhole_category == 1) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijianchajiaojing1.png')
                        } else if (isnotExit[i].manhole_category == 2) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijianchajiaojing.png')
                        } else {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijianchajiaojing1.png')
                        }
                        let pointJson3 = {"x": isnotExit[i].x_coor, "y": isnotExit[i].y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                        geometry = new Point(pointJson3)
                        symbol = new PictureMarkerSymbol(
                          {
                            url: pic,
                            height:16,
                            width:16
                          }
                        );
                        break;
                      case 3:
                        symbol = new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([0,126,28]),
                          3);
                        let polylineJson = {
                          "paths":[[[isnotExit[i].startx,isnotExit[i].starty], [isnotExit[i].endx,isnotExit[i].endy]]],
                          "spatialReference":{"wkid":zuobiaoxi}
                        };
                        geometry = new Polyline(polylineJson);
                        break;
                      default:
                        symbol = new SimpleFillSymbol();
                        break;
                    }
                    var graphic = new Graphic(geometry, symbol);
                    for (const key in isnotExit[i]) {
                      if (Object.hasOwnProperty.call(isnotExit[i], key)) {
                        isnotExit[i][key] = isnotExit[i][key] || null;
                      }
                    }
                    graphic.setAttributes(isnotExit[i])
                    allGraphic.push(graphic)
                  }
                } else {
                  allGraphic = null
                }
                if (isExit.length !== 0) {
                    let symbol;
                    let geometry;
                    for (let i = 0; i < isExit.length; i++) {
                    switch (nowSelectValue) {
                      case 0:
                        let pointJson1 = {"x": isExit[i].x_coor, "y": isExit[i].y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                        geometry = new Point(pointJson1)
                        symbol = new PictureMarkerSymbol(
                          {
                            url: require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png'),
                            height:16,
                            width:16
                          }
                        );
                        break;
                      case 1:
                        let pointJson2 = {"x": isExit[i].x_coor, "y": isExit[i].y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                        geometry = new Point(pointJson2)
                        symbol = new PictureMarkerSymbol(
                          {
                            url: require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png'),
                            height:16,
                            width:16
                          }
                        );
                        break;
                      case 2:
                        let pic = null
                        if (isExit[i].manhole_category == 1) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijianchajiaojing1.png')
                        } else if (isExit[i].manhole_category == 2) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijianchajiaojing.png')
                        } else {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijianchajiaojing.png')
                        }
                        let pointJson3 = {"x": isExit[i].x_coor, "y": isExit[i].y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                        geometry = new Point(pointJson3)
                        symbol = new PictureMarkerSymbol(
                          {
                            url: pic,
                            height:16,
                            width:16
                          }
                        );
                        break;
                      case 3:
                        symbol = new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([0,126,28]),
                          3);
                        let polylineJson = {
                          "paths":[[[isExit[i].startx,isExit[i].starty], [isExit[i].endx,isExit[i].endy]]],
                          "spatialReference":{"wkid":zuobiaoxi}
                        };
                        geometry = new Polyline(polylineJson);
                        break;
                      default:
                        symbol = new SimpleFillSymbol();
                        break;
                    }
                    var graphic = new Graphic(geometry, symbol);
                    for (const key in isExit[i]) {
                      if (Object.hasOwnProperty.call(isExit[i], key)) {
                        isExit[i][key] = isExit[i][key] || null;
                      }
                    }
                    graphic.setAttributes(isExit[i])
                    // mapClass.map.graphics.add(graphic);
                    hasGraphic.push(graphic)
                  }
                } else {
                  hasGraphic = null
                }
                if (nowSelectValue == 1) {
                  // 添加雨水井
                  gloBalbaseMapLayer[2].applyEdits(allGraphic, hasGraphic, null, (res) => {
                    hide()
                    message.success({ content: '批量新增雨水井成功!', duration: 2 })
                    gloBalbaseMapLayer[2].refresh()
                  }, (err) => {
                    hide()
                  });
                } else if (nowSelectValue == 2) {
                  // 添加检查井
                  gloBalbaseMapLayer[1].applyEdits(allGraphic, hasGraphic, null, (res) => {
                    hide()
                    message.success({ content: '批量新增检查井成功!', duration: 2 })
                    gloBalbaseMapLayer[1].refresh()
                  }, (err) => {
                    hide()
                  });
                } else if (nowSelectValue == 3) {
                  // 添加线
                  gloBalbaseMapLayer[0].applyEdits(allGraphic, hasGraphic, null, (res) => {
                    hide()
                    message.success({ content: '批量新增管道线成功!', duration: 2 })
                    gloBalbaseMapLayer[0].refresh()
                    addArrowPoint()
                  }, (err) => {
                    hide()
                  });
                } else if (nowSelectValue == 0) {
                  // 添加排水口
                  gloBalbaseMapLayer[3].applyEdits(allGraphic, hasGraphic, null, (res) => {
                    hide()
                      message.success({ content: '批量新增排水口成功!', duration: 2 })
                      gloBalbaseMapLayer[3].refresh()
                  }, (err) => {
                    hide()
                  });
                }
            })
}

let addFeatureByPoint = (obj, nowSelectValue, type, callBack) => {
  esriLoader.loadModules(['esri/symbols/PictureMarkerSymbol', 'esri/toolbars/draw', 'esri/graphic', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color', 'esri/geometry/Polyline', 'esri/geometry/Point'])
            .then(([PictureMarkerSymbol, Draw, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, Polyline, Point]) => {
              let symbol;
              let geometry;
                switch (nowSelectValue) {
                  case 'point':
                    let pic = null
                    
                    if (type == 'jianchajing') {
                      let manhole_category = obj.manhole_category  // 1雨水  2污水  3合流 4其他
                      if (manhole_category == 1) {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png')
                      } else if (manhole_category == 2) {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png')
                      } else {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png')
                      } 
                    } else if (type == 'paishuikou') {
                      pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
                    } else if (type == 'yushuikou') {
                      pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png')
                    } else if (type == 'hunjie') {
                      pic = require('../assets/imgs/zhihuipaishui/map/hunjie.png')
                    } else if (type == 'liguan') {
                      pic = require('../assets/imgs/zhihuipaishui/map/tubiao/liguan.png')
                    } else if (type == 'huafenchi') {
                      pic = require('../assets/imgs/zhihuipaishui/map/tubiao/huafenchi.png')
                    }
                    let pointJson = {"x": obj.x_coor, "y": obj.y_coor, "spatialReference": {"wkid": zuobiaoxi } }
                    geometry = new Point(pointJson)
                    symbol = new PictureMarkerSymbol(
                      {
                        url: pic,
                        height:8,
                        width:8
                      }
                    );
                    break;
                  case 'pipe':
                    symbol = new SimpleLineSymbol(
                      SimpleLineSymbol.STYLE_SOLID,
                      new Color([0,126,28]),
                      3);
                    let polylineJson = {
                      "paths":[[[obj.startx,obj.starty], [obj.endx,obj.endy]]],
                      "spatialReference":{"wkid":zuobiaoxi}
                    };
                    geometry = new Polyline(polylineJson);
                    break;
                  default:
                    symbol = new SimpleFillSymbol();
                    break;
                }
                var graphic = new Graphic(geometry, symbol);
                obj.create_time = getFormatymdhmsDate(new Date())
                graphic.setAttributes(obj)
                mapClass.map.graphics.add(graphic)
              if (nowSelectValue == 'point') {
                  if (type == 'jianchajing') {
                    // 添加检查井
                    gloBalbaseMapLayer[1].applyEdits([graphic], null, null, (res) => {
                      message.success({ content: '新增检查井成功!', duration: 2 })
                    });
                    gloBalbaseMapLayer[1].refresh()
                  } else if (type == 'paishuikou') {
                    // 添加排水口
                    gloBalbaseMapLayer[3].applyEdits([graphic], null, null, (res) => {
                      message.success({ content: '新增排水口成功!', duration: 2 })
                    });
                    gloBalbaseMapLayer[3].refresh()
                  } else if (type == 'yushuikou') {
                    // 添加雨水口
                    gloBalbaseMapLayer[2].applyEdits([graphic], null, null, (res) => {
                      message.success({ content: '新增雨水口成功!', duration: 2 })
                    });
                    gloBalbaseMapLayer[2].refresh()
                  } else if (type == 'hunjie') {
                    // 添加混接
                    gloBalbaseMapLayertu[3].applyEdits([graphic], null, null, (res) => {
                      message.success({ content: '新增混接成功!', duration: 2 })
                    });
                    gloBalbaseMapLayertu[3].refresh()
                  } else if (type == 'liguan') {
                    // 添加立管
                    gloBalbaseMapLayer[4].applyEdits([graphic], null, null, (res) => {
                      message.success({ content: '新增立管成功!', duration: 2 })
                    });
                    gloBalbaseMapLayer[4].refresh()
                  } else if (type == 'huafenchi') {
                    // 添加化粪池
                    gloBalbaseMapLayer[5].applyEdits([graphic], null, null, (res) => {
                      message.success({ content: '新增化粪池成功!', duration: 2 })
                    });
                    gloBalbaseMapLayer[5].refresh()
                  }
                } else if (nowSelectValue == 'pipe') {
                  // 添加线
                  gloBalbaseMapLayer[0].applyEdits([graphic], null, null, (res) => {
                    removeGraphics()
                    callBack(res)
                    message.success({ content: '新增管道线成功!', duration: 2 })
                    gloBalbaseMapLayer[0].refresh()
                    addArrowPoint()
                  });
              }
            })
}

let addQXtoMap = (type, x,y,obj,callback) => {
  let newObj = {
    check_rect: obj.checkRect,
    check_type: obj.checkType,
    defect_code: obj.defectCode,
    defect_data: obj.defectData,
    defect_gra: obj.defectGra,
    defect_jlend: obj.defectJlend,
    defect_jlstart: obj.defectJlstart,
    defect_len: obj.defectLen,
    defect_name: obj.defectName,
    del_flag: obj.delFlag,
    file_relat: obj.fileRelat,
    in_juncid: obj.inJuncid,
    out_juncid: obj.outJuncid,
    remark: obj.remark,
    pipeid: obj.pipeid,
    is_dispose: 0,
    x_coor: x,
    y_coor: y,
    file_videoafter: obj.fileVideoafter,
    file_video: obj.fileVideo,
    file_relatafter: obj.fileRelatafter,
    file_relat: obj.fileRelat,
    objectid: obj.objectid,
    clock: obj.clock,
    locationcode: obj.locationcode,
    road_name: obj.road_name,
  }
  esriLoader.loadModules(['esri/symbols/PictureMarkerSymbol', 'esri/toolbars/draw', 'esri/graphic', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color', 'esri/geometry/Polyline', 'esri/geometry/Point'])
            .then(([PictureMarkerSymbol, Draw, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, Polyline, Point]) => {
              let symbol;
              let geometry;
                
              let pointJson = {"x": x, "y": y, "spatialReference": {"wkid": zuobiaoxi } }
              geometry = new Point(pointJson)
              console.log(newObj)
              symbol = new PictureMarkerSymbol(
                {
                  url: require(`../assets/imgs/zhihuipaishui/map/缺陷图标/${newObj.defect_code}.png`),
                  height:16,
                  width:16
                }
              );
              var graphic = new Graphic(geometry, symbol);
              newObj.create_time = getFormatymdhmsDate(new Date())
              graphic.setAttributes(newObj)
              mapClass.map.graphics.add(graphic)
              if (type == 'add') {
                gloBalbaseMapLayertu[2].applyEdits([graphic], null, null, (res) => {
                  callback()
                  notification.success({ message: '添加提示', description: '新增缺陷成功'})
                });
              } else if (type == 'edit') {
                gloBalbaseMapLayertu[2].applyEdits(null, [graphic], null, (res) => {
                  // let updateResults = res.updateResults
                  // updateResults.forEach((item) => {
                  //   if (item.success == false) {
                  //     window.localStorage.setItem('qxerrorLog', JSON.stringify({itemError: item, time: new Date(), graphic}))
                  //   }
                  // })
                  callback()
                });
              } else {
                gloBalbaseMapLayertu[2].applyEdits(null, null, [graphic], (res) => {
                  callback()
                });
              }
              gloBalbaseMapLayertu[2].refresh()
    })
}

let editFeatureByPoint =  (obj, nowSelectValue, type, callBack) => {
    needGraphic.attributes = obj
    if (nowSelectValue == 'point') {
        needGraphic.geometry.x = obj.x_coor
        needGraphic.geometry.y = obj.y_coor
        if (type == 'jianchajing') {
          // 修改检查井
          gloBalbaseMapLayer[1].applyEdits(null, [needGraphic], null, (res) => {
            message.success({ content: '修改检查井成功!', duration: 2 })
            gloBalbaseMapLayer[1].refresh()
            callBack()
            removeGraphics()
          });
        } else if (type == 'paishuikou') {
          // 修改排水口
          gloBalbaseMapLayer[3].applyEdits(null, [needGraphic], null, (res) => {
            message.success({ content: '修改排水口成功!', duration: 2 })
            gloBalbaseMapLayer[3].refresh()
            callBack()
            removeGraphics()
          });
        } else if (type == 'yushuikou') {
          // 修改雨水口
          gloBalbaseMapLayer[2].applyEdits(null, [needGraphic], null, (res) => {
            message.success({ content: '修改雨水口成功!', duration: 2 })
            gloBalbaseMapLayer[2].refresh()
            callBack()
            removeGraphics()
          });
        } else if (type == 'hunjie') {
          // 修改混接
          gloBalbaseMapLayertu[3].applyEdits(null, [jianchahunjieGraphic], null, (res) => {
            message.success({ content: '修改混接成功!', duration: 2 })
            gloBalbaseMapLayertu[3].refresh()
            callBack()
            removeGraphics()
          });
        } else if (type == 'liguan') {
          // 修改立管
          gloBalbaseMapLayer[4].applyEdits(null, [needGraphic], null, (res) => {
            message.success({ content: '修改立管成功!', duration: 2 })
            gloBalbaseMapLayer[4].refresh()
            callBack()
            removeGraphics()
          });
        } else if (type == 'huafenchi') {
          // 修改化粪池
          gloBalbaseMapLayer[5].applyEdits(null, [needGraphic], null, (res) => {
            message.success({ content: '修改化粪池成功!', duration: 2 })
            gloBalbaseMapLayer[5].refresh()
            callBack()
            removeGraphics()
          });
        }
      } else if (nowSelectValue == 'pipe') {
        // 修改线
        needGraphic.geometry.paths = [[[obj.startx,obj.starty],[obj.endx,obj.endy]]]
        console.log(needGraphic)
        gloBalbaseMapLayer[0].applyEdits(null, [needGraphic], null, (res) => {
          // let updateResults = res.updateResults
          // updateResults.forEach((item) => {
          //   if (item.success == false) {
          //     window.localStorage.setItem('errorLog', JSON.stringify({itemError: item, time: new Date(), needGraphic}))
          //   }
          // })
          message.success({ content: '修改管道线成功!', duration: 2 })
          gloBalbaseMapLayer[0].refresh()
          callBack()
          addArrowPoint()
        });
    }
}

let deleteFeatureByPoint =  (obj, nowSelectValue, type) => {
  needGraphic.attributes = obj
  if (nowSelectValue == 'point') {
      if (type == 'jianchajing') {
        // 删除检查井
        gloBalbaseMapLayer[1].applyEdits(null, null, [needGraphic], (res) => {
          message.success({ content: '删除检查井成功!', duration: 2 })
        });
        gloBalbaseMapLayer[1].refresh()
      } else if (type == 'paishuikou') {
        // 删除排水口
        gloBalbaseMapLayer[3].applyEdits(null, null, [needGraphic], (res) => {
          message.success({ content: '删除排水口成功!', duration: 2 })
        });
        gloBalbaseMapLayer[3].refresh()
      } else if (type == 'yushuikou') {
        // 删除雨水口
        gloBalbaseMapLayer[2].applyEdits(null, null, [needGraphic], (res) => {
          message.success({ content: '删除雨水口成功!', duration: 2 })
        });
        gloBalbaseMapLayer[2].refresh()
      } else if (type == 'hunjie') {
        // 删除混接
        gloBalbaseMapLayertu[3].applyEdits(null, null, [jianchahunjieGraphic], (res) => {
          message.success({ content: '删除混接成功!', duration: 2 })
        });
        gloBalbaseMapLayertu[3].refresh()
      } else if (type == 'liguan') {
        // 删除立管
        gloBalbaseMapLayer[4].applyEdits(null, null, [needGraphic], (res) => {
          message.success({ content: '删除立管成功!', duration: 2 })
        });
        gloBalbaseMapLayer[4].refresh()
      } else if (type == 'huafenchi') {
        // 删除化粪池
        gloBalbaseMapLayer[5].applyEdits(null, null, [needGraphic], (res) => {
          message.success({ content: '删除化粪池成功!', duration: 2 })
        });
        gloBalbaseMapLayer[5].refresh()
      }
    } else if (nowSelectValue == 'pipe') {
      // 删除线
      gloBalbaseMapLayer[0].applyEdits(null, null, [needGraphic], (res) => {
        console.log(res, 'tongguodianweijiaguanxian')
        message.success({ content: '删除管道线成功!', duration: 2 })
      });
    }
}

let addGraficToMap = (evt) => {
  esriLoader.loadModules(['esri/symbols/PictureMarkerSymbol', 'esri/toolbars/draw', 'esri/graphic', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color', 'esri/symbols/SimpleMarkerSymbol'])
  .then(([PictureMarkerSymbol, Draw, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, SimpleMarkerSymbol]) => {
    let symbol;
    newTool.deactivate();
    // if (globalFormObj.idAdd) {
      switch (evt.geometry.type) {
        case "point":
        case "multipoint":
          symbol = new SimpleMarkerSymbol()
          break;
        case "polyline":
          symbol = new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([0,126,28]),
            3);
          break;
        default:
          symbol = new SimpleFillSymbol();
          break;
      }
      var graphic = new Graphic(evt.geometry, symbol);
      mapClass.map.graphics.add(graphic);
  })
}
let addToMap = (evt) => {
  esriLoader.loadModules(['esri/symbols/PictureMarkerSymbol', 'esri/toolbars/draw', 'esri/graphic', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color'])
            .then(([PictureMarkerSymbol, Draw, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color]) => {
              let symbol;
              toolbar.deactivate();
              // if (globalFormObj.idAdd) {
                switch (evt.geometry.type) {
                  case "point":
                  case "multipoint":
                    let pic = null
                    // 检查井
                    if (addfeatureType == 'jianchajing') {
                      if (globalFormObj.manhole_category == 1) {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png')
                      } else if (globalFormObj.manhole_category == 2) {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png')
                      } else {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png')
                      }
                    } else if (addfeatureType == 'paishuikou') {
                      pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
                    } else if (addfeatureType == 'yushuikou') {
                      pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png')
                    }
                    // if (globalFormObj.idAdd == 1) {
                    //   pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijianchajiaojing.png')
                    // } else if (globalFormObj.idAdd == 2) {
                    //   pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijianchajiaojing.png')
                    // } else if (globalFormObj.idAdd == 0) {
                    //   pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
                    // }
                    symbol = new PictureMarkerSymbol(
                      {
                        url: pic,
                        height: 8,
                        width: 8
                      }
                    );
                    break;
                  case "polyline":
                    symbol = new SimpleLineSymbol(
                      SimpleLineSymbol.STYLE_SOLID,
                      new Color([0,126,28]),
                      3);
                    break;
                  default:
                    symbol = new SimpleFillSymbol();
                    break;
                }
                var graphic = new Graphic(evt.geometry, symbol);
                let copyObj = globalFormObj
                copyObj.x_coor = evt.geometry.x
                copyObj.y_coor = evt.geometry.y
                copyObj.create_time = getFormatymdhmsDate(new Date())
                graphic.setAttributes(copyObj)
                mapClass.map.graphics.add(graphic);
                
                if (addfeatureType == 'jianchajing') {
                  // 添加检查井
                  gloBalbaseMapLayer[1].applyEdits([graphic], null, null, (res) => {
                    notification.success({ message: '系统提示', description: '新增检查井成功'})
                  });
                  gloBalbaseMapLayer[1].refresh()
                } else if (addfeatureType == 'paishuikou') {
                  // 添加排水口
                  gloBalbaseMapLayer[3].applyEdits([graphic], null, null, (res) => {
                    notification.success({ message: '系统提示', description: '新增排水口成功'})
                  });
                  gloBalbaseMapLayer[3].refresh()
                } else if (addfeatureType == 'yushuikou') {
                  // 添加雨水口
                  gloBalbaseMapLayer[2].applyEdits([graphic], null, null, (res) => {
                    notification.success({ message: '系统提示', description: '新增雨水口成功'})
                  });
                  gloBalbaseMapLayer[2].refresh()
                } else {
                  // 添加线
                  gloBalbaseMapLayer[0].applyEdits([graphic], null, null, (res) => {
                    notification.success({ message: '系统提示', description: '新增管道线成功'})
                  });
                  gloBalbaseMapLayer[0].refresh()
                }
            })
}

let searchData = (geographicGeometry) => {
  esriLoader.loadModules(['esri/symbols/PictureMarkerSymbol', 'esri/symbols/SimpleMarkerSymbol', 'esri/graphic',
  'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/Color', 'esri/tasks/IdentifyTask', 'esri/tasks/IdentifyParameters'])
  .then(([PictureMarkerSymbol, SimpleMarkerSymbol, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, IdentifyTask, IdentifyParameters]) => {
    toolbar.deactivate();//关闭绘图工具
    mapClass.map.graphics.clear();
    let geometry = geographicGeometry.geometry;
    let symbol
    switch (geometry.type) {
        case "polygon":
            symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
              new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
              new Color([255,0,0]), 2),new Color([255,255,0,0.25]))
            break;
        case "polyline":
            symbol = new SimpleLineSymbol(
              SimpleLineSymbol.STYLE_SOLID,
              new Color([0,126,28]),
            3);
            break;
        case "point":
            symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.CROSS, 10,
              new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
              new Color([255,0,0]), 1),
              new Color([0,255,0,0.25]));
            break;
    }
    useSearch = false
    var graphic = new Graphic(geometry, symbol);
    mapClass.map.graphics.add(graphic);
    //定义空间查询对象，注意他的参数是整个地图服务，而不是单个图层
    var identifyTask = new IdentifyTask(`${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/MapServer`);
    //定义空间查询参数对象
    var params = new IdentifyParameters();
    //容差
    params.tolerance = 5;
    //是否返回几何信息
    params.returnGeometry = true;
    //空间查询的图层
    params.layerIds = [0,1,2,3,4,5];
    //空间查询的条件
    params.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
    params.width = mapClass.map.width;
    params.height = mapClass.map.height;
    //空间查询的几何对象
    params.geometry = geometry;
    params.mapExtent = mapClass.map.extent;
    //执行空间查询
    identifyTask.execute(params, (res) => {
      callbackSearchData(res)
      res.forEach((ele) => {
        let elegeometry = ele.feature.geometry
        let symbol, pic
        if (elegeometry.type === 'point') {
          if (ele.layerName == `${dbName}.postgres.ps_manhole`) {
            if (ele.feature.attributes.manhole_category == 1) {
              pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png')
            } else if (ele.feature.attributes.manhole_category == 2) {
              pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png')
            } else {
              pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png')
            }
          } else if (ele.layerName == `${dbName}.postgres.ps_comb`) {
            pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png')
          } else if (ele.layerName == `${dbName}.postgres.ps_outfall`) {
            pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
          }
          symbol= new PictureMarkerSymbol({
            url: pic,
            height: 12,
            width: 12
          });
        } else if (elegeometry.type === 'polyline') {
          symbol= new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([79,141,229]),
            3);
        }
        let graphic = new Graphic(elegeometry, symbol);
        mapClass.map.graphics.add(graphic)
      })
      //   selectedGraphic.setSymbol(symbol);
    });
  })
}

let deleteSingleLayer = (value) => {
  if (!selectedGraphic) {
    notification.success({ message: '系统提示', description: '请在地图上选择'})
    return false
  }
  if (value == 2) {
    // 删除检查井
    gloBalbaseMapLayer[1].applyEdits(null, null, [selectedGraphic], (res) => {
        notification.success({ message: '系统提示', description: '删除成功'})
        gloBalbaseMapLayer[1].refresh()
    });
  } else if (value == 1) {
    // 删除雨水口
    gloBalbaseMapLayer[2].applyEdits(null, null, [selectedGraphic], (res) => {
        notification.success({ message: '系统提示', description: '删除成功'})
        gloBalbaseMapLayer[2].refresh()
    });
  } else if (value == 0) {
    // 删除排水口
    gloBalbaseMapLayer[3].applyEdits(null, null, [selectedGraphic], (res) => {
        notification.success({ message: '系统提示', description: '删除成功'})
        gloBalbaseMapLayer[3].refresh()
    });
  } else if (value == 3)  {
    // 删除线
    gloBalbaseMapLayer[0].applyEdits(null, null, [selectedGraphic], (res) => {
      notification.success({ message: '系统提示', description: '删除成功'})
      gloBalbaseMapLayer[0].refresh()
      addArrowPoint()
  });
  }
}

let cancelEdit = () => {
  editToolbar.deactivate();
  editToolbar = null
}
let editLayer = (value, callBack) => {
  editValue = value
  console.log(editValue, '点编辑的时候')
  esriLoader.loadModules(['esri/toolbars/edit', 'dojo/_base/event'])
            .then(([Edit, event]) => {
              editToolbar = new Edit(mapClass.map)
              editToolbar.on("deactivate",(evt) => {
                if(evt.info.isModified){
                  evtGraphic = evt.graphic
                  // if (editToolbar) {
                  //     console.log(',,,')
                  // } else {
                    if (editValue == 0) {
                      gloBalbaseMapLayer[3].applyEdits(null, [evtGraphic], null);
                      gloBalbaseMapLayer[3].refresh()
                    } else if (editValue == 1) {
                      gloBalbaseMapLayer[2].applyEdits(null, [evtGraphic], null);
                      gloBalbaseMapLayer[2].refresh()
                    } else if (editValue == 2) {
                      gloBalbaseMapLayer[1].applyEdits(null, [evtGraphic], null);
                      gloBalbaseMapLayer[1].refresh()
                    } else if (editValue == 3) {
                      gloBalbaseMapLayer[0].applyEdits(null, [evtGraphic], null);
                      gloBalbaseMapLayer[0].refresh()
                      addArrowPoint()
                    }
                    notification.success({ message: '系统提示', description: '保存成功'})
                  // }
                }
              });
              if (value == 2) {
                gloBalbaseMapLayer[1].on("click", function(evt) {
                  if (editToolbar) {
                    editToolbar.activate(Edit.MOVE | Edit.SCALE, evt.graphic)
                  }
                });
              } else if (value == 1) {
                gloBalbaseMapLayer[2].on("click", function(evt) {
                  if (editToolbar) {
                    editToolbar.activate(Edit.MOVE | Edit.SCALE, evt.graphic)
                  }
                });
              } else if (value == 3) {
                gloBalbaseMapLayer[0].on("click", function(evt) {
                  if (editToolbar) {
                    editToolbar.activate(Edit.MOVE | Edit.SCALE | Edit.EDIT_VERTICES, evt.graphic)
                  }
                });
              } else {
                gloBalbaseMapLayer[3].on("click", function(evt) {
                  if (editToolbar) {
                    editToolbar.activate(Edit.MOVE | Edit.SCALE, evt.graphic)
                  }
                });
              }
            })
}

let hunjieShowMap = (item, typaName) => {
  removeGraphics()
  esriLoader.loadModules(['esri/tasks/query', 'esri/tasks/QueryTask', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/graphic', 'esri/symbols/PictureMarkerSymbol'])
            .then(([Query, QueryTask, SimpleLineSymbol, Color, Graphic, PictureMarkerSymbol]) => {
              let searchUrl = null
              if (typaName == 'ps_manhole') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
              } else if (typaName == 'ps_pipe') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
              } else if (typaName == 'ps_outfall') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
              } else if (typaName == 'ps_comb') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
              } else if (typaName == 'ps_quexian') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/gwdch/FeatureServer/0`
              }
                let queryTask = new QueryTask(searchUrl);
                let query = new Query();
                query.objectIds = [item.objectid];
                query.multipatchOption = "xyFootprint";
                query.outFields = ["*"];
                query.returnGeometry = true;
                queryTask.on("complete", (res) => {
                  let geometry = res.featureSet.features[0].geometry
                  let x = null
                  let y = null
                  // if (typaName == 'ps_pipe') {
                  //   x = res.featureSet.features[0].geometry.paths[0][0][0]
                  //   y = res.featureSet.features[0].geometry.paths[0][0][1]
                  // } else {
                  //   x = res.featureSet.features[0].geometry.x
                  //   y = res.featureSet.features[0].geometry.y
                  // }
                  res.featureSet.features[0].geometry.x = item.xcoor
                  res.featureSet.features[0].geometry.y = item.ycoor
                  setCenterAndZoom(item.xcoor,item.ycoor,0.01);

                  let pic = null
                  let symbol = null
                  // 检查井
                  if (typaName == 'ps_pipe') {
                    symbol = new SimpleLineSymbol(
                      SimpleLineSymbol.STYLE_SOLID,
                      new Color([79,141,229]),
                      6);
                  } else {
                    if (typaName == 'ps_manhole') {
                        if (item.manholeCategory == 1) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png')
                        } else if (item.manholeCategory == 2) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png')
                        } else {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png')
                        }
                      } else if (typaName == 'ps_outfall') {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
                      } else if (typaName == 'ps_comb') {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png')
                      } else if (typaName == 'ps_quexian') {
                        pic = require(`../assets/imgs/zhihuipaishui/map/缺陷图标/${item.defectCode}.png`)
                      }
                      symbol = new PictureMarkerSymbol(
                        {
                          url: pic,
                          height: 16,
                          width: 16
                        }
                      );
                  }
                  
                  let graphic = new Graphic(geometry, symbol);
                  mapClass.map.graphics.add(graphic)
                });
                queryTask.on("error", (err) => {
                  console.log(err, 'query')
                });
                queryTask.execute(query);
            })
}

let showInmap = (item, typaName) => {
  removeGraphics()
  esriLoader.loadModules(['esri/tasks/query', 'esri/tasks/QueryTask', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/graphic', 'esri/symbols/PictureMarkerSymbol'])
            .then(([Query, QueryTask, SimpleLineSymbol, Color, Graphic, PictureMarkerSymbol]) => {
              let searchUrl = null
              if (typaName == 'ps_manhole') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
              } else if (typaName == 'ps_pipe') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
              } else if (typaName == 'ps_outfall') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
              } else if (typaName == 'ps_comb') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
              } else if (typaName == 'ps_quexian') {
                searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/gwdch/FeatureServer/0`
              }
                let queryTask = new QueryTask(searchUrl);
                let query = new Query();
                query.objectIds = [item.objectid];
                query.multipatchOption = "xyFootprint";
                query.outFields = ["*"];
                query.returnGeometry = true;
                queryTask.on("complete", (res) => {
                  let geometry = res.featureSet.features[0].geometry
                  let x = null
                  let y = null
                  if (typaName == 'ps_pipe') {
                    x = res.featureSet.features[0].geometry.paths[0][0][0]
                    y = res.featureSet.features[0].geometry.paths[0][0][1]
                  } else {
                    x = res.featureSet.features[0].geometry.x
                    y = res.featureSet.features[0].geometry.y
                  }
                  console.log(res)
                  console.log(x, y)
                  setCenterAndZoom(x,y,0.01);

                  let pic = null
                  let symbol = null
                  // 检查井
                  if (typaName == 'ps_pipe') {
                    symbol = new SimpleLineSymbol(
                      SimpleLineSymbol.STYLE_SOLID,
                      new Color([79,141,229]),
                      6);
                  } else {
                    if (typaName == 'ps_manhole') {
                        if (item.manholeCategory == 1) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png')
                        } else if (item.manholeCategory == 2) {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png')
                        } else {
                          pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png')
                        }
                      } else if (typaName == 'ps_outfall') {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
                      } else if (typaName == 'ps_comb') {
                        pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png')
                      } else if (typaName == 'ps_quexian') {
                        pic = require(`../assets/imgs/zhihuipaishui/map/缺陷图标/${item.defectCode}.png`)
                      }
                      symbol = new PictureMarkerSymbol(
                        {
                          url: pic,
                          height: 16,
                          width: 16
                        }
                      );
                  }
                  
                  let graphic = new Graphic(geometry, symbol);
                  mapClass.map.graphics.add(graphic)
                });
                queryTask.on("error", (err) => {
                  console.log(err, 'query')
                });
                queryTask.execute(query);
            })
}

let needGraphic = null
let searchGraphicByObjectId = (objectid, searchType) => {
  esriLoader.loadModules(['esri/tasks/query', 'esri/tasks/QueryTask', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/graphic'])
  .then(([Query, QueryTask, SimpleLineSymbol, Color, Graphic]) => {
      let searchUrl = null
      if (searchType == 'ps_manhole') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
      } else if (searchType == 'ps_pipe') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
      } else if (searchType == 'ps_outfall') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
      } else if (searchType == 'ps_comb') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
      } else if (searchType == 'ps_riser') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/0`
      } else if (searchType == 'ps_septictank') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/1`
      }
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.where = `objectid = ${objectid}`;
      // query.objectIds = [objectid]; 
      query.multipatchOption = "xyFootprint";
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        needGraphic = res.featureSet.features[0]
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
  })
}

let jianchahunjieGraphic = null
let searchGraphicByObjectIdHunjie = (objectid, searchType) => {
  esriLoader.loadModules(['esri/tasks/query', 'esri/tasks/QueryTask', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/graphic'])
  .then(([Query, QueryTask, SimpleLineSymbol, Color, Graphic]) => {
      let searchUrl = null
      if (searchType == 'ps_manhole') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
      } else if (searchType == 'ps_pipe') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
      } else if (searchType == 'ps_outfall') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
      } else if (searchType == 'ps_comb') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
      } else if (searchType == 'ps_riser') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/0`
      } else if (searchType == 'ps_septictank') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/1`
      } else if (searchType == 'ps_hunjie') {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/gwdch/FeatureServer/1`
      }
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.where = `objectid = ${objectid}`;
      // query.objectIds = [objectid]; 
      query.multipatchOption = "xyFootprint";
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        jianchahunjieGraphic = res.featureSet.features[0]
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
  })
}


let toPositionByobjectid = (objectid, searchType) => {
  esriLoader.loadModules(['esri/tasks/query', 'esri/tasks/QueryTask', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/graphic', 'esri/symbols/PictureMarkerSymbol'])
  .then(([Query, QueryTask, SimpleLineSymbol, Color, Graphic, PictureMarkerSymbol]) => {
      let searchUrl = null
      if (searchType == 2) {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
      } else if (searchType == 1) {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
      } else if (searchType == 4) {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
      } else if (searchType == 3) {
        searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
      }
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.where = `objectid = ${objectid}`;
      query.multipatchOption = "xyFootprint";
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        let geometry = res.featureSet.features[0].geometry
        let x = null
        let y = null
        if (searchType == 1) {
          x = res.featureSet.features[0].geometry.paths[0][0][0]
          y = res.featureSet.features[0].geometry.paths[0][0][1]
        } else {
          x = res.featureSet.features[0].geometry.x
          y = res.featureSet.features[0].geometry.y
        }
        setCenterAndZoom(x,y,0.01);

        let pic = null
        let symbol = null
        // 检查井
        if (searchType == 1) {
          symbol = new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([79,141,229]),
            6);
        } else {
          if (searchType == 2) {
              if (res.featureSet.features[0].attributes.manhole_category == 1) {
                pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuijing.png')
              } else if (res.featureSet.features[0].attributes.manhole_category == 2) {
                pic = require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png')
              } else {
                pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliujing.png')
              }
            } else if (searchType == 4) {
              pic = require('../assets/imgs/zhihuipaishui/map/tubiao/heliupaishuikou.png')
            } else if (searchType == 3) {
              pic = require('../assets/imgs/zhihuipaishui/map/tubiao/yushuikou.png')
            }
            symbol = new PictureMarkerSymbol(
              {
                url: pic,
                height: 16,
                width: 16
              }
            );
        }
        
        let graphic = new Graphic(geometry, symbol);
        mapClass.map.graphics.add(graphic)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
  })
}

let removeGraphics = () => {
  mapClass.map.graphics.clear();  
}


let getPointAddress2 = (callback2) => {
  esriLoader.loadModules(['esri/toolbars/draw', 'esri/symbols/SimpleMarkerSymbol', 'esri/graphic', 'esri/symbols/TextSymbol', 'esri/Color', 'esri/symbols/Font'])
  .then(([Draw, SimpleMarkerSymbol, Graphic, TextSymbol, Color, Font]) => {
    toolbar = new Draw(mapClass.map, { showTooltips: false });
    // toolbar.on("draw-complete", (evt) => {
    //   if (useSearch) {
    //     searchData(evt)
    //   } else {
    //     addToMap(evt)
    //   }
    // });
    toolbar.activate(Draw.POINT);
    let show = true
    mapClass.map.on('mouse-move', (e) => {
      if (show) {
        mapClass.map.graphics.clear();
        let symbol = new TextSymbol(`${e.mapPoint.x},${e.mapPoint.y}`).setColor(
          new Color([255, 255, 255]))
        let graphic = new Graphic(e.mapPoint, symbol);
        mapClass.map.graphics.add(graphic);
      }
    })
    mapClass.map.on('mouse-out', (e) => {
      show = false
      mapClass.map.graphics.clear();
      toolbar.deactivate();
    })
    toolbar.on("draw-complete", (evt) => {
      let symbol = new SimpleMarkerSymbol()
      show = false
      mapClass.map.graphics.clear();
      let graphic = new Graphic(evt.geometry, symbol);
      mapClass.map.graphics.add(graphic);
      toolbar.deactivate();
      callback2(evt)
    })
  })
}
let getPointAddress1 = (callback1) => {
  esriLoader.loadModules(['esri/toolbars/draw', 'esri/symbols/SimpleMarkerSymbol', 'esri/graphic', 'esri/symbols/TextSymbol', 'esri/Color', 'esri/symbols/Font'])
    .then(([Draw, SimpleMarkerSymbol, Graphic, TextSymbol, Color, Font]) => {
      toolbar = new Draw(mapClass.map, { showTooltips: false });
      toolbar.activate(Draw.POINT);
      let show = true
      mapClass.map.on('mouse-move', (e) => {
        
        if (show) {
          mapClass.map.graphics.clear();
          let symbol = new TextSymbol(`${e.mapPoint.x},${e.mapPoint.y}`).setColor(
            new Color([255, 255, 255]))
          let graphic = new Graphic(e.mapPoint, symbol);
          mapClass.map.graphics.add(graphic);
        }
      })
      mapClass.map.on('mouse-out', (e) => {
        show = false
        mapClass.map.graphics.clear();
        toolbar.deactivate();
      })
      toolbar.on("draw-complete", (evt) => {
        let symbol = new SimpleMarkerSymbol()
        mapClass.map.graphics.clear();
        show = false
        let graphic = new Graphic(evt.geometry, symbol);
        mapClass.map.graphics.add(graphic);
        toolbar.deactivate();
        callback1(evt)
      })
    })
}

// 测量距离
let measureLine = (type, callback) => {
  esriLoader.loadModules(['esri/toolbars/draw', 'esri/geometry/Point', 'esri/tasks/LengthsParameters', 'esri/tasks/AreasAndLengthsParameters', 'esri/tasks/GeometryService', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/symbols/SimpleFillSymbol', 'esri/graphic'])
    .then(([Draw, Point, LengthsParameters, AreasAndLengthsParameters, GeometryService, SimpleLineSymbol, Color, SimpleFillSymbol, Graphic]) => {
      toolbar = new Draw(mapClass.map, { showTooltips: false });
      if (type == 'length') {
        toolbar.activate(Draw.POLYLINE);
      } else {
        toolbar.activate(Draw.POLYGON);
      }
      mapClass.map.on('mouse-out', (e) => {
        toolbar.deactivate();
      })
      toolbar.on("draw-complete", (evt) => {
        let gsvc = new GeometryService(`${DomainSwitchingUrl}/arcgis/rest/services/Utilities/Geometry/GeometryServer`);
        toolbar.deactivate();
        mapClass.map.setMapCursor("default");
        let geometry = evt.geometry;
        let showPt = null
        let symbol = null
        switch (geometry.type) {
            case "polyline":{
                let length = geometry.paths[0].length;
                showPt = new Point(geometry.paths[0][length-1],mapClass.map.spatialReference);
                let lengthParams = new LengthsParameters();
                lengthParams.lengthUnit = GeometryService.UNIT_KILOMETER;
                lengthParams.polylines = [geometry];
                gsvc.lengths(lengthParams);
                symbol = new SimpleLineSymbol(
                  SimpleLineSymbol.STYLE_SOLID,
                  new Color([0,126,28]),
                3);
                break;
            }
            case "polygon":{
                showPt = new Point(geometry.rings[0][0],mapClass.map.spatialReference);
                let areasAndLengthParams = new AreasAndLengthsParameters();
                areasAndLengthParams.lengthUnit = GeometryService.UNIT_KILOMETER;
                areasAndLengthParams.areaUnit = GeometryService.UNIT_SQUARE_KILOMETERS;
                gsvc.simplify([geometry],(simplifiedGeometries) => {
                    areasAndLengthParams.polygons = simplifiedGeometries;
                    gsvc.areasAndLengths(areasAndLengthParams);
                });
                symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                  new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
                  new Color([255,0,0]), 2),new Color([255,255,0,0.25]))
                break;
            }
        }
        gsvc.on("lengths-complete",(evtObj) =>{
            let result = evtObj.result;
            callback(result)
        });
        gsvc.on("areas-and-lengths-complete",(evtObj) =>{
            let result = evtObj.result;
            callback(result)
        });
        let graphic = new Graphic(geometry, symbol);
        mapClass.map.graphics.add(graphic);
      })
    })
}


// 打印地图
let printMap = () => {
  if (window.location.hostname == 'localhost') {
    console.log(mapClass.map._layers, mapClass.map._layers['layer0'].url)
  } else {
    let layerArr = mapClass.map._layers
    layerArr['layer0'].url = layerArr['layer0'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['layer0']._url.path = layerArr['layer0']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');

    layerArr['layer1'].url = layerArr['layer1'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['layer1']._url.path = layerArr['layer1']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');

    layerArr['ps_pipe'].url = layerArr['ps_pipe'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['ps_pipe']._url.path = layerArr['ps_pipe']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');

    layerArr['xiamen_road'].url = layerArr['xiamen_road'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['xiamen_road']._url.path = layerArr['xiamen_road']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');

    layerArr['ps_outfall'].url = layerArr['ps_outfall'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['ps_outfall']._url.path = layerArr['ps_outfall']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');

    layerArr['ps_comb'].url = layerArr['ps_comb'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['ps_comb']._url.path = layerArr['ps_comb']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');

    layerArr['ps_manhole'].url = layerArr['ps_manhole'].url.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    layerArr['ps_manhole']._url.path = layerArr['ps_manhole']._url.path.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    // let newmapstr = mapstr.replace('/arcgis/rest/services','https://www.yu-fan.cn:8086/arcgis/rest/services');
    mapClass.map._layers = layerArr
    console.log(mapClass.map, '..///houhou..')
  }
  setTimeout(() => {
    esriLoader.loadModules(['esri/tasks/PrintTask', 'esri/tasks/PrintTemplate', 'esri/tasks/PrintParameters', 'esri/config'])
    .then(([PrintTask, PrintTemplate, PrintParameters, esriConfig]) => {
      esriConfig.defaults.io.proxyUrl = "/arcgis";
      // esriConfig.defaults.io.alwaysUseProxy = false;
      //创建地图打印对象
      let printMap = new PrintTask(`${DomainSwitchingUrl}/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task`);
      //创建地图打印模版
      let template = new PrintTemplate();
      //创建地图的打印参数，参数里面包括：模版和地图
      let params = new PrintParameters();
      //输出图片的空间参考
      printMap.outSpatialReference = mapClass.map.SpatialReference
      //打印图片的各种参数
      template.exportOptions = {
        width: 850,
        height: 650,
        dpi: 96
      };
      //打印输出的格式
      template.format = "PDF";
      //输出地图的布局
      template.layout = "MAP_ONLY";
      // PrintTemplate
      //设置参数地图
      params.map = mapClass.map;
      //设置参数模版
      params.template = template;
      const hide = message.loading({ content: '正在打印...', duration: 0 });
      //运行结果
      printMap.execute(params, (result) =>{
        console.log(result)
        if (result != null) {
          hide()
          let url = result.url.replace('http://www.yu-fan.cn','https://www.yu-fan.cn:8086')
          //网页打开生成的地图
          window.open(url);
        }
      })
    })
  }, 500)
}
let stGPMdbserver = (roadid, idarr, mdbName, callBack) => {
  esriLoader.loadModules(['esri/tasks/Geoprocessor', 'esri/tasks/query', 'esri/tasks/QueryTask']).then(([Geoprocessor, Query, QueryTask]) => {
    let wherePwram = '1=1'
    if (roadid == '') {
      wherePwram = '1=1'
    } else {
      wherePwram = `roadid=${roadid}`
    }
    const p1 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    const p2 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    const p3 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    const p4 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    // if (idarr.length !== 0) {
      const hide = message.loading({ content: '正在导出...', duration: 0 });
      // Promise
      // .all([p1,p2,p3,p4])
      // .then(responses=>{
      // const [p1Arr,p2Arr,p3Arr,p4Arr]=responses;
      // let feaArr = []
      // idarr.forEach((ele) => {
      //   if (ele == 'ps_pipe') {
      //     feaArr.push(p1Arr)
      //   } else if (ele == 'ps_manhole') {
      //     feaArr.push(p2Arr)
      //   } else if (ele == 'ps_comb') {
      //     feaArr.push(p3Arr)
      //   } else if (ele == 'ps_outfall') {
      //     feaArr.push(p4Arr)
      //   }
      // })
      let buffer = new Geoprocessor(`${DomainSwitchingUrl}/arcgis/rest/services/exportmdb8/GPServer/exportmdb`);
      //构建GP服务参数
      let gpParams={};
      //GP服务的Input参数
      // gpParams.yudu_db1_postgres_ps_outfall= feaArr;
      gpParams.Expression = '1=1'
      gpParams.Expression__2_ = '1=1'
      gpParams.Expression__3_ = '1=1'
      gpParams.Expression__4_ = '1=1'
      gpParams.currentTime= `D:/shpdata/xiamendata/exportcg/mdb/${mdbName}`;
      //执行GP服务
      buffer.submitJob(gpParams, (results) => {
        console.log(results)
        hide()
        notification.success({ message: '系统提示', description: '导出成功'})
        callBack()
      }, statusCallback);
      // })
    // } else {
    //   notification.success({ message: '系统提示', description: '请选择成果要素'})
    // }
  })
}
let stGPCadserver = (roadid, idarr, dwgName, callback) => {
  let wherePwram = '1=1'
  if (roadid == '') {
    wherePwram = '1=1'
  } else {
    wherePwram = `roadid=${roadid}`
  }
  esriLoader.loadModules(['esri/tasks/Geoprocessor', 'esri/tasks/query', 'esri/tasks/QueryTask']).then(([Geoprocessor, Query, QueryTask]) => {
    const p1 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    const p2 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${manholeName}/FeatureServer/0`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    const p3 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/3`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    const p4 = new Promise((reslove,reject) => {
      let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/2`
      let queryTask = new QueryTask(searchUrl);
      let query = new Query();
      query.multipatchOption = "xyFootprint";
      query.where = wherePwram;
      query.outFields = ["*"];
      query.returnGeometry = true;
      queryTask.on("complete", (res) => {
        reslove(res.featureSet)
      });
      queryTask.on("error", (err) => {
        console.log(err, 'query')
      });
      queryTask.execute(query);
    })
    console.log(idarr)
    if (idarr.length !== 0) {
      const hide = message.loading({ content: '正在导出...', duration: 0 });
      Promise
      .all([p1,p2,p3,p4])
      .then(responses=>{
        const [p1Arr,p2Arr,p3Arr,p4Arr]=responses;
        let feaArr = []
        idarr.forEach((ele) => {
          if (ele == 'ps_pipe') {
            feaArr.push(p1Arr)
          } else if (ele == 'ps_manhole') {
            feaArr.push(p2Arr)
          } else if (ele == 'ps_comb') {
            feaArr.push(p3Arr)
          } else if (ele == 'ps_outfall') {
            feaArr.push(p4Arr)
          }
        })
        //定义GP服务对象
        let buffer = new Geoprocessor(`${DomainSwitchingUrl}/arcgis/rest/services/exportcad2/GPServer/exportcad`);
        //构建GP服务参数
        let gpParams={};
        //GP服务的Input参数
        gpParams.Input_Features= feaArr;
        gpParams.currentTime= `D:/shpdata/xiamendata/exportcg/dwg/${dwgName}`;
        //执行GP服务
        buffer.submitJob(gpParams, (results) => {
          console.log(results)
            hide()
            notification.success({ message: '系统提示', description: '导出成功'})
            callback()
        }, statusCallback);
      })
    } else {
      notification.success({ message: '系统提示', description: '请选择成果要素'})
    }
  })
}

// let showResultCad = (results) => {
//     console.log(results)
//     notification.success({ message: '系统提示', description: '导出成功'})
// }
// let showResultMdb = (results) => {
//   console.log(results)
//   notification.success({ message: '系统提示', description: '导出成功'})
// }
let statusCallback = (jobInfo) => {
  console.log(jobInfo)
}


// 咬合功能
let snappingManager = () => {
  esriLoader.loadModules([
    'esri/SnappingManager',
    'esri/sniff',
    'dojo/_base/event',
    'dojo/on',
    'dojo/dom',
    'dojo/keys',
    'dojo/domReady!']).then(([SnappingManager, has, event, on, dom, keys]) => {
      let snapM = mapClass.map.enableSnapping({
        snapKey: has("mac") ? keys.META : keys.CTRL
      });
      let layerInfos = [
        {layer: gloBalbaseMapLayer[0]},
        {layer: gloBalbaseMapLayer[1]},
        {layer: gloBalbaseMapLayer[2]},
        {layer: gloBalbaseMapLayer[3]}
      ];
      snapM.setLayerInfos(layerInfos);
  })
}

let gGraphicslayer = null
let jiantouFeature = null
let addArrowPoint = () => {
  if (gGraphicslayer) {
    gGraphicslayer.clear()
  }
  esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/graphic',
  'esri/symbols/PictureMarkerSymbol', 'esri/symbols/TextSymbol', 'esri/SpatialReference', 'esri/tasks/query', 'esri/tasks/QueryTask'])
  .then(([GraphicsLayer, Point, Graphic, PictureMarkerSymbol, TextSymbol, SpatialReference, Query, QueryTask]) => {
    let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
    let queryTask = new QueryTask(searchUrl);
    let query = new Query();
    query.multipatchOption = "xyFootprint";
    query.where = '1=1';
    query.outFields = ["*"];
    query.returnGeometry = true;
    queryTask.on("complete", (res) => {
      let features = res.featureSet.features
      gGraphicslayer = new GraphicsLayer('arrowlayer')
      mapClass.map.graphics.clear()
      features.forEach((item) => {
        if (item.geometry) {
        
          if (item.geometry.paths[0]) {
            let sx
            let sy
            let ex
            let ey
            if (item.attributes.flowdirect == 0) {
              sx = item.geometry.paths[0][0][0]
              sy = item.geometry.paths[0][0][1]
              ex = item.geometry.paths[0][1][0]
              ey = item.geometry.paths[0][1][1]
            } else {
              sx = item.geometry.paths[0][1][0]
              sy = item.geometry.paths[0][1][1]
              ex = item.geometry.paths[0][0][0]
              ey = item.geometry.paths[0][0][1]
            }
            let pipe_categ = item.attributes.pipe_categ
            if (Number(pipe_categ) == 1 || Number(pipe_categ) == 2 || Number(pipe_categ) == 3) {
              let pt = new Point({"x": (sx + ex)/2, "y": (sy + ey)/2, "spatialReference": {"wkid": zuobiaoxi }})
              let marker = new Graphic(pt)
              let picSymbol = new PictureMarkerSymbol(require(`../assets/imgs/zhihuipaishui/map/tubiao/jiantou${pipe_categ}.png`), 12, 12)
              let angel = getAngleArrow(sx,sy,ex,ey)
              picSymbol.setAngle(angel)
              marker.setSymbol(picSymbol)
              gGraphicslayer.add(marker)
            } else {
            }
          }
        }
      })
      
      console.log(gGraphicslayer)
      mapClass.map.addLayer(gGraphicslayer, 10)
    });
    queryTask.on("error", (err) => {
      console.log(err, 'query')
    });
    queryTask.execute(query);
  })
}
// let addArrowPoint = () => {
//   esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/graphic',
//   'esri/symbols/PictureMarkerSymbol', 'esri/symbols/TextSymbol', 'esri/SpatialReference', 'esri/tasks/query', 'esri/tasks/QueryTask', 'esri/layers/FeatureLayer', 'esri/tasks/FeatureSet'])
//   .then(([GraphicsLayer, Point, Graphic, PictureMarkerSymbol, TextSymbol, SpatialReference, Query, QueryTask, FeatureLayer, FeatureSet]) => {
//     let searchUrl = `${DomainSwitchingUrl}/arcgis/rest/services/${pipeName}/FeatureServer/5`
//     let queryTask = new QueryTask(searchUrl);
//     let query = new Query();
//     query.multipatchOption = "xyFootprint";
//     query.where = '1=1';
//     query.outFields = ["*"];
//     query.returnGeometry = true;
//     queryTask.on("complete", (res) => {
//       let features = res.featureSet.features.slice(2,4)
//       // gGraphicslayer = new GraphicsLayer()
//       mapClass.map.graphics.clear()
//       let newfeatures= [];
//       let newfeatures1= [];
//       features.forEach((item, index) => {
//         if (item.geometry.paths[0]) {
//           let sx
//           let sy
//           let ex
//           let ey
//           if (item.attributes.flowdirect == 0) {
//             sx = item.geometry.paths[0][0][0]
//             sy = item.geometry.paths[0][0][1]
//             ex = item.geometry.paths[0][1][0]
//             ey = item.geometry.paths[0][1][1]
//           } else {
//             sx = item.geometry.paths[0][1][0]
//             sy = item.geometry.paths[0][1][1]
//             ex = item.geometry.paths[0][0][0]
//             ey = item.geometry.paths[0][0][1]
//           }
//           let pipe_categ = item.attributes.pipe_categ
//           let pt = new Point({"x": (sx + ex)/2, "y": (sy + ey)/2, "spatialReference": {"wkid": zuobiaoxi }})
//           let picSymbol = new PictureMarkerSymbol({url: require(`../assets/imgs/zhihuipaishui/map/tubiao/jiantou${pipe_categ}.png`), height: 12, width:12})
//           // let picSymbol = new PictureMarkerSymbol({
//           //   url: require('../assets/imgs/zhihuipaishui/map/tubiao/wushuijing.png'),
//           //   height:8,
//           //   width:8
//           // }
//           let angel = getAngleArrow(sx,sy,ex,ey)
//           picSymbol.setAngle(angel)
          
          
//           let marker = new Graphic(pt, null, { "OBJECTID": index, "LON": (sx + ex)/2, "LAT": (sy + ey)/2 });
//           // let marker = new Graphic(pt)
//           // marker.setSymbol(picSymbol)
//           // marker.setAttributes({ "OBJECTID": index, "LON": (sx + ex)/2, "LAT": (sy + ey)/2 })
//           newfeatures.push(marker);
//           newfeatures1.push(marker);
//           // gGraphicslayer.add(marker)
//         }
//       })
//       console.log(newfeatures, 'newfeaturesnewfeaturesnewfeatures////')
//         let featureSetObj = new FeatureSet(
//           {
//             displayFieldName: "",
//             geometryType: "esriGeometryPoint",
//             fieldAliases: {
//               OBJECTID: "OBJECTID",
//               LON: "LON",
//               LAT: "LAT"
//             },
//             fields: [
//               { name: "OBJECTID", type: "esriFieldTypeOID", alias: "OBJECTID" },
//               { name: "LON", type: "esriFieldTypeDouble", alias: "LON" },
//               { name: "LAT", type: "esriFieldTypeDouble", alias: "LAT" }
//             ],
//             spatialReference: {
//               "wkid": zuobiaoxi, 
//               "latestWkid": zuobiaoxi
//             },
//             features: []
//           }
//         );
//         featureSetObj.features = newfeatures
//         console.log(featureSetObj, 'featureSetObjfeatureSetObjfeatureSetObj')
//         let layerDefinition = {
//           "geometryType": "esriGeometryPoint",
//           "fields": [
//             { name: "OBJECTID", type: "esriFieldTypeOID", alias: "OBJECTID" },
//             { name: "LON", type: "esriFieldTypeDouble", alias: "LON" },
//             { name: "LAT", type: "esriFieldTypeDouble", alias: "LAT" }
//           ]
//         };

//         let featureCollection = {
//           layerDefinition: layerDefinition,
//           featureSet: featureSetObj
//         };
//         console.log(newfeatures, 'qianqianqianqianqianqian')
//         let jiantouFeature = new FeatureLayer(featureCollection, {
//           showLabels: false
//         });
//         console.log(newfeatures1, 'houhouhouhouhouhouhouhou')
//         console.log(jiantouFeature, 'jiantouFeaturejiantouFeaturejiantouFeature')
//         mapClass.map.addLayer(jiantouFeature);
//       // console.log(jiantouFeature, 'jiantouFeaturejiantouFeaturejiantouFeaturejiantouFeature')
//       // mapClass.map.addLayer(gGraphicslayer, 10)
//     });
//     queryTask.on("error", (err) => {
//       console.log(err, 'query')
//     });
//     queryTask.execute(query);
//   })
// }

let getAngleArrow = (sx, sy, ex, ey) => {
  let x = Math.abs(sx - ex);
  let y = Math.abs(sy - ey);
  let z = Math.sqrt(x * x + y * y);
  let angle = Math.asin(y / z) / Math.PI * 180;
//根据终起在终点的西南,西北,东南,东北方向的这四种可能性设置箭头最终的旋转角度
  if (sx <= ex) {
      if (sy <= ey) {
          return -angle;
      } else {
          return   angle;
      }
  } else {
      if (sy <= ey) {
          return   180 + angle;
      } else {
          return   180 - angle;
      }
  }
}
/**
 * 添加点图层
 * @param {string} layername 图层名
 * @param {[{}]} geoObj 构成图层的几何集合 {name: '', deviceID: '', longitude:'',latitude:''}
 * @param {MapPointStyle} style 点样式
 * @param {Boolean} isLabel 是否标注
 */
let addPointsLayer = function (layername, type, geoObj, style, isLabel, extension, isClickable) {
  if (mapClass.map === undefined || geoObj == null) return
  console.log(type)
  if (geoObj.length > 0) {
    // showWeb 放出来
    // let markerList = [] // isJibao为true时不放出来为false时放出来
    switch (mapParams.mapType) {
      case MapType.Esri:
        esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Point', 'esri/graphic',
          'esri/symbols/PictureMarkerSymbol', 'esri/symbols/TextSymbol', 'esri/SpatialReference'])
          .then(([GraphicsLayer, Point, Graphic, PictureMarkerSymbol, TextSymbol, SpatialReference]) => {
            let glayer = new GraphicsLayer()
            let statesArr = []
            for (let i = 0, len = geoObj.length; i < len; i++) {
              if (geoObj[i].longitude == null || geoObj[i].latitude == null) continue
              if (geoObj[i].longitude === 0 || geoObj[i].latitude === 0) continue
              let xCoor = geoObj[i].longitude
              let yCoor = geoObj[i].latitude
              let spatialRef = new SpatialReference({ wkid: 4326 })
              let spatialRefName
              if (mapParams.spatialReference) {
                spatialRefName = mapParams.spatialReference.name
              }
              switch (spatialRefName) {
                case CoorSystem.sh_54: spatialRef = new SpatialReference(mapParams.spatialReference.content)
                  break
              }
              let pt = new Point(xCoor, yCoor, spatialRef)
              let marker = new Graphic(pt)
              geoObj[i].type = type
              marker.setAttributes(geoObj[i])

              let picSymbol
              // statesArr.push(geoObj[i].state)
              // console.log(statesArr, 'statesArr')
              if (geoObj[i].state !== undefined) {
                let status = ''
                switch (geoObj[i].state) {
                  case 0: status = 'offline'; break
                  case 1: status = 'online'; break
                  case 2: status = 'broken'; break
                  case 3: status = 'offline'; break
                }
                // if (type === 'groundLock') {
                //   picSymbol = new PictureMarkerSymbol(require('../assets/images/maps/' + style.baseUrl + '/' + 'offline/' + 'groundlock' + extension), style.width, style.height)
                // } else {
                picSymbol = new PictureMarkerSymbol(require('../assets/imgs/maps/' + style.baseUrl + '/' + status + '/' + type + extension), style.width, style.height)
                // }
              } else {
                picSymbol = new PictureMarkerSymbol(require('../assets/imgs/maps/' + style.baseUrl + '/' + type + extension), style.width, style.height)
              }
              marker.setSymbol(picSymbol)
              glayer.add(marker)
            }
            mapClass.map.addLayer(glayer)
            // if (isClickable) {
            glayer.on('click', function (e) {
              if (window.mapPointClicked !== undefined && window.mapPointClicked !== null) { window.mapPointClicked(e.graphic.attributes) }
            })
            glayer.on('mouse-over', function (e) {
              mapClass.map.setMapCursor('pointer')
            })
            glayer.on('mouse-out', function (e) {
              mapClass.map.setMapCursor('default')
            })
            // }
            mapClass.layers.push(new MapOverLayer(layername, glayer, true))
          })
          .catch(err => {
            console.error(err)
          })
        break
      case MapType.Gaode:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          if (geoObj[i].longitude == null || geoObj[i].latitude == null) continue
          if (geoObj[i].longitude === 0 || geoObj[i].latitude === 0) continue

          let pt = wgs84ToGaode([[geoObj[i].longitude, geoObj[i].latitude]])
          let content
          if (geoObj[i].state !== undefined) {
            content = '<div class="' + ' marker-' + type + '-' + geoObj[i].state + '-' + style.baseUrl + '"></div>'
          } else {
            content = '<div class="marker-' + type + '-' + style.baseUrl + '"></div>'
          }
          geoObj[i].type = type
          let marker = new window.AMap.Marker({
            map: mapClass.map,
            position: [pt[0][0], pt[0][1]],
            extData: geoObj[i],
            content: content,
            offset: new window.AMap.Pixel(style.xOffset, style.yOffset)
          })

          // marker.setMap(mapClass.map)
          markerList.push(marker)
          if (isClickable) {
            marker.on('click', function (e) {
              if (window.mapPointClicked !== undefined && window.mapPointClicked !== null) { window.mapPointClicked(e.target.getExtData()) }
            })
          }
          if (mapParams.isShowTextAtMaxZoom && isLabel) {
            let tLayer = getLyrByName(layername + '_label')
            if (tLayer === undefined) {
              tLayer = []
              mapClass.layers.push(new MapOverLayer(layername + '_label', tLayer, true))
            }
            let text = new window.AMap.Text({
              // draggable: true,
              text: geoObj[i].name,
              textAlign: 'center',
              verticalAlign: 'middle',
              style: {
                'backgroundColor': '#091e38',
                'padding': '5px 10px',
                'color': 'white'
              },
              offset: new window.AMap.Pixel(20, 30),
              position: [pt[0][0], pt[0][1]]
            })
            text.setMap(null)
            tLayer.push(text)
          }
        }
        mapClass.layers.push(new MapOverLayer(layername, markerList, true))
        break
      case MapType.GA:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          if (geoObj[i].longitude == null || geoObj[i].latitude == null) continue
          if (geoObj[i].longitude === 0 || geoObj[i].latitude === 0) continue

          let pt = wgs84ToGaode([[geoObj[i].longitude, geoObj[i].latitude]])
          let opts = new window.IMAP.MarkerOptions()
          opts.anchor = window.IMAP.Constants.BOTTOM_CENTER

          if (geoObj[i].state !== undefined) {
            let status = ''
            switch (geoObj[i].state) {
              case 0: status = 'offline'; break
              case 1: status = 'online'; break
              case 2: status = 'broken'; break
            }
            opts.icon = new window.IMAP.Icon(require('../assets/imgs/maps/' + style.baseUrl + '/' + status + '/' + type + extension), { 'size': new window.IMAP.Size(style.width, style.height) })
          } else {
            opts.icon = new window.IMAP.Icon(require('../assets/imgs/maps/' + style.baseUrl + '/' + type + extension), { 'size': new window.IMAP.Size(style.width, style.height) })
          }
          // if (layername.trim() === 'parking') {
          //   opts.icon = new window.IMAP.Icon(require(style.baseUrl + layername.trim() + '.png'), style.width, style.height)
          // }
          opts.editabled = false
          opts.visible = true
          let marker = new window.IMAP.Marker(new window.IMAP.LngLat(pt[0][0], pt[0][1]), opts)
          geoObj[i].type = type
          marker.D = geoObj[i]
          mapClass.map.getOverlayLayer().addOverlay(marker, true)
          markerList.push(marker)
          if (isClickable) {
            marker.addEventListener(window.IMAP.Constants.CLICK, function (evt) {
              if (window.mapPointClicked !== undefined && window.mapPointClicked !== null) { window.mapPointClicked(evt.target.D) }
            })
          }

          if (mapParams.isShowTextAtMaxZoom && isLabel) {
            let tLayer = getLyrByName(layername + '_label')
            if (tLayer === undefined) {
              tLayer = []
              mapClass.layers.push(new MapOverLayer(layername + '_label', tLayer, true))
            }
            let text = new window.IMAP.Label('', {
              type: window.IMAP.Constants.OVERLAY_LABEL_HTML,
              position: new window.IMAP.LngLat(pt[0][0], pt[0][1]),
              offset: new window.IMAP.Pixel(10, 20),
              anchor: window.IMAP.Constants.BOTTOM_CENTER
            })
            let content = '<div class="textContainer">' + geoObj[i].name + '</div>'
            text.setContent(content)
            tLayer.push(text)
          }
        }
        mapClass.layers.push(new MapOverLayer(layername, markerList, true))
        break
      case MapType.Tianditu:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          if (geoObj[i].longitude == null || geoObj[i].latitude == null) continue
          if (geoObj[i].longitude === 0 || geoObj[i].latitude === 0) continue

          let customIconDiv
          if (geoObj[i].state !== undefined) {
            customIconDiv = window.L.divIcon({
              className: 'marker-' + type + '-' + geoObj[i].state + '-' + style.baseUrl,
              iconSize: [style.width, style.height]
            })
          } else {
            customIconDiv = window.L.divIcon({
              className: 'marker-' + type + '-' + style.baseUrl,
              iconSize: [style.width, style.height]
            })
          }
          geoObj[i].type = type
          let marker = window.L.marker(
            [geoObj[i].latitude, geoObj[i].longitude],
            {
              icon: customIconDiv,
              alt: geoObj[i]
            })

          markerList.push(marker)

          if (isClickable) {
            marker.on('click', function (e) {
              if (window.mapPointClicked !== undefined && window.mapPointClicked !== null) { window.mapPointClicked(e.target.options.alt) }
            })
          }
          if (mapParams.isShowTextAtMaxZoom && isLabel) {
            let tLayer = getLyrByName(layername + '_label')
            if (tLayer === undefined) {
              tLayer = window.L.layerGroup()
              mapClass.layers.push(new MapOverLayer(layername + '_label', tLayer, true))
            }

            let textDiv = window.L.divIcon({
              html: geoObj[i].name,
              className: 'textContainer',
              iconAnchor: [35, -23]
            })
            let text = window.L.marker(
              [geoObj[i].latitude, geoObj[i].longitude],
              {
                icon: textDiv
              })

            tLayer.addLayer(text)
          }
        }
        let groupLayer = window.L.layerGroup(markerList).addTo(mapClass.map)
        mapClass.layers.push(new MapOverLayer(layername, groupLayer, true))
        break
    }
  }
}
/**
 * 添加线图层
 * @param {string} layername 图层名
 * @param {[]} geoObj 构成图层的几何集合 {name: '', deviceID: '', path: [[],[]]}
 * @param {MapLineStyle} style 线样式
 * @param {Boolean} isLabel 是否标注
 */
let addLinesLayer = function (layername, geoObj, style, isLabel) {
  if (mapClass.map === undefined || geoObj == null) return
  if (geoObj.length > 0) {
    let markerlist = []
    switch (mapParams.mapType) {
      case MapType.Esri:
        esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Polyline', 'esri/graphic',
          'esri/symbols/SimpleLineSymbol', 'esri/Color'])
          .then(([GraphicsLayer, Polyline, Graphic, SimpleLineSymbol, Color]) => {
            let glayer = new GraphicsLayer()
            for (let i = 0, len = geoObj.length; i < len; i++) {
              let paths = geoObj[i].path
              let polyline = new Polyline(paths)
              let marker = new Graphic(polyline)
              let lineStyle = style.lineType === MapLineType.Dashed ? SimpleLineSymbol.STYLE_DASH : SimpleLineSymbol.STYLE_SOLID

              let fcolor = new Color(style.color)
              if (style.opacity !== 1) {
                fcolor.a = style.opacity
              }

              let lSymbol = new SimpleLineSymbol(lineStyle, fcolor, style.width)
              // var lSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([245, 113, 6, 0.85]), 8)
              marker.setSymbol(lSymbol)
              glayer.add(marker)
            }
            mapClass.map.addLayer(glayer)
            mapClass.layers.push(new MapOverLayer(layername, glayer, true))
          })
        break
      case MapType.Gaode:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          let pts = wgs84ToGaode(geoObj[i].path)
          let centerX = (pts[0][0] + pts[pts.length - 1][0]) / 2
          let centerY = (pts[0][1] + pts[pts.length - 1][1]) / 2

          let polyline = new window.AMap.Polyline({
            path: pts
          })

          polyline.setOptions({
            strokeWeight: style.width,
            strokeOpacity: style.opacity,
            strokeColor: style.color,
            // lineCap: 'round',
            strokeStyle: style.lineType.toLowerCase()
          })
          polyline.setMap(mapClass.map)
          markerlist.push(polyline)

          if (mapParams.isShowTextAtMaxZoom && isLabel) {
            let tLayer = getLyrByName(layername + '_label')
            if (tLayer === undefined) {
              tLayer = []
              mapClass.layers.push(new MapOverLayer(layername + '_label', tLayer, true))
            }

            let text = new window.AMap.Text({
              text: geoObj[i].name,
              textAlign: 'center',
              verticalAlign: 'middle',
              style: {
                'backgroundColor': '#091e38',
                'padding': '5px 10px',
                'color': 'white'
              },
              offset: new window.AMap.Pixel(20, 30),
              position: [centerX, centerY]
            })

            text.setMap(null)
            tLayer.push(text)
          }
        }
        mapClass.layers.push(new MapOverLayer(layername, markerlist, true))
        break
      case MapType.GA:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          let pts = wgs84ToGaode(geoObj[i].path)
          let path = []
          for (let i = 0; i < pts.length; i++) {
            path.push(new window.IMAP.LngLat(pts[i][0], pts[i][1]))
          }
          let centerX = (pts[0][0] + pts[pts.length - 1][0]) / 2
          let centerY = (pts[0][1] + pts[pts.length - 1][1]) / 2

          let polyline = new window.IMAP.Polyline(path, {
            strokeWeight: style.width,
            strokeOpacity: style.opacity,
            strokeColor: style.color,
            // lineCap: 'round',
            strokeStyle: style.lineType.toLowerCase() === 'dashed' ? window.IMAP.Constants.OVERLAY_LINE_DASHED : window.IMAP.Constants.OVERLAY_LINE_SOLID
          })

          mapClass.map.getOverlayLayer().addOverlay(polyline, true)
          markerlist.push(polyline)

          if (mapParams.isShowTextAtMaxZoom && isLabel) {
            let tLayer = getLyrByName(layername + '_label')
            if (tLayer === undefined) {
              tLayer = []
              mapClass.layers.push(new MapOverLayer(layername + '_label', tLayer, true))
            }

            let text = new window.IMAP.Label('', {
              type: window.IMAP.Constants.OVERLAY_LABEL_HTML,
              position: new window.IMAP.LngLat(centerX, centerY),
              offset: new window.IMAP.Pixel(10, 20),
              anchor: window.IMAP.Constants.BOTTOM_CENTER
            })
            let content = '<div class="textContainer">' + geoObj[i].name + '</div>'
            text.setContent(content)
            tLayer.push(text)
          }
        }
        mapClass.layers.push(new MapOverLayer(layername, markerlist, true))
        break
      case MapType.Tianditu:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          let latlngs = geoObj[i].path.map(function (val) {
            return [val[1], val[0]]
          })
          let polyline = window.L.polyline(latlngs,
            {
              color: style.color,
              dashArray: style.lineType.toLowerCase() === 'dashed' ? [20, 20] : null,
              weight: style.width,
              opacity: style.opacity
            })

          markerlist.push(polyline)

          if (mapParams.isShowTextAtMaxZoom && isLabel) {
            let tLayer = getLyrByName(layername + '_label')
            if (tLayer === undefined) {
              tLayer = window.L.layerGroup()
              mapClass.layers.push(new MapOverLayer(layername + '_label', tLayer, true))
            }
            let pathLen = geoObj[i].path.length

            let centerY = (geoObj[i].path[0][0] + geoObj[i].path[pathLen - 1][0]) / 2
            let centerX = (geoObj[i].path[0][1] + geoObj[i].path[pathLen - 1][1]) / 2

            let textDiv = window.L.divIcon({
              html: geoObj[i].name,
              className: 'textContainer',
              iconAnchor: [35, -10]
            })
            let text = window.L.marker(
              [centerY, centerX],
              {
                icon: textDiv
              })

            tLayer.addLayer(text)
          }
        }
        let groupLayer = window.L.layerGroup(markerlist).addTo(mapClass.map)
        mapClass.layers.push(new MapOverLayer(layername, groupLayer, true))
        break
    }
  }
}
/**
 * 添加面图层
 * @param {string} layername 图层名
 * @param {[]} geoObj 构成图层的几何集合
 * @param {MapPolygonStyle} style 面样式
 */
//* ******************************clickVillageWindow***************************** */
let selectlayer
let strokeColor0
let strokeWeight0
window.clickVillageWindowShow = function (item) {
  switch (mapParams.mapType) {
    case MapType.Esri:
      esriLoader.loadModules(['esri/tasks/query', 'esri/geometry/Point', 'esri/tasks/QueryTask', 'esri/symbols/SimpleLineSymbol', 'esri/symbols/SimpleFillSymbol', 'esri/renderers/UniqueValueRenderer', 'esri/layers/FeatureLayer', 'esri/Color']).then(([Query, Point, QueryTask, SimpleLineSymbol, SimpleFillSymbol, UniqueValueRenderer, FeatureLayer, Color]) => {
        // let queryTask = new QueryTask(featureUrl)
        let query = new Query()
        // 查询条件，类似于sql语句的where子句
        query.where = "name = '" + item.villageName + "'"
        // query.where = "objectid=206";
        // 返回的字段信息：*代表返回全部字段
        query.outFields = ['*']
        // 是否返回几何形状
        query.returnGeometry = true
        // 执行属性查询
        villagelayer.queryFeatures(query, function (results) {
          if (results.features.length) {
            let features = results.features
            // map.setExtent(features[0].geometry.getExtent());
            setCenterAndZoom(features[0].geometry.getCentroid().x - 2, features[0].geometry.getCentroid().y, 8)
            // mapClass.map.setExtent(features[0].extent);
            let villagecolor = new Color([255, 255, 0])
            let villageline = new SimpleLineSymbol('solid', villagecolor, 4)
            let villagesymbol = new SimpleFillSymbol('solid', villageline, new Color([49, 255, 255, 0.4]))
            selectlayer.clear()
            console.log('-------------11111111-------------: ', villagelayer)

            villagelayer.setSelectionSymbol(villagesymbol)
            villagelayer.selectFeatures(query, FeatureLayer.SELECTION_NEW)
            console.log('-------------22222222-------------: ', villagelayer)
          } else {
            console.log('没有搜索到此小区')
          }
        })
      })
      break
    case MapType.Gaode:
      selectlayer.setOptions({
        strokeColor: strokeColor0,
        strokeWeight: strokeWeight0
      })
      let overlaysList = mapClass.map.getAllOverlays('polygon')
      for (let i = 0, len = overlaysList.length; i < len; i++) {
        if (overlaysList[i].getExtData().spaceId === item.villageID) {
          strokeColor0 = overlaysList[i].Ge.strokeColor
          strokeWeight0 = overlaysList[i].Ge.strokeWeight
          selectlayer = new window.AMap.OverlayGroup()
          selectlayer.addOverlay(overlaysList[i])
          selectlayer.setOptions({
            strokeColor: 'green',
            strokeWeight: 20
          })
        }
      }
      break
  }
}
let addPolygonLayer = function (layername, geoObj, style) {
  if (mapClass.map === undefined || geoObj == null) return
  if (geoObj.length > 0) {
    let markerlist = []
    switch (mapParams.mapType) {
      case MapType.Esri:
        esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/geometry/Polygon', 'esri/graphic',
          'esri/symbols/SimpleFillSymbol', 'esri/symbols/SimpleLineSymbol', 'esri/Color'])
          .then(([GraphicsLayer, Polygon, Graphic, SimpleFillSymbol, SimpleLineSymbol, Color]) => {
            let glayer = new GraphicsLayer()
            for (let i = 0, len = geoObj.length; i < len; i++) {
              let polygon = new Polygon(geoObj[i])
              let marker = new Graphic(polygon)

              let fillStyle = SimpleFillSymbol.STYLE_NULL
              let lineStyle = SimpleLineSymbol.STYLE_NULL
              let fcolor = new Color([255, 255, 255, 0])
              let outlinecolor = new Color([255, 255, 255, 0])
              let strokeWeight = 0

              if (style.strokeType === MapLineType.Solid) {
                lineStyle = SimpleLineSymbol.STYLE_SOLID
              } else if (style.strokeType === MapLineType.Dashed) {
                lineStyle = SimpleLineSymbol.STYLE_DASH
              }

              if (style.fillColor != null) {
                fcolor = new Color(style.fillColor)
                fillStyle = SimpleFillSymbol.STYLE_SOLID
              }
              if (style.fillOpacity !== 1) {
                fcolor.a = style.fillOpacity
              }
              if (style.strokeColor != null) {
                outlinecolor = new Color(style.strokeColor)
              }
              if (style.strokeOpacity !== 1) {
                outlinecolor.a = style.strokeOpacity
              }
              if (style.strokeWeight !== 0) {
                strokeWeight = style.strokeWeight
              }

              let fSymbol = new SimpleFillSymbol(fillStyle,
                new SimpleLineSymbol(lineStyle, outlinecolor, strokeWeight), fcolor)

              marker.setSymbol(fSymbol)
              glayer.add(marker)
            }

            mapClass.map.addLayer(glayer, 0)
            mapClass.layers.push(new MapOverLayer(layername, glayer, true))
          })
        break
      case MapType.Gaode:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          for (let j = 0, lens = geoObj[i].length; j < lens; j++) {
            let pts = wgs84ToGaode(geoObj[i][j])
            let polygon = new window.AMap.Polygon({
              path: pts
            })

            if (style.fillColor != null) {
              polygon.setOptions({
                fillColor: style.fillColor
              })
            }
            if (style.fillOpacity !== 1) {
              polygon.setOptions({
                fillOpacity: style.fillOpacity
              })
            }
            if (style.strokeColor != null) {
              polygon.setOptions({
                strokeColor: style.strokeColor
              })
            }
            if (style.strokeOpacity !== 1) {
              polygon.setOptions({
                strokeOpacity: style.strokeOpacity
              })
            }
            if (style.strokeWeight !== 0) {
              polygon.setOptions({
                strokeWeight: style.strokeWeight
              })
            }
            if (style.strokeType === MapLineType.Dashed) {
              polygon.setOptions({
                strokeStyle: 'dashed',
                strokeDasharray: [10, 5]
              })
            }
            polygon.setMap(mapClass.map)
            markerlist.push(polygon)
            polygon.on('click', function (e) {
              // alert(e.target.getExtData().villageID)
              // window.clickVillageWindow(e.target.getExtData().villageID)
              strokeColor0 = e.target.Ge.strokeColor
              strokeWeight0 = e.target.Ge.strokeWeight
              let villageInfo = e.target.getExtData()
              let param = {
                villageName: villageInfo.spaceName,
                villageID: villageInfo.spaceId,
                level: villageInfo.spaceType
              }
              // window.clickVillageWindow({ 'villageID': e.target.getExtData() })
              let routerArr = window.location.hash.split('/')
              let routerInfo = routerArr[routerArr.length - 1]
              if (routerInfo === 'allState') {
                window.clickVillageWindowShow(param)
                window.clickVillageWindow(param)
              }
            })
          }
        }
        mapClass.layers.push(new MapOverLayer(layername, markerlist, true))
        break
      case MapType.GA:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          for (let j = 0, lens = geoObj[i].length; j < lens; j++) {
            let pts = wgs84ToGaode(geoObj[i][j])
            let path = []
            for (let i = 0; i < pts.length; i++) {
              let x = pts[i][0]
              let y = pts[i][1]
              path.push(new window.IMAP.LngLat(x, y))
            }
            let polygon = new window.IMAP.Polygon(path, {
              fillColor: style.fillColor,
              fillOpacity: style.fillOpacity,
              strokeColor: style.strokeColor,
              strokeOpacity: style.strokeOpacity,
              strokeWeight: style.strokeWeight,
              strokeStyle: style.strokeType === MapLineType.Dashed ? window.IMAP.Constants.OVERLAY_LINE_DASHED : window.IMAP.Constants.OVERLAY_LINE_SOLID
            })

            mapClass.map.getOverlayLayer().addOverlay(polygon, true)
            markerlist.push(polygon)
          }
        }
        mapClass.layers.push(new MapOverLayer(layername, markerlist, true))
        break
      case MapType.Tianditu:
        for (let i = 0, len = geoObj.length; i < len; i++) {
          for (let j = 0, lens = geoObj[i].length; j < lens; j++) {
            let latlngs = geoObj[i][j].map(function (val) {
              return [val[1], val[0]]
            })
            let polygon = window.L.polygon(latlngs, {
              color: style.strokeColor,
              fillColor: style.fillColor,
              fillOpacity: style.fillOpacity,
              weight: style.strokeWeight
            })

            markerlist.push(polygon)
          }
        }
        let groupLayer = window.L.layerGroup(markerlist).addTo(mapClass.map)
        mapClass.layers.push(new MapOverLayer(layername, groupLayer, true))
        break
    }
  }
}
/**
 * 清除点/线/面图层
 * @param {string} layername 图层名layername=undefined则清空所有数据
 */
let clearDataLayer = function (layername) {
  let len = mapClass.layers.length
  if (len === 0) return
  if (layername === undefined) {
    switch (mapParams.mapType) {
      case MapType.Esri:
        for (let i = 0; i < len; i++) {
          mapClass.layers[i].layer.clear()
        }
        break
      case MapType.Gaode:
        mapClass.map.clearMap()
        break
      case MapType.GA:
        mapClass.map.clearOverlays()
        break
      case MapType.Tianditu:
        for (let i = 0; i < len; i++) {
          mapClass.map.removeLayer(mapClass.layers[i].layer)
        }
        break
    }
    mapClass.layers.splice(0, len)
  } else {
    let index = getLyrIndexByName(layername)
    if (index !== -1) {
      switch (mapParams.mapType) {
        case MapType.Esri:
          mapClass.layers[index].layer.clear()
          break
        case MapType.Gaode:
          mapClass.map.remove(mapClass.layers[index].layer)
          break
        case MapType.GA:
        case MapType.Tianditu:
          mapClass.map.removeLayer(mapClass.layers[index].layer)
          break
      }
      mapClass.layers.splice(index, 1)
    }
  }
}
/**
 * 通过图层名获取图层index
 * @param {string} lyrname 返回-1则找不到
 */
let getLyrIndexByName = function (lyrname) {
  for (let i = 0, len = mapClass.layers.length; i < len; i++) {
    if (mapClass.layers[i].name === lyrname) {
      return i
    }
  }
  return -1
}
// var getElementByIndex = function (index, layerName) {
//   let layer = getLyrByName(layerName)

// }
/**
 * 根据图层名获取渲染数据图层
 * @param {string} lyrname 图层名
 */
let getLyrByName = function (lyrname) {
  for (let i = 0, len = mapClass.layers.length; i < len; i++) {
    if (mapClass.layers[i].name === lyrname) {
      return mapClass.layers[i].layer
    }
  }
}
/**
 * 根据图层名关键字获取图层名
 * @param {string} key 关键字
 */
let getLyrFullName = function (key) {
  let fullNames = []
  for (let i = 0, len = mapClass.layers.length; i < len; i++) {
    if (mapClass.layers[i].name.indexOf(key) !== -1) {
      fullNames.push(mapClass.layers[i].name)
    }
  }
  return fullNames
}
/**
 * 获得可见图层名称
 * @param {Boolean} visible 可见性
 */
let getLayerNamebyVisibility = function (visible) {
  let layers = []
  for (let i = 0, len = mapClass.layers.length; i < len; i++) {
    if (mapClass.layers[i].visible === visible) {
      layers.push(mapClass.layers[i].name)
    }
  }
  return layers
}
/**
 * 设置图层可见性
 * @param {Boolean} visible  可见性
 * @param {string} layername 图层名
 */
let setLayerVisibility = function (visible, layername) {
  for (let i = 0, len = mapClass.layers.length; i < len; i++) {
    if (mapClass.layers[i].name === layername) {
      mapClass.layers[i].visible = visible
      break
    }
  }
}
let insertDataIntoLayer = function (layer, type, geoObj, style, extension) {
  switch (mapParams.mapType) {
    case MapType.Esri:
      esriLoader.loadModules(['esri/geometry/Point', 'esri/graphic',
        'esri/symbols/PictureMarkerSymbol', 'esri/SpatialReference'])
        .then(([Point, Graphic, PictureMarkerSymbol, SpatialReference]) => {
          for (let i = 0, len = geoObj.length; i < len; i++) {
            if (geoObj[i].longitude == null || geoObj[i].latitude == null) continue
            if (geoObj[i].longitude === 0 || geoObj[i].latitude === 0) continue
            let xCoor = geoObj[i].longitude
            let yCoor = geoObj[i].latitude
            let spatialRef = new SpatialReference({ wkid: 4326 })
            let spatialRefName
            if (mapParams.spatialReference) {
              spatialRefName = mapParams.spatialReference.name
            }
            switch (spatialRefName) {
              case CoorSystem.sh_54: spatialRef = new SpatialReference(mapParams.spatialReference.content)
                break
            }
            let pt = new Point(xCoor, yCoor, spatialRef)
            let marker = new Graphic(pt)
            geoObj[i].type = type
            marker.setAttributes(geoObj[i])

            let picSymbol

            if (geoObj[i].state !== undefined) {
              let status = ''
              switch (geoObj[i].state) {
                case 0: status = 'offline'; break
                case 1: status = 'online'; break
                case 2: status = 'broken'; break
              }
              picSymbol = new PictureMarkerSymbol(require('../assets/imgs/maps/' + style.baseUrl + '/' + status + '/' + type + extension), style.width, style.height)
            } else {
              picSymbol = new PictureMarkerSymbol(require('../assets/imgs/maps/' + style.baseUrl + '/' + type + extension), style.width, style.height)
            }
            marker.setSymbol(picSymbol)
            layer.add(marker)
          }
        })
        .catch(err => {
          console.error(err)
        })
      break
    case MapType.GA:
      for (let i = 0, len = geoObj.length; i < len; i++) {
        let pt = wgs84ToGaode([[geoObj[i].longitude, geoObj[i].latitude]])

        let opts = new window.IMAP.MarkerOptions()
        opts.anchor = window.IMAP.Constants.BOTTOM_CENTER

        if (geoObj[i].state !== undefined) {
          let status = ''
          switch (geoObj[i].state) {
            case 0: status = 'offline'; break
            case 1: status = 'online'; break
            case 2: status = 'broken'; break
          }
          opts.icon = new window.IMAP.Icon(require('../assets/imgs/maps/' + style.baseUrl + '/' + status + '/' + type + extension), { 'size': new window.IMAP.Size(style.width, style.height) })
        } else {
          opts.icon = new window.IMAP.Icon(require('../assets/imgs/maps/' + style.baseUrl + '/' + type + extension), { 'size': new window.IMAP.Size(style.width, style.height) })
        }
        opts.editabled = false
        opts.visible = true
        let marker = new window.IMAP.Marker(new window.IMAP.LngLat(pt[0][0], pt[0][1]), opts)
        geoObj[i].type = type
        marker.D = geoObj[i]
        mapClass.map.getOverlayLayer().addOverlay(marker, true)
        layer.push(marker)
      }
      break
    case MapType.Gaode:
      for (let i = 0, len = geoObj.length; i < len; i++) {
        let pt = wgs84ToGaode([[geoObj[i].longitude, geoObj[i].latitude]])
        let content
        if (geoObj[i].state !== undefined) {
          content = '<div class="' + ' marker-' + type + '-' + geoObj[i].state + '-' + style.baseUrl + '"></div>'
        } else {
          content = '<div class="marker-' + type + '-' + style.baseUrl + '"></div>'
        }
        geoObj[i].type = type
        let marker = new window.AMap.Marker({
          map: mapClass.map,
          position: [pt[0][0], pt[0][1]],
          extData: geoObj[i],
          content: content,
          offset: new window.AMap.Pixel(style.xOffset, style.yOffset)
        })
        layer.push(marker)
      }
      break
    case MapType.Tianditu:
      for (let i = 0, len = geoObj.length; i < len; i++) {
        let customIconDiv
        if (geoObj[i].state !== undefined) {
          customIconDiv = window.L.divIcon({
            className: 'marker-' + type + '-' + geoObj[i].state + '-' + style.baseUrl,
            iconSize: [style.width, style.height]
          })
        } else {
          customIconDiv = window.L.divIcon({
            className: 'marker-' + type + '-' + style.baseUrl,
            iconSize: [style.width, style.height]
          })
        }
        geoObj[i].type = type
        let marker = window.L.marker(
          [geoObj[i].latitude, geoObj[i].longitude],
          {
            icon: customIconDiv,
            alt: geoObj[i]
          })
        layer.addLayer(marker)
      }
      break
  }
}
/**
 * 显示陌生人气泡
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {string} inLoc 进入位置
 * @param {string} firstLoc 首次出现位置
 * @param {string} inTime 进入时间
 * @param {string} firstTime 首次出现时间
 * @param {Number} similarity 相似性
 * @param {string} inPic 进入抓拍图片
 * @param {string} firstPic 首次进入抓拍图片
 */
let showStranger = function (x, y, inLoc, firstLoc, inTime, firstTime, similarity, inPic, firstPic) {
  let content
  switch (mapParams.mapType) {
    case MapType.Esri:
    case MapType.GA:
      content = '<div class="map-bubbleStranger-esri"><h2>陌生人比对</h2><div class="map-capturePic"><div class="left"><div>' +
        '<div class="map-tv-1"><div><img class="map-BubbleImg" src="' + inPic + '" alt=""/></div></div></div><h3>实时抓拍</h3><p>' + inTime + '</p><p>' + inLoc + '</p></div><div class="middle"><span>' + similarity + '%</span></div>' +
        '<div class="right"><div><div class="map-tv-2"><div><img class="map-BubbleImg" src="' + firstPic + '" alt=""/></div></div></div><h3>首次出现</h3><p>' + firstTime + '</p><p>' + firstLoc + '</p></div></div></div>'
      break
    case MapType.Gaode:
      content = '<div class="map-bubbleStranger-gd"><h2>陌生人比对</h2><div class="map-capturePic"><div class="left"><div>' +
        '<div class="map-tv-1"><div><img class="map-BubbleImg" src="' + inPic + '" alt=""/></div></div></div><h3>实时抓拍</h3><p>' + inTime + '</p><p>' + inLoc + '</p></div><div class="middle"><span>' + similarity + '%</span></div>' +
        '<div class="right"><div><div class="map-tv-2"><div><img class="map-BubbleImg" src="' + firstPic + '" alt=""/></div></div></div><h3>首次出现</h3><p>' + firstTime + '</p><p>' + firstLoc + '</p></div></div><div class="map-bubbleSharp"></div></div>'
      break
    case MapType.Tianditu:
      content = '<div class="map-bubbleStranger-gd map-pop-mouse"><h2>陌生人比对</h2><div class="map-capturePic"><div class="left"><div>' +
        '<div class="map-tv-1"><div><img class="map-BubbleImg" src="' + inPic + '" alt=""/></div></div></div><h3>实时抓拍</h3><p>' + inTime + '</p><p>' + inLoc + '</p></div><div class="middle"><span>' + similarity + '%</span></div>' +
        '<div class="right"><div><div class="map-tv-2"><div><img class="map-BubbleImg" src="' + firstPic + '" alt=""/></div></div></div><h3>首次出现</h3><p>' + firstTime + '</p><p>' + firstLoc + '</p></div></div><div class="map-bubbleSharp"></div></div>'
      break
  }

  showPopup(x, y, content, 1)
}
/**
 * 显示视频气泡
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {string} title 标题
 * @param {string} streamSource 视频链接
 */
let showVideo = function (x, y, title, streamSource) {
  let content
  switch (mapParams.mapType) {
    case MapType.Esri:
    case MapType.GA:
      content = '<div class="map-bubbleVideo-esri"><h2>' + title + '</h2><div class="map-video"></div></div>'
      break
    case MapType.Gaode:
      content = '<div class="map-bubbleVideo-gd"><h2>' + title + '</h2><div class="map-video"></div><div class="map-bubbleSharpVideo"></div></div>'
      break
  }
  showPopup(x, y, content, 2)
}
/**
 * 显示过车气泡
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {string} dateTime 过车日期、时间
 * @param {string} loc 过车位置名称
 * @param {string} plate 车牌
 * @param {string} status 驶进/驶出
 * @param {string} pic 过车抓拍图片
 */
let showCar = function (x, y, dateTime, loc, plate, status, pic) {
  let content
  switch (mapParams.mapType) {
    case MapType.Esri:
    case MapType.GA:
      content = '<div class="map-bubbleCar-esri"><div class="map-bubbleCar_m"><div class="map-tv"><div><img class="map-BubbleImg" src="' + pic + '" alt=""></div>' +
        '</div><div class="map-cotent"><p>' + dateTime + '</p><p>' + loc + '</p><p>' + plate + '</p><span>' + status + '</span></div>' +
        '</div></div>'
      break
    case MapType.Gaode:
      content = '<div class="map-bubbleCar-gd"><div class="map-bubbleCar_m map-bubbleCar_m-gd"><div class="map-tv"><div><img class="map-BubbleImg" src="' + pic + '" alt=""></div>' +
        '</div><div class="map-cotent"><p>' + dateTime + '</p><p>' + loc + '</p><p>' + plate + '</p><span>' + status + '</span></div>' +
        '</div><div class="map-arrow"></div></div>'
      break
    case MapType.Tianditu:
      content = '<div class="map-bubbleCar-gd map-pop-mouse"><div class="map-bubbleCar_m map-bubbleCar_m-gd"><div class="map-tv"><div><img class="map-BubbleImg" src="' + pic + '" alt=""></div>' +
        '</div><div class="map-cotent"><p>' + dateTime + '</p><p>' + loc + '</p><p>' + plate + '</p><span>' + status + '</span></div>' +
        '</div><div class="map-arrow"></div></div>'
      break
  }

  showPopup(x, y, content, 0)
}
/**
 * 关闭气泡
 */
let closePopup = function () {
  let tLayer = getLyrByName('popup')
  if (tLayer === undefined || tLayer.length === 0) return
  switch (mapParams.mapType) {
    case MapType.Esri:
      if (tLayer !== undefined) {
        for (let i = 0, len = tLayer.length; i < len; i++) {
          tLayer[i].destroy()
        }
      }
      break
    case MapType.Gaode:
      // if (tLayer !== undefined) {
      //   mapClass.map.remove(tLayer)
      // }
      let one = []
      one.push(tLayer[0])
      mapClass.map.remove(one)
      tLayer.splice(0, 1)
      break
    case MapType.GA:
      if (tLayer !== undefined) {
        mapClass.map.getOverlayLayer().clear(tLayer)
      }
      break
    case MapType.Tianditu:
      if (tLayer !== undefined) {
        for (let i = 0, len = tLayer.length; i < len; i++) {
          mapClass.map.removeLayer(tLayer[i])
        }
      }
      break
  }

  // let index = getLyrIndexByName('popup')
  // if (index !== -1) { mapClass.layers.splice(index, 1) }
}
/**
 * 显示气泡
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {string} content 内容
 * @param {number} n 0-车辆气泡，1-陌生人气泡，2-视频气泡
 */
let showPopup = function (x, y, content, n) {
  let glayer = getLyrByName('popup')
  if (glayer === undefined) {
    glayer = []
    mapClass.layers.push(new MapOverLayer('popup', glayer, true))
  }
  switch (mapParams.mapType) {
    case MapType.Gaode:
      let xy = wgs84ToGaode([
        [x, y]
      ])

      let marker = new window.AMap.Marker({
        position: [xy[0][0], xy[0][1]],
        content: content,
        draggable: false
      })
      switch (n) {
        case 0: marker.setOffset(new window.AMap.Pixel(15, -100)); break
        case 1: marker.setOffset(new window.AMap.Pixel(10, -130)); break
        case 2: marker.setOffset(new window.AMap.Pixel(5, -205)); break
      }
      marker.setMap(mapClass.map)
      glayer.push(marker)
      break
    case MapType.Esri:
      esriLoader.loadModules(['esri/dijit/Popup', 'dojo/dom-construct', 'dojo/dom-class', 'esri/geometry/Point', 'esri/SpatialReference'])
        .then(([EsriPopup, domConstruct, domClass, Point, SpatialReference]) => {
          popTip = new EsriPopup({ anchor: 'auto' }, domConstruct.create('div'))
          popTip.startup()
          popTip.setContent(content)
          popTip.setMap(mapClass.map)
          let spatialRef = new SpatialReference({ wkid: 4326 })
          let xCoor = x
          let yCoor = y
          let spatialRefName
          if (mapParams.spatialReference) {
            spatialRefName = mapParams.spatialReference.name
          }
          switch (spatialRefName) {
            case CoorSystem.sh_54: spatialRef = new SpatialReference(mapParams.spatialReference.content)
              break
          }
          popTip.show(new Point(xCoor, yCoor, spatialRef))
          glayer.push(popTip)
        })
      break
    case MapType.GA:
      let pt = wgs84ToGaode([
        [x, y]
      ])
      let infowindow = new window.IMAP.InfoWindow('', {
        offset: new window.IMAP.Pixel(0, 0),
        position: new window.IMAP.LngLat(pt[0][0], pt[0][1]),
        visible: true
      })
      infowindow.setContent(content)
      mapClass.map.getOverlayLayer().addOverlay(infowindow)

      glayer.push(infowindow)
      break
    case MapType.Tianditu:
      let offset = [0, 85]
      switch (n) {
        case 0: offset = [0, 85]; break
        case 1: offset = [-8, 118]; break
      }
      let markerTip = window.L.marker(
        [y, x],
        {
          icon: window.L.divIcon({
            className: 'leaflet-pulse-icon',
            html: content,
            iconAnchor: offset
          })
        }
      ).addTo(mapClass.map)
      glayer.push(markerTip)
      break
  }
}
/**
 * 打开popup信息窗方法
 */
let showName = function (evt) {
  switch (mapParams.mapType) {
    // case MapType.Gaode:
    //   var ginfoWindow = new window.AMap.InfoWindow({
    //     content: evt.target.getExtData().name
    //   })
    //   ginfoWindow.open(mapClass.map, [evt.lnglat.lng, evt.lnglat.lat])
    //   break
    case MapType.Esri:
      esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/graphic', 'esri/symbols/TextSymbol'])
        .then(([GraphicsLayer, Graphic, TextSymbol]) => {
          let tLayer = getLyrByName('label')
          if (tLayer === undefined) {
            tLayer = new GraphicsLayer()
            mapClass.map.addLayer(tLayer)
            mapClass.layers.push(new MapOverLayer('label', tLayer, true))
          }
          let tSym = new TextSymbol(
            {
              'type': 'esriTS',
              'color': [255, 255, 255, 255],
              'backgroundColor': [255, 0, 0, 255],
              'verticalAlignment': 'top',
              'horizontalAlignment': 'left',
              'angle': 0,
              'xoffset': 5,
              'yoffset': 0,
              'font': {
                'family': 'Arial',
                'size': 14,
                'style': 'normal',
                'decoration': 'none'
              }
            }
          )

          let markerTxt = new Graphic(evt.mapPoint, tSym)
          tSym.setText(evt.graphic.attributes === undefined ? '' : evt.graphic.attributes.name)
          tLayer.add(markerTxt)
        })

      // if (tooltip !== undefined) tooltip.destroy()
      // esriLoader.loadModules(['esri/dijit/Popup', 'dojo/dom-construct', 'dojo/dom-class'])
      //   .then(([EsriPopup, domConstruct, domClass]) => {
      //     tooltip = new EsriPopup({anchor: 'auto'}, domConstruct.create('div'))
      //     tooltip.startup()
      //     // add a class to the tooltip
      //     domClass.add(tooltip.domNode, 'light')
      //     let att = evt.graphic.attributes
      //     if (att === undefined) {
      //       att = ''
      //     } else {
      //       att = att.name
      //     }
      //     tooltip.setContent(att)
      //     tooltip.setMap(mapClass.map)
      //     tooltip.resize(120, 200)
      //     tooltip.show(evt.mapPoint)
      //   })
      break
  }
}
/**
 * 关闭popup信息窗方法
 */
let hideName = function (evt) {
  switch (mapParams.mapType) {
    // case MapType.Gaode:
    //   mapClass.map.clearInfoWindow()
    //   break
    case MapType.Esri:
      // if (tooltip !== undefined) tooltip.hide()
      let tLayer = getLyrByName('label')
      mapClass.map.removeLayer(tLayer)
      let index = getLyrIndexByName('label')
      mapClass.layers.splice(index, 1)
      break
  }
}
/**
 * 设置回地图显示范围
 * @param {} extObj ext = {center: [0, 0], zoom: 0, rotation: 0, pitch: 0, xmin: 0, ymin: 0, xmax: 0, ymax: 0}
 */
let setbackExtent = function (extObj) {
  switch (mapParams.mapType) {
    case MapType.Esri:
      esriLoader.loadModules(['esri/geometry/Extent'])
        .then(([Extent]) => {
          mapClass.map.setExtent(new Extent({
            xmin: extObj.xmin,
            ymin: extObj.ymin,
            xmax: extObj.xmax,
            ymax: extObj.ymax
          }, true))
        })
      break
    case MapType.Gaode:
      mapClass.map.setCenter(extObj.center)
      mapClass.map.setZoom(extObj.zoom)
      mapClass.map.setRotation(extObj.rotation)
      mapClass.map.setPitch(extObj.pitch)
      break
    case MapType.GA:
      mapClass.map.setCenter(extObj.center, extObj.zoom)
      break
    case MapType.Tianditu:
      let latlng = window.L.latLng(extObj.center[1], extObj.center[0])
      mapClass.map.setView(latlng)
      mapClass.map.invalidateSize()
      break
  }
}
/**
 * 居中缩放地图
 * @param {Number} x 中心点x坐标
 * @param {Number} y 中心点y坐标
 * @param {Number} zoomlevel 缩放级别
 */
let setCenterAndZoom = function (x, y, zoomlevel) {
  if (mapClass.map == null) return
  switch (mapParams.mapType) {
    case MapType.Esri:
      esriLoader.loadModules(['esri/geometry/Point', 'esri/SpatialReference'])
        .then(([Point, SpatialReference]) => {
          let xCoor = x
          let yCoor = y
          let spatialRef = new SpatialReference({ wkid: zuobiaoxi })
          let spatialRefName
          if (mapParams.spatialReference) {
            spatialRefName = mapParams.spatialReference.name
          }
          switch (spatialRefName) {
            case CoorSystem.sh_54: spatialRef = new SpatialReference(mapParams.spatialReference.content)
              break
          }
          mapClass.map.centerAndZoom(new Point(xCoor, yCoor, spatialRef), zoomlevel)
        })
      break
    case MapType.Gaode:
      let xy = wgs84ToGaode([[x, y]])
      let center = new window.AMap.LngLat(xy[0][0], xy[0][1])
      mapClass.map.setZoomAndCenter(zoomlevel, center)

      if (mapParams.viewMode === '3D') {
        mapClass.map.setRotation(0)
        mapClass.map.setPitch(mapParams.pitch)
      }
      break
    case MapType.GA:
      let pt = wgs84ToGaode([[x, y]])
      let centerPt = new window.IMAP.LngLat(pt[0][0], pt[0][1])
      mapClass.map.setCenter(centerPt, zoomlevel)
      break
    case MapType.Tianditu:
      let latlng = window.L.latLng(y, x)
      mapClass.map.setView(latlng, zoomlevel)
      mapClass.map.invalidateSize()
      break
  }
}
/**
 * 地图移至范围
 * @param {number} xmin
 * @param {number} ymin
 * @param {number} xmax
 * @param {number} ymax
 */
let setExtent = function (xmin, ymin, xmax, ymax) {
  switch (mapParams.mapType) {
    case MapType.Esri:
      esriLoader.loadModules(['esri/geometry/Extent'])
        .then(([Extent]) => {
          let sExtent = new Extent({
            xmin: xmin,
            ymin: ymin,
            xmax: xmax,
            ymax: ymax
          })
          mapClass.map.setExtent(sExtent, true)
        })
      break
    case MapType.Gaode:
      let minMax = wgs84ToGaode([
        [xmin, ymin],
        [xmax, ymax]
      ])
      let center = new window.AMap.LngLat((minMax[0][0] + minMax[1][0]) / 2, (minMax[0][1] + minMax[1][1]) / 2)
      mapClass.map.setZoomAndCenter(mapParams.zoom, center)
      break
    case MapType.GA:
      let pt = wgs84ToGaode([
        [xmin, ymin],
        [xmax, ymax]
      ])
      mapClass.map.setCenter(new window.IMAP.LngLat((pt[0][0] + pt[1][0]) / 2, (pt[0][1] + pt[1][1]) / 2))
      break
    case MapType.Tianditu:
      let latlng = window.L.latLng((ymin + ymax) / 2, (xmin + xmax) / 2)
      mapClass.map.setView(latlng, mapParams.zoom)
      mapClass.map.invalidateSize()
      break
  }
}
/**
 * 隐藏指定图层
 * @param {string} layername 图层名
 */
let hideLayer = function (layername) {
  let renderlayer = getLyrByName(layername)
  if (renderlayer === undefined) return
  switch (mapParams.mapType) {
    case MapType.Gaode:
      for (let i = 0, len = renderlayer.length; i < len; i++) {
        renderlayer[i].setMap(null)
      }
      break
    case MapType.Esri:
      renderlayer.hide()
      break
    case MapType.GA:
      for (let i = 0, len = renderlayer.length; i < len; i++) {
        renderlayer[i].visible(false)
      }
      break
    case MapType.Tianditu:
      mapClass.map.removeLayer(renderlayer)
      break
  }
}
/**
 * 显示指定图层
 * @param {string} layername 图层名
 */
let showLayer = function (layername) {
  let renderlayer = getLyrByName(layername)
  if (renderlayer === undefined) {
    return false
  } else {
    switch (mapParams.mapType) {
      case MapType.Gaode:
        for (let i = 0, len = renderlayer.length; i < len; i++) {
          renderlayer[i].setMap(mapClass.map)
        }
        break
      case MapType.Esri:
        renderlayer.show()
        break
      case MapType.GA:
        for (let i = 0, len = renderlayer.length; i < len; i++) {
          renderlayer[i].visible(true)
        }
        break
      case MapType.Tianditu:
        mapClass.map.addLayer(renderlayer)
    }
    return true
  }
}
let showLayerAtMaxZoom = function () {
  let visibleLayers = getLayerNamebyVisibility(true)
  if (mapClass.map.getZoom() === mapParams.zooms[1]) {
    for (let i = 0, len = visibleLayers.length; i < len; i++) {
      showLayer(visibleLayers[i])
    }
  } else {
    for (let i = 0, len = visibleLayers.length; i < len; i++) {
      if (visibleLayers[i].indexOf('_label') > -1) {
        hideLayer(visibleLayers[i])
      }
    }
  }
}
/**
 * 开始闪烁动画
 * @param {*} x
 * @param {*} y
 * @param {*} xoffset
 * @param {*} yoffset
 */
let startBlinkingObj = function (x, y, xoffset, yoffset) {
  if (mapParams.mapType === MapType.Esri) {
    esriLoader.loadModules(['esri/layers/GraphicsLayer', 'esri/graphic', 'esri/geometry/Point',
      'esri/symbols/PictureMarkerSymbol', 'esri/SpatialReference'])
      .then(([GraphicsLayer, Graphic, Point, PictureMarkerSymbol, SpatialReference]) => {
        // create alarm layer if it doesn't exist
        let glayer = getLyrByName('alarm')
        if (glayer === undefined) {
          glayer = new GraphicsLayer()
          mapClass.map.addLayer(glayer, 0)
          mapClass.layers.push(new MapOverLayer('alarm', glayer, true))
        }
        setLayerVisibility(true, 'alarm')
        let symbol = new PictureMarkerSymbol(require('../assets/imgs/maps/wave.gif'), 64, 64)
        let spatialRef = new SpatialReference({ wkid: 4326 })
        let xCoor = x
        let yCoor = y
        let spatialRefName
        if (mapParams.spatialReference) {
          spatialRefName = mapParams.spatialReference.name
        }
        switch (spatialRefName) {
          case CoorSystem.sh_54: spatialRef = new SpatialReference(mapParams.spatialReference.content)
            break
        }
        let pt = new Point(xCoor, yCoor, spatialRef)
        let graphicFlash = new Graphic(pt, symbol)
        glayer.add(graphicFlash)
        return graphicFlash
      })
  } else if (mapParams.mapType === MapType.Gaode) {
    let xy = wgs84ToGaode([
      [x, y]
    ])
    let gdXY = new window.AMap.LngLat(xy[0][0], xy[0][1])

    let glayer = getLyrByName('alarm')
    if (glayer === undefined) {
      glayer = []
      mapClass.layers.push(new MapOverLayer('alarm', glayer, true))
    }
    setLayerVisibility(true, 'alarm')
    let markerBlinking = new window.AMap.Marker({
      position: gdXY,
      content: '<em class="wave"></em>',
      zIndex: 9999,
      offset: new window.AMap.Pixel(xoffset, yoffset)
    })
    markerBlinking.setMap(mapClass.map)
    glayer.push(markerBlinking)

    return markerBlinking
  } else if (mapParams.mapType === MapType.GA) {
    let xy = wgs84ToGaode([
      [x, y]
    ])

    let glayer = getLyrByName('alarm')
    if (glayer === undefined) {
      glayer = []
      mapClass.layers.push(new MapOverLayer('alarm', glayer, true))
    }
    setLayerVisibility(true, 'alarm')
    let opts = new window.IMAP.MarkerOptions()
    opts.anchor = window.IMAP.Constants.BOTTOM_CENTER
    opts.icon = new window.IMAP.Icon(require('../assets/imgs/maps/wave.gif'), { 'size': new window.IMAP.Size(18, 18) })

    opts.editabled = false
    opts.visible = true
    let marker = new window.IMAP.Marker(new window.IMAP.LngLat(xy[0][0], xy[0][1]), opts)
    mapClass.map.getOverlayLayer().addOverlay(marker, true)
    glayer.push(marker)
    return marker
  } else if (mapParams.mapType === MapType.Tianditu) {
    let glayer = getLyrByName('alarm')
    if (glayer === undefined) {
      glayer = window.L.layerGroup()
      mapClass.layers.push(new MapOverLayer('alarm', glayer, true))
    }
    setLayerVisibility(true, 'alarm')
    let pulseDiv = window.L.divIcon({
      className: 'leaflet-pulse-icon',
      html: '<div class="pulse"></div>',
      // html:'<em class="wave"></em>',
      iconAnchor: [15, 15]
    })

    let markerBlinking = window.L.marker(
      [y, x],
      {
        icon: pulseDiv,
        zIndexOffset: -1
      }
    )
    glayer.addLayer(markerBlinking)

    return markerBlinking
  }
}
/**
 * 关闭闪烁动画
 * @param {*} blinking
 */
let stopBlinkingObj = function (blinking) {
  let lyr = getLyrByName('alarm')
  if (lyr === undefined) return
  if (blinking === undefined) {
    switch (mapParams.mapType) {
      case MapType.Esri:
      case MapType.GA:
        mapClass.map.removeLayer(lyr)
        break
      case MapType.Gaode:
        mapClass.map.remove(lyr)
        break
      case MapType.Tianditu:
        mapClass.map.removeLayer(lyr)
        break
    }
    let index = getLyrIndexByName('alarm')
    mapClass.layers.splice(index, 1)
  } else {
    switch (mapParams.mapType) {
      case MapType.Esri:
        lyr.remove(blinking)
        break
      case MapType.Gaode:
        mapClass.map.remove(blinking)
        break
      case MapType.GA:
        mapClass.map.getOverlayLayer().removeOverlay(blinking)
        break
      case MapType.Tianditu:
        mapClass.map.removeLayer(blinking)
        break
    }
  }
  setLayerVisibility(false, 'alarm')
}
let clearElement = function (layerName, index, element) {
  if (element !== undefined) {
    switch (mapParams.mapType) {
      case MapType.Esri:
        let lyr = getLyrByName(layerName)
        lyr.remove(element)
        break
      case MapType.Gaode:
        mapClass.map.remove(element)
        break
      case MapType.GA:
        mapClass.map.getOverlayLayer().removeOverlay(element)
        break
      case MapType.Tianditu:
        mapClass.map.removeLayer(element)
        break
    }
  }
}
/**
 * 指定图层里查找距离中心点一定距离要素
 * @param {*} layername
 * @param {*} distance
 * @param {*} centerX
 * @param {*} centerY
 */
let searchNearbyObj = function (layername, distance, centerX, centerY) {
  let lyr = getLyrByName(layername)
  let results = []
  if (lyr !== undefined) {
    if (mapParams.mapType === MapType.Esri) {
      let centerPt = lonLatToMercator([centerX, centerY])
      for (let i = 0, len = lyr.graphics.length; i < len; i++) {
        let g = lyr.graphics[i]
        let pt = lonLatToMercator(g.geometry)
        let dis = getDistance(centerPt, pt)
        if (dis < distance) { results.push(g) }
      }
    } else if (mapParams.mapType === MapType.Gaode) {
      let lnglat1 = new window.AMap.LngLat(centerX, centerY)
      for (let i = 0, len = lyr.length; i < len; i++) {
        let pos = lyr[i].getPosition()
        let dis = lnglat1.distance(pos)

        if (dis < distance) { results.push(lyr[i]) }
      }
    } else if (mapParams.mapType === MapType.GA) {
      let lnglat1 = new window.IMap.LngLat(centerX, centerY)
      for (let i = 0, len = lyr.length; i < len; i++) {
        let pos = lyr[i].getPosition()
        let dis = lnglat1.distance(pos)

        if (dis < distance) { results.push(lyr[i]) }
      }
    } else if (mapParams.mapType === MapType.Tianditu) {
      let lnglat1 = window.L.latLng(centerX, centerY)
      let markers = lyr.getLayers()
      for (let i = 0, len = markers.length; i < len; i++) {
        let dis = lnglat1.distanceTo(markers[i].getLatLng())

        if (dis < distance) { results.push(markers[i]) }
      }
    }
  }
  return results
}
/**
 * 两点之间距离
 * @param {*} pt1
 * @param {*} pt2
 */
let getDistance = function (pt1, pt2) {
  let dis = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2))
  return dis
}
/**
 * 地图图层点击事件
 */
let onLayerClick = function (callbackEvent, layername) {
  if (layername === undefined) {
    for (let i = 0, len = mapClass.layers.length; i < len; i++) {
      if (mapParams.mapType === MapType.Esri) {
        mapClass.layers[i].layer.on('click', function (e) {
          callbackEvent(e)
        })
      } else if (mapParams.mapType === MapType.Gaode) {
        for (let j = 0, len = mapClass.layers[i].layer.length; j < len; j++) {
          mapClass.layers[i].layer[j].on('click', function (e) {
            callbackEvent(e)
          })
        }
      }
    }
  } else {
    let lyr = getLyrByName(layername)
    if (mapParams.mapType === MapType.Esri) {
      lyr.on('click', function (e) {
        callbackEvent(e)
      })
    } else if (mapParams.mapType === MapType.Gaode) {
      for (let j = 0, len = lyr.length; j < len; j++) {
        lyr[j].on('click', function (e) {
          callbackEvent(e)
        })
      }
    }
  }
}
let onClick = function (callbackEvent) {
  mapClass.map.on('click', function (e) {
    callbackEvent(e)
  })
}
let onExtentChange = function (callbackEvent) {
  if (mapClass.map == null) return
  switch (mapParams.mapType) {
    // case MapType.Gaode:
    //   mapClass.map.on('dragend', function (e) {
    //     callbackEvent(e)
    //   })
    //   mapClass.map.on('resize', function (e) {
    //     callbackEvent(e)
    //   })
    //   mapClass.map.on('zoomchange', function (e) {
    //     callbackEvent(e)
    //   })
    //   break

    // case 'BD':
    //   mapClass.map.addEventListener('zoomend', callbackEvent)
    //   mapClass.map.addEventListener('dragend', callbackEvent)
    //   mapClass.map.addEventListener('resize', callbackEvent)
    //   break

    case MapType.Esri:
      if (mapClass.map == null) return
      mapClass.map.on('extent-change', function (e) {
        callbackEvent(e)
      })
      break
  }
}
let onLayerMouseOver = function (callbackEvent, layername) {
  let event = 'mouseover'
  if (mapParams.mapType === MapType.Esri) {
    event = 'mouse-over'
  }
  if (layername === undefined) {
    for (let i = 0, len = mapClass.layers.length; i < len; i++) {
      mapClass.layers[i].layer.on(event, function (e) {
        callbackEvent(e)
      })
    }
  } else {
    let lyr = getLyrByName(layername)
    lyr.on(event, function (e) {
      callbackEvent(e)
    })
  }
}
let onLayerMouseOut = function (callbackEvent, layername) {
  let event = 'mouseout'
  if (mapParams.mapType === MapType.Esri) {
    event = 'mouse-out'
  }
  if (layername === undefined) {
    for (let i = 0, len = mapClass.layers.length; i < len; i++) {
      mapClass.layers[i].layer.on(event, function (e) {
        callbackEvent(e)
      })
    }
  } else {
    let lyr = getLyrByName(layername)
    lyr.on(event, function (e) {
      callbackEvent(e)
    })
  }
}
/**
 * 获取地图范围（3维地图获取中心点、角度等）
 */
let getMapExtent = function () {
  let ext = { center: [0, 0], zoom: 0, rotation: 0, pitch: 0, xmin: 0, ymin: 0, xmax: 0, ymax: 0 }
  switch (mapParams.mapType) {
    case MapType.Esri:
      ext.xmin = mapClass.map.extent.xmin
      ext.ymin = mapClass.map.extent.ymin
      ext.xmax = mapClass.map.extent.xmax
      ext.ymax = mapClass.map.extent.ymax
      break
    case MapType.Gaode:
      ext.center = [mapClass.map.getCenter().lng, mapClass.map.getCenter().lat]
      ext.zoom = mapClass.map.getZoom()
      ext.rotation = mapClass.map.getRotation()
      ext.pitch = mapClass.map.getPitch()
      break
    case MapType.GA:
    case MapType.Tianditu:
      ext.center = [mapClass.map.getCenter().lng, mapClass.map.getCenter().lat]
      ext.zoom = mapClass.map.getZoom()
      break
  }

  return ext
}

/**
 * 获得地图缩放级别
 */
let getMapZoom = function () {
  return mapClass.map.getZoom()
}
let getDataExtent = function () {
  return mapClass.mapExtent
}
/** *****坐标转换*****/
let coordinateConfig = {
  xPI: 3.14159265358979324 * 3000.0 / 180.0,
  PI: 3.1415926535897932384626,
  a: 6378245.0,
  ee: 0.00669342162296594323
}

let baiduToGaode = function (ptlist) {
  let gList = []
  for (let i = 0, len = ptlist.length; i < len; i++) {
    let blon = ptlist[i][0]
    let blat = ptlist[i][1]
    blon = +blon
    blat = +blat
    let x = blon - 0.0065
    let y = blat - 0.006
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * coordinateConfig.xPI)
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * coordinateConfig.xPI)
    let glng = z * Math.cos(theta)
    let glat = z * Math.sin(theta)
    gList.push([glng, glat])
  }
  return gList
}
let baiduToWGS84 = function (ptlist) {
  let gdList = baiduToGaode(ptlist)
  return gaodeToWGS84(gdList)
}
let gaodeToWGS84 = function (ptlist) {
  let gList = []
  for (let i = 0, len = ptlist.length; i < len; i++) {
    let glon = ptlist[i][0]
    let glat = ptlist[i][1]

    glat = +glat
    glon = +glon
    if (outofChina(glon, glat)) {
      gList.push([glon, glat])
    } else {
      let dlat = transformLat(glon - 105.0, glat - 35.0)
      let dlng = transformlng(glon - 105.0, glat - 35.0)
      let radlat = glat / 180.0 * coordinateConfig.PI
      let magic = Math.sin(radlat)
      magic = 1 - coordinateConfig.ee * magic * magic
      let sqrtmagic = Math.sqrt(magic)
      dlat = (dlat * 180.0) / ((coordinateConfig.a * (1 - coordinateConfig.ee)) / (magic * sqrtmagic) * coordinateConfig.PI)
      dlng = (dlng * 180.0) / (coordinateConfig.a / sqrtmagic * Math.cos(radlat) * coordinateConfig.PI)
      let mglat = glat + dlat
      let mglng = glon + dlng
      gList.push([glon * 2 - mglng, glat * 2 - mglat])
    }
  }
  return gList
}
let gaodeToBaidu = function (ptlist) {
  let gList = []
  for (let i = 0, len = ptlist.length; i < len; i++) {
    let glon = ptlist[i][0]
    let glat = ptlist[i][1]

    glat = +glat
    glon = +glon
    let z = Math.sqrt(glon * glon + glat * glat) + 0.00002 * Math.sin(glat * coordinateConfig.xPI)
    let theta = Math.atan2(glat, glon) + 0.000003 * Math.cos(glon * coordinateConfig.xPI)
    let blng = z * Math.cos(theta) + 0.0065
    let blat = z * Math.sin(theta) + 0.006
    gList.push([blng, blat])
  }
  return gList
}
let wgs84ToGaode = function (ptlist) {
  let gList = []
  for (let i = 0, len = ptlist.length; i < len; i++) {
    let wgslon = ptlist[i][0]
    let wgslat = ptlist[i][1]

    wgslat = +wgslat
    wgslon = +wgslon
    if (outofChina(wgslon, wgslat)) {
      gList.push([wgslon, wgslon])
    } else {
      let dlat = transformLat(wgslon - 105.0, wgslat - 35.0)
      let dlng = transformlng(wgslon - 105.0, wgslat - 35.0)
      let radlat = wgslat / 180.0 * coordinateConfig.PI
      let magic = Math.sin(radlat)
      magic = 1 - coordinateConfig.ee * magic * magic
      let sqrtmagic = Math.sqrt(magic)
      dlat = (dlat * 180.0) / ((coordinateConfig.a * (1 - coordinateConfig.ee)) / (magic * sqrtmagic) * coordinateConfig.PI)
      dlng = (dlng * 180.0) / (coordinateConfig.a / sqrtmagic * Math.cos(radlat) * coordinateConfig.PI)
      let mglat = wgslat + dlat
      let mglng = wgslon + dlng
      gList.push([mglng, mglat])
    }
  }
  return gList
}
let wgs84ToBaidu = function (ptlist) {
  let gList = wgs84ToGaode(ptlist)
  return gaodeToBaidu(gList)
}

let lonLatToMercator = function (pt) {
  let x = pt[0] * 20037508.34 / 180
  let y = Math.log(Math.tan((90 + pt[1]) * Math.PI / 360)) / (Math.PI / 180)
  y = y * 20037508.34 / 180

  return [x, y]
}
let outofChina = function (lng, lat) {
  lat = +lat
  lng = +lng
  // 纬度[3.86,53.55],经度[73.66,135.05]
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}
let transformLat = function (lng, lat) {
  lat = +lat
  lng = +lng
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * coordinateConfig.PI) + 20.0 * Math.sin(2.0 * lng * coordinateConfig.PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lat * coordinateConfig.PI) + 40.0 * Math.sin(lat / 3.0 * coordinateConfig.PI)) * 2.0 / 3.0
  ret += (160.0 * Math.sin(lat / 12.0 * coordinateConfig.PI) + 320 * Math.sin(lat * coordinateConfig.PI / 30.0)) * 2.0 / 3.0
  return ret
}

let transformlng = function (lng, lat) {
  lat = +lat
  lng = +lng
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * coordinateConfig.PI) + 20.0 * Math.sin(2.0 * lng * coordinateConfig.PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lng * coordinateConfig.PI) + 40.0 * Math.sin(lng / 3.0 * coordinateConfig.PI)) * 2.0 / 3.0
  ret += (150.0 * Math.sin(lng / 12.0 * coordinateConfig.PI) + 300.0 * Math.sin(lng / 30.0 * coordinateConfig.PI)) * 2.0 / 3.0
  return ret
}
let wgs84ToshCus = function (lon, lat) {
  return [-11583561.4655538 + lon * 95356.0541247944 + lat * 29.8337748880993,
  -3471402.36568149 + lon * 74.8848737309186 + lat * 110845.418549433
  ]
}

export {
  initMap, addPointsLayer, addLinesLayer, addPolygonLayer, clearDataLayer, onLayerClick, onClick, onLayerMouseOver, onExtentChange, showName, hideName, setbackExtent, getPointAddress1, getPointAddress2, measureLine, printMap, addQXtoMap, toPositionByobjectid, justDrawLine,
  getMapExtent, getDataExtent, baiduToGaode, baiduToWGS84, gaodeToWGS84, gaodeToBaidu, wgs84ToGaode, wgs84ToBaidu, showStranger, showVideo, showCar, closePopup, setShowHideByName, setShowHideByName1, setShowHideByName2, searchDataArr, stGPMdbserver, stGPCadserver, clearGraphicsLayer,
  lonLatToMercator, onLayerMouseOut, searchNearbyObj, setCenterAndZoom, setExtent, hideLayer, showLayer, stopBlinkingObj, startBlinkingObj, setLayerVisibility, getMapZoom, deleteSingleLayer, addFeatureByPoint, deleteFeatureByPoint, addFeatureToMap, searchPointByP, startAnimation, trajRun,
  getLyrByName, insertDataIntoLayer, clearElement, getLayerNamebyVisibility, wgs84ToshCus, getLyrFullName, enableCreatePoly, editLayer, cancelEdit, multiAdd, showInmap, removeGraphics, searchGraphicByObjectId, searchGraphicByObjectIdHunjie, editFeatureByPoint, hunjieShowMap
}
