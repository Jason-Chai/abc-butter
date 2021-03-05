<template>
  <div class="a_page_2">
    <div class="bg-div">
      <div class="audio">
        <VueAudio ref="audioss" @sendChildDatatrans="getChildDatatrans" @sendChildDataques="getChildDataques"
          :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList" :titleCurr="1"
          :templateData="templateData"></VueAudio>
      </div>
      <div ref="quesBox" v-if='!mainFlag' @click="quesAudio" v-show='templateData.quesFlag' class="page-ques-box" v-html="pageData[pageIndex].quesText">
      </div>

      <div v-if='mainFlag' class="page-content main">
        <img :src="pageData[pageIndex].img1Src" />
      </div>
      <div v-if='!mainFlag' class="page-content">
        <img :src="pageData[pageIndex].img1Src" />
        <img :src="pageData[pageIndex].img2Src" />
        <div v-show='templateData.transFlag && pageData[pageIndex].transText' class="page-trans-box" v-html="pageData[pageIndex].transText"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // import VueAudio from "./VueAudio";
  import VueAudio from "../../../../components/bookPdfMenu";

  export default {
    name: "",
    components: {
      VueAudio,
    },
    data() {
      return {
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-10-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course10bookPdfPage1', //手动页
          autoPageUrl: 'L1Course10bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course10/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course10',
        },

        playtime: {
          time: 0.6,
          randem: Math.random(1000)
        },
        pageIndex: 0,
        pageCount: 25,
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
          quesText: 'The family is in the park now. Maybe they take the bus here. They are playing ball. Do you play ball with your family? ',
          quesbeginTime: 121.2,
          quesendTime: 12.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course10/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course10/pdf/pdf-18.png'),
          beginTime: 42.4,
          endTime: 3,
          transText: '我们一起放风筝。',
          quesText: 'It\'s windy now. Good to fly kites. I like the blue kite. What color kites do you like?',
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
      };
    },
    methods: {
      getChildDatatrans: function(data) {
        this.templateData.transFlag = data;
      },
      getChildDataques: function(data) {
        this.templateData.quesFlag = data;
      },
      changePage: function(type) {
        if (this.templateData.transFlag) {
          this.templateData.transFlag = false
        }
        if (this.templateData.quesFlag) {
          this.templateData.quesFlag = false
        }
        if (type == 'next') {
          var pagesCount = Math.ceil(this.pageCount / 2) + 1
          // console.log(this.pageIndex, pagesCount)
          if (this.pageIndex < pagesCount) {
            this.pageIndex++
          } else {
            this.pageIndex = pagesCount
          }
        } else if (type == 'prev') {
          if (this.pageIndex > 0) {
            this.pageIndex--
          } else {
            this.pageIndex = 0
          }
        }
        // console.log(this.pageIndex)
        this.mainFlag = this.pageData[this.pageIndex].mainFlag

        var begintime = this.pageData[this.pageIndex].beginTime
        var endTime = this.pageData[this.pageIndex].endTime * 1000
        this.playAudio(begintime, endTime)
      },
      quesAudio: function(e) {
        var begintime = this.pageData[this.pageIndex].quesbeginTime
        var endTime = this.pageData[this.pageIndex].quesendTime * 1000
        this.playAudio(begintime, endTime)
        // this.shineItem('quesBox')
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
      }
    },
    mounted() {
      // 解决不能从正常位置开始播放的问题
      let that = this
      window.setTimeout(() => {
        that.playAudio(that.pageData[that.pageIndex].beginTime, that.pageData[that.pageIndex].endTime * 1000)
      }, 1000);
      var pagesCount = Math.ceil(this.pageCount / 2) + 2
      var endTime = 1
      for (var i = that.pageIndex; i < pagesCount; i++) {
        (function(i) {
          endTime = endTime + 1000 + that.pageData[i].endTime * 1000
          that.timerList[0] = window.setTimeout(function() {
            that.changePage('next')
          }, endTime);
        })(i);
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
