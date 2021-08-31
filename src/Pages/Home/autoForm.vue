<template>
  <div class="autoForm" :class="inline?'inline':'block'">
    <el-form-item v-for="form in forms" :prop="form.key" :label="form.name" :key="form.key" :required="form.required">
      <el-input @focus="onInputFocus(1)" @blur="onInputBlur(1)" :prefix-icon='form.icon' v-model="formData[form.key]" @change="selectChange(form.key,formData[form.key])" :disabled="form.disabled" :style="'width:'+form.width" :placeholder="form.placeholder||'请输入'" v-if="form.type=='input'" @keyup.enter.native="handleLogin"></el-input>
      <el-select v-model="formData[form.key]" @change="selectChange(form.key,formData[form.key])" :disabled="form.disabled" :style="'width:'+form.width" :placeholder="form.placeholder||'全部'" v-if="form.type=='select'">
        <el-option v-for="item in form.option" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input  @focus="onInputFocus(2)" @blur="onInputBlur(2)" :prefix-icon='form.icon' type="password" v-model="formData[form.key]" :disabled="form.disabled" :style="'width:'+form.width" :placeholder="form.placeholder||'密码'" v-if="form.type=='password'" :show-password="false" @keyup.enter.native="handleLogin">
      </el-input>
      <!-- 密码正则   /^.*(?=.{6,20})(?=.*[A-Z])(([a-zA-Z\d])|([!@#$%^&*?])).*$/ -->
      <!-- <el-area :val="formData[form.key]" @change="changeArea" v-if="form.type=='cascader'&&form.key=='area'"></el-area> -->
      <el-input type="textarea" v-model="formData[form.key]" :disabled="form.disabled" :style="'width:'+form.width" :placeholder="form.placeholder||'请输入'" v-if="form.type=='textarea'" @keyup.enter.native="handleLogin">
      </el-input>
      <el-select v-model="formData[form.key]" :disabled="form.disabled" multiple :style="'width:'+form.width" :placeholder="form.placeholder||'全部'" v-if="form.type=='multiSelect'">
        <el-option v-for="item in form.option" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-checkbox v-model="formData[form.key]" v-if="form.type=='checkBox'" :label="form.text"></el-checkbox>
      <!-- 验证码 -->
      <div class="line_border line_border1" v-if='form.key == "username"' :class="{'bordered': ubordered,'line_border2': ubordered}">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="line_border line_border1" v-if='form.key == "password"' :class="{'bordered': pbordered,'line_border3': pbordered}">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </el-form-item>

    <!-- <el-form-item>
      <el-button v-if="search" type="primary" @click="submit">'登录'</el-button>
    </el-form-item> -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'autoform',
  data () {
    return {
      authCodeUrl: '',
      searchTxt: '',
      tslAuthCode: '',
      currentGroup: '',
      fileList: [],
      ubordered: false,//是否强调底边框
      pbordered: false,//是否强调底边框
    }
  },
  mounted () {
    // this.forms.map(item => {
    //   if (item.type === 'authCode') {
    //     this.getAuthCode()
    //   }
    // })
    // this.$bus.on('refreshCodeImg', (e) => {
    //   this.getAuthCode()
    // })
  },
  destroyed () {
    this.$bus.off('refreshCodeImg')
  },
  components: {
  },
  props: ['forms', 'button', 'formData', 'inline', 'search', 'submitText'],
  methods: {
    onInputFocus (i) {
       //聚焦改变类名
       if(i == 1) {
         this.ubordered = true
       }
       if(i == 2) {
         this.pbordered = true
       }
    },
    onInputBlur(i) {
       if(i == 1) {
         this.ubordered = false
       }
       if(i == 2) {
         this.pbordered = false
       }
    },
    // 回车触发
    handleLogin () {
      this.$bus.emit('keyuEenter')
    },
    changeArea (val) {
      this.formData.area = val
    },
    selectChange (key, val) {
      this.formData[key] = val
      this.$forceUpdate()
    },
    submit () {
      this.$emit('search')
    },
    // 调用验证码
    // getAuthCode () {
    //   $.ajax({
    //     type: 'get',
    //     dataType: 'json',
    //     headers: {
    //       'Authorization': 'Basic'
    //     },
    //     url: this.apiNames['验证码'],
    //     data: {},
    //     success: (res) => {
    //       if (res.respCode === '0000') {
    //         this.authCodeUrl = res.data.base64Image
    //         this.tslAuthCode = res.data.authCode
    //         window.localStorage.setItem('tslAuthCode', res.data.authCode)
    //       } else {
    //         this.$message.error('验证码获取失败,请点击重试')
    //       }
    //     }
    //   })
    // }
  }
}
</script>
<style scoped>
.authCodeImg {
  cursor: pointer;
}
.imgBox {
  /* max-height: 100%; */
  float: left;
  /* float: left; */
  position: relative;
}
.imgBox img {
  /* float: left; */
  margin-left: 15px;
  margin-top: 8px;
  max-height: 40px;
  /* margin-top: 10px; */
}
.imgBox .refresh {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);
  color: #000;
}

/deep/ .el-input__inner {
  background: transparent !important;
  border: none!important;
  height: 1.8rem!important;
  padding-left: 1.2rem!important;
  caret-color: #00F9FC!important;
  color:#00F9FC!important;
  font-size: 0.42rem!important;
  /* color: #606266; */
}
/deep/ .el-form-item__content {
  height: 1.8rem!important;
  margin: 0 1.8rem!important;
}
/deep/ .el-input__icon {
  color: #00F9FC !important;
  line-height: 1.8rem !important;
}
/deep/ .el-form-item__error {
  /* color: red !important; */
  opacity: 1 !important;
  left: 2.8rem !important;
}
/deep/ .el-input__prefix {
  font-size: 0.52rem !important;
}
.autoForm .line_border {
    width: 100%;
    height: 2px !important;
    background: -webkit-linear-gradient(
      left,
      rgba(136, 243, 226, 0) -4%,
      rgba(108, 235, 210, 0.31) 50%,
      rgba(96, 231, 203, 0.37) 80%,
      rgba(80, 227, 194, 0) 100%
    );
}
.line_border1 .left,.line_border1 .right ,.line_border3 .left,.line_border3 .right{
        background: -webkit-linear-gradient(
      left,
      rgba(136, 243, 226, 0) -4%,
      rgba(108, 235, 210, 1) 50%,
      rgba(96, 231, 203, 0.57) 80%,
      rgba(80, 227, 194, 0) 100%
    );
        transition: all 1s ease;
        width: 0;
        height: 0;
        position: absolute;
        z-index: 1;
}

.line_border1 .left{
        left: 50%;
        height: 2px;
        bottom: 0;
    }
 .line_border1 .right{
        left: 50%;
        height: 2px;
        bottom: 0;
    }
 .line_border1:hover::before,
.line_border1:hover::after{
        left: 0;
        width: 100%;
        height: 2px;
    }

.line_border2 .right{
        left: 0;
        width: 100% !important;
        height: 2px;
}
.line_border2 .left{
        left: 0 !important;
        width: 100% !important;
        height: 2px !important;
}
.line_border3 .right{
        left: 0;
        width: 100% !important;
        height: 2px;
}
.line_border3 .left{
        left: 0;
        width: 100% !important;
        height: 2px;
}
.autoForm .bordered {
    /* transition: all 1s ease;
    width: 100%;
    height: 2px !important; */
    /* background: -webkit-linear-gradient(
      left,
      rgba(136, 243, 226, 0) -4%,
      rgba(108, 235, 210, 1) 50%,
      rgba(96, 231, 203, 0.57) 80%,
      rgba(80, 227, 194, 0) 100%
    ); */
}


/deep/ .el-input__inner::placeholder {
  color: rgba(108, 235, 210, 0.4) !important;
  opacity: 1 !important;
  font-size: 0.42rem!important;
}
.autoForm .el-form-item {
  margin-bottom: 0.4rem;
  font-weight: 400;
}
.autoForm .el-form-item .el-button:first-child {
  margin-left: 10px;
}

.autoForm .el-form-item .tips {
  color: #999;
}
.autoForm .block {
  padding-right: 15px;
}
.autoForm .block .el-input,
.autoForm .block .el-select {
  width: 100%;
}
.autoForm .inline {
  display: inline-block;
  vertical-align: middle;
}
.autoForm .inline {
  display: inline-block;
  vertical-align: middle;
}
.autoForm .inline .el-input,
.autoForm .inline .el-select {
  width: 215px;
}
.autoForm .inline {
  display: inline-block;
  vertical-align: middle;
}
.autoForm .inline .el-input,
.autoForm .inline .el-select {
  width: 215px;
}
.autoForm .inline .el-input,
.autoForm .inline .el-select {
  width: 215px;
}
.el-select {
  width: 100% !important;
}

.el-select .el-input {
  width: 100% !important;
}
</style>
