<template>
  <div class="main">
    <div class="bg-div">
      <div class="xiong">
        <img src="../../../assets/images/commonImg/anibg8.png" alt />
      </div> 
      <div class="canvas">
        <div class="canvasMain">
          <iframe :src="iframeUrl"></iframe>
          <!-- <img class="con-pic" src="../../../assets/images/levelTwoCourse1/pic1.png"  alt=""  /> -->
        </div>
      </div>
      <img class="bg"  src="../../../assets/images/commonImg/page8bg.png" />
      <div class="audio">
        <VueAudio
          ref="audioss"
          :audioCurrentTime="playtime"
          :theUrl="audios.url"
          :theControlList="audios.controlList"
          :routerUrl="router"  :menuList="menuList"
          :titleCurr="3"
        />
      </div>
      <div class="page3-content">
        <div class="content">
          <div
            ref="right1"
            @click="beginMusicAndEnd('right1', 1)"
            class="each-pic pic1"
          ></div>
          <div
            ref="right2"
            @click="beginMusicAndEnd('right2', 2)"
            class="each-pic pic2"
          ></div>
          <div
            ref="right3"
            @click="beginMusicAndEnd('right3', 3)"
            class="each-pic pic3"
          ></div>
          <div
            ref="right4"
            @click="beginMusicAndEnd('right4', 4)"
            class="each-pic pic4"
          ></div>
          <div
            ref="right5"
            @click="beginMusicAndEnd('right5', 5)"
            class="each-pic pic5"
          ></div>
          <div
            ref="right6"
            @click="beginMusicAndEnd('right6', 6)"
            class="each-pic pic6"
          ></div>
        </div>
      </div>
      <!-- <div class="xiong">
        <img src="../../assets/images/xiong/B/p4.png" alt />
      </div> -->
    </div>
  </div>
</template>

<script>
// import VueAudio from "./VueAudio";
import VueAudio from "../../../components/lookCircleMenu";
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
        url: "./static/mp3/audio-b.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
       menuList:[//右侧菜单
          {
            routerUrl:'course1day3Page1',
            imgSrc:require('../../../assets/images/Vocabulary.png')
          },
          {
            routerUrl:'course1day3Page2',
            imgSrc:require('../../../assets/images/Look.png')
          }, 
          {
            routerUrl:'course1day3Page1',
            imgSrc:require('../../../assets/images/Look.png')
          }
        ],
      playtime: {
        time: 173.478,
        randem: Math.random(1000)
      },
      router: "/course1page9",
      musicTimeList: {
        right1: {
          beginTime: 102.4,
          endTime: 2
        },
        right2: {
          beginTime: 127.4,
          endTime: 2
        },
        right3: {
          beginTime: 153.5,
          endTime: 2
        },
        right4: {
          beginTime: 178.5,
          endTime: 2
        },
        right5: {
          beginTime: 204.4,
          endTime: 2
        },
        right6: {
          beginTime: 230.1,
          endTime: 2
        }
      },
      timerList: []
      //   playerOptions : {
      //     playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
      //     autoplay: false, //如果true,浏览器准备好时开始回放。
      //     muted: false, // 默认情况下将会消除任何音频。
      //     loop: false, // 导致视频一结束就重新开始。
      //     preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      //     language: 'zh-CN',
      //     aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      //     fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      //     sources: [{
      //       type: "",
      //       src: './static/mp4/LuB.mp4'//url地址
      //       // src: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
      //       // src: "" //url地址
      //     }],
      //     poster: "", //你的封面地址
      //     // width: document.documentElement.clientWidth,
      //     notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      //     // controlBar: {
      //     //   timeDivider: false,
      //     //   durationDisplay: false,
      //     //   remainingTimeDisplay: false,
      //     //   fullscreenToggle: true  //全屏按钮
      //     // }
      // }
    };
  },
  mounted() {
    if (this.IsPC()) {
      this.iframeUrl = "http://fe.slinqueen.com/lixiang/mtx/index.html";
    } else {
      this.iframeUrl = "http://47.92.130.116:3021";
    }
    let that = this;
    let playTime = window.setTimeout(() => {
      that.$refs.audioss.startPlay();
      clearTimeout(playTime);
    }, 10);
    let stopTime = window.setTimeout(() => {
      that.$refs.audioss.pausePlay();
      clearTimeout(stopTime);
    }, 3000);
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
@import "../../../assets/css/index";
@rem: 128rem;

.isShowVideo {
  display: block;
}
.isShowVideo1 {
  display: none;
}
.video-player {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
}
iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  @media screen and (max-width: 1000px) {
    width: 5.5rem;
    height: inherit;
  }
}
.xiong {
    animation: fadeInLeft 1s 2s both;
    opacity: 0;
    position: absolute;
    bottom: 0.5rem;
    left: 0.55rem;
    width: 2.49rem;
    height: 5.42rem;
    z-index: 5;

    //针对手机
    @media screen and (max-width: 1000px) {
      width: 0.625rem;
      left: 0.25rem;
      height: 1.4rem;
      bottom: 0.6rem;
    }
  }
.bg {
  opacity: 0;
  animation: fadeIn 1s both;
}
.canvas {
  animation: fadeIn 1s 2s both;
  position: absolute;
  width: 1318 / @rem;
  height: 718 / @rem;
  top: 230 / @rem;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("../../../assets/images/commonImg/photoKuang8.png");
  background-size: 100% 100%;
  display: flex;
  justify-items: center;
  z-index: 3;
  padding: 0.5rem;
  box-sizing: border-box;
  //针对手机
  @media screen and (max-width: 1000px) {
    width: 5.5rem;
    height: 2.4rem;
  }
}
.canvasMain {
  position: relative;
  width: 100%;
  height: 100%;
  .con-pic {
    .scale(1080, 494);
    .pos-a(305, 385, 1);
  }
  .animate-bg {
    .scale(532, 432);
    .pos-a(540, 0, 3);
    opacity: 0;
    animation: fadeIn 1s both;
  }
  &::after {
    position: relative;
  }
  .thisIsA {
    width: 3.2rem;
    height: 3.74rem;
    display: block;
    @media screen and (max-width: 1000px) {
      width: 1.2rem;
      height: inherit;
    }
  }
  .thisIsA1 {
    width: 4.98rem;
    //height: 2.75rem;
    @media screen and (max-width: 1000px) {
      width: 1.21rem;
      height: inherit;
    }
  }
}
.page3-content {
  margin: 0 auto;
  position: absolute;
  width: 1920/@rem;
  height: 1080/@rem;
  top: 0;
  left: 0;
  .content{
    width: 100%;height: 100%;
    position: relative;
    .each-pic {
      width: 218 / @rem;
      height: 170 / @rem;
      position: absolute;
      &.pic1{ .pos-a(304,110,3); }
      &.pic2{ .pos-a(486,110,3); }
      &.pic3{ .pos-a(642,110,3); }
      &.pic4{ .pos-a(304,1615,3); }
      &.pic5{ .pos-a(486,1615,3); }
      &.pic6{ .pos-a(642,1615,3); }
      img {
        display: inline-block;
      }
    }
  }
  
}

.bg-div {
  position: relative;
  width: 1920/@rem;
  height: 1080/@rem;
  margin: 0 auto;
  .xiong {
    animation: fadeInLeft 1s 2s both;
    opacity: 0;
    position: absolute;
    bottom: 0.5rem;
    left: 0.55rem;
    width: 2.49rem;
    height: 5.42rem;
    z-index: 5;

    //针对手机
    @media screen and (max-width: 1000px) {
      width: 0.625rem;
      left: 0.25rem;
      height: 1.4rem;
      bottom: 0.6rem;
    }
  }
  .audio {
    width: 100%;
    height: 0.31rem;
    margin-bottom: 0.1rem;
    // animation: fadeIn 1s 3s both;
    // opacity: 0;
  }
}
</style>
