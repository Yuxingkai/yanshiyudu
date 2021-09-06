<template>
      <div>
        <div class="right_2">
          <div class="chooseModule">
            <div :class="chooseNum === 1 ? 'activeClass' : ''" class="titleName" @click=choose(1)>
              属性列表
            </div>
            <div class="splitline"/>
            <div :class="chooseNum === 2 ? 'activeClass' : ''" class="titleName marginleft" @click=choose(2)>
              编辑
            </div>
          </div>
          <div id="searchList" v-if="chooseNum === 1" style="background: #00143C;border: .02rem solid #205187;font-size: .36rem;text-align: left;padding-left: .4rem;margin-bottom: .28rem;">
            <div style="margin-top: .34rem;">
                <span>所属项目: </span>
                <a-select
                  style="width: 2.3rem;margin-right: .3rem;"
                  allowClear
                  show-search
                  :filter-option="filterOption"
                  @change="handleChangeXM"
                  placeholder="项目名称"
                  v-model="searchForm.proId"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in xmNameArr" :key="roleindex.toString()" :value="role.id">
                    {{ role.xmmc }}
                  </a-select-option>
                </a-select>
                  <!-- <a-input style="width: 2.3rem;margin-right: .3rem;" placeholder="" /> -->
                <span>所属工程: </span>
                <a-select
                  style="width: 2.3rem"
                  allowClear
                  show-search
                  :filter-option="filterOptiongc"
                  placeholder="工程名称"
                  optionFilterProp = "children"
                  v-model="searchForm.gcId"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                    {{ role.gcName }}
                  </a-select-option>
                </a-select>
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">区域:</span>
              <a-cascader
                  :defaultValue="defaultValue"
                  style="width: 2.76rem;margin-right: .3rem;color: white;"
                  :options="areaArr"
                  :load-data="loadData"
                  :placeholder="placeholder"
                  change-on-select
                  @change="onChangeArea"
              />
              <span style="margin-right: .3rem;">道路:</span>
              <a-select
                style="width: 2.76rem"
                allowClear
                placeholder="道路"
                optionFilterProp = "children"
                v-model="searchForm.roadids"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">起点编号:</span>
              <a-input v-model="searchForm.inJuncid" style="width: 2.34rem" placeholder="" />
              <span style="margin-right: .3rem;">终点编号:</span>
              <a-input v-model="searchForm.outJuncid" style="width: 2.34rem" placeholder="" />
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">管道材质:</span>
              <a-select
                style="width: 1.5rem"
                allowClear
                placeholder=""
                optionFilterProp = "children"
                v-model="searchForm.material"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in pipeMaterial" :key="roleindex.toString()" :value="role.value" :title="role.title">
                  {{ role.title }}
                </a-select-option>
              </a-select>
              <span style="margin-right: .3rem;margin-left: .1rem;">管径范围:</span>
                <a-input v-model="searchForm.shapeDataMin" style="width: 1.2rem;margin-right: .2rem;" placeholder="" />
                <a-input v-model="searchForm.shapeDataMax" style="width: 1.2rem" placeholder="" />
            </div>
            <div v-if="moreSearch">
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">管道状况:</span>
                <a-select
                  style="width: 2.5rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  v-model="searchForm.status"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
                <span style="margin-right: .3rem;margin-left: .1rem;">是否满管:</span>
                <a-select
                  style="width: 2rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in isDisposeArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
              </div>
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">管龄范围:</span>
                <a-select
                  style="width: 3rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  v-model="searchForm.yearfw"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in pipeAge" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
                <!-- <span style="margin-right: .3rem;margin-left: .1rem;">管网调查:</span>
                <a-input style="width: 1.2rem" placeholder="" /> -->
              </div>
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;margin-left: .1rem;">是否判读:</span>
                <a-select
                  style="width: 2rem"
                  allowClear
                  placeholder=""
                  v-model="searchForm.judgeDispose"
                  optionFilterProp = "children"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in isPanduArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
                <span style="margin-right: .3rem;margin-left: .1rem;">是否完成:</span>
                <a-select
                  style="width: 2rem"
                  allowClear
                  placeholder=""
                  v-model="searchForm.isComplete"
                  optionFilterProp = "children"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in isPanduArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
              </div>
              <!-- <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">所属工程:</span>
                <a-select
                  style="width: 6rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  v-model="selectedDeal"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in isDisposeArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
              </div> -->
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">更新时间:</span>
                <a-locale-provider :locale="zhCN">
                  <a-range-picker style="width: 6rem;" @change="onChange" />
                </a-locale-provider>
              </div>
            </div>
            <div style="margin: .34rem 0;">
              <a-checkbox style="font-size: .34rem;">
                空间分布
              </a-checkbox>
              <span v-if="!moreSearch" @click="showMore" style="font-size: .34rem;color: #00B7EE;margin-left: .5rem;">更多</span>
              <span v-if="!moreSearch" @click="showMore" style="color: #00B7EE;">... ...</span>
              <a-icon v-if="moreSearch" @click="showLess" style="margin-left: 1.5rem;" type="double-right" :rotate="-90" />
              <span @click="searchBySome" style="display: inline-block;width: 1.14rem;height: .5rem;background: #3F83B8;border-radius: .1rem;text-align: center;margin-left: .5rem;font-size: .34rem;">查询</span>
            </div>
          </div>
          <div v-if="chooseNum === 1" class="questionArr">
              <div class="header">
                <div>
                    启始井号
                </div>
                <div>
                    终止井号
                </div>
                <div style="flex-grow: 1;">
                    管  材
                </div>
                <div style="flex-grow: 1;">
                    管  径
                </div>
                <div style="flex-grow: 1;">
                    管  长
                </div>
              </div>
              <div class="questionArr_content">
                <div class="questionArr_content_item" v-for="(item, index) in pipeArrList" :key="index" @click.stop="showDetial(item)">
                    <div :title="item.inJuncid" class="hideTextAndEllipsis" style="width: 122px;">
                        {{ item.inJuncid }}
                    </div>
                    <div :title="item.outJuncid" class="hideTextAndEllipsis" style="width: 122px;">
                        {{ item.outJuncid }}
                    </div>
                    <div :title="item.material_dictText" class="hideTextAndEllipsis" style="width: 65px;">
                        {{ item.material_dictText }}
                    </div>
                    <div style="width: 65px;">
                        {{ item.shapeData || '-' }}
                    </div>
                    <div style="width: 65px;">
                        {{ Number(item.pipeLengt).toFixed(2) }}
                    </div>
                </div>
                <infinite-loading v-if="infiniteShow" :distance="distance" @infinite="infiniteHandler">
                    <div slot="spinner">加载中...</div>
                    <div slot="no-more">已加载完毕!</div>
                    <div slot="no-results">暂无数据</div>
                </infinite-loading>
              </div>
          </div>
          <div id="addNewPipe" v-if="chooseNum === 2" style="position: relative;overflow: hidden;height: 90%;">
            <div style="position: absolute;overflow: auto;height: 100%;width: 105%;">
                <div class="pipeInfo" style="height: 13.36rem;">
                   <div class="titleBac">编辑</div>
                   <div class="conTain">
                      <div class="line">
                        <div>
                          <span>起始井号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="addPipeForm.inJuncid" />
                        </div>
                        <div>
                          <span>终止井号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="addPipeForm.outJuncid" />
                        </div>
                        <div style="line-height: .72rem;">
                          <img @click="changeData" style="width: .4rem;height: .4rem;" src="../../../assets/imgs/zhihuipaishui/jiaohuan.png" alt="">
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>所在区域: </span>
                          <a-cascader
                              :defaultValue="defaultValue"
                              style="width: 2.76rem;margin-right: .3rem;color: white;"
                              :options="areaArr"
                              :load-data="loadData"
                              :placeholder="placeholder"
                              change-on-select
                              @change="onChangeArea"
                          />
                        </div>
                        <div>
                          <span>所在道路: </span>
                          <a-select
                            style="width: 2.6rem;"
                            placeholder="请选择"
                            :showArrow="showArrow"
                            optionFilterProp = "children"
                            v-model="addPipeForm.locationcode"
                            @change="onChangeRoad"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>所属项目: </span>
                          <a-select
                            style="width: 2.3rem;margin-right: .3rem;"
                            allowClear
                            show-search
                            :filter-option="filterOption"
                            @change="handleChangeXM"
                            placeholder="项目名称"
                            v-model="addPipeForm.proId"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in xmNameArr" :key="roleindex.toString()" :value="role.id">
                              {{ role.xmmc }}
                            </a-select-option>
                          </a-select>
                        </div>
                        <div>
                          <span>所属工程: </span>
                          <a-select
                            style="width: 2.3rem"
                            allowClear
                            show-search
                            :filter-option="filterOptiongc"
                            placeholder="工程名称"
                            optionFilterProp = "children"
                            v-model="addPipeForm.gcId"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                              {{ role.gcName }}
                            </a-select-option>
                          </a-select>
                        </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>管段类型: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addPipeForm.pipeCateg"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeCateg" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div style="margin-left: .6rem;">
                            <span>管段材质: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addPipeForm.material"
                              @change="onChangeMaterial"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeMaterial" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>管段长度(m): </span>
                            <a-input style="width: 2.2rem;" v-model="addPipeForm.pipeLengt" placeholder="" />
                          </div>
                          <div style="margin-left: .25rem;">
                            <span>管段直径(mm): </span>
                            <a-input style="width: 2.2rem;" v-model="addPipeForm.shapeData" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>起点埋深(米): </span>
                          <a-input style="width: 2.2rem;" v-model="addPipeForm.in_juncid_ms" placeholder="" />
                        </div>
                        <div style="margin-left: .25rem;">
                          <span>终点埋深(米): </span>
                          <a-input style="width: 2.4rem;" v-model="addPipeForm.out_juncid_ms" placeholder="" />
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>起井地面高程(米): </span>
                          <a-input style="width: 2rem;" v-model="addPipeForm.starsurfac" placeholder="" />
                        </div>
                          <div>
                            <span>水流方向: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addPipeForm.flowdirect"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in flowdirectArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>检测方向: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addPipeForm.checkdirect"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in flowdirectArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>终井地面高程(米): </span>
                            <a-input style="width: 2rem;" v-model="addPipeForm.endsurface" placeholder="" />
                          </div>
                          <div>
                            <span>检测方法: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addPipeForm.checkMethod"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in checkMethodArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>埋设地点:</span>
                            <a-input style="width: 2.7rem;" v-model="addPipeForm.burialAddress" placeholder="" />
                          </div>
                          <div>
                            <span>检测日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker v-model="addPipeForm.check_date" format="YYYY-MM-DD" style="width: 3rem;" @change="dateChoose" />
                            </a-locale-provider>
                          </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>铺设年代:</span>
                          <a-locale-provider :locale="zhCN">
                            <a-date-picker v-model="addPipeForm.constructi" format="YYYY-MM-DD" style="width: 2.7rem;" @change="burialDateChoose" />
                          </a-locale-provider>
                        </div>
                        <div>
                          <span>设施状态: </span>
                          <a-select
                            style="width: 3rem;"
                            placeholder="请选择"
                            :showArrow="showArrow"
                            optionFilterProp = "children"
                            v-model="addPipeForm.status"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>完成状态: </span>
                          <a-select
                            style="width: 2.6rem;"
                            placeholder="请选择"
                            :showArrow="showArrow"
                            optionFilterProp = "children"
                            v-model="addPipeForm.isComplete"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in isCompleteArr" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                        </div>
                        <div style="width: 50%;">
                            <span>备注: </span>
                            <a-input style="width: 78%;" v-model="addPipeForm.remark" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                        <div>
                            <span>起点X: </span>
                            <a-input style="width: 2.6rem;" v-model="addPipeForm.startx" placeholder="" />
                          </div>
                          <div>
                            <span>起点Y: </span>
                            <a-input style="width: 2.6rem;" v-model="addPipeForm.starty" placeholder="" />
                          </div>
                          <div @click.stop="getPoint1">拾取坐标</div>
                      </div>
                      <div class="line">
                        <div>
                            <span>终点X: </span>
                            <a-input style="width: 2.6rem;" v-model="addPipeForm.endx" placeholder="" />
                          </div>
                          <div>
                            <span>终点Y: </span>
                            <a-input style="width: 2.6rem;" v-model="addPipeForm.endy" placeholder="" />
                          </div>
                          <div @click.stop="getPoint2">拾取坐标</div>
                      </div>
                      <div class="line">
                        <div style="width: 50%;">
                          <span>视频判读: </span>
                          <span @click="popChooseVideoPandu()" style="position: relative;display: inline-block;width: 1.6rem;height: .5rem;color: rgb(0, 183, 238);">
                              选择视频
                          </span>
                        </div>
                        <div>
                          <span>是否判读: </span>
                          <a-select
                            style="width: 2.2rem;"
                            placeholder="请选择"
                            :showArrow="showArrow"
                            optionFilterProp = "children"
                            v-model="addPipeForm.judge_dispose"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in isPanduArr" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                        </div>
                      </div>
                      <div class="line">
                        <div style="width: 70%;display: flex;">
                          <span>管段图: </span>
                          <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;vertical-align: sub;">
                              <input ref="picinputguanduan" style="position: absolute;left: -9999px;" id="idguanduan" multiple @change="guanduanPic" type="file">
                              <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idguanduan">
                                上传图片
                              </label>
                          </span>
                          <span v-if="guanduanpicShow.length !== 0" style="width: 33%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                            <swiper class="swiper" :options="swiperOptionGuan" >
                              <swiper-slide class="swiper-slide" v-for="(item, index) in guanduanpicShow" :key="index">
                                <span style="position: relative;">
                                  <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                  <img @click="deletePicGuan(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                </span>
                              </swiper-slide>
                              <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                            <div class="swiper-button-prev guan1" slot="button-prev"></div>
                            <div class="swiper-button-next guan1" slot="button-next"></div>
                          </span>
                        </div>
                        <div style="width: 50%;margin-left: .15rem;">
                          <span>距离（m）: </span>
                          <a-input style="width: 1.2rem;" v-model="addPipeForm.pipe_juli" placeholder="" />
                        </div>
                      </div>
                      <div class="actionsButtton">
                          <div @click="addNewPipeMeth">新增</div>
                          <div @click="editpaishuiguan">修改</div>
                          <div>
                            <a-locale-provider :locale="zhCN">
                              <a-popconfirm
                                title="确认删除?"
                                @confirm="confirmDelete"
                                @cancel="cancelDelete"
                              >
                                <a href="javascript:;" style="color: white;">删除</a>
                              </a-popconfirm>
                             </a-locale-provider>
                          </div>
                          <div @click="clearData">清空</div>
                      </div>
                   </div>
                </div>
                <div class="pipeInfo" style="height: 8.26rem;">
                  <div class="titleBac">新增缺陷</div>
                  <div class="conTain">
                    <div class="line">
                      <div>
                        <span>起始井号: </span>
                        <a-input style="width: 2.6rem;" v-model="addDefetsForm.inJuncid" placeholder="" />
                      </div>
                      <div>
                        <span>终止井号: </span>
                        <a-input style="width: 2.6rem;" v-model="addDefetsForm.outJuncid" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                        <span style="margin-left: .15rem;">修复前: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;vertical-align: sub;">
                            <input ref="picinputsqian" style="position: absolute;left: -9999px;" id="idqianP" multiple @change="changePicqianshabi" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idqianP">
                              上传图片
                            </label>
                        </span>
                        <span v-if="newPicShowbefore.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption1" >
                            <swiper-slide class="swiper-slide" v-for="(item, index) in newPicShowbefore" :key="index">
                              <span style="position: relative;">
                                <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                <img @click="deletePicActqian(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                              </span>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev swp1" slot="button-prev"></div>
                          <div class="swiper-button-next swp1" slot="button-next"></div>
                        </span>
                    </div>
                    <div class="line">
                        <span style="margin-left: .15rem;">修复后: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;vertical-align: sub;">
                            <input ref="picinputshou" style="position: absolute;left: -9999px;" id="idhouP" multiple @change="changePichoushabi" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idhouP">
                              上传图片
                            </label>
                        </span>
                        <span v-if="newPicShowafter.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption2" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in newPicShowafter" :key="index">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                        <img @click="deletePicActhou(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev swp2" slot="button-prev"></div>
                          <div class="swiper-button-next swp2" slot="button-next"></div>
                        </span>
                    </div>
                    <div class="line">
                      <div style="width: 100%;display: flex;">
                        <div style="width: 50%;">
                          <span>修复前: </span>
                          <span @click="popChooseVideo(1, '新增')" style="position: relative;display: inline-block;width: 1.6rem;height: .5rem;color: rgb(0, 183, 238);">
                              上传视频
                          </span>
                          <span @click="popVideo(videoUrlQian)" v-if="videoUrlQian" style="margin-left: .5rem;">查看视频</span>
                        </div>
                        <div style="width: 50%;margin-left: 0;">
                          <span>修复后: </span>
                          <span @click="popChooseVideo(2, '新增')" style="position: relative;display: inline-block;width: 1.6rem;height: .5rem;color: rgb(0, 183, 238);">
                              上传视频
                          </span>
                          <span @click="popVideo(videoUrlHou)" v-if="videoUrlHou" style="margin-left: .5rem;">查看视频</span>
                        </div>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>距离（m）: </span>
                         <a-input style="width: 1.2rem;margin-right: .1rem;" v-model="addDefetsForm.defectJlstart" placeholder="" />—
                         <a-input style="width: 1.2rem;" v-model="addDefetsForm.defectJlend" placeholder="" />
                      </div>
                      <div>
                        <span>时钟: </span>
                         <a-input style="width: 1.6rem;margin-left: .1rem;" v-model="addDefetsForm.clock" placeholder="例(01,12)" />
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>缺陷: </span>
                         <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.checkType"
                            @change="handleChange1"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkType" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.defectCode"
                            @change="handleChangeQx"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild1" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.8rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.defectGra"
                            @change="handleChangeGra"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild2" :key="roleindex.toString()" :title="role.value" :value="role.value">
                              {{ role.value }}
                            </a-select-option>
                          </a-select>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>分值: </span>
                        <a-input style="width: 1.8rem;" v-model="addDefetsForm.defectData" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div style="width: 100%;">
                          <span>备注: </span>
                          <a-input style="width: 70%;" v-model="addDefetsForm.remark" placeholder="" />
                        </div>
                    </div>
                    <div class="line">
                      <div style="width: 100%;">
                          <span>修复建议: </span>
                          <a-input style="width: 70%;" v-model="addDefetsForm.checkRect" placeholder="" />
                        </div>
                    </div>
                    <div class="actionsButtton">
                        <div @click="newQxAdd">新增</div>
                        <div @click="clearAlladd">清空</div>
                        <!-- <div style="width: 1.24rem;" @click="qxSort">缺陷排序</div> -->
                    </div>
                  </div>
                </div>
                <div class="pipeInfo" style="height: 8.26rem;" v-for="(item, index) in pipeQxListArr" :key="index">
                  <div class="titleBac">编辑缺陷</div>
                  <div class="conTain">
                    <div class="line">
                      <div>
                        <span>起始井号: </span>
                        <a-input style="width: 2.6rem;" v-model="item.inJuncid" placeholder="" />
                      </div>
                      <div>
                        <span>终止井号: </span>
                        <a-input style="width: 2.6rem;" v-model="item.outJuncid" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <!-- <div style="width: 100%;"> -->
                        <span style="margin-left: .15rem;">修复前: </span>
                        <span @click="chooseOneEdit1(index)" style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;vertical-align: sub;">
                            <input :ref="`picinputsqian${index}`" style="position: absolute;left: -9999px;" multiple :id="`idqianP${index}`" @change="editPicqianshabi" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" :for="`idqianP${index}`">
                              上传图片
                            </label>
                        </span>
                        <span v-if="item.pipeQxfileRelat.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="item[`swiperOptionE1${index}`]" >
                                <swiper-slide class="swiper-slide" v-for="(ele, idx) in item.pipeQxfileRelat" :key="idx">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(ele)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="ele" alt="">
                                        <img @click="editdeletePicActqian(index, idx)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev" :class="`swpE1${index}`" slot="button-prev"></div>
                          <div class="swiper-button-next" :class="`swpE1${index}`" slot="button-next"></div>
                        </span>
                    </div>
                    <div class="line">
                        <span style="margin-left: .15rem;">修复后: </span>
                        <span @click="chooseOneEdit2(index)" style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;vertical-align: sub;">
                            <input :ref="`picinputshou${index}`" style="position: absolute;left: -9999px;" multiple :id="`idhouP${index}`" @change="editPichoushabi" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" :for="`idhouP${index}`">
                              上传图片
                            </label>
                        </span>
                        <span v-if="item.pipeQxfileRelatafter.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="item[`swiperOptionE2${index}`]" >
                                <swiper-slide class="swiper-slide" v-for="(ele, idx) in item.pipeQxfileRelatafter" :key="idx">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(ele)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="ele" alt="">
                                        <img @click="editdeletePicActhou(index, idx)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev" :class="`swpE2${index}`" slot="button-prev"></div>
                          <div class="swiper-button-next" :class="`swpE2${index}`" slot="button-next"></div>
                        </span>
                    </div>
                    <div class="line">
                      <div style="width: 100%;display: flex;">
                        <div style="width: 50%;">
                          <span>修复前: </span>
                          <span @click="popChooseVideo(1, '编辑', index, item)" style="position: relative;display: inline-block;width: 1.6rem;height: .5rem;color: rgb(0, 183, 238);">
                              上传视频
                          </span>
                          <span  @click="popVideo(item.fileVideo)" v-if="item.fileVideo" style="margin-left: .2rem;">查看视频</span>
                        </div>
                        <div style="width: 50%;margin-left: 0;">
                            <span>修复后: </span>
                            <span @click="popChooseVideo(2, '编辑', index, item)" style="position: relative;display: inline-block;width: 1.6rem;height: .5rem;color: rgb(0, 183, 238);">
                                上传视频
                            </span>
                            <span @click="popVideo(item.fileVideoafter)" v-if="item.fileVideoafter" style="margin-left: .1rem;">查看视频</span>
                        </div>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>距离（m）: </span>
                         <a-input style="width: 1.2rem;margin-right: .1rem;" v-model="item.defectJlstart" placeholder="" />——
                         <a-input style="width: 1.2rem;" v-model="item.defectJlend" placeholder="" />
                      </div>
                      <div>
                        <span>时钟: </span>
                         <a-input style="width: 1.6rem;margin-left: .1rem;" v-model="item.clock" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>缺陷: </span>
                         <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.checkType"
                            @change="handleChange1"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkType" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.defectCode"
                            @change="handleChangeQx"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild11[item.checkType]" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <span @click="chooseGra(index)">
                            <a-select
                            style="width: 1.8rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.defectGra"
                            @change="handleChangeGra2"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in getGradeByQx(item.defectCode)" :key="roleindex.toString()" :title="role.value" :value="role.value">
                              {{ role.value }}
                            </a-select-option>
                          </a-select>
                          </span>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>分值: </span>
                        <a-input style="width: 1.8rem;" v-model="item.defectData" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div style="width: 100%;">
                        <span>备注: </span>
                        <a-input style="width: 70%;" v-model="item.remark" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div style="width: 100%;">
                        <span>修复建议: </span>
                        <a-input style="width: 70%;" v-model="item.checkRect" placeholder="" />
                      </div>
                    </div>
                    <div class="actionsButtton">
                      <div @click="editSave(item, index)">保存</div>
                      <div>
                        <a-locale-provider :locale="zhCN">
                          <a-popconfirm
                            title="确认删除?"
                            @confirm="deleteQx(item)"
                            @cancel="cancelDelete"
                          >
                            <a href="javascript:;" style="color: white;">删除</a>
                          </a-popconfirm>
                        </a-locale-provider>
                      </div>
                      <div @click="clearEdit(item)">清空</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <a-locale-provider :locale="zhCN">
          <a-modal v-drag-modal :width="980" :footer="footerShow" v-model="videoShow3" title="照片">
            <img style="width: 100%;height: 750px;" :src="largePic" alt="">
          </a-modal>
        </a-locale-provider>
        <a-locale-provider :locale="zhCN">
          <a-modal v-drag-modal :width="1200" :zIndex="modalzIndex" :mask="maskVideo" :footer="footerShow" v-model="videoShow1" title="视频">
            <div style="padding: .2rem;position: relative;">
              <span style="position: relative;display: inline-block;width: 2rem;height: .3rem;">
                <input ref="videoinputsQian2" style="position: absolute;left: -9999px;" id="idVideoN" accept="video/*" @change="getUrl" multiple type="file">
                <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;" for="idVideoN">
                  选择视频文件
                </label>
              </span>
              <span v-if="scVideo" @click="uploadFile" style="margin-left: .5rem;cursor:pointer;">上传视频</span>
              <span v-if="scVideo" @click="getCurPic" style="margin-left: .5rem;cursor:pointer;">截图</span>
              <span v-if="!scVideo" @click="getCurPicPandu" style="margin-left: .5rem;cursor:pointer;">截图</span>
            </div>
            <div style="display: flex;height: 12rem;">
              <div style="width: 6rem;background: #19426d;overflow-y:scroll;height: 12rem;">
                <div :class="nowIndex == index ? 'hoverClass' : ''" class="hideTextAndEllipsis" @click="chooseVideo(item, index)" style="width: 100%;height: .8rem;text-align: center;line-height: .8rem;cursor: pointer;border-top: .02rem solid #1890ff;" v-for="(item, index) in chooseVideoArr" :key="index">{{ item.name }}</div>
              </div>
              <div style="width: calc(100%-6rem);height: 100%;">
                <video id="myPlayer1" style="width: 100%;height: 100%;" autoplay="autoplay" muted controls="controls" type="video/mp4" :src="popvideoUrl"></video>
              </div>
            </div>
            <video id="myPlayer2" style="position: absolute;left: -9999px;" autoplay="autoplay" muted controls="controls" type="video/mp4" :src="popvideoUrl"></video>
            <canvas
              :width="canvasWidth"
              :height="canvasHeight"
              ref="canvas"
              style="position: absolute;left: -9999px;"
            ></canvas>
          </a-modal>
        </a-locale-provider>

        <a-locale-provider :locale="zhCN">
          <a-modal :width="600" :footer="footerShow" v-model="videoShow2" title="视频">
            <video style="width: 100%;height: 100%;" autoplay="autoplay" muted controls="controls" :src="popvideoUrlHou"></video>
          </a-modal>
        </a-locale-provider>
      </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import InfiniteLoading from 'vue-infinite-loading';
import flvjs from 'flv.js'
import VideoConverter from 'convert-video'
import {notification} from 'ant-design-vue'
import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');
import { apiNames } from '../../../Utils/config'
import { getFormatDate, guid } from '../../../Utils/Com'
import { message} from 'ant-design-vue'
import { deleteFeatureByPoint, enableCreatePoly, editFeatureByPoint, showInmap, getPointAddress1, getPointAddress2, addFeatureByPoint, searchGraphicByObjectId, addQXtoMap } from '../../../Maps/mapApi.js'
export default {
  name: 'paishuiguan',
  data() {
    return {
      modalzIndex: 2,
      maskVideo: false,
      canvasWidth: '',
      canvasHeight: '',
      currentUrl: '',
      videoType: null,   // 1修复前，2修复后
      videoText: '',   // 新增， 修改
      swiperOptionGuan: {
          slidesPerView: 1, // 每页展示几条数据
          // slidesPerGroup: 3, // 每屏滚动几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.guan1',
              prevEl: '.swiper-button-prev.guan1'
          },
          // pagination: {
          //     el: '.swiper-pagination',
          //     type: ''
          // },
          observer: true,
          observeParents: true,
      },
      // 轮播图
      swiperOption1: {
          slidesPerView: 3, // 每页展示几条数据
          // slidesPerGroup: 3, // 每屏滚动几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.swp1',
              prevEl: '.swiper-button-prev.swp1'
          },
          // pagination: {
          //     el: '.swiper-pagination',
          //     type: ''
          // },
          observer: true,
          observeParents: true,
      },
      swiperOption2: {
          slidesPerView: 3, // 每页展示几条数据
          // slidesPerGroup: 3, // 每屏滚动几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.swp2',
              prevEl: '.swiper-button-prev.swp2'
          },
          // pagination: {
          //     el: '.swiper-pagination',
          //     type: ''
          // },
          observer: true,
          observeParents: true,
      },
      newAddQxPics: [],
      newAddQxafterPics: [],
      defaultValue: [],
      placeholder: '',
      infiniteShow: true,
      videoShow1: false,
      videoShow2: false,
      videoShow3: false,
      footerShow: false,
      gdclassArr: [
        {
          title: '雨水',
          value: 1
        },
        {
          title: '污水',
          value: 2
        }
      ],
      queryParams: {
        gdclass: '',
        hjEnd: '',
        hjStart: '',
        hjsource: '',
        hunjieclass: '',
        manjing: '',
        pageNo: 1,
        pageSize: 1000
      },
      formMix: {
        gdclass: 1,
        hunjieclass: 1,
        manjing: '',
        hjStart: '',
        hjEnd: '',
        waterflow: '',
        hjsource: '',
      },
      visible: false,
      editMixPipeBool: false,
      addMixPipe: false,
      ipagination: false,
      zhCN,
      realPj: [
      ],
      dataSource: [
      ],
      columns: [
        {
          title: '管段类型',
          dataIndex: 'gdclass',
          key: 'gdclass',
          width: '15%',
          scopedSlots: { customRender: 'gdclass' },
        },
        {
          title: '混接类型',
          dataIndex: 'hunjieclass',
          key: 'hunjieclass',
          scopedSlots: { customRender: 'hunjieclass' },
        },
        {
          title: '主井号',
          dataIndex: 'manjing',
          key: 'manjing',
        },
        {
          title: '混接管段起点',
          dataIndex: 'hjStart',
          key: 'hjStart',
        },
        {
          title: '混接管段终点',
          dataIndex: 'hjEnd',
          key: 'hjEnd',
        },
        {
          title: '水流量',
          dataIndex: 'waterflow',
          key: 'waterflow',
        },
        {
          title: '混接来源',
          dataIndex: 'hjsource',
          key: 'hjsource',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      questiontype: [
        {
          id: 1,
          name: '未处理'
        },
        {
          id: 2,
          name: '所属道路'
        },
        {
          id: 3,
          name: '塑料'
        },
        {
          id: 4,
          name: '功能缺陷'
        }
      ],
      selectedItem: [],
      questionList: [],
      selectedType: [],
      chooseNum: 1,
      distance: 50,
      popShow: false,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dataUrl: '',
      showPic: require('../../../assets/imgs/search/yitusoutu.png'),
      deletePic: require('../../../assets/imgs/zhihuipaishui/ppline/delete.png'),
      addPipeFormField: {
        inJuncid: '起始井号不能为空',
        locationcode: '道路不能为空',
        outJuncid: '终止井号不能为空',
        pipeCateg: '管段类型不能为空',
        material: '管段材质不能为空',
        pipeLengt: '管段长度不能为空',
        shapeData: '管段直径不能为空',
        flowdirect: '检测方向不能为空',
        checkMethod: '检测方法不能为空',
        recordDat: '监测日期不能为空',
        isComplete: '完成状态不能为空',
        status: '设施状态不能为空'
      },
      addPipeForm: {
        inJuncid: null,
        outJuncid: null,
        district_name: null,
        district_id: null,
        pipeCateg: null,
        material: null,
        material_name: null,
        pipeLengt: null,
        shapeData: null,
        in_juncid_ms: null,
        out_juncid_ms: null,
        starsurfac: null,
        flowdirect: null,
        checkdirect: null,
        endsurface: null,
        checkMethod: null,
        burialAddress: null,
        check_date: null,
        constructi: null,
        isComplete: null,
        remark: null,
        status: null,
        startx: null,
        starty: null,
        endx: null,
        endy: null,
        locationcode: null,
        road_name: null,
        judge_dispose: 0,
        pipe_pic: '',
        pipe_juli: '',
        proId: '',
        gcId: ''
      },
      addDefetsForm: {
        inJuncid: '',
        outJuncid: '',
        fileRelat: '',
        defectJlstart: '--',
        defectJlend: '--',
        defectLen: '',
        checkType: '',
        defectCode: '',
        locationcode: '',
        road_name: '',
        defectName: '',
        defectGra: '',
        remark: '',
        checkRect: '',
        defectData: '--',
        delFlag: 0,
        clock: ''
      },
      addDefetsFormField: {
        inJuncid: '起始井号不能为空',
        outJuncid: '终止井号不能为空',
        defectJlstart: '开始距离不能为空',
        defectJlend: '结束距离不能为空',
        defectData: '分值不能为空',
        checkType: '缺陷类别不能为空',
        defectCode: '缺陷类别不能为空',
        defectGra: '缺陷等级不能为空',
      },
      editDefetsForm: {
        inJuncid: '',
        outJuncid: '',
        fileRelat: '',
        defectJlstart: '',
        defectJlend: '',
        checkType: '',
        defectCode: '',
        defectGra: '',
        remark: '',
        checkRect: ''
      },
      checkType: [],
      checkTypeChild1: [],
      checkTypeChild11: {},
      checkTypeChild2: [{
        value: 1,
        title: '1级'
      },{
        value: 2,
        title: '2级'
      },{
        value: 3,
        title: '3级'
      },{
        value: 4,
        title: '4级'
      }],
      showArrow: false,
      pipeCateg: [],
      pipeMaterial: [],
      flowdirectArr: [],
      checkMethodArr: [],
      isCompleteArr: [],
      isDisposeArr: [],
      selectedDeal: [],
      selectedRoad: [],
      selectedMaterial: [],
      selectedCheckType: [],
      roadList: [
      ],
      pipeArrList: [],
      stateEle: null,
      pageNo: 1,
      nowPipeid: '',
      picTempUrl: '',
      pipeQxListArr: [],
      addType: 'polyLine',
      chooseobjectid: '',
      moreSearch: false,
      videoUrlQian: '',
      popvideoUrl: '',
      popvideoUrlHou: '',
      videoUrlHou: '',
      selectedArea: 360731,
      areaArr: [
        {
          value: 360731,
          title: '于都县'
        }
      ],
      isPanduArr: [
        {
          value: 0,
          title: '否'
        },
        {
          value: 1,
          title: '是'
        }
      ],
      roadArr: [],
      allRoadids: [],
      searchForm: {
        districtId: '',
        districtName: '',
        pageNo: 1,
        pageSize: 18,
        locationcodelist: '',
        roadids: '',
        pipecode: '',
        pipeCateg: '',
        rainsewami: null,
        material: '',
        shapeDataMin: null,
        shapeDataMax: null,
        status: '',
        yearfw: '',
        inJuncid: '',
        outJuncid: '',
        isComplete: '',
        judgeDispose: null
      },
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
      whitchIndexQian: 0,
      whitchIndexHou: 0,
      showPicUrl: '',
      chooseBoolean: true,
      getPointBoolean1: true,
      getPointBoolean2: true,
      showPicUrlQian: null,
      showPicUrlHou: null,
      chooseOneEdit1Index: 0,
      chooseOneEdit2Index: 0,
      largePic: '',
      mapsearchpipeids: [],
      changeBoolean: false,
      newPicShowbefore: [],
      newPicShowafter: [],
      editPicShowbefore: {},
      editPicShowafter: {},
      newfileShowbefore: [],
      newfileShowafter: [],
      editfileShowbefore: {},
      editfileShowafter: {},
      allFileArr: [],
      chooseItem: {},
      nowIndex: 0,
      chooseVideoArr: [],
      chooseGraIndex: 0,
      scVideo: true,
      guanduanpicShow: [],
      guanduanpicFile: [],
      xmNameArr: [],
      gcNameArr: []
    }

  },
  mounted() {
    for (let index = 0; index < 30; index++) {
      this.editPicShowbefore[index] = []
      this.editPicShowafter[index] = []
      this.editfileShowbefore[index] = []
      this.editfileShowafter[index] = []
    }
    console.log(this.editPicShowbefore)
    // let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    // let disid = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_id'})[0].description
    // this.placeholder = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_name'})[0].description
    // this.queryBydistrictId(disid)
    this.getXMname()
    this.getProvinceInfo()
    this.$bus.off('writeFormTosecond')
    this.$bus.off('paishuiguanForm')
    this.$bus.on('writeFormTosecond', (e) => {
      this.choose(2)
      this.addType = 'polyLine'
    })
    this.$bus.off('getPointData')
    this.$bus.on('getPointData', (e) => {
      this.addPipeForm.startx = e.sx
      this.addPipeForm.starty = e.sy
      this.addPipeForm.endx = e.ex
      this.addPipeForm.endy = e.ey
    })
    this.$bus.off('getPointObj')
    this.$bus.on('getPointObj', (e) => {
      if (e[0] !== null && e[0] !== undefined) {
        this.addPipeForm.startx = e[0].feature.geometry.x
        this.addPipeForm.starty = e[0].feature.geometry.y
        if (e[0].layerId == 4) {
          this.addPipeForm.inJuncid = e[0].feature.attributes.manholecode
        } else if (e[0].layerId == 3) {
          this.addPipeForm.inJuncid = e[0].feature.attributes.combcode
        } else if (e[0].layerId == 2) {
          this.addPipeForm.inJuncid = e[0].feature.attributes.outfallcode
        }
      }
      if (e[1] !== null && e[1] !== undefined) {
        this.addPipeForm.endx = e[1].feature.geometry.x
        this.addPipeForm.endy = e[1].feature.geometry.y
        if (e[1].layerId == 4) {
          this.addPipeForm.outJuncid = e[1].feature.attributes.manholecode
        } else if (e[1].layerId == 3) {
          this.addPipeForm.outJuncid = e[1].feature.attributes.combcode
        } else if (e[1].layerId == 2) {
          this.addPipeForm.outJuncid = e[1].feature.attributes.outfallcode
        }
      }
      console.log(e, '获取两点的信息在排水管页面')
    })
    this.$bus.off('removesearchMapData')
    this.$bus.on('removesearchMapData', () => {
      this.pipeArrList = []
      this.infiniteShow = true
    })
    this.$bus.off('searchMapData')
    this.$bus.on('searchMapData', () => {
      this.pipeArrList = []
      this.infiniteShow = false
      let searchMapData = JSON.parse(window.localStorage.getItem('searchMapData')).filter((item) => {
        return item.layerId == 3
      })
      searchMapData.forEach((ele) => {
        this.pipeArrList.push({
          inJuncid: ele.feature.attributes.in_juncid,
          outJuncid: ele.feature.attributes.out_juncid,
          pipeCateg: ele.feature.attributes.pipe_categ,
          material: ele.feature.attributes.material,
          pipeLengt: ele.feature.attributes.pipe_lengt,
          shapeData: ele.feature.attributes.shape_data,
          in_juncid_ms: ele.feature.attributes.in_juncid_ms,
          out_juncid_ms: ele.feature.attributes.out_juncid_ms,
          starsurfac: ele.feature.attributes.starsurfac,
          flowdirect: ele.feature.attributes.flowdirect,
          endsurface: ele.feature.attributes.endsurface,
          checkMethod: ele.feature.attributes.check_method,
          check_date: ele.feature.attributes.check_date,
          isComplete: ele.feature.attributes.is_complete,
          remark: ele.feature.attributes.remark,
          status: ele.feature.attributes.status,
          startx: ele.feature.attributes.startx,
          starty: ele.feature.attributes.starty,
          endx: ele.feature.attributes.endx,
          endy: ele.feature.attributes.endy,
          locationcode: ele.feature.attributes.locationcode,
          material_dictText: ele.feature.attributes.material_name,
          material_name: ele.feature.attributes.material_name,
          recordDat: getFormatDate(ele.feature.attributes.record_dat),
          pipeid: ele.feature.attributes.pipeid,
          districtId: ele.feature.attributes.district_id,
          districtName: ele.feature.attributes.district_name,
          checkDate: ele.feature.attributes.check_date,
          delFlag: 0,
          startx: ele.feature.attributes.startx,
          starty: ele.feature.attributes.starty,
          endx: ele.feature.attributes.endx,
          endy: ele.feature.attributes.endy,
          locationcode: ele.feature.attributes.locationcode,
          objectid: ele.feature.attributes.objectid
        })
        this.mapsearchpipeids.push(ele.feature.attributes.pipeid)
      })
    })
    if (window.localStorage.getItem('searchMapData')) {
      this.pipeArrList = []
      this.infiniteShow = false
      let searchMapData = JSON.parse(window.localStorage.getItem('searchMapData')).filter((item) => {
        return item.layerId == 3
      })
      searchMapData.forEach((ele) => {
        this.pipeArrList.push({
          inJuncid: ele.feature.attributes.in_juncid,
          outJuncid: ele.feature.attributes.out_juncid,
          pipeCateg: ele.feature.attributes.pipe_categ,
          material: ele.feature.attributes.material,
          pipeLengt: ele.feature.attributes.pipe_lengt,
          shapeData: ele.feature.attributes.shape_data,
          in_juncid_ms: ele.feature.attributes.in_juncid_ms,
          out_juncid_ms: ele.feature.attributes.out_juncid_ms,
          starsurfac: ele.feature.attributes.starsurfac,
          flowdirect: ele.feature.attributes.flowdirect,
          endsurface: ele.feature.attributes.endsurface,
          checkMethod: ele.feature.attributes.check_method,
          check_date: ele.feature.attributes.check_date,
          isComplete: ele.feature.attributes.is_complete,
          remark: ele.feature.attributes.remark,
          status: ele.feature.attributes.status,
          startx: ele.feature.attributes.startx,
          starty: ele.feature.attributes.starty,
          endx: ele.feature.attributes.endx,
          endy: ele.feature.attributes.endy,
          locationcode: ele.feature.attributes.locationcode,
          material_dictText: ele.feature.attributes.material_name,
          material_name: ele.feature.attributes.material_name,
          recordDat: getFormatDate(ele.feature.attributes.record_dat),
          pipeid: ele.feature.attributes.pipeid,
          districtId: ele.feature.attributes.district_id,
          districtName: ele.feature.attributes.district_name,
          checkDate: ele.feature.attributes.check_date,
          delFlag: 0,
          startx: ele.feature.attributes.startx,
          starty: ele.feature.attributes.starty,
          endx: ele.feature.attributes.endx,
          endy: ele.feature.attributes.endy,
          locationcode: ele.feature.attributes.locationcode,
          objectid: ele.feature.attributes.objectid
        })
        this.mapsearchpipeids.push(ele.feature.attributes.pipeid)
      })
    }
    this.$bus.on('paishuiguanForm', (atrObj1) => {
      let obj = JSON.parse(atrObj1)
      let atrObj = {
        inJuncid: obj.in_juncid,
        outJuncid: obj.out_juncid,
        pipeCateg: obj.pipe_categ,
        material: obj.material,
        material_name: obj.material_name,
        pipeLengt: obj.pipe_lengt,
        shapeData: obj.shape_data,
        checkdirect: obj.checkdirect,
        flowdirect: obj.flowdirect,
        checkMethod: obj.check_method,
        recordDat: getFormatDate(obj.record_dat),
        isComplete: obj.is_complete,
        remark: obj.remark,
        status: obj.status,
        pipeid: obj.pipeid,
        districtId: obj.district_id,
        districtName: obj.district_name,
        checkDate: obj.check_date,
        delFlag: 0,
        in_juncid_ms: obj.in_juncid_ms,
        out_juncid_ms: obj.out_juncid_ms,
        starsurfac: obj.starsurfac,
        endsurface: obj.endsurface,
        startx: obj.startx,
        starty: obj.starty,
        endx: obj.endx,
        endy: obj.endy,
        locationcode: obj.locationcode,
        objectid: obj.objectid,
        pipePic: obj.pipe_pic,
        pipeJuli: obj.pipe_juli
      }
      this.actionDo(atrObj)
      this.choose(2)
    })
    this.$bus.off('chooseSecond')
    this.$bus.on('chooseSecond', () => {
      this.choose(2)
    })
  },
  watch: {
    popShow (newVal, oldVal) {
      this.clearData()
    },
    chooseNum (newVal, oldVal) {
      console.log(newVal, oldVal)
      if (newVal == 2) {
        console.log(newVal, oldVal)
        this.choose(2)
      } else {
        this.clearData()
        this.clearAlladd()
        let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
        // let disid = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_id'})[0].description
        // this.placeholder = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_name'})[0].description
        this.searchForm.locationcodelist = this.addPipeForm.locationcode
        this.searchForm.roadids = this.addPipeForm.locationcode
        // this.addPipeForm.district_name = this.placeholder
        // this.addPipeForm.district_id = disid
        this.placeholder = this.addPipeForm.district_name
        this.searchForm.districtId = this.addPipeForm.district_id
        console.log('////////////////////----------')
        console.log(this.addPipeForm)
        console.log(this.addPipeForm.district_name, this.addPipeForm.district_id)
        console.log(this.addPipeForm.district_name, this.addPipeForm.district_id)
        console.log(this.searchForm.districtId, this.placeholder)
         console.log('////////////////////----------')
        this.queryBydistrictId(this.searchForm.districtId)
        this.getProvinceInfo()
      }
      for (let index = 0; index < 30; index++) {
        this.editPicShowbefore[index] = []
        this.editPicShowafter[index] = []
        this.editfileShowbefore[index] = []
        this.editfileShowafter[index] = []
      }

      this.newfileShowbefore = []
      this.newfileShowafter = []
      this.newPicShowbefore = []
      this.newPicShowafter = []
      this.videoUrlHou = ''
      this.videoUrlQian = ''
      this.guanduanpicShow = []
      this.guanduanpicFile = []
    },
    addMixPipe () {
      if (this.addMixPipe == false) {
        this.editMixPipeBool = false
      }
    },
    videoShow1 (newVal, oldVal) {
      if (newVal == false) {
        this.popvideoUrl = ''
        // this.chooseVideoArr = []
      }
    }
  },
  created() {
    let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    this.checkType = allDictItems.check_type
    // 管道类型
    this.pipeCateg = allDictItems.pipe_categ
    // 管段材质
    this.pipeMaterial = allDictItems.material
    // 检测方向
    this.flowdirectArr = allDictItems.flowdirect
    // 检测方法
    this.checkMethodArr = allDictItems.check_method
    // 完成状态
    this.isCompleteArr = allDictItems.is_complete
    // 设施状态
    this.pipeStatusArr = allDictItems.pipe_status
    // 处理状态
    this.isDisposeArr = allDictItems.is_dispose
  },
  methods: {
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    filterOptiongc (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChangeXM (e) {
      this.getGcByProid(e)
      let one = this.xmNameArr.filter((item) => {
        return item.id == e
      })[0]
      this.searchForm.proId = one.id
      this.searchForm.districtId = one.district_id
      this.searchForm.districtName = one.district_name
      this.addPipeForm.district_id = one.district_id
      this.addPipeForm.district_name = one.district_name
      this.placeholder = one.district_name
      this.queryBydistrictId(one.district_id)
      this.getGcByProid(one.id)
    },
    getXMname () {
      this.$get(apiNames['获取项目名称']).then(res => {
          if (res.code == 200 && res.result.length !== 0) {
            this.xmNameArr = res.result
            this.searchForm.proId = res.result[0].id
            this.searchForm.districtId = res.result[0].district_id
            this.searchForm.districtName = res.result[0].district_name
            this.addPipeForm.district_name = res.result[0].district_name
            this.addPipeForm.district_id = res.result[0].district_id
            this.placeholder = res.result[0].district_name
            this.queryBydistrictId(res.result[0].district_id)
            this.getGcByProid(res.result[0].id)
          }
      })
    },
    getGcByProid (id) {
      this.$get(`${apiNames['根据项目ID获取工程']}/${id}`, ).then(res => {
          if (res.code == 0 && res.result.length !== 0) {
            this.gcNameArr = res.result
          }
      })
    },
    // qxSort () {
    //   if (this.pipeQxListArr.length > 1) {
    //     this.pipeQxListArr.sort((a, b) => {return a.defectJlstart - b.defectJlstart})
    //   }
    // },
    chooseVideo (item, index) {
      this.nowIndex = index
      this.currentUrl = item
      let getUrlAAA = null
      if (item.type == "video/mp4") {
        if (window.createObjectURL != undefined) { // basic
          getUrlAAA = window.createObjectURL(item);
        } else if (window.URL != undefined) { // mozilla(firefox)
          getUrlAAA = window.URL.createObjectURL(item);
        } else if (window.webkitURL != undefined) { // webkit or chrome
          getUrlAAA = window.webkitURL.createObjectURL(item);
        }
        this.popvideoUrl = getUrlAAA
      } else {
        this.changeToMp4(item)
      }
    },
    // 去重
    unique(arr){
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if( arr[i].name == arr[j].name ){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
        return arr;
    },
    getUrl (e) {
      let getUrlAAA = null
      // this.chooseVideoArr = e.target.files
      e.target.files.forEach((item) => {
        this.chooseVideoArr.unshift(item)
      })
      this.chooseVideoArr = this.unique(this.chooseVideoArr)
      console.log(e.target.files, '选择的视频', this.chooseVideoArr)
      let file = e.target.files[0] || e.dataTransfer.files[0]
      console.log(file)
      if (file.type == "video/mp4") {
        if (window.createObjectURL != undefined) { // basic
          getUrlAAA = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
          getUrlAAA = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
          getUrlAAA = window.webkitURL.createObjectURL(file);
        }
        this.popvideoUrl = getUrlAAA
      } else {
        this.changeToMp4(file)
      }

      this.currentUrl = e.target.files[0] || e.dataTransfer.files[0]
      
      e.target.value = ''
    },
    changeToMp4 (file) {
      let formData = new FormData();
      formData.append('file', file);
      // formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['视频转换'], formData).then(res => {
        this.popvideoUrl = res.message
      })
    },
    popChooseVideo (num, text, index, obj) {
      this.videoShow1 = true
      this.scVideo = true
      this.videoType = num
      this.videoText = text
      this.chooseOneEdit1Index = index
      this.chooseOneEdit2Index = index
      this.chooseItem = obj
    },
    popChooseVideoPandu () {
      this.videoShow1 = true
      this.scVideo = false
    },
    getCurPicPandu () {
      // 把当前视频帧内容渲染到canvas上
      let img = document.getElementById("myPlayer1"); //获取标签
      let img2 = document.getElementById("myPlayer2"); //获取标签
      img.pause()
      let width = img2.clientWidth; //获取屏幕尺寸
      let height = img2.clientHeight;
      this.canvasWidth = width;
      this.canvasHeight = height;
	    //getContext方法返回一个用于在画布上绘图的环境。
      let ctx = this.$refs["canvas"].getContext("2d"); 
      
      this.$nextTick(() => {
        ctx.drawImage(img, 0, 0, width, height);  //在画布上定位图像
        // canvas转化为图片
        let newCanvas = this.$refs["canvas"]; 
        var newImage = new Image(); //做预加载。
        newImage.src = newCanvas.toDataURL("image/jpeg"); //这里重点 toDataURL 转换为Base 64

        let file = this.dataURLtoFile(newImage.src, this.chooseItem)
        this.guanduanpicShow.push(newImage.src)
        this.guanduanpicFile.push(file)
      })
    },
    uploadFile () {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      let formData = new FormData();
      formData.append('file', this.currentUrl);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.currentUrl = null
        if (this.videoType == 1 && this.videoText == '新增') {
          this.videoUrlQian = res.message
        }
        if (this.videoType == 2 && this.videoText == '新增') {
          this.videoUrlHou = res.message
        }
        if (this.videoType == 1 && this.videoText == '编辑') {
          this.pipeQxListArr[this.chooseOneEdit1Index].fileVideo = res.message
        }
        if (this.videoType == 2 && this.videoText == '编辑') {
          this.pipeQxListArr[this.chooseOneEdit2Index].fileVideoafter = res.message
        }
      })
    },
    getCurPic () {
      // 把当前视频帧内容渲染到canvas上
      let img = document.getElementById("myPlayer1"); //获取标签
      let img2 = document.getElementById("myPlayer2"); //获取标签
      img.pause()
      let width = img2.clientWidth; //获取屏幕尺寸
      let height = img2.clientHeight;
      this.canvasWidth = width;
      this.canvasHeight = height;
	    //getContext方法返回一个用于在画布上绘图的环境。
      let ctx = this.$refs["canvas"].getContext("2d"); 
      
      this.$nextTick(() => {
        ctx.drawImage(img, 0, 0, width, height);  //在画布上定位图像
        // canvas转化为图片
        let newCanvas = this.$refs["canvas"]; 
        var newImage = new Image(); //做预加载。
        newImage.src = newCanvas.toDataURL("image/jpeg"); //这里重点 toDataURL 转换为Base 64

    //     let a = document.createElement('a');
    // 　　a.href = newImage.src;
    // 　　a.target = '_blank';
    // 　　a.setAttribute("download", "download");
    // 　　document.body.appendChild(a);
    // 　　a.click();
    // 　　document.body.removeChild(a);

        let file = this.dataURLtoFile(newImage.src, this.chooseItem)

        if (this.videoType == 1 && this.videoText == '新增') {
          this.newPicShowbefore.push(newImage.src)
          this.newfileShowbefore.push(file)
        }
        if (this.videoType == 2 && this.videoText == '新增') {
          this.newPicShowafter.push(newImage.src)
          this.newfileShowafter.push(file)
        }
        if (this.videoType == 1 && this.videoText == '编辑') {
          // this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelat.push(newImage.src)
          this.editfileShowbefore[this.chooseOneEdit1Index].push(file)
          this.editPicShowbefore[this.chooseOneEdit1Index] = this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelat
          this.editPicShowbefore[this.chooseOneEdit1Index].push(newImage.src)
          console.log(this.pipeQxListArr)
        }
        if (this.videoType == 2 && this.videoText == '编辑') {
          // this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelatafter.push(newImage.src)
          this.editfileShowafter[this.chooseOneEdit2Index].push(file)
          this.editPicShowafter[this.chooseOneEdit2Index] = this.pipeQxListArr[this.chooseOneEdit2Index].pipeQxfileRelatafter
          this.editPicShowafter[this.chooseOneEdit2Index].push(newImage.src)
          console.log(this.pipeQxListArr)
        }
      })
    },
    dataURLtoFile (dataurl, obj) { //将base64转换为文件
      var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      if (this.videoText == '新增') {
        return new File([u8arr], `11.jpg`, {
          type: mime
        });
      } else {
        return new File([u8arr], `11.jpg`, {
          type: mime
        });
      }
    },
    changeData () {
      this.changeBoolean = !this.changeBoolean
      let addempty = ''   // 编辑起始井号
      let adddefempty = ''    // 新增缺陷起始井号
      let ms = ''   // 埋深
      let starsurfacemp = ''  // 地面高程
      let sp = '' // 起点坐标
      let ep = '' // 终点坐标
      addempty = this.addPipeForm.inJuncid
      this.addPipeForm.inJuncid = this.addPipeForm.outJuncid
      this.addPipeForm.outJuncid = addempty
      
      adddefempty = this.addDefetsForm.inJuncid
      this.addDefetsForm.inJuncid = this.addDefetsForm.outJuncid
      this.addDefetsForm.outJuncid = adddefempty

      ms = this.addPipeForm.in_juncid_ms
      this.addPipeForm.in_juncid_ms = this.addPipeForm.out_juncid_ms
      this.addPipeForm.out_juncid_ms = ms

      starsurfacemp = this.addPipeForm.starsurfac
      this.addPipeForm.starsurfac = this.addPipeForm.endsurface
      this.addPipeForm.endsurface = starsurfacemp
      
      if (this.addPipeForm.flowdirect == '0') {
        this.$set(this.addPipeForm, 'flowdirect', '1')
      } else if (this.addPipeForm.flowdirect == '1') {
        this.$set(this.addPipeForm, 'flowdirect', '0')
      }
      sp = this.addPipeForm.startx
      this.addPipeForm.startx = this.addPipeForm.endx
      this.addPipeForm.endx = sp

      ep = this.addPipeForm.starty
      this.addPipeForm.starty = this.addPipeForm.endy
      this.addPipeForm.endy = ep
    },
    onChangeRoad(value, selectedOptions) {
      console.log(value, selectedOptions)
      let oneObj = this.roadArr.filter((item) => {
          return item.value == value
      })[0]
      this.addPipeForm.road_name = oneObj.title
    },
    onChangeArea(value, selectedOptions) {
        this.searchForm.districtName = ''
        this.searchForm.districtId = value.join(',')
        this.addPipeForm.district_name = ''
        this.addPipeForm.district_id = value.join(',')
        this.placeholder = ''
        for (let i = 0; i < selectedOptions.length; i++) {
            this.searchForm.districtName += selectedOptions[i].label + '/'
            this.addPipeForm.district_name += selectedOptions[i].label + '/'
        }
        this.queryBydistrictId(this.searchForm.districtId)
    },
    onChangeMaterial (value, selectedOptions) {
      this.addPipeForm.material_name = this.pipeMaterial.filter((item) => {
        return item.value == value
      })[0].title
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
    confirmDelete(e) {
      this.addPipeForm.objectid = this.chooseobjectid
      deleteFeatureByPoint(this.addPipeForm, 'pipe', 'paishuiguan')
    },
    cancelDelete(e) {
      console.log(e);
    },
    deletePicActqian (index) {
      this.$forceUpdate()
      this.newPicShowbefore = this.newPicShowbefore.filter((item, loc) => {
        return loc !== index
      })
      this.newfileShowbefore = this.newfileShowbefore.filter((item, loc) => {
        return loc !== index
      })
    },
    deletePicGuan (index) {
      this.$forceUpdate()
      this.guanduanpicShow = this.guanduanpicShow.filter((item, loc) => {
        return loc !== index
      })
      this.guanduanpicFile = this.guanduanpicFile.filter((item, loc) => {
        return loc !== index
      })
      let arr = this.addPipeForm.pipe_pic.split(',')
      let newArr = arr.filter((item, loc) => {
        return loc !== index
      })
      this.addPipeForm.pipe_pic = newArr.join(',')
    },
    deletePicActhou (index) {
      this.$forceUpdate()
      this.newPicShowafter = this.newPicShowafter.filter((item, loc) => {
        return loc !== index
      })
      this.newfileShowafter = this.newfileShowafter.filter((item, loc) => {
        return loc !== index
      })
    },
    getPoint2 () {
      notification.success({ message: '系统提示', description: '请在地图上选点'})
      this.getPointBoolean2 = true
      this.getPointBoolean1 = false
          getPointAddress2((e) => {
            console.log(e)
             console.log('num2', this.getPointBoolean2)
            if (this.getPointBoolean2) {
              this.$set(this.addPipeForm, 'endx', e.geometry.x)
              this.$set(this.addPipeForm, 'endy', e.geometry.y)
            }
          })
    },
    getPoint1 () {
      notification.success({ message: '系统提示', description: '请在地图上选点'})
        console.log('num1')
        this.getPointBoolean1 = true
        this.getPointBoolean2 = false
        if (this.getPointBoolean1) {
          getPointAddress1((e) => {
            console.log(e)
             if (this.getPointBoolean1) {
                this.$set(this.addPipeForm, 'startx', e.geometry.x)
                this.$set(this.addPipeForm, 'starty', e.geometry.y)
             }
         })
        }
    },
     queryBydistrictId (disId) {
        this.allRoadids = []
        this.roadArr = []
        this.$get(apiNames['获取所属道路表'], {districtId: disId}).then(res => {
          if (res.code == 200) {
              res.result.forEach(element => {
                  this.roadArr.push({
                      title: element.locationname,
                      value: element.locationcode
                  })
                  this.allRoadids.push(element.locationcode)
              });
          } else {
          this.roadArr = []
          }
        })
    },
    showMore () {
      this.moreSearch = true
    },
    showLess () {
      this.moreSearch = false
    },
    showLargePic (url) {
      this.videoShow3 = true
      this.largePic = url
    },
    popVideo2 (url) {
      this.videoShow2 = true
      this.popvideoUrlHou = url
    },
    popVideo (url) {
      this.videoShow1 = true
      this.popvideoUrl = url
    },
    addUrl (url) {
      if (url) {
        let addUrl = `http://192.168.3.132:8082/yufan/sys/common/static/${url}`
        return addUrl
      } else {
        return ''
      }
    },
    test() {
      this.visible = true
      this.getHunjieList()
    },
    getHunjieList () {
      this.$get(`${apiNames['混接表列表查询']}?gdclass=${this.queryParams.gdclass}&hjEnd=${this.queryParams.hjEnd}&hjStart=${this.queryParams.hjStart}&hjsource=${this.queryParams.hjsource}&hunjieclass=${this.queryParams.hunjieclass}&manjing=${this.queryParams.manjing}&pageNo=${this.queryParams.pageNo}&pageSize=${this.queryParams.pageSize}`).then(res => {
        if (res.code == 200) {
          this.dataSource = res.result.records
        } else {
        }
      })
    },
    // handleOk(e) {
    //   console.log(e);
    //   this.visible = false;
    // },
    handleAddMix () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (this.editMixPipeBool) {

              this.$put(apiNames['混接表编辑'], this.formMix).then(res => {
                if (res.code == 200) {
                  notification.success({ message: '修改提示', description: '修改混接管成功'})
                  this.addMixPipe = false
                  this.getHunjieList()
                } else {
                  notification.error({ message: '修改提示', description: res.message})
                }
              })
          } else {
              this.$post(apiNames['混接表添加'], this.formMix).then(res => {
                if (res.code == 200) {
                  notification.success({ message: '添加提示', description: '添加混接管成功'})
                  this.addMixPipe = false
                  this.getHunjieList()
                } else {
                  notification.error({ message: '添加提示', description: res.message})
                }
              })
          }
        }
      });
    },
    onDelete(id) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.id !== id);
      this.$delete(apiNames['混接表删除'], {id}).then(res => {
        if (res.code == 200) {
          notification.success({ message: '删除提示', description: '删除成功'})
        } else {
          notification.error({ message: '删除提示', description: res.message})
        }
      })
    },
    handleAdd() {
      this.addMixPipe = true
    },
    editMixPipe (item) {
      this.addMixPipe = true
      this.formMix = item
      this.editMixPipeBool = true
      console.log(this.formMix)
    },
    moment,
    onChange (date) {
      // this.editPipeForm.recordDat = moment(date).format('YYYY-MM-DD')
    },
    searchBySome () {
      if (this.infiniteShow) {
        this.searchForm.pageNo = 1
        this.pipeArrList = []
        // this.queryPipeList(this.stateEle)
        this.stateEle.reset()
        console.log(this.stateEle)
        // this.queryPipeList(this.stateEle)
      } else {
        this.querypipegisnew()
      }
    },
    querypipegisnew () {
      // if (!this.searchForm.roadids) {
      //   this.searchForm.locationcodelist = this.allRoadids.join(',')
      // } else {
      //   this.searchForm.locationcodelist = this.searchForm.roadids
      // }
      this.searchForm.locationcodelist = this.searchForm.roadids
      this.searchForm.pageSize = 100000
      this.searchForm.sourpipeidlist = this.mapsearchpipeids.join(',')
      this.$post(apiNames['地图管道查询列表'], this.searchForm).then(res => {
        this.pipeArrList = res.result.records
      })
    },
    queryPipeList ($state) {
      this.stateEle = $state
      setTimeout(() => {
          this.searchForm.locationcodelist = this.searchForm.roadids
          this.$post(apiNames['获取排水管'], this.searchForm).then(res => {
            if (this.pipeArrList.length > res.result.total) {
                $state.complete();
                return;
            }
            if (res.code == 0 && res.result.records.length !== 0) {
              console.log('zouzhelile')
                this.pipeArrList = this.pipeArrList.concat(res.result.records)
                this.searchForm.pageNo++
                $state.loaded();
            } else {
              if (this.searchForm.pageNo == 1) {
                this.pipeArrList = []
              }
              $state.complete();
              return;
            }
          })
      }, 1000)
    },
    queryPipeQxList () {
      let params = {
        pipeid: this.nowPipeid
      }
      this.$get(apiNames['查询管道缺陷列表'], params).then(res => {
        this.pipeQxListArr = []
        if (res.result.length !== 0) {
          let arr = res.result
          arr.forEach((item, index) => {
              item.checkType = '' + item.checkType
              item.defectData = item.defectData == '0' ? '--' : item.defectData
              item.defectJlstart = item.defectJlstart == '99999' ? '--' : item.defectJlstart
              item.defectJlend = item.defectJlend == '99999' ? '--' : item.defectJlend
              item.pipeQxfileRelat = item.fileRelat ? item.fileRelat.split(',') : []
              item.pipeQxfileRelatafter = item.fileRelatafter ? item.fileRelatafter.split(',') : []
              item[`swiperOptionE1${index}`] = {
                  slidesPerView: 3, // 每页展示几条数据
                  // slidesPerGroup: 3, // 每屏滚动几条数据
                  autoplay: false, // 是否自动播放
                  navigation: {
                      nextEl: `.swiper-button-next.swpE1${index}`,
                      prevEl: `.swiper-button-prev.swpE1${index}`
                  },
                  // pagination: {
                  //     el: '.swiper-pagination',
                  //     type: ''
                  // },
                  observer: true,
                  observeParents: true,
              }
              item[`swiperOptionE2${index}`] = {
                  slidesPerView: 3, // 每页展示几条数据
                  // slidesPerGroup: 3, // 每屏滚动几条数据
                  autoplay: false, // 是否自动播放
                  navigation: {
                      nextEl: `.swiper-button-next.swpE2${index}`,
                      prevEl: `.swiper-button-prev.swpE2${index}`
                  },
                  // pagination: {
                  //     el: '.swiper-pagination',
                  //     type: ''
                  // },
                  observer: true,
                  observeParents: true,
              }
              this.editPicShowbefore[index] = item.fileRelat ? item.fileRelat.split(',') : []
              this.editPicShowafter[index] = item.fileRelatafter ? item.fileRelatafter.split(',') : []
              this.pipeQxListArr.push(item)
          })
        }
      })
      this.checkTypeChild11 = {
        1: JSON.parse(window.localStorage.getItem('allDictItems'))['functionalDefects'],
        2: JSON.parse(window.localStorage.getItem('allDictItems'))['structureDefects']
      }
    },
    clearEdit (item) {
      item.inJuncid = '',
      item.outJuncid = '',
      item.fileRelat = '',
      item.defectJlstart = '',
      item.defectJlend = '',
      item.checkType = '',
      item.defectCode = '',
      item.defectGra = '',
      item.remark = '',
      item.checkRect = ''
    },
    deletePicActEdit (url, index) {
      this.pipeQxListArr[index].fileRelat = ''
      let params = {
        filename: url.split('yudu/')[1]
      }
      this.$delete(apiNames['删除文件'], params).then(res => {
        if (res.code == 200) {
          notification.success({ message: '添加提示', description: '删除成功'})
        } else {
          notification.error({ message: '添加提示', description: res.message})
        }
      })
    },
    deletevideoQian (url, index) {
      this.pipeQxListArr[index].fileVideo = ''
      // console.log(url.split('yudu/')[1])
      let params = {
        filename: url.split('yudu/')[1]
      }
      this.$delete(apiNames['删除文件'], params).then(res => {
        if (res.code == 200) {
          notification.success({ message: '添加提示', description: '删除成功'})
        } else {
          notification.error({ message: '添加提示', description: res.message})
        }
      })
    },
    deletevideoHou (url, index) {
      this.pipeQxListArr[index].fileVideoafter = ''
      console.log(url.split('yudu/')[1])
      let params = {
        filename: url.split('yudu/')[1]
      }
      this.$delete(apiNames['删除文件'], params).then(res => {
        if (res.code == 200) {
          notification.success({ message: '添加提示', description: '删除成功'})
        } else {
          notification.error({ message: '添加提示', description: res.message})
        }
      })
    },
    checkIsEmty () {
      for (const key in this.addPipeForm) {
        if (Object.hasOwnProperty.call(this.addPipeFormField, key)) {
          const element = this.addPipeForm[key];
          console.log(element, key)
          if (element === '' || element === null ) {
            notification.error({ message: '添加提示', description: this.addPipeFormField[key]})
            return false
          } else {
            continue
          }
        } else {
          return true
        }
      }
    },
    async addNewPipeMeth () {
      let checkStatus = this.checkIsEmty()
      if (checkStatus) {
        let obj = {
          in_juncid: this.addPipeForm.inJuncid,
          out_juncid: this.addPipeForm.outJuncid,
        }
        let filtArr = await this.groupByjuncid(obj)
        if (filtArr[1].length !== 0) {
          notification.error({ message: '添加提示', description: '此管道已存在，请勿重复添加'})
        } else {
          let pipeid = 'A01' + guid()
          // 先存照片到服务器成功后再新增管道缺陷
          let arr = []
          this.guanduanpicFile.forEach(async (item, index) => {
             arr.push(this.testguan(item, index, this.addPipeForm))
          })
          console.log(this.guanduanpicFile)
          Promise.all(arr).then(res => {
            console.log(res, 'tupian d e')
            let pics = res.join(',')
            let changeObj = {
              in_juncid: this.addPipeForm.inJuncid,
              out_juncid: this.addPipeForm.outJuncid,
              district_id: this.addPipeForm.district_id,
              district_name: this.addPipeForm.district_name,
              pipe_categ: this.addPipeForm.pipeCateg == '' ? null : Number(this.addPipeForm.pipeCateg),
              material: this.addPipeForm.material == '' ? null : Number(this.addPipeForm.material),
              material_name: this.addPipeForm.material_name == '' ? null : this.addPipeForm.material_name,
              pipe_lengt: this.addPipeForm.pipeLengt == '' ? null : Number(this.addPipeForm.pipeLengt),
              shape_data: this.addPipeForm.shapeData == '' ? null : this.addPipeForm.shapeData,
              flowdirect: this.addPipeForm.flowdirect == '' ? null : Number(this.addPipeForm.flowdirect),
              checkdirect: this.addPipeForm.checkdirect == '' ? null : Number(this.addPipeForm.checkdirect),
              check_method: this.addPipeForm.checkMethod == '' ? null : Number(this.addPipeForm.checkMethod),
              check_date: this.addPipeForm.check_date == '' ? null : this.addPipeForm.check_date,
              is_complete: this.addPipeForm.isComplete == '' ? null : Number(this.addPipeForm.isComplete),
              remark: this.addPipeForm.remark == '' ? null : this.addPipeForm.remark,
              status: this.addPipeForm.status == '' ? null : Number(this.addPipeForm.status),
              pipeid: pipeid,
              del_flag: 0,
              in_juncid_ms: this.addPipeForm.in_juncid_ms,
              out_juncid_ms: this.addPipeForm.out_juncid_ms,
              starsurfac: this.addPipeForm.starsurfac == '' ? null : this.addPipeForm.starsurfac,
              endsurface: this.addPipeForm.endsurface == '' ? null : this.addPipeForm.endsurface,
              startx: this.addPipeForm.startx,
              starty: this.addPipeForm.starty,
              endx: this.addPipeForm.endx,
              endy: this.addPipeForm.endy,
              locationcode: this.addPipeForm.locationcode,
              road_name: this.addPipeForm.road_name,
              constructi: this.addPipeForm.constructi == '' ? null : this.addPipeForm.constructi,
              pipe_pic: pics,
              pipe_juli: this.addPipeForm.pipe_juli
            }
            if (changeObj.startx !== '' && changeObj.starty !== '' && changeObj.endx !== '' && changeObj.endy !== '' ) {
              addFeatureByPoint(changeObj, 'pipe', 'pipe', (res) => {
                this.chooseobjectid = res[0].objectId
              })
            } else {
              enableCreatePoly(changeObj, this.addType, false, 'paishuiguan')
            }
            this.nowPipeid = pipeid
          }).catch(err => {
            console.log('error', err)
          })
        }
      }
    },
    groupByjuncid (data) {
      let params = {
        params: [data],
        type: 'pipe'
      }
      return new Promise((resolve, reject)=>{
          this.$post(`${apiNames['导出数据分组']}`, params).then(res => {
              let getData = res
              resolve(getData)
          })
      })
    },
    editpaishuiguan () {
      // 先存照片到服务器成功后再新增管道缺陷
      let arr = []
      this.guanduanpicFile.forEach(async (item, index) => {
          arr.push(this.testguan(item, index, this.addPipeForm))
      })
      console.log(this.guanduanpicFile)
      Promise.all(arr).then(res => {
          let pics = res.join(',')
          let changeObj = {
          in_juncid: this.addPipeForm.inJuncid,
          out_juncid: this.addPipeForm.outJuncid,
          district_id: this.addPipeForm.district_id,
          district_name: this.addPipeForm.district_name,
          pipe_categ: this.addPipeForm.pipeCateg == '' ? null : Number(this.addPipeForm.pipeCateg),
          material: this.addPipeForm.material == '' ? null : Number(this.addPipeForm.material),
          material_name: this.addPipeForm.material_name == '' ? null : this.addPipeForm.material_name,
          pipe_lengt: this.addPipeForm.pipeLengt == '' ? null : Number(this.addPipeForm.pipeLengt),
          shape_data: this.addPipeForm.shapeData == '' ? null : this.addPipeForm.shapeData,
          flowdirect: this.addPipeForm.flowdirect == '' ? null : Number(this.addPipeForm.flowdirect),
          checkdirect: this.addPipeForm.checkdirect == '' ? null : Number(this.addPipeForm.checkdirect),
          check_method: this.addPipeForm.checkMethod == '' ? null : Number(this.addPipeForm.checkMethod),
          check_date: this.addPipeForm.check_date == '' ? null : this.addPipeForm.check_date,
          is_complete: this.addPipeForm.isComplete == '' ? null : Number(this.addPipeForm.isComplete),
          remark: this.addPipeForm.remark == '' ? null : this.addPipeForm.remark,
          status: this.addPipeForm.status == '' ? null : Number(this.addPipeForm.status),
          pipeid: this.nowPipeid,
          del_flag: 0,
          in_juncid_ms: this.addPipeForm.in_juncid_ms,
          out_juncid_ms: this.addPipeForm.out_juncid_ms,
          starsurfac: this.addPipeForm.starsurfac,
          endsurface: this.addPipeForm.endsurface,
          startx: this.addPipeForm.startx,
          starty: this.addPipeForm.starty,
          endx: this.addPipeForm.endx,
          endy: this.addPipeForm.endy,
          locationcode: this.addPipeForm.locationcode,
          road_name: this.addPipeForm.road_name,
          objectid: this.chooseobjectid,
          constructi: this.addPipeForm.constructi == '' ? null : this.addPipeForm.constructi,
          judge_dispose: this.addPipeForm.judge_dispose,
          pipe_pic: this.addPipeForm.pipe_pic ? `${this.addPipeForm.pipe_pic},${pics}` : pics,
          pipe_juli: this.addPipeForm.pipe_juli,
        }
        if (changeObj.startx !== '' && changeObj.starty !== '' && changeObj.endx !== '' && changeObj.endy !== '') {
          editFeatureByPoint(changeObj, 'pipe', 'paishuiguan', () => {
            // quexianshuju jiaohuan
            if (this.pipeQxListArr.length !== 0 && this.changeBoolean) {
              let params = {
                flag: 1,
                pipeid: this.nowPipeid
              }
              this.$get(apiNames['切换数据'], params).then(res => {
                this.queryPipeQxList()
                this.changeBoolean = false
              })
            }
          })
        }
      })
    },
    checkDefectIsEmty () {
      let boolean = false
      for (const key in this.addDefetsForm) {
        if (Object.hasOwnProperty.call(this.addDefetsFormField, key)) {
          const element = this.addDefetsForm[key];
          if (element === '' || element === null ) {
            notification.error({ message: '添加提示', description: this.addDefetsFormField[key]})
            return false
          } else {
            boolean = true
            continue
          }
        }
      }
      return boolean
    },
    editcheckDefectIsEmty (obj) {
      let boolean = false
      for (const key in obj) {
        if (Object.hasOwnProperty.call(this.addDefetsFormField, key)) {
          const element = obj[key];
          if (element === '' || element === null ) {
            notification.error({ message: '添加提示', description: this.addDefetsFormField[key]})
            return false
          } else {
            boolean = true
            continue
          }
        }
      }
      return boolean
    },
    async test(item, index, obj){
      let n = await this.uploadPicQian(item, index, obj)
      return  n
    },
    async testguan(item, index, obj){
      let n = await this.guandaoPicUpload(item, index, obj)
      return  n
    },
    newQxAdd () {
      let l1 = this.addDefetsForm.defectJlstart == '--' ? 0 : this.addDefetsForm.defectJlstart
      let L = this.addPipeForm.pipeLengt
      let x1 = this.addPipeForm.startx
      let y1 = this.addPipeForm.starty
      let x2 = this.addPipeForm.endx
      let y2 = this.addPipeForm.endy
      let x3=(l1/L)*(x2-x1)+x1
      let y3=(l1/L)*(y2-y1)+y1
      
      let checkStatus = this.checkDefectIsEmty()
      if (checkStatus) {
        if (this.nowPipeid === '') {
          notification.success({ message: '添加提示', description: '未获取到管道id'})
        } else {
          let arr = []
          // 先存照片到服务器成功后再新增管道缺陷
          this.allFileArr = this.newfileShowbefore.concat(this.newfileShowafter)
          this.allFileArr.forEach(async (item, index) => {
             arr.push(this.test(item, index, this.addDefetsForm))
          })
          console.log(this.allFileArr)
          Promise.all(arr).then(res => {
            let qianStr = res.slice(0,this.newfileShowbefore.length)
            let houStr = res.slice(this.newfileShowbefore.length)
            // if (res.length !== 0) {
            //   res.forEach((item) => {
            //     let a = document.createElement('a');
            // 　　a.href = item;
            // 　　a.target = '_blank';
            //     let picArr = item.split('/')
            //     a.setAttribute('download', picArr[picArr.length - 1]);
            // 　　document.body.appendChild(a);
            // 　　a.click();
            // 　　document.body.removeChild(a);
            //   })
            // }
            this.addDefetsForm.pipeid = this.nowPipeid
            this.addDefetsForm.fileRelat = qianStr.join(',')
            this.addDefetsForm.fileRelatafter = houStr.join(',')
            this.addDefetsForm.fileVideo = this.videoUrlQian
            this.addDefetsForm.fileVideoafter = this.videoUrlHou
            if (this.addDefetsForm.defectJlend) {
              this.addDefetsForm.defectLen = this.addDefetsForm.defectJlend - this.addDefetsForm.defectJlstart
            }
            this.addDefetsForm.defectName = this.addDefetsForm.defectCode !== '' ? this.checkTypeChild1.filter((item) => {
              return item.value == this.addDefetsForm.defectCode
            })[0].title : ''
            this.addDefetsForm.isDispose = 0
            this.addDefetsForm.delFlag = 0
            this.addDefetsForm.locationcode = this.addPipeForm.locationcode
            this.addDefetsForm.road_name = this.roadArr.filter((item) => {
              return item.value == this.addPipeForm.locationcode
            })[0].title
            let objString = JSON.stringify(this.addDefetsForm);
            let paramObj = JSON.parse(objString);
            if (paramObj.defectData == '--') {
              paramObj.defectData = 0
            }
            if (paramObj.defectJlstart == '--') {
              paramObj.defectJlstart = 99999
            }
            if (paramObj.defectJlend == '--') {
              paramObj.defectJlend = 99999
            }
            addQXtoMap('add', x3, y3, paramObj, () => {
              this.queryPipeQxList()
            })
            // this.$post(apiNames['新增管道缺陷'], this.addDefetsForm).then(res => {
            //   if (res.code == 200) {
            //     notification.success({ message: '添加提示', description: '新增缺陷成功'})
            //     // addQXtoMap(x3, y3, this.addDefetsForm)
            //     this.queryPipeQxList()
            //   } else {
            //     notification.error({ message: '添加提示', description: res.message})
            //   }
            // })
          }).catch(err => {
            console.log('error', err)
          })
        }
      }
    },
    async testEdit(item, index, obj){
      let n = await this.uploadPicHou(item, index, obj)
      return  n
    },
    editSave (item, chooseIndex) {
      let l1 = item.defectJlstart == '--' ? 0 : item.defectJlstart
      let L = this.addPipeForm.pipeLengt
      let x1 = this.addPipeForm.startx
      let y1 = this.addPipeForm.starty
      let x2 = this.addPipeForm.endx
      let y2 = this.addPipeForm.endy
      let x3=(l1/L)*(x2-x1)+x1
      let y3=(l1/L)*(y2-y1)+y1
      let checkStatus = this.editcheckDefectIsEmty(item)
      if (checkStatus) {
        if (this.nowPipeid === '') {
          notification.success({ message: '添加提示', description: '未获取到管道id'})
        } else {
          let arr = []
          // 先存照片到服务器成功后再新增管道缺陷
          let allFileEditArr = this.editfileShowbefore[chooseIndex].concat(this.editfileShowafter[chooseIndex])
          allFileEditArr.forEach(async (itemOne, index) => {
             arr.push(this.testEdit(itemOne, index, item))
          })
          Promise.all(arr).then(res => {
            console.log(res, '删除原有的然后新增的图片格式')
            let qianArr = res.slice(0,this.editfileShowbefore[chooseIndex].length)
            let houArr = res.slice(this.editfileShowbefore[chooseIndex].length)

            let qianL = this.editPicShowbefore[chooseIndex].length - this.editfileShowbefore[chooseIndex].length
            let houL = this.editPicShowafter[chooseIndex].length - this.editfileShowafter[chooseIndex].length

            let aa = this.editPicShowbefore[chooseIndex]
            let bb = this.editPicShowafter[chooseIndex]

            // let qianStr = item.pipeQxfileRelat.concat(qianArr)
            // let houStr = item.pipeQxfileRelatafter.concat(houArr)
            let qianStr = aa.slice(0,qianL).concat(qianArr)
            let houStr = bb.slice(0,houL).concat(houArr)

            console.log(qianArr, '修复前新增的图片')
            console.log(houArr, '修复后新增的图片')
            console.log(qianL)
            console.log(houL)
            console.log(aa, '修复前新增的图片')
            console.log(bb, '修复后新增的图片')
            console.log(qianStr)
            console.log(houStr)
            let fArr = []
            if (item.checkType == 1) {
                fArr = JSON.parse(window.localStorage.getItem('allDictItems'))['functionalDefects']
            } else {
                fArr = JSON.parse(window.localStorage.getItem('allDictItems'))['structureDefects']
            }
            if (item.defectJlend) {
              item.defectLen = item.defectJlend - item.defectJlstart
            }
            item.defectName = item.defectCode !== '' ? fArr.filter((ele) => {
              return ele.value == item.defectCode
            })[0].title : ''
            item.fileRelat = qianStr.length == 0 ? item.pipeQxfileRelat.join(',') : qianStr.join(',')
            item.fileRelatafter = houStr.length == 0 ? item.pipeQxfileRelatafter.join(',') : houStr.join(',')
            item.locationcode = this.addPipeForm.locationcode
            item.road_name = this.roadArr.filter((ele) => {
              return ele.value == this.addPipeForm.locationcode
            })[0].title
            let objString = JSON.stringify(item);
            let paramObj = JSON.parse(objString);
            if (paramObj.defectData == '--') {
              paramObj.defectData = 0
            }
            if (paramObj.defectJlstart == '--') {
              paramObj.defectJlstart = 99999
            }
            if (paramObj.defectJlend == '--') {
              paramObj.defectJlend = 99999
            }
            addQXtoMap('edit', x3, y3, paramObj, () => {
              notification.success({ message: '添加提示', description: '编辑缺陷成功'})
            })

          })
        }
      }
    },
    dateChoose (date) {
      this.addPipeForm.check_date = moment(date).format('YYYY-MM-DD')
    },
    burialDateChoose (date) {
      this.addPipeForm.constructi = moment(date).format('YYYY-MM-DD')
    },
    clearData () {
      this.addPipeForm.pipeCateg = '4'
      this.addPipeForm.material = '13'
      this.addPipeForm.pipeLengt = ''
      this.addPipeForm.inJuncid = ''
      this.addPipeForm.in_juncid_ms = ''
      this.addPipeForm.out_juncid_ms = ''
      this.addPipeForm.outJuncid = ''
      this.addPipeForm.shapeData = ''
      this.addPipeForm.starsurfac = ''
      this.addPipeForm.flowdirect = ''
      this.addPipeForm.endsurface = ''
      this.addPipeForm.checkMethod = ''
      this.addPipeForm.burialAddress = ''
      this.addPipeForm.check_date = ''
      this.addPipeForm.isComplete = ''
      this.addPipeForm.remark = ''
      this.addPipeForm.status = ''
      this.addPipeForm.startx = ''
      this.addPipeForm.starty = ''
      this.addPipeForm.endx = ''
      this.addPipeForm.endy = ''
      this.addPipeForm.road_name = ''
    },
    clearAlladd () {
      this.addDefetsForm = {
        inJuncid: '',
        outJuncid: '',
        fileRelat: '',
        defectJlstart: '',
        defectJlend: '',
        checkType: '',
        defectCode: '',
        defectName: '',
        road_name: '',
        defectGra: '',
        locationcode: '',
        remark: '',
        checkRect: '',
        clock: ''
      },
      this.$forceUpdate()
      this.dataUrl = ''
    },
    editFaceQian2 (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.pipeQxListArr[this.chooseOneEdit1Index].fileVideo = res.message
      })
    },
    editFaceHou2 (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.pipeQxListArr[this.chooseOneEdit2Index].fileVideoafter = res.message
      })
    },
    updateFaceQian (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        console.log(res)
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.videoUrlQian = res.message
      })
    },
    updateFaceHou (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.videoUrlHou = res.message
      })
    },
    updateFaceQian2 (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        console.log(res)
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.videoUrlQian = res.message
      })
    },
    updateFaceHou2 (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        console.log(res)
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        this.videoUrlHou = res.message
      })
    },
    updateFaceQian3 (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        console.log(res)
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        // this.popvideoUrlQian = res.message
        this.pipeQxListArr[this.whitchIndexQian].fileVideo = res.message
      })
    },
    updateFaceHou3 (e) {
      const hide = message.loading({ content: '正在上传视频...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `video/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        console.log(res)
        hide()
        message.success({ content: '上传视频成功!', duration: 2 })
        // this.popvideoUrlHou = res.message
        this.pipeQxListArr[this.whitchIndexHou].fileVideoafter = res.message
      })
    },
    getFormateDate () {
      let date = new Date()
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    },
    // 上传图片判断格式
    handlechangePic (e) {
      let inputDOM = this.$refs.picinputs
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        console.log(inputDOM.files[0])
        // 通过DOM取文件数据
        this.imgPreview(inputDOM.files[0])
        this.uploadPic(inputDOM.files[0])
        e.target.value = ''
      }
    },
    changePicqianshabi (e) {
      let inputDOM = this.$refs.picinputsqian
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.newPicShowbefore.push(URL.createObjectURL(inputDOM.files[i]))
          this.newfileShowbefore.push(inputDOM.files[i])
          // this.uploadPicQian(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    guanduanPic (e) {
      let inputDOM = this.$refs.picinputguanduan
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.guanduanpicShow.push(URL.createObjectURL(inputDOM.files[i]))
          this.guanduanpicFile.push(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    changePichoushabi (e) {
      let inputDOM = this.$refs.picinputshou
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.newPicShowafter.push(URL.createObjectURL(inputDOM.files[i]))
          this.newfileShowafter.push(inputDOM.files[i])
          // this.uploadPicHou(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    chooseOneEdit1 (index) {
      this.chooseOneEdit1Index = index
    },
    chooseOneEdit2 (index) {
      this.chooseOneEdit2Index = index
    },
    editPicqianshabi (e) {
      let inputDOM = this.$refs[`picinputsqian${this.chooseOneEdit1Index}`][0]
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelat.push(URL.createObjectURL(inputDOM.files[i]))
          this.editfileShowbefore[this.chooseOneEdit1Index].push(inputDOM.files[i])
          // this.editPicShowbefore[this.chooseOneEdit1Index] = this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelat
          this.editPicShowbefore[this.chooseOneEdit1Index].push(URL.createObjectURL(inputDOM.files[i]))
          // editPicShowbefore: [],
          // editPicShowafter: [],
        }
        e.target.value = ''
      }
    },
    
    editPichoushabi (e) {
      let inputDOM = this.$refs[`picinputshou${this.chooseOneEdit2Index}`][0]
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.pipeQxListArr[this.chooseOneEdit2Index].pipeQxfileRelatafter.push(URL.createObjectURL(inputDOM.files[i]))
          this.editfileShowafter[this.chooseOneEdit2Index].push(inputDOM.files[i])
          // this.editPicShowafter[this.chooseOneEdit2Index] = this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelatafter
          this.editPicShowafter[this.chooseOneEdit2Index].push(URL.createObjectURL(inputDOM.files[i]))
          // this.uploadEditHou(inputDOM.files[i])
        }
        console.log(this.pipeQxListArr[this.chooseOneEdit2Index].pipeQxfileRelatafter)
        e.target.value = ''
      }
    },
    editdeletePicActqian (index, idx) {
      // this.editPicShowbefore[index] = this.pipeQxListArr[index].pipeQxfileRelat
      this.pipeQxListArr[index].pipeQxfileRelat = this.pipeQxListArr[index].pipeQxfileRelat.filter((ele, loc) => {
        return loc !== idx
      })
      this.editPicShowbefore[index] = this.editPicShowbefore[index].filter((ele, loc) => {
        return loc !== idx
      })
      // 已经保存的图片的个数
      let length = this.pipeQxListArr[index].pipeQxfileRelat.length - this.editfileShowbefore[index].length
      // 判断删除的是第几张的位置
      if (idx >= length) {
        let newidx = idx - length
        // 新增加的图片文件
        this.editfileShowbefore[index] = this.editfileShowbefore[index].filter((ele, loc) => {
          return loc !== newidx
        })
      }
    },
    editdeletePicActhou (index, idx) {
      this.pipeQxListArr[index].pipeQxfileRelatafter = this.pipeQxListArr[index].pipeQxfileRelatafter.filter((ele, loc) => {
        return loc !== idx
      })
      this.editfileShowafter[index] = this.editfileShowafter[index].filter((ele, loc) => {
        return loc !== idx
      })
      let length = this.pipeQxListArr[index].pipeQxfileRelatafter.length - this.editfileShowafter[index].length
      if (idx >= length) {
        let newidx = idx - length
        this.editfileShowafter[index] = this.editfileShowafter[index].filter((ele, loc) => {
          return loc !== newidx
        })
        // this.editPicShowafter[index] = this.editPicShowafter[index].filter((ele, loc) => {
        //   return loc !== newidx
        // })
      }
    },
    uploadEditQian (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelat.push(res.message)
      })
    },
    uploadEditHou (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        this.pipeQxListArr[this.chooseOneEdit2Index].pipeQxfileRelatafter.push(res.message)
      })
    },
    handlechangePic3 (e) {
      let inputDOM = this.$refs.picinputs3
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        console.log(inputDOM.files[0])
        // 通过DOM取文件数据
        this.imgPreview(inputDOM.files[0])
        this.uploadPic(inputDOM.files[0])
        e.target.value = ''
      }
    },
    uploadPic (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        this.picTempUrl = res.message
        // console.log(res.message)
      })
    },
    uploadPicQian (file, index, obj) {
      console.log(file, '能获取到名字吗')
      let formData = new FormData();
      let yuduname = `(${obj.inJuncid}-${obj.outJuncid})0${index + 1}_${obj.defectCode}_${obj.defectGra}_${obj.checkType}.jpg`
      let xmname = `${obj.inJuncid}-${obj.outJuncid}-${this.changeNumtoFour(obj.defectJlstart)}0${index + 1}.jpg`
      let selfName = file.name
      formData.append('file', file, selfName);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      return new Promise((resolve, reject) => {
        this.$post(apiNames['上传图片'], formData).then(res => {
          resolve(res.message)
        })
      })
    },
    guandaoPicUpload (file, index, obj) {
      let formData = new FormData();
      let xmname = `${obj.inJuncid}-${obj.outJuncid}-00000${index + 1}.jpg`
      let selfName = file.name
      formData.append('file', file, selfName);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      return new Promise((resolve, reject) => {
        this.$post(apiNames['上传图片'], formData).then(res => {
          resolve(res.message)
        })
      })
    },
    changeNumtoFour (num) {
      if (num == '--') {
        return '0000'
      } else {
        if (this.isInteger(Number(num))) {
          if (num.toString().length == 1) {
            return `00${num.toString()}0`
          } else if (num.toString().length == 2) {
            return `0${num.toString()}0`
          } else if (num.toString().length == 3) {
            return `${num.toString()}0`
          }
        } else {
          let newNum = Number(num).toFixed(1) / 1000
          return newNum.toString().split('.')[1]
        }
      }
    },
    isInteger(num) {
      return num % 1 === 0
    },
    uploadPicHou (file, index, obj) {
      let formData = new FormData();
      let yuduname = `(${obj.inJuncid}-${obj.outJuncid})0${index + 1}_${obj.defectCode}_${obj.defectGra}_${obj.checkType}.jpg`
      let xmname = `${obj.inJuncid}-${obj.outJuncid}-${this.changeNumtoFour(obj.defectJlstart)}0${index + 1}.jpg`
      let selfName = file.name
      formData.append('file', file, selfName);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      return new Promise((resolve, reject) => {
        this.$post(apiNames['上传图片'], formData).then(res => {
          resolve(res.message)
        })
      })
    },
    closePopShow () {
      this.popShow = false
    },
    // DOM取文件数据
    imgPreview (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          self.dataUrl = reader.result
        }
      }
    },
    imgPreviewQian (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          self.showPicUrlQian = reader.result
        }
      }
    },
    imgPreviewHou (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          self.showPicUrlHou = reader.result
        }
      }
    },
    chooseWitchPic (index) {
        this.pipeQxListArr[index].fileRelat = this.dataUrl
    },
    chooseWitchPic1 () {
        this.showPicUrl = this.dataUrl
    },
    chooseWitchVideoQian (index) {
      this.whitchIndexQian = index
      // this.pipeQxListArr[index].fileVideo = this.videoUrlQian
    },
    chooseWitchVideoHou (index) {
      this.whitchIndexHou = index
      console.log(this.whitchIndexHou)
      // this.pipeQxListArr[index].fileVideoafter = this.videoUrlHou
    },
    deletePicActpop () {
      this.$forceUpdate()
      this.showPicUrl = ''
      let params = {
        filename: this.picTempUrl.split('yudu/')[1]
      }
      this.$delete(apiNames['删除文件'], params).then(res => {
        if (res.code == 200) {
          notification.success({ message: '添加提示', description: '删除成功'})
        } else {
          notification.error({ message: '添加提示', description: res.message})
        }
      })
    },
    getFileUrl (obj) {
      let url
      url = window.URL.createObjectURL(obj.files.item(0))
      return url
    },
    handleChange1 (info) {
      let description = this.checkType.filter((item) => {
        return item.value == info
      })[0].description
      this.checkTypeChild1 = JSON.parse(window.localStorage.getItem('allDictItems'))[description]
    },
    handleChangeQx (info) {
      this.checkTypeChild2 = JSON.parse(window.localStorage.getItem('allDictItems'))[info]
    },
    handleChangeGra (info) {
      this.addDefetsForm.defectData = this.checkTypeChild2[info-1].text
    },
    getGradeByQx (defectCode) {
      return JSON.parse(window.localStorage.getItem('allDictItems'))[defectCode]
    },
    handleChangeGra2 (info) {
      let arr = JSON.parse(window.localStorage.getItem('allDictItems'))[this.pipeQxListArr[this.chooseGraIndex].defectCode]
      this.$set(this.pipeQxListArr[this.chooseGraIndex],'defectData', arr[info-1].text)
    },
    chooseGra (index) {
      this.chooseGraIndex = index
    },
    handleChange11 () {},
    handleChange2 () {},
    stopProg () {},
    actionDo (item) {
      let parseArr = item
      this.placeholder = parseArr.districtName
      this.addPipeForm = {
        inJuncid: parseArr.inJuncid,
        outJuncid: parseArr.outJuncid,
        district_id: parseArr.districtId,
        district_name: parseArr.districtName,
        pipeCateg: '' + parseArr.pipeCateg,
        material: '' + parseArr.material,
        pipeLengt: parseArr.pipeLengt,
        shapeData: parseArr.shapeData,
        flowdirect: '' + parseArr.flowdirect,
        checkdirect: '' + parseArr.checkdirect,
        checkMethod: '' + parseArr.checkMethod,
        recordDat: parseArr.recordDat,
        isComplete: '' + parseArr.isComplete,
        remark: parseArr.remark,
        status: '' + parseArr.status,
        pipeid: parseArr.pipeid,
        in_juncid_ms: parseArr.inJuncidMs,
        out_juncid_ms: parseArr.outJuncidMs,
        starsurfac: parseArr.starsurfac,
        endsurface: parseArr.endsurface,
        startx: parseArr.startx,
        starty: parseArr.starty,
        endx: parseArr.endx,
        endy: parseArr.endy,
        locationcode: parseArr.locationcode,
        road_name: parseArr.road_name,
        check_date: parseArr.checkDate,
        constructi: parseArr.constructi,
        judge_dispose: parseArr.judgeDispose,
        pipe_pic: parseArr.pipePic,
        pipe_juli: parseArr.pipeJuli,
        proId: '',
        gcId: ''
      }
      this.addDefetsForm = {
        inJuncid: '',
        outJuncid: '',
        fileRelat: '',
        defectJlstart: '--',
        defectJlend: '--',
        defectLen: '',
        checkType: '',
        defectCode: '',
        defectName: '',
        locationcode: '',
        road_name: '',
        defectGra: '',
        remark: '',
        checkRect: '',
        defectData: '--',
        delFlag: 0,
        clock: ''
      },
      this.guanduanpicShow = parseArr.pipePic ? parseArr.pipePic.split(',') : []
      this.addDefetsForm.inJuncid = parseArr.inJuncid
      this.addDefetsForm.outJuncid = parseArr.outJuncid

      this.addDefetsForm.defectData = '--'
      this.addDefetsForm.defectJlstart = '--'
      this.addDefetsForm.defectJlend = '--'

      this.nowPipeid = parseArr.pipeid
      this.chooseobjectid = parseArr.objectid
      this.getProid(item.locationcode)
      searchGraphicByObjectId(item.objectid, 'ps_pipe')
      // this.popShow = true
      this.queryBydistrictId(parseArr.districtId)
      this.pipeQxListArr = []
      this.queryPipeQxList()
    },
    showDetial (item) {
      showInmap(item, 'ps_pipe')
      this.actionDo(item)
      this.choose(2)
    },
    getProid (locationcode) {
      this.$get(apiNames['获取工程和项目信息'], {locationcode}).then(res => {
        this.addPipeForm.proId = res.result[0].proId
        this.addPipeForm.gcId = res.result[0].id
        console.log(this.addPipeForm)
      })
    },
    choose (num) {
      this.chooseNum = num
      if (num == 1) {
        // this.placeholder = ''
        if (window.localStorage.getItem('searchMapData')) {
        } else {
          this.searchForm.pageNo = 1
          this.pipeArrList = []
        }
      }
      this.$forceUpdate()
    },
    infiniteHandler($state) {
       this.queryPipeList($state)
    },
    deleteQx (item) {
      let l1 = item.defectJlstart == '--' ? 0 : item.defectJlstart
      let L = this.addPipeForm.pipeLengt
      let x1 = this.addPipeForm.startx
      let y1 = this.addPipeForm.starty
      let x2 = this.addPipeForm.endx
      let y2 = this.addPipeForm.endy
      let x3=(l1/L)*(x2-x1)+x1
      let y3=(l1/L)*(y2-y1)+y1
      addQXtoMap('delete', x3, y3, item, () => {
        notification.success({ message: '删除提示', description: '编辑缺陷删除成功'})
        this.queryPipeQxList()
      })
    }
  },
  beforeDestroy() {
  },
}
</script>
<style lang='scss'>
 .right_1 .ant-select {
  color: white;
}
.ant-modal {
  margin-left: 3rem;
}
.ant-modal-content {
  background-color: #205187!important;
  color: white!important;
}
.ant-modal-header {
  background-color: #205187!important;
  color: white!important;
}
.ant-modal-title {
  color: white!important;
}
.ant-modal-body {
  padding: 0!important;
}
#pppopInfos .ant-input, #pppopInfos .ant-select-selection--single {
  background: #205187!important;
  color: white;
  border: .02rem solid #03ace3;
  height: .5rem;
}
#pppopInfos .ant-select-selection__rendered {
  margin: 0;
  line-height: .52rem;
}
#pppopInfos .ant-select-dropdown-menu-item, #pppopInfos .ant-input {
  padding: 0;
}
#pppopInfos .ant-calendar-picker-clear {
  background: none;
  color: #03ace3
}
#addNewPipe {
  text-align: left;
}
#addNewPipe .ant-input, #addNewPipe .ant-select-selection--single {
  background: #205187!important;
  color: white;
  border: .02rem solid #03ace3;
  height: .5rem;
}
#addNewPipe .ant-select-selection__rendered {
  margin: 0;
  line-height: .52rem;
}
#addNewPipe .ant-select-dropdown-menu-item, #addNewPipe .ant-input {
  padding: 0;
}
#addNewPipe .ant-calendar-picker-clear {
  background: none;
  color: #03ace3
}
#searchList .ant-select-selection--single {
  color: white;
}
#searchList .ant-select-selection__clear {
  background: none;
  color: #03ace3
}
#addNewPipe .swiper-button-prev {
  left: -.28rem;
  height: .4rem;
  margin-top: -.18rem;
}
#addNewPipe .swiper-button-next {
  right: -.28rem;
  height: .4rem;
  margin-top: -.18rem;
}
</style>

<style scoped lang='scss'>
    .hoverClass {
      background: #4b82bb; 
    }
    .titleName {
          width: 1.68rem;
          // position: relative;
          height: .56rem;
          font-size: .36rem;
          line-height: .56rem;
          font-family: SimHei;
    }
    .activeClass {
      background-image: url('../../../assets/imgs/zhihuipaishui/ppline/selected.png');
      background-size: 100% 100%;
      color: rgba(0, 183, 238, 1);
    }
    .splitline {
      width: .04rem;
      height: .36rem;
      background: #9599a6;
      margin: .1rem .2rem;
    }
    .smallTitle {
      font-size: .24rem;
      font-family: SimHei;
      color: #07E6ED;
      padding-top: .1rem;
    }
    // .right {
      // cursor: pointer;
      // width: 8.92rem;
      // height: 98%;
      // position: absolute;
      // z-index: 10;
      // right: .4rem;
      // top: 0;
      // display: flex;
      // flex-direction: column;
      .right_2 {
        flex: 1;
        width: 446px;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        .chooseModule {
          display: flex;
          padding: 0 0 0 .4rem;
          border-top: .02rem solid #205187;
          border-bottom: .02rem solid #205187;
        }
        .lightClass {
          width: 100%;
          height: .4rem;
          position: absolute;
          left: 0;
          top: -.2rem;
        }
        .questionArr {
          width: 100%;
          flex: 1;
          overflow: hidden;
          position: relative;
          font-size: .28rem;
          // margin: 0 4%;
          .header {
            display: flex;
            div {
              // flex: 1;
              height: .68rem;
              background: rgb(0,0,0,0.35);
              text-align: center;
              line-height: .68rem;
              border: .02rem solid #205187;
              border-right: none;
              border-bottom: none;
              flex-grow: 2;
            }
            div:last-child {
              border-right: .02rem solid #205187;
            }
          }
          .questionArr_content {
            position: absolute;
            overflow: auto;
            width: 101.8%;
            height: calc(100% - .88rem);
            .questionArr_content_item{
              display: flex;
              div {
                // width: 240px;
                height: .68rem;
                background: rgb(0,0,0,0.35);
                text-align: center;
                line-height: .68rem;
                border: .02rem solid #205187;
                border-right: none;
                // flex-grow: 2;
              }
              div:last-child {
                border-right: .04rem solid #205187;
              }
            }
            .questionArr_content_item:hover {
              background: #11568b;
            }
          }
        }
        .pipeInfo {
              width: 99%;
              // min-height: 7.26rem;
              border: .02rem solid #0f4c7f;
              display: inline-block;
              position: relative;
              .titleBac {
                width: 94%;
                height: .74rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/titleBac.png');
                background-size: 100% 100%;
                line-height: .74rem;
                padding-left: 6%;
              }
              .conTain {
                position: absolute;
                height: 100%;
                left: 0;
                top: .74rem;
                width: 100%;
                .line {
                  width: 100%;
                  height: .72rem;
                  border-bottom: .02rem solid #04346a;
                  display: flex;
                  line-height: .72rem;
                  justify-content: flex-start;
                  font-size: .28rem;
                }
                .line >div {
                  margin-left: .15rem;
                };
                .actionsButtton {
                  width: 60%;
                  display: flex;
                  margin-left: 20%;
                  margin-top: .3rem;
                  justify-content: space-around;
                  div {
                    width: .94rem;
                    height: .42rem;
                    font-size: .28rem;
                    background: rgba(84, 83, 83, 1);
                    border-radius: .1rem;
                    text-align: center;
                  }
                  div:hover{
                    background: #2781b4
                  }
                }
              }
            };
      }
      .info {
        position: absolute;
        width: 280%;
        height: 10.8rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/ppline/squareBac.png');
        background-size: 100% 100%;
        bottom: 0;
        right: 8rem;
        z-index: 10;
        .closeButton {
          position: absolute;
          right: .5rem;
          top: .3rem;
          width: .5rem;
          height: .5rem;
          border-radius: .25rem;
        }
        .closeButton:hover {
          // width: .5rem;
          // height: .5rem;
          // border-radius: .25rem;
          background: gray;
        }
        .text {
          text-align: left;
          position: relative;
          padding: .3rem 0 .1rem 0;
          text-indent: .4rem;
          font-size: .36rem;
        }
        .text:after {
          content: '';
          width: 2.2rem;
          height: .18rem;
          position: absolute;
          bottom: -.1rem;
          display:block;
          background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/split.png');
          background-size: 100% 100%;
        }
        .pipeName {
          display: flex;
          font-size: .36rem;
          margin: .22rem 0 0 .68rem;
          .back {
            width: .94rem;
            height: .42rem;
            background: #2781b4;
            font-size: .28rem;
            line-height: .42rem;
            border-radius: .1rem;
            margin: 0 .24rem 0 1.22rem;
          }
          .add {
            width: 1.54rem;
            height: .42rem;
            background: #2781b4;
            font-size: .28rem;
            line-height: .42rem;
            border-radius: .1rem;
            margin-left: .3rem;
          }
        }
        .scrollContent {
          width: 90%;
          margin:.1rem 0 0 .68rem;
          .content {
            width: 100%;
            white-space: nowrap;
            overflow-x: auto;
            text-align: left;
            .pipeInfo {
              width: 6.54rem;
              height: 9.66rem;
              border: .02rem solid #0f4c7f;
              margin-right: .46rem;
              display: inline-block;
              position: relative;
              .titleBac {
                width: 94%;
                height: .74rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/titleBac.png');
                background-size: 100% 100%;
                line-height: .74rem;
                padding-left: 6%;
              }
              .conTain {
                position: absolute;
                left: 0;
                top: .74rem;
                width: 100%;
                .line {
                  width: 100%;
                  height: .72rem;
                  border-bottom: .02rem solid #04346a;
                  display: flex;
                  line-height: .72rem;
                  justify-content: flex-start;
                  font-size: .28rem;
                }
                .line >div {
                  margin-left: .15rem;
                };
                .actionsButtton {
                  width: 60%;
                  display: flex;
                  margin-left: 20%;
                  margin-top: .3rem;
                  justify-content: space-around;
                  div {
                    width: .94rem;
                    height: .42rem;
                    font-size: .28rem;
                    background: rgba(84, 83, 83, 1);
                    border-radius: .1rem;
                    text-align: center;
                  }
                  div:hover{
                    background: #2781b4
                  }
                }
              }
            };
          }
        }
      }
    // }
</style>