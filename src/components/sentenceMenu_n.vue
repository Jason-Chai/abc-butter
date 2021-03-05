<template>
  <div class="di main-wrap sentenceMN">
    <!-- 这里设置了ref属性后，在vue组件中，就可以用this.$refs.audios来访问该dom元素 -->
    <audio
      ref="audios"
      class="dn"
      :src="theUrl"
      :preload="audio.preload"
      @play="onPlay"
      @error="onError"
      @waiting="onWaiting"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata" @canplay="canplay"
      :action="audioAction"
      controls
    ></audio>

    <div class="top-button">
      <a class="refresh" @click="refresh()">
        <img src="../assets/images/replay13.png" alt />
      </a>
      <div class="titleList">
        <img v-if="titleCurr == 1" src="../assets/images/sentence_n.png" alt />
        <img v-else-if="titleCurr == 2" src="../assets/images/sing.png" alt />
        <img v-else-if="titleCurr == 3" src="../assets/images/lookCircle.png" alt />
        <img v-else-if="titleCurr == 4" src="../assets/images/sentence.png" alt />
        <img v-else-if="titleCurr == 5" src="../assets/images/lookOrder.png" alt />
        <img v-else-if="titleCurr == 6" src="../assets/images/vocabulary2.png" alt />
        <img v-else src="../assets/images/sentence_n.png" alt />
      </div>
      <div class="sound">
        <!-- <div class="audio">
                <div v-for="(item, index) in audios" :key="index">
                  <VueAudio :theUrl="item.url" :theControlList="item.controlList"/>
                </div>
        </div>-->
       <div class="sound-button">
          <Slider v-show="!controlList.noVolume" v-model="volume" :tip-format="hideFormat" :format-tooltip="formatVolumeToolTip" @on-change="changeVolume" class="slider"></Slider>

          <div class="volume" @click="startMutedOrNot">
            <img v-if="audio.muted == true" src="../assets/images/say13-off.png" alt />
            <img v-else src="../assets/images/say13.png" alt />
          </div>
        </div>
      </div>
      <router-link :to="routerUrl" class="next-button" replace>
        <img src="../assets/images/next13.png" alt />
      </router-link>
      <div class="nav">
        <img @click="showNavList" src="../assets/images/menu13.png" class="menu" alt />
        <div :class="navListShow ? 'navListOn':'navListOff'" class="navList">
           <div v-for="(item,index) in menuList" :key="index">
                <router-link :to="item.routerUrl" replace> <img :src="item.imgSrc" /></router-link>
          </div>
        </div>
      </div>
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

export default {
  name: "VueAudio",
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
      audioAction: {
					method: 'pause'
			},
      sliderTime: 0,
      volume: 90,
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
      }
    };
  },
  props: {
    routerUrl: {
      type: String,
      required: true
    },
    theUrl: {
      type: String,
      required: true
    },
    theSpeeds: {
      type: Array,
      default() {
        return [1, 1.5, 2];
      }
    },
    theControlList: {
      type: String,
      default: ""
    },
    titleCurr: Number,
    audioCurrentTime: Object,
    menuList:{
      type: Array,
    },
  },
  watch: {
    "audio.muted": {
      handler(newVal) {
        //console.log("音量是否静音", newVal);
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
    gonext(index) {
      //console.log(index);
      if (index == 6) {
        this.$router.replace({ path: "/menu" });
      } else {
        this.$router.replace({ path: "/apage" + index });
      }
    },
    showNavList() {
      this.navListShow = !this.navListShow;
    },
    refresh() {
      this.reload();
    },
    setMin() {
      //console.log(this.Min);
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
    hideFormat(){
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
      //console.log("执行了暂停");
      this.audio.playing = false;
    },
    // 当发生错误, 就出现loading状态
    onError() {
      //console.log("发生错误");
      this.audio.waiting = true;
    },
    // 当音频开始等待
    onWaiting(res) {
      //console.log(res);
    },
    // 当音频开始播放
    onPlay(res) {
      // alert(this.audio.playing);
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
      if (this.$refs.audios.currentTime >= this.audioCurrentTime.time + this.audioCurrentTime.stopTime) {
            // alert('timeupdate stop')
            this.$refs.audios.pause()
        }
      this.audio.currentTime = res.target.currentTime;
      this.sliderTime = parseInt(
        (this.audio.currentTime / this.audio.maxTime) * 100
      );
    },
    // 当加载语音流元数据完成后，会触发该事件的回调函数
    // 语音元数据主要是语音的长度之类的数据
    onLoadedmetadata(res) {
      //console.log("loadedmetadata");
      //console.log(res);
      // alert('加载完成')
      this.audio.waiting = false;
      this.audio.maxTime = parseInt(res.target.duration);
      if (this.audioCurrentTime) {
        this.$refs.audios.currentTime = this.audioCurrentTime.time;
        // console.log(this.$refs.audios.currentTime,'this.$refs.audios.currentTime')
      }
    },
    audioAutoPlay(id){
      var audio = document.getElementsByTagName(id),
          play = function(){
          alert(audio);
          audio.play();
          document.removeEventListener("touchstart",play, false);
      };
      audio.play();
      document.addEventListener("WeixinJSBridgeReady", function () {
        alert('weixin')
          play();
      }, false);
      document.addEventListener("touchstart",play, false);
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
  margin-top: 20/@rem;
}
.slider {
   position: relative;
   width: 314 /@rem !important;
}
.titleList {
  width: 473 / @rem;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.nav {
  position: relative;
  width: 174 / @rem;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .navList {
      z-index: 22;
      width: 528/@rem;
      height: 493/@rem;
      color: #ffffff;
      position: absolute;
      font-size: 0.32rem;
      top: 187 / @rem;
      right: 0;
      background: url(../assets/images/menuBg13.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-top:40/@rem;padding-bottom: 50/@rem;

      div {
        width: 453/@rem;
        height: 77/@rem;
        display: block;
        // background: url(../assets/images/menuItem4bg.png) no-repeat;
        // background-size: 100% 100%;
        margin:  0 auto;
        img{
          width: 100%;
          height: 100%;
        }
        &:first-child{
          // margin-top: 50/@rem;
        }
      }
    .select {
    }
     &.navListOn {
        display: flex;
        animation: bounceInRight 1s both;
      }
      &.navListOff {
        display:none;
      }
  }
}
.di {
  // display: inline-block;
}
.download {
  color: #409eff;
  margin-left: 15px;
}
.dn {
  display: none;
}
.top-button {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 140 / @rem 0 164/@rem;
  //针对手机
  @media screen and (max-width: 1000px) {
    // height: 0.3rem;
    padding: 0 0.3rem;
  }
  .refresh,
  .next-button ,.menu{
    width: 139 / @rem;
    display: inline-block;
    img{
      display: inline-block;
      width: 100%;
    }
  }
  .sound {
    background: url(../assets/images/soundTop13.png);
    background-size: cover;
    padding: 0 0.3rem;
    width: 489 / @rem;
    height: 101 / @rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    //针对手机
    @media screen and (max-width: 1000px) {
      // height: 100%;
      // width: 2.65rem;
      background-size: 100% 100%;
    }
    .audio {
      width: 3.25rem;
      height: 0.31rem;
    }
    .sound-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1000px) {
        align-items: center;
        .ivu-slider-wrap {
          margin: 0 !important;
        }
      }
      div {
        cursor: pointer;
      }
      .volume {
        position: relative;
        cursor: pointer;
        width: 47/@rem;
        .volumeChild {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 47 / @rem;
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
        width: 60%;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1000px) {
          display: flex;
          align-items: center;
        }
      }
      div {
        width: 0.48rem;
        //针对手机
        @media screen and (max-width: 1000px) {
          // width: 0.24rem;
          // height: 0.24rem;
        }
        //   display: inline-block;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
