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
          url: "./static/mp3/level1/level1-01-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course1bookPdfPage1', //手动页
          autoPageUrl: 'L1Course1bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course1/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course1',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 239.8,
            endTime: 2,
          },
          birdSound1: {
            beginTime: 242.4,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 244.6,
            endTime: 1.6,
          },
          birdSound3: {
            beginTime: 246.6,
            endTime: 1.6,
          },
        },
        playtime: {
          time: 2,
          randem: Math.random(1000),
          stopTime:2.7
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 35,
        changepageTime: {
          beginTime: 248.3,
          endTime: 1.5,
        },
         pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-start.png'),
          beginTime: 0.3,
          endTime: 2.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-03.png'),
          beginTime: 4.5,
          endTime: 7.3,
          transText: 'Baz正在刷自己的那面墙。他要把他的那面墙刷成红色。',
          quesText: 'Can you see a dog? Is he painting the wall? What color is it?',
          quesbeginTime: 142.2,
          quesendTime: 6.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-05.png'),
          beginTime: 13,
          endTime: 6.4,
          transText: 'Annie正在刷自己的那面墙。她要把她的那面墙刷成黄色。',
          quesText: 'Can you see a cat? Is she painting the wall? What color is it?',
          quesbeginTime: 150.5,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-07.png'),
          beginTime: 21.4,
          endTime: 5.4,
          transText: '糟糕！他们正在刷同一面墙。',
          quesText: 'Are they painting the same wall?',
          quesbeginTime: 158.6,
          quesendTime: 3.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-09.png'),
          beginTime: 28.9,
          endTime: 11.4,
          transText: '这是我的墙！我要把我的墙刷成红色。这是我的墙！我要把我的墙刷成黄色。',
          quesText: 'Are they happy?',
          quesbeginTime: 163.1,
          quesendTime: 2.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-11.png'),
          beginTime: 41.2,
          endTime: 3.3,
          transText: '红色！黄色！',
          quesText: 'Are they fighting? Can you see a new color?',
          quesbeginTime: 167.4,
          quesendTime: 4.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-13.png'),
          beginTime: 45.9,
          endTime: 2.6,
          transText: '橙色！',
          quesText: 'What\'s the new color?  ',
          quesbeginTime: 173.7,
          quesendTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-15.png'),
          beginTime: 51.6,
          endTime: 4.4,
          transText: '把红色和黄色混合在一起就是橙色啦！',
          quesText: 'Are they happy now?',
          quesbeginTime: 178.4,
          quesendTime: 2.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-17.png'),
          beginTime: 59.6,
          endTime: 5.4,
          transText: '我们一起把墙刷成橙色吧。',
          quesText: 'Are they painting together? What color is the wall? ',
          quesbeginTime: 182.5,
          quesendTime: 5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-19.png'),
          beginTime: 67,
          endTime: 3.8,
          transText: '我们该把这扇门刷成什么颜色呢？',
          quesText: 'Are they going to paint the door? Can you guess what color?',
          quesbeginTime: 188.9,
          quesendTime: 4.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-21.png'),
          beginTime: 73.4,
          endTime: 3.9,
          transText: '你们在我的门上刷什么？',
          quesText: 'Who opens the door? Is the rabbit happy? ',
          quesbeginTime: 195.2,
          quesendTime: 4.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-23.png'),
          beginTime: 78.8,
          endTime: 7.6,
          transText: '不，不，不！这是我的门。我不想要一扇黄色的门！',
          quesText: 'What color\'s the door? Does the rabbit like it? ',
          quesbeginTime: 201.3,
          quesendTime: 4.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-25.png'),
          beginTime: 88.2,
          endTime: 3.5,
          transText: '我要把我的门刷成蓝色。',
          quesText: 'What color does the rabbit want to paint it? ',
          quesbeginTime: 206.8,
          quesendTime: 4.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-27.png'),
          beginTime: 93.5,
          endTime: 10.7,
          transText: '糟糕！那不是蓝色！那是绿色！把黄色和蓝色混合在一起就是绿色啦！',
          quesText: 'What\'s this new color? What colors make green?',
          quesbeginTime: 211.6,
          quesendTime: 5.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-28.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-29.png'),
          beginTime: 105.7,
          endTime: 10.3,
          transText: '糟糕！那不是蓝色！那是紫色！把红色和蓝色混合在一起就是紫色啦！',
          quesText: 'What\'s this new color? What colors make purple?',
          quesbeginTime: 218.1,
          quesendTime: 4.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-30.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-31.png'),
          beginTime: 117.5,
          endTime: 8.2,
          transText: '啊哈！这是蓝色。现在我们看到很多种颜色……',
          quesText: 'Can you see the color blue? ',
          quesbeginTime: 223.5,
          quesendTime: 3,
        },{
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-32.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-33.png'),
          beginTime: 128.7,
          endTime: 11,
          transText: '绿色！黄色！橙色！蓝色！紫色！红色！',
          quesText: 'How many colors can you see on this page?',
          quesbeginTime: 227.5,
          quesendTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-34.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
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
