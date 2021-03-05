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
          url: "./static/mp3/level1/level1-12-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course12bookPdfPage1', //手动页
          autoPageUrl: 'L1Course12bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course12/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course12',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 188.5,
            endTime: 2.1,
          },
          birdSound1: {
            beginTime: 190.8,
            endTime: 2.1,
          },
          birdSound2: {
            beginTime: 193.2,
            endTime: 2.1,
          },
          birdSound3: {
            beginTime: 195.7,
            endTime: 2,
          },
        },
        playtime: {
          time: 0,
          randem: Math.random(1000),
           stopTime: 2.9
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 25,
        changepageTime: {
          beginTime: 196.9,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-02.png'),
          beginTime: 3.8,
          endTime: 6,
          transText: '我能端正坐。我能笔直站。',
          quesText: 'Ha! Here comes a girl. She is happy to do some actions. What can she do with her body?',
          quesbeginTime: 75.3,
          quesendTime: 11,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-04.png'),
          beginTime: 10.6,
          endTime: 3.1,
          transText: '我能挥挥我的手！',
          quesText: 'Now she is leaving. What do we do when we say goodbye?  ',
          quesbeginTime: 86.3,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-06.png'),
          beginTime: 16.4,
          endTime: 4.5,
          transText: '我能双脚蹦。我能单脚跳。',
          quesText: 'Oh! We know this boy. Let\'s say "Hi!" and ask "What can you do?" ',
          quesbeginTime: 93,
          quesendTime: 7.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-08.png'),
          beginTime: 21.8,
          endTime: 3.5,
          transText: '我能跑也能停！',
          quesText: 'He can jump and hop. He can run and stop. He did a good job. Who sees this? ',
          quesbeginTime: 101.6,
          quesendTime: 9.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-10.png'),
          beginTime: 27.4,
          endTime: 5,
          transText: '我能屈膝蹲。我能缓缓爬。',
          quesText: 'Another girl in a pink top. What can she do? What animals can crouch? What animals can crawl?',
          quesbeginTime: 112.3,
          quesendTime: 12,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-12.png'),
          beginTime: 33.2,
          endTime: 3.7,
          transText: '我能蜷缩成一团！',
          quesText: 'Oh, how funny! She can curl up in a ball. Let\'s have fun like this.',
          quesbeginTime: 125,
          quesendTime: 9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-14.png'),
          beginTime: 37.6,
          endTime: 5.3,
          transText: '我能弯弯腰。我能抖身体。',
          quesText: 'Look at this boy with black hair. What can he do? ',
          quesbeginTime: 134.6,
          quesendTime: 5.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-16.png'),
          beginTime: 43.7,
          endTime: 4.6,
          transText: '我能如蛇般滑行！',
          quesText: 'He is cool. He can slither like a snake. He is popular. Other kids like this. Who can do this?',
          quesbeginTime: 140.4,
          quesendTime: 13.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-18.png'),
          beginTime: 50,
          endTime: 4.6,
          transText: '我能点点头。我能踢踢球。',
          quesText: 'Let\'s meet a girl in a yellow T-shirt. What can she do?',
          quesbeginTime: 154.8,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-20.png'),
          beginTime: 55.6,
          endTime: 3.2,
          transText: '我能扔树枝！',
          quesText: 'What makes her special?  ',
          quesbeginTime: 161.5,
          quesendTime: 2.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-22.png'),
          beginTime: 60.1,
          endTime: 4.7,
          transText: '我能跪着。我能躺下。',
          quesText: 'There is a boy with blue eyes. What can he do? Is that cool? Maybe not. Let\'s see the next page. ',
          quesbeginTime: 164.9,
          quesendTime: 13.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-24.png'),
          beginTime: 65.9,
          endTime: 5.1,
          transText: '我们一起相拥告别！',
          quesText: 'He can hug everyone goodbye. That\'s not cool. That\'s sweet.',
          quesbeginTime: 179.7,
          quesendTime: 7.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course12/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course12/pdf/pdf-end.png'),
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
