<template>
  <div class="di main-wrap pdfMenu">
    <!-- 这里设置了ref属性后，在vue组件中，就可以用this.$refs.audios来访问该dom元素 -->
    <audio ref="audios" class="dn" :src="theUrl" :preload="audio.preload" @play="onPlay" @error="onError" @waiting="onWaiting"
      @pause="onPause" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" @canplay="canplay"></audio>

    <!-- <div class="canvasMain">
        <canvasDraw></canvasDraw>
    </div> -->
    <div class="top-button">
      <div class="titleList">
        <img :src="templateData.titleImg">
      </div>
      <div class="play-menu" @click="startMutedOrNot">
        <img v-if="audio.muted == true" src="../assets/images/commonImg/pdf-page/mute-off.png">
        <img v-else src="../assets/images/commonImg/pdf-page/mute-on.png">
      </div>
      <div class="sound">
        <div class="sound-button">
          <Slider v-show="!controlList.noVolume" v-model="volume" :tip-format="hideFormat" :format-tooltip="formatVolumeToolTip"
            @on-change="changeVolume" class="slider"></Slider>
        </div>
      </div>
      <router-link class="icon-back" :to="templateData.backMenu" replace>
        <img src="../assets/images/commonImg/pdf-page/icon-back.png">
      </router-link>
      <div v-if="!templateData.autoPlay" class="icon-trans" @click="transShow"></div>
      <div v-if="!templateData.autoPlay" class="icon-ques" @click="quesShow"></div>
      <div v-if="!templateData.autoPlay" class="icon-play"></div>
      <router-link v-if="!templateData.autoPlay" class="icon-autoplay" :to="templateData.autoPageUrl" replace></router-link>
      <router-link v-if="templateData.autoPlay" class="icon-pauseplay" :to="templateData.manualPageUrl" replace></router-link>
    </div>
  </div>
</template>

<script>
  function realFormatSecond(second) {
    var secondType = typeof second;
    if (secondType === "number" || secondType === "string") {
      second = parseInt(second);
      var hours = Math.floor(second / 3600);
      second = second - hours * 3600;
      var mimute = Math.floor(second / 60);
      second = second - mimute * 60;
      return (
        hours + ":" + ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2)
      );
    } else {
      return "0:00:00";
    }
  }
  import canvasDraw from "../components/canvasDraw";
  export default {
    inject:['reload'],
    data() {
      return {
        // url: "./static/mp3/audio-a.mp3",
        Min: 0,
        navListShow: false,
        audio: {
          currentTime: this.audioCurrentTime.time,
          maxTime: 0,
          playing: false,
          muted: false,
          speed: 1,
          waiting: true,
          preload: "auto"
        },
        sliderTime: 0,
        volume: 85,
        speeds: this.theSpeeds,
        controlList: {
          // 不显示下载
          //   noDownload: false,
          // 不显示静音
          noMuted: false,
          // 不显示音量条
          noVolume: false,
          // 不显示进度条
          noProcess: false,
          // 只能播放一个
          onlyOnePlaying: false
          // 不要快进按钮
          //   noSpeed: false
        },
        transFlag: false,
        quesFlag: false,
      };
    },
    components: {
      canvasDraw
    },
    props: {
      templateData: {
        type: Object,
        required: true
      },
      theUrl: {
        type: String,
        required: true
      },
      theSpeeds: {
        type: Array,
        default () {
          return [1, 1.5, 2];
        }
      },
      theControlList: {
        type: String,
        default: ""
      },
      menuList: {
        type: Array,
      },
      transFlags: {
        type: Boolean,
        default: false
      },
      quesFlags: {
        type: Boolean,
        default: false
      },
      titleCurr: Number,
      audioCurrentTime: Object
    },
    created() {
      // if(this.audioCurrentTime > 0) {
      //   this.audio.playing = true;
      //   this.$refs.audios.currentTime = this.audioCurrentTime;
      //   this.startPlay();
      // } else {
      //   this.audio.playing = true;
      //   this.startPlay();
      // }
    },
    watch: {
      "templateData.transFlag": {
        handler(newVal, oldVal) {
          this.transFlag = newVal;
          // console.log("transFlags:", newVal,oldVal);
        }
      },
      "templateData.quesFlag": {
        handler(newVal, oldVal) {
          this.quesFlag = newVal;
          // console.log("quesFlags:", newVal,oldVal);
        }
      },
      "quesFlags": {
        handler(newVal, oldVal) {
          this.quesFlag = newVal;
          // console.log("quesFlags:", newVal,oldVal);
        }
      },
      "audio.muted": {
        handler(newVal) {
          // console.log("音量是否静音", newVal);
        }
      },
      "audioCurrentTime.randem": {
        handler(newVal, oldVal) {
          if (newVal) {
            // alert(1);
            // this.$refs.audios.pause();
            // this.audio.waiting = true;
            // this.audio.waiting = true;
            this.$refs.audios.currentTime = this.audioCurrentTime.time;
            // console.log(
            //   "执行的时间：",
            //   this.$refs.audios.currentTime,
            //   "当前播放状态",
            //   this.audio.waiting
            // );
            this.$refs.audios.play();
            // this.startPlay();
          }
        }
      },

      "audio.waiting": {
        handler(newVal) {
          if (newVal == false) {
            this.$refs.audios.currentTime = this.audio.currentTime;
          }
        }
      }
    },
    methods: {
      refresh() {
        this.reload();
      },
      setMin() {
        // console.log(this.Min);
        this.$refs.audios.currentTime = this.Min;
      },
      setControlList() {
        let controlList = this.theControlList.split(" ");
        controlList.forEach(item => {
          if (this.controlList[item] !== undefined) {
            this.controlList[item] = true;
          }
        });
      },
      changeSpeed() {
        let index = this.speeds.indexOf(this.audio.speed) + 1;
        this.audio.speed = this.speeds[index % this.speeds.length];
        this.$refs.audioss.playbackRate = this.audio.speed;
      },
      startMutedOrNot() {
        this.$refs.audios.muted = !this.$refs.audios.muted;
        this.audio.muted = this.$refs.audios.muted;
      },
      hideFormat() {
        return null;
      },
      // 音量条toolTip
      formatVolumeToolTip(index) {
        return "音量条: " + index;
      },
      // 进度条toolTip
      formatProcessToolTip(index = 0) {
        index = parseInt((this.audio.maxTime / 100) * index);
        return "进度条: " + realFormatSecond(index);
      },
      // 音量改变
      changeVolume(index = 0) {
        this.$refs.audios.volume = index / 100;
        this.volume = index;
      },
      // 播放跳转
      changeCurrentTime(index) {
        this.$refs.audios.currentTime = parseInt(
          (index / 100) * this.audio.maxTime
        );
        this.sliderTime = parseInt((index / 100) * this.audio.maxTime);
      },
      startPlayOrPause() {
        return this.audio.playing ? this.pausePlay() : this.startPlay();
      },
      // 开始播放
      startPlay() {
          this.$refs.audios.currentTime = this.audioCurrentTime.time;
          this.$refs.audios.play()
      },
      canplay(){
        // 不是ios，不进
        var that = this;
        if(this.util.isIos()){
            this.$refs.audios.currentTime = this.audioCurrentTime.time;
            this.$refs.audios.play()
        }
      },
      // 暂停
      pausePlay() {
        this.$refs.audios.pause();
      },
      // 当音频暂停
      onPause() {
        // console.log("执行了暂停");
        this.audio.playing = false;
      },
      // 当发生错误, 就出现loading状态
      onError() {
        console.log("发生错误");
        this.audio.waiting = true;
      },
      // 当音频开始等待
      onWaiting(res) {
        // console.log(res);
      },
      // 当音频开始播放
      onPlay(res) {
        // console.log(res);
        this.audio.playing = true;
        this.audio.loading = false;
        if (!this.controlList.onlyOnePlaying) {
          return;
        }
        let target = res.target;
        let audios = document.getElementsByTagName("audio");
        // [...audios].forEach((item) => {
        //   if(item !== target){
        //     item.pause()
        //   }
        // })
      },
      // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
      onTimeupdate(res) {
        // console.log('timeupdate')
        // console.log(res)
        // if (this.$refs.audios.currentTime >= this.audioCurrentTime.time + this.audioCurrentTime.stopTime) {
        //     // alert('timeupdate stop')
        //     this.$refs.audios.pause()
        // }
        this.audio.currentTime = res.target.currentTime;
        this.sliderTime = parseInt(
          (this.audio.currentTime / this.audio.maxTime) * 100
        );
      },
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
        // console.log("loadedmetadata");
        // console.log(res);
        // alert('加载完成')
        this.audio.waiting = false;
        this.audio.maxTime = parseInt(res.target.duration);
        if (this.audioCurrentTime) {
          this.$refs.audios.currentTime = this.audioCurrentTime.time;
          // console.log(this.$refs.audios.currentTime,'this.$refs.audios.currentTime')
        }
      },
      transShow() {
        this.transFlag = !this.transFlag;
        this.$emit('sendChildDatatrans', this.transFlag);
      },
      quesShow() {
        this.quesFlag = !this.quesFlag;
        this.$emit('sendChildDataques', this.quesFlag);
      }
    },
    filters: {
      formatSecond(second = 0) {
        return realFormatSecond(second);
      },
      transPlayPause(value) {
        return value ? "暂停" : "播放";
      },
      transMutedOrNot(value) {
        return value ? "放音" : "静音";
      },
      transSpeed(value) {
        return "快进: x" + value;
      }
    },
    created() {
      this.setControlList();
    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/css/index";
  @rem: 128rem;

  .main-wrap {
    width: 100%;
    height: 100%;
  }

  .pdfMenu {
    background: url("../assets/images/commonImg/pdf-page/pdf-bg.png");
    background-size: 1920/@rem 1280/@rem;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
  }

  .canvasMain {
    position: absolute;
    z-index: 102;
    width: 100%;
    height: 100%;

    &::after {
      position: relative;
    }
  }

  .top-button {
    position: relative;
    width: 100%;

    .titleList {
      .scale(657, 124);
      .pos-a(28, 0, 3);

      // width: 526 / @rem;
      // height: 121/@rem;
      img {
        width: 100%;
        display: inline-block;
      }
    }

    .play-menu {
      .scale(100, 94);
      .pos-a(41, 1070, 3);
      cursor: pointer;

      img {
        width: 100%;
        display: block;
      }
    }
    .icon-back {
      .scale(100, 94);
      .pos-a(41, 661, 3);
      cursor: pointer;
      img {
        width: 100%;
        display: block;
      }
    }

    .sound {
      background: url(../assets/images/commonImg/pdf-page/soundTop9-off.png);
      background-size: cover;
      // padding: 0 0.3rem;
      .scale(305, 30);
      .pos-a(64, 761, 3);

      .audio {
        width: 3.25rem;
        height: 0.31rem;
      }

      .sound-button {
        width: 100%;
        height: 100%;
        display: block;
        justify-content: space-between;

        div {
          cursor: pointer;
        }

        .volume {
          position: relative;
          cursor: pointer;
          .scale(45, 41);
          margin-top: 14 / @rem;

          .volumeChild {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 45 / @rem;
            transform: translate(-50%, 0);
            transform: rotate(-90deg);
          }
        }

        .volumeStop {
          &:after {
            content: "\\";
            position: absolute;
            font-size: 0.43rem;
            color: #000;
            // font-weight: bold;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        div:first-child {
          width: 100%;
          height: 100%;
          display: block;
        }

        div {
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .icon-trans {
      .scale(41, 41);
      .pos-a(62, 1614, 3);
      cursor: pointer;
      background: url(../assets/images/commonImg/pdf-page/icon-trans.png);
      background-size: cover;
    }

    .icon-ques {
      .scale(41, 41);
      .pos-a(62, 1674, 3);
      cursor: pointer;
      background: url(../assets/images/commonImg/pdf-page/icon-ques.png);
      background-size: cover;
    }
    .icon-play {
      .scale(41, 41);
      .pos-a(62, 1734, 3);
      background: url(../assets/images/commonImg/pdf-page/icon-play.png);
      background-size: cover;
    }
    @media screen and (max-width: 1000px) {
        .icon-trans,.icon-ques,.icon-play{
          width: 30px;
          height: 30px;
          top: 50/@rem;
        }
        .icon-trans{ left: 1434/@rem; }
        .icon-ques{ left: 1584/@rem; }
        .icon-play{ left: 1734/@rem; }
    }
    .icon-autoplay {
      .scale(120, 89);
      .pos-a(234, 1762, 3);
      cursor: pointer;
      background: url(../assets/images/commonImg/pdf-page/icon-autoplay.png);
      background-size: cover;
    }

    .icon-pauseplay {
      .scale(79, 89);
      .pos-a(331, 1762, 3);
      cursor: pointer;
      background: url(../assets/images/commonImg/pdf-page/icon-pauseplay.png);
      background-size: cover;
    }
  }
</style>
