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
          url: "./static/mp3/level1/level1-01-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course1bookPdfPage1', //手动页
          autoPageUrl: 'L1Course1bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course1/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course1',
        },
        playtime: {
          time: 2,
          randem: Math.random(1000),
          stopTime:2.7
        },
        pageIndex: 0,
        pageCount: 34,
         pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-start.png'),
          beginTime: 0.3,
          endTime: 2.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-02.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-03.png'),
          beginTime: 4.5,
          endTime: 7.3,
          transText: 'Baz正在刷自己的那面墙。他要把他的那面墙刷成红色。',
          quesText: 'Can you see a dog? Is he painting the wall? What color is it?',
          quesbeginTime: 142.2,
          quesendTime: 6.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-05.png'),
          beginTime: 13,
          endTime: 6.4,
          transText: 'Annie正在刷自己的那面墙。她要把她的那面墙刷成黄色。',
          quesText: 'Can you see a cat? Is she painting the wall? What color is it?',
          quesbeginTime: 150.5,
          quesendTime: 6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-07.png'),
          beginTime: 21.4,
          endTime: 5.4,
          transText: '糟糕！他们正在刷同一面墙。',
          quesText: 'Are they painting the same wall?',
          quesbeginTime: 158.6,
          quesendTime: 3.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-09.png'),
          beginTime: 28.9,
          endTime: 11.4,
          transText: '这是我的墙！我要把我的墙刷成红色。这是我的墙！我要把我的墙刷成黄色。',
          quesText: 'Are they happy?',
          quesbeginTime: 163.1,
          quesendTime: 2.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-11.png'),
          beginTime: 41.2,
          endTime: 3.3,
          transText: '红色！黄色！',
          quesText: 'Are they fighting? Can you see a new color?',
          quesbeginTime: 167.4,
          quesendTime: 4.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-13.png'),
          beginTime: 45.9,
          endTime: 2.6,
          transText: '橙色！',
          quesText: 'What\'s the new color?  ',
          quesbeginTime: 173.7,
          quesendTime: 3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-15.png'),
          beginTime: 51.6,
          endTime: 4.4,
          transText: '把红色和黄色混合在一起就是橙色啦！',
          quesText: 'Are they happy now?',
          quesbeginTime: 178.4,
          quesendTime: 2.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-17.png'),
          beginTime: 59.6,
          endTime: 5.4,
          transText: '我们一起把墙刷成橙色吧。',
          quesText: 'Are they painting together? What color is the wall? ',
          quesbeginTime: 182.5,
          quesendTime: 5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-19.png'),
          beginTime: 67,
          endTime: 3.8,
          transText: '我们该把这扇门刷成什么颜色呢？',
          quesText: 'Are they going to paint the door? Can you guess what color?',
          quesbeginTime: 188.9,
          quesendTime: 4.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-21.png'),
          beginTime: 73.4,
          endTime: 3.9,
          transText: '你们在我的门上刷什么？',
          quesText: 'Who opens the door? Is the rabbit happy? ',
          quesbeginTime: 195.2,
          quesendTime: 4.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-23.png'),
          beginTime: 78.8,
          endTime: 7.6,
          transText: '不，不，不！这是我的门。我不想要一扇黄色的门！',
          quesText: 'What color\'s the door? Does the rabbit like it? ',
          quesbeginTime: 201.3,
          quesendTime: 4.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-24.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-25.png'),
          beginTime: 88.2,
          endTime: 3.5,
          transText: '我要把我的门刷成蓝色。',
          quesText: 'What color does the rabbit want to paint it? ',
          quesbeginTime: 206.8,
          quesendTime: 4.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-26.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-27.png'),
          beginTime: 93.5,
          endTime: 10.7,
          transText: '糟糕！那不是蓝色！那是绿色！把黄色和蓝色混合在一起就是绿色啦！',
          quesText: 'What\'s this new color? What colors make green?',
          quesbeginTime: 211.6,
          quesendTime: 5.3,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-28.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-29.png'),
          beginTime: 105.7,
          endTime: 10.3,
          transText: '糟糕！那不是蓝色！那是紫色！把红色和蓝色混合在一起就是紫色啦！',
          quesText: 'What\'s this new color? What colors make purple?',
          quesbeginTime: 218.1,
          quesendTime: 4.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-30.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-31.png'),
          beginTime: 117.5,
          endTime: 8.2,
          transText: '啊哈！这是蓝色。现在我们看到很多种颜色……',
          quesText: 'Can you see the color blue? ',
          quesbeginTime: 223.5,
          quesendTime: 3,
        },{
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-32.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-33.png'),
          beginTime: 128.7,
          endTime: 11,
          transText: '绿色！黄色！橙色！蓝色！紫色！红色！',
          quesText: 'How many colors can you see on this page?',
          quesbeginTime: 227.5,
          quesendTime: 3.9,
        },{
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-34.png'),
          img2Src: require('../../../../assets/images/level1/course1/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course1/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        }],
        router: "L1Course1Day1Page2",
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
