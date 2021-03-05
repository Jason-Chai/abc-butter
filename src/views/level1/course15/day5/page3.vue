<template>
  <div class="main">
    <div class="bg-div">
      <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer" />
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="3" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content-left">
          <img src="../../../../assets/images/level1/course15/sounds.png" class="title" />
          <img src="../../../../assets/images/commonImg/listen-choose-play.png" class="playVideo" @click="beginMusicAndEnd('playbtn')" />
        </div>
        <div class="content-right">
          <div ref="word1" class="each-pic pic1" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img1.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img2.png" alt>
          </div>
          <div ref="word3" class="each-pic pic3" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img3.png" alt>
          </div>
          <div ref="word4" class="each-pic pic4" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img4.png" alt>
          </div>
          <div ref="word5" class="each-pic pic5" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img5.png" alt>
          </div>
          <div ref="word6" class="each-pic pic6" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img6.png" alt>
          </div>
          <!-- <div ref="word7" class="each-pic pic7" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img7.png" alt>
          </div>
           <div ref="word8" class="each-pic pic8" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course15/day5-p3-img8.png" alt>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../../components/listenChooseMenu";
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
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-15.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isShowTitle: false, // title   what can I do
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course15Day5Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-sing.png')
          },
          {
            routerUrl: 'L1Course15Day5Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-sent.png')
          },
          {
            routerUrl: 'L1Course15Day5Page3',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-listenchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course15',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-back.png')
          }
        ],
        playtime: {
          time: 235.7,
          randem: Math.random(1000),
           stopTime: 9.4
        },
        router: "index?id=L1Course15",
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
            }
          ],
          playbtn: {
            beginTime: 247.3,
            endTime: 18
          },
          btn1: {
            beginTime: 376.5,
            endTime: 2
          },
          btn2: {
            beginTime: 381.4,
            endTime: 2
          },
          right: {
            beginTime: 268.1,
            endTime: 2.2
          },
          wrong: {
            beginTime: 270.4,
            endTime: 2.5
          },
          over: {
            beginTime: 274.3,
            endTime: 5.4
          }
        },
        flag: false,
        timerList: [],
        showQuestionItem: 0,
        questionList: [{}],
        currQusAns: "", // 当前问题的正确答案
        deerStep: true,
        deerQuestion: true
      };
    },
    methods: {
      beginMusicAndEnd(item) {
        let that = this;
        that.clearTimer();
        that[item + "MoreShow"] = true;
        this.playtime.randem = Math.random(1000);
         that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        that.flag = true;
        that.timerList[3] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, stop);
      },
      selectAnswer(item, index) {
        // console.log(item, index);
        // console.log(
        //   "正确答案：=====" + this.musicTimeList["question"][index].answer
        // );
        // let that = this;
        // let endtime = this.musicTimeList.right.endTime * 1000;
        // let lastendtime = this.musicTimeList.over.endTime * 1000;
        // var nextIndex = index + 1;
        // if (item == this.musicTimeList["question"][index].answer) {
        //   if (nextIndex == this.musicTimeList["question"].length) {
        //     that.deerQuestion = false;
        //     that.deerStep = true;
        //     this.beginMusicAndEnd("over");
        //   } else {
        //     setTimeout(function() {
        //       that.showQuestionItem = nextIndex;
        //     }, endtime);
        //     this.beginMusicAndEnd("right");
        //   }
        // } else {
        //   this.beginMusicAndEnd("wrong");
        // }
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
      }, 100);
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(that.timerList[1]);
      }, 9400);
      that.$refs.deer.addEventListener("animationend", function() {
        that.deerStep = false;
        let deerTime = window.setTimeout(() => {
          that.deerStep = true;
          window.clearTimeout(deerTime);
        }, 2000);
      });
    }
  };
</script>


<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/listenChoose";
  @rem: 128rem;

  .main {
    .animate-bg {
      .scale(308, 519);
      .pos-a(505, 112, 3);
      background: url("../../../../assets/images/level1/course15/ani-day5-p3.png") no-repeat;
      background-size: auto 519 / @rem;
      pointer-events: none;
    }

    /* 逐帧动画设定方法:
  1. 图片总宽度/单帧宽度 计算总共多少帧为n
  2. animation中设置steps(n)
  3. keyfarmes中设定初始为0，结束为（-总宽度）
  */
    .animate-step {
      animation: step 3s steps(51, end) 1;
      -webkit-animation: step 3s steps(51, end) 1;
    }

    @keyframes step {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: -15708 / @rem 0;
      }
    }

    @-webkit-keyframes step {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: -15708 / @rem 0;
      }
    }
  }

  .animate-bg-boys {
    .pos-a(509, 136, 3);
    width: 308 / @rem;
    height: 519 / @rem;
    display: block;
  }

  .page2-content {
    .content-right {
      // width: 1160/@rem !important; //八个 宽
      width: 1040/@rem; //六个个 宽
      margin-left: 700/@rem  !important;
    }

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
</style>
