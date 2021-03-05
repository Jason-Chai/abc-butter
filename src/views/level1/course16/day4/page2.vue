<template>
  <div class="main">
    <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1">
    <div class="bg-div">
      <div class="animate-bg" :class="deerQuestion?{'animate-step':deerStep}:{'animate-award':deerStep}" ref="deer"
        :style="deerQuestion?{backgroundImage:'url('+require('../../../../assets/images/commonImg/deer.png')+')'}:{backgroundImage:'url('+require('../../../../assets/images/commonImg/deer-good.png')+')'}"></div>
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="3" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content" v-show="showQuestionItem===0">
          <div ref="word3" class="each-pic pic3" @click="selectAnswer('word3',0)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img3.png" alt>
          </div>
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',0)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img1.png" alt>
          </div>
          <div ref="word4" class="each-pic pic4" @click="selectAnswer('word4',0)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img4.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',0)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img2.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===1">
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',1)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img1.png" alt>
          </div>
          <div ref="word3" class="each-pic pic3" @click="selectAnswer('word3',1)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img3.png" alt>
          </div>
          <div ref="word4" class="each-pic pic4" @click="selectAnswer('word4',1)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img4.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',1)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img2.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===2">
          <div ref="word3" class="each-pic pic3" @click="selectAnswer('word3',2)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img3.png" alt>
          </div>
          <div ref="word4" class="each-pic pic4" @click="selectAnswer('word4',2)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img4.png" alt>
          </div>
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',2)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img1.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',2)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img2.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===3">
          <div ref="word4" class="each-pic pic4" @click="selectAnswer('word4',3)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img4.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',3)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img2.png" alt>
          </div>
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',3)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img1.png" alt>
          </div>
          <div ref="word3" class="each-pic pic3" @click="selectAnswer('word3',3)">
            <img src="../../../../assets/images/level1/course16/day4-p2-img3.png" alt>
          </div>
        </div>
        <div class="content-bottom">
          <div class="button-next" ref="btn1" v-show="showQuestionItem===0" @click="beginMusicAndEnd('btn1')">
            <img src="../../../../assets/images/commonImg/c1.png">
          </div>
          <div class="button-next" ref="btn2" v-show="showQuestionItem===1" @click="beginMusicAndEnd('btn2')">
            <img src="../../../../assets/images/commonImg/c2.png">
          </div>
          <div class="button-next" ref="btn3" v-show="showQuestionItem===2" @click="beginMusicAndEnd('btn3')">
            <img src="../../../../assets/images/commonImg/c3.png">
          </div>
          <div class="button-next" ref="btn4" v-show="showQuestionItem===3" @click="beginMusicAndEnd('btn4')">
            <img src="../../../../assets/images/commonImg/c4.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../../components/lookChooseMenu";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        // 烟花
        timer1: null,
        step1: 0,
        isSHow: "",
        curImg1: "./static/images/a/a_00000.png",
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-16.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [ //右侧菜单
          {
            routerUrl: 'L1Course16Day4Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookchoose-menu-voca.png')
          },
          {
            routerUrl: 'L1Course16Day4Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookchoose-menu-lookchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course16',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lookchoose-menu-back.png')
          }
        ],
        playtime: {
          time: 247.1,
          randem: Math.random(1000),
           stopTime: 6.8
        },
        router: "index?id=L1Course16",
        musicTimeList: {
          question: [{
              lev: "btn1",
              id: 1,
              answer: "word1"
            },
            {
              lev: "btn2",
              id: 2,
              answer: "word2"
            },
            {
              lev: "btn3",
              id: 3,
              answer: "word3"
            },
            {
              lev: "btn4",
              id: 4,
              answer: "word4"
            },
          ],
          btn1: {
            beginTime: 263,
            endTime: 2.8
          },
          btn2: {
            beginTime: 267.6,
            endTime: 2.4
          },
          btn3: {
            beginTime: 271.7,
            endTime: 2.2
          },
          btn4: {
            beginTime: 275.4,
            endTime: 3
          },
          right: {
            beginTime: 348.1,
            endTime: 1.8
          },
          wrong: {
            beginTime: 350.4,
            endTime: 1.8
          },
          over: {
            beginTime: 354.6,
            endTime: 5
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
        // console.log(item);
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
      }, 6800);
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
  @import "../../../../assets/css/lookChoose";
  @rem: 128rem;
</style>
