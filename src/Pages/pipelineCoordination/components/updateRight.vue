<template>
<div class="right">
    <div class="updateRight">
        <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
        <div class="header">
            <span style="font-size: .36rem;margin-left: .4rem;">专题图层</span>
            <a-select
                style="width: 4.06rem;margin-left: .4rem;"
                placeholder="请选择"
                :showArrow="showArrow"
                optionFilterProp = "children"
                v-model="nowComponent"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in featureArr" :key="roleindex.toString()" :value="role.value">
                {{ role.title }}
                </a-select-option>
            </a-select>
        </div>
        <component style="width: 100%;height: calc(100% - 1rem);" :is="featureLay"></component>
    </div>
</div>
</template>

<script>
import paishuiguan from './right.vue'
import jianchajing from './jianchajing.vue'
import yushuikou from './yushuikou.vue'
import paishuikou from './paishuikou'
import jiancequexian from './jiancequexian'
import hunjiediaocha from './hunjiediaocha'
import liguan from './liguan'
import huafenchi from './huafenchi'
import {notification, message} from 'ant-design-vue'
    export default {
        data() {
            return {
                showArrow: false,
                featureArr: [
                    {
                        value: 0,
                        title: '检查井'
                    },
                    {
                        value: 1,
                        title: '雨水口'
                    },
                    {
                        value: 2,
                        title: '排水管'
                    },
                    {
                        value: 3,
                        title: '排水口'
                    },
                    {
                        value: 4,
                        title: '检测缺陷'
                    },
                    {
                        value: 5,
                        title: '混接列表'
                    },
                    {
                        value: 6,
                        title: '立管'
                    },
                    {
                        value: 7,
                        title: '化粪池'
                    }
                ],
                featureLayArr: ['jianchajing', 'yushuikou', 'paishuiguan', 'paishuikou', 'jiancequexian', 'hunjiediaocha', 'liguan', 'huafenchi'],
                nowComponent: 0,
                featureLay: 'jianchajing'
            }
        },
        components: {
            paishuiguan,
            jianchajing,
            yushuikou,
            paishuikou,
            jiancequexian,
            hunjiediaocha,
            liguan,
            huafenchi
        },
        watch: {
            nowComponent (newVal, oldVal) {
                this.featureLay = this.featureLayArr[newVal]
            }
        },
        methods: {
        },
        mounted () {
            this.$bus.off('writeFormInfo')
            this.$bus.on('writeFormInfo', (e) => {
                this.nowComponent = e.value
                notification.success({ message: '添加提示', description: `请编写${e.title}信息`})
                setTimeout(() => {
                    this.$bus.emit('chooseSecond')
                }, 500)
            })
            this.$bus.off('editManholeForm')
            this.$bus.on('editManholeForm', (atrObj1) => {
                this.nowComponent = 0
                setTimeout(() => {
                    this.$bus.emit('jianchajingForm', atrObj1)
                }, 500)
            })
            this.$bus.on('editPipeForm', (atrObj1) => {
                this.nowComponent = 2
                setTimeout(() => {
                    this.$bus.emit('paishuiguanForm', atrObj1)
                }, 500)
            })
            this.$bus.off('editCombForm')
            this.$bus.on('editCombForm', (atrObj1) => {
                this.nowComponent = 1
                setTimeout(() => {
                    this.$bus.emit('yushuikouForm', atrObj1)
                }, 500)
            })
            this.$bus.off('editOutfallForm')
            this.$bus.on('editOutfallForm', (atrObj1) => {
                this.nowComponent = 3
                setTimeout(() => {
                    this.$bus.emit('paishuikouForm', atrObj1)
                }, 500)
            })
            this.$bus.off('editseptictankForm')
            this.$bus.on('editseptictankForm', (atrObj1) => {
                this.nowComponent = 7
                setTimeout(() => {
                    this.$bus.emit('septictankForm', atrObj1)
                }, 500)
            })
            this.$bus.off('editriserForm')
            this.$bus.on('editriserForm', (atrObj1) => {
                this.nowComponent = 6
                setTimeout(() => {
                    this.$bus.emit('riserForm', atrObj1)
                }, 500)
            })
            // this.$bus.off('editHunjieForm')
            // this.$bus.on('editHunjieForm', (atrObj1) => {
            //     // item.facilityType
            //     let obj = JSON.parse(atrObj1)
            //     if (obj.facilityType == 2) {
            //         this.nowComponent = 0
            //         console.log('zouzheer')
            //     } else if (obj.facilityType == 3) {
            //         this.nowComponent = 1
            //         console.log('zouzheer111')
            //     }
            //     // setTimeout(() => {
            //     //     this.$bus.emit('paishuikouForm', atrObj1)
            //     // }, 500)
            // })
        },
    }
</script>

<style lang="scss" scoped>
.right {
      cursor: pointer;
      width: 446px;
      height: 98%;
      position: absolute;
      z-index: 10;
      right: 1.4rem;
      top: 0;
      display: flex;
      flex-direction: column;
      .updateRight {
            flex: 1;
            margin-top: .2rem;
            width: 446px;
            background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
            background-size: 100% 100%;
            position: relative;
            .lightClass {
                width: 100%;
                height: .4rem;
                position: absolute;
                left: 0;
                top: -.2rem;
            }
            .header {
                width: 100%;
                height: 1.14rem;
                text-align: left;
                line-height: 1.14rem;
            }
      }
}
</style>
<style lang="scss">
    .updateRight .ant-input, .updateRight .ant-select-selection--single {
        background: #205187!important;
        color: white;
        border: .02rem solid #03ace3;
        height: .5rem;
    }
    .updateRight .ant-select-selection__rendered {
        margin: 0;
        line-height: .52rem;
    }
</style>