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
              <img src="../../../../assets/images/level1/course8/day4-p2-title.png" class="title" @click="beginMusicAndEnd('btn1')"/>
              <img src="../../../../assets/images/commonImg/listen-choose-play.png" class="playVideo" @click="beginMusicAndEnd('playbtn')"/>
        </div>
        <div class="content-right">
          <div ref="word1" class="each-pic pic1" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course8/day4-p2-img1.png" alt>
          </div>
          <div ref="word2" class="each-pic pic2" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course8/day4-p2-img2.png" alt>
          </div>
           <div ref="word3" class="each-pic pic3" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course8/day4-p2-img3-wrong.png" alt>
          </div>
           <div ref="word4" class="each-pic pic4" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course8/day4-p2-img4-wrong.png" alt>
          </div>
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
          url: "./static/mp3/level1/level1-08.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isShowTitle: false,// title   what can I do
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course8Day4Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-sent.png')
          },
          {
            routerUrl: 'L1Course8Day4Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-listenchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course8',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-back.png')
          }
        ],
        playtime: {
          time: 115.5,
          randem: Math.random(1000),
           stopTime:6.3
        },
        router: "index?id=L1Course8",
        musicTimeList: {
          playbtn:{
            beginTime: 127.1,
            endTime: 18.5
          },
          btn1: {
            beginTime: 123.5,
            endTime: 2.6
          },
          // btn2: {
          //   beginTime: 381.4,
          //   endTime: 2
          // },
          right: {
            beginTime: 199.9,
            endTime: 1.8
          },
          wrong: {
            beginTime: 202.2,
            endTime: 1.9
          },
          over: {
            beginTime: 206.5,
            endTime: 4
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
      }, 6300);
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
      .scale(341, 492);
      .pos-a(515, 108, 3);
      background: url("../../../../assets/images/level1/course8/day4-p2-person.png") no-repeat;
      background-size: auto 492 / @rem;
      pointer-events: none;
    }
    /* 逐帧动画设定方法:
    1. 图片总宽度/单帧宽度 计算总共多少帧为n
    2. animation中设置steps(n-1)
    3. keyfarmes中设定初始为0，结束为（-总宽度）
    */
    // .animate-step {
    //   animation: step 3s steps(51, end) 1;
    //   -webkit-animation: step 3s steps(51, end) 1;
    // }

    @keyframes step {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: -15351 / @rem 0;
      }
    }

    @-webkit-keyframes step {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: -15351 / @rem 0;
      }
    }
  }


  .page2-content {

    .content-right{
      // width: 1160/@rem !important; //八个 宽
      margin-left: 700/@rem !important;
      // width: 1040/@rem!important; //六个 宽
       width: 940/@rem !important; //四个 宽
    }
    .each-pic {
      // 两个大小
      // width: 434 / @rem !important;
      // height: 453 / @rem !important;
      // 四个大小
        width: 315 / @rem !important;
        height: 329 / @rem !important;
      img {
        display: inline-block;
      }
    }
  }
</style>
