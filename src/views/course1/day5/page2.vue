<template>
  <div class="main">
    <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1">
    <div class="bg-div">
      <img class="animate-bg" src="../../../assets/images/commonImg/anibg6.png">
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="3" :routerUrl="router"  :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content" v-show="showQuestionItem===0">
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',0)">
            <img src="../../../assets/images/level1/course9/day5-p2-img2.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',0)">
            <img src="../../../assets/images/level1/course9/day5-p2-img1.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===1">
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',1)">
            <img src="../../../assets/images/level1/course9/day5-p2-img3.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',1)">
            <img src="../../../assets/images/level1/course9/day5-p2-img4.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===2">
          <div ref="word1" class="each-pic pic1" @click="selectAnswer('word1',2)">
            <img src="../../../assets/images/level1/course9/day5-p2-img4.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="selectAnswer('word2',2)">
            <img src="../../../assets/images/level1/course9/day5-p2-img5.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===3">
          <div ref="word1" class="each-pic pic3" @click="selectAnswer('word1',3)">
            <img src="../../../assets/images/level1/course9/day5-p2-img1.png" alt>
          </div>
          <div ref="word2" class="each-pic pic4" @click="selectAnswer('word2',3)">
            <img src="../../../assets/images/level1/course9/day5-p2-img2.png" alt>
          </div>
        </div>
        <div class="content" v-show="showQuestionItem===4">
          <div ref="word1" class="each-pic pic3" @click="selectAnswer('word1',4)">
            <img src="../../../assets/images/level1/course9/day5-p2-img4.png" alt>
          </div>
          <div ref="word2" class="each-pic pic4" @click="selectAnswer('word2',4)">
            <img src="../../../assets/images/level1/course9/day5-p2-img3.png" alt>
          </div>
        </div>
        <div class="content-bottom">
          <div class="button-next" ref="btn1" v-show="showQuestionItem===0" @click="beginMusicAndEnd('btn1')">
            <img src="../../../assets/images/commonImg/c1.png">
          </div>
          <div class="button-next" ref="btn2" v-show="showQuestionItem===1" @click="beginMusicAndEnd('btn2')">
            <img src="../../../assets/images/commonImg/c2.png">
          </div>
          <div class="button-next" ref="btn3" v-show="showQuestionItem===2" @click="beginMusicAndEnd('btn3')">
            <img src="../../../assets/images/commonImg/c3.png">
          </div>
          <div class="button-next" ref="btn4" v-show="showQuestionItem===3" @click="beginMusicAndEnd('btn4')">
            <img src="../../../assets/images/commonImg/c4.png">
          </div>
          <div class="button-next" ref="btn4" v-show="showQuestionItem===4" @click="beginMusicAndEnd('btn5')">
            <img src="../../../assets/images/commonImg/c5.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../components/lookChooseMenu";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        // 烟花
        timer1: null,
        step1: 0,
        isSHow: "",
        curImg1: "./static/images/a/a_00000.png",
        curImgList1: [{
            url: "./static/images/a/a_00000.png"
          },
          {
            url: "./static/images/a/a_00001.png"
          },
          {
            url: "./static/images/a/a_00002.png"
          },
          {
            url: "./static/images/a/a_00003.png"
          },
          {
            url: "./static/images/a/a_00004.png"
          },
          {
            url: "./static/images/a/a_00005.png"
          },
          {
            url: "./static/images/a/a_00006.png"
          },
          {
            url: "./static/images/a/a_00007.png"
          },
          {
            url: "./static/images/a/a_00008.png"
          },
          {
            url: "./static/images/a/a_00009.png"
          },
          {
            url: "./static/images/a/a_00010.png"
          },
          {
            url: "./static/images/a/a_00011.png"
          },
          {
            url: "./static/images/a/a_00012.png"
          },
          {
            url: "./static/images/a/a_00013.png"
          },
          {
            url: "./static/images/a/a_00014.png"
          },
          {
            url: "./static/images/a/a_00015.png"
          },
          {
            url: "./static/images/a/a_00016.png"
          },
          {
            url: "./static/images/a/a_00017.png"
          },
          {
            url: "./static/images/a/a_00018.png"
          },
          {
            url: "./static/images/a/a_00019.png"
          },
          {
            url: "./static/images/a/a_00020.png"
          },
          {
            url: "./static/images/a/a_00021.png"
          },
          {
            url: "./static/images/a/a_00022.png"
          },
          {
            url: "./static/images/a/a_00023.png"
          },
          {
            url: "./static/images/a/a_00024.png"
          },
          {
            url: "./static/images/a/a_00025.png"
          },
          {
            url: "./static/images/a/a_00026.png"
          },
          {
            url: "./static/images/a/a_00027.png"
          },
          {
            url: "./static/images/a/a_00028.png"
          },
          {
            url: "./static/images/a/a_00029.png"
          },
          {
            url: "./static/images/a/a_00030.png"
          },
          {
            url: "./static/images/a/a_00031.png"
          },
          {
            url: "./static/images/a/a_00032.png"
          },
          {
            url: "./static/images/a/a_00033.png"
          },
          {
            url: "./static/images/a/a_00034.png"
          },
          {
            url: "./static/images/a/a_00035.png"
          },
          {
            url: "./static/images/a/a_00036.png"
          },
          {
            url: "./static/images/a/a_00037.png"
          },
          {
            url: "./static/images/a/a_00038.png"
          },
          {
            url: "./static/images/a/a_00039.png"
          },
          {
            url: "./static/images/a/a_00040.png"
          },
          {
            url: "./static/images/a/a_00041.png"
          },
          {
            url: "./static/images/a/a_00042.png"
          },
          {
            url: "./static/images/a/a_00043.png"
          },
          {
            url: "./static/images/a/a_00044.png"
          },
          {
            url: "./static/images/a/a_00045.png"
          },
          {
            url: "./static/images/a/a_00046.png"
          },
          {
            url: "./static/images/a/a_00047.png"
          },
          {
            url: "./static/images/a/a_00048.png"
          },
          {
            url: "./static/images/a/a_00049.png"
          },
          {
            url: "./static/images/a/a_00050.png"
          },
          {
            url: "./static/images/a/a_00051.png"
          },
          {
            url: "./static/images/a/a_00052.png"
          },
          {
            url: "./static/images/a/a_00053.png"
          },
          {
            url: "./static/images/a/a_00054.png"
          },
          {
            url: "./static/images/a/a_00055.png"
          },
          {
            url: "./static/images/a/a_00056.png"
          },
          {
            url: "./static/images/a/a_00057.png"
          },
          {
            url: "./static/images/a/a_00058.png"
          }
        ],
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-09.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
         menuList:[//右侧菜单
          {
            routerUrl:'course1day5Page1',
            imgSrc:require('../../../assets/images/Vocabulary.png')
          },
          {
            routerUrl:'course1day5Page2',
            imgSrc:require('../../../assets/images/Look.png')
          }, 
          {
            routerUrl:'index',
            imgSrc:require('../../../assets/images/Look.png')
          }
        ],
        playtime: {
          time: 27.4,
          randem: Math.random(1000)
        },
        router: "index",
        musicTimeList: {
          question: [{
              lev: "btn1",
              id: 1,
              answer: "word2"
            },
            {
              lev: "btn2",
              id: 2,
              answer: "word1"
            },
            {
              lev: "btn3",
              id: 3,
              answer: "word2"
            },
            {
              lev: "btn4",
              id: 4,
              answer: "word2"
            },
            {
              lev: "btn5",
              id: 5,
              answer: "word1"
            }
          ],
          btn1: {
            beginTime: 376.5,
            endTime: 2
          },
          btn2: {
            beginTime: 381.4,
            endTime: 1.8
          },
          btn3: {
            beginTime: 386,
            endTime: 2.3
          },
          btn4: {
            beginTime: 396.4,
            endTime: 2.3
          },
          btn5: {
            beginTime: 401.6,
            endTime: 2
          },
          right: {
            beginTime: 412,
            endTime: 1.8
          },
          wrong: {
            beginTime: 414.5,
            endTime: 2.5
          },
          over: {
            beginTime: 412,
            endTime: 1.8
          },
        },
        flag: false,
        timerList: [],
        showQuestionItem: 0,
        questionList: [{}],
        currQusAns: "" // 当前问题的正确答案
      };
    },
    methods: {
      // 烟花
      yh() {
        this.curImg1 = this.curImgList1[this.step1].url;
        this.step1++;

        if (this.step1 == 59) {
          this.step1 = 0;
          window.clearInterval(this.timer1);
          this.isSHow = "";
        }
      },
      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();

        that[item + "MoreShow"] = true;
        this.playtime.randem = Math.random(1000);
        this.playtime.time = this.musicTimeList[item].beginTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
        that.flag = true;
        that.timerList[3] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, stop);
      },
      selectAnswer(item, index) {
        //console.log(item, index);
        // console.log(
        //   "正确答案：=====" + this.musicTimeList["question"][index].answer
        // );
        let that = this;
        let endtime = this.musicTimeList.right.endTime * 1000;
        let lastendtime = this.musicTimeList.over.endTime * 1000;
        var nextIndex = index + 1;
        if (item == this.musicTimeList["question"][index].answer) {
          if (nextIndex == this.musicTimeList["question"].length) {
            //烟花
            setTimeout(function() {
              that.isSHow = "isSHow";
              that.timer1 = setInterval(that.yh, 60);
            }, lastendtime);
            this.beginMusicAndEnd("over");
          } else {
            setTimeout(function() {
              that.showQuestionItem = nextIndex;
            }, endtime);
            this.beginMusicAndEnd("right");
          }
        } else {
          this.beginMusicAndEnd("wrong");
        }
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      }
    },
    mounted() {
      let that = this;
      that.flag = true;
      that.timerList[0] = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(that.timerList[0]);
        // that.clearTimer()
      }, 100);
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(that.timerList[1]);
        // that.clearTimer()
      }, 6700);
    }
  };
</script>


<style lang="less" scoped>
  @import "../../../assets/css/index";
  @rem: 128rem;

  .isSHow {
    display: block;
    left: 50% !important;
  }

  .main {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    .bg-div {
      width: 100%;
      height: 100%;
      background: url("../../../assets/images/commonImg/page6bg.png");
      background-size: cover;
      background-repeat: no-repeat;
    }

    .animate-bg {
      .scale(418, 852);
      .pos-a(180, 0, 3);
      opacity: 0;
      animation: fadeIn 1s both;
    }
  }

  .page2-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: center;
      width: 1340 / @rem;
      height: 500/@rem;
      margin: 250 / @rem auto 0 407 / @rem;

      .each-pic {
        // 两个大小
        width: 434 / @rem;
        height: 453 / @rem;
        // 四个大小
        //   width: 315 / @rem;
        //   height: 329 / @rem;

        img {
          display: inline-block;
        }
      }
    }

    .content-bottom {
      position: absolute;
      width: 246 / @rem;
      height: 126 / @rem;
      top: 800 / @rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .ivu-slider-wrap {
    margin: 0.1rem 0 0 !important;
  }

  .audio {
    width: 100%;
    height: 0.31rem;
    margin-bottom: 0.1rem;
    /* animation: fadeIn 1s 5.5s both; */
    /* opacity: 0; */
  }
</style>
