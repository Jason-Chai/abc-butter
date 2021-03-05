<template>
  <div class="a_page_2">
    <div class="bg-div">
      <img class="animate-bg" src="../../../assets/images/commonImg/anibg3.png" />
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="1" :routerUrl="router"  :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import VueAudio from "./VueAudio";
  import VueAudio from "../../../components/leadInMenu";

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
         menuList:[//右侧菜单
          {
            routerUrl:'course1day1Page1',
            imgSrc:require('../../../assets/images/leadIn.png')
          },
          {
            routerUrl:'course1day1Page2',
            imgSrc:require('../../../assets/images/Vocabulary.png')
          },
          {
            routerUrl:'course1day1Page3',
            imgSrc:require('../../../assets/images/Look.png')
          },{
            routerUrl:'course1day1Page3',
            imgSrc:require('../../../assets/images/Look.png')
          }
        ],
        playtime: {
          time: 0.6,
          randem: Math.random(1000)
        },
        router: "course1day1Page2",
        antMoreShow: false,
        alligatorMoreShow: false,
        appleMoreShow: false,
        axMoreShow: false,
        musicTimeList: {

        },
        flag: false,
        timerList: []
      };
    },
    methods: {
      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();

        //console.log("传入的数据：", index);
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
        this.playtime.time = this.musicTimeList[item].beginTime;
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
      }, 8725);
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../assets/css/index";
  @rem: 128rem;

  .a_page_2 {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    .bg-div {
      width: 100%;
      height: 100%;
      background: url("../../../assets/images/commonImg/pagebg.png");
      background-size: cover;
      background-repeat: no-repeat;
    }

    .animate-bg {
      .scale(410, 594);
      position: absolute;
      top: 308/@rem;
      left: 60/@rem;
      opacity: 0;
      z-index: 10;
      animation: fadeIn 1s both;
    }
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
    margin: 176/@rem auto 0;
    height: 727/@rem;
    background: url("../../../assets/images/level1/course9/day1-p1-img.png");
    background-size: cover;
    background-repeat: no-repeat;

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
