<template>
  <div class="div-bg">
    <img
      src="../../../assets/images/commonImg/video/video-back.png"
      class="video-back"
      @click="jump"
      alt
    >
    <div class="video-bg">
      <div class="sound">
        <input
          type="range"
          min="0"
          max="100"
          class="soundProgress"
          v-model="volume"
          @input="changeSound"
        >
      </div>
      <div class="video-border"></div>
      <video class="video-player" ref="video" @timeupdate="videoTimeUpdate()" :src="initVideo.url"  preload="auto"></video>
      <div class="video-control">
        <input
          type="range"
          @input="mySlidechange"
          min="0"
          max="100"
          class="videoProgress"
          v-model="vProgress"
        >
        <img
          src="../../../assets/images/commonImg/video/video-pause.png"
          class="video-pause"
          @click="pauseVideo"
          alt
        >
        <img
          src="../../../assets/images/commonImg/video/video-play.png"
          class="video-play"
          @click="playVideo"
          alt
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vProgress: 0, //video进度
      volume: 65,
      isPlay: false,
        initVideo: {
        url: "./static/mp4/level1-15-intro.mp4"
      }
    };
  },
  methods: {
    jump() {
      this.$router.replace("/index?id=L1Course15");
    },
    playVideo() {
       this.isPlay = !this.isPlay;
      this.$refs.video.play();
    },
    pauseVideo() {
       this.isPlay = !this.isPlay;
      this.$refs.video.pause();
    },
    mySlidechange() {
      var met = this.vProgress / 100;
      var duration = this.$refs.video.duration;
      var mse = met * duration;
      this.$refs.video.currentTime = mse;
    },
    videoTimeUpdate() {
      var currTime = this.$refs.video.currentTime || 0.1;
      var duration = this.$refs.video.duration;
      var pre = currTime / duration;
      this.vProgress = pre * 100;
    },
    //格式化时间
    getFormatVideoTime(time) {
      var time = time;
      var m = parseInt((time % 3600) / 60),
        s = parseInt(time % 60);
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    },
    changeSound() {
      this.$refs.video.volume = this.volume / 100;
    }
  },
  mounted() {
    this.$refs.video.volume = this.volume / 100;
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/index";
@rem: 128rem;
.div-bg {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/commonImg/pagevideobg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  .video-back {
    .scale(118, 149);
    position: absolute;
    top: 0;
    right: 66 / @rem;
  }
  .video-bg {
    width: 1421 / @rem;
    height: 904 / @rem;
    margin-top: 116 / @rem;
    position: relative;
    .video-border {
      width: 100%;
      height: 100%;
      .scale(1421, 904);
      .pos-a(0, 0, 3);
      background: url("../../../assets/images/commonImg/video/video-bg.png")
        no-repeat;
      background-size: 100% 100%;
      pointer-events: none;
    }
    .sound {
      .scale(330, 49);
      z-index: 4;
      position: absolute;
      bottom: 250 / @rem;
      left: -135 / @rem;
      .soundProgress {
        -webkit-appearance: none;
        width: 330 / @rem;
        height: 49 / @rem;
        background: url("../../../assets/images/commonImg/video/video-pro.png")
          no-repeat;
        transform: rotate(-90deg);
        background-size: 100% 100%;
      }
      .soundProgress::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 68 / @rem;
        width: 68 / @rem;
        transform: rotate(90deg);
        background: url("../../../assets/images/commonImg/video/voice.png")
          no-repeat;
        background-size: 100% 100%;
      }
    }
    .video-control {
      width: 100%;
      padding: 0 15%;
      height: 105 / @r;
      background-color: #6b6b6b;
      position: absolute;
      bottom: 40 / @rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      .videoProgress[type="range"] {
        -webkit-appearance: none;
        width: 725 / @rem;
        height: 18 / @rem;
        background-color: #c7c7c7;
        border-radius: 10px;
      }
      .videoProgress[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 25px;
        width: 25px;
        margin-top: -5px;
        background: #1dacff;
        border-radius: 50%;
        border: solid 0.125em #2b94ff;
        box-shadow: 0 0.125em 0.125em #3b4547;
      }

      .video-play,
      .video-pause {
        .scale(78, 81);
      }
      .video-pause,.video-play {
        margin-left: 60 / @rem;
        margin-right: 35 / @rem;
      }
    }
    .video-player {
      width: 1301 / @rem;
      height: 719 / @rem;
      .pos-a(40, 60, 2);
      background-color: #000;
    }
  }
}
</style>