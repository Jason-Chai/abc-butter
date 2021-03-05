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
          url: "./static/mp3/level1/level1-15-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course15bookPdfPage1', //手动页
          autoPageUrl: 'L1Course15bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course15/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course15',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 156.5,
            endTime: 2.5,
          },
          birdSound1: {
            beginTime: 159.1,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 161.3,
            endTime: 2,
          },
          birdSound3: {
            beginTime: 163.3,
            endTime: 2,
          },
        },
        playtime: {
          time: 0,
          randem: Math.random(1000),
           stopTime: 3.2
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 25,
        changepageTime: {
          beginTime: 165.2,
          endTime: 1.6,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 3.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-02.png'),
          beginTime: 3.1,
          endTime: 8.1,
          transText: 'Lin在家里读书。嘎，嘎！那是什么声音？',
          quesText: 'Is that Lin? What is she doing? ',
          quesbeginTime: 79.9,
          quesendTime: 4.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-04.png'),
          beginTime: 11.2,
          endTime: 4.8,
          transText: '原来是小鹅Lenny！嘎，嘎！',
          quesText: 'Who makes the sound honk honk? Is Lenny a goose or a duck? ',
          quesbeginTime: 84.6,
          quesendTime: 8.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-06.png'),
          beginTime: 15.7,
          endTime: 5.8,
          transText: '喵，喵！那是什么声音？',
          quesText: 'Lin and Lenny hear a sound, meow meow. What\'s that sound? Is it Rat? ',
          quesbeginTime: 92.3,
          quesendTime: 9.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-08.png'),
          beginTime: 21.6,
          endTime: 6.3,
          transText: '原来是猫！喵，喵！',
          quesText: 'Who makes the sound meow meow?  ',
          quesbeginTime: 101.8,
          quesendTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-10.png'),
          beginTime: 28.1,
          endTime: 7,
          transText: '那是什么声音？呜呜啊啊！呜呜啊啊！ ',
          quesText: 'Here comes a sound out of the window. What\'s that sound? Is it Frog?',
          quesbeginTime: 105.8,
          quesendTime: 8.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-12.png'),
          beginTime: 35.3,
          endTime: 5.2,
          transText: '原来是猴子！呜呜呜啊啊！',
          quesText: 'Who makes the sound ooh ooh ah ah?  ',
          quesbeginTime: 114.4,
          quesendTime: 5.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-14.png'),
          beginTime: 40.9,
          endTime: 5.9,
          transText: '那是什么声音？吱吱，吱吱！',
          quesText: 'What\'s that sound under the floor? Is it from a dog? ',
          quesbeginTime: 120.2,
          quesendTime: 6.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-16.png'),
          beginTime: 46.8,
          endTime: 5.2,
          transText: '原来是老鼠！吱吱，吱吱！',
          quesText: 'Who makes the sound squeak squeak?',
          quesbeginTime: 126.6,
          quesendTime: 4.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-18.png'),
          beginTime: 52.4,
          endTime: 6,
          transText: '那是什么声音？哑哑，哑哑！',
          quesText: 'Here comes a sound from the chimney. Is it a big bad wolf? ',
          quesbeginTime: 131,
          quesendTime: 7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-20.png'),
          beginTime: 58.5,
          endTime: 6,
          transText: '原来是鸟儿！哑哑，哑哑！',
          quesText: 'Who makes the sound caw caw?  ',
          quesbeginTime: 138.1,
          quesendTime: 5.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-22.png'),
          beginTime: 64.7,
          endTime: 7,
          transText: '那是什么声音？隆隆隆！',
          quesText: 'A sound comes from behind the door. It sounds scary. What\'s that sound? ',
          quesbeginTime: 143.1,
          quesendTime: 7.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-24.png'),
          beginTime: 71.1,
          endTime: 3.5,
          transText: '原来是熊！',
          quesText: 'Who makes a growling sound? ',
          quesbeginTime: 151.3,
          quesendTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course15/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course15/pdf/pdf-end.png'),
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
