const path = require('path')
module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    runtimeCompiler: true,
    // 不需要.map文件
    productionSourceMap: false,
    lintOnSave: false,
    // 关闭文件生成的hash名
    // filenameHashing: false,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '于都县智慧排水管网信息管理平台',
            // title: '城运中心',
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/index.scss";`
            }
        }
    },
    devServer: {
        port: 8085,
        open: true,
        proxy: {
            // '^(/x1)': {
            //     target: "http://192.168.24.29:2001/",
            //     // 将主机标头的原点更改为目标URL
            //     changeOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         '/x1': '/' //路径重写 
            //     }
            // },
            // '^/api': {
            //     target: "http://192.168.3.134:8080",
            //     // 将主机标头的原点更改为目标URL
            //     changeOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         '/api': '/' //路径重写
            //     }
            // },
            '^/proxyUrl': {
                target: "http://192.168.3.180:8085",
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '/proxyUrl': '/yufan' //路径重写 
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap'
        }
    }
    // configureWebpack: (config) => {
    //     config.resolve.modules[0] = path.resolve(__dirname, 'node_modules');
    //     config.resolve.modules[1] = 'node_modules';
    // },
};