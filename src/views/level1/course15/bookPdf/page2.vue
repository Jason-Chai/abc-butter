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
          url: "./static/mp3/level1/level1-15-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course15bookPdfPage1', //手动页
          autoPageUrl: 'L1Course15bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course15/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course15',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime: 3.2
        },
        pageIndex: 0,
        pageCount: 25,
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
        router: "L1Course15Day1Page1",
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
