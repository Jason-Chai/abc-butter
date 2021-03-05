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
          url: "./static/mp3/level1/level1-02-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course2bookPdfPage1', //手动页
          autoPageUrl: 'L1Course2bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course2/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course2',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime: 2.9
        },
        pageIndex: 0,
        pageCount: 22,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-start.png'),
          beginTime: 0,
          endTime: 2.9,
        },{
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-03.png'),
          beginTime: 3.2,
          endTime: 2,
          transText: '哎哟！等等！',
          quesText: 'Oh, we have a new friend. ',
          quesbeginTime: 144.1,
          quesendTime: 1.8,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-04.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-05.png'),
          beginTime: 7.1,
          endTime: 4.9,
          transText: '路灯变红了。红灯意味着停止。',
          quesText: 'The light\'s red. Can he go? Does red light mean stop or go?  ',
          quesbeginTime: 145.9,
          quesendTime: 6.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-06.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-07.png'),
          beginTime: 15.1,
          endTime: 2.2,
          transText: '绿灯意味着通行。',
          quesText: 'What color\'s the light now? Can he go now?',
          quesbeginTime: 154.8,
          quesendTime: 3.7,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-08.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-09.png'),
          beginTime: 20,
          endTime: 5,
          transText: '我们去公园吧。公园也是绿色的哦！',
          quesText: 'Where are they? Is the park green? ',
          quesbeginTime: 160.4,
          quesendTime: 3.8,

        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-10.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-11.png'),
          beginTime: 28.1,
          endTime: 4.3,
          transText: '蓝色的是水。美丽的蓝色湖水！',
          quesText: 'What\'s blue on this page? ',
          quesbeginTime: 165.9,
          quesendTime: 3.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-12.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-13.png'),
          beginTime: 35.1,
          endTime: 3.6,
          transText: '黄色也很棒！钱！',
          quesText: 'What color\'s the sun? What\'s on the grass? ',
          quesbeginTime: 170.6,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-14.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-15.png'),
          beginTime: 41.8,
          endTime: 5.1,
          transText: '粉色很美味。草莓冰激凌！好吃！',
          quesText: 'What are they buying? ',
          quesbeginTime: 177,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-16.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-17.png'),
          beginTime: 49.4,
          endTime: 5.4,
          transText: '哦，不！不要吃那个！有时美的颜色只能用来观赏！',
          quesText: 'Are the flowers pretty? Can we eat flowers?',
          quesbeginTime: 180.5,
          quesendTime: 3.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-18.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-19.png'),
          beginTime: 57.9,
          endTime: 4,
          transText: '整个世界充满了颜色！真是太美了！',
          quesText: 'What colors can you see on this page? Are they beautiful?',
          quesbeginTime: 187.3,
          quesendTime: 4.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-20.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-21.png'),
          beginTime: 64.6,
          endTime: 5.2,
          transText: '天变黑了。该上床睡觉啦！晚安！',
          quesText: 'What color\'s the sky now? Is it morning or night?',
          quesbeginTime: 193.9,
          quesendTime: 5.1,
        },
         {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-22.png'),
          img2Src: require('../../../../assets/images/level1/course2/pdf/pdf-blank.png'),
          beginTime: 72,
          endTime: 1.6,
          transText: '谢谢你！',
          quesText: 'Will the new friend stay with the boy? ',
          quesbeginTime: 201.1,
          quesendTime: 3.3,
        }, 
        {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course2/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        router: "L1Course2Day1Page2",
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
