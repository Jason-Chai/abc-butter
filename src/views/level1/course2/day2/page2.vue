<template>
  <div class="main">
    <div class="bg-div">
      <div class="animate-bg" :class="deerQuestion?{'animate-step':deerStep}:{'animate-award':deerStep}" ref="deer"
              :style="deerQuestion?{backgroundImage:'url('+require('../../../../assets/images/commonImg/anibg13-ani.png')+')'}:{backgroundImage:'url('+require('../../../../assets/images/commonImg/anibg13-ani-good.png')+')'}"></div>
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="3" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content" v-show="showQuestionItem===0">
          <div class="yes" @click="selectAnswer('yes',0)"></div>
          <div class="no" @click="selectAnswer('no',0)"></div>
          <div class="mainPic">
            <img src="../../../../assets/images/level1/course2/day2-p2-img1.png" alt>
          </div>
          <div class="playBtn" ref="btn1" @click="beginMusicAndEnd('btn1')"></div>
        </div>

        <div class="content" v-show="showQuestionItem===1">
          <div class="yes" @click="selectAnswer('yes',1)"></div>
          <div class="no" @click="selectAnswer('no',1)"></div>
          <div class="mainPic">
            <img src="../../../../assets/images/level1/course2/day2-p2-img2.png" alt>
          </div>
          <div class="playBtn" ref="btn2" @click="beginMusicAndEnd('btn2')"></div>
        </div>
         <div class="content" v-show="showQuestionItem===2">
          <div class="yes" @click="selectAnswer('yes',2)"></div>
          <div class="no" @click="selectAnswer('no',2)"></div>
          <div class="mainPic">
            <img src="../../../../assets/images/level1/course2/day2-p2-img3.png" alt>
          </div>
          <div class="playBtn" ref="btn3" @click="beginMusicAndEnd('btn3')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../../components/trueFalseMenu";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        timer1: null,
        step1: 0,
        isSHow: "",
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-02.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [ //右侧菜单
          {
            routerUrl: 'L1Course2Day2Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-torf-menu-sent.png')
          },
          {
            routerUrl: 'L1Course2Day2Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-torf-menu-torf.png')
          },
          {
            routerUrl: 'index?id=L1Course2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-torf-menu-back.png')
          }
        ],
        playtime: {
          time: 62,
          randem: Math.random(1000),
           stopTime: 4.4
        },
        router: "index?id=L1Course2",
        musicTimeList: {
          question: [{
              lev: "btn1",
              id: 1,
              answer: "no"
            },
            {
              lev: "btn2",
              id: 2,
              answer: "yes"
            },
            {
              lev: "btn3",
              id: 3,
              answer: "yes"
            }
          ],
          btn1: {
            beginTime: 68.1,
            endTime: 2
          },
          btn2: {
            beginTime: 71.6,
            endTime: 1.8
          },
          btn3: {
            beginTime: 75.2,
            endTime: 1.9
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
        timerList: [],
        showQuestionItem: 0,
        questionList: [{}],
        currQusAns: "", // 当前问题的正确答案
        deerStep: true,
        deerQuestion: true
      };
    },
    methods: {
      beginMusicAndEnd(item) {
        let that = this;
        that.clearTimer();
        this.playtime.randem = Math.random(1000);
         that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
        that.flag = true;
        that.timerList[3] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, stop);
      },
      selectAnswer(item, index) {
        let that = this;
        let endtime = this.musicTimeList.right.endTime * 1000;
        let lastendtime = this.musicTimeList.over.endTime * 1000;
        var nextIndex = index + 1;
        if (item == this.musicTimeList["question"][index].answer) {
          if (nextIndex == this.musicTimeList["question"].length) {
            that.deerQuestion = false;
            that.deerStep = true;
            this.beginMusicAndEnd("over");
          } else {
            setTimeout(function() {
              that.showQuestionItem = nextIndex;
            }, endtime);
            this.beginMusicAndEnd("right");
          }
        } else {
          this.beginMusicAndEnd("wrong");
        }
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      }
    },
    mounted() {
      let that = this;
      that.flag = true;
      that.timerList[0] = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(that.timerList[0]);
      }, 100);
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(that.timerList[1]);
      },4400);
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
  @import "../../../../assets/css/torf";
  @rem: 128rem;
</style>
