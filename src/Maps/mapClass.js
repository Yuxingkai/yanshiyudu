
/**
* [点]
* {[Number]} x   [x坐标]
* {[Number]} y   [y坐标]
* {[Number]} id   [id]
* {[MapPointStyle]} style [样式]
*/
class MapPoint {
  constructor(x, y, id, style) {
    this.id = id
    this.x = x
    this.y = y
    this.style = style
  }
}
/**
* [线]
* {[Array]} path  [组成线的点集]
* {[Number]} id   [id]
* {[MapLineStyle]} style [样式]
*/
class MapPolyline {
  constructor(path, id, style) {
    this.id = id
    this.path = path
    this.style = style
  }
}
/**
* [面]
* {[Array]} path     [组成面的点集]
* {[Number]} id      [id]
* {[MapPolygonStyle]} style [样式]
*/
class MapPolygon {
  constructor(path, id, style) {
    this.id = id
    this.path = path
    this.style = style
  }
}
/**
* [点样式]
* {[Number]} width   [点宽]
* {[Number]} height   [点高]
* {[Number]} baseUrl   [图片url]
* {[Number]} xOffset [x偏移]
* {[Number]} yOffset [y偏移]
* {[Number]} angle   [角度]
*/
class MapPointStyle {
  constructor(width, height, baseUrl, xOffset, yOffset, angle) {
    this.width = width
    this.height = height
    this.baseUrl = baseUrl
    this.xOffset = xOffset
    this.yOffset = yOffset
    this.angle = angle
  }
}
/**
* [线样式]
* {[String]} color         [颜色]
* {[Number]} width         [宽度]
* {[Number]} opacity      [透明度]
* {[MapLineType]} lineType [线类型]
*/
class MapLineStyle {
  constructor(color, width, opacity, lineType) {
    this.color = color
    this.width = width
    this.opacity = opacity
    this.lineType = lineType
  }
}
/**
* [面样式]
* {[String]} fillcolor       [填充颜色]
* {[String]} strokeColor     [边线颜色]
* {[Number]} strokeWeight    [边线宽]
* {[Number]} strokeOpacity   [边线透明度]
* {[Number]} fillOpacity     [填充透明度]
* {[MapLineType]} strokeType [边线样式（Solid/Dashed）]
*/
class MapPolygonStyle {
  constructor(fillColor, strokeColor, strokeWeight, strokeOpacity,
    fillOpacity, strokeType) {
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeWeight = strokeWeight
    this.strokeOpacity = strokeOpacity
    this.fillOpacity = fillOpacity
    this.strokeType = strokeType
  }
}

/**
 * [覆盖物图层]
 * {[String]} name [图层名称]
 * {[]}  layer  [几何要素集合]
 * {[Boolean]}  visible [是否可见]
 */
class MapOverLayer {
  constructor(name, layer, visible) {
    this.name = name
    this.layer = layer
    this.visible = visible
  }
}
/**
* [地图范围]
* {[Number]} xmin [x坐标最小值]
* {[Number]} ymin  [y坐标最小值]
* {[Number]} xmax [x坐标最大值]
* {[Number]} ymax [y坐标最大值]
*/
class MapExtent {
  constructor(xmin, ymin, xmax, ymax) {
    this.xmin = xmin
    this.ymin = ymin
    this.xmax = xmax
    this.ymax = ymax
  }
}
/**
* [地图初始化类]
*  {[String]} container  [地图容器]
*  {[String]} basemapurl [ESRI不可省略]
*  {[MapExtent]} extent    [地图显示范围 required]
*  {[Number]} minzoom    [地图最小缩放范围]
*  {[Number]} maxzoom    [地图最大缩放范围]
*  属性：map [地图]   layers [所有覆盖物图层] mapoverlayer
*/
class MapClass {
  map = null
  view = null
  feature = {
    line: '',
    point: ''
  }
  layers = []
  constructor(container, basemapurl, extent, minzoom, maxzoom) {
    this.mapContainer = container
    this.baseMapURL = basemapurl
    this.mapExtent = extent
    this.minZoom = minzoom
    this.maxZoom = maxzoom
  }
}

/**
* [线型]
* {[String]} solid 实线
*           dashed 虚线
*/
const MapLineType = {
  Solid: 'SOLID',
  Dashed: 'DASHED'
}
/**
 * 地图类型
 * {[String]} Gaode 高德 API
 *            Esri  Esri API
 *            GA    IMap API
 */
const MapType = {
  Gaode: 'GD',
  Esri: 'ESRI',
  GA: 'GA',
  Tianditu: 'TD'
}
const CoorSystem = {
  wgs84: 'wgs84',
  sh_54: 'sh_54'
}
export {
  MapPoint, MapOverLayer, MapExtent, MapPolyline, MapPolygon, MapPointStyle, MapLineStyle,
  MapPolygonStyle, MapClass, MapLineType, MapType, CoorSystem
}
