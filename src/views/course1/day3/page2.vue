<template>
  <div class="level2-main">
    <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1" />
    <div class="div-bg">
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="5" :routerUrl="router"  :menuList="menuList" ></VueAudio>
      </div>
      <img class="animate-bg" src="../../../assets/images/commonImg/anibg9.png" />
      <div class="page2-content">

        <div class="content-main-left">
          <span class="sentenceBox">
            <span @click="beginMusicAndEnd('text1',true,'ani')" class="item item1 active" ref="text1"></span>
            <span @click="beginMusicAndEnd('text2',true,'ani')" class="item item2" ref="text2"></span>
            <span @click="beginMusicAndEnd('text3',true,'ani')" class="item item3" ref="text3"></span>
            <span @click="beginMusicAndEnd('text4',true,'ani')" class="item item4" ref="text4"></span>
            <span @click="beginMusicAndEnd('text5',true,'ani')" class="item item5" ref="text5"></span>
            <span @click="beginMusicAndEnd('text6',true,'ani')" class="item item6" ref="text6"></span>
            <span @click="beginMusicAndEnd('text7',true,'ani')" class="item item7" ref="text7"></span>
          </span>
          <div @click="beginMusicList('playlist')" class="page5Play"></div>
        </div>
        <div class="content">
          <div class="content-main">
            <div class="content-main-top">
              <li>
                <img src="../../../assets/images/commonImg/order-num-1.png" alt />
              </li>
              <li>
                <img src="../../../assets/images/commonImg/order-num-2.png" alt />
              </li>
              <li>
                <img src="../../../assets/images/commonImg/order-num-3.png" alt />
              </li>
              <li>
                <img src="../../../assets/images/commonImg/order-num-4.png" alt />
              </li>
              <li>
                <img src="../../../assets/images/commonImg/order-num-5.png" alt />
              </li>
              <li>
                <img src="../../../assets/images/commonImg/order-num-6.png" alt />
              </li>
              <li>
                <img src="../../../assets/images/commonImg/order-num-7.png" alt />
              </li>
            </div>

            <div class="content-main-bottom-base">
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter1" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer1'" :id="'answer1'">
                    <!-- 正确答案2  -->
                    <img v-if="answer1" src="../../../assets/images/level1/course9/day3-p2-img1.png" alt="">
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter2" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer2'" :id="'answer2'">
                    <!-- 正确答案1  -->
                    <img v-if="answer2" src="../../../assets/images/level1/course9/day3-p2-img2.png" alt="">
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter3" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer3'" :id="'answer3'">
                    <!-- 正确答案3  -->
                    <img v-if="answer3" src="../../../assets/images/level1/course9/day3-p2-img3.png" alt="" />
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter4" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer4'" :id="'answer4'">
                    <!-- 正确答案4  -->
                    <img v-if="answer4" src="../../../assets/images/level1/course9/day3-p2-img4.png" alt="" />
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter5" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer5'" :id="'answer5'">
                    <!-- 正确答案5  -->
                    <img v-if="answer5" src="../../../assets/images/level1/course9/day3-p2-img5.png" alt="" />
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter6" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer6'" :id="'answer6'">
                    <!-- 正确答案6  -->
                    <img v-if="answer6" src="../../../assets/images/level1/course9/day3-p2-img6.png" alt="" />
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter7" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer7'" :id="'answer7'">
                    <img v-if="answer7" src="../../../assets/images/level1/course9/day3-p2-img7.png" alt="" />
                  </li>
                </transition-group>
              </vuedraggable>
            </div>

            <vuedraggable class="content-main-bottom" @end="end" v-model="appleLetter" v-bind="option" :move="move">
              <transition-group>
                <li v-if="!answer6" :key="'answer6'" :id="'answer6'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img6.png" alt="" />
                </li>
                <li v-if="!answer1" :key="'answer1'" :id="'answer1'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img1.png" alt="" />
                </li>
                <li v-if="!answer3" :key="'answer3'" :id="'answer3'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img3.png" alt="" />
                </li>
                <li v-if="!answer4" :key="'answer4'" :id="'answer4'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img4.png" alt="" />
                </li>
                <li v-if="!answer2" :key="'answer2'" :id="'answer2'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img2.png" alt="" />
                </li>
                <li v-if="!answer5" :key="'answer5'" :id="'answer5'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img5.png" alt="" />
                </li>
                <li v-if="!answer7" :key="'answer7'" :id="'answer7'">
                  <img src="../../../assets/images/level1/course9/day3-p2-img7.png" alt="" />
                </li>
              </transition-group>
            </vuedraggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueAudio from "../../../components/lookOrderMenu";
  // import VueAudio from "./VueAudio";
  import vuedraggable from "vuedraggable";
  export default {
    name: "",
    components: {
      VueAudio,
      vuedraggable
    },
    data() {
      return {
        // 烟花
        timer1: null,
        step1: 0,
        isSHow: "",
        curImg1: "./static/images/a/a_00000.png",
        menuList:[//右侧菜单
          {
            routerUrl:'course1day3Page1',
            imgSrc:require('../../../assets/images/Vocabulary.png')
          },
          {
            routerUrl:'course1day3Page2',
            imgSrc:require('../../../assets/images/Look.png')
          },{
             routerUrl:'menu',
             imgSrc:require('../../../assets/images/MenuText.png')
          }
        ],
        curImgList1: [{
            url: "./static/images/a/a_00000.png"
          },
          {
            url: "./static/images/a/a_00001.png"
          },
          {
            url: "./static/images/a/a_00002.png"
          },
          {
            url: "./static/images/a/a_00003.png"
          },
          {
            url: "./static/images/a/a_00004.png"
          },
          {
            url: "./static/images/a/a_00005.png"
          },
          {
            url: "./static/images/a/a_00006.png"
          },
          {
            url: "./static/images/a/a_00007.png"
          },
          {
            url: "./static/images/a/a_00008.png"
          },
          {
            url: "./static/images/a/a_00009.png"
          },
          {
            url: "./static/images/a/a_00010.png"
          },
          {
            url: "./static/images/a/a_00011.png"
          },
          {
            url: "./static/images/a/a_00012.png"
          },
          {
            url: "./static/images/a/a_00013.png"
          },
          {
            url: "./static/images/a/a_00014.png"
          },
          {
            url: "./static/images/a/a_00015.png"
          },
          {
            url: "./static/images/a/a_00016.png"
          },
          {
            url: "./static/images/a/a_00017.png"
          },
          {
            url: "./static/images/a/a_00018.png"
          },
          {
            url: "./static/images/a/a_00019.png"
          },
          {
            url: "./static/images/a/a_00020.png"
          },
          {
            url: "./static/images/a/a_00021.png"
          },
          {
            url: "./static/images/a/a_00022.png"
          },
          {
            url: "./static/images/a/a_00023.png"
          },
          {
            url: "./static/images/a/a_00024.png"
          },
          {
            url: "./static/images/a/a_00025.png"
          },
          {
            url: "./static/images/a/a_00026.png"
          },
          {
            url: "./static/images/a/a_00027.png"
          },
          {
            url: "./static/images/a/a_00028.png"
          },
          {
            url: "./static/images/a/a_00029.png"
          },
          {
            url: "./static/images/a/a_00030.png"
          },
          {
            url: "./static/images/a/a_00031.png"
          },
          {
            url: "./static/images/a/a_00032.png"
          },
          {
            url: "./static/images/a/a_00033.png"
          },
          {
            url: "./static/images/a/a_00034.png"
          },
          {
            url: "./static/images/a/a_00035.png"
          },
          {
            url: "./static/images/a/a_00036.png"
          },
          {
            url: "./static/images/a/a_00037.png"
          },
          {
            url: "./static/images/a/a_00038.png"
          },
          {
            url: "./static/images/a/a_00039.png"
          },
          {
            url: "./static/images/a/a_00040.png"
          },
          {
            url: "./static/images/a/a_00041.png"
          },
          {
            url: "./static/images/a/a_00042.png"
          },
          {
            url: "./static/images/a/a_00043.png"
          },
          {
            url: "./static/images/a/a_00044.png"
          },
          {
            url: "./static/images/a/a_00045.png"
          },
          {
            url: "./static/images/a/a_00046.png"
          },
          {
            url: "./static/images/a/a_00047.png"
          },
          {
            url: "./static/images/a/a_00048.png"
          },
          {
            url: "./static/images/a/a_00049.png"
          },
          {
            url: "./static/images/a/a_00050.png"
          },
          {
            url: "./static/images/a/a_00051.png"
          },
          {
            url: "./static/images/a/a_00052.png"
          },
          {
            url: "./static/images/a/a_00053.png"
          },
          {
            url: "./static/images/a/a_00054.png"
          },
          {
            url: "./static/images/a/a_00055.png"
          },
          {
            url: "./static/images/a/a_00056.png"
          },
          {
            url: "./static/images/a/a_00057.png"
          },
          {
            url: "./static/images/a/a_00058.png"
          }
        ],

        //拖拽
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
        answer5: false,
        answer6: false,
        answer7: false,
        answerCount: 7,
        currentAnswer: 0,
        //拖拽
        appleLetter: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter1: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter2: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter3: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter4: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter5: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter6: [{
          flag: "true",
          name: "red"
        }],
        //拖拽
        appleLetter7: [{
          flag: "true",
          name: "red"
        }],
        option: {
          group: {
            name: "aaa",
            pull: "clone"
          },
          filter: ".move",
          scroll: false,
          sort: false
        },
        option1: {
          group: {
            name: "aaa",
            pull: "clone"
          },
          filter: ".move",
          scroll: false,
          sort: false,
          disabled: false
        },

        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-09.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        playtime: {
          time: 179.4,
          randem: Math.random(1000)
        },
        router: "/index",
        playlist: ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7'],
        musicTimeList: {
          text1: {
            beginTime: 213.8,
            endTime: 3
          },
          text2: {
            beginTime: 218.1,
            endTime: 3
          },
          text3: {
            beginTime: 224.2,
            endTime: 3
          },
          text4: {
            beginTime: 229,
            endTime: 3
          },
          text5: {
            beginTime: 233.5,
            endTime: 3
          },
          text6: {
            beginTime: 238,
            endTime: 3
          },
          text7: {
            beginTime: 242,
            endTime: 3
          },
          play: {
            beginTime: 189.5,
            endTime: 15
          },
          right: {
            beginTime: 412,
            endTime: 1.8
          },
          wrong: {
            beginTime: 414.5,
            endTime: 2.5
          },
          over: {
            beginTime: 412,
            endTime: 1.8
          },
        },
        flag: false,
        flag2: true,
        timerList: [],
        tempTimer2: null
      };
    },
    methods: {
      yh() {
        this.curImg1 = this.curImgList1[this.step1].url;
        this.step1++;
        if (this.step1 == 59) {
          this.step1 = 0;
          window.clearInterval(this.timer1);
          this.isSHow = "";
        }
      },
      beginMusicList(item) {
        let that = this;
        let stop = 0;
        that.flag2 = true;
        if (that.flag) {
          for (let i = 0; i < that.playlist.length; i++) {
            (function(i) {
              that.tempTimer2 = window.setTimeout(function() {
                if (that.flag2) {
                  that.beginMusicAndEnd(that.playlist[i], false, 'ani')
                }
              }, stop);
            })(i);
            stop = stop + this.musicTimeList[this.playlist[i]].endTime * 1000;
          }
        } else {
          return
        }
      },
      beginMusicAndEnd(item, breakFlag, ani) {
        let that = this;
        if (breakFlag) {
          that.flag2 = false
        }
        that.clearTimer();
        this.playtime.randem = Math.random(1000);
        this.playtime.time = this.musicTimeList[item].beginTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        that.timerList[4] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, stop);
        if (ani) {
          that.$refs[item].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs[item].style.animation =
              "fadeIn 1s 0s both";
            window.clearTimeout(tempTimer)
          }, 10);
        }
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      },
      move(evt, originalEvent) {
        // console.log(evt, originalEvent.oldIndex);
      },
      end(evt) {
        // console.log(evt, "end");
        var that = this;
        var TzTagName = evt.item.id;
        var TzTag = TzTagName.substring(0, 1);
        var oldIndex = evt.oldIndex;
        // console.log(TzTagName, oldIndex, "oldIndex",TzTag,'TzTag',evt.to.parentElement.className,'evt.to.parentElement.className');

        // console.log(this.currentAnswer)
        this.isOldIndex = oldIndex;
        if (evt.to.parentElement.className == 'curBaseTr') {
          if ((evt.to.children[0].id == evt.item.id)) {
            this.beginMusicAndEnd("right");
            this[evt.to.children[0].id] = true;
            this.currentAnswer++;
          } else {
            this.beginMusicAndEnd("wrong");
          }
          if (this.currentAnswer >= this.answerCount) {
            this.beginMusicAndEnd("over");
            //烟花
            this.isSHow = "isSHow";
            this.timer1 = setInterval(this.yh, 60);
          }
        }
      }
    },
    mounted() {
      let that = this;
      that.flag = true;
      that.timerList[0] = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(that.timerList[0]);
      }, 1); //页面进来播放标题
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(that.timerList[1]);
      }, 8000); //播放完标题 2秒后停止播放
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../assets/css/index";
  @rem: 128rem;

  .sortable-chosen.sortable-ghost {
    display: none !important;
  }

  .isSHow {
    display: block;
    left: 50% !important;
  }

  .level2-main {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    .audio {
      width: 100%;
      height: 0.31rem;
      margin-bottom: 0.1rem;
      /* animation: fadeIn 1s 5.5s both; */
      /* opacity: 0; */
    }

    .div-bg {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url("../../../assets/images/commonImg/page5bg.png");
      background-size: 100% 100%;

      &>img {
        display: block;
        width: 100%;
        // max-height: 960px;
      }

      .animate-bg {
        .scale(328, 447);
        .pos-a(585, 0, 3);
        opacity: 0;
        animation: fadeIn 1s both;
      }

      .page2-content {
        position: absolute;
        width: 1476/@rem;
        height: 817/@rem;
        top: 197/@rem;
        left: 281/@rem;
        background: url("../../../assets/images/commonImg/photoKuang5.png") no-repeat center center;
        background-size: 100% 100%;
      }

      .content-main-left {
        position: absolute;
        top: 120/@rem;
        left: 40/@rem;
        padding-left: 20/@rem;
        z-index: 10;
        width: 455 / @rem;
        height: 633 / @rem;

        .sentenceBox {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height:533/@rem;
          padding-top:20/@rem;
          padding-bottom:10/@rem;
          .item {
            width: 100%;
            height: 45/@rem;
            display: block;
            background: url('../../../assets/images/level1/course9/day3-p2-sText.png') no-repeat;
            background-size: 399/@rem 413/@rem;
            cursor: pointer;

            &.item1 {
              background-position: 0 0/@rem;
              margin-left: 0;
            }

            &.item2 {
              background-position: 0 -60/@rem;
            }

            &.item3 {
              background-position: 0 -123/@rem;
            }

            &.item4 {
              background-position: 0 -184/@rem;
            }

            &.item5 {
              background-position: 0 -250/@rem;
            }

            &.item6 {
              background-position: 0 -313/@rem;
            }

            &.item7 {
              background-position: 0 -375/@rem;
            }

          }
        }



        .page5Play {
          position: absolute;
          bottom: 20/@rem;
          left: 20/@rem;
          width: 76/@rem;
          height: 80/@rem;
          cursor: pointer;
          background: url("../../../assets/images/commonImg/page5Play.png") no-repeat center center;
          background-size: 100%;
        }


        .one {
          width: 100%;
          text-align: center;
          display: block;
          margin-top: 50/@rem;
        }

        .two {
          width: 488/@rem;
        }
      }

      .content {
        position: absolute;
        width: 922/@rem;
        height: 632/@rem;
        top: 120/@rem;
        left: 520/@rem;


        .content-main {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          flex-direction: column;

          li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3.38rem;
            height: 2.35rem;

            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }

        .content-main-top,
        .content-main-bottom-base {
          position: absolute;
          padding: 30/@rem 0;
          left: 0/@rem;
          z-index: 10;
          width: 526 / @rem;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          flex: 1;
          justify-content: flex-start;
          align-items: center;

          .curBaseTr {
            img {
              position: absolute;
              width: 135/@rem;
              top: 0/@rem;
              right: 8/@rem;
              display: inline-block;
            }
          }

          li {
            float: left;
            position: relative;
            width: 212/@rem;
            height: 135/@rem;

            // margin-left: 30/@rem;
            img {
              width: 100%;
              display: block;
            }

            &:nth-child(odd) {
              margin-left: 20/@rem;
            }

            &:nth-child(even) {
              margin-left: 30/@rem;
            }
          }
        }

        .content-main-bottom {
          position: absolute;
          padding: 30/@rem 0 30/@rem 40/@rem;
          width: 368/@rem;
          height: 100%;
          right: 10/@rem;
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          justify-content: flex-start;

          &>span {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: center;
          }

          li {
            width: 140/@rem;
            height: 140/@rem;
            margin-right: 0.1rem;
            cursor: move;
          }
        }
      }
    }
  }
</style>
