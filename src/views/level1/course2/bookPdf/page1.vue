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
          url: "./static/mp3/level1/level1-02-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course2bookPdfPage1', //手动页
          autoPageUrl: 'L1Course2bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course2/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course2',
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
            beginTime: 242.2,
            endTime: 2,
          },
          birdSound2: {
            beginTime: 244.4,
            endTime: 1.9,
          },
          birdSound3: {
            beginTime: 246.5,
            endTime: 1.9,
          },
        },
        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime: 2.9
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 22,
        changepageTime: {
          beginTime: 248.2,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-03.png'),
          beginTime: 3.2,
          endTime: 2,
          transText: '哎哟！等等！',
          quesText: 'Oh, we have a new friend. ',
          quesbeginTime: 144.1,
          quesendTime: 1.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-05.png'),
          beginTime: 7.1,
          endTime: 4.9,
          transText: '路灯变红了。红灯意味着停止。',
          quesText: 'The light\'s red. Can he go? Does red light mean stop or go?  ',
          quesbeginTime: 145.9,
          quesendTime: 6.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-07.png'),
          beginTime: 15.1,
          endTime: 2.2,
          transText: '绿灯意味着通行。',
          quesText: 'What color\'s the light now? Can he go now?',
          quesbeginTime: 154.8,
          quesendTime: 3.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-09.png'),
          beginTime: 20,
          endTime: 5,
          transText: '我们去公园吧。公园也是绿色的哦！',
          quesText: 'Where are they? Is the park green? ',
          quesbeginTime: 160.4,
          quesendTime: 3.8,

        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-11.png'),
          beginTime: 28.1,
          endTime: 4.3,
          transText: '蓝色的是水。美丽的蓝色湖水！',
          quesText: 'What\'s blue on this page? ',
          quesbeginTime: 165.9,
          quesendTime: 3.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-13.png'),
          beginTime: 35.1,
          endTime: 3.6,
          transText: '黄色也很棒！钱！',
          quesText: 'What color\'s the sun? What\'s on the grass? ',
          quesbeginTime: 170.6,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-15.png'),
          beginTime: 41.8,
          endTime: 5.1,
          transText: '粉色很美味。草莓冰激凌！好吃！',
          quesText: 'What are they buying? ',
          quesbeginTime: 177,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-17.png'),
          beginTime: 49.4,
          endTime: 5.4,
          transText: '哦，不！不要吃那个！有时美的颜色只能用来观赏！',
          quesText: 'Are the flowers pretty? Can we eat flowers?',
          quesbeginTime: 180.5,
          quesendTime: 3.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-19.png'),
          beginTime: 57.9,
          endTime: 4,
          transText: '整个世界充满了颜色！真是太美了！',
          quesText: 'What colors can you see on this page? Are they beautiful?',
          quesbeginTime: 187.3,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-21.png'),
          beginTime: 64.6,
          endTime: 5.2,
          transText: '天变黑了。该上床睡觉啦！晚安！',
          quesText: 'What color\'s the sky now? Is it morning or night?',
          quesbeginTime: 193.9,
          quesendTime: 5.1,
        },
         {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-blank.png'),
          beginTime: 72,
          endTime: 1.6,
          transText: '谢谢你！',
          quesText: 'Will the new friend stay with the boy? ',
          quesbeginTime: 201.1,
          quesendTime: 3.3,
        }, 
        {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-end.png'),
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
