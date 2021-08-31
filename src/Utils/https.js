/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
// import QS from 'qs';
import {
    Toast
} from 'vant';
// import store from '../store/index'
import router from '../router'
import {Modal, notification} from 'ant-design-vue'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') { 
    // axios.defaults.baseURL = 'http://192.168.3.117:9999/';
     axios.defaults.baseURL ='';
}

// 请求超时时间
// axios.defaults.timeout = 30000;
// axios.defaults.withCredentials = true;//解决跨域
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Authorization'] = window.localStorage.getItem('user-token') == null ? '' :
//     "Bearer " + window.localStorage.getItem('user-token')


// 请求拦截器
axios.interceptors.request.use(
    config => {
        let token = window.localStorage.getItem('token')
        if (token) {
            config.headers[ 'X-Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
        }
        let relTenantIds = 0
        let tenantid = window.localStorage.getItem('userInfo')
        if (!tenantid) {
            relTenantIds = 0;
        } else {
            relTenantIds = JSON.parse(tenantid).relTenantIds
        }
        config.headers[ 'tenant_id' ] = relTenantIds
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            // console.log('.....')
            // if (error.message.includes("Token失效")) {
            //     Toast({                        
            //         message: '登录过期，请重新登录',                        
            //         duration: 1000,                        
            //         forbidClick: true                    
            //     });
            // }
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况    
    error => {
        console.log(error.response.data.message.includes("Token失效"), 'lanjie')
        if (error.response.data.message.includes("Token失效")) {
            notification.error({ message: '系统提示', description: 'Token失效,重新登录'})
            router.replace({                        
                path: '/login'
            });
            // switch (error.response.status) {                
            //     // 401: 未登录                
            //     // 未登录则跳转登录页面，并携带当前页面的路径                
            //     // 在登录成功后返回当前页面，这一步需要在登录页操作。                
            //     case 401:                    
            //         router.replace({                        
            //             path: '/login',                        
            //             query: { redirect: router.currentRoute.fullPath } 
            //         });
            //         break;
            //     // 403 token过期                
            //     // 登录过期对用户进行提示                
            //     // 清除本地token和清空vuex中token对象                
            //     // 跳转登录页面                
            //     case 403:                     
            //         Toast({                        
            //             message: '登录过期，请重新登录',                        
            //             duration: 1000,                        
            //             forbidClick: true                    
            //         });                    
            //         // 清除token                    
            //         localStorage.removeItem('token');                    
            //         store.commit('loginSuccess', null);                    
            //         // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            //         setTimeout(() => {                        
            //             router.replace({                            
            //                 path: '/login',                            
            //                 query: { 
            //                     redirect: router.currentRoute.fullPath 
            //                 }                        
            //             });                    
            //         }, 1000);                    
            //         break; 
            //     // 404请求不存在                
            //     case 404:                    
            //         Toast({                        
            //             message: '网络请求不存在',                        
            //             duration: 1500,                        
            //             forbidClick: true                    
            //         });                    
            //     break;                
            //     // 其他错误，直接抛出错误提示                
            //     default:                    
            //         Toast({                        
            //             message: error.response.data.message,                        
            //             duration: 1500,                        
            //             forbidClick: true                    
            //         });            
            // }            
            return Promise.reject(error.response);
        }
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params,
                headers: headers && headers.headers
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
export function getWenjian(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params,
                headers: headers && headers.headers,
                responseType: 'blob'
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
export function getTeshu(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.get(url, params, {
                headers: headers && headers.headers,
                responseType: 'blob'
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * delete方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function Delete(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
                params,
                headers: headers && headers.headers
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params, headers) {
    let reqParams = params

    //body 里如果没有 userID，自动添加userID，方便后端权限处理
    if (reqParams != null && reqParams.userID == null) {
        let user = window.localStorage.getItem('user')
        if (user != null) {
            reqParams = {
                ...params,
                userID: JSON.parse(user).id
            }
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(url, reqParams, {
                headers: headers && headers.headers

            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function put(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.put(url, params, {
                headers: headers && headers.headers

            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}