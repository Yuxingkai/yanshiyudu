<template>
  <div class="charts">
      <div class="title">
          排水灌渠
      </div>
      <div class="title_bac"/>
      <div class="closeButton" @click="closePopShow">
        X
      </div>
      <div style="margin-left: .5rem;margin-top: .3rem;">
        <div class="module1">
            <div class="activeClass">单点分析</div>
            <div>|</div>
            <div>对比分析</div>
        </div>
        <div>
            <a-form-model :model="queryParams" :label-col="labelCol1" :wrapper-col="wrapperCol1" ref="ruleForm">
                <div style="display: flex;width: 100%;">
                    <a-form-model-item label="项目" prop="manjing" style="width: 15%;">
                        <a-select
                            style="width: 2.3rem;margin-right: .3rem;"
                            allowClear
                            show-search
                            :filter-option="filterOption"
                            @change="handleChangeXM"
                            placeholder="项目名称"
                            v-model="queryParams.proId"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in xmNameArr" :key="roleindex.toString()" :value="role.id">
                                {{ role.xmmc }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item label="区域" style="width: 15%;">
                        <!-- <a-select v-model="queryParams.districtId" placeholder="">
                        <a-select-option v-for="(role,roleindex) in areaArr" :key="roleindex.toString()" :value="role.value">
                            {{ role.title }}
                        </a-select-option>
                        </a-select> -->
                        <a-cascader
                            :defaultValue="defaultValue"
                            style="width: 2.76rem;margin-right: .3rem;color: white;"
                            :options="areaArr"
                            :load-data="loadData"
                            :placeholder="placeholder"
                            change-on-select
                            @change="onChangeArea"
                        />
                    </a-form-model-item>
                    <!-- <a-form-model-item label="所属工程" style="width: 15%;">
                        <a-select v-model="queryParams.hunjieclass" placeholder="">
                        <a-select-option v-for="(role,roleindex) in hunjieclassArr" :key="roleindex.toString()" :value="role.value">
                            {{ role.title }}
                        </a-select-option>
                        </a-select>
                    </a-form-model-item> -->
                    <a-form-model-item label="管道状况" prop="manjing" style="width: 15%;">
                        <a-select allowClear v-model="queryParams.status" placeholder="">
                            <a-select-option v-for="(role,roleindex) in pipeStatus" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item label="管道材质" style="width: 15%;">
                        <a-select allowClear v-model="queryParams.material" placeholder="">
                            <a-select-option v-for="(role,roleindex) in pipeMaterial" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <!-- <a-form-model-item label="是否满管" style="width: 15%;">
                        <a-select v-model="queryParams.hunjieclass" placeholder="">
                        <a-select-option v-for="(role,roleindex) in hunjieclassArr" :key="roleindex.toString()" :value="role.value">
                            {{ role.title }}
                        </a-select-option>
                        </a-select>
                    </a-form-model-item> -->
                    <a-form-model-item label="管网编号" style="width: 15%;">
                        <a-input v-model="queryParams.pipecode" />
                    </a-form-model-item>
                </div>
                <div style="display: flex;width: 100%;">
                    <a-form-model-item label="所属路段" style="width: 15%;">
                        <a-select mode="multiple" v-model="queryParams.roadName" placeholder="" style="width: 2.76rem;">
                        <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value" :title="role.title">
                            {{ role.title }}
                        </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <!-- <a-form-model-item label="管网调查" prop="manjing" style="width: 15%;">
                        <a-input v-model="queryParams.manjing" />
                    </a-form-model-item> -->
                    <a-form-model-item label="管龄范围" style="width: 15%;">
                        <a-select allowClear v-model="queryParams.pipeyear" placeholder="">
                        <a-select-option v-for="(role,roleindex) in pipeAge" :key="roleindex.toString()" :value="role.value">
                            {{ role.title }}
                        </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item label="管径范围" style="width: 15%;">
                        <div style="display: flex;margin-top: .15rem;">
                            <a-input v-model="queryParams.shapeDataMin" style="margin-right: .2rem;" />
                            <a-input v-model="queryParams.shapeDataMax" />
                        </div>
                    </a-form-model-item>
                    <!-- <a-form-model-item label="更新时间" style="margin-left: -1.6rem">
                        <a-locale-provider :locale="zhCN">
                            <a-range-picker>
                            <template slot="renderExtraFooter">
                                extra footer
                            </template>
                            </a-range-picker>
                        </a-locale-provider>
                    </a-form-model-item> -->
                    <div @click="searchChartsDataByIndex" style="cursor: pointer;width: .82rem;height: .42rem;background: #2781b4;border-radius: .1rem;color: white;text-align: center;line-height: .42rem;margin: .2rem 0 0 .4rem;">查询</div>
                </div>
            </a-form-model>
        </div>
        <div class="module2">
            <div class="module2_head">
                <div :class="nowIndex == 1 ? 'activeClass' : ''" @click="choose(1)">排水类型和管径</div>
                <div>|</div>
                <div :class="nowIndex == 2 ? 'activeClass' : ''" @click="choose(2)">管材和管龄</div>
                <div>|</div>
                <div :class="nowIndex == 3 ? 'activeClass' : ''" @click="choose(3)">缺陷统计</div>
                <div class="print">
                    打印
                </div>
                <div class="sanjiaoxing" @click="showOrHide">
                    <a-icon :type="chooseType" style="color: #2781B4;"/>
                </div>
            </div>
            <div v-if="M1 && nowIndex !==3" style="display: flex;height: 5.72rem;">
                <div v-show="nowIndex == 1" style="width: 100%;height: 100%;display: flex;">
                    <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                        <echart ref="charts1" config="排水类型" width="100%"></echart>
                        <div style="position: absolute;right: .2rem;top: .2rem;">
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>排水管总长</div>
                                <div>{{ allLength.toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #66e6fb;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>{{ pType1[0].name }}</div>
                                <div>{{ pType1[0].value.toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #df74a0;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>{{ pType1[1].name }}</div>
                                <div>{{ pType1[1].value.toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #ecc92d;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>{{ pType1[2].name }}</div>
                                <div>{{ pType1[2].value.toFixed(2) }}km</div>
                            </div>
                        </div>
                    </div>
                    <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                        <echart ref="charts2" config="雷达图" width="100%"></echart>
                        <div style="position: absolute;right: .2rem;top: .2rem;">
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>Φ150 - Φ530</div>
                                <div>{{ guanJin[0].toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>Φ600 - Φ1000</div>
                                <div>{{ guanJin[1].toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>Φ1050 - Φ1400</div>
                                <div>{{ guanJin[2].toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>≥Φ1500</div>
                                <div>{{ guanJin[3].toFixed(2) }}km</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="nowIndex == 2" style="width: 100%;height: 100%;display: flex;">
                    <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                        <echart ref="chartGuanCai" config="管材类型" width="100%"></echart>
                    </div>
                    <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                        <echart ref="charts2Rader" config="雷达图年龄" width="100%"></echart>
                        <div style="position: absolute;right: .2rem;top: .2rem;">
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>≤3</div>
                                <div>{{ hejiData[1].toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>3 - 10</div>
                                <div>{{ hejiData[2].toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>10 - 30</div>
                                <div>{{ hejiData[3].toFixed(2) }}km</div>
                            </div>
                            <div style="width: 2.7rem; height:1rem;border-left: .1rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                                <div>≥30</div>
                                <div>{{ hejiData[4].toFixed(2) }}km</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="nowIndex == 3" style="width: 100%;height: 100%;display: flex;">
                <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                    <div style="width: 100%;text-align: center;position: absolute;">隐患灌渠</div>
                    <echart style="margin-top:.5rem;" ref="charts31" config="隐患灌渠" width="100%"></echart>
                    <div style="position: absolute;right: .2rem;top: 1rem;">
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #5cacff;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">隐患管总长</div>
                            <div style="margin-top: -.1rem;">{{ parseInt(pipeQxLengthByCateg[1] + pipeQxLengthByCateg[2] + pipeQxLengthByCateg[3]+ pipeQxLengthByCateg[4]) }}km</div>
                        </div>
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #66e6fb;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">隐患雨水管</div>
                            <div style="margin-top: -.1rem;">{{ pipeQxLengthByCateg[1] }}km</div>
                        </div>
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #df74a0;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">隐患污水管</div>
                            <div style="margin-top: -.1rem;">{{ pipeQxLengthByCateg[2] }}km</div>
                        </div>
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #ecc92d;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">隐患混合管</div>
                            <div style="margin-top: -.1rem;">{{ pipeQxLengthByCateg[3] }}km</div>
                        </div>
                    </div>
                </div>
                <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                    <div style="width: 100%;text-align: center;">综合统计</div>
                    <echart style="margin-left: 20%;" ref="charts32" config="综合统计雷达图" width="80%" height="80%"></echart>
                </div>
                <div style="width: 430px;height: 248px;background: #002E74;border: 1px solid #043870;border-radius: 5px;margin: .3rem 0 0 .5rem;position: relative;">
                    <div style="width: 100%;text-align: center;">隐患点统计</div>
                    <echart ref="charts33" config="隐患点统计" width="100%"></echart>
                    <div style="position: absolute;right: .2rem;top: 1.2rem;">
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #EFE291;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">一级隐患点</div>
                            <div style="margin-top: -.1rem;">{{ defectgraCount.defectgraCount01 }}个</div>
                        </div>
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #EBA840;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">二级隐患点</div>
                            <div style="margin-top: -.1rem;">{{ defectgraCount.defectgraCount02 }}个</div>
                        </div>
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #E56F00;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">三级隐患点</div>
                            <div style="margin-top: -.1rem;">{{ defectgraCount.defectgraCount03 }}个</div>
                        </div>
                        <div style="text-align: left;width: 2.7rem; height:.8rem;border-left: .05rem solid #C61C1A;background: #1e5eab;padding-left: .3rem;margin-bottom: .1rem;">
                            <div style="transform: scale(.8);margin-left: -.25rem;">四级隐患点</div>
                            <div style="margin-top: -.1rem;">{{ defectgraCount.defectgraCount04 }}个</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="nowIndex == 3" class="module2">
            <div class="module2_head">
                <div :class="nowIndex2 == 1 ? 'activeClass' : ''" @click="choose2(1)">缺陷等级</div>
                <div>|</div>
                <div :class="nowIndex2 == 2 ? 'activeClass' : ''" @click="choose2(2)">缺陷类别</div>
                <div class="print">
                    导出
                </div>
                <div class="sanjiaoxing" @click="showOrHide1">
                    <a-icon :type="chooseType1" style="color: #2781B4;"/>
                </div>
            </div>
            <div v-if="M2">
                <div v-if="nowIndex2 == 1" class="tableClass">
                    <div class="tableClass_header">
                        <div class="tableClass_header1">区域名称</div>
                        <div class="tableClass_header2">道路名称</div>
                        <div class="tableClass_header3">{{ headerParam[2] }}</div>
                        <div class="tableClass_header4">
                            <div class="tableClass_header4_t">
                                管道{{ headerParam[0] }}统计({{ headerParam[1] }})
                            </div>
                            <div class="tableClass_header4_b">
                                <div class="tableClass_header4_b1">隐患管总长</div>
                                <div class="tableClass_header4_b1">隐患点总个数</div>
                                <div class="tableClass_header4_b2">
                                    <div>一级</div>
                                    <div>缺陷个数</div>
                                </div>
                                <div class="tableClass_header4_b3">
                                    <div>二级</div>
                                    <div>缺陷个数</div>
                                </div>
                                <div class="tableClass_header4_b4">
                                    <div>三级</div>
                                    <div>缺陷个数</div>
                                </div>
                                <div class="tableClass_header4_b5">
                                    <div>四级</div>
                                    <div>缺陷个数</div>
                                </div>
                            </div>
                        </div>
                        <div class="tableClass_header5">
                            <div class="tableClass_header5_t">
                                窖井数量
                            </div>
                            <div class="tableClass_header5_b">
                                （座）
                            </div>
                        </div>
                        <div class="tableClass_header6">
                            <div class="tableClass_header6_t">
                                雨水口数量
                            </div>
                            <div class="tableClass_header6_b">
                                （座）
                            </div>
                        </div>
                        <div class="tableClass_header7">
                            <div class="tableClass_header7_t">
                                连管长度
                            </div>
                            <div class="tableClass_header7_b">
                                （米）
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="content1">合计</div>
                        <div class="content2">合计</div>
                        <div class="content3">合计</div>
                        <div class="content4">{{ parseInt(hejiData1[0]) }}</div>
                        <div class="content4">{{ hejiData1[1] }}</div>
                        <div class="content5">{{ hejiData1[2] }}</div>
                        <div class="content6">{{ hejiData1[3] }}</div>
                        <div class="content7">{{ hejiData1[4] }}</div>
                        <div class="content8">{{ hejiData1[5] }}</div>
                        <div class="content9">0</div>
                        <div class="content10">0</div>
                        <div class="content11">0</div>
                    </div>
                    <div class="content" v-for="(item, index) in listData1" :key="index">
                        <div class="content1">{{ item.districtName }}</div>
                        <div class="content2">{{ item.roadName }}</div>
                        <div class="content3 hideTextAndEllipsis" :title="item.pipe_categ">{{ item.pipe_categ }}</div>
                        <div class="content4">{{ parseInt(item.length) }}</div>
                        <div class="content5">{{ item.count }}</div>
                        <div class="content6">{{ item.deGra1 }}</div>
                        <div class="content7">{{ item.deGra2 }}</div>
                        <div class="content8">{{ item.deGra3 }}</div>
                        <div class="content8">{{ item.deGra4 }}</div>
                        <div class="content9">0</div>
                        <div class="content10">0</div>
                        <div class="content11">0</div>
                    </div>
                </div>
                <div v-else class="infoMenu">
                    <div class="infoMenu_box_header">
                        灌渠缺陷汇总表
                    </div>
                    <div class="infoMenu_title">
                        <div class="infoMenu_title_di" style="border-right: .02rem solid #11568B;">
                        </div>
                        <div style="border-right: .02rem solid #11568B;">
                            <div style="border-bottom: .02rem solid #11568B;">1级（轻微）</div>
                            <div>缺陷个数</div>
                        </div>
                        <div style="border-right: .02rem solid #11568B;">
                            <div style="border-bottom: .02rem solid #11568B;">2级（中等）</div>
                            <div>缺陷个数</div>
                        </div>
                        <div style="border-right: .02rem solid #11568B;">
                            <div style="border-bottom: .02rem solid #11568B;">3级（严重）</div>
                            <div>缺陷个数</div>
                        </div>
                        <div style="border-right: .02rem solid #11568B;">
                            <div style="border-bottom: .02rem solid #11568B;">4级（重大）</div>
                            <div>缺陷个数</div>
                        </div>
                        <div style="line-height: .96rem;">
                            合计
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="nowIndex != 3" class="module2">
            <div class="module2_head">
                <div :class="nowIndex1 == 1 ? 'activeClass' : ''" @click="choose1(1)">统计表</div>
                <div>|</div>
                <div :class="nowIndex1 == 2 ? 'activeClass' : ''" @click="choose1(2)">详情列表</div>
                <div class="print">
                    导出
                </div>
                <div class="sanjiaoxing" @click="showOrHide1">
                    <a-icon :type="chooseType1" style="color: #2781B4;"/>
                </div>
            </div>
            <div v-if="M2">
                <div v-if="nowIndex1 == 1" class="tableClass">
                    <div class="tableClass_header">
                        <div class="tableClass_header1">区域名称</div>
                        <div class="tableClass_header2">道路名称</div>
                        <div class="tableClass_header3">{{ headerParam[2] }}</div>
                        <div class="tableClass_header4">
                            <div class="tableClass_header4_t">
                                管道{{ headerParam[0] }}统计({{ headerParam[1] }})
                            </div>
                            <div class="tableClass_header4_b">
                                <div class="tableClass_header4_b1">总长</div>
                                <div class="tableClass_header4_b2">
                                    <div>{{ headerParam[3] }}</div>
                                    <div>{{ headerParam[7] }}</div>
                                </div>
                                <div class="tableClass_header4_b3">
                                    <div>{{ headerParam[4] }}</div>
                                    <div>{{ headerParam[8] }}</div>
                                </div>
                                <div class="tableClass_header4_b4">
                                    <div>{{ headerParam[5] }}</div>
                                    <div>{{ headerParam[9] }}</div>
                                </div>
                                <div class="tableClass_header4_b5">
                                    <div>{{ headerParam[6] }}</div>
                                    <div>{{ headerParam[10] }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="tableClass_header5">
                            <div class="tableClass_header5_t">
                                窖井数量
                            </div>
                            <div class="tableClass_header5_b">
                                （座）
                            </div>
                        </div>
                        <div class="tableClass_header6">
                            <div class="tableClass_header6_t">
                                雨水口数量
                            </div>
                            <div class="tableClass_header6_b">
                                （座）
                            </div>
                        </div>
                        <div class="tableClass_header7">
                            <div class="tableClass_header7_t">
                                连管长度
                            </div>
                            <div class="tableClass_header7_b">
                                （米）
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="content1">合计</div>
                        <div class="content2">合计</div>
                        <div class="content3">合计</div>
                        <div class="content4">{{ hejiData[0].toFixed(2) }}</div>
                        <div class="content5">{{ hejiData[1].toFixed(2) }}</div>
                        <div class="content6">{{ hejiData[2].toFixed(2) }}</div>
                        <div class="content7">{{ hejiData[3].toFixed(2) }}</div>
                        <div class="content8">{{ hejiData[4].toFixed(2) }}</div>
                        <div class="content9">0</div>
                        <div class="content10">0</div>
                        <div class="content11">0</div>
                    </div>
                    <div class="content" v-for="(item, index) in listData" :key="index">
                        <div class="content1">{{ item.districtName }}</div>
                        <div class="content2">{{ item.roadName }}</div>
                        <div class="content3 hideTextAndEllipsis" :title="item.type">{{ item.type }}</div>
                        <div class="content4">{{ item.alllength.toFixed(2) }}</div>
                        <div class="content5">{{ item.num1.toFixed(2) }}</div>
                        <div class="content6">{{ item.num2.toFixed(2) }}</div>
                        <div class="content7">{{ item.num3.toFixed(2) }}</div>
                        <div class="content8">{{ item.num4.toFixed(2) }}</div>
                        <div class="content9">0</div>
                        <div class="content10">0</div>
                        <div class="content11">0</div>
                    </div>
                </div>
                <div v-else class="infoMenu">
                    <div class="infoMenu_header">
                        <div class="infoMenu_header1">
                            管网编号
                        </div>
                        <div class="infoMenu_header1">
                            管材
                        </div>
                        <div class="infoMenu_header1">
                            管径
                        </div>
                        <div class="infoMenu_header1">
                            管龄
                        </div>
                        <div class="infoMenu_header1">
                            高程
                        </div>
                        <div class="infoMenu_header1">
                            管长
                        </div>
                        <div class="infoMenu_header1">
                            状态
                        </div>
                        <div class="infoMenu_header1">
                            所属道路
                        </div>
                        <div class="infoMenu_header1">
                            所属区域
                        </div>
                        <div class="infoMenu_header1">
                            所属工程
                        </div>
                        <div class="infoMenu_header1">
                            更新时间
                        </div>
                        <div class="infoMenu_header12">
                            消毒药剂（HCI）
                        </div>
                    </div>
                    <div class="infoMenu_content" v-for="(item, index) in recordData" :key="index">
                        <div class="infoMenu_content1">{{ item.pipecode }}</div>
                        <div class="infoMenu_content1">{{ item.material_dictText }}</div>
                        <div class="infoMenu_content1">{{ item.shapeData }}</div>
                        <div class="infoMenu_content1">{{ item.pipeAgestr }}</div>
                        <div class="infoMenu_content1"></div>
                        <div class="infoMenu_content1">{{ item.pipeLengt }}</div>
                        <div class="infoMenu_content1">{{ item.status_dictText }}</div>
                        <div class="infoMenu_content1">{{ item.roadName }}</div>
                        <div class="infoMenu_content1">{{ item.roaddistrictName }}</div>
                        <div class="infoMenu_content1"></div>
                        <div class="infoMenu_content1">{{ item.updateTime }}</div>
                        <div class="infoMenu_content12"></div>
                    </div>
                    <div style="margin-top: .5rem;margin-left: 10rem;">
                        <a-locale-provider :locale="zhCN">
                            <a-pagination @change="pageChange" :defaultPageSize="defaultPageSize" size="small" :total="totalNum" :show-total="total => `共${total}条`" show-quick-jumper >
                                <template slot="buildOptionText" slot-scope="props">
                                    <span>{{ props.value }}条/页</span>
                                </template>
                            </a-pagination>
                        </a-locale-provider>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../Utils/config'
import indexVue from '../Pages/Home/index.vue';
import {notification} from 'ant-design-vue'
export default {
    data() {
        return {
            defaultValue: [],
            placeholder: '',
            zhCN,
            queryParams: {
                districtId: '',
                districtName: '',
                proId: '',
                roadName: [],
                pipeyear: '',
                material: '',
                status: '',
                pipecode: '',
                shapeDataMin: '',
                shapeDataMax: ''
            },
            pipeMaterial: [],
            pipeStatus: [],
            areaArr: [
                {
                    value: 360731,
                    title: '于都县'
                }
            ],
            pipeAge: [
                {
                    value: 1,
                    title: '<=3'
                },
                {
                    value: 2,
                    title: '3-10'
                },
                {
                    value: 3,
                    title: '10-30'
                },
                {
                    value: 4,
                    title: '>=30'
                }
            ],
            roadArr: [],
            labelCol1: { span: 12 },
            wrapperCol1: { span: 12 },
            nowIndex: 1,
            nowIndex1: 1,
            nowIndex2: 1,
            chooseType: 'caret-down',
            chooseType1: 'caret-down',
            showOrHideBool: false,
            showOrHideBool1: false,
            defaultPageSize: 5,
            totalNum: 10,
            M2: true,
            M1: true,
            headerParam: ['长度', '米', '属性', '小型', '中型', '大型', '特大型', 'Φ150 — Φ530', 'Φ600 — Φ1000', 'Φ1050 — Φ1400', '≥Φ1500'],
            allLength: 0,
            pType1: [
                {
                    name: '雨水',
                    value: 0
                },
                {
                    name: '污水',
                    value: 0
                },
                {
                    name: '合流',
                    value: 0
                }
            ],
            guancaiData: [],
            guanJin: [
                0,0,0,0
            ],
            alllocationcodes: [],
            listData: [
            ],
            hejiData: [0, 0, 0, 0, 0, 0, 0, 0],
            guancaiType: {
                '1': '',
                '2': '',
                '3': '',
                '4': '',
                '5': '',
                '6': '',
                '7': '',
                '8': '',
                '9': '',
                '10': '',
                '11': '',
                '12': '',
                '13': ''
            },
            pageNo: 1,
            recordData: [],
            pipeQxLengthByCateg: {1: 0, 2: 0, 3: 0, 4: 0},
            listData1: [],
            defectTypeCount: null,
            defectgraCount: {
                defectgraCount01: 0,
                defectgraCount02: 0,
                defectgraCount03: 0,
                defectgraCount04: 0
            },
            pipeQxGroupRoadCateGra: null,
            defectTypeGra: null,
            hejiData1: [0,0,0,0,0,0,],
            xmNameArr: []
        }
    },
    methods: {
        filterOption (input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },
        handleChangeXM (e) {
            let one = this.xmNameArr.filter((item) => {
                return item.id == e
            })[0]
            this.queryParams.proId = one.id
            this.queryParams.districtId = one.district_id
            this.queryParams.districtName = one.district_name
            this.placeholder = one.district_name
            this.queryBydistrictId(one.district_id)
        },
        getXMname () {
            this.$get(apiNames['获取项目名称']).then(res => {
                if (res.code == 200 && res.result.length !== 0) {
                    this.xmNameArr = res.result
                    this.queryParams.proId = res.result[0].id
                    this.queryParams.districtId = res.result[0].district_id
                    this.queryParams.districtName = res.result[0].district_name
                    this.placeholder = res.result[0].district_name
                    this.queryBydistrictId(res.result[0].district_id)
                }
            })
        },
        onChangeArea(value, selectedOptions) {
            this.queryParams.districtName = ''
            this.queryParams.districtId = value.join(',')
            this.placeholder = ''
            for (let i = 0; i < selectedOptions.length; i++) {
                this.queryParams.districtName += selectedOptions[i].label + '/'
            }
            this.queryBydistrictId(this.queryParams.districtId)
        },
        loadData(selectedOptions) {
            const targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;
            if (targetOption.level == 1) {
                this.getCityInfo(targetOption.value, targetOption)
            } else if (targetOption.level == 2) {
                this.getDistrictInfo(targetOption.value, targetOption)
            }
        },
        getProvinceInfo () {
            this.$get(apiNames['获取省信息']).then(res => {
                for (let i in res) {
                    let o = {
                        value: '',
                        label: '',
                        isLeaf: false,
                        level: 1
                    };
                    o.value = i;
                    o.label = res[i];
                    this.areaArr.push(o)
                }
            })
        },
        getCityInfo (parentNo, targetOption) {
            targetOption.loading = false;
            this.$get(apiNames['获取市信息'], {parentNo: parentNo}).then(res => {
                targetOption.children = []
                for (let i in res) {
                    let o = {
                        value: '',
                        label: '',
                        isLeaf: false,
                        level: 2
                    };
                    o.value = i;
                    o.label = res[i];
                    targetOption.children.push(o)
                }
                this.areaArr = [...this.areaArr];
            })
        },
        getDistrictInfo (parentNo, targetOption) {
            targetOption.loading = false;
            this.$get(apiNames['获取区信息'], {parentNo: parentNo}).then(res => {
                targetOption.children = []
                for (let i in res) {
                    let o = {
                        value: '',
                        label: '',
                        isLeaf: true,
                        level: 3
                    };
                    o.value = i;
                    o.label = res[i];
                    targetOption.children.push(o)
                }
                this.areaArr = [...this.areaArr];
            })
        },
        choose (index) {
            this.nowIndex = index
            this.listData = []
            if (this.nowIndex == 2) {
                this.headerParam = ['年龄', '年', '管材', '小龄', '中龄', '大龄', '特大龄', '<=3', '3 — 10', '10 — 30', '>=30']
                this.searchChartsData2()
            } else if (this.nowIndex == 1) {
                this.headerParam = ['长度', '米', '属性', '小型', '中型', '大型', '特大型', 'Φ150 — Φ530', 'Φ600 — Φ1000', 'Φ1050 — Φ1400', '≥Φ1500']
                this.searchChartsData1()
            } else if (this.nowIndex == 3) {
                this.searchChartsData3()
            }
        },
        choose1 (index) {
            this.nowIndex1 = index
            if (this.nowIndex1 == 2) {
                this.pageNo = 1
                this.getPagePipeAnalysis()
            }
        },
        choose2 (index) {
            this.nowIndex2 = index
        },
        showOrHide () {
            this.showOrHideBool = !this.showOrHideBool
            if (this.showOrHideBool) {
                this.chooseType = 'caret-left'
                this.M1 = false
            } else {
                this.chooseType = 'caret-down'
                this.M1 = true
            }
        },
        showOrHide1 () {
            this.showOrHideBool1 = !this.showOrHideBool1
            if (this.showOrHideBool1) {
                this.chooseType1 = 'caret-left'
                this.M2 = false
            } else {
                this.chooseType1 = 'caret-down'
                this.M2 = true
            }
        },
        closePopShow () {
            this.$emit('close')
        },
        showSizeChange (current, size) {
            console.log(current, size)
        },
        pageChange (pageNum) {
            this.pageNo = pageNum
            this.getPagePipeAnalysis()
        },
        queryBydistrictId (disId) {
            this.$get(apiNames['获取所属道路表'], {districtId: disId}).then(res => {
                if (res.code == 200) {
                    res.result.forEach(element => {
                        this.roadArr.push({
                            title: element.locationname,
                            value: element.locationcode
                        })
                        this.alllocationcodes.push(element.locationcode)
                    });
                    this.searchChartsDataByIndex()
                } else {
                    this.roadArr = []
                }
            })
        },
        searchChartsDataByIndex () {
            this.listData = []
            if (this.nowIndex == 1) {
                this.searchChartsData1()
            } else if (this.nowIndex == 2) {
                this.searchChartsData2()
            } else {
                this.searchChartsData3()
            }
            if ( this.nowIndex1 == 2) {
                this.pageNo = 1
                this.getPagePipeAnalysis()
            }
        },
        getPagePipeAnalysis () {
            let params = {
                districtId: this.queryParams.districtId,
                locationcodelist: this.queryParams.roadName.join(','),
                material: this.queryParams.material,
                status: this.queryParams.status,
                pipecode: this.queryParams.pipecode,
                shapeDataMin: this.queryParams.shapeDataMin,
                shapeDataMax: this.queryParams.shapeDataMax,
                pipeyear: this.queryParams.pipeyear,
                pageNo: this.pageNo,
                pageSize: 10
            }
            this.$post(apiNames['查询管道分析'], params).then(res => {
                if (res.code == 0) {
                    this.recordData = res.result.records
                    this.totalNum = res.result.total
                } else {
                }
            })
        },
        searchChartsData1 () {
            // if (this.queryParams.roadName.length == 0) {
            //     this.queryParams.roadName = this.alllocationcodes
            // }
            let params = {
                districtId: this.queryParams.districtId,
                locationcodelist: this.queryParams.roadName.join(','),
                material: this.queryParams.material,
                status: this.queryParams.status,
                pipecode: this.queryParams.pipecode,
                shapeDataMin: this.queryParams.shapeDataMin,
                shapeDataMax: this.queryParams.shapeDataMax,
                pipeyear: this.queryParams.pipeyear,
                queryType: 1
            }
            this.$post(apiNames['查询的统计分析'], params).then(res => {
                if (res.code == 0) {
                   let allKeys = Object.keys(res.result)
                   let allYu = 0, allWu = 0, allHe = 0
                   this.allLength = 0
                   this.guanJin = [0,0,0,0]
                   this.hejiData = [0,0,0,0,0,0,0,0]
                   allKeys.forEach((item) => {
                      let paishuiguanObj = res.result[item]['排水管类型']
                      let guancaiObj = res.result[item]['管材类型']
                      for (let index = 0; index < 3; index++) {
                          this.listData.push({
                                districtName: '于都县',
                                roadName: item,
                                type: this.pType1[index].name,
                                alllength: Number(paishuiguanObj[index + 1].all),
                                num1: Number(paishuiguanObj[index + 1]['01_管径小型']),
                                num2: Number(paishuiguanObj[index + 1]['02_管径中型']),
                                num3: Number(paishuiguanObj[index + 1]['03_管径大型']),
                                num4: Number(paishuiguanObj[index + 1]['04_管径特大型']),
                                jiaoj: '',
                                yushuikou: '',
                                lianguan: ''
                            })
                          
                      }
                      this.allLength += Number(paishuiguanObj.all)
                      allYu += Number(paishuiguanObj['1'].all)
                      allWu += Number(paishuiguanObj['2'].all)
                      allHe += Number(paishuiguanObj['3'].all)
                      this.guanJin[0] += Number(paishuiguanObj['1']['01_管径小型']) + Number(paishuiguanObj['2']['01_管径小型']) + Number(paishuiguanObj['3']['01_管径小型'])
                      this.guanJin[1] += Number(paishuiguanObj['1']['02_管径中型']) + Number(paishuiguanObj['2']['02_管径中型']) + Number(paishuiguanObj['3']['02_管径中型'])
                      this.guanJin[2] += Number(paishuiguanObj['1']['03_管径大型']) + Number(paishuiguanObj['2']['03_管径大型']) + Number(paishuiguanObj['3']['03_管径大型'])
                      this.guanJin[3] += Number(paishuiguanObj['1']['04_管径特大型']) + Number(paishuiguanObj['2']['04_管径特大型']) + Number(paishuiguanObj['3']['04_管径特大型'])

                   })
                   this.pType1 = [
                        {
                            name: '雨水',
                            value: allYu
                        },
                        {
                            name: '污水',
                            value: allWu
                        },
                        {
                            name: '合流',
                            value: allHe
                        }
                    ]
                    this.listData.forEach((item) => {
                        this.hejiData[0] += Number(item.alllength)
                        this.hejiData[1] += Number(item.num1)
                        this.hejiData[2] += Number(item.num2)
                        this.hejiData[3] += Number(item.num3)
                        this.hejiData[4] += Number(item.num4)
                    })
                    let charts1 = this.$refs.charts1
                    charts1.option.series[0].data = this.pType1
                    charts1.refresh()
                    // res.result['管材类型']
                    let charts2 = this.$refs.charts2
                    // charts2.option.series[0].data[0] = [325, 225, 300, 140]
                    charts2.option.series[0].data[0] = [this.guanJin[0].toFixed(2), this.guanJin[1].toFixed(2), this.guanJin[2].toFixed(2), this.guanJin[3].toFixed(2)]
                    charts2.refresh()
                } else {
                    notification.success({ message: '系统提示', description: res.message})
                }
            })
        },
        searchChartsData2 () {
            let params = {
                districtId: this.queryParams.districtId,
                locationcodelist: this.queryParams.roadName.join(','),
                material: this.queryParams.material,
                status: this.queryParams.status,
                pipecode: this.queryParams.pipecode,
                shapeDataMin: this.queryParams.shapeDataMin,
                shapeDataMax: this.queryParams.shapeDataMax,
                pipeyear: this.queryParams.pipeyear,
                queryType: 2
            }
            this.$post(apiNames['查询的统计分析'], params).then(res => {
                if (res.code == 0) {
                   let allKeys = Object.keys(res.result)
                   this.allLength = 0
                   this.guanJin = [0,0,0,0]
                   this.hejiData = [0,0,0,0,0,0,0,0]
                   let data1 = 0, data2 = 0, data3 = 0, data4 = 0, data5 = 0, data6 = 0, data7 = 0, data8 = 0, data9 = 0, data10 = 0, data11 = 0, data12 = 0, data13 = 0
                   allKeys.forEach((item) => {
                      let guancaiObj = res.result[item]['管材类型']
                      let guancaiObjKey = Object.keys(guancaiObj)
                      console.log(guancaiObjKey, 'guancaiObjKey')
                      for (let index = 0; index < guancaiObjKey.length -1; index++) {
                          this.listData.push({
                                districtName: '于都县',
                                roadName: item,
                                type: this.guancaiType[guancaiObjKey[index]],
                                alllength: Number(guancaiObj[guancaiObjKey[index]]._all),
                                num1: Number(guancaiObj[guancaiObjKey[index]]['_<=3']),
                                num2: Number(guancaiObj[guancaiObjKey[index]]['_3-10']),
                                num3: Number(guancaiObj[guancaiObjKey[index]]['_10-30']),
                                num4: Number(guancaiObj[guancaiObjKey[index]]['_>=30']),
                                jiaoj: '',
                                yushuikou: '',
                                lianguan: '',
                                index: index
                            })
                      }
                        if (guancaiObj['1']) {
                           data1 += Number(guancaiObj['1']._all)
                      }
                    //   data1 += Number(guancaiObj['1']._all)
                        if (guancaiObj['2']) {
                            data2 += Number(guancaiObj['2']._all)
                        }
                        if (guancaiObj['3']) {
                            data3 += Number(guancaiObj['3']._all)
                        }
                        if (guancaiObj['4']) {
                            data4 += Number(guancaiObj['4']._all)
                        }
                        if (guancaiObj['5']) {
                            data5 += Number(guancaiObj['5']._all)
                        }
                        if (guancaiObj['6']) {
                            data6 += Number(guancaiObj['6']._all)
                        }
                        if (guancaiObj['7']) {
                            data7 += Number(guancaiObj['7']._all)
                        }
                        if (guancaiObj['8']) {
                            data8 += Number(guancaiObj['8']._all)
                        }
                        if (guancaiObj['9']) {
                            data9 += Number(guancaiObj['9']._all)
                        }
                        if (guancaiObj['10']) {
                            data10 += Number(guancaiObj['10']._all)
                        }
                        if (guancaiObj['11']) {
                            data11 += Number(guancaiObj['11']._all)
                        }
                        if (guancaiObj['12']) {
                            data12 += Number(guancaiObj['12']._all)
                        }
                        if (guancaiObj['13']) {
                            data13 += Number(guancaiObj['13']._all)
                        }
                        
                    //   data3 += Number(guancaiObj['3']._all)
                    //   data4 += Number(guancaiObj['4']._all)
                    //   data5 += Number(guancaiObj['5']._all)
                    //   data6 += Number(guancaiObj['6']._all)
                    //   data7 += Number(guancaiObj['7']._all)
                    //   data8 += Number(guancaiObj['8']._all)
                    //   data9 += Number(guancaiObj['9']._all)
                    //   data10 += Number(guancaiObj['10']._all)
                    //   data11 += Number(guancaiObj['11']._all)
                    //   data12 += Number(guancaiObj['12']._all)
                    //   data13 += Number(guancaiObj['13']._all)
                      this.allLength += Number(guancaiObj._all)
                      
                    //   this.guanJin[0] += Number(guancaiObj['1']['_<=3']) + Number(guancaiObj['2']['_<=3']) + Number(guancaiObj['3']['_<=3'])
                    //   this.guanJin[1] += Number(guancaiObj['1']['_3-10']) + Number(guancaiObj['2']['_3-10']) + Number(guancaiObj['3']['_3-10'])
                    //   this.guanJin[2] += Number(guancaiObj['1']['_10-30']) + Number(guancaiObj['2']['_10-30']) + Number(guancaiObj['3']['_10-30'])
                    //   this.guanJin[3] += Number(guancaiObj['1']['_>=30']) + Number(guancaiObj['2']['_>=30']) + Number(guancaiObj['3']['_>=30'])
                   })
                   this.guancaiData = [
                       {
                            name: this.guancaiType['1'],
                            value: data1
                       },
                       {
                            name: this.guancaiType['2'],
                            value: data2
                       },
                       {
                            name: this.guancaiType['3'],
                            value: data3
                       },{
                            name: this.guancaiType['4'],
                            value: data4
                       },{
                            name: this.guancaiType['5'],
                            value: data5
                       },{
                            name: this.guancaiType['6'],
                            value: data6
                       },{
                            name: this.guancaiType['7'],
                            value: data7
                       },{
                            name: this.guancaiType['8'],
                            value: data8
                       },{
                            name: this.guancaiType['9'],
                            value: data9
                       },{
                            name: this.guancaiType['10'],
                            value: data10
                       },{
                            name: this.guancaiType['11'],
                            value: data11
                       },{
                            name: this.guancaiType['12'],
                            value: data12
                       },{
                            name: this.guancaiType['13'],
                            value: data13
                       }
                   ]
                   this.guancaiData = this.guancaiData.filter((item) => {
                       return item.value !== 0
                   })
                    console.log(this.guancaiData, 'this.listDatathis.listData')
                    this.listData.forEach((item) => {
                        this.hejiData[0] += Number(item.alllength)
                        this.hejiData[1] += Number(item.num1)
                        this.hejiData[2] += Number(item.num2)
                        this.hejiData[3] += Number(item.num3)
                        this.hejiData[4] += Number(item.num4)
                    })
                    let chartGuanCai = this.$refs.chartGuanCai
                    console.log(chartGuanCai)
                    chartGuanCai.option.series[0].data = this.guancaiData
                    chartGuanCai.refresh()
                    // res.result['管材类型']
                    let charts2Rader = this.$refs.charts2Rader
                    console.log(this.guanJin[2].toFixed(2))
                    charts2Rader.option.series[0].data[0] = [this.hejiData[1].toFixed(2), this.hejiData[2].toFixed(2), this.hejiData[3].toFixed(2), this.hejiData[4].toFixed(2)]
                    charts2Rader.refresh()
                } else {
                    notification.success({ message: '系统提示', description: res.message})
                }
            })
        },
        searchChartsData3 () {
            let params = {
                districtId: this.queryParams.districtId,
                locationcodelist: this.queryParams.roadName.join(','),
                material: this.queryParams.material,
                status: this.queryParams.status,
                pipecode: this.queryParams.pipecode,
                shapeDataMin: this.queryParams.shapeDataMin,
                shapeDataMax: this.queryParams.shapeDataMax,
                pipeyear: this.queryParams.pipeyear,
                queryType: 2
            }
            this.$post(apiNames['缺陷图表查询'], params).then(res => {
                if (res.code == 0) {
                    if (JSON.stringify(res.result.pipeQxLengthByCateg) !== "{}") {
                        this.pipeQxLengthByCateg = {1: res.result.pipeQxLengthByCateg[1] || 0, 2: res.result.pipeQxLengthByCateg[2] || 0, 3: res.result.pipeQxLengthByCateg[3] || 0, 4: res.result.pipeQxLengthByCateg[4] || 0} // 隐患管道长度
                    }
                    this.defectTypeCount = res.result.defectTypeCount // 综合统计
                    if (JSON.stringify(res.result.defectgraCount) !== "{}") {
                        this.defectgraCount = res.result.defectgraCount // 隐患点统计
                    }
                    this.pipeQxGroupRoadCateGra = res.result.pipeQxGroupRoadCateGra // 缺陷等级
                    this.defectTypeGra = res.result.defectTypeGra // 缺陷类别
                    setTimeout(() => {
                        this.getData1(this.pipeQxLengthByCateg)
                        this.getData2(this.defectTypeCount)
                        this.getData3(this.defectgraCount)
                    }, 500)
                    this.pipeQxGroupRoadCateGra.forEach((item) => {
                        this.hejiData1[0] += item.length
                        this.hejiData1[1] += item.count
                        let thisRoad = this.pipeQxGroupRoadCateGra.filter((evy) => {
                            return evy.locationcode == item.locationcode
                        })
                        let oneAlllength = 0
                        let oneAllCount = 0
                        let defect_gra1 = 0
                        let defect_gra2 = 0
                        let defect_gra3 = 0
                        let defect_gra4 = 0
                        thisRoad.forEach((oneRaod) => {
                            oneAlllength += oneRaod.length
                            oneAllCount += oneRaod.count
                            if (oneRaod.defect_gra == 1) {
                                defect_gra1 = oneRaod.count
                            }
                            if (oneRaod.defect_gra == 2) {
                                defect_gra2 = oneRaod.count
                            }
                            if (oneRaod.defect_gra == 3) {
                                defect_gra3 = oneRaod.count
                            }
                            if (oneRaod.defect_gra == 4) {
                                defect_gra4 = oneRaod.count
                            }
                        })
                        this.listData1.push(
                            {
                                districtName: item.district_name,
                                roadName: item.road_name,
                                pipe_categ: item.pipe_categ,
                                length: oneAlllength,
                                count: oneAllCount,
                                deGra1: defect_gra1,
                                deGra2: defect_gra2,
                                deGra3: defect_gra3,
                                deGra4: defect_gra4,
                            }
                        )
                    })
                    this.listData1 = this.distinct(this.listData1)
                    let defectGra1 = this.pipeQxGroupRoadCateGra.filter((item) => {
                        return item.defect_gra == 1
                    })
                    let defectGra2 = this.pipeQxGroupRoadCateGra.filter((item) => {
                        return item.defect_gra == 2
                    })
                    let defectGra3 = this.pipeQxGroupRoadCateGra.filter((item) => {
                        return item.defect_gra == 3
                    })
                    let defectGra4 = this.pipeQxGroupRoadCateGra.filter((item) => {
                        return item.defect_gra == 4
                    })
                    if (defectGra1.length !== 0) {
                        defectGra1.forEach((item) => {
                            this.hejiData1[2] += item.count
                        })
                    }
                    if (defectGra2.length !== 0) {
                        defectGra2.forEach((item) => {
                            this.hejiData1[3] += item.count
                        })
                    }
                    if (defectGra3.length !== 0) {
                        defectGra3.forEach((item) => {
                            this.hejiData1[4] += item.count
                        })
                    }
                    if (defectGra4.length !== 0) {
                        defectGra4.forEach((item) => {
                            this.hejiData1[5] += item.count
                        })
                    }
                } else {
                    notification.success({ message: '系统提示', description: res.message})
                }
            })
        },
        getData1 (pipeQxLengthByCateg) {
            let charts31 = this.$refs.charts31
            charts31.option.series[0].data =  [
                {
                    name: '雨水',
                    value: pipeQxLengthByCateg[1]
                },
                {
                    name: '污水',
                    value: pipeQxLengthByCateg[2]
                },
                {
                    name: '合流',
                    value: pipeQxLengthByCateg[3]
                }
            ]
            charts31.refresh()
        },
        getData2 (defectTypeCount) {
            let charts32 = this.$refs.charts32
            let allCount = defectTypeCount['结垢'] + defectTypeCount['变形'] + defectTypeCount['腐蚀'] + defectTypeCount['破裂'] + defectTypeCount['脱节'] + defectTypeCount['异物穿入'] + defectTypeCount['树根'] + defectTypeCount['接口材料脱落'] + defectTypeCount['起伏'] + defectTypeCount['沉积'] + defectTypeCount['残墙、坝根'] + defectTypeCount['渗漏'] + defectTypeCount['浮渣'] + defectTypeCount['错口'] + defectTypeCount['支管暗接'] + defectTypeCount['障碍物'] 
            console.log(charts32.option.radar, allCount)
            // charts32.option.radar.indicator = charts32.option.radar.indicator.map((item) => {
            //     console.log(item)
            //     item.max = allCount
            // })
            charts32.option.series[0].data[0].value=[defectTypeCount['结垢'], defectTypeCount['变形'], defectTypeCount['腐蚀'],defectTypeCount['破裂'], defectTypeCount['脱节'], defectTypeCount['异物穿入'],defectTypeCount['树根'], defectTypeCount['接口材料脱落'], defectTypeCount['起伏'],defectTypeCount['沉积'], defectTypeCount['残墙、坝根'], defectTypeCount['渗漏'], defectTypeCount['浮渣'],defectTypeCount['错口'], defectTypeCount['支管暗接'], defectTypeCount['障碍物']]
            charts32.refresh()
        },
        getData3 (defectgraCount) {
            let charts33 = this.$refs.charts33
            charts33.option.series[0].data =  [
                {
                    name: '一级隐患点',
                    value: defectgraCount.defectgraCount01
                },
                {
                    name: '二级隐患点',
                    value: defectgraCount.defectgraCount02
                },
                {
                    name: '三级隐患点',
                    value: defectgraCount.defectgraCount03
                },
                {
                    name: '四级隐患点',
                    value: defectgraCount.defectgraCount04
                }
            ]
            charts33.refresh()
        },
        distinct (arr){
              let result = [],
                i,
                j,
            len = arr.length;
            for(i = 0; i < len; i++){
                for(j = i + 1; j < len; j++){
                    if(arr[i].roadName === arr[j].roadName){
                        j = ++i;
                    }
                }
                result.push(arr[i]);
            }
            return result;
        }
    },
    mounted () {
        let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
        // 管段材质
        this.pipeMaterial = allDictItems.material
        this.pipeStatus = allDictItems.pipe_status
        allDictItems.material.forEach((item) => {
            this.guancaiType[item.value] = item.text
        })
        this.getXMname()
        this.getProvinceInfo()
        // this.searchChartsData1()
    },
}
</script>
<style lang='scss'>
 .charts {
     .ant-form-item-label > label {
         color: white;
     }
     .ant-form-item {
         margin-bottom: 0;
     }
     .ant-pagination {
         color: white;
     }
     .ant-pagination-item a {
         color: white;
     }
     .ant-pagination-item-active a {
        color: #1890ff
     }
     .ant-pagination-prev a, .ant-pagination-next a {
         color: #1890ff
     }
    .ant-select-selection--single .ant-select-selection__clear {
        background: none!important;
        color: #1890ff!important;
    }
    .ant-select-selection--multiple {
        min-height: .5rem!important;
        background: #205187
    }
    .ant-select-selection--multiple .ant-select-selection__choice {
        max-width: 70%!important;
    }
    // .ant-select .ant-select-enabled {
    //     width: 2.76rem;
    // }
 }
</style>
<style scoped lang='scss'>
.charts {
    width: 1482px;
    max-height: 18rem;
    background: rgba(0, 20, 60, .8);
    border: 1px solid #043870;
    border-radius: 5px;
    overflow: auto;
    .title {
        font-size: .36rem;
        padding: .4rem 0 0 .64rem;
    }
    .title_bac{
      width: 3.7rem;
      height: .18rem;
      background-image: url('../assets/imgs/zhihuipaishui/pjmanage/split.png');
      background-size: 100% 100%;
    }
    .closeButton {
        position: absolute;
        right: .5rem;
        top: .3rem;
        width: .5rem;
        height: .5rem;
        text-align: center;
        border-radius: .25rem;
        cursor: pointer;
    }
    .closeButton:hover {
        background: gray;
    }
    .module1 {
        display: flex;
        vertical-align: middle;
        div {
            vertical-align: middle;
            text-align: center;
            width: 84px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
        }
        .activeClass {
            width: 84px;
            height: 28px;
            background-image: url('../assets/imgs/zhihuipaishui/ppline/selected.png');
            background-size: 100% 100%;
        }
    }
    .module2 {
        width: 98%;
        // height: 6.4rem;
        border: .02rem solid #11568B;
        margin-top: 2%;
        .module2_head {
            width: 99.5%;
            height: .68rem;
            background-image: url('../assets/imgs/zhihuipaishui/map/biankuang.png');
            background-size: 100% 100%;
            display: flex;
            padding-top:.1rem;
            padding-left: .5%;
            position: relative;
            div {
                vertical-align: middle;
                text-align: center;
                width: 124px;
                height: 28px;
                line-height: 28px;
                cursor: pointer;
            }
            .activeClass {
                width: 124px;
                height: 28px;
                background-image: url('../assets/imgs/zhihuipaishui/ppline/selected.png');
                background-size: 100% 100%;
            }
            .print {
                width: .82rem;
                height: .42rem;
                background: #2781b4;
                border-radius: .1rem;
                color: white;
                text-align: center;
                line-height: .42rem;
                margin: .2rem 0 0 .4rem;
                position: absolute;
                right: 1rem;
                top: 0rem;
            }
            .sanjiaoxing {
                position: absolute;
                right: .3rem;
                top: .15rem;
                width: .4rem;
            }
        }
        .tableClass {
            width: 88%;
            min-height: 5.72rem;
            margin: .2rem 0 0 5%;
            .tableClass_header {
                display: flex;
                text-align: center;
                font-size: .28rem;
                background: #002E74;
                .tableClass_header1 {
                    width: 2.5rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    border: .02rem solid #11568B;
                    border-right: 0;
                }
                .tableClass_header2 {
                    width: 2.7rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    border: .02rem solid #11568B;
                    border-right: 0;
                }
                .tableClass_header3 {
                    width: 1rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    border: .02rem solid #11568B;
                    border-right: 0;
                }
                .tableClass_header4 {
                    flex: 1;
                    height: 1.2rem;
                    border: .02rem solid #11568B;
                    border-right: 0;
                    .tableClass_header4_t {
                        width: 100%;
                        height: .38rem;
                        border-bottom: .02rem solid #11568B;
                    }
                    .tableClass_header4_b {
                        display: flex;
                        height: .8rem;
                        .tableClass_header4_b1 {
                            flex: 1;
                            line-height: .8rem;
                            border-right: .02rem solid #11568B;
                        }
                        .tableClass_header4_b2 {
                            flex: 1;
                             border-right: .02rem solid #11568B;
                             div {
                                 height: .4rem;
                                //  border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(1) {
                                 border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(2) {
                                 font-size: .24rem;
                                 line-height: .4rem;
                             }
                        }
                        .tableClass_header4_b3 {
                            flex: 1;
                             border-right: .02rem solid #11568B;
                             div {
                                 height: .4rem;
                                //  border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(1) {
                                 border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(2) {
                                 font-size: .24rem;
                                 line-height: .4rem;
                             }
                        }
                        .tableClass_header4_b4 {
                            flex: 1;
                             border-right: .02rem solid #11568B;
                             div {
                                 height: .4rem;
                                //  border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(1) {
                                 border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(2) {
                                 font-size: .24rem;
                                 line-height: .4rem;
                             }
                        }
                        .tableClass_header4_b5 {
                            flex: 1;
                            div {
                                 height: .4rem;
                                //  border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(1) {
                                 border-bottom: .02rem solid #11568B;
                             }
                             div:nth-child(2) {
                                 font-size: .24rem;
                                 line-height: .4rem;
                             }
                        }
                    }
                }
                .tableClass_header5 {
                    width: 2.5rem;
                    height: 1.2rem;
                    border: .02rem solid #11568B;
                    border-right: 0;
                    .tableClass_header5_t {
                        height: .78rem;
                        border-bottom: .02rem solid #11568B;
                        line-height: .78rem;
                    }
                    .tableClass_header5_b {
                        height: .4rem;
                    }
                }
                .tableClass_header6 {
                    width: 2.5rem;
                    height: 1.2rem;
                    border: .02rem solid #11568B;
                    border-right: 0;
                    .tableClass_header6_t {
                        height: .78rem;
                        border-bottom: .02rem solid #11568B;
                        line-height: .78rem;
                    }
                    .tableClass_header6_b {
                        height: .4rem;
                    }
                }
                .tableClass_header7 {
                    width: 2.5rem;
                    height: 1.2rem;
                    border: .02rem solid #11568B;
                    .tableClass_header7_t {
                        height: .78rem;
                        border-bottom: .02rem solid #11568B;
                        line-height: .78rem;
                    }
                    .tableClass_header7_b {
                        height: .4rem;
                    }
                }
            }
            .content {
                display: flex;
                text-align: center;
                background: #002E74;
                .content1 {
                    width: 2.5rem;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content2 {
                    width: 2.7rem;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content3 {
                    width: 1rem;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content4 {
                    flex: 1;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content5 {
                    flex: 1;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content6 {
                    flex: 1;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content7 {
                    flex: 1;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content8 {
                    flex: 1;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content9 {
                    width: 2.5rem;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content10 {
                    width: 2.5rem;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                    border-right: 0;
                }
                .content11 {
                    width: 2.5rem;
                    height: .6rem;
                    line-height: .6rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                }
            }
        }
        .infoMenu {
            width: 88%;
            margin: .2rem 0 0 5%;
            text-align: center;
            .infoMenu_header {
                display: flex;
                background: #002e74;
                .infoMenu_header1 {
                    flex: 1;
                    border: .02rem solid #11568B;
                    border-right: 0;
                }
                .infoMenu_header12 {
                    width: 3rem;
                    border: .02rem solid #11568B;
                }
            }
            .infoMenu_box_header {
                background: rgba(0, 46, 116, .8);
                text-align: center;
                border: .02rem solid #11568B;
                border-bottom: none;
            }
            .infoMenu_title {
                display: flex;
                height: .96rem;
                background: rgba(0, 46, 116, .8);
                border: .02rem solid #11568B;
                div {
                    flex: 1;
                }
                .infoMenu_title_di {
                    position: relative;
                }
                .infoMenu_title_di:before{
                    position: absolute;
                    content:' ';
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(to top right,rgba(0, 46, 116, .8),rgba(0, 46, 116, .8) 48%, pink , rgba(0, 46, 116, .8) 51%,rgba(0, 46, 116, .8));
                    left: 0;
                    top: 0;
                }
            }
            .infoMenu_content {
                display: flex;
                background: #002E74;
                div {
                    height: .4rem;
                }
                .infoMenu_content1 {
                    border: .02rem solid #11568B;
                    flex: 1;
                    border-top: 0;
                }
                .infoMenu_content12 {
                    width: 3rem;
                    border: .02rem solid #11568B;
                    border-top: 0;
                }
            }
        }
    }
}
</style>