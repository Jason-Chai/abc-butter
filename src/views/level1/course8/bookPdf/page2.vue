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
          url: "./static/mp3/level1/level1-08-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course8bookPdfPage1', //手动页
          autoPageUrl: 'L1Course8bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course8/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course8',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:2.9
        },
        pageIndex: 0,
        pageCount: 26,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 2.9,
        },{
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-blank.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-03.png'),
          beginTime: 5.6,
          endTime: 4.7,
          transText: '青蛙先生有一袋子信件！他必须把它们全部送出去。',
          quesText: 'Hi, Mr. Frog again. Will he deliver all the letters? ',
          quesbeginTime: 143.8,
          quesendTime: 4.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-05.png'),
          beginTime: 12.4,
          endTime: 4.2,
          transText: '青蛙先生来到树下。谁住在树上？',
          quesText: 'Where\'s the frog?  ',
          quesbeginTime: 150.3,
          quesendTime: 2.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-07.png'),
          beginTime: 19.9,
          endTime: 4,
          transText: '松鼠住在树上！你好，松鼠！',
          quesText: 'Who lives in the tree? ',
          quesbeginTime: 155.1,
          quesendTime: 1.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-09.png'),
          beginTime: 26.7,
          endTime: 5.7,
          transText: '青蛙先生来到洞穴前。洞里太黑了！谁住在洞穴里？',
          quesText: 'Where\'s the frog? Is it dark in the cave? ',
          quesbeginTime: 160.1,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-11.png'),
          beginTime: 35.6,
          endTime: 4.2,
          transText: '大熊住在洞穴里。你好，大熊！',
          quesText: 'Who lives in the cave? ',
          quesbeginTime: 165.5,
          quesendTime: 2.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-13.png'),
          beginTime: 43.3,
          endTime: 6.4,
          transText: '看！这里有一个地洞……两个地洞……三个地洞！谁住在地底下？',
          quesText: 'How many holes are there in the ground? ',
          quesbeginTime: 170.5,
          quesendTime: 2.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-15.png'),
          beginTime: 52.1,
          endTime: 3.8,
          transText: '兔子住在地底下。你好，兔子！',
          quesText: 'Who lives in the ground?  ',
          quesbeginTime: 175.1,
          quesendTime: 2.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-17.png'),
          beginTime: 58.2,
          endTime: 4.8,
          transText: '青蛙先生发现一个圆圆的、棕色的窝。谁住在窝里？',
          quesText: 'What does the frog find? ',
          quesbeginTime: 179.1,
          quesendTime: 2.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-19.png'),
          beginTime: 66.4,
          endTime: 3.5,
          transText: '猫头鹰住在窝里。你好，猫头鹰！',
          quesText: 'Who lives in the nest? ',
          quesbeginTime: 183.7,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-21.png'),
          beginTime: 73.2,
          endTime: 3.6,
          transText: '哎呀！什么东西在青蛙先生的脸上？',
          quesText: 'Can you guess what\'s on the frog\'s face? ',
          quesbeginTime: 187.1,
          quesendTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-23.png'),
          beginTime: 80.2,
          endTime: 4.5,
          transText: '那是蜘蛛在网上爬！你好，蜘蛛！',
          quesText: 'Who lives in the web? ',
          quesbeginTime: 191.2,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-25.png'),
          beginTime: 87.5,
          endTime: 37,
          transText: '就只剩下一封信件啦……谁住在池塘里？',
          quesText: 'How many letters are left? ',
          quesbeginTime: 194.8,
          quesendTime: 2.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course8/pdf/pdf-blank.png'),
          beginTime: 93.6,
          endTime: 3.8,
          transText: '青蛙先生就住在池塘里！再见，青蛙先生！',
          quesText: 'Where\'s the frog? Does Frog live there? ',
          quesbeginTime: 199.1,
          quesendTime: 3.6,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course8/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        router: "L1Course8Day1Page1",
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
