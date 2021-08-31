
import echarts from 'echarts'
export const option = {
  // backgroundColor:'#000',
  "animation": true,
  // "title": {
  //     "text": "火点类型",
  //     // "subtext": "火点类型",
  //     "x": "center",
  //     "y": "center",
  //     "textStyle": {
  //         "color": "#fff",
  //         "fontSize": 12,
  //         "fontWeight": "normal",
  //         "align": "center",
  //         "width": "200px"
  //     },
  //     "subtextStyle": {
  //         "color": "#fff",
  //         "fontSize": 12,
  //         "fontWeight": "normal",
  //         "align": "center"
  //     }
  // },
  // "legend": {
  //     "width": "100%",
  //     "left": "center",
  //     "textStyle": {
  //         "color": "#fff",
  //         "fontSize": 12
  //     },
  //     "icon": "circle",
  //     "right": "0",
  //     "bottom": "0",
  //     "padding": [30, 60],
  //     "itemGap": 40,
  //     "data": ["工厂热源", "秸秆焚烧", "森林火灾", "草原火灾"]
  // },
  "series": [{
      "type": "pie",
      "center": ["50%", "50%"],
      "radius": ["60%", "73%"],
      "color": [new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#FAD961'},
            // {offset: 0.5, color: '#53A0FD'},
            {offset: 1, color: '#F76B1C'}
        ]
    ), new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#004A85'},
            // {offset: 0.5, color: '#53A0FD'},
            {offset: 1, color: '#00E9F6'}
        ]
    )],
      "startAngle": 5,
      "labelLine": {
          "normal": {
              "length": 15
          }
      },
      "label": {
          "normal": {
            formatter: "{b|{b}\n} {c|{c}} {per|{d}%} ",
            "backgroundColor": "rgba(255, 147, 38, 0)",
            "borderColor": "transparent",
            "borderRadius": 4,
            "rich": {
                "a": {
                    "color": "#999",
                    "lineHeight": 22,
                    "align": "center"
                },
                "hr": {
                    "borderColor": "#aaa",
                    "width": "100%",
                    "borderWidth": 1,
                    "height": 0
                },
                "b": {
                    "color": "#C9E7FF",
                    "fontSize": 12,
                    "lineHeight": 20,
                    fontFamily: "HY65", 
                    padding:  [0,5,0,0]
                },
                "c": {
                    "fontSize": 12,
                    "color": "#C9E7FF",
                    fontFamily: "DINBOLD",
                      padding:  [5,0,0,8]
                },
                "per": {
                    "color": "#C9E7FF",
                    fontFamily: "DINBOLD",
                    "fontSize": 12,
                    "padding": [5, 0,0,0],
                    "borderRadius": 2
                }
            },
            "textStyle": {
                "color": "#fff",
                "fontSize": 12
            }
          }
      },
      "emphasis": {
        "label": {
            "show": true,
            "formatter": "{b|{b}\n} {c|{c}} {per|{d}%}",
            "backgroundColor": "rgba(255, 147, 38, 0)",
            "borderColor": "transparent",
            "borderRadius": 4,
            "rich": {
              "a": {
                  "color": "#999",
                  "lineHeight": 22,
                  "align": "center"
              },
              "hr": {
                  "borderColor": "#aaa",
                  "width": "100%",
                  "borderWidth": 1,
                  "height": 0
              },
              "b": {
                  "color": "#00F9FC",
                  "fontSize": 12,
                  "lineHeight": 20,
                  fontFamily: "HY65", 
                  padding:  [0,5,0,0]
              },
              "c": {
                  "fontSize": 12,
                  "color": "#00F9FC",
                  fontFamily: "DINBOLD",
                    padding:  [5,0,0,8]
              },
              "per": {
                  "color": "#00F9FC",
                  fontFamily: "DINBOLD",
                  "fontSize": 12,
                  "padding": [5, 0,0,0],
                  "borderRadius": 2
              }
            }
        }
      },
      "data": []
  }]
}