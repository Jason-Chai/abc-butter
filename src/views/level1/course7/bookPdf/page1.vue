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
          url: "./static/mp3/level1/level1-07-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course7bookPdfPage1', //手动页
          autoPageUrl: 'L1Course7bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course7/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course7',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 240,
            endTime: 2,
          },
          birdSound1: {
            beginTime: 242.4,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 244.4,
            endTime: 1.8,
          },
          birdSound3: {
            beginTime: 246.5,
            endTime: 1.7,
          },
        },
        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:3
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 26,
        changepageTime: {
          beginTime: 248.3,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-start.png'),
          beginTime: 1.2,
          endTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-03.png'),
          beginTime: 6.1,
          endTime: 6.7,
          transText: '我喜欢和小伙伴们一起跳舞。我喜欢和小伙伴们一起玩耍。',
          quesText: 'Are the children dancing? Do you like to dance? Are the two girls playing with blocks? Do you love to play with blocks?',
          quesbeginTime: 145,
          quesendTime: 9.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-05.png'),
          beginTime: 14.3,
          endTime: 3.4,
          transText: '但是今天我什么也做不了。',
          quesText: 'Is the girl in bed? Why\'s she in bed? Can she play today? ',
          quesbeginTime: 156.4,
          quesendTime: 5.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-07.png'),
          beginTime: 20.1,
          endTime: 4.5,
          transText: '我只能远远望着我的那些书。我只能独自一个人玩儿。',
          quesText: 'What\'s she looking at? Is she playing alone or with other kids?',
          quesbeginTime: 163.6,
          quesendTime: 4.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-09.png'),
          beginTime: 26.2,
          endTime: 3.7,
          transText: '我感觉既孤单又难过。',
          quesText: 'Is she happy or sad? Do you feel sad when you\'re on your own?',
          quesbeginTime: 169.6,
          quesendTime: 5.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-11.png'),
          beginTime: 31.7,
          endTime: 4.1,
          transText: '但，那是什么？我好像看到了什么东西。',
          quesText: 'Can you see something at the window? What\'s that? ',
          quesbeginTime: 175.6,
          quesendTime: 4.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-13.png'),
          beginTime: 37.4,
          endTime: 3.5,
          transText: '那是一只漂亮的小鸟的翅膀！',
          quesText: 'Is the bird little or big? Is the bird pretty?',
          quesbeginTime: 180.7,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-15.png'),
          beginTime: 42.3,
          endTime: 3.5,
          transText: '现在我不再孤单！',
          quesText: 'Is the girl alone now? Is she happy?  ',
          quesbeginTime: 185.7,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-17.png'),
          beginTime: 47.7,
          endTime: 7.8,
          transText: '我想知道我还能看到什么，又有什么可以看到我！',
          quesText: 'Look at the window. What else can you see?',
          quesbeginTime: 190.4,
          quesendTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-19.png'),
          beginTime: 56.9,
          endTime: 2,
          transText: '我向窗外探望……',
          quesText: 'What\'s the girl doing now? ',
          quesbeginTime: 195.1,
          quesendTime: 2.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-21.png'),
          beginTime: 60.6,
          endTime: 7.5,
          transText: '他们就在那里！动物朋友们，或远或近。',
          quesText: 'What can she see from the window? ',
          quesbeginTime: 199.4,
          quesendTime: 3.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-23.png'),
          beginTime: 69.5,
          endTime: 3.9,
          transText: '高高的天空中鸟儿成群。',
          quesText: 'What animals are there in the sky?',
          quesbeginTime: 204,
          quesendTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-25.png'),
          beginTime: 74.8,
          endTime: 10.4,
          transText: '下面还有猫咪、壁虎、老鼠。我太幸运了，站在窗前便能看到这么多的动物伙伴。',
          quesText: 'What animals are there in the yard? ',
          quesbeginTime: 208.5,
          quesendTime: 3.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-end.png'),
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
