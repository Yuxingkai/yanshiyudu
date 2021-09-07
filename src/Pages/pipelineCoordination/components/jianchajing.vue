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
              <span style="margin-right: .3rem;">井号:</span>
              <a-input v-model="searchForm.manholecode" style="width: 6.34rem" placeholder="" />
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">类别:</span>
              <a-select
                style="width: 1.5rem"
                allowClear
                placeholder=""
                optionFilterProp = "children"
                v-model="searchForm.manholeCategory"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in pipeCateg" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
              <span style="margin-right: .3rem;margin-left: .1rem;">是否混接:</span>
              <a-select
                style="width: 1.5rem"
                allowClear
                placeholder=""
                optionFilterProp = "children"
                v-model="searchForm.hybjunctio"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
            </div>
            <div v-if="moreSearch">
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">设施状态:</span>
                <a-select
                  style="width: 3rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  v-model="searchForm.status"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
                <!-- <span style="margin-right: .3rem;margin-left: .1rem;">是否满管:</span>
                <a-select
                  style="width: 3rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  v-model="selectedDeal"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in isDisposeArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select> -->
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
              <span @click="searchBySome" style="display: inline-block;width: 1.14rem;height: .5rem;background: #3F83B8;border-radius: .1rem;text-align: center;margin-left: 3rem;font-size: .34rem;">查询</span>
            </div>
          </div>
          <div v-if="chooseNum === 1" class="questionArr">
              <div class="header">
                <div>
                    井号
                </div>
                <div>
                    类别
                </div>
                <div>
                    井  深
                </div>
                <div>
                    高  程
                </div>
                <div>
                    是否混接
                </div>
              </div>
              <div class="questionArr_content">
                <div class="questionArr_content_item" v-for="(item, index) in pipeArrList" :key="index" @click.stop="showDetial(item)">
                    <div :title="item.manholecode" class="hideTextAndEllipsis">
                        {{ item.manholecode }}
                    </div>
                    <div :title="item.manholeCategory_dictText" class="hideTextAndEllipsis">
                        {{ item.manholeCategory_dictText }}
                    </div>
                    <div :title="item.depth" class="hideTextAndEllipsis">
                        {{ item.depth }}
                    </div>
                    <div>
                        {{ item.surfaceEl || '-' }}
                    </div>
                    <div>
                        {{ item.hybjunctio == 0 ? '否' : (item.hybjunctio == 1 ? '是' : '') }}
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
                <div class="pipeInfo">
                   <div class="titleBac">编辑</div>
                   <div class="conTain">
                      <div class="line">
                        <div>
                          <span>检查井号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.manholecode" />
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
                            v-model="addJianchaForm.proId"
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
                            v-model="addJianchaForm.gcId"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                              {{ role.gcName }}
                            </a-select-option>
                          </a-select>
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
                              v-model="addJianchaForm.locationcode"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                        </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>类别: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.manhole_category"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeCateg" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>类型: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.manhole_type"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in manholeTypeArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>形式: </span>
                            <a-select
                                style="width: 2.6rem;"
                                placeholder="请选择"
                                :showArrow="showArrow"
                                optionFilterProp = "children"
                                v-model="addJianchaForm.manhole_style"
                                :getPopupContainer= "(target) => target.parentNode">
                                <a-select-option v-for="(role,roleindex) in manholeStyleArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                                </a-select-option>
                            </a-select>
                        </div>
                          <div>
                            <span>井盖材质: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.cov_material"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeMaterial" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>井深(米): </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.depth" />
                          </div>
                          <div>
                            <span>地标高程: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.surface_el" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>起点X: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.x_coor" />
                          </div>
                          <div>
                            <span>起点Y: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.y_coor" />
                          </div>
                          <div @click="getPoint">
                            坐标拾取
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>是否混接: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.hybjunctio"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>是否联通: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.connected"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>设施状态: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.status"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>施工状态: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.is_complete"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in isCompleteArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>数据来源: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.datasource" />
                          </div>
                          <div>
                            <span>填报单位: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addJianchaForm.report_unit" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>填报日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 3rem;" @change="reportDateChoose" />
                            </a-locale-provider>
                          </div>
                          <div>
                            <span>建设年代: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 3rem;" @change="dateChoose" />
                            </a-locale-provider>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>是否装备防坠网: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.antifallin"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>井底形式: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.bottom_style"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in bottomStyleArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>检查井等级: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addJianchaForm.junc_class"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in juncClassArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                        <div style="width: 100%;">
                            <span>备注: </span>
                            <a-input style="width: 70%;" v-model="addJianchaForm.remark" placeholder="" />
                          </div>
                      </div>
                      <div class="actionsButtton">
                          <div @click="addNewPipeMeth">新增</div>
                          <div @click="editJianchajin">修改</div>
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
                <div class="pipeInfo">
                   <div class="titleBac">混接编辑</div>
                   <div class="conTain">
                      <div class="line">
                        <div>
                          <span>主井编号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="hunjieObj.wellcode" />
                        </div>
                        <div>
                          <span>混接点编号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="hunjieObj.hybridcode" />
                        </div>
                      </div>
                      <div class="line">
                        <span style="margin-left: .15rem;">参照物: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input ref="idhunjie1" style="position: absolute;left: -9999px;" id="idhunjie1" multiple @change="hunjiePic" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idhunjie1">
                              上传图片
                            </label>
                        </span>
                        <span v-if="hunjiePicShow.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption3" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in hunjiePicShow" :key="index">
                                    <span style="position: relative;">
                                      <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                      <img @click="delete3(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev swp3" slot="button-prev"></div>
                          <div class="swiper-button-next swp3" slot="button-next"></div>
                        </span>
                       </div>
                       <div class="line">
                        <span style="margin-left: .15rem;">近景图: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input ref="idjubu1" style="position: absolute;left: -9999px;" id="idjubu1" multiple @change="jubuPic" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idjubu1">
                              上传图片
                            </label>
                        </span>
                        <span v-if="jubuPicShow.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption4" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in jubuPicShow" :key="index">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                        <img @click="delete4(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev swp4" slot="button-prev"></div>
                          <div class="swiper-button-next swp4" slot="button-next"></div>
                        </span>
                       </div>
                       <div class="line">
                        <span style="margin-left: .15rem;">远景图: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input ref="idyuanjing1" style="position: absolute;left: -9999px;" id="idyuanjing1" multiple @change="yuanjinPic" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idyuanjing1">
                              上传图片
                            </label>
                        </span>
                        <span v-if="yuanjingPicShow.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption6" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in yuanjingPicShow" :key="index">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                        <img @click="delete6(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev swp6" slot="button-prev"></div>
                          <div class="swiper-button-next swp6" slot="button-next"></div>
                        </span>
                       </div>
                       <div class="line">
                        <span style="margin-left: .15rem;">管道示意图: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input ref="idguandaoshiyi1" style="position: absolute;left: -9999px;" id="idguandaoshiyi1" multiple @change="guandaoshiyiPic" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idguandaoshiyi1">
                              上传图片
                            </label>
                        </span>
                        <span v-if="guandaoshiyiPicShow.length !== 0" style="width: 50%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption5" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in guandaoshiyiPicShow" :key="index">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(item)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item" alt="">
                                        <img @click="delete5(index)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev swp5" slot="button-prev"></div>
                          <div class="swiper-button-next swp5" slot="button-next"></div>
                        </span>
                       </div>
                       <div class="line">
                          <div>
                            <span>设备类型: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="hunjieObj.facility_type"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in facilityTypeArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>混接类型: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="hunjieObj.problem_type"
                              @change="handleChange1"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in problemTypeArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>混接类别: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="hunjieObj.mixpoint_catogery"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in mixpointCatogeryArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>混接来源: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="hunjieObj.hjsource" />
                          </div>
                          <div>
                            <span>混接位置: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="hunjieObj.hyb_location" />
                          </div>
                      </div>
                      <div class="line">
                        <div style="width: 100%;">
                            <span>混接原因: </span>
                            <a-input style="width: 70%;" v-model="hunjieObj.hyb_rason" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>上游编号: </span>
                            <a-input style="width: 2rem;" v-model="hunjieObj.upstream_number" placeholder="" />
                          </div>
                          <div>
                            <span>接入管径: </span>
                            <a-input style="width: 2.6rem;" v-model="hunjieObj.pip_diameter" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>水质量类型: </span>
                            <a-input style="width: 2rem;" v-model="hunjieObj.waterquality" placeholder="" />
                          </div>
                          <div>
                            <span>水量数据: </span>
                            <a-input style="width: 2.6rem;" v-model="hunjieObj.waterflow" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>COD含量: </span>
                            <a-input style="width: 2rem;" v-model="hunjieObj.cod" placeholder="" />
                          </div>
                          <div>
                            <span>NH3-N含量: </span>
                            <a-input style="width: 2.6rem;" v-model="hunjieObj.nh3n" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>整改方案: </span>
                            <a-input style="width: 2rem;" v-model="hunjieObj.dischargercode" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>是否改造: </span>
                            <a-select
                              style="width: 1.5rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="hunjieObj.changed"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in changedArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>是否截流: </span>
                            <a-select
                              style="width: 1.5rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="hunjieObj.closure"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>截流设施: </span>
                            <a-input style="width: 1.5rem;" v-model="hunjieObj.dividerid" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>责任单位: </span>
                            <a-input style="width: 70%;" v-model="hunjieObj.mixpoint_res" placeholder="" />
                          </div>
                          <div>
                            <span>调查日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 3rem;" @change="datediaochaChoose" />
                            </a-locale-provider>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>整改单位: </span>
                            <a-input style="width: 60%;" v-model="hunjieObj.implementation" placeholder="" />
                          </div>
                          <div>
                            <span>计划改造日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 2.4rem;" @change="dategaizaoChoose" />
                            </a-locale-provider>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>整改预算: </span>
                            <a-input style="width: 60%;" v-model="hunjieObj.budget" placeholder="" />
                          </div>
                          <div>
                            <span>完成预算额: </span>
                            <a-input style="width: 60%;" v-model="hunjieObj.comp_budget" placeholder="" />
                          </div>
                      </div>
                      <div class="actionsButtton">
                          <div @click="addNewHunjie">新增</div>
                          <div @click="editHunjie">修改</div>
                          <div>
                            <a-locale-provider :locale="zhCN">
                              <a-popconfirm
                                title="确认删除?"
                                @confirm="confirmDeleteHunjie"
                                @cancel="cancelDelete"
                              >
                                <a href="javascript:;" style="color: white;">删除</a>
                              </a-popconfirm>
                             </a-locale-provider>
                          </div>
                          <div @click="clearHunjieData">清空</div>
                      </div>
                   </div>
                </div>
                <div class="pipeInfo">
                  <div class="titleBac">新增缺陷</div>
                  <div class="conTain">
                    <div class="line">
                      <!-- <div style="width: 50%;"> -->
                        <span style="margin-left: .15rem;">修复前: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input ref="picinputsqian1" style="position: absolute;left: -9999px;" id="idqian1" multiple @change="handlechangePicqian1" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idqian1">
                              上传图片
                            </label>
                        </span>
                        <span v-if="newAddQxPics.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption1" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in newAddQxPics" :key="index">
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
                        <!-- <img v-if="dataUrlqian" @click="showLargePic(dataUrlqian)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="dataUrlqian" alt="">
                        <img v-if="dataUrlqian" @click="deletePicActqian" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt=""> -->
                      <!-- </div> -->
                    </div>
                    <div class="line">
                      <!-- <div style="width: 50%;"> -->
                        <span style="margin-left: .15rem;">修复后: </span>
                        <span style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input ref="picinputshou1" style="position: absolute;left: -9999px;" id="idhou1" multiple @change="handlechangePichou1" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="idhou1">
                              上传图片
                            </label>
                        </span>
                        <span v-if="newAddQxafterPics.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="swiperOption2" >
                                <swiper-slide class="swiper-slide" v-for="(item, index) in newAddQxafterPics" :key="index">
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
                        <!-- <img v-if="dataUrlhou" @click="showLargePic(dataUrlhou)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="dataUrlhou" alt="">
                        <img v-if="dataUrlhou" @click="deletePicActhou" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt=""> -->
                      <!-- </div> -->
                    </div>
                    <div class="line">
                      <div>
                        <span>缺陷: </span>
                         <!-- <a-select
                            style="width: 2.6rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.defect_code"
                            @change="handleChangeDefect"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in manholeDefectsArr" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select> -->
                          <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.check_type"
                            @change="handleChangeJg"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeArr" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.defect_code"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild1" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
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
                          <a-input style="width: 70%;" v-model="addDefetsForm.check_rectify" placeholder="" />
                        </div>
                    </div>
                    <div class="actionsButtton">
                        <div @click="newQxAdd">新增</div>
                        <div @click="clearAlladd">清空</div>
                    </div>
                  </div>
                </div>
                <div class="pipeInfo" v-for="(item, index) in pipeQxListArr" :key="index">
                  <div class="titleBac">编辑缺陷</div>
                  <div class="conTain">
                    <div class="line">
                      <!-- <div style="width: 50%;"> -->
                        <span style="margin-left: .15rem;">修复前: </span>
                        <span @click="chooseOneEdit1(index)" style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input :ref="`picinputsEditqian${index}`" style="position: absolute;left: -9999px;" multiple :id="`ideditqian${index}`" @change="handleEditPicqian1" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" :for="`ideditqian${index}`">
                              上传图片
                            </label>
                        </span>
                        <span v-if="item.pipeQxfileRelat.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="item[`swiperOptionE1${index}`]" >
                                <swiper-slide class="swiper-slide" v-for="(ele, idx) in item.pipeQxfileRelat" :key="idx">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(ele)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="ele" alt="">
                                        <img @click="deletePicEditqian(index, idx)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev" :class="`swpE1${index}`" slot="button-prev"></div>
                          <div class="swiper-button-next" :class="`swpE1${index}`" slot="button-next"></div>
                        </span>
                        <!-- <img v-if="item.fileRelation" @click="showLargePic(item.fileRelation)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item.fileRelation" alt="">
                        <img v-if="item.fileRelation" @click="deletePicEditqian(item, index)" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt=""> -->
                      <!-- </div> -->
                    </div>
                    <div class="line">
                        <span style="margin-left: .15rem;">修复后: </span>
                        <span @click="chooseOneEdit2(index)" style="position: relative;display: inline-block;width: 1.4rem;height: .5rem;">
                            <input :ref="`picinputsEdithou${index}`" style="position: absolute;left: -9999px;" multiple :id="`idedithou1${index}`" @change="handleEditPichou1" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" :for="`idedithou1${index}`">
                              上传图片
                            </label>
                        </span>
                        <span v-if="item.pipeQxfileRelatafter.length !== 0" style="width: 60%;height: 100%;display: inline-block;position: relative;margin-left: 5%;">
                          <swiper class="swiper" :options="item[`swiperOptionE2${index}`]" >
                                <swiper-slide class="swiper-slide" v-for="(ele, idx) in item.pipeQxfileRelatafter" :key="idx">
                                    <span style="position: relative;">
                                        <img @click="showLargePic(ele)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="ele" alt="">
                                        <img @click="deletePicEditHou(index, idx)" style="margin-left: .1rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                                    </span>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                          </swiper>
                          <div class="swiper-button-prev" :class="`swpE2${index}`" slot="button-prev"></div>
                          <div class="swiper-button-next" :class="`swpE2${index}`" slot="button-next"></div>
                        </span>
                        <!-- <img v-if="item.fileRelatafter" @click="showLargePic(item.fileRelatafter)" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="item.fileRelatafter" alt="">
                        <img v-if="item.fileRelatafter" @click="deletePicEdithou(item, index)" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt=""> -->
                    </div>
                    <div class="line">
                      <div>
                        <span>缺陷: </span>
                         <!-- <a-select
                            style="width: 2.6rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.defectCode"
                            @change="handleEditChangeDefect"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in manholeDefectsArr" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select> -->
                          <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.checkType"
                            @change="handleChangeJg"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeArr" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.8rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.defectCode"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild11[item.check_type]" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
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
                          <a-input style="width: 70%;" v-model="item.checkRectify" placeholder="" />
                        </div>
                    </div>
                    <div class="actionsButtton">
                        <div @click="editSave(item)">保存</div>
                        <div @click="clearEdit(item)">清空</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <a-locale-provider :locale="zhCN">
          <a-modal :width="680" :footer="footerShow" v-model="videoShow3" title="照片">
            <img style="width: 630px;height: 450px;" :src="largePic" alt="">
          </a-modal>
        </a-locale-provider>
        <a-locale-provider :locale="zhCN">
          <a-modal :width="600" :footer="footerShow" v-model="videoShow1" title="视频">
            <!-- <video style="width: 500px;height: 450px;" autoplay="autoplay" muted controls="controls" src="../../../assets/JWGGW30_JWGGW29.mp4"></video> -->
          </a-modal>
        </a-locale-provider>

        <a-locale-provider :locale="zhCN">
          <a-modal :width="600" :footer="footerShow" v-model="videoShow2" title="视频">
            <!-- <video style="width: 500px;height: 450px;" autoplay="autoplay" muted controls="controls" src="../../../assets/JWGGW30_JWGGW29修复后.mp4"></video> -->
          </a-modal>
        </a-locale-provider>
      </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import InfiniteLoading from 'vue-infinite-loading';
import {notification} from 'ant-design-vue'
import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');
import { apiNames } from '../../../Utils/config'
import { getFormatDate, guid } from '../../../Utils/Com'
import { enableCreatePoly, editPolyline, deletePolyline, searchGraphicByObjectIdHunjie, showInmap, getPointAddress2, addFeatureByPoint, searchGraphicByObjectId, editFeatureByPoint, deleteFeatureByPoint } from '../../../Maps/mapApi.js'
export default {
  name: 'jianchajing',
  data() {
    return {
      hunjieObj: {
        wellcode: null,
        locationcode: null,
        hybridcode: null,
        cankao_figure: null,
        near_figure: null,
        part_figure: null,
        pip_figure: null,
        problem_type: null,
        facility_type: null,
        mixpoint_catogery: null,
        hjsource: null,
        hyb_location: null,
        hyb_rason: null,
        dischargercode: null,
        pip_diameter: null,
        changed: null,
        closure: null,
        cod: null,
        nh3n: null,
        dividerid: null,
        mixpoint_res: null,
        date: null,
        upstream_number: null,
        pip_diameter: null,
        waterquality: null,
        waterflow: null,
        implementation: null,
        year: null,
        budget: null,
        comp_budget: null,
        x_coor: null,
        y_coor: null
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
      swiperOption3: {
          slidesPerView: 3, // 每页展示几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.swp3',
              prevEl: '.swiper-button-prev.swp3'
          },
          observer: true,
          observeParents: true,
      },
      swiperOption4: {
          slidesPerView: 3, // 每页展示几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.swp4',
              prevEl: '.swiper-button-prev.swp4'
          },
          observer: true,
          observeParents: true,
      },
      swiperOption5: {
          slidesPerView: 3, // 每页展示几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.swp5',
              prevEl: '.swiper-button-prev.swp5'
          },
          observer: true,
          observeParents: true,
      },
      swiperOption6: {
          slidesPerView: 3, // 每页展示几条数据
          autoplay: false, // 是否自动播放
          navigation: {
              nextEl: '.swiper-button-next.swp6',
              prevEl: '.swiper-button-prev.swp6'
          },
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
      hunjieclassArr: [
        {
          title: '污水接入雨水',
          value: 1
        },
        {
          title: '雨水接入污水',
          value: 2
        },
        {
          title: '3支管暗接',
          value: 3
        }
      ],
      checkTypeChild11: {},
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
      ipagination: false,
      zhCN,
      realPj: [
      ],
      dataSource: [
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
      distance: 100,
      popShow: false,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dataUrl: '',
      showPic: require('../../../assets/imgs/search/yitusoutu.png'),
      deletePic: require('../../../assets/imgs/zhihuipaishui/ppline/delete.png'),
      addJianchaFormField: {
        manholecode: '检查井号不能为空',
        manhole_category: '类别不能为空',
        locationcode: '所在道路不能为空'
      },
      addJianchaForm: {
        manholecode: null,
        locationcode: null,
        district_id: null,
        district_name: null,
        manhole_category: null,
        manhole_type: null,
        manhole_style: null,
        cov_material: null,
        depth: null,
        surface_el: '',
        y_coor: null,
        x_coor: null,
        hybjunctio: null,
        connected: null,
        status: null,
        is_complete: null,
        datasource: null,
        report_unit: null,
        report_date: null,
        construction_age: null,
        antifallin: null,
        bottom_style: null,
        junc_class: null,
        remark: null,
        proId: null,
        gcId: null
      },
      addDefetsForm: {
        file_relation: '',
        file_relatafter: '',
        defect_name: '',
        check_type: '',
        defect_code: '',
        remark: '',
        check_rectify: ''
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
      checkTypeArr: [
        {
          description: "manfunDefects",
          text: "功能性缺陷",
          title: "功能性缺陷",
          value: 1
        },
        {
          description: "manstruDefects",
          text: "结构性缺陷",
          title: "结构性缺陷",
          value: 2
        }
      ],
      checkTypeChild1: [],
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
      objData: {},
      manholeid: '',
      picTempUrlqian: '',
      dataUrlqian: '',
      picTempUrlhou: '',
      dataUrlhou: '',
      pipeQxListArr: [],
      addType: 'polyLine',
      chooseobjectid: '',
      moreSearch: false,
      allRoadids: [],
      roadArr: [],
      manholeTypeArr: [],
      manholeStyleArr: [],
      yesOrNo: [
        {
          value: 0,
          title: '否'
        },
        {
          value: 1,
          title: '是'
        }
      ],
      bottomStyleArr: [
        {
          value: 1,
          title: '平底'
        },
        {
          value: 2,
          title: '流槽'
        },
        {
          value: 3,
          title: '落底'
        },
        {
          value: 4,
          title: '其它'
        }
      ],
      juncClassArr: [
        {
          value: 1,
          title: '主井(主管上的井)'
        },
        {
          value: 2,
          title: '附井(接户井；过渡井)'
        },
        {
          value: 3,
          title: '其他'
        },
      ],
      manholeDefectsArr: [],
      areaArr: [
        {
          value: 360731,
          title: '于都县'
        }
      ],
      selectedArea: 360731,
      searchForm: {
        districtId: '',
        districtName: '',
        pageNo: 1,
        pageSize: 18,
        proId: '',
        gcId: '',
        locationcodelist: '',
        manholecode: '',
        manholeCategory: '',
        hybjunctio: '',
        status: '',
        yearfw: '',
        roadids: ''
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
      chooseOneEdit1Index: 0,
      chooseOneEdit2Index: 0,
      largePic: '',
      hunjiePicShow: [],
      hunjiePicfile: [],
      hunjiePicEditfile: [],
      jubuPicShow: [],
      jubuPicfile: [],
      yuanjingPicShow: [],
      yuanjingPicfile: [],
      yuanjingPicEditfile: [],
      jubuPicEditfile: [],
      guandaoshiyiPicShow: [],
      guandaoshiyiPicfile: [],
      guandaoshiyiPicEditfile: [],
      problemTypeArr: [
        {
          value: 1,
          title: '混接点'
        },
        {
          value: 2,
          title: '混接源'
        }
      ],
      mixpointCatogeryArr: [
      ],
      changedArr: [
        {
          value: 1,
          title: '待改造'
        },
        {
          value: 2,
          title: '改造中'
        },
        {
          value: 3,
          title: '已改造'
        }
      ],
      facilityTypeArr: [
        {
          value: 1,
          title: '管道表'
        },
        {
          value: 2,
          title: '检查井'
        },
        {
          value: 3,
          title: '雨水口'
        },
        {
          value: 4,
          title: '排放口'
        }
      ],
      allFileArr: [],
      allFileEditArr: [],
      cantAdd: false,
      xmNameArr: [],
      gcNameArr: []
    }

  },
  mounted() {
    // let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    // let disid = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_id'})[0].description
    // this.placeholder = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_name'})[0].description
    
    this.getXMname()
    this.getProvinceInfo()
    this.$bus.off('writePipeForm')
    this.$bus.on('writePipeForm', (e) => {
      this.choose(2)
      this.addType = e
    })
    this.$bus.off('getPointXY')
    this.$bus.on('getPointXY', (e) => {
      this.addJianchaForm.x_coor = e.x
      this.addJianchaForm.y_coor = e.y
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
        return item.layerId == 4
      })
      searchMapData.forEach((ele) => {
        // ele.feature.attributes
        ele.feature.attributes.surfaceEl = ele.feature.attributes.surface_el
        ele.feature.attributes.manholeCategory_dictText = this.getmanholeCategoryDictText(ele.feature.attributes.manhole_category)
        this.pipeArrList.push(ele.feature.attributes)
      })
    })
    if (window.localStorage.getItem('searchMapData')) {
      this.pipeArrList = []
      this.infiniteShow = false
      let searchMapData = JSON.parse(window.localStorage.getItem('searchMapData')).filter((item) => {
        return item.layerId == 4
      })
      searchMapData.forEach((ele) => {
        // ele.feature.attributes
        ele.feature.attributes.surfaceEl = ele.feature.attributes.surface_el
        ele.feature.attributes.manholeCategory_dictText = this.getmanholeCategoryDictText(ele.feature.attributes.manhole_category)
        this.pipeArrList.push(ele.feature.attributes)
      })
    }
    console.log(new Date())
          this.$bus.off('jianchajingForm')
          this.$bus.on('jianchajingForm',(atrObj1) => {
              let obj = JSON.parse(atrObj1)
              let atrObj = {
                manholecode: obj.manholecode,
                locationcode: obj.locationcode,
                districtId: obj.district_id,
                districtName: obj.district_name,
                manholeCategory: obj.manhole_category,
                manholeType: obj.manhole_type,
                manholeStyle: obj.manhole_style,
                covMaterial: obj.cov_material,
                depth: obj.depth,
                surfaceEl: obj.surface_el,
                ycoor: obj.x_coor,
                xcoor: obj.x_coor,
                hybjunctio: obj.hybjunctio,
                connected: obj.connected,
                status: obj.status,
                isComplete: obj.is_complete,
                datasource: obj.datasource,
                reportUnit: obj.report_unit,
                reportDate: obj.report_date,
                constructionAge: obj.construction_age,
                antifallin: obj.antifallin,
                bottomStyle: obj.bottom_style,
                juncClass: obj.junc_class,
                remark: obj.remark,
                objectid: obj.objectid
              }
              this.actionDo(atrObj)
          })
          this.$bus.off('chooseSecond')
          this.$bus.on('chooseSecond', () => {
            this.choose(2)
          })
  },
  watch: {
    chooseNum (newVal, oldVal) {
      this.nowPipeid = ''
      console.log(newVal, 'newValnewValchooseNumchooseNum')
      if (newVal == 1) {
        this.clearData()
      }
      this.clearAlladd()
    },
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
    // 检查井类型
    this.manholeTypeArr = allDictItems.manhole_type
    // 检查井形式
    this.manholeStyleArr = allDictItems.manhole_style
    // 检查井缺陷
    this.manholeDefectsArr = allDictItems.manholeDefects
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
      let one = this.xmNameArr.filter((item) => {
        return item.id == e
      })[0]
      this.searchForm.proId = one.id
      this.searchForm.districtId = one.district_id
      this.searchForm.districtName = one.district_name
      this.addJianchaForm.district_name = one.district_name
      this.addJianchaForm.district_id = one.district_id
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
            this.addJianchaForm.district_name = res.result[0].district_name
            this.addJianchaForm.district_id = res.result[0].district_id
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
    handleChangeJg (info) {
      let description = this.checkTypeArr.filter((item) => {
        return item.value == info
      })[0].description
      this.checkTypeChild1 = JSON.parse(window.localStorage.getItem('allDictItems'))[description]
    },
    hunjiePic (e) {
      let inputDOM = this.$refs.idhunjie1
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.hunjiePicShow.push(URL.createObjectURL(inputDOM.files[i]))
          this.hunjiePicfile.push(inputDOM.files[i])
          this.hunjiePicEditfile.push(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    delete3 (index) {
      this.$forceUpdate()
      this.hunjiePicShow = this.hunjiePicShow.filter((item, loc) => {
        return loc !== index
      })
      this.hunjiePicfile = this.hunjiePicfile.filter((item, loc) => {
        return loc !== index
      })
    },
    jubuPic (e) {
      let inputDOM = this.$refs.idjubu1
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.jubuPicShow.push(URL.createObjectURL(inputDOM.files[i]))
          this.jubuPicfile.push(inputDOM.files[i])
          this.jubuPicEditfile.push(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    delete4 (index) {
      this.$forceUpdate()
      this.jubuPicShow = this.jubuPicShow.filter((item, loc) => {
        return loc !== index
      })
      this.jubuPicfile = this.jubuPicfile.filter((item, loc) => {
        return loc !== index
      })
    },
    guandaoshiyiPic (e) {
      let inputDOM = this.$refs.idguandaoshiyi1
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.guandaoshiyiPicShow.push(URL.createObjectURL(inputDOM.files[i]))
          this.guandaoshiyiPicfile.push(inputDOM.files[i])
          this.guandaoshiyiPicEditfile.push(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    delete5 (index) {
      this.$forceUpdate()
      this.guandaoshiyiPicShow = this.guandaoshiyiPicShow.filter((item, loc) => {
        return loc !== index
      })
      this.guandaoshiyiPicfile = this.guandaoshiyiPicfile.filter((item, loc) => {
        return loc !== index
      })
    },
    yuanjinPic (e) {
      let inputDOM = this.$refs.idyuanjing1
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.yuanjingPicShow.push(URL.createObjectURL(inputDOM.files[i]))
          this.yuanjingPicfile.push(inputDOM.files[i])
          this.yuanjingPicEditfile.push(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    delete6 (index) {
      this.$forceUpdate()
    },
    datediaochaChoose (date) {
      this.hunjieObj.date = moment(date).format('YYYY-MM-DD')
    },
    dategaizaoChoose (date) {
      this.hunjieObj.year = moment(date).format('YYYY-MM-DD')
    },
    async test(item, index, obj){
      let n = await this.uploadPic(item, index, obj)
      return  n
    },
    uploadPic (file, index, obj) {
      let formData = new FormData();
      let date = new Date()
      formData.append('file', file, `(${obj.hybridcode})0${index}_${obj.mixpoint_catogery}_${date}.jpg`);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      return new Promise((resolve, reject) => {
        this.$post(apiNames['上传图片'], formData).then(res => {
          resolve(res.message)
        })
      })
    },
    addNewHunjie () {
      if (this.cantAdd) {
        notification.error({ message: '添加提示', description: '此混接点已存在，请勿重复新增'})
      } else {
        // 先上传图片到服务器
        let arr = []
        this.allFileArr = this.hunjiePicfile.concat(this.jubuPicfile, this.guandaoshiyiPicfile, this.yuanjingPicfile)
        this.allFileArr.forEach(async (item, index) => {
            arr.push(this.test(item, index, this.hunjieObj))
        })
        Promise.all(arr).then(res => {
          let hunjiePicStr = res.slice(0,this.hunjiePicfile.length)
          let jubuPicStr = res.slice(this.hunjiePicfile.length, this.jubuPicfile.length + this.hunjiePicfile.length)
          let guandaoshiyiPicStr = res.slice(this.jubuPicfile.length + this.hunjiePicfile.length, this.guandaoshiyiPicfile.length + this.jubuPicfile.length + this.hunjiePicfile.length)
          let yuanjingPicStr = res.slice(this.jubuPicfile.length + this.hunjiePicfile.length + this.guandaoshiyiPicfile.length)
          this.hunjieObj.near_figure = jubuPicStr.join(',')
          this.hunjieObj.part_figure = yuanjingPicStr.join(',')
          this.hunjieObj.cankao_figure = hunjiePicStr.join(',')
          this.hunjieObj.pip_figure = guandaoshiyiPicStr.join(',')
          this.hunjieObj.y_coor = this.addJianchaForm.y_coor
          this.hunjieObj.del_flag = 0
          this.hunjieObj.district_id = this.addJianchaForm.district_id
          this.hunjieObj.locationcode = this.addJianchaForm.locationcode
          this.hunjieObj.x_coor = this.addJianchaForm.x_coor
          addFeatureByPoint(this.hunjieObj, 'point', 'hunjie')
        }).catch(err => {
          console.log('error', err)
        })
      }
    },
    editHunjie () {
      let arr = []
      this.allFileEditArr = this.hunjiePicEditfile.concat(this.jubuPicEditfile, this.guandaoshiyiPicEditfile, this.yuanjingPicEditfile)
      this.allFileEditArr.forEach(async (item, index) => {
          arr.push(this.test(item, index, this.hunjieObj))
      })
      Promise.all(arr).then(res => {
        let hunjiePicStr = res.slice(0,this.hunjiePicEditfile.length)
        let jubuPicStr = res.slice(this.hunjiePicEditfile.length, this.jubuPicEditfile.length + this.hunjiePicEditfile.length)
        let guandaoshiyiPicStr = res.slice(this.jubuPicEditfile.length + this.hunjiePicEditfile.length, this.jubuPicEditfile.length + this.hunjiePicEditfile.length + this.guandaoshiyiPicEditfile.length)
        let yuanjingPicStr = res.slice(this.jubuPicEditfile.length + this.hunjiePicEditfile.length + this.guandaoshiyiPicEditfile.length)

        let a = this.hunjiePicShow.slice(0, this.hunjiePicShow.length - this.hunjiePicEditfile.length)
        let b = this.jubuPicShow.slice(0, this.jubuPicShow.length - this.jubuPicEditfile.length)
        let c = this.guandaoshiyiPicShow.slice(0, this.guandaoshiyiPicShow.length - this.guandaoshiyiPicEditfile.length)
        let d = this.yuanjingPicShow.slice(0, this.yuanjingPicShow.length - this.yuanjingPicEditfile.length)

        this.hunjieObj.near_figure = b.length !== 0 ? (jubuPicStr.length !== 0 ? (b.join(',') + ',' + jubuPicStr.join(',')) : b.join(',')) :  jubuPicStr.join(',')
        this.hunjieObj.part_figure = d.length !== 0 ? (yuanjingPicStr.length !== 0 ? (d.join(',') + ',' + yuanjingPicStr.join(',')) : d.join(',')) :  yuanjingPicStr.join(',')
        this.hunjieObj.pip_figure = c.length !== 0 ? (guandaoshiyiPicStr.length !== 0 ? (c.join(',') + ',' + guandaoshiyiPicStr.join(',')) : c.join(',')) : guandaoshiyiPicStr.join(',')
        this.hunjieObj.cankao_figure = a.length !== 0 ? (hunjiePicStr.length !== 0 ? (a.join(',') + ',' + hunjiePicStr.join(',')) : a.join(',')) : hunjiePicStr.join(',')

        this.hunjieObj.y_coor = this.addJianchaForm.y_coor
        this.hunjieObj.x_coor = this.addJianchaForm.x_coor
        this.hunjieObj.district_id = this.addJianchaForm.district_id
        this.hunjieObj.locationcode = this.addJianchaForm.locationcode
        this.hunjieObj.del_flag = 0
        editFeatureByPoint(this.hunjieObj, 'point', 'hunjie')
      }).catch(err => {
        console.log('error', err)
      })
    },
    confirmDeleteHunjie () {
      // this.hunjieObj.objectid = ''
      deleteFeatureByPoint(this.hunjieObj, 'point', 'hunjie')
    },
    clearHunjieData () {},
    onChangeArea(value, selectedOptions) {
        this.searchForm.districtName = ''
        this.searchForm.districtId = value.join(',')
        this.addJianchaForm.district_name = ''
        this.addJianchaForm.district_id = value.join(',')
        this.placeholder = ''
        for (let i = 0; i < selectedOptions.length; i++) {
            this.searchForm.districtName += selectedOptions[i].label + '/'
            this.addJianchaForm.district_name += selectedOptions[i].label + '/'
        }
        this.queryBydistrictId(this.searchForm.districtId)
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
    handleChange1 (info) {
      if (info == 1) {
        this.mixpointCatogeryArr = [
          {
            value: 1,
            title: '污水（合流直接接入自然水体）'
          },
          {
            value: 2,
            title: '市政污水（合流） 管到接入到市政雨水管到'
          },
          {
            value: 3,
            title: '集体排水户污水（合流）管到接入到市政雨水管到'
          },
          {
            value: 4,
            title: '单一排水户（合流）管到接入到市政雨水管到'
          },
          {
            value: 5,
            title: '市政雨水管道 接入市政污水管道'
          }
        ]
      } else {
        this.mixpointCatogeryArr = [
          {
            value: 1,
            title: '人为无序排放（阳台，路边雨水口等）'
          },
          {
            value: 2,
            title: '集体排水户违规排放（内部混接）'
          },
          {
            value: 3,
            title: '管道结构性引发的非雨水'
          }
        ]
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
    getmanholeCategoryDictText (manholeCate) {
      if (manholeCate == 1) {
        return '雨水井'
      } else if (manholeCate == 2) {
        return '污水井'
      } else if (manholeCate == 3) {
        return '合流井'
      } else {
        return '其他'
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
    getPoint () {
      notification.success({ message: '系统提示', description: '请在地图上选点'})
      getPointAddress2((e) => {
          this.$set(this.addJianchaForm, 'x_coor', e.geometry.x)
          this.$set(this.addJianchaForm, 'y_coor', e.geometry.y)
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
    popVideo2 () {
      this.videoShow2 = true
    },
    popVideo1 (item) {
      console.log(item, 'itemitemitemitemitem')
      this.videoShow1 = true
    },
    addUrl (url) {
      if (url) {
        let addUrl = `http://192.168.3.132:8082/yufan/sys/common/static/${url}`
        return addUrl
      } else {
        return ''
      }
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
    moment,
    onChange (date) {
      this.editPipeForm.recordDat = moment(date).format('YYYY-MM-DD')
    },
    searchBySome () {
      if (this.infiniteShow) {
        this.searchForm.pageNo = 1
        this.pipeArrList = []
        this.infiniteHandler(this.stateEle)
      } else {
      }
    },
    queryPipeList ($state) {
      this.stateEle = $state
      setTimeout(() => {
        // if (this.searchForm.roadids == '') {
        //   this.searchForm.locationcodelist = this.allRoadids.join(',')
        // } else {
        //   this.searchForm.locationcodelist = this.searchForm.roadids
        // }
        this.searchForm.locationcodelist = this.searchForm.roadids
        this.$post(apiNames['检查井缺陷查寻'], this.searchForm).then(res => {
          console.log(res)
          if (this.pipeArrList.length > res.result.total) {
              $state.complete();
              return;
          }
          if (res.code == 0 && res.result.records.length !== 0) {
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
        manholeid: this.manholeid
      }
      this.$get(apiNames['检查井缺陷列表查询'], params).then(res => {
        this.pipeQxListArr = []
        if (res.result.length !== 0) {
          let arr = res.result
          arr.forEach((item, index) => {
              item.pipeQxfileRelat = item.fileRelation ? item.fileRelation.split(',') : []
              item.pipeQxfileRelatafter = item.fileRelatafter ? item.fileRelatafter.split(',') : []
              item[`swiperOptionE1${index}`] = {
                  slidesPerView: 3, // 每页展示几条数据
                  autoplay: false, // 是否自动播放
                  navigation: {
                      nextEl: `.swiper-button-next.swpE1${index}`,
                      prevEl: `.swiper-button-prev.swpE1${index}`
                  },
                  observer: true,
                  observeParents: true,
              }
              item[`swiperOptionE2${index}`] = {
                  slidesPerView: 3, // 每页展示几条数据
                  autoplay: false, // 是否自动播放
                  navigation: {
                      nextEl: `.swiper-button-next.swpE2${index}`,
                      prevEl: `.swiper-button-prev.swpE2${index}`
                  },
                  observer: true,
                  observeParents: true,
              }
              this.pipeQxListArr.push(item)
          })
        }
      })
      this.checkTypeChild11 = {
        1: JSON.parse(window.localStorage.getItem('allDictItems'))['manfunDefects'],
        2: JSON.parse(window.localStorage.getItem('allDictItems'))['manstruDefects']
      }
    },
    sureSave (item) {
      if (this.nowPipeid === '') {
        notification.success({ message: '添加提示', description: '未获取到管道id'})
      } else {
        this.editDefetsForm = item
        this.editDefetsForm.pipeid = this.nowPipeid
        this.editDefetsForm.fileRelat = this.picTempUrl
        this.$put(apiNames['编辑管道缺陷'], this.editDefetsForm).then(res => {
          if (res.code == 200) {
            notification.success({ message: '添加提示', description: '编辑缺陷成功'})
          } else {
            notification.error({ message: '添加提示', description: res.message})
          }
        })
      }
    },
    editSave (item) {
      if (this.addJianchaForm.manholeid === '') {
        notification.success({ message: '添加提示', description: '未获取到检查井id'})
      } else {
        // this.addDefetsForm.file_relation = this.picTempUrlqian
        // this.addDefetsForm.file_relatafter = this.picTempUrlhou
        let editDefetsForm = {
          fileRelation: item.pipeQxfileRelat.join(','),
          fileRelatafter: item.pipeQxfileRelatafter.join(','),
          defectName: item.defectName,
          defectCode: item.defectCode,
          checkType: item.checkType,
          remark: item.remark,
          checkRectify: item.checkRectify,
          isDispose: 0,
          manholeid: this.manholeid,
          id: item.id
        }
        this.$put(apiNames['编辑检查井缺陷'], editDefetsForm).then(res => {
          if (res.code == 200) {
            notification.success({ message: '添加提示', description: '编辑检查井缺陷成功'})
          } else {
            notification.error({ message: '添加提示', description: res.message})
          }
        })
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
    },
    checkIsEmty () {
      let boolean = false
      for (const key in this.addJianchaForm) {
        if (Object.hasOwnProperty.call(this.addJianchaFormField, key)) {
          const element = this.addJianchaForm[key];
          if (element === '' || element === null ) {
            notification.error({ message: '添加提示', description: this.addJianchaFormField[key]})
            return false
          } else {
            boolean = true
            continue
          }
        }
      }
      return boolean
    },
    async addNewPipeMeth () {
      let checkStatus = this.checkIsEmty()
      if (checkStatus) {
        let filtArr = await this.groupByjuncid(this.addJianchaForm)
        if (filtArr[1].length !== 0) {
          notification.error({ message: '添加提示', description: '此检查井已存在，请勿重复添加'})
        } else {
          let manholeid = 'A03' + guid()
          this.addJianchaForm.manholeid = manholeid
          this.addJianchaForm.del_flag = 0
          if (this.addJianchaForm.x_coor && this.addJianchaForm.y_coor) {
            addFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
          } else {
            enableCreatePoly(this.addJianchaForm, 'point', false, 'jianchajing')
          }
        }
      }
    },
    groupByjuncid (data) {
      let params = {
        params: [data],
        type: 'manhole'
      }
      return new Promise((resolve, reject)=>{
          this.$post(`${apiNames['导出数据分组']}`, params).then(res => {
              let getData = res
              resolve(getData)
          })
      })
    },
    editJianchajin () {
      let checkStatus = this.checkIsEmty()
      if (checkStatus) {
        this.addJianchaForm.manholeid = this.manholeid
        this.addJianchaForm.objectid = this.chooseobjectid
        this.addJianchaForm.del_flag = 0
        if (this.addJianchaForm.x_coor && this.addJianchaForm.y_coor) {
          editFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
        }
      }
    },
    confirmDelete(e) {
      console.log(this.addJianchaForm)
      this.addJianchaForm.objectid = this.chooseobjectid
      deleteFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
    },
    cancelDelete(e) {
      console.log(e);
      // this.$message.error('Click on No');
    },
    newQxAdd () {
      if (this.addJianchaForm.manholeid === '') {
        notification.success({ message: '添加提示', description: '未获取到检查井id'})
      } else {
        this.addDefetsForm.file_relation = this.newAddQxPics.join(',')
        this.addDefetsForm.file_relatafter = this.newAddQxafterPics.join(',')
        let addDefetsForm = {
          fileRelation: this.addDefetsForm.file_relation,
          fileRelatafter: this.addDefetsForm.file_relatafter,
          defectName: this.addDefetsForm.defect_name,
          defectCode: this.addDefetsForm.defect_code,
          checkType: this.addDefetsForm.check_type,
          remark: this.addDefetsForm.remark,
          checkRectify: this.addDefetsForm.check_rectify,
          isDispose: 0,
          manholeid: this.manholeid
        }
        this.$post(apiNames['新增检查井缺陷'], addDefetsForm).then(res => {
          if (res.code == 200) {
            notification.success({ message: '添加提示', description: '新增检查井缺陷成功'})
            this.queryPipeQxList()
          } else {
            notification.error({ message: '添加提示', description: res.message})
          }
        })
      }
    },
    editPipe () {
      // editPolylineNext(this.editPipeForm)
      this.editPipeForm.manholeid = this.manholeid
      this.editPipeForm.objectid = this.chooseobjectid
      if (this.editPipeForm.x_coor && this.editPipeForm.y_coor) {
        addFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
      } else {
        enableCreatePoly(this.addJianchaForm, 'point', false, 'jianchajing')
      }
      // this.$put(apiNames['编辑检查井缺陷'], this.editPipeForm).then(res => {
      //   console.log(res)
      //   if (res.code == 200) {
      //     notification.success({ message: '编辑提示', description: '修改检查井成功'})
      //   } else {
      //     notification.error({ message: '添加提示', description: res.message})
      //   }
      // })
    },
    clearEditForm () {
      this.editPipeForm = {
        locationcode: '',
        manhole_category: '',
        manhole_type: null,
        manhole_style: null,
        cov_material: null,
        depth: null,
        surface_el: '',
        y_coor: null,
        x_coor: null,
        hybjunctio: null,
        connected: null,
        status: null,
        is_complete: null,
        datasource: null,
        report_unit: null,
        report_date: null,
        construction_age: null,
        antifallin: null,
        bottom_style: null,
        junc_class: null,
        remark: ''
      }
    },
    dateChoose (date) {
      this.addJianchaForm.construction_age = moment(date).format('YYYY-MM-DD')
    },
    reportDateChoose (date) {
      this.addJianchaForm.report_date = moment(date).format('YYYY-MM-DD')
    },
    clearData () {
      this.addJianchaForm = {
        manholecode: '',
        locationcode: '',
        manhole_category: '',
        manhole_type: null,
        manhole_style: null,
        cov_material: null,
        depth: null,
        surface_el: '',
        y_coor: null,
        x_coor: null,
        hybjunctio: null,
        connected: null,
        status: null,
        is_complete: null,
        datasource: null,
        report_unit: null,
        report_date: null,
        construction_age: null,
        antifallin: null,
        bottom_style: null,
        junc_class: null,
        remark: ''
      }
    },
    clearAlladd () {
      this.addDefetsForm = {
        file_relation: '',
        file_relatafter: '',
        defect_name: '',
        defect_type: '',
        defect_code: '',
        remark: '',
        check_rectify: ''
      },
      this.$forceUpdate()
      this.dataUrlqian = ''
      this.dataUrlhou = ''
    },
    // 上传图片判断格式
    handlechangePicqian1 (e) {
      let inputDOM = this.$refs.picinputsqian1
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        console.log(inputDOM.files[0])
        // 通过DOM取文件数据
        console.log(this.uploadPicqianyoubing)
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.uploadPicqianyoubing(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    uploadPicqianyoubing (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        // this.picTempUrlqian = res.message
        this.newAddQxPics.push(res.message)
      })
    },
    handlechangePichou1 (e) {
      let inputDOM = this.$refs.picinputshou1
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        console.log(inputDOM.files[0])
        // 通过DOM取文件数据
        // this.imgPreviewhou(inputDOM.files[0])
        // this.uploadPichou(inputDOM.files[0])
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.uploadPichou(inputDOM.files[i])
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
    // 编辑的时候修改图片
    handleEditPicqian1 (e) {
      let inputDOM = this.$refs[`picinputsEditqian${this.chooseOneEdit1Index}`][0]
      console.log(inputDOM, 'inputDOMinputDOMinputDOM')
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.uploadPicEditqianshabi(inputDOM.files[i])
        }
        // this.uploadPicEditqian(inputDOM.files[0])
        e.target.value = ''
      }
    },
    handleEditPichou1 (e) {
      let inputDOM = this.$refs[`picinputsEdithou${this.chooseOneEdit2Index}`][0]
      console.log(inputDOM, 'inputDOMinputDOMinputDOM')
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.uploadPicEdithou(inputDOM.files[i])
        }
        // this.uploadPicEdithou(inputDOM.files[0])
        e.target.value = ''
      }
    },
    imgPreviewEditqian (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          // self.dataUrlqian = reader.result
          self.pipeQxListArr[this.chooseOneEdit1Index].fileRelation = reader.result
        }
      }
    },
    imgPreviewEdithou (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          // self.dataUrlqian = reader.result
          self.pipeQxListArr[this.chooseOneEdit2Index].fileRelatafter = reader.result
        }
      }
    },
    uploadPicEditqianshabi (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        // this.picTempUrlhou = res.message
        this.pipeQxListArr[this.chooseOneEdit1Index].pipeQxfileRelat.push(res.message)
      })
    },
    uploadPicEdithou (file) {
      let formData = new FormData();
        formData.append('file', file);
        formData.append('biz', `pic/${this.getFormateDate()}`);
        this.$post(apiNames['上传图片'], formData).then(res => {
          // this.picTempUrlhou = res.message
          this.pipeQxListArr[this.chooseOneEdit2Index].pipeQxfileRelatafter.push(res.message)
      })
    },
    handlechangeVideo () {},
    getFormateDate () {
      let date = new Date()
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    },
    uploadPichou (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `pic/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        // this.picTempUrlhou = res.message
        this.newAddQxafterPics.push(res.message)
        // console.log(res.message)
      })
    },
    closePopShow () {
      this.popShow = false
    },
    // DOM取文件数据
    imgPreviewqian (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          self.dataUrlqian = reader.result
        }
      }
    },
    imgPreviewhou (file) {
      let self = this
      if (!file || !window.FileReader) return
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = () => {
          self.dataUrlhou = reader.result
        }
      }
    },
    chooseWitchPic (index) {
        this.pipeQxListArr[index].fileRelat = this.dataUrl
    },
    chooseWitchVideo (index) {
        // this.pipeQxListArr[index].fileRelat = this.dataUrl
    },
    deletePicActqian (index) {
      this.$forceUpdate()
      this.newAddQxPics = this.newAddQxPics.filter((item, loc) => {
        return loc !== index
      })
    },
    deletePicEditqian (index, idx) {
      this.$forceUpdate()
      // this.pipeQxListArr[index].fileRelation = ''
      this.pipeQxListArr[index].pipeQxfileRelat = this.pipeQxListArr[index].pipeQxfileRelat.filter((ele, loc) => {
        return loc !== idx
      })
    },
    deletePicEditHou (index, idx) {
      this.$forceUpdate()
      // this.pipeQxListArr[index].fileVideoafter = ''
      this.pipeQxListArr[index].pipeQxfileRelatafter = this.pipeQxListArr[index].pipeQxfileRelatafter.filter((ele, loc) => {
        return loc !== idx
      })
    },
    deletePicActhou (index) {
      this.$forceUpdate()
      this.newAddQxafterPics = this.newAddQxafterPics.filter((item, loc) => {
        return loc !== index
      })
    },
    getFileUrl (obj) {
      let url
      url = window.URL.createObjectURL(obj.files.item(0))
      return url
    },
    handleChangeDefect (info) {
      console.log(info)
      let item = this.manholeDefectsArr.filter((it) => {
        return it.value == info
      })[0]
      this.addDefetsForm.defect_name = item.title
    },
    handleEditChangeDefect (info) {
      let item = this.manholeDefectsArr.filter((it) => {
        return it.value == info
      })[0]
      this.pipeQxListArr[this.chooseOneEdit1Index].defect_name = item.title
    },
    handleChange2 () {},
    stopProg () {},
    actionDo (item) {
      this.objData = item
      let parseArr = item
      // this.queryBydistrictId(item.districtId)
      this.addJianchaForm = {
        manholecode: item.manholecode,
        locationcode: item.locationcode,
        district_id: item.districtId,
        district_name: item.districtName,
        manhole_category: '' + item.manholeCategory,
        manhole_type: '' + item.manholeType,
        manhole_style: item.manholeStyle,
        cov_material: item.covMaterial,
        depth: item.depth,
        surface_el: '' + item.surfaceEl,
        y_coor: item.ycoor,
        x_coor: item.xcoor,
        hybjunctio: item.hybjunctio,
        connected: item.connected,
        status: item.status,
        is_complete: '' + item.isComplete,
        datasource: item.datasource,
        report_unit: item.reportUnit,
        report_date: item.reportDate,
        construction_age: item.constructionAge,
        antifallin: item.antifallin,
        bottom_style: item.bottomStyle,
        junc_class: item.juncClass,
        remark: item.remark,
        proId: '',
        gcId: ''
      }
      this.hunjieObj.wellcode = item.manholecode
      // this.hunjieObj.y_coor = item.ycoor
      // this.hunjieObj.x_coor = item.xcoor
      this.manholeid = parseArr.manholeid
      this.chooseobjectid = parseArr.objectid
      this.choose(2)
      this.queryByCode()
      this.getProid(item.locationcode)
      searchGraphicByObjectId(item.objectid, 'ps_manhole')
      // this.popShow = true
      this.queryPipeQxList()
    },
    showDetial (item) {
      showInmap(item, 'ps_manhole')
      this.actionDo(item)
    },
    getProid (locationcode) {
      this.$get(apiNames['获取工程和项目信息'], {locationcode}).then(res => {
        this.addJianchaForm.proId = res.result[0].proId
        this.addJianchaForm.gcId = res.result[0].id
      })
    },
    queryByCode () {
      let params = {
        wellcode: this.hunjieObj.wellcode
      }
      this.$get(apiNames['混接点编码查询'], params).then(res => {
        if (res.result == null) {
          this.cantAdd = false
          this.hunjieObj = {
            wellcode: null,
            hybridcode: null,
            near_figure: null,
            part_figure: null,
            pip_figure: null,
            cankao_figure: null,
            problem_type: null,
            facility_type: null,
            locationcode: null,
            mixpoint_catogery: null,
            hjsource: null,
            hyb_location: null,
            hyb_rason: null,
            dischargercode: null,
            pip_diameter: null,
            changed: null,
            closure: null,
            dividerid: null,
            mixpoint_res: null,
            date: null,
            implementation: null,
            year: null,
            budget: null,
            cod: null,
            nh3n: null,
            upstream_number: null,
            pip_diameter: null,
            waterquality: null,
            waterflow: null,
            comp_budget: null,
            x_coor: null,
            y_coor: null,
            objectid: null
          }
          this.hunjiePicShow = []
          this.jubuPicShow = []
          this.guandaoshiyiPicShow = []
          this.yuanjingPicShow = []
        } else {
          this.cantAdd = true
          this.hunjieObj = {
            wellcode: res.result.wellcode,
            hybridcode: res.result.hybridcode,
            locationcode: res.result.locationcode,
            near_figure: res.result.nearFigure,
            part_figure: res.result.partFigure,
            pip_figure: res.result.pipFigure,
            cankao_figure: res.result.cankaoFigure,
            problem_type: res.result.problemType,
            facility_type: res.result.facilityType,
            mixpoint_catogery: res.result.mixpointCatogery,
            hjsource: res.result.hjsource,
            hyb_location: res.result.hybLocation,
            hyb_rason: res.result.hybRason,
            dischargercode: res.result.dischargercode,
            pip_diameter: res.result.pipDiameter,
            changed: res.result.changed,
            closure: res.result.closure,
            dividerid: res.result.dividerid,
            mixpoint_res: res.result.mixpointRes,
            date: res.result.date,
            implementation: res.result.implementation,
            year: res.result.year,
            budget: res.result.budget,
            cod: res.result.cod,
            nh3n: res.result.nh3n,
            upstream_number: res.result.upstreamNumber,
            pip_diameter: res.result.pipDiameter,
            waterquality: res.result.waterquality,
            waterflow: res.result.waterflow,
            comp_budget: res.result.compBudget,
            x_coor: res.result.xcoor,
            y_coor: res.result.ycoor,
            objectid: res.result.objectid
          }
          if (res.result.facilityType == 1) {
            this.mixpointCatogeryArr = [
              {
                value: 1,
                title: '污水（合流直接接入自然水体）'
              },
              {
                value: 2,
                title: '市政污水（合流） 管到接入到市政雨水管到'
              },
              {
                value: 3,
                title: '集体排水户污水（合流）管到接入到市政雨水管到'
              },
              {
                value: 4,
                title: '单一排水户（合流）管到接入到市政雨水管到'
              },
              {
                value: 5,
                title: '市政雨水管道 接入市政污水管道'
              }
            ]
          } else {
            this.mixpointCatogeryArr = [
              {
                value: 1,
                title: '人为无序排放（阳台，路边雨水口等）'
              },
              {
                value: 2,
                title: '集体排水户违规排放（内部混接）'
              },
              {
                value: 3,
                title: '管道结构性引发的非雨水'
              }
            ]
          }
          searchGraphicByObjectIdHunjie(res.result.objectid, 'ps_hunjie')
          this.hunjiePicShow = res.result.cankaoFigure == '' || res.result.cankaoFigure == null ? [] : res.result.cankaoFigure.split(',')
          this.jubuPicShow = res.result.nearFigure == '' || res.result.nearFigure == null ? [] : res.result.nearFigure.split(',')
          this.guandaoshiyiPicShow = res.result.pipFigure == '' || res.result.pipFigure == null ? [] : res.result.pipFigure.split(',')
          this.yuanjingPicShow = res.result.partFigure == '' || res.result.partFigure == null ? [] : res.result.partFigure.split(',')
        }
      })
    },
    choose (num) {
      this.chooseNum = num
      console.log(new Date())
      // if (num == 1) {
      //   this.placeholder = ''
      // }
    },
    infiniteHandler($state) {
       this.queryPipeList($state)
    },
  },
  beforeDestroy() {
  },
}
</script>
<style lang='scss'>
#addNewPipe input::-webkit-input-placeholder {
        color: white!important
    }
 .right_1 .ant-select {
  color: white;
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
input::-webkit-input-placeholder {
    color: white!important
}
</style>

<style scoped lang='scss'>
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
              flex: 1;
              height: .68rem;
              background: rgb(0,0,0,0.35);
              text-align: center;
              line-height: .68rem;
              border: .02rem solid #205187;
              border-right: none;
              border-bottom: none;
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
                flex: 1;
                height: .68rem;
                background: rgb(0,0,0,0.35);
                text-align: center;
                line-height: .68rem;
                border: .02rem solid #205187;
                border-right: none;
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
            //   min-height: 7.26rem;
              border: .02rem solid #0f4c7f;
              display: inline-block;
              position: relative;
              margin-bottom: .84rem;
              .titleBac {
                width: 94%;
                height: .84rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/titleBac.png');
                background-size: 100% 100%;
                line-height: .84rem;
                padding-left: 6%;
              }
              .conTain {
                // position: absolute;
                height: 100%;
                width: 100%;
                .line {
                  width: 100%;
                  height: .82rem;
                  border-bottom: .02rem solid #04346a;
                  display: flex;
                  line-height: .82rem;
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
          margin: .42rem 0 0 .68rem;
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
                height: .84rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/titleBac.png');
                background-size: 100% 100%;
                line-height: .84rem;
                padding-left: 6%;
              }
              .conTain {
                position: absolute;
                left: 0;
                top: .84rem;
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