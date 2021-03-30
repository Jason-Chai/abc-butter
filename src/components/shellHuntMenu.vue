<template>
  <div class="di main-wrap shM">
    <audio ref="audios" class="dn" :src="theUrl" :preload="audio.preload" @play="onPlay" @error="onError" @waiting="onWaiting"
      @pause="onPause" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" @canplay="canplay"></audio>
  
    <div class="ani-bg"><img src="../assets/images/commonImg/anibg2.png"></div>
    <div class="tips-button"><img src="../assets/images/commonImg/tips2.png"></div>
    <div class="menu-content">
        <!--标题-->
        <div class="titleList">
          <img src="../assets/images/commonImg/shellHunt.png" alt />
        </div>
         <router-link :to="routerUrl" class="back-button" replace>
          <img src="../assets/images/commonImg/backBtn.png" alt />
        </router-link>
         <router-link :to="routerUrl" class="next-button" replace>
          <img src="../assets/images/commonImg/next.png" alt />
        </router-link>
         <div class="volume" @click="startMutedOrNot">
              <img v-if="audio.muted == true" src="../assets/images/commonImg/say-off.png" alt />
              <img v-else src="../assets/images/commonImg/say.png" alt />
         </div>
        <div class="sound">
           <Slider v-show="!controlList.noVolume" v-model="volume" :tip-format="hideFormat" :format-tooltip="formatVolumeToolTip"
              @on-change="changeVolume" class="slider"></Slider>
        </div>
        <a class="refresh" @click="refresh()">
          <img src="../assets/images/commonImg/refresh.png" alt />
        </a>
        <div class="nav">
          <img @click="showNavList" src="../assets/images/commonImg/menu.png" class="menu" alt />
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
        sliderTime: 0,
        volume: 70,
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
        default () {
          return [1, 1.5, 2];
        }
      },
      theControlList: {
        type: String,
        default: ""
      },
      menuList:{
        type: Array,
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
          this.$router.replace({
            path: "/menu"
          });
        } else {
          this.$router.replace({
            path: "/apage" + index
          });
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
      // 音量条toolTip
      formatVolumeToolTip(index) {
        return "音量条: " + index;
      },
      hideFormat() {
        return null;
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
        //console.log(this.volume);
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
        //console.log(res);
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
        // //console.log('timeupdate')
        // //console.log(res)
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
          // //console.log(this.$refs.audios.currentTime,'this.$refs.audios.currentTime')
        }
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
  @import "../assets/css/menuCommon";
  @rem: 128rem;

  .ani-bg{
    .scale(499, 390);
    position: absolute;
    top: 20/@rem;
    right: 105/@rem;
    z-index: 3;
    // .pos-a(526, -100, 3);
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

</style>
