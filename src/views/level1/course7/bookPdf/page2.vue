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
          url: "./static/mp3/level1/level1-07-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course7bookPdfPage1', //手动页
          autoPageUrl: 'L1Course7bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course7/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course7',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:3
        },
        pageIndex: 0,
        pageCount: 26,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-start.png'),
          beginTime: 1.2,
          endTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-03.png'),
          beginTime: 6.1,
          endTime: 6.7,
          transText: '我喜欢和小伙伴们一起跳舞。我喜欢和小伙伴们一起玩耍。',
          quesText: 'Are the children dancing? Do you like to dance? Are the two girls playing with blocks? Do you love to play with blocks?',
          quesbeginTime: 145,
          quesendTime: 9.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-05.png'),
          beginTime: 14.3,
          endTime: 3.4,
          transText: '但是今天我什么也做不了。',
          quesText: 'Is the girl in bed? Why\'s she in bed? Can she play today? ',
          quesbeginTime: 156.4,
          quesendTime: 5.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-07.png'),
          beginTime: 20.1,
          endTime: 4.5,
          transText: '我只能远远望着我的那些书。我只能独自一个人玩儿。',
          quesText: 'What\'s she looking at? Is she playing alone or with other kids?',
          quesbeginTime: 163.6,
          quesendTime: 4.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-09.png'),
          beginTime: 26.2,
          endTime: 3.7,
          transText: '我感觉既孤单又难过。',
          quesText: 'Is she happy or sad? Do you feel sad when you\'re on your own?',
          quesbeginTime: 169.6,
          quesendTime: 5.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-11.png'),
          beginTime: 31.7,
          endTime: 4.1,
          transText: '但，那是什么？我好像看到了什么东西。',
          quesText: 'Can you see something at the window? What\'s that? ',
          quesbeginTime: 175.6,
          quesendTime: 4.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-13.png'),
          beginTime: 37.4,
          endTime: 3.5,
          transText: '那是一只漂亮的小鸟的翅膀！',
          quesText: 'Is the bird little or big? Is the bird pretty?',
          quesbeginTime: 180.7,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-15.png'),
          beginTime: 42.3,
          endTime: 3.5,
          transText: '现在我不再孤单！',
          quesText: 'Is the girl alone now? Is she happy?  ',
          quesbeginTime: 185.7,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-17.png'),
          beginTime: 47.7,
          endTime: 7.8,
          transText: '我想知道我还能看到什么，又有什么可以看到我！',
          quesText: 'Look at the window. What else can you see?',
          quesbeginTime: 190.4,
          quesendTime: 3.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-19.png'),
          beginTime: 56.9,
          endTime: 2,
          transText: '我向窗外探望……',
          quesText: 'What\'s the girl doing now? ',
          quesbeginTime: 195.1,
          quesendTime: 2.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-21.png'),
          beginTime: 60.6,
          endTime: 7.5,
          transText: '他们就在那里！动物朋友们，或远或近。',
          quesText: 'What can she see from the window? ',
          quesbeginTime: 199.4,
          quesendTime: 3.2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-23.png'),
          beginTime: 69.5,
          endTime: 3.9,
          transText: '高高的天空中鸟儿成群。',
          quesText: 'What animals are there in the sky?',
          quesbeginTime: 204,
          quesendTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-25.png'),
          beginTime: 74.8,
          endTime: 10.4,
          transText: '下面还有猫咪、壁虎、老鼠。我太幸运了，站在窗前便能看到这么多的动物伙伴。',
          quesText: 'What animals are there in the yard? ',
          quesbeginTime: 208.5,
          quesendTime: 3.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course7/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course7/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        router: "L1Course7Day1Page1",
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
