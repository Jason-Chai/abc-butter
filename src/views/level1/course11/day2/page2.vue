<template>
  <div class="main">
    <div class="bg-div">
      <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer" />
      <div class="mb-box">
        <div class="canvas">
          <div class="canvasMain">
            <iframe :src="iframeUrl"></iframe>
          </div>
          <img src="../../../../assets/images/level1/course11/day2-p3-img1.png" alt>
        </div>
        <div class="audio">
          <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
            :routerUrl="router" :menuList="menuList" :titleCurr="3" />
        </div>
        <div class="page3-content">
          <div class="content">
            <div ref="right1" @click="beginMusicAndEnd('right1', 1)" class="each-pic pic1">
              <img src="../../../../assets/images/commonImg/number-play.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../../components/lookNumberMenu";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        iframeUrl: "",
        //视频隐藏
        isShowVideo: "isShowVideo",
        audios: {
          url: "./static/mp3/level1/level1-11.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course11Day2Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-number-menu-voca.png')
          },
          {
            routerUrl: 'L1Course11Day2Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-number-menu-number.png')
          },
          {
            routerUrl: 'index?id=L1Course11',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-number-menu-back.png')
          },
        ],
        playtime: {
          time: 80.9,
          randem: Math.random(1000),
          stopTime: 3.2
        },
        router: "/index?id=L1Course11",
        musicTimeList: {
          right1: {
            beginTime: 85.9,
            endTime: 64
          }
        },
        timerList: [],
        deerStep: true
      };
    },
    mounted() {
      if (this.IsPC()) {
        this.iframeUrl = "./static/draw/index.html";
      } else {
        this.iframeUrl = "./static/draw/index_mobile.html";
      }
      let that = this;
      let playTime = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(playTime);
      }, 10);
      let stopTime = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(stopTime);
      }, 3200);
      that.$refs.deer.addEventListener("animationend", function() {
        that.deerStep = false;
        let deerTime = window.setTimeout(() => {
          that.deerStep = true;
          window.clearTimeout(deerTime);
        }, 5000);
      });
    },
    methods: {
      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();

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
      },
      //开始播放
      onPlayerPlay(a) {
        this.playtime.randem = Math.random(1000);
        this.playtime.time = "176.494";
        this.$refs.audioss.startPlay();
        let stopTT = window.setTimeout(() => {
          this.$refs.audioss.pausePlay();
          clearTimeout(stopTT);
        }, 18730);
      },
      onPlayerEnded(a) {
        this.isShowVideo = "isShowVideo1";
      },
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = [
          "Android",
          "iPhone",
          "SymbianOS",
          "Windows Phone",
          "iPad",
          "iPod"
        ];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/listenNumber";
  @rem: 128rem;

</style>
