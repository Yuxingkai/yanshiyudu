// import ol from 'openlayers';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
window.map = null
export const initMap = () => {
    // let mapsrc = 'http://192.168.3.133:8080/geoserver/yufan/wms'
    var baseSource = new ol.source.TileWMS({
		url: 'http://192.168.3.133:8080/geoserver/yufan/wms',
		params: {
			LAYERS: 'yudu:gjpolygon',
            TILED: true,
            service: 'WMS'
		},
        serverType: 'geoserver',
        crossOrigin: 'anonymous'
    });

	var baseLayer = new TileLayer({
		source: baseSource
    });

    window.map = new Map({
        target: 'mapDiv',
        layers: [
            new TileLayer({
                source: new OSM()
            }),
            baseLayer,
        ],
        view: new View({
            center: [121, 31],
            zoom: 8,
            projection: 'EPSG:4326',
        })
    });

    addPoint(window.map) 

}


// 添加点位图标
export const addPoint = (map) => {
    var marklayer = new ol.layer.Vector({
        source: new ol.source.Vector()
      })
      map.addLayer(marklayer);
    // 创建一个Feature，并设置好在地图上的位置
    var anchor = new ol.Feature({
        geometry: new ol.geom.Point([121, 31]),
        type: "point",
        data: []
      });
      // 设置样式，在样式中就可以设置图标
      anchor.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
          src: require('../assets/imgs/maps/color/online/access.png'),
          scale: .2
        })
      }));
      
    //   console.log(marklayer.getSource())
      // 添加到之前的创建的layer中去
      marklayer.getSource().addFeature(anchor);

      map.on('click', function (evt) {
        // var pixel = map.getEventPixel(evt.originalEvent);
        var feature = map.forEachFeatureAtPixel(evt.pixel,
          function (feature) {
            return feature;
          });
        if (feature) {
            console.log(feature)
          // var coordinates = feature.getGeometry().getCoordinates();
          alert('12121')

        }
      });
}