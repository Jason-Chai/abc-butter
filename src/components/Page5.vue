
<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 17:51:10
 * @LastEditTime: 2019-09-30 10:22:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="main">
    <div class="bg-div">
      <div class="canvas">
        <div class="canvasMain">
          <iframe :src="iframeUrl"></iframe>
          <img class="thisIsA" src="../assets/images/thisIsA.png" alt="">
           <img class="thisIsA1" src="../assets/images/thisIsA1.png" alt="">
          <video-player :class="isShowVideo" class="video-player"
            @play="onPlayerPlay($event)"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @ended="onPlayerEnded($event)"
          ></video-player>


        </div>
      </div>
      <img class="bg" src="../assets/images/bg2.jpg" />
      <div class="audio">
        <VueAudio
          ref="audioss"
          :audioCurrentTime="playtime"
          :theUrl="audios.url"
          :theControlList="audios.controlList"
          :routerUrl="router"
          :titleCurr="5"
        />
      </div>
      <div class="xiong">
        <img src="../assets/images/xiong/A/p4.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import VueAudio from "./VueAudio";
export default {
  name: "",
  components: {
    VueAudio
  },
  data() {
    return {
      iframeUrl:'',
      //视频隐藏
      isShowVideo:'isShowVideo',
      audios: {
        url: "./static/mp4/z2.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
     playtime: {
        time: 193.2,
        randem: Math.random(1000)
      },
      router: "/menu",
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          src: './static/mp4/z1.mp4'//url地址
          // src: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
          // src: "" //url地址
        }],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // controlBar: {
        //   timeDivider: false,
        //   durationDisplay: false,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true  //全屏按钮
        // }
    }}
  },
  mounted() {
      if(this.IsPC()){
          this.iframeUrl = './static/draw/index.html';
      }else{
           this.iframeUrl = 'http://47.92.130.116:3021';
      }
   let that = this;
let playTime = window.setTimeout(() => {
  that.$refs.audioss.startPlay();
  clearTimeout(playTime)
}, 100);
let stopTime = window.setTimeout(() => {
  that.$refs.audioss.pausePlay();
  clearTimeout(stopTime)
}, 3000);
  },
  methods:{
    //开始播放
    onPlayerPlay(a){
        this.playtime.randem = Math.random(1000);
        this.playtime.time = '195.8';
        this.$refs.audioss.startPlay();
        let stopTT = window.setTimeout(() => {
          this.$refs.audioss.pausePlay();
          clearTimeout(stopTT)
        }, 18730);

    },
    onPlayerEnded(a){
        this.isShowVideo = 'isShowVideo1'
    },
    IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
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

<style lang="scss" scoped>
.isShowVideo{
  display: block;
}
.isShowVideo1{
  display: none;
}
.video-player{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
}
iframe {
  width: 14.88rem;
  height: 7.71rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  @media screen and (max-width: 1000px) {
        width: 5.5rem;
        height: inherit;
    }
}
.bg {
  opacity: 0;
  animation: fadeIn 1s both;
}
.canvas {
  animation: fadeIn 1s 2s both;
  position: absolute;
  width: 14.88rem;
  height: 7.71rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  background-image: url("../assets/images/scendBg.png");
  background-size: 100% 100%;
  display: flex;
  justify-items: center;
  z-index: 3;
  padding: .5rem;
  box-sizing: border-box;
  //针对手机
    @media screen and (max-width: 1000px) {
           width: 5.5rem;
          height: 2.4rem;
    }
}
.canvasMain {
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    position: relative;
  }
  .thisIsA{

     width: 3.2rem;
     height: 3.74rem;
     display: block;
     @media screen and (max-width: 1000px) {
        width: 1.2rem;
        height: inherit;
    }
  }
  .thisIsA1{
      width: 2.64rem;
      height: 2.75rem;
      @media screen and (max-width: 1000px) {
        width: 1.21rem;
        height: inherit;
    }
  }

}
.bg-div {
  position: relative;
  top: 0;
  right: 0;
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
