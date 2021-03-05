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
          url: "./static/mp3/level1/level1-14-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course14bookPdfPage1', //手动页
          autoPageUrl: 'L1Course14bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course14/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course14',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 210.9,
            endTime: 2,
          },
          birdSound1: {
            beginTime: 213.3,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 215.5,
            endTime: 2,
          },
          birdSound3: {
            beginTime: 217.6,
            endTime: 1.6,
          },
        },
        playtime: {
          time: 3.7,
          randem: Math.random(1000),
           stopTime: 2.9
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 33,
        changepageTime: {
          beginTime: 219.2,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-start.png'),
          beginTime: 3.7,
          endTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-02.png'),
          beginTime: 8.4,
          endTime: 3,
          transText: '我的朋友饿了。',
          quesText: 'There is a boy and a girl. They are friends. Is the girl happy? ',
          quesbeginTime: 86,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-04.png'),
          beginTime: 13.3,
          endTime: 3,
          transText: '我将我的饼干与他分享。',
          quesText: 'When your friend is hungry, what will you do? ',
          quesbeginTime: 93.5,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-06.png'),
          beginTime: 17.8,
          endTime: 3.5,
          transText: '我的爷爷头发乱了。',
          quesText: 'Oh, what can you see on this page?',
          quesbeginTime: 98.1,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-08.png'),
          beginTime: 23,
          endTime: 3,
          transText: '我为他梳头。',
          quesText: 'When your grandpa\'s hair is messy, what can you do?',
          quesbeginTime: 103.1,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-10.png'),
          beginTime: 27.9,
          endTime: 3,
          transText: '我的奶奶口渴了。',
          quesText: 'The girl is looking out of the window. She sees grandma. Grandma is in the garden. Is it rainy or sunny?',
          quesbeginTime: 108.6,
          quesendTime: 10.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-12.png'),
          beginTime: 32.8,
          endTime: 3,
          transText: '我给她端来一杯水。',
          quesText: 'Do you often feel thirty on sunny days? ',
          quesbeginTime: 119.7,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-14.png'),
          beginTime: 37.2,
          endTime: 4,
          transText: '我的妈妈把手指弄伤了。',
          quesText: 'There is a woman on this page. Do you know her? ',
          quesbeginTime: 124.1,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-16.png'),
          beginTime: 42.3,
          endTime: 3,
          transText: '我为她包扎。',
          quesText: 'When someone\'s finger gets hurt, what will you do? ',
          quesbeginTime: 129.7,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-18.png'),
          beginTime: 46.8,
          endTime: 3.5,
          transText: '我的爸爸累了。',
          quesText: 'This is the girl\'s father. What is he doing?',
          quesbeginTime: 135.2,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-20.png'),
          beginTime: 51.5,
          endTime: 3.5,
          transText: '我帮他打扫地板。',
          quesText: 'Now father is happy. Why? ',
          quesbeginTime: 141.1,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-22.png'),
          beginTime: 56.5,
          endTime: 3,
          transText: '我的弟弟感到冷了。',
          quesText: 'There is a baby. He is the girl\'s little brother. Do you have a brother or sister? Is the blanket on the baby or not?',
          quesbeginTime: 146.7,
          quesendTime: 12.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-24.png'),
          beginTime: 61.5,
          endTime: 3,
          transText: '我给他盖上毯子。',
          quesText: 'The baby will feel cold with no blanket. How can the girl help? ',
          quesbeginTime: 160.7,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-26.png'),
          beginTime: 66.2,
          endTime: 3,
          transText: '我的姐姐有些伤心。',
          quesText: 'Here is a big girl crying. Do you cry sometimes? ',
          quesbeginTime: 167.8,
          quesendTime: 5.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-27.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-28.png'),
          beginTime: 70.9,
          endTime: 3,
          transText: '我给她一个拥抱。',
          quesText: 'The little girl thinks that people need hugs when they cry. So she hugs her sister. Is her sister happy now?',
          quesbeginTime: 174.2,
          quesendTime: 8.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-29.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-30.png'),
          beginTime: 74.8,
          endTime: 4,
          transText: '我照顾身边的每一个人！',
          quesText: 'What a sweet girl! She takes care of everyone. Who are they?',
          quesbeginTime: 184,
          quesendTime: 6.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-31.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-32.png'),
          beginTime: 79,
          endTime: 1,
          transText: '',
          quesText: '',
          quesbeginTime: 79,
          quesendTime: 1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-33.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-blank.png'),
          beginTime: 79,
          endTime: 1,
          transText: '',
          quesText: '',
          quesbeginTime: 79,
          quesendTime: 1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-end.png'),
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
