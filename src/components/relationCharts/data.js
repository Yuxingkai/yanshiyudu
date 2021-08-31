// export const relationData = {
//     "nodes": [{
//             "name": "\u5468\u83b9",
//             "role_id": 41,
//             "group": 1,
//             "avatar": require('../../assets/imgs/headImg.png')
//         },
//         {
//             "name": "\u6c88\u661f\u79fb",
//             "role_id": 42,
//             "group": 1,
//             "avatar": require('../../assets/imgs/headImg.png')
//         },
//         {
//             "name": "\u8d75\u767d\u77f3",
//             "role_id": 44,
//             "group": 1,
//             "avatar": require('../../assets/imgs/headImg.png')
//         },
//         {
//             "name": "\u5468\u8001\u56db",
//             "role_id": 49,
//             "group": 1,
//             "avatar": require('../../assets/imgs/headImg.png')
//         },
//         {
//             "name": "\u5434\u8058",
//             "role_id": 43,
//             "group": 1,
//             "avatar": require('../../assets/imgs/headImg.png')
//         },
//     ],
//     "links": [{
//             "source": 0,
//             "target": 1,
//             "relation": "\u670b\u53cb",
//             "color": "734646"
//         },
//         {
//             "source": 0,
//             "target": 2,
//             "relation": "\u670b\u53cb",
//             "color": "734646"
//         },
//         {
//             "source": 0,
//             "target": 3,
//             "relation": "\u517b\u5973",
//             "color": "f2826a"
//         },
//     ]
// }

export const relationData = {
    nodes: [
        {
            "name": "路人甲",
            "avatar": require('../../assets/imgs/headImg.png'),
            "role_id": 0,
        },
        {
            "name": "路人乙",
            "avatar": require('../../assets/imgs/headImg.png'),
            "role_id": 1,
        },
        {
            "name": "路人丙",
            "avatar": require('../../assets/imgs/headImg.png'),
            "role_id": 2,
        },
        {
            "name": "路人丁",
            "avatar": require('../../assets/imgs/headImg.png'),
            "role_id": 3,
        },
    ],
    links: [
        {
            "source": 0,
            "target": 1,
            "relation": "朋友",
            "color": "734646"
        },
        {
            "source": 1,
            "target": 2,
            "relation": "女朋友",
            "color": "734646"
        },
        {
            "source": 0,
            "target": 2,
            "relation": "女朋友",
            "color": "734646"
        },
        {
            "source": 0,
            "target": 3,
            "relation": "女朋友",
            "color": "734646"
        },
    ],
}