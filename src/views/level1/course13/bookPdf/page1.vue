<template>
  <div class="a_page_2">
    <div class="bg-div">
      <div class="audio">
        <VueAudio ref="audioss" @sendChildDatatrans="getChildDatatrans" @sendChildDataques="getChildDataques"
          :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList" :titleCurr="1"
          :templateData="templateData"></VueAudio>
      </div>
      <div class="canvasMain">
        <canvasDraw v-if="isPCFlag" :canvasWidths="canvasWidth" :canvasHeights="canvasHeight" :isClearCanvas="isClearCanvas"></canvasDraw>
        <!-- <canvasDrawM v-if="!isPCFlag" :canvasWidths="canvasWidth" :canvasHeights="canvasHeight" :isClearCanvas="isClearCanvas"></canvasDrawM> -->
      </div>
      <div ref="quesBox" v-if="!mainFlag" @click="quesAudio" v-show="templateData.quesFlag" class="page-ques-box"
        v-html="pageData[pageIndex].quesText"></div>
      <div class="page-menu">
        <div @click="changePage('prev')" class="prev-button"></div>
        <div @click="changePage('next')" class="next-button"></div>
      </div>
      <div class="icon-play-action" @click="playAudioAction"></div>
      <div class="bird-wrap">
        <div v-if="!mainFlag" @click="birdActive" class="bird-animation" :class="birdData.birdFlag ? 'bird'+birdData.animationRandom+' active' : 'bird'+birdData.animationRandom"
          ref="bird"></div>
      </div>
      <div v-if="mainFlag" class="page-content main" ref="pageContent">
        <img :src="pageData[pageIndex].img1Src" ref="rightPage">
      </div>
      <div v-if="!mainFlag" class="page-content" ref="pageContent">
        <img :src="pageData[pageIndex].img1Src" :class="{'activePrev' : fanyePrev}" ref="leftPage">
        <img :src="pageData[pageIndex].img2Src" :class="{'activeNext' : fanyeNext}" ref="rightPage">
        <div v-show="templateData.transFlag && pageData[pageIndex].transText" class="page-trans-box" v-html="pageData[pageIndex].transText"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // import VueAudio from "./VueAudio";
  import VueAudio from "../../../../components/bookPdfMenu";
  import canvasDraw from "../../../../components/canvasDraw";
  import canvasDrawM from "../../../../components/canvasDrawM";

  export default {
    name: "",
    components: {
      VueAudio,
      canvasDraw,
      canvasDrawM
    },
    data() {
      return {
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-13-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: "L1course13bookPdfPage1", //手动页
          autoPageUrl: "L1course13bookPdfPage2", //自动页
          titleImg: require("../../../../assets/images/level1/course13/pdf/title.png"), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: "index?id=L1Course13"
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 151.1,
            endTime: 1.7
          },
          birdSound1: {
            beginTime: 153.4,
            endTime: 1.7
          },
          birdSound2: {
            beginTime: 155.6,
            endTime: 1.7
          },
          birdSound3: {
            beginTime: 157.7,
            endTime: 1.7
          }
        },
        playtime: {
          time: 0,
          randem: Math.random(1000),
           stopTime: 2.1
        },
        canvasWidth: "",
        canvasHeight: "",
        pageIndex: 0,
        pageCount: 21,
        changepageTime: {
          beginTime: 159.3,
          endTime: 1.5
        },
        pageData: [{
            mainFlag: true,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-start.png"),
            beginTime: 0,
            endTime: 2.1
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-01.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-02.png"),
            beginTime: 7.2,
            endTime: 2.5,
            transText: "我自己刷牙。",
            quesText: 'Look! He is brushing his teeth. He says, "I brush my teeth." Do you  brush your teeth every day?',
            quesbeginTime: 59.2,
            quesendTime: 10.7
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-03.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-04.png"),
            beginTime: 11.8,
            endTime: 2.5,
            transText: "我自己梳头。",
            quesText: "What is he doing now? ",
            quesbeginTime: 71,
            quesendTime: 1.8
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-05.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-06.png"),
            beginTime: 17.4,
            endTime: 2.7,
            transText: "我自己洗脸。",
            quesText: "Now the boy is at the sink. He is standing on a stool. What is he doing?",
            quesbeginTime: 74.2,
            quesendTime: 7
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-07.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-08.png"),
            beginTime: 23.2,
            endTime: 2.7,
            transText: "我自己锻炼。",
            quesText: "After brushing his teeth, combing his hair, and washing his face, he is ready to move his body. Let's stand up and move our bodies.",
            quesbeginTime: 83,
            quesendTime: 11.3
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-09.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-10.png"),
            beginTime: 28.8,
            endTime: 1.8,
            transText: "我稍作休息。",
            quesText: "Look at this boy. Is he still moving his body? Where is he? ",
            quesbeginTime: 96,
            quesendTime: 5.8
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-11.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-12.png"),
            beginTime: 32.6,
            endTime: 1.5,
            transText: "我自己吃饭。",
            quesText: "Look! He is eating. What is in his hands? ",
            quesbeginTime: 103,
            quesendTime: 5
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-13.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-14.png"),
            beginTime: 36.3,
            endTime: 1.3,
            transText: "我自己喝水。",
            quesText: "After he eats, he needs to drink. What is he drinking? ",
            quesbeginTime: 109.8,
            quesendTime: 4.9
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-15.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-16.png"),
            beginTime: 40.4,
            endTime: 3.2,
            transText: "我注意保暖。",
            quesText: "Look at him. He is wearing a hat, a scarf and mittens. Does he feel warm or cold? ",
            quesbeginTime: 116,
            quesendTime: 8.4
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-17.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-18.png"),
            beginTime: 46.6,
            endTime: 1.1,
            transText: "我自己睡觉",
            quesText: "After he plays outside for a while, he is tired. He goes to sleep. Does he sleep on his own? What about you? ",
            quesbeginTime: 126.3,
            quesendTime: 10.5
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-19.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-20.png"),
            beginTime: 50.5,
            endTime: 3.2,
            transText: "我照顾我自己！",
            quesText: 'Look! He is sitting on a mat thinking. Maybe he is thinking, "I take care of myself. I‘m a big boy."',
            quesbeginTime: 138.3,
            quesendTime: 11
          },
          {
            mainFlag: false,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-21.png"),
            img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-blank.png"),
            beginTime: 0.1,
            endTime: 0.1,
            transText: "",
            quesText: '',
            quesbeginTime: 0.1,
            quesendTime: 0.1,
          },
          {
            mainFlag: true,
            img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-end.png"),
            beginTime: 0.1,
            endTime: 0.1
          }
        ],
        flag: false,
        timerList: [],
        mainFlag: true,
        fanyePrev: false,
        fanyeNext: false
      };
    },
    methods: {
      clearCanvas() {
        //切换页面清除画布
        this.isClearCanvas = false;
      },
      getChildDatatrans: function(data) {
        this.templateData.transFlag = data;
      },
      getChildDataques: function(data) {
        this.templateData.quesFlag = data;
      },
      RandomNumBoth: function(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
      },
      birdRandom: function() {
        var x = this.RandomNumBoth(0, 100);
        var y = this.RandomNumBoth(0, 100);
        var type = this.RandomNumBoth(0, 3);
        let that = this;
        this.birdData.birdFlag = false;
        setTimeout(function() {
          that.$refs.bird.style.left = x + "%";
          that.$refs.bird.style.top = y + "%";
          that.birdData.animationRandom = type;
        }, 10);
      },
      birdActive: function() {
        if (!this.birdData.allowPlayFlag) {
          return;
        } else {
          window.setTimeout(() => {
            that.birdData.allowPlayFlag = false;
          }, 1);
          this.birdData.birdFlag = true;
          this.birdData.allowPlayFlag = false;
          var begintime = this.birdData[
            "birdSound" + this.birdData.animationRandom
          ].beginTime;
          var endTime =
            this.birdData["birdSound" + this.birdData.animationRandom].endTime *
            1000;
          this.playAudio(begintime, endTime);
          let that = this;
          window.setTimeout(() => {
            that.birdData.allowPlayFlag = true;
            this.birdData.birdFlag = false;
          }, endTime);
        }
      },
      changeBirdFlag: function(delayTime) {
        let that = this;
        window.setTimeout(() => {
          that.birdData.allowPlayFlag = true;
          // console.log(that.birdData.allowPlayFlag)
        }, delayTime);
      },
      changePage: function(type) {
        this.isClearCanvas = !this.isClearCanvas;
        if (this.templateData.transFlag) {
          this.templateData.transFlag = false;
        }
        if (this.templateData.quesFlag) {
          this.templateData.quesFlag = false;
        }
        if (type == "next") {
          var pagesCount = Math.ceil(this.pageCount / 2) + 1;
          if (this.pageIndex < pagesCount) {
            let that = this;
            if (!this.fanyeNext) {
              this.fanyeNext = true;
              if (this.pageIndex != 0) {
                this.playAudio(
                  this.changepageTime.beginTime,
                  this.changepageTime.endTime * 1000
                );
              }
              let tempTimer2 = window.setTimeout(() => {
                that.pageIndex++;
                that.fanyeNext = false;
              }, 1000);
            }
          } else {
            this.pageIndex = pagesCount;
          }
        } else if (type == "prev") {
          if (this.pageIndex > 0) {
            let that = this;
            if (!this.fanyePrev) {
              this.fanyePrev = true;
              if (this.pageIndex != Math.ceil(this.pageCount / 2) + 1) {
                this.playAudio(
                  this.changepageTime.beginTime,
                  this.changepageTime.endTime * 1000
                );
              }
              let tempTimer2 = window.setTimeout(() => {
                this.pageIndex--;
                that.fanyePrev = false;
              }, 1000);
            }
          } else {
            this.pageIndex = 0;
          }
        }
      },
      playAudioAction: function() {
        var begintime = this.pageData[this.pageIndex].beginTime;
        var endTime = this.pageData[this.pageIndex].endTime * 1000;
        this.playAudio(begintime, endTime);
        let that = this;
        window.setTimeout(() => {
          that.birdData.allowPlayFlag = false;
        }, 1);
        this.changeBirdFlag(endTime);
      },
      quesAudio: function() {
        var begintime = this.pageData[this.pageIndex].quesbeginTime;
        var endTime = this.pageData[this.pageIndex].quesendTime * 1000;
        this.playAudio(begintime, endTime);
        let that = this;
        window.setTimeout(() => {
          that.birdData.allowPlayFlag = false;
        }, 1);
        this.changeBirdFlag(endTime);
      },
      // 播放页面音频
      playAudio: function(begin, end) {
        let that = this;
        that.clearTimer();
        this.playtime.randem = Math.random(1000);
        this.playtime.time = begin;
        that.timerList[0] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, end);
      },
      // 闪烁元素
      shineItem: function(item) {
        let that = this;
        that.$refs[item].style.animation = "";
        let tempTimer = window.setTimeout(() => {
          that.$refs[item].style.animation = "flash 1s 0s both";
          window.clearTimeout(tempTimer);
        }, 10);
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      },
      isPc() {
        const userAgentInfo = navigator.userAgent;
        const Agents = [
          "Android",
          "iPhone",
          "SymbianOS",
          "Windows Phone",
          "iPad",
          "iPod"
        ];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    },
    watch: {
      pageIndex: {
        handler(newVal, oldVal) {
          this.mainFlag = this.pageData[this.pageIndex].mainFlag;
          // 自动播放音频
          this.birdRandom();
        }
      }
    },
    mounted() {
      this.canvasWidth = parseInt(
        window.getComputedStyle(this.$refs.pageContent).width
      ).toString();
      this.canvasHeight = parseInt(
        window.getComputedStyle(this.$refs.pageContent).height
      ).toString();
      this.playAudio(
        this.pageData[this.pageIndex].beginTime,
        this.pageData[this.pageIndex].endTime * 1000
      );
      if (this.isPc()) {
        this.isPCFlag = true;
      } else {
        this.isPCFlag = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/pdf";
  @rem: 128rem;

  .a_page_2 {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    .bg-div {
      width: 100%;
      height: 100%;
    }
  }
</style>
