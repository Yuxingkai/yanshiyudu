import $ from 'jquery'

export const Post = async function (config) {
  config.type = 'post'
  config.contentType = 'application/json'
  config.data = JSON.stringify(config.data)
  // config.timeout = 8000
  // config.crossDomain = true
  $.ajax(config)
}

export const PostCopy = async function (config) {
  config.type = 'post'
  $.ajax(config)
}

export const Get = async function (config) {
  config.type = 'get'
  // config.crossDomain = true
  $.ajax(config)
}

export const Put = async function (config) {
  config.type = 'put'
  config.contentType = 'application/json'
  config.data = JSON.stringify(config.data)
  $.ajax(config)
}
export const ajaxSetup = async function (_this) {
  $.ajaxSetup({
    complete: (XMLHttpRequest, textStatus) => {
      // 通过XMLHttpRequest取得响应头，sessionstatus，
      console.log(XMLHttpRequest, '所有请求请求时获得的一些参数')
      console.log(textStatus, '所有请求请求时获得的一些参数')
      if (XMLHttpRequest.responseJSON.responseStatus.resultCode === 2) {
        _this.$router.push('/login')
      }
    }
  })
}

export let apiHeader = function () {

}
