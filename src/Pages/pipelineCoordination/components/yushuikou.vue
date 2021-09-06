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
              <a-input v-model="searchForm.combcode" style="width: 6.34rem" placeholder="" />
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">雨水口形式:</span>
              <a-select
                style="width: 1.5rem"
                allowClear
                placeholder=""
                optionFilterProp = "children"
                v-model="searchForm.combtype"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in combtypeArr" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
              <span style="margin-right: .3rem;margin-left: .1rem;">是否混接:</span>
              <a-select
                style="width: 1.5rem"
                allowClear
                placeholder=""
                optionFilterProp = "children"
                v-model="searchForm.hybjunction"
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
                  style="width: 2.2rem"
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
                  style="width: 2.2rem"
                  allowClear
                  placeholder=""
                  optionFilterProp = "children"
                  v-model="selectedDeal"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
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
              <!-- <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">更新时间:</span>
                <a-locale-provider :locale="zhCN">
                  <a-range-picker style="width: 6rem;" @change="onChange" />
                </a-locale-provider>
              </div> -->
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
                    井  号
                </div>
                <div>
                    形  式
                </div>
                <div>
                    形  状
                </div>
                <div>
                    尺  寸
                </div>
                <div>
                    是否混接
                </div>
              </div>
              <div class="questionArr_content">
                <div class="questionArr_content_item" v-for="(item, index) in pipeArrList" :key="index" @click.stop="showDetial(item)">
                    <div :title="item.combcode" class="hideTextAndEllipsis">
                        {{ item.combcode }}
                    </div>
                    <div :title="item.combType_dictText" class="hideTextAndEllipsis">
                        {{ item.combType_dictText }}
                    </div>
                    <div :title="item.combshape_dictText" class="hideTextAndEllipsis">
                        {{ item.combshape_dictText }}
                    </div>
                    <div>
                        {{ item.combDimen1 || '-' }}
                    </div>
                    <div>
                        {{ item.hybjunctio }}
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
                <div class="pipeInfo" style="height: 13.56rem;">
                   <div class="titleBac">编辑</div>
                   <div class="conTain">
                      <div class="line">
                        <div>
                          <span>雨水口号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="addYushuikouForm.combcode" />
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
                            v-model="addYushuikouForm.proId"
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
                            v-model="addYushuikouForm.gcId"
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
                              v-model="addYushuikouForm.locationcode"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
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
                              v-model="addYushuikouForm.comb_type"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in combtypeArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>材质: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.cov_materi"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeMaterial" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>形状: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.combshape"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in combshapeArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>尺寸(米): </span>
                            <a-input style="width: 2.2rem;" v-model="addYushuikouForm.comb_dimen1" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>最大深度(米): </span>
                            <a-input style="width: 2.2rem;" v-model="addYushuikouForm.maxdepth" placeholder="" />
                          </div>
                          <div>
                            <span>地表高程(米): </span>
                            <a-input style="width: 2.2rem;" v-model="addYushuikouForm.surface_el" placeholder="" />
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
                              v-model="addYushuikouForm.hybjunctio"
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
                              v-model="addYushuikouForm.connected"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>起点X: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addYushuikouForm.x_coor" />
                          </div>
                          <div>
                            <span>起点Y: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="addYushuikouForm.y_coor" />
                          </div>
                          <div @click="getPoint">
                            坐标拾取
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
                              v-model="addYushuikouForm.status"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <!-- <div>
                            <span>施工状态: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.status"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div> -->
                      </div>
                      <div class="line">
                          <div>
                            <span>数据来源: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.datasource"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in datasourceArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>填报单位: </span>
                            <a-input style="width: 2.8rem;" v-model="addYushuikouForm.report_unit" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>填报日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 3rem;" @change="reportChoose" />
                            </a-locale-provider>
                          </div>
                          <div>
                            <span>建设年代: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 3rem;" @change="constructionChoose" />
                            </a-locale-provider>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>是否装备垃圾拦截装置: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.antitrash"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>是否装备防臭装置: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.antiordor"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>是否装备初期雨水截流装置: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="addYushuikouForm.inirainint"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                        <div style="width: 100%;">
                            <span>备注: </span>
                            <a-input style="width: 70%;" v-model="addYushuikouForm.remark" placeholder="" />
                          </div>
                      </div>
                      <div class="actionsButtton">
                          <div @click="addNewPipeMeth">新增</div>
                          <div @click="editYushuikou">编辑</div>
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
                          <a-input style="width: 2.6rem;" placeholder="" v-model="hunjieObj.manjing" />
                        </div>
                        <div>
                          <span>混接点编号: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="hunjieObj.hybridcode" />
                        </div>
                      </div>
                      <div class="line">
                        <span style="margin-left: .15rem;">周边图: </span>
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
                        <span style="margin-left: .15rem;">局部图: </span>
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
                            <span>混接类型: </span>
                            <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="hunjieObj.problem_type"
                              @change="hunjieChange1"
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
                            <span>混接点排水户编号: </span>
                            <a-input style="width: 2rem;" v-model="hunjieObj.dischargercode" placeholder="" />
                          </div>
                          <div>
                            <span>接入管径: </span>
                            <a-input style="width: 2.6rem;" v-model="hunjieObj.pip_diameter" placeholder="" />
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
            </div>
          </div>
        </div>
        <div id="pppopInfos" v-if="popShow" @click="stopProg" class="info  animate__animated animate__fadeIn">
            <div class="text">
              属性详情
            </div>
            <div class="closeButton" @click="closePopShow">
              X
            </div>
            <div class="pipeName">
              <div>管段：{{ objData.inJuncid }}-{{ objData.outJuncid }}</div>
              <!-- <div class="back">返回</div> -->
              <div class="add" @click="test">混接列表</div>
            </div>
            <div class="scrollContent">
              <div class="content">
                <div class="pipeInfo">
                   <div class="titleBac">编辑管段</div>
                   <div class="conTain">
                      <div class="line">
                        <div>
                          <span>起始井号: </span>
                          <a-input style="width: 1.2rem;" v-model="editPipeForm.inJuncid" placeholder="" />
                        </div>
                        <div>
                          <span>终止井号: </span>
                          <a-input style="width: 1.2rem;" v-model="editPipeForm.outJuncid" placeholder="" />
                        </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>管段类型: </span>
                            <a-select
                              style="width: 1.2rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="editPipeForm.pipeCateg"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeCateg" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>管段材质: </span>
                            <a-select
                              style="width: 1.2rem;"
                              placeholder="请选择"
                              optionFilterProp = "children"
                              :showArrow="showArrow"
                              v-model="editPipeForm.material"
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
                            <a-input style="width: 1.2rem;" v-model="editPipeForm.pipeLengt" placeholder="" />
                          </div>
                          <div>
                            <span>管段直径(mm): </span>
                            <a-input style="width: 1.2rem;" v-model="editPipeForm.shapeData" placeholder="" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>检测方向: </span>
                            <a-select
                              style="width: 1.2rem;"
                              placeholder="请选择"
                              optionFilterProp = "children"
                              :showArrow="showArrow"
                              v-model="editPipeForm.flowdirect"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in flowdirectArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>检测方法: </span>
                            <a-select
                              style="width: 1.2rem;"
                              placeholder="请选择"
                              optionFilterProp = "children"
                              v-model="editPipeForm.checkMethod"
                              :showArrow="showArrow"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in checkMethodArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>设施状态: </span>
                            <a-select
                              style="width: 1.2rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="editPipeForm.status"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in pipeStatusArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>监测日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker style="width: 1.7rem;" :default-value="moment(editPipeForm.recordDat, 'YYYY-MM-DD')" @change.stop="onChange" />
                            </a-locale-provider>
                          </div>
                          <div>
                            <span>完成状态: </span>
                            <a-select
                              style="width: 1.2rem;"
                              placeholder="请选择"
                              optionFilterProp = "children"
                              :showArrow="showArrow"
                              v-model="editPipeForm.isComplete"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in isCompleteArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                        <div>
                            <span>备注: </span>
                            <a-input style="width: 100%;" v-model="editPipeForm.remark" placeholder="" />
                          </div>
                      </div>
                      <div class="actionsButtton">
                          <div @click="editPipe">保存</div>
                          <div @click="clearEditForm">清空</div>
                      </div>
                   </div>
                </div>
                <div class="pipeInfo">
                  <div class="titleBac">新增缺陷</div>
                  <div class="conTain">
                    <div class="line">
                      <div>
                        <span>起始井号: </span>
                        <a-input style="width: 1.2rem;" v-model="addDefetsForm.inJuncid" placeholder="" />
                      </div>
                      <div>
                        <span>终止井号: </span>
                        <a-input style="width: 1.2rem;" v-model="addDefetsForm.outJuncid" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>图片: </span>
                        <span style="position: relative;display: inline-block;width: 1rem;height: .5rem;">
                            <input ref="picinputs" style="position: absolute;left: -9999px;" id="id" @change="handlechangePic" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="id">
                              上传图片
                            </label>
                        </span>
                        <!-- {{ dataUrl }} -->
                        <img v-if="dataUrl" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="dataUrl" alt="">
                        <img v-if="dataUrl" @click="deletePicAct" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                        <!-- <a-button>上传图片</a-button> -->
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>距离（m）: </span>
                         <a-input style="width: 1.2rem;margin-right: .1rem;" v-model="addDefetsForm.defectJlstart" placeholder="" />———
                         <a-input style="width: 1.2rem;" v-model="addDefetsForm.defectJlend" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>缺陷: </span>
                         <a-select
                            style="width: 1.2rem;margin-right: .2rem;"
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
                            style="width: 1.2rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.defectCode"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild1" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="addDefetsForm.defectGra"
                            :showArrow="showArrow"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild2" :key="roleindex.toString()" :title="role.title" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                          <span>备注: </span>
                          <a-input style="width: 100%;" v-model="addDefetsForm.remark" placeholder="" />
                        </div>
                    </div>
                    <div class="line">
                      <div>
                          <span>修复建议: </span>
                          <a-input style="width: 100%;" v-model="addDefetsForm.checkRect" placeholder="" />
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
                      <div>
                        <span>起始井号: </span>
                        <a-input style="width: 1.2rem;" v-model="item.inJuncid" placeholder="" />
                      </div>
                      <div>
                        <span>终止井号: </span>
                        <a-input style="width: 1.2rem;" v-model="item.outJuncid" placeholder="" />
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>图片: </span>
                        <span style="position: relative;display: inline-block;width: 1rem;height: .5rem;" @click="chooseWitchPic(index)">
                            <input ref="picinputs" style="position: absolute;left: -9999px;" id="id" @change="handlechangePic" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="id">
                              上传图片
                            </label>
                        </span>
                        <!-- {{ dataUrl }} -->
                        <img v-if="item.fileRelat" style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="addUrl(item.fileRelat)" alt="">
                        <img v-else-if="item.inJuncid = 'JWGGWS29'" style="margin-left: .3rem;width: .66rem;height: .54rem;" src="../../../assets/qian.png" @click="showLargePic(item)" alt="">
                        <img v-if="item.fileRelat" @click="deletePicActEdit(item.fileRelat, index)" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt="">
                        <!-- <a-button>上传图片</a-button> -->
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>视频: </span>
                        <span style="position: relative;display: inline-block;width: 1rem;height: .5rem;" @click="chooseWitchVideo(index)">
                            <input ref="picinputs" style="position: absolute;left: -9999px;" id="id" @change="handlechangeVideo" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="id">
                              修复前视频
                            </label>
                        </span>
                        <!-- {{ dataUrl }} -->
                        <!-- <img style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="addUrl(item.fileRelat)" @click="popVideo" alt=""> -->
                        <!-- <img v-if="item.fileRelat" @click="deletePicActEdit(item.fileRelat, index)" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt=""> -->
                        <span @click="popVideo1(item)" v-if="item.inJuncid = 'JWGGWS29'" style="margin-left: .5rem;">查看视频</span>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>视频: </span>
                        <span style="position: relative;display: inline-block;width: 1rem;height: .5rem;" @click="chooseWitchVideo(index)">
                            <input ref="picinputs" style="position: absolute;left: -9999px;" id="id" @change="handlechangeVideo" type="file">
                            <label style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: rgba(0, 183, 238, 1);" for="id">
                              修复后视频
                            </label>
                        </span>
                        <!-- {{ dataUrl }} -->
                        <!-- <img style="margin-left: .3rem;width: .66rem;height: .54rem;" :src="addUrl(item.fileRelat)" @click="popVideo" alt=""> -->
                        <!-- <img v-if="item.fileRelat" @click="deletePicActEdit(item.fileRelat, index)" style="margin-left: .3rem;width: .33rem;height: .33rem;" :src="deletePic" alt=""> -->
                        <span @click="popVideo2" v-if="item.inJuncid = 'JWGGWS29'" style="margin-left: .5rem;">查看视频</span>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>距离（m）: </span>
                         <a-input style="width: 1.2rem;margin-right: .1rem;" v-model="item.defectJlstart" placeholder="" />———
                         <a-input style="width: 1.2rem;" placeholder="" v-model="item.defectJlend" />
                      </div>
                    </div>
                    <div class="line">
                      <div>
                        <span>缺陷: </span>
                         <a-select
                            style="width: 1.2rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.checkType"
                            :showArrow="showArrow"
                            @change="handleChange11"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkType" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.2rem;margin-right: .2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            v-model="item.defectCode"
                            :showArrow="showArrow"
                            @change="handleChange2"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild1" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                          <a-select
                            style="width: 1.2rem;"
                            placeholder="请选择"
                            optionFilterProp = "children"
                            :showArrow="showArrow"
                            v-model="item.defectGra"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in checkTypeChild2" :key="roleindex.toString()" :value="role.value">
                              {{ role.title }}
                            </a-select-option>
                          </a-select>
                      </div>
                    </div>
                    <div class="line">
                      <div>
                          <span>备注: </span>
                          <a-input style="width: 100%;" v-model="item.remark" placeholder="" />
                        </div>
                    </div>
                    <div class="line">
                      <div>
                          <span>修复建议: </span>
                          <a-input style="width: 100%;" v-model="item.checkRect" placeholder="" />
                        </div>
                    </div>
                    <div class="actionsButtton">
                        <div @click="sureSave(item)">保存</div>
                        <div @click="clearEdit(item)">清空</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <a-locale-provider :locale="zhCN">
          <a-modal :width="500" :footer="footerShow" v-model="videoShow3" title="照片">
            <img style="width: 380px;height: 250px;" src="../../../assets/qian.png" alt="">
            <img style="width: 380px;height: 250px;" src="../../../assets/hou.png" alt="">
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
        <a-locale-provider :locale="zhCN">
          <a-modal v-model="visible" title="混接列表" @ok="handleOk" :width="920">
            <a-button style="margin-bottom: .3rem;" class="editable-add-btn" @click="handleAdd">
              添加
            </a-button>
            <a-form-model :model="queryParams" :label-col="labelCol1" :wrapper-col="wrapperCol1" ref="ruleForm">
              <div style="display: flex;width: 100%;">
                  <a-form-model-item label="管道类型" style="width: 25%;">
                    <a-select v-model="queryParams.gdclass" placeholder="">
                      <a-select-option v-for="(role,roleindex) in gdclassArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item label="混接状况" style="width: 25%;">
                    <a-select v-model="queryParams.hunjieclass" placeholder="">
                      <a-select-option v-for="(role,roleindex) in hunjieclassArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                      </a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item label="主井号" prop="manjing">
                    <a-input v-model="queryParams.manjing" />
                  </a-form-model-item>
                  <a-button style="margin-bottom: .3rem;" class="editable-add-btn" @click="getHunjieList">
                    查询
                  </a-button>
              </div>
            </a-form-model>
            <a-table bordered :data-source="dataSource" :columns="columns" :scroll="{ y: 240 }" :pagination="ipagination">
              <template slot="gdclass" slot-scope="text">
                {{text == 1 ? '雨水' : '污水'}}
              </template>
              <template slot="hunjieclass" slot-scope="text">
                {{ text == 1 ? '污水接入雨水' : (text == 2 ? '雨水接入污水' : '3支管暗接') }}
              </template>
              <template slot="operation" slot-scope="text, record">
                <a href="javascript:;" style="margin-right: .3rem;" @click="editMixPipe(record)">编辑</a>
                <a-popconfirm
                  v-if="dataSource.length"
                  title="确认删除?"
                  @confirm="() => onDelete(record.id)"
                >
                  <a href="javascript:;">删除</a>
                </a-popconfirm>
              </template>
            </a-table>
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
import { addFeatureByPoint, getPointAddress2, enableCreatePoly, searchGraphicByObjectId, deleteFeatureByPoint, editFeatureByPoint, showInmap } from '../../../Maps/mapApi.js'
export default {
  name: 'yushuikou',
  data() {
    return {
      hunjiePicShow: [],
      hunjiePicfile: [],
      jubuPicShow: [],
      jubuPicfile: [],
      guandaoshiyiPicShow: [],
      guandaoshiyiPicfile: [],
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
      hunjieObj: {
        wellcode: null,
        hybridcode: null,
        near_figure: null,
        part_figure: null,
        pip_figure: null,
        problem_type: null,
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
        comp_budget: null,
        x_coor: null,
        y_coor: null
      },
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
      rules: {
        manjing: [{ required: true, message: '请输入主井号' }],
        hjStart: [{ required: true, message: '请输入混接管段起点' }],
        hjEnd: [{ required: true, message: '请输入混接管段终点' }]
      },
      areaArr: [
        {
          value: 360731,
          title: '于都县'
        }
      ],
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      labelCol1: { span: 10 },
      wrapperCol1: { span: 10 },
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
      distance: 100,
      popShow: false,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dataUrl: '',
      showPic: require('../../../assets/imgs/search/yitusoutu.png'),
      deletePic: require('../../../assets/imgs/zhihuipaishui/ppline/delete.png'),
      addYushuikouFormField: {
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
      addYushuikouForm: {
        combcode: null,
        locationcode: null,
        district_id: null,
        district_name: null,
        comb_type: null,
        cov_materi: null,
        combshape: null,
        comb_dimen1: null,
        maxdepth: null,
        surface_el: null,
        hybjunctio: null,
        connected: null,
        status: null,
        datasource: null,
        report_unit: null,
        report_date: null,
        construction: null,
        antitrash: null,
        antiordor: null,
        inirainint: null,
        remark: null,
        del_flag: 0,
        x_coor: null,
        y_coor: null,
        proId: '',
        gcId: ''
      },
      editPipeForm: {
        inJuncid: '',
        outJuncid: '',
        pipeCateg: '',
        material: '',
        pipeLengt: '',
        shapeData: '',
        flowdirect: '',
        checkMethod: '',
        recordDat: '',
        isComplete: '',
        remark: '',
        status: ''
      },
      addDefetsForm: {
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
      searchForm: {
            districtId: '',
            districtName: '',
            pageNo: 1,
            pageSize: 20,
            locationcodelist: '',
            roadids: '',
            proId: '',
            gcId: '',
            combcode: '',
            combtype: '',
            hybjunction: '',
            status: '',
            yearfw: ''
      },
      pipeArrList: [],
      stateEle: null,
      pageNo: 1,
      objData: {},
      nowPipeid: '',
      picTempUrl: '',
      pipeQxListArr: [],
      addType: 'polyLine',
      chooseobjectid: '',
      moreSearch: false,
      allRoadids: [],
      roadArr: [],
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
      datasourceArr: [
        {
          value: 1,
          title: '现场探测'
        },
        {
          value: 2,
          title: '竣工图'
        },
        {
          value: 3,
          title: '设计图'
        },
        {
          value: 4,
          title: '人工估计'
        },
        {
          value: 5,
          title: '其它'
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
      combid: '',
      combtypeArr: [],
      combshapeArr: [],
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
    // this.queryBydistrictId(disid)
    this.getXMname()
    this.getProvinceInfo()
    this.$bus.off('writePipeForm')
    this.$bus.on('writePipeForm', (e) => {
      this.choose(2)
      this.addType = e
    })
    this.$bus.off('getPointXY')
    this.$bus.on('getPointXY', (e) => {
      this.addYushuikouForm.x_coor = e.x
      this.addYushuikouForm.y_coor = e.y
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
        // ele.feature.attributes
        ele.feature.attributes.item.combDimen1 = ele.feature.attributes.comb_dimen1
        ele.feature.attributes.combType_dictText = this.getcombTypeDictText(ele.feature.attributes.comb_type)
        ele.feature.attributes.combshape_dictText = this.getcombshapeDictText(ele.feature.attributes.combshape)
        this.pipeArrList.push(ele.feature.attributes)
      })
    })
    if (window.localStorage.getItem('searchMapData')) {
      this.pipeArrList = []
      this.infiniteShow = false
      let searchMapData = JSON.parse(window.localStorage.getItem('searchMapData')).filter((item) => {
        return item.layerId == 3
      })
      searchMapData.forEach((ele) => {
        // ele.feature.attributes
        ele.feature.attributes.item.combDimen1 = ele.feature.attributes.comb_dimen1
        ele.feature.attributes.combType_dictText = this.getcombTypeDictText(ele.feature.attributes.comb_type)
        ele.feature.attributes.combshape_dictText = this.getcombshapeDictText(ele.feature.attributes.combshape)
        this.pipeArrList.push(ele.feature.attributes)
      })
    }
    this.$bus.on('yushuikouForm', (atrObj1) => {
      let obj = JSON.parse(atrObj1)
      let atrObj = {
        combcode: obj.combcode,
        locationcode: obj.locationcode,
        districtName: obj.district_name,
        districtId: obj.district_id,
        combType: obj.comb_type,
        material: obj.material,
        combshape: obj.combshape,
        combDimen1: obj.comb_dimen1,
        maxdepth: obj.maxdepth,
        surfaceEl: obj.surface_el,
        hybjunctio: obj.hybjunctio,
        connected: obj.connected,
        status: obj.status,
        datasource: obj.datasource,
        reportUnit: obj.report_unit,
        reportDate: obj.report_date,
        construction: obj.construction,
        antitrash: obj.antitrash,
        antiordor: obj.antiordor,
        inirainint: obj.inirainint,
        remark: obj.remark,
        del_flag: 0,
        xcoor: obj.x_coor,
        ycoor: obj.y_coor
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
      if (newVal == 1) {
        this.clearData()
      }
      this.nowPipeid = ''
      this.clearAlladd()
    },
    addMixPipe () {
      if (this.addMixPipe == false) {
        this.editMixPipeBool = false
      }
    }
  },
  created() {
    this.getHunjieList()
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
    // 雨水口形式
    this.combtypeArr = allDictItems.combtype
    // 雨水口形状
    this.combshapeArr = allDictItems.combshape
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
      this.addYushuikouForm.district_name = one.district_name
      this.addYushuikouForm.district_id = one.district_id
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
            this.addYushuikouForm.district_name = res.result[0].district_name
            this.addYushuikouForm.district_id = res.result[0].district_id
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
        this.allFileArr = this.hunjiePicfile.concat(this.jubuPicfile, this.guandaoshiyiPicfile)
        this.allFileArr.forEach(async (item, index) => {
            arr.push(this.test(item, index, this.hunjieObj))
        })
        Promise.all(arr).then(res => {
          let hunjiePicStr = res.slice(0,this.hunjiePicfile.length)
          let jubuPicStr = res.slice(this.hunjiePicfile.length, this.jubuPicfile.length)
          let guandaoshiyiPicStr = res.slice(this.jubuPicfile.length + this.hunjiePicfile.length)
          this.hunjieObj.near_figure = hunjiePicStr.join(',')
          this.hunjieObj.part_figure = jubuPicStr.join(',')
          this.hunjieObj.pip_figure = guandaoshiyiPicStr.join(',')
          this.hunjieObj.y_coor = this.addJianchaForm.y_coor
          this.hunjieObj.del_flag = 0
          this.hunjieObj.district_id = this.addJianchaForm.district_id
          this.hunjieObj.x_coor = this.addJianchaForm.x_coor
          addFeatureByPoint(this.hunjieObj, 'point', 'hunjie')
        }).catch(err => {
          console.log('error', err)
        })
      }
    },
    editHunjie () {
      let arr = []
      this.allFileEditArr = this.hunjiePicEditfile.concat(this.jubuPicEditfile, this.guandaoshiyiPicEditfile)
      this.allFileEditArr.forEach(async (item, index) => {
          arr.push(this.test(item, index, this.hunjieObj))
      })
      Promise.all(arr).then(res => {
        let hunjiePicStr = res.slice(0,this.hunjiePicEditfile.length)
        let jubuPicStr = res.slice(this.hunjiePicEditfile.length, this.jubuPicEditfile.length)
        let guandaoshiyiPicStr = res.slice(this.jubuPicEditfile.length + this.hunjiePicEditfile.length)
        let a = this.hunjiePicShow.slice(0, this.hunjiePicShow.length - this.hunjiePicEditfile.length)
        let b = this.jubuPicShow.slice(0, this.jubuPicShow.length - this.jubuPicEditfile.length)
        let c = this.guandaoshiyiPicShow.slice(0, this.guandaoshiyiPicShow.length - this.guandaoshiyiPicEditfile.length)
        this.hunjieObj.near_figure = a.length !== 0 ? (hunjiePicStr.length !== 0 ? (a.join(',') + ',' + hunjiePicStr.join(',')) : a.join(',')) : hunjiePicStr.join(',')
        this.hunjieObj.part_figure = b.length !== 0 ? (jubuPicStr.length !== 0 ? (b.join(',') + ',' + jubuPicStr.join(',')) : b.join(',')) :  jubuPicStr.join(',')
        this.hunjieObj.pip_figure = c.length !== 0 ? (guandaoshiyiPicStr.length !== 0 ? (c.join(',') + ',' + guandaoshiyiPicStr.join(',')) : c.join(',')) : guandaoshiyiPicStr.join(',')
        this.hunjieObj.y_coor = this.addJianchaForm.y_coor
        this.hunjieObj.x_coor = this.addJianchaForm.x_coor
        this.hunjieObj.district_id = this.addJianchaForm.district_id
        this.hunjieObj.del_flag = 0
        editFeatureByPoint(this.hunjieObj, 'point', 'hunjie')
      }).catch(err => {
        console.log('error', err)
      })
    },
    hunjieChange1 (info) {
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
    queryByCode () {
      let params = {
        wellcode: this.hunjieObj.wellcode
      }
      this.$get(apiNames['混接点编码查询'], params).then(res => {
        if (res.result == null) {
          this.cantAdd = false
        } else {
          this.cantAdd = true
          this.hunjieObj = {
            wellcode: res.result.wellcode,
            hybridcode: res.result.hybridcode,
            near_figure: res.result.nearFigure,
            part_figure: res.result.partFigure,
            pip_figure: res.result.pipFigure,
            problem_type: res.result.hybType,
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
          this.hunjiePicShow = res.result.nearFigure == '' ? [] : res.result.nearFigure.split(',')
          this.jubuPicShow = res.result.partFigure == '' ? [] : res.result.partFigure.split(',')
          this.guandaoshiyiPicShow = res.result.pipFigure == '' ? [] : res.result.pipFigure.split(',')
        }
      })
    },
    confirmDeleteHunjie () {
      this.hunjieObj.objectid = ''
      deleteFeatureByPoint(this.hunjieObj, 'point', 'hunjie')
    },
    clearHunjieData () {},
    onChangeArea(value, selectedOptions) {
        this.searchForm.districtName = ''
        this.searchForm.districtId = value.join(',')
        this.addYushuikouForm.district_name = ''
        this.addYushuikouForm.district_id = value.join(',')
        this.placeholder = ''
        for (let i = 0; i < selectedOptions.length; i++) {
            this.searchForm.districtName += selectedOptions[i].label + '/'
            this.addYushuikouForm.district_name += selectedOptions[i].label + '/'
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
    getPoint () {
      notification.success({ message: '系统提示', description: '请在地图上选点'})
      getPointAddress2((e) => {
          this.$set(this.addYushuikouForm, 'x_coor', e.geometry.x)
          this.$set(this.addYushuikouForm, 'y_coor', e.geometry.y)
      })
    },
    getcombTypeDictText (conbtype) {
      if (conbtype == 1) {
        return '平篦式'
      } else if (conbtype == 2) {
        return '立篦式'
      } else if (conbtype == 3) {
        return '联合式'
      } else if (conbtype == 4) {
        return '偏沟式'
      } else if (conbtype == 5) {
        return '道牙'
      } else if (conbtype == 6) {
        return '其它'
      }
    },
    getcombshapeDictText (combshape) {
      if (conbtype == 1) {
        return '矩形'
      } else if (conbtype == 2) {
        return '圆形'
      } else {
        return '其它'
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
    showLargePic () {
      this.videoShow3 = true
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
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
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
      this.editPipeForm.recordDat = moment(date).format('YYYY-MM-DD')
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
          this.$post(apiNames['获取雨水口'], this.searchForm).then(res => {
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
        pipeid: this.nowPipeid
      }
      this.$get(apiNames['查询管道缺陷列表'], params).then(res => {
        this.pipeQxListArr = []
        res.result.forEach((item, index) => {
          this.pipeQxListArr.push(
            {
              inJuncid: item.inJuncid,
              outJuncid: item.outJuncid,
              fileRelat: item.fileRelat,
              defectJlstart: item.defectJlstart,
              defectJlend: item.defectJlend,
              checkType: '' + item.checkType,
              defectCode: '' + item.defectCode,
              defectGra: '' + item.defectGra,
              remark: item.remark,
              checkRect: item.checkRect,
              id: item.id
            }
          )
        })
        // this.pipeQxListArr = res.result
      })
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
    confirmDelete(e) {
      this.addYushuikouForm.objectid = this.chooseobjectid
      deleteFeatureByPoint(this.addYushuikouForm, 'point', 'yushuikou')
    },
    cancelDelete(e) {
      console.log(e);
      // this.$message.error('Click on No');
    },
    editYushuikou () {
      this.addYushuikouForm.combid = this.combid
      this.addYushuikouForm.del_flag = 0
      if (this.addYushuikouForm.x_coor && this.addYushuikouForm.y_coor) {
        editFeatureByPoint(this.addYushuikouForm, 'point', 'yushuikou')
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
      for (const key in this.addYushuikouForm) {
        if (Object.hasOwnProperty.call(this.addYushuikouFormField, key)) {
          const element = this.addYushuikouForm[key];
          if (element === '' || element === null ) {
            notification.error({ message: '添加提示', description: this.addYushuikouFormField[key]})
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
        let filtArr = await this.groupByjuncid(this.addYushuikouForm)
        if (filtArr[1].length !== 0) {
          notification.error({ message: '添加提示', description: '此雨水口已存在，请勿重复添加'})
        } else {
          let combid = 'AAA' + guid()
          this.addYushuikouForm.combid = combid
          if (this.addYushuikouForm.x_coor && this.addYushuikouForm.y_coor) {
            addFeatureByPoint(this.addYushuikouForm, 'point', 'yushuikou')
          } else {
            enableCreatePoly(this.addYushuikouForm, 'point', false, 'yushuikou')
          }
        }
      }
    },
    groupByjuncid (data) {
      let params = {
        params: [data],
        type: 'comb'
      }
      return new Promise((resolve, reject)=>{
          this.$post(`${apiNames['导出数据分组']}`, params).then(res => {
              let getData = res
              resolve(getData)
          })
      })
    },
    reportChoose (date) {
      this.addYushuikouForm.report_date = moment(date).format('YYYY-MM-DD')
    },
    constructionChoose (date) {
      this.addYushuikouForm.construction = moment(date).format('YYYY-MM-DD')
    },
    newQxAdd () {
      if (this.nowPipeid === '') {
        notification.success({ message: '添加提示', description: '未获取到管道id'})
      } else {
        this.addDefetsForm.pipeid = this.nowPipeid
        this.addDefetsForm.fileRelat = this.picTempUrl
        this.addDefetsForm.isDispose = 0
        this.$post(apiNames['新增管道缺陷'], this.addDefetsForm).then(res => {
          if (res.code == 200) {
            notification.success({ message: '添加提示', description: '新增缺陷成功'})
          } else {
            notification.error({ message: '添加提示', description: res.message})
          }
        })
      }
    },
    editPipe () {
      // editPolylineNext(this.editPipeForm)
      this.editPipeForm.pipeid = this.nowPipeid
       this.editPipeForm.objectid = this.chooseobjectid
      this.$put(apiNames['编辑管道'], this.editPipeForm).then(res => {
        console.log(res)
        if (res.code == 200) {
          notification.success({ message: '编辑提示', description: '修改管道成功'})
        } else {
          notification.error({ message: '添加提示', description: res.message})
        }
      })
    },
    clearEditForm () {
      this.editPipeForm = {
        inJuncid: '',
        outJuncid: '',
        pipeCateg: '',
        material: '',
        pipeLengt: '',
        shapeData: '',
        flowdirect: '',
        checkMethod: '',
        recordDat: '',
        isComplete: '',
        remark: '',
        status: ''
      }
    },
    dateChoose (date) {
      this.addYushuikouForm.recordDat = moment(date).format('YYYY-MM-DD')
    },
    searchBySome () {
      if (this.infiniteShow) {
        this.searchForm.pageNo = 1
        this.pipeArrList = []
        this.infiniteHandler(this.stateEle)
      } else {
        // locationcodelist: '',
        // roadids: '',
        // pipecode: '',
        // pipeCateg: '',
        // rainsewami: null,
        // material: '',
        // shapeDataMin: null,
        // shapeDataMax: null,
        // status: '',
        // yearfw: '',
        // inJuncid: '',
        // outJuncid: ''
        // this.pipeArrList = this.pipeArrList.filter((item) => {
        //   return item.roadids == this.searchForm.roadids
        // })
      }
    },
    clearData () {
      this.addYushuikouForm = {
        combcode: '',
        locationcode: '',
        comb_type: null,
        material: null,
        combshape: null,
        comb_dimen1: '',
        maxdepth: '',
        surface_el: '',
        hybjunctio: null,
        connected: null,
        status: null,
        datasource: null,
        report_unit: '',
        report_date: null,
        construction: null,
        antitrash: null,
        antiordor: null,
        inirainint: null,
        remark: '',
        del_flag: 0,
        x_coor: '',
        y_coor: ''
      }
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
        defectGra: '',
        remark: '',
        checkRect: ''
      },
      this.$forceUpdate()
      this.dataUrl = ''
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
    handlechangeVideo () {},
    uploadPic (file) {
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', 'temp');
      this.$post(apiNames['上传图片'], formData).then(res => {
        this.picTempUrl = res.message
        // console.log(res.message)
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
    chooseWitchPic (index) {
        this.pipeQxListArr[index].fileRelat = this.dataUrl
    },
    chooseWitchVideo (index) {
        // this.pipeQxListArr[index].fileRelat = this.dataUrl
    },
    deletePicAct () {
      this.$forceUpdate()
      this.dataUrl = ''
      console.log(this.dataUrl, 'shanchucaozuo')
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
    handleChange11 () {},
    handleChange2 () {},
    stopProg () {},
    actionDo (item) {
      // this.queryBydistrictId(item.districtId)
      this.addYushuikouForm = {
        combcode: item.combcode,
        locationcode: item.locationcode,
        district_name:  item.districtName,
        district_id:  item.districtId,
        comb_type: item.combType,
        material: item.material,
        combshape: item.combshape,
        comb_dimen1: item.combDimen1,
        maxdepth: item.maxdepth,
        surface_el: item.surfaceEl,
        hybjunctio: item.hybjunctio,
        connected: item.connected,
        status: item.status,
        datasource: item.datasource,
        report_unit: item.reportUnit,
        report_date: item.reportDate,
        construction: item.construction,
        antitrash: item.antitrash,
        antiordor: item.antiordor,
        inirainint: item.inirainint,
        remark: item.remark,
        del_flag: 0,
        x_coor: item.xcoor,
        y_coor: item.ycoor,
        proId: '',
        gcId: ''
      }
      this.hunjieObj.wellcode = item.combcode
      this.hunjieObj.y_coor = item.ycoor
      this.hunjieObj.x_coor = item.xcoor
      this.placeholder = item.districtName
      this.queryByCode()
      this.getProid(item.locationcode)
      this.choose(2)
      this.combid = item.combid
      this.chooseobjectid = item.objectid
      searchGraphicByObjectId(item.objectid, 'ps_comb')
    },
    showDetial (item) {
      showInmap(item, 'ps_comb')
      this.actionDo(item)
    },
    getProid (locationcode) {
      this.$get(apiNames['获取工程和项目信息'], {locationcode}).then(res => {
        this.addYushuikouForm.proId = res.result[0].proId
        this.addYushuikouForm.gcId = res.result[0].id
      })
    },
    choose (num) {
      this.chooseNum = num
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
              min-height: 7.26rem;
              border: .02rem solid #0f4c7f;
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
                height: 100%;
                left: 0;
                top: .84rem;
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
        height: 11.02rem;
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
          margin:.6rem 0 0 .68rem;
          .content {
            width: 100%;
            white-space: nowrap;
            overflow-x: auto;
            text-align: left;
            .pipeInfo {
              width: 6.54rem;
              height: 7.76rem;
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
        }
      }
    // }
</style>