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
          <img src="../../../../assets/images/level1/course16/day2-p2-title.png" class="title" />
          <img src="../../../../assets/images/commonImg/listen-choose-play.png" class="playVideo" @click="beginMusicAndEnd('playbtn')" />
        </div>
        <div class="content-right">
          <div ref="word2" class="each-pic pic2" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course16/day2-p2-img2.png" alt>
          </div>
          <div ref="word5" class="each-pic pic5" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course16/day2-p2-img5-wrong.png" alt>
          </div>
          <div ref="word3" class="each-pic pic3" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course16/day2-p2-img3.png" alt>
          </div>
          <div ref="word4" class="each-pic pic4" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course16/day2-p2-img4.png" alt>
          </div>
          <div ref="word6" class="each-pic pic6" @click="beginMusicAndEnd('wrong',0)">
            <img src="../../../../assets/images/level1/course16/day2-p2-img6-wrong.png" alt>
          </div>
          <div ref="word1" class="each-pic pic1" @click="beginMusicAndEnd('right',0)">
            <img src="../../../../assets/images/level1/course16/day2-p2-img1.png" alt>
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
          url: "./static/mp3/level1/level1-16.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        isShowTitle: false, // title   what can I do
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course16Day2Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-voca.png')
          },
          {
            routerUrl: 'L1Course16Day2Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-listenchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course16',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-listenchoose-menu-back.png')
          }
        ],
        playtime: {
          time: 128.4,
          randem: Math.random(1000),
           stopTime: 5.6
        },
        router: "index?id=L1Course16",
        musicTimeList: {
          playbtn: {
            beginTime: 139.2,
            endTime: 17.8
          },
          right: {
            beginTime: 348.1,
            endTime: 1.8
          },
          wrong: {
            beginTime: 350.4,
            endTime: 1.8
          },
          over: {
            beginTime: 354.6,
            endTime: 5
          }
        },
        flag: false,
        timerList: [],
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
      }, 5600);
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
      .scale(359, 527);
      .pos-a(505, 112, 3);
      background: url("../../../../assets/images/level1/course16/ani-day2-p2.png") no-repeat;
      background-size: auto 527 / @rem;
      pointer-events: none;
    }

    /* 逐帧动画设定方法:
  1. 图片总宽度/单帧宽度 计算总共多少帧为n
  2. animation中设置steps(n)
  3. keyfarmes中设定初始为0，结束为（-总宽度）
  */
    .animate-step {
      animation: step 3s steps(50, end) 1;
      -webkit-animation: step 3s steps(50, end) 1;
    }

    @keyframes step {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: -17950 / @rem 0;
      }
    }

    @-webkit-keyframes step {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: -17950 / @rem 0;
      }
    }
  }

  .animate-bg-girl {
    .pos-a(510, 132, 3);
    width: 293 / @rem;
    height: 512 / @rem;
    display: block;
  }

  .page2-content {
    .content-right {
      width: 1000/@rem  !important; //八个 宽
      // width: 1040/@rem; //六个个 宽
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
