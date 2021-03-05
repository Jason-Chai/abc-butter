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
          url: "./static/mp3/level1/level1-03-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course4bookPdfPage1', //手动页
          autoPageUrl: 'L1Course4bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course4/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course4',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:5.3
        },
        pageIndex: 0,
        pageCount: 26,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 5.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-03.png'),
          beginTime: 7.2,
          endTime: 5.3,
          transText: 'Eric，记得今天要穿上特别一点儿的衣服哦！',
          quesText: 'Do you know this boy\'s name? Who\'s talking to him? ',
          quesbeginTime: 142.7,
          quesendTime: 5.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-05.png'),
          beginTime: 13.7,
          endTime: 5.8,
          transText: '我们要去游泳吗？（泳裤）',
          quesText: 'Look at the picture. Is Eric still in bed? What\'s he wearing? ',
          quesbeginTime: 149.4,
          quesendTime: 5.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-07.png'),
          beginTime: 21.3,
          endTime: 5.5,
          transText: '不，我们今天不去游泳！',
          quesText: 'Are they going swimming today? ',
          quesbeginTime: 156.5,
          quesendTime: 2.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-09.png'),
          beginTime: 28.3,
          endTime: 5,
          transText: '下雨了吗？（雨衣）',
          quesText: 'What\'s Eric wearing in this picture? ',
          quesbeginTime: 160.9,
          quesendTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-11.png'),
          beginTime: 34.8,
          endTime: 4.5,
          transText: '不，今天没下雨！',
          quesText: 'Is it raining outside? ',
          quesbeginTime: 165.5,
          quesendTime: 2.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-13.png'),
          beginTime: 41.3,
          endTime: 7.3,
          transText: '我们要和女王共进下午茶吗？（套装）',
          quesText: 'What are they wearing in this picture? Who\'s that lady? ',
          quesbeginTime: 170.2,
          quesendTime: 4.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-15.png'),
          beginTime: 50,
          endTime: 6.7,
          transText: '不，我们今天不和女王共进下午茶！',
          quesText: 'Are they having tea with the Queen today? ',
          quesbeginTime: 176.3,
          quesendTime: 3.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-17.png'),
          beginTime: 58.6,
          endTime: 7.1,
          transText: '我们要去月球吗？（太空服）',
          quesText: 'Look at this page! What\'s he wearing? ',
          quesbeginTime: 182.2,
          quesendTime: 4.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-19.png'),
          beginTime: 67.1,
          endTime: 5,
          transText: '不，我们今天不去月球！',
          quesText: 'Are they going to the moon? ',
          quesbeginTime: 187.5,
          quesendTime: 2.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-21.png'),
          beginTime: 74.1,
          endTime: 7.3,
          transText: '（睡衣）我们今天要一整天都待在床上吗？',
          quesText: 'Where\'s Eric now? What\'s he wearing? ',
          quesbeginTime: 192.1,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-23.png'),
          beginTime: 83.7,
          endTime: 11.2,
          transText: '不，Eric，我们不要一整天待在床上。你今天要去参加一个化装派对！',
          quesText: 'Are they going to stay in bed all day? ',
          quesbeginTime: 197.5,
          quesendTime: 3.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-25.png'),
          beginTime: 96.4,
          endTime: 2.2,
          transText: '哦，太酷了！',
          quesText: 'Where are they going today? ',
          quesbeginTime: 203.3,
          quesendTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course4/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course4/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        router: "L1Course4Day1Page2",
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
