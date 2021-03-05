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
          url: "./static/mp3/level1/level1-09-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course9bookPdfPage1', //手动页
          autoPageUrl: 'L1Course9bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course9/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course9',
        },

        playtime: {
          time: 2,
          randem: Math.random(1000),
           stopTime:2.9
        },
        pageIndex: 0,
        pageCount: 25,
        pageData: [{
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-start.png'),
          beginTime: 2,
          endTime: 2.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-01.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-02.png'),
          beginTime: 7.4,
          endTime: 3,
          transText: '我把我的泰迪熊弄丢了！',
          quesText: 'Look! The boy is sad. He lost his teddy. Do you have a teddy?',
          quesbeginTime: 81.4,
          quesendTime: 7.6,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-03.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-04.png'),
          beginTime: 12.6,
          endTime: 3,
          transText: '家里每个人都来帮我找。”',
          quesText: 'Oh! The boy\'s family helps him. They are looking for the teddy. Who gets the teddy? ',
          quesbeginTime: 89.9,
          quesendTime: 8.9,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-05.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-06.png'),
          beginTime: 18.7,
          endTime: 3,
          transText: '我不会系鞋带！',
          quesText: 'What\'s the boy doing? ',
          quesbeginTime: 99.8,
          quesendTime: 2.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-07.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-08.png'),
          beginTime: 23.6,
          endTime: 3,
          transText: '奶奶来帮我。',
          quesText: 'Who helps him? ',
          quesbeginTime: 102.7,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-09.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-10.png'),
          beginTime: 29.5,
          endTime: 3,
          transText: '我不会放风筝！',
          quesText: 'What\'s in his hands? ',
          quesbeginTime: 105.7,
          quesendTime: 2.5,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-11.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-12.png'),
          beginTime: 34.3,
          endTime: 5.2,
          transText: '爷爷来帮我。呼！',
          quesText: 'Who helps him? ',
          quesbeginTime: 109,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-13.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-14.png'),
          beginTime: 42,
          endTime: 3,
          transText: '宝宝不会剥香蕉！',
          quesText: 'Look! A baby in a chair. She wants to eat the banana. Can she peel it? ',
          quesbeginTime: 111.6,
          quesendTime: 8.1,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-15.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-16.png'),
          beginTime: 47.6,
          endTime: 4.5,
          transText: '我来帮宝宝。真好吃！',
          quesText: 'Who helps her? ',
          quesbeginTime: 120.8,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-17.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-18.png'),
          beginTime: 54.5,
          endTime: 3,
          transText: '我感觉不太舒服！',
          quesText: 'What\'s the matter with the boy? Is he OK? ',
          quesbeginTime: 123.6,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-19.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-20.png'),
          beginTime: 60,
          endTime: 3,
          transText: '爸爸来帮我。',
          quesText: 'Who helps him? ',
          quesbeginTime: 128.3,
          quesendTime: 2,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-21.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-22.png'),
          beginTime: 63.8,
          endTime: 3,
          transText: '我睡不着！',
          quesText: 'Look! Is it day or night? ',
          quesbeginTime: 131,
          quesendTime: 4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-23.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-24.png'),
          beginTime: 69.1,
          endTime: 6.2,
          transText: '妈妈来帮我。嘘！',
          quesText: 'Mom helps him. Now he is sleeping. What\'s in his hand?',
          quesbeginTime: 135.8,
          quesendTime: 6.4,
        }, {
          mainFlag: false,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-25.png'),
          img2Src: require('../../../../assets/images/level1/course9/pdf/pdf-blank.png'),
          beginTime: 0.1,
          endTime: 0.1,
          transText: '',
          quesText: 'Teddy! Lovely!',
          quesbeginTime: 142.8,
          quesendTime: 3,
        }, {
          mainFlag: true,
          img1Src: require('../../../../assets/images/level1/course9/pdf/pdf-end.png'),
          beginTime: 0.1,
          endTime: 0.1,
        }],
        router: "L1Course9Day1Page2",
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
