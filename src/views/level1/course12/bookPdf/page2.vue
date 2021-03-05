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
          url: "./static/mp3/level1/level1-12-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course12bookPdfPage1', //手动页
          autoPageUrl: 'L1Course12bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course12/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course12',
        },

        playtime: {
          time: 0.6,
          randem: Math.random(1000),
           stopTime: 2.9
        },
        pageIndex: 0,
        pageCount: 25,
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
