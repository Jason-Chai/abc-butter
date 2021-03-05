<template>
  <div class="a_page_2">
    <div class="bg-div">
      <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer"></div>
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="1" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // import VueAudio from "./VueAudio";
  import VueAudio from "../../../../components/leadInMenu";

  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-09.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [ //右侧菜单
          {
            routerUrl: 'L1Course9Day1Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lead-menu-lead.png')
          },
          {
            routerUrl: 'L1Course9Day1Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lead-menu-voca.png')
          },
          {
            routerUrl: 'L1Course9Day1Page3',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lead-menu-lookchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course9',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-lead-menu-back.png')
          }
        ],
        playtime: {
          time: 5,
          randem: Math.random(1000),
           stopTime:3.8
        },
        router: "L1Course9Day1Page2",
        antMoreShow: false,
        alligatorMoreShow: false,
        appleMoreShow: false,
        axMoreShow: false,
        musicTimeList: {},
        flag: false,
        timerList: [],
        deerStep: true
      };
    },
    methods: {
      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();

        // console.log("传入的数据：", index);
        that[item + "MoreShow"] = true;
        if (index != undefined) {
          that.$refs["right" + index].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs["right" + index].style.animation = "fadeIn 1s 0s both";
            window.clearTimeout(tempTimer);
          }, 10);

          // that.$refs["right" + index].style.opacity = "1";
        }
        this.playtime.randem = Math.random(1000);
         that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
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
        // that.clearTimer()
      }, 100);
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(that.timerList[1]);
        // that.clearTimer()
      }, 3800);
      that.$refs.deer.addEventListener("animationend", function() {
        that.deerStep = false;
        let deerTime = window.setTimeout(() => {
          that.deerStep = true;
          window.clearTimeout(deerTime);
        }, 5000);
      });
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/leadIn";
  @rem: 128rem;

  .a_page_2 {
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
  .page2-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .content {
    width: 1338 / @rem;
    margin: 176 / @rem auto 0;
    height: 727 / @rem;
    background: url("../../../../assets/images/level1/course9/day1-p1-img.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

</style>
