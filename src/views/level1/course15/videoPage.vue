<template>
  <div class="div-bg">
    <img src="../../../assets/images/commonImg/video/video-back.png" class="video-back" @click="jump" alt>
    <div class="video-bg">
      <div class="sound">
        <input type="range" min="0" max="100" class="soundProgress" v-model="volume" @input="changeSound">
      </div>
      <div class="video-border"></div>
      <video class="video-player" ref="video" @timeupdate="videoTimeUpdate()" :src="initVideo.url"  preload="auto"></video>
      <div class="video-control">
        <input type="range" @input="mySlidechange" min="0" max="100" class="videoProgress" v-model="vProgress">
        <img src="../../../assets/images/commonImg/video/video-pause.png" class="video-pause" v-if="isPlay"  @click="pauseVideo" alt>
        <img src="../../../assets/images/commonImg/video/video-play.png" class="video-play" v-if="!isPlay" @click="playVideo" alt>
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
  @import "../../../assets/css/video";
  @rem: 128rem;
</style>
