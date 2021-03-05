<template>
  <div class="a_page_2">
    <div class="bg-div">
      <div class="audio">
        <VueAudio ref="audioss" @sendChildDatatrans="getChildDatatrans" @sendChildDataques="getChildDataques"
          :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList" :titleCurr="1"
          :templateData="templateData"></VueAudio>
      </div>
      <div class="canvasMain">
          <canvasDraw v-if="isPCFlag" :canvasWidths="canvasWidth" :canvasHeights="canvasHeight" :isClearCanvas="isClearCanvas" ></canvasDraw>
          <!-- <canvasDrawM v-if="!isPCFlag" :canvasWidths="canvasWidth" :canvasHeights="canvasHeight" :isClearCanvas="isClearCanvas" ></canvasDrawM> -->
      </div>
      <div ref="quesBox" v-if='!mainFlag' @click="quesAudio" v-show='templateData.quesFlag' class="page-ques-box" v-html="pageData[pageIndex].quesText">
      </div>
      <div class="page-menu">
        <div @click="changePage('prev')" class="prev-button">
        </div>
        <div @click="changePage('next')" class="next-button">
        </div>
      </div>
      <div class="icon-play-action" @click="playAudioAction"></div>
      <div class="bird-wrap">
        <div v-if='!mainFlag' @click="birdActive" class="bird-animation" :class="birdData.birdFlag ? 'bird'+birdData.animationRandom+' active' : 'bird'+birdData.animationRandom" ref="bird">
        </div>
      </div>
      <div v-if='mainFlag' class="page-content main" ref="pageContent">
        <img :src="pageData[pageIndex].img1Src" ref="rightPage" />
      </div>
      <div v-if='!mainFlag' class="page-content" ref="pageContent">
        <img :src="pageData[pageIndex].img1Src" :class="{'activePrev' : fanyePrev}" ref="leftPage" />
        <img :src="pageData[pageIndex].img2Src" :class="{'activeNext' : fanyeNext}" ref="rightPage" />
        <div v-show='templateData.transFlag && pageData[pageIndex].transText' class="page-trans-box" v-html="pageData[pageIndex].transText"></div>

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
          url: "./static/mp3/level1/level1-10-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course10bookPdfPage1', //手动页
          autoPageUrl: 'L1Course10bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course10/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course10',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 180.4,
            endTime: 3,
          },
          birdSound1: {
            beginTime: 182.5,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 184.9,
            endTime: 2,
          },
          birdSound3: {
            beginTime: 187.1,
            endTime: 2,
          },
        },
        playtime: {
          time: 0.6,
          randem: Math.random(1000),
           stopTime: 2.5
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 25,
        changepageTime: {
          beginTime: 189.0,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-start.png'),
          beginTime: 0.6,
          endTime: 2.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-02.png'),
          beginTime: 4.5,
          endTime: 3.9,
          transText: '和家人在一起，我们能做哪些有趣的事？',
          quesText: 'Are the children at home?',
          quesbeginTime: 63.8,
          quesendTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-04.png'),
          beginTime: 10.7,
          endTime: 3,
          transText: '我们一起品尝美食。',
          quesText: 'Look! The family is eating food together. Do you eat food with your family every day?',
          quesbeginTime: 66.9,
          quesendTime: 9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-06.png'),
          beginTime: 15.9,
          endTime: 3,
          transText: '我们一起徜徉书海。',
          quesText: 'Oh! They are reading a book. I love reading. Do you read books with your family? ',
          quesbeginTime: 76.4,
          quesendTime: 9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-08.png'),
          beginTime: 19.4,
          endTime: 2,
          transText: '我们一起清扫除尘！',
          quesText: 'They are cleaning the house. Mom is sweeping. Who helps Mom sweep? ',
          quesbeginTime: 86.2,
          quesendTime: 7.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-10.png'),
          beginTime: 24.6,
          endTime: 2.5,
          transText: '我们一起洗刷碗碟！',
          quesText: 'Dad is washing dishes. Who helps Dad wash the dishes? ',
          quesbeginTime: 94.9,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-12.png'),
          beginTime: 28.6,
          endTime: 2.5,
          transText: '我们一起骑车郊游。',
          quesText: 'It is a nice day. The family is having fun outside. They are riding bikes. Do you love to ride bikes?',
          quesbeginTime: 101.9,
          quesendTime: 11,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-14.png'),
          beginTime: 32.5,
          endTime: 3,
          transText: '我们一起乘车出行。',
          quesText: 'Are they riding bikes now? Do you love to go on the bus? ',
          quesbeginTime: 113.9,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-16.png'),
          beginTime: 37.1,
          endTime: 3.5,
          transText: '我们一起玩皮球。',
          quesText: 'The family is in the park now. Maybe they take the bus there. They are playing ball. Do you play ball with your family? ',
          quesbeginTime: 121.2,
          quesendTime: 12.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-18.png'),
          beginTime: 42.4,
          endTime: 3,
          transText: '我们一起放风筝。',
          quesText: 'It is windy now. Good to fly kites. I like the blue kite. What color kites do you like?',
          quesbeginTime: 134.4,
          quesendTime: 10.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-20.png'),
          beginTime: 46.4,
          endTime: 3,
          transText: '我们一起和狗狗嬉戏。',
          quesText: 'The family is back home. Brother is playing ball with the dog. Is there an animal at your home? ',
          quesbeginTime: 146,
          quesendTime: 10,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-22.png'),
          beginTime: 50.6,
          endTime: 3,
          transText: '我们一起和猫咪玩耍。',
          quesText: 'Look! There is a cat in the family. Sister is playing with the cat. Do you love to play with cats?',
          quesbeginTime: 157.2,
          quesendTime: 10.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-24.png'),
          beginTime: 54.9,
          endTime: 3,
          transText: '我们一起玩得很开心，其乐融融！',
          quesText: 'The family is having a picnic. They are having fun. Are you having fun with our class?',
          quesbeginTime: 169,
          quesendTime: 9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        flag: false,
        timerList: [],
        mainFlag: true,
        fanyePrev: false,
        fanyeNext: false,
      };
    },
    methods: {
      clearCanvas(){//切换页面清除画布
          this.isClearCanvas = false;
      },
      getChildDatatrans: function(data) {
        this.templateData.transFlag = data;
      },
      getChildDataques: function(data) {
        this.templateData.quesFlag = data;
      },
      RandomNumBoth: function(Min,Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range); //四舍五入
        return num;
      },
      birdRandom: function(){
        var x = this.RandomNumBoth(0,100)
        var y = this.RandomNumBoth(0,100)
        var type = this.RandomNumBoth(0,3)
        let that = this
        this.birdData.birdFlag = false
        setTimeout(function() {
          that.$refs.bird.style.left=x+'%'
          that.$refs.bird.style.top=y+'%'
          that.birdData.animationRandom = type
        }, 10);
      },
      birdActive: function(){
        if (!this.birdData.allowPlayFlag) {
          return
        } else {
          window.setTimeout(() => {
              that.birdData.allowPlayFlag = false
          }, 1);
          this.birdData.birdFlag = true
          this.birdData.allowPlayFlag = false
          var begintime = this.birdData['birdSound'+this.birdData.animationRandom].beginTime
          var endTime = this.birdData['birdSound'+this.birdData.animationRandom].endTime * 1000
          this.playAudio(begintime, endTime)
          let that = this;
          window.setTimeout(() => {
              that.birdData.allowPlayFlag = true
              this.birdData.birdFlag = false
          }, endTime);
        }
      },
      changeBirdFlag: function(delayTime) {
        let that = this;
        window.setTimeout(() => {
            that.birdData.allowPlayFlag = true
            // console.log(that.birdData.allowPlayFlag)
        }, delayTime);
      },
      changePage: function(type) {
        this.isClearCanvas = !this.isClearCanvas;
        if (this.templateData.transFlag) {
          this.templateData.transFlag = false
        }
        if (this.templateData.quesFlag) {
          this.templateData.quesFlag = false
        }
        if (type == 'next') {
          var pagesCount = Math.ceil(this.pageCount / 2) + 1
          if (this.pageIndex < pagesCount) {
            let that = this;
            if (!this.fanyeNext) {
              this.fanyeNext = true;
              if(this.pageIndex != 0) {
                this.playAudio(this.changepageTime.beginTime, this.changepageTime.endTime * 1000)
              }
              let tempTimer2 = window.setTimeout(() => {
                that.pageIndex++
                that.fanyeNext = false;
              }, 1000);
            }
          } else {
            this.pageIndex = pagesCount
          }
        } else if (type == 'prev') {
          if (this.pageIndex > 0) {
            let that = this;
            if (!this.fanyePrev) {
              this.fanyePrev = true;
              if(this.pageIndex != Math.ceil(this.pageCount / 2) + 1) {
                this.playAudio(this.changepageTime.beginTime, this.changepageTime.endTime * 1000)
              }
              let tempTimer2 = window.setTimeout(() => {
                this.pageIndex--
                that.fanyePrev = false;
              }, 1000);
            }
          } else {
            this.pageIndex = 0
          }
        }
      },
      playAudioAction: function() {
        var begintime = this.pageData[this.pageIndex].beginTime
        var endTime = this.pageData[this.pageIndex].endTime * 1000
        this.playAudio(begintime, endTime)
        let that = this;
        window.setTimeout(() => {
            that.birdData.allowPlayFlag = false
        }, 1);
        this.changeBirdFlag(endTime)
      },
      quesAudio: function() {
        var begintime = this.pageData[this.pageIndex].quesbeginTime
        var endTime = this.pageData[this.pageIndex].quesendTime * 1000
        this.playAudio(begintime, endTime)
        let that = this;
        window.setTimeout(() => {
            that.birdData.allowPlayFlag = false
        }, 1);
        this.changeBirdFlag(endTime)
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
        let that = this
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
        const Agents = [  "Android",  "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" ];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      },
    },
    watch: {
      "pageIndex": {
        handler(newVal, oldVal) {
          this.mainFlag = this.pageData[this.pageIndex].mainFlag
          // 自动播放音频
          this.birdRandom()
        }
      },
    },
    mounted() {
      this.canvasWidth = parseInt(window.getComputedStyle(this.$refs.pageContent).width).toString();
      this.canvasHeight = parseInt(window.getComputedStyle(this.$refs.pageContent).height).toString();
      let that  = this;
      window.setTimeout(() => {
        that.playAudio(that.pageData[that.pageIndex].beginTime, that.pageData[that.pageIndex].endTime * 1000)
      }, 1000);
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
