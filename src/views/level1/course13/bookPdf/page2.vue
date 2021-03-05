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
          url: "./static/mp3/level1/level1-13-story.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        templateData: {
          autoPlay: true, //自动开关
          manualPageUrl: 'L1Course13bookPdfPage1', //手动页
          autoPageUrl: 'L1Course13bookPdfPage2', //自动页
          titleImg: require('../../../../assets/images/level1/course13/pdf/title.png'), //标题图
          transFlag: false,
          quesFlag: false,
          backMenu: 'index?id=L1Course13',
        },
        playtime: {
          time: 0,
          randem: Math.random(1000),
           stopTime: 2.1
        },
        pageIndex: 0,
        pageCount: 21,
        pageData: [{
          mainFlag: true,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-start.png"),
          beginTime: 0,
          endTime: 2.1
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-01.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-02.png"),
          beginTime: 7.2,
          endTime: 2.5,
          transText: "我自己刷牙。",
          quesText:
            'Look! He is brushing his teeth. He says, "I brush my teeth." Do you  brush your teeth every day?',
          quesbeginTime: 59.2,
          quesendTime: 10.7
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-03.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-04.png"),
          beginTime: 11.8,
          endTime: 2.5,
          transText: "我自己梳头。",
          quesText:
            "What's he doing now? ",
          quesbeginTime: 71,
          quesendTime: 1.8
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-05.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-06.png"),
          beginTime: 17.4,
          endTime: 2.7,
          transText: "我自己洗脸。",
          quesText: "Now the boy is at the sink. He is standing on a stool. What's he doing?",
          quesbeginTime: 74.2,
          quesendTime: 7
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-07.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-08.png"),
          beginTime: 23.2,
          endTime: 2.7,
          transText: "我自己锻炼。",
          quesText: "After brushing his teeth, combing his hair, and washing his face,he is ready to move his body. Let's stand up and move our bodies.",
          quesbeginTime: 83,
          quesendTime: 11.3
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-09.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-10.png"),
          beginTime: 28.8,
          endTime: 1.8,
          transText: "我稍作休息。",
          quesText: "Look at this boy. Is he still moving his body? Where is he? ",
          quesbeginTime: 96,
          quesendTime: 5.8
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-11.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-12.png"),
          beginTime: 32.6,
          endTime: 1.5,
          transText: "我自己吃饭。",
          quesText: "Look! He is eating. What is in his hands? ",
          quesbeginTime: 103,
          quesendTime: 5
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-13.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-14.png"),
          beginTime: 36.3,
          endTime: 1.3,
          transText: "我自己喝水。",
          quesText:
            "After he eats, he needs to drink. What is he drinking? ",
          quesbeginTime: 109.8,
          quesendTime: 4.9
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-15.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-16.png"),
          beginTime: 40.4,
          endTime: 3.2,
          transText: "我注意保暖。",
          quesText: "Look at him. He is wearing a hat, a scarf and mittens. Does he feel warm or cold? ",
          quesbeginTime: 116,
          quesendTime: 8.4
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-17.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-18.png"),
          beginTime: 46.6,
          endTime: 1.1,
          transText: "我自己睡觉",
          quesText: "After he plays outside for a while, he is tired. He goes to sleep. Does he sleep on his own? What about you? ",
          quesbeginTime: 126.3,
          quesendTime: 10.5
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-19.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-20.png"),
          beginTime: 50.5,
          endTime: 3.2,
          transText: "我照顾我自己！",
          quesText: 'Look! He is sitting on a mat thinking. Maybe he is thinking, "I take care of myself. I‘m a big boy."',
          quesbeginTime: 138.3,
          quesendTime: 11
        },
        {
          mainFlag: false,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-21.png"),
          img2Src: require("../../../../assets/images/level1/course13/pdf/pdf-blank.png"),
          beginTime: 0.1,
          endTime: 0.1,
          transText: "",
          quesText: '',
          quesbeginTime: 0.1,
          quesendTime: 0.1,
        },
        {
          mainFlag: true,
          img1Src: require("../../../../assets/images/level1/course13/pdf/pdf-end.png"),
          beginTime: 0.1,
          endTime: 0.1
        }],
        router: "index?id=L1Course13",
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
