<template>
  <div class="div-bg">
    <div class="animate-bg" :class="deerQuestion?{'animate-step':deerStep}:{'animate-award':deerStep}" ref="deer"
      :style="deerQuestion?{backgroundImage:'url('+require('../../../assets/images/commonImg/anibg7-ani.png')+')'}:{backgroundImage:'url('+require('../../../assets/images/commonImg/anibg7-ani-good.png')+')'}"></div>
    <div class="audio">
      <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
        :titleCurr="7" :routerUrl="router" :menuList="menuList"></VueAudio>
    </div>
    <div class="page7-content">
      <div class="content contentUnscramble">
        <div class="contentUnscramble-left">
          <div class="pic-sentence" ref="sentenceMain" @click="beginMusicAndEnd('sentenceMain', 0)">
            <img src="../../../assets/images/level3/course7/day5-p3-juzi.png">
          </div>
        </div>
        <!-- 可拖拽选项 -->
        <vuedraggable class="contentUnscramble-right" @end="end" v-model="appleLetter" v-bind="option" :move="move">
          <transition-group>
            <li  class="item1" :key="'answer3'" :id="'answer3'">
              <img src="../../../assets/images/level3/course7/day5-p3-img3.png" alt>
            </li>
            <li  class="item2" :key="'answer2'" :id="'answer2'">
              <img src="../../../assets/images/level3/course7/day5-p3-img2.png" alt>
            </li>
            <li  class="item3" :key="'answer1'" :id="'answer1'">
              <img src="../../../assets/images/level3/course7/day5-p3-img1.png" alt>
            </li>
          </transition-group>
        </vuedraggable>

        <div class="contentUnscramble-center">
          <vuedraggable tag="li" class="curBaseTr"  v-bind="option1" :move="move">
            <transition-group>
              <!-- 正确答案1  -->
              <li class="move" :key="'answer1'" :id="'answer1'">
                <img v-if="answer1" src="../../../assets/images/level3/course7/day5-p3-img1.png" alt>
              </li>
            </transition-group>
          </vuedraggable>
          <vuedraggable tag="li" class="curBaseTr"  v-bind="option1" :move="move">
            <transition-group>
              <!-- 正确答案2  -->
              <li class="move" :key="'answer2'" :id="'answer2'">
                <img v-if="answer2" src="../../../assets/images/level3/course7/day5-p3-img2.png" alt>
              </li>
            </transition-group>
          </vuedraggable>
          <vuedraggable tag="li" class="curBaseTr"  v-bind="option1" :move="move">
            <transition-group>
              <!-- 正确答案3  -->
              <li class="move" :key="'answer3'" :id="'answer3'">
                <img v-if="answer3" src="../../../assets/images/level3/course7/day5-p3-img3.png" alt>
              </li>
            </transition-group>
          </vuedraggable>
        </div>
        <div class="juhao"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueAudio from "../../../components/unscrambleSentence";
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
        // curImg1: "./static/images/a/a_00000.png",
        value1: 50,
        audios: {
          url: "./static/mp3/level3/level3-07.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [
          {
            routerUrl: 'L3Course7Day5Page1',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-unsent-menu-sing.png')
          },
          {
            routerUrl: 'L3Course7Day5Page2',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-unsent-menu-sent.png')
          },
          {
            routerUrl: 'L3Course7Day5Page3',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-unsent-menu-unsent.png')
          },
          {
            routerUrl: 'index?id=L3Course7',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-unsent-menu-back.png')
          }
        ],
        playtime: {
          time: 140.9,
          randem: Math.random(1000),
          stopTime:7.2
        },
        router: "L3Course7Day5Page4",
        //拖拽
        answer1: false,
        answer2: false,
        answer3: false,
        answerCount: 3,
        currentAnswer: 0,
        appleLetter: [{
          flag: "true",
          name: "red"
        }],
        musicTimeList: {
          sentenceMain: {
            beginTime: 150.5,
            endTime: 1.8
          },
          right: {
            beginTime: 167.7,
            endTime: 1.5
          },
          wrong: {
            beginTime: 170.1,
            endTime: 1.9
          },
          over: {
            beginTime: 174.4,
            endTime: 4.4
          }
        },
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

        flag: false,
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
          let jiangeTime = 0;
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
              stop =
                stop +
                this.musicTimeList[this.playlist[i]].endTime * 1000 +
                jiangeTime;
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
        console.log(evt, "end");
        var that = this;
        var TzTagName = evt.item.id;
        var TzTag = TzTagName.substring(0, 1);
        var oldIndex = evt.oldIndex;
        that.isOldIndex = oldIndex;
        if (evt.to.parentElement.className == "curBaseTr") {
          if (evt.to.children[0].id == evt.item.id) {
            that.beginMusicAndEnd("right");
            evt.item.style.opacity='0';
            that[evt.to.children[0].id] = true;
            that.currentAnswer++;
          } else {
            that.beginMusicAndEnd("wrong");
          }
          if (that.currentAnswer >= that.answerCount) {
            that.deerQuestion = false;
            that.deerStep = true;
            that.beginMusicAndEnd("over");
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
      }, 7200); //播放完标题 2秒后停止播放
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
  @import "../../../assets/css/index";
  @import "../../../assets/css/lookPicture2";
  @rem: 128rem;
</style>
