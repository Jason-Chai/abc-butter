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
          url: "./static/mp3/level1/level1-14-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course14bookPdfPage1', //手动页
          autoPageUrl: 'L1Course14bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course14/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course14',
        },
        playtime: {
          time: 3.7,
          randem: Math.random(1000),
           stopTime: 2.9
        },
        pageIndex: 0,
        pageCount: 33,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-start.png'),
          beginTime: 3.7,
          endTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-02.png'),
          beginTime: 8.4,
          endTime: 3,
          transText: '我的朋友饿了。',
          quesText: 'There is a boy and a girl. They are friends. Is the girl happy? ',
          quesbeginTime: 86,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-04.png'),
          beginTime: 13.3,
          endTime: 3,
          transText: '我将我的饼干与他分享。',
          quesText: 'When your friend is hungry, what will you do? ',
          quesbeginTime: 93.5,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-06.png'),
          beginTime: 17.8,
          endTime: 3.5,
          transText: '我的爷爷头发乱了。',
          quesText: 'Oh, what can you see on this page?',
          quesbeginTime: 98.1,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-08.png'),
          beginTime: 23,
          endTime: 3,
          transText: '我为他梳头。',
          quesText: 'When your grandpa\'s hair is messy, what can you do?',
          quesbeginTime: 103.1,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-10.png'),
          beginTime: 27.9,
          endTime: 3,
          transText: '我的奶奶口渴了。',
          quesText: 'The girl is looking out of the window. She sees grandma. Grandma is in the garden. Is it rainy or sunny?',
          quesbeginTime: 108.6,
          quesendTime: 10.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-12.png'),
          beginTime: 32.8,
          endTime: 3,
          transText: '我给她端来一杯水。',
          quesText: 'Do you often feel thirty on sunny days? ',
          quesbeginTime: 119.7,
          quesendTime: 3.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-14.png'),
          beginTime: 37.2,
          endTime: 4,
          transText: '我的妈妈把手指弄伤了。',
          quesText: 'There is a woman on this page. Do you know her? ',
          quesbeginTime: 124.1,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-16.png'),
          beginTime: 42.3,
          endTime: 3,
          transText: '我为她包扎。',
          quesText: 'When someone\'s finger gets hurt, what will you do? ',
          quesbeginTime: 129.7,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-18.png'),
          beginTime: 46.8,
          endTime: 3.5,
          transText: '我的爸爸累了。',
          quesText: 'This is the girl\'s father. What\'s he doing?',
          quesbeginTime: 135.2,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-20.png'),
          beginTime: 51.5,
          endTime: 3.5,
          transText: '我帮他打扫地板。',
          quesText: 'Now father is happy. Why? ',
          quesbeginTime: 141.1,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-22.png'),
          beginTime: 56.5,
          endTime: 3,
          transText: '我的弟弟感到冷了。',
          quesText: 'There is a baby. He is the girl\'s little brother. Do you have a brother or sister? Is the blanket on the baby or not?',
          quesbeginTime: 146.7,
          quesendTime: 12.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-24.png'),
          beginTime: 61.5,
          endTime: 3,
          transText: '我给他盖上毯子。',
          quesText: 'The baby will feel cold with no blanket. How can the girl help? ',
          quesbeginTime: 160.7,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-26.png'),
          beginTime: 66.2,
          endTime: 3,
          transText: '我的姐姐有些伤心。',
          quesText: 'Here is a big girl crying. Do you cry sometimes? ',
          quesbeginTime: 167.8,
          quesendTime: 5.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-27.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-28.png'),
          beginTime: 70.9,
          endTime: 3,
          transText: '我给她一个拥抱。',
          quesText: 'The little girl thinks that people need hugs when they cry. So she hugs her sister. Is her sister happy now?',
          quesbeginTime: 174.2,
          quesendTime: 8.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-29.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-30.png'),
          beginTime: 74.8,
          endTime: 4,
          transText: '我照顾身边的每一个人！',
          quesText: 'What a sweet girl! She takes care of everyone. Who are they?',
          quesbeginTime: 184,
          quesendTime: 6.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-31.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-32.png'),
          beginTime: 79,
          endTime: 1,
          transText: '',
          quesText: '',
          quesbeginTime: 79,
          quesendTime: 1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-33.png'),
          img2Src: require('../../../../assets/images/level1/course14/pdf/pdf-blank.png'),
          beginTime: 79,
          endTime: 1,
          transText: '',
          quesText: '',
          quesbeginTime: 79,
          quesendTime: 1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course14/pdf/pdf-end.png'),
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
