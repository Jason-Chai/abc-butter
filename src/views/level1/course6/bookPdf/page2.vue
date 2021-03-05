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
          url: "./static/mp3/level1/level1-06-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course6bookPdfPage1', //手动页
          autoPageUrl: 'L1Course6bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course6/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course6',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:2.8
        },
        pageIndex: 0,
        pageCount: 26,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 2.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-03.png'),
          beginTime: 3.1,
          endTime: 4.1,
          transText: 'Iris，我可以玩这辆小卡车吗？',
          quesText: 'What\'s the girl\'s name? What does the boy want to play with? ',
          quesbeginTime: 144.2,
          quesendTime: 5.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-05.png'),
          beginTime: 7.6,
          endTime: 3.8,
          transText: '“不！”Iris不愿意分享！',
          quesText: 'Does Iris want to share? ',
          quesbeginTime: 152.1,
          quesendTime: 2.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-07.png'),
          beginTime: 11.6,
          endTime: 4.7,
          transText: 'Iris，你能把红色蜡笔递给我用吗？',
          quesText: 'What\'s Iris doing? Can you see some crayons in the container? What does the other girl want? ',
          quesbeginTime: 156.1,
          quesendTime: 7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-09.png'),
          beginTime: 17,
          endTime: 4.5,
          transText: '“不！”Iris不愿意分享！',
          quesText: 'Does Iris want to share? Are the crayons still in the container? ',
          quesbeginTime: 166.9,
          quesendTime: 5.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-11.png'),
          beginTime: 22.5,
          endTime: 4.9,
          transText: 'Iris，我可以借读你的一本书吗？',
          quesText: 'What\'s Iris doing? Can you see some books on the table? What does the other girl want to do? ',
          quesbeginTime: 174,
          quesendTime: 7.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-13.png'),
          beginTime: 27.4,
          endTime: 4.5,
          transText: '“不！”Iris不愿意分享！',
          quesText: 'Does Iris want to share? Are the books still on the table? ',
          quesbeginTime: 183.6,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-15.png'),
          beginTime: 32.3,
          endTime: 5.1,
          transText: 'Iris，弟弟可以玩你的玩具吗？',
          quesText: 'Is Iris on a rug? Who\'s with her? Does her baby brother want to play with her toy? ',
          quesbeginTime: 190.4,
          quesendTime: 6.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-17.png'),
          beginTime: 37.8,
          endTime: 4.8,
          transText: '“不！”Iris不愿意分享！',
          quesText: 'Does Iris want to share? Is her baby brother crying? ',
          quesbeginTime: 199.2,
          quesendTime: 4.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-19.png'),
          beginTime: 43.4,
          endTime: 5,
          transText: 'Iris，可以给我吃一瓣橙子吗？',
          quesText: 'Look! Iris is eating an orange. How many pieces are there in the bowl? Who\'s talking to her? ',
          quesbeginTime: 205.5,
          quesendTime: 8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-21.png'),
          beginTime: 48.7,
          endTime: 4.8,
          transText: '“不！”Iris不愿意分享！',
          quesText: 'Does Iris want to share the orange with Dad?',
          quesbeginTime: 216,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-23.png'),
          beginTime: 54.1,
          endTime: 8.9,
          transText: 'Iris，快看，Toby烤了一盘巧克力饼干来分给大家吃！',
          quesText: 'Look at that plate.  What\'s in it? Are they for one person or all the children? ',
          quesbeginTime: 221.4,
          quesendTime: 6.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-25.png'),
          beginTime: 63.1,
          endTime: 4.3,
          transText: '哦，不！Iris从不分享！',
          quesText: 'Why doesn\'t Iris have a cookie? ',
          quesbeginTime: 230,
          quesendTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course6/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course6/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        router: "L1Course6Day1Page2",
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
