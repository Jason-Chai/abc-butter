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
          url: "./static/mp3/level1/level1-03-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course3bookPdfPage1', //手动页
          autoPageUrl: 'L1Course3bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course3/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course3',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 240.1,
            endTime: 2,
          },
          birdSound1: {
            beginTime: 242.4,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 244.6,
            endTime: 1.8,
          },
          birdSound3: {
            beginTime: 246.8,
            endTime: 1.4,
          },
        },
        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:2
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 26,
        changepageTime: {
          beginTime: 248.2,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-start.png'),
          beginTime: 0.7,
          endTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-03.png'),
          beginTime: 3.3,
          endTime: 4,
          transText: '今天，Molly想穿上她最喜欢的衣服。',
          quesText: 'Do you know this sheep\'s name?',
          quesbeginTime: 144.5,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-05.png'),
          beginTime: 8.3,
          endTime: 3,
          transText: 'Molly，你最喜欢的衣服是哪件？',
          quesText: 'Molly\'s at the dresser. What\'s she looking for? ',
          quesbeginTime: 148,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-07.png'),
          beginTime: 12.3,
          endTime: 5.7,
          transText: '条纹连衣裙，搭配圆点小礼帽！那些是你最喜欢的衣服吗？',
          quesText: 'What\'s Molly wearing now? Are those her favorite clothes?',
          quesbeginTime: 153.7,
          quesendTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-09.png'),
          beginTime: 18.6,
          endTime: 4.8,
          transText: '不是！Molly，你最喜欢的衣服是哪件？',
          quesText: 'Why\'s Molly at the dresser again? What\'s she looking for? ',
          quesbeginTime: 159.7,
          quesendTime: 4.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-11.png'),
          beginTime: 24.9,
          endTime: 6.7,
          transText: '粉红相间的T恤衫，搭配圆点短裤！那些是你最喜欢的衣服吗？',
          quesText: 'What\'s Molly wearing now? ',
          quesbeginTime: 166.1,
          quesendTime: 2.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-13.png'),
          beginTime: 32.1,
          endTime: 4.9,
          transText: '不是！Molly，你最喜欢的衣服是哪件？',
          quesText: 'Are those her favorite clothes?',
          quesbeginTime: 171.4,
          quesendTime: 2.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-15.png'),
          beginTime: 37.8,
          endTime: 4.6,
          transText: '他们不在五斗柜中……也不在衣橱里。',
          quesText: 'Are Molly\'s favorite clothes in the dresser? Are Molly\'s favorite clothes in the closet? ',
          quesbeginTime: 175.9,
          quesendTime: 5.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-17.png'),
          beginTime: 43.3,
          endTime: 2.5,
          transText: '他们在洗衣机里吗？',
          quesText: 'Are Molly\'s favorite clothes in the washing machine? ',
          quesbeginTime: 183.8,
          quesendTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-19.png'),
          beginTime: 46.7,
          endTime: 3.1,
          transText: '不是！不是！还不是！',
          quesText: 'Molly\'s checking all the clothes in the washing machine. What clothes can you see? ',
          quesbeginTime: 188.5,
          quesendTime: 5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-21.png'),
          beginTime: 50.7,
          endTime: 2.2,
          transText: '他们会在哪儿呢？',
          quesText: 'Does Molly find her favorite clothes? ',
          quesbeginTime: 195.6,
          quesendTime: 2.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-23.png'),
          beginTime: 53.6,
          endTime: 6,
          transText: '他们挂在晾衣绳上呢！Molly，你最喜欢的衣服是哪件？',
          quesText: 'Are Molly\'s favorite clothes on the washing line? ',
          quesbeginTime: 201,
          quesendTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-25.png'),
          beginTime: 60.4,
          endTime: 2.9,
          transText: '这些才是我最喜欢的衣服！',
          quesText: 'What are Molly\'s favorite clothes? ',
          quesbeginTime: 206.3,
          quesendTime: 2.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course3/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course3/pdf/pdf-end.png'),
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
