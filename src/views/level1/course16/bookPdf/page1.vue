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
          url: "./static/mp3/level1/level1-16-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isClearCanvas: false,
        isFillRect: false,
        isPCFlag: true,
        // 需要传递的模板数据
        templateData: {
          autoPlay: false, //自动开关
          manualPageUrl: 'L1Course16bookPdfPage1', //手动页
          autoPageUrl: 'L1Course16bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course16/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course16',
        },
        birdData: {
          animationRandom: 0,
          birdFlag: false,
          allowPlayFlag: true,
          birdSound0: {
            beginTime: 250.3,
            endTime: 2.2,
          },
          birdSound1: {
            beginTime: 252.5,
            endTime: 2.2,
          },
          birdSound2: {
            beginTime: 254.8,
            endTime: 2.2,
          },
          birdSound3: {
            beginTime: 256.9,
            endTime: 2.2,
          },
        },
        playtime: {
          time: 0,
          randem: Math.random(1000),
           stopTime: 3.9
        },
        canvasWidth:'',
        canvasHeight:'',
        pageIndex: 0,
        pageCount: 29,
        changepageTime: {
          beginTime: 258.6,
          endTime: 1.5,
        },
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-02.png'),
          beginTime: 3.9,
          endTime: 7.7,
          transText: '我能听到，却看不见。 闭上你的眼睛，和我一起倾听。',
          quesText: 'When you close your eyes, can you see? Can you hear? ',
          quesbeginTime: 111.3,
          quesendTime: 6.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-04.png'),
          beginTime: 11.6,
          endTime: 7.3,
          transText: '我喜欢听雨滴敲打屋顶的声音。滴答，啪嗒！',
          quesText: 'What sound can the girl hear? Is it the rain?  ',
          quesbeginTime: 118.3,
          quesendTime: 5.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-06.png'),
          beginTime: 18.6,
          endTime: 6.6,
          transText: '我喜欢听马蹄奔跑的声音。嘚嘚，嘚嘚！',
          quesText: 'What can you see on this page? What makes the sound clippety-clop? ',
          quesbeginTime: 124.9,
          quesendTime: 7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-08.png'),
          beginTime: 25,
          endTime: 7.5,
          transText: '我喜欢听爸爸敲响鼓儿的声音。咚咚嗒，咚咚嗒！',
          quesText: 'What makes the sound bam-boom? Who plays the drums?',
          quesbeginTime: 132.3,
          quesendTime: 7.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-10.png'),
          beginTime: 32.5,
          endTime: 6.8,
          transText: '我喜欢听妈妈哼歌的声音。嗯嗯嗯嗯……',
          quesText: 'Mom likes to hum when she takes a bath. What sound does she make? ',
          quesbeginTime: 139.8,
          quesendTime: 7.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-12.png'),
          beginTime: 39.1,
          endTime: 6.4,
          transText: '我喜欢听浪花翻滚的声音。哗啦啦，哗啦啦！',
          quesText: 'We can see them near the waves again. What makes the crashing sound?  ',
          quesbeginTime: 147.7,
          quesendTime: 7.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-14.png'),
          beginTime: 45.5,
          endTime: 8.5,
          transText: '我喜欢听爷爷醒来时发出的声音。啊啊啊！',
          quesText: 'Who is he? ',
          quesbeginTime: 155.2,
          quesendTime: 2.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-16.png'),
          beginTime: 54.1,
          endTime: 7,
          transText: '我喜欢听鸟儿歌唱的声音。叽叽喳，叽叽喳！',
          quesText: 'How many birds are on the tree? What is the sound of birds singing?',
          quesbeginTime: 157.7,
          quesendTime: 7.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-18.png'),
          beginTime: 61.1,
          endTime: 6.6,
          transText: '我喜欢听铃儿响起的声音。叮咚，叮咚！',
          quesText: 'The bells are ringing. Can you make the sound of a bell ringing? Do you love this sound? ',
          quesbeginTime: 165.7,
          quesendTime: 9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-20.png'),
          beginTime: 67.7,
          endTime: 7.1,
          transText: '我喜欢听嬉闹欢笑的声音。哈哈哈，哈哈哈！',
          quesText: 'Dad is joking with Brother. Is the little boy laughing? When you laugh, what sound do you make?',
          quesbeginTime: 175.1,
          quesendTime: 10,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-22.png'),
          beginTime: 74.8,
          endTime: 6.2,
          transText: '我喜欢听青蛙叫的声音。呱呱，呱呱！',
          quesText: 'There are two frogs on the leaf. They are singing. We call it frogs croaking. Can you make the sound of a frog croaking?',
          quesbeginTime: 185.6,
          quesendTime: 13.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-24.png'),
          beginTime: 80.9,
          endTime: 7.1,
          transText: '我喜欢听蛇发出的嘶嘶声。嘶嘶嘶！',
          quesText: 'Oh, what a long snake! Are you afraid of snakes? I am afraid of the sound. What is the sound of a snake hissing?',
          quesbeginTime: 198.8,
          quesendTime: 13.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-26.png'),
          beginTime: 88,
          endTime: 6.7,
          transText: '我喜欢听奶奶亲吻的声音。呒哇！',
          quesText: 'Grandma is kissing the girl. What is the sound of kissing? Can you make that sound?',
          quesbeginTime: 212.8,
          quesendTime: 9.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-27.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-28.png'),
          beginTime: 94.9,
          endTime: 8.8,
          transText: '我喜欢听音乐和歌声。我喜欢跟着旋律尽情地欢跳一整天！',
          quesText: 'What a happy family! Who is playing piano? Who is playing guitar? The girl. What is Father doing with Grandma? ',
          quesbeginTime: 222.6,
          quesendTime: 15,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-29.png'),
          img2Src: require('../../../../assets/images/level1/course16/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: 'Do you love to dance or sing? Can you do it all day long?',
          quesbeginTime: 237.7,
          quesendTime: 5.9,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course16/pdf/pdf-end.png'),
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
