<template>
  <div class="level2-main">
    <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1">
    <div class="div-bg">
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="5" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>
      <div class="animate-bg" :class="deerQuestion?{'animate-step':deerStep}:{'animate-award':deerStep}" ref="deer"
        :style="deerQuestion?{backgroundImage:'url('+require('../../../../assets/images/commonImg/astronaut.png')+')'}:{backgroundImage:'url('+require('../../../../assets/images/commonImg/astronaut-good.png')+')'}"></div>
      <div class="page2-content">
        <div class="content-main-left">
          <span class="sentenceBox">
            <span @click="beginMusicAndEnd('text1',true,'ani')" class="item item1 active" ref="text1"></span>
            <span @click="beginMusicAndEnd('text2',true,'ani')" class="item item2" ref="text2"></span>
            <span @click="beginMusicAndEnd('text3',true,'ani')" class="item item3" ref="text3"></span>
            <span @click="beginMusicAndEnd('text4',true,'ani')" class="item item4" ref="text4"></span>
            <span @click="beginMusicAndEnd('text5',true,'ani')" class="item item5" ref="text5"></span>
            <span @click="beginMusicAndEnd('text6',true,'ani')" class="item item6" ref="text6"></span>
          </span>
          <div @click="beginMusicList('playlist')" class="page5Play"></div>
        </div>
        <div class="content">
          <div class="content-main">
            <div class="content-main-top">
              <li>
                <img src="../../../../assets/images/commonImg/order-num-1.png" alt>
              </li>
              <li>
                <img src="../../../../assets/images/commonImg/order-num-2.png" alt>
              </li>
              <li>
                <img src="../../../../assets/images/commonImg/order-num-3.png" alt>
              </li>
              <li>
                <img src="../../../../assets/images/commonImg/order-num-4.png" alt>
              </li>
               <li>
                <img src="../../../../assets/images/commonImg/order-num-5.png" alt>
              </li>
               <li>
                <img src="../../../../assets/images/commonImg/order-num-6.png" alt>
              </li>
            </div>

            <div class="content-main-bottom-base">
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter1" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer1'" :id="'answer1'">
                    <!-- 正确答案1  -->
                    <img v-if="answer1" src="../../../../assets/images/level1/course5/day4-p3-img1.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter2" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer2'" :id="'answer2'">
                    <!-- 正确答案2  -->
                    <img v-if="answer2" src="../../../../assets/images/level1/course5/day4-p3-img2.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter3" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer3'" :id="'answer3'">
                    <!-- 正确答案3  -->
                    <img v-if="answer3" src="../../../../assets/images/level1/course5/day4-p3-img3.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter4" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer4'" :id="'answer4'">
                    <!-- 正确答案4  -->
                    <img v-if="answer4" src="../../../../assets/images/level1/course5/day4-p3-img4.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter5" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer5'" :id="'answer5'">
                    <!-- 正确答案5  -->
                    <img v-if="answer5" src="../../../../assets/images/level1/course5/day4-p3-img5.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter6" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer6'" :id="'answer6'">
                    <!-- 正确答案6  -->
                    <img v-if="answer6" src="../../../../assets/images/level1/course5/day4-p3-img6.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
            </div>

            <vuedraggable class="content-main-bottom" @end="end" v-model="appleLetter" v-bind="option" :move="move">
              <transition-group>
                <li v-if="!answer1" :key="'answer1'" :id="'answer1'">
                  <img src="../../../../assets/images/level1/course5/day4-p3-img1.png" alt>
                </li>
                <li v-if="!answer3" :key="'answer3'" :id="'answer3'">
                  <img src="../../../../assets/images/level1/course5/day4-p3-img3.png" alt>
                </li>
                <li v-if="!answer4" :key="'answer4'" :id="'answer4'">
                  <img src="../../../../assets/images/level1/course5/day4-p3-img4.png" alt>
                </li>
                <li v-if="!answer5" :key="'answer5'" :id="'answer5'">
                  <img src="../../../../assets/images/level1/course5/day4-p3-img5.png" alt>
                </li>
                <li v-if="!answer2" :key="'answer2'" :id="'answer2'">
                  <img src="../../../../assets/images/level1/course5/day4-p3-img2.png" alt>
                </li>
                <li v-if="!answer6" :key="'answer6'" :id="'answer6'">
                  <img src="../../../../assets/images/level1/course5/day4-p3-img6.png" alt>
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
  import VueAudio from "../../../../components/lookOrderMenu";
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
        isDisabled: true,
        curImg1: "./static/images/a/a_00000.png",

        //拖拽
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
        answer5: false,
        answer6: false,
        answerCount: 6,
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
        appleLetter5: [{
          flag: "true",
          name: "red"
        }],
        appleLetter6: [{
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
          url: "./static/mp3/level1/level1-05.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course5Day4Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookorder-menu-voca.png')
          },
          {
            routerUrl: 'L1Course5Day4Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookorder-menu-sent.png')
          },
          {
            routerUrl: 'L1Course5Day4Page3',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookorder-menu-lookorder.png')
          },
          {
            routerUrl: 'index?id=L1Course5',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookorder-menu-back.png')
          }
        ],
        playtime: {
          time: 112.4,
          randem: Math.random(1000),
           stopTime:5.4
        },
        router: "/index?id=L1Course5",
        playlist: ["text1", "text2", "text3", "text4","text5", "text6",],
        musicTimeList: {
          text1: {
            beginTime: 119,
            endTime: 1.4
          },
          text2: {
            beginTime: 122.1,
            endTime: 2.8
          },
          text3: {
            beginTime: 125.7,
            endTime: 1.4
          },
          text4: {
            beginTime: 128.5,
            endTime: 1.5
          },
          text5: {
            beginTime: 131,
            endTime: 1.2
          },
          text6: {
            beginTime: 133.2,
            endTime: 3
          },
          right: {
            beginTime: 199.9,
            endTime: 1.8
          },
          wrong: {
            beginTime: 202.2,
            endTime: 1.9
          },
          over: {
            beginTime: 206.5,
            endTime: 4
          }
        },
        flag: false,
        flag2: true,
        timerList: [],
        tempTimer: [],
        tempTimer2: null,
        deerStep: true,
        deerQuestion: true
      };
    },
    methods: {
      beginMusicList(item) {
        let that = this;
        if (that.isDisabled) {
          let stop = 0;
          that.flag2 = true;
          that.cleartempTimer();
          if (that.flag) {
            for (let i = 0; i < that.playlist.length; i++) {
              (function(i) {
                that.tempTimer2 = window.setTimeout(function() {
                  if (that.flag2) {
                    that.beginMusicAndEnd(that.playlist[i], false, "ani");
                  }
                }, stop);
              })(i);
              that.tempTimer.push(that.tempTimer2);
              stop = stop + this.musicTimeList[this.playlist[i]].endTime * 1000;
            }
          } else {
            return;
          }
        }
      },
      beginMusicAndEnd(item, breakFlag, ani) {
        let that = this;
        if (breakFlag) {
          that.flag2 = false;
        }
        that.clearTimer();
        this.playtime.randem = Math.random(1000);
         that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        that.timerList[4] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
          that.cleartempTimer();
        }, stop);
        if (ani) {
          that.$refs[item].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs[item].style.animation = "fadeIn 1s 0s both";
            window.clearTimeout(tempTimer);
          }, 10);
        }
      },
      cleartempTimer() {
        for (let i = 0; i <= this.tempTimer.length; i++) {
          window.clearTimeout(this.tempTimer[i]);
        }
        this.tempTimer.splice(0, this.tempTimer.length);
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
        if (evt.to.parentElement.className == "curBaseTr") {
          if (evt.to.children[0].id == evt.item.id) {
            this.beginMusicAndEnd("right");
            this[evt.to.children[0].id] = true;
            this.currentAnswer++;
          } else {
            this.beginMusicAndEnd("wrong");
          }
          if (this.currentAnswer >= this.answerCount) {
            that.deerQuestion = false;
            that.deerStep = true;
            this.beginMusicAndEnd("over");
            //烟花
            // this.isSHow = "isSHow";
            // this.timer1 = setInterval(this.yh, 60);
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
        that.isDisabled = true;
        clearTimeout(that.timerList[1]);
      }, 5400); //播放完标题 2秒后停止播放
      that.$refs.deer.addEventListener("animationend", function() {
        if (that.deerQuestion) {
          that.deerStep = false;
          let deerTime = window.setTimeout(() => {
            that.deerStep = true;
            window.clearTimeout(deerTime);
          }, 5000);
        }
      });
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/listenOrder";

  @rem: 128rem;
  .page2-content{
      // width: 1536/@rem !important;
  }
  .content-main-left {
    .item {
        width: 100%;
        height: 40 / @rem;
        display: block;
        background: url("../../../../assets/images/level1/course5/day4-p3-sText.png") no-repeat;
        background-size: 431/@rem  223 / @rem;
        cursor: pointer;

        // &.item1 {
        //   background-position: 0 0 / @rem;
        //   margin-left: 0;
        // }

        // &.item2 {
        //   background-position: 0 -100 / @rem;
        // }

        // &.item3 {
        //   background-position: 0 -230 / @rem;
        // }

        // &.item4 {
        //   background-position: 0 -184 / @rem;
        // }

        // &.item5 {
        //   background-position: 0 -250 / @rem;
        // }

        // &.item6 {
        //   background-position: 0 -313 / @rem;
        // }
        // 循环输出歌词样式
        .loop(@counter) when (@counter > 0) {
            .loop((@counter - 1));
            &.item@{counter} {
                background-position-y:-(-40+40*@counter)/@rem;
            }
        }
        .loop(6);
      }
    .one {
      width: 100%;
      text-align: center;
      display: block;
      margin-top: 50 / @rem;
    }

    .two {
      width: 488 / @rem;
    }
  }
</style>
