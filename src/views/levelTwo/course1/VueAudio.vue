<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 00:39:34
 * @LastEditTime: 2019-09-27 20:23:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="di main-wrap" >
    <!-- 这里设置了ref属性后，在vue组件中，就可以用this.$refs.audios来访问该dom元素 -->
    <audio

      ref="audios"
      class="dn"
      :src="url"
      :preload="audio.preload"
      @play="onPlay"
      @error="onError"
      @waiting="onWaiting"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"
    ></audio>

    <div class="top-button">
      <a class="refresh" @click="refresh()">
        <img src="../../../assets/images/commonImg/reset.png" alt />
      </a>
      <div class="titleList">
        <img v-if="titleCurr == 1" src="../../../assets/images/levelTwoCourse1/title1.png" alt />
        <img v-else-if="titleCurr == 2" src="../../../assets/images/levelTwoCourse1/title2.png" alt />
        <img v-else-if="titleCurr == 3" src="../../../assets/images/levelTwoCourse1/title3.png" alt />
        <img v-else-if="titleCurr == 4" src="../../../assets/images/levelTwoCourse1/title4.png" alt />
        <img v-else src="../../../assets/images/levelTwoCourse1/title5.png" alt />
      </div>
      <div class="sound">
        <!-- <div class="audio">
                <div v-for="(item, index) in audios" :key="index">
                  <VueAudio :theUrl="item.url" :theControlList="item.controlList"/>
                </div>
        </div>-->
        <div class="sound-button">

            <Slider v-show="!controlList.noVolume" v-model="volume" :format-tooltip="formatVolumeToolTip" @on-change="changeVolume" class="slider"></Slider>
          <!-- <div @click="startPlayOrPause">
            <img src="../../../assets/images/smallPlay.png" alt />
          </div> -->
          <div class="volume" @click="startMutedOrNot">
            <img v-if="audio.muted == true" src="../../../assets/images//commonImg/unsay.png" alt/>
            <img v-else src="../../../assets/images/commonImg/say.png" alt />
            <!-- <Slider class="slider volumeChild" v-show="!controlList.noVolume" v-model="volume" :format-tooltip="formatVolumeToolTip" @change="changeVolume" ></Slider> -->
          </div>
        </div>
      </div>
      <router-link :to="routerUrl" class="next-button" replace>
        <img  src="../../../assets/images/next.png" alt />
      </router-link>
      <div class="nav">
        <img @click="showNavList" src="../../../assets/images/nav.png" alt />
        <div v-show="navListShow" class="navList">
            <div @click="gonext(1)">
                <img src="../../../assets/images/levelTwoCourse1/menu1.png" alt="">
            </div>
            <div @click="gonext(2)" >
                <img src="../../../assets/images/levelTwoCourse1/menu2.png" alt="">
                </div>
            <div  @click="gonext(3)" >
                <img src="../../../assets/images/levelTwoCourse1/menu3.png" alt="">
                </div>
            <div @click="gonext(4)" >
                <img src="../../../assets/images/levelTwoCourse1/menu4.png" alt="">
                </div>
            <div @click="gonext(5)">
                <img src="../../../assets/images/levelTwoCourse1/menu5.png" alt="">
                </div>
        <div @click="gonext(6)"  :class="titleCurr == 6 ? 'select':''">
                <img src="../../../assets/images/commonImg/menu.png" alt="">
                </div>
</div>
      </div>

    </div>
    <!-- <div style="z-index: 9999999;background:#000;">
      <Button type="text" @click="startPlayOrPause">{{audio.playing | transPlayPause}}</Button>
      <Button v-show="!controlList.noSpeed" type="text" @click="changeSpeed">{{audio.speed | transSpeed}}</Button>
      <Button type="text" name="1">{{ audio.currentTime | formatSecond}}</Button>
      <Slider v-show="!controlList.noProcess" v-model="sliderTime" :tip-format="formatProcessToolTip" @on-change="changeCurrentTime" class="slider"></Slider>

      <Button type="text" name="1">{{ audio.maxTime | formatSecond }}</Button>

      <Button v-show="!controlList.noMuted" type="text" @click="startMutedOrNot">{{audio.muted | transMutedOrNot}}</Button>

      <Slider v-show="!controlList.noVolume" v-model="volume" :format-tooltip="formatVolumeToolTip" @change="changeVolume" class="slider"></Slider>

      <a :href="url" v-show="!controlList.noDownload" target="_blank" class="download" download>下载</a>
        <div style="width:1rem">


         <Input type="text" v-model="Min"/>
         <Button type="text" @click="setMin">定位秒数</Button>
        </div>

    </div> -->
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
import('../../../assets/css/twoCourse.css');
export default {
  name: "VueAudio",
  inject:['reload'],
  data() {
    return {
      url: "./static/mp3/level2-01_1.mp3",
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
      volume: 100,
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
    "audio.muted":{
      handler(newVal){
        // console.log('音量是否静音', newVal)
      }
    },
    "audioCurrentTime.randem": {
      handler(newVal,oldVal){
        if(newVal) {
          // alert(1);
          // this.$refs.audios.pause();
          // this.audio.waiting = true;
          // this.audio.waiting = true;
            this.$refs.audios.currentTime = this.audioCurrentTime.time;
            // console.log('执行的时间：',this.$refs.audios.currentTime,'当前播放状态',this.audio.waiting)
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
    if(index==6){
          this.$router.replace({path:'/menuTwo'})
      }else{
        this.$router.replace({path:'/course1page'+index})
      }

    },
    showNavList(){
      this.navListShow = !this.navListShow;
    },
    refresh(){
    //  //  location.reload()
      this.reload();
    },
    setMin() {
      // console.log(this.Min)
      this.$refs.audios.currentTime = this.Min;
    },
    setControlList () {
        let controlList = this.theControlList.split(' ')
        controlList.forEach((item) => {
          if(this.controlList[item] !== undefined){
            this.controlList[item] = true
          }
        })
      },
      changeSpeed() {
        let index = this.speeds.indexOf(this.audio.speed) + 1
        this.audio.speed = this.speeds[index % this.speeds.length]
        this.$refs.audioss.playbackRate = this.audio.speed
      },
      startMutedOrNot() {
        this.$refs.audios.muted = !this.$refs.audios.muted
        this.audio.muted = this.$refs.audios.muted
      },
      // 音量条toolTip
      formatVolumeToolTip(index) {
        return '音量条: ' + index
      },
      // 进度条toolTip
      formatProcessToolTip(index = 0) {
        index = parseInt(this.audio.maxTime / 100 * index)
        return '进度条: ' + realFormatSecond(index)
      },
      // 音量改变
      changeVolume(index = 0) {
        this.$refs.audios.volume = index / 100
        this.volume = index
        // console.log(this.volume)
      },
      // 播放跳转
      changeCurrentTime(index) {
        this.$refs.audios.currentTime = parseInt((index / 100) * this.audio.maxTime)
        this.sliderTime = parseInt((index / 100) * this.audio.maxTime)
      },
      startPlayOrPause() {
        return this.audio.playing ? this.pausePlay() : this.startPlay()
      },
      // 开始播放
      startPlay() {
        // console.log('this.audioCurrentTime',this.audioCurrentTime.time)
        // console.log('执行播放的时间：', this.$refs.audios.currentTime)
        // this.$refs.audios.currentTime =171
        this.$refs.audios.play()
      },
      // 暂停
      pausePlay() {
        this.$refs.audios.pause()
      },
      // 当音频暂停
      onPause () {
        // console.log('执行了暂停')
        this.audio.playing = false
      },
      // 当发生错误, 就出现loading状态
      onError () {
        // console.log('发生错误')
        this.audio.waiting = true
      },
      // 当音频开始等待
      onWaiting (res) {
        // console.log(res)

      },
      // 当音频开始播放
      onPlay (res) {
        // console.log(res)
        this.audio.playing = true
        this.audio.loading = false
        if(!this.controlList.onlyOnePlaying){
          return
        }
        let target = res.target
        let audios = document.getElementsByTagName('audio');
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
        this.audio.currentTime = res.target.currentTime;
        this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
      },
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
        // console.log('loadedmetadata')
        // console.log(res)
        // alert('加载完成')
        this.audio.waiting = false
        this.audio.maxTime = parseInt(res.target.duration)
        if(this.audioCurrentTime) {

          this.$refs.audios.currentTime = this.audioCurrentTime.time
          // console.log(this.$refs.audios.currentTime,'this.$refs.audios.currentTime')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
    display: block;
    width: 100%;
    height: auto;
}
.main-wrap {
  padding: 0px 15px;
}
.slider {
  // display: inline-block;
  width: 100px;
  position: relative;
  margin-left: 0.2rem;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
}
.titleList {
  width: 4.8rem;
  height: auto;
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 2.4rem;
    height: auto;
  }
}
.nav {
  width: 1.18rem;
  height: 1.47rem;
  position: relative;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .navList { z-index:22;
    padding: 0.5rem 0.4rem 0.1rem 0.3rem;
    color: #ffffff;
    position: fixed;
    font-size: 0.32rem;
    top: 5.75rem;
    right: 0;
    transform: translate(0, -50%);
    width: 4.22rem;
    height: 5.75rem;
    background: url(../../../assets/images/commonImg/menuBg.png);
    background-size: 100% 100%;
    display: flex;
    flex-direction:column;
    align-content: center;
    img {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 1000px) {
    padding-top: 0.2rem;
      top: 0.3rem;
      width: 1.2rem;
      height: 2.2rem;
      font-size: 0.14rem;
    }
    div {
      flex: 1;
      padding-left: 0.1rem;
      line-height: 2;
    }
    .select {
      background: #fee99c;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 0.5rem;
    height: auto;
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
  padding: 0 0.6rem;
  max-resolution: top 0.1rem;
  //针对手机
  @media screen and (max-width: 1000px) {
    // height: 0.3rem;
  padding: 0 0.3rem;
  }
  .refresh,
  .next-button {
    width: 1.18rem;
    // height: 1.07rem;

    @media screen and (max-width: 1000px) {
      width: 0.5rem;
      height: auto;
    }
  }
  .sound {
    background: url(../../../assets/images/commonImg/scendTop.png);
    background-size: 100% 100%;
    padding: 0 0.3rem;
    margin-top: 0.15rem;
    width: 6.77rem;
    height: 1.25rem;
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
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1000px) {
        align-items: center;
        .ivu-slider-wrap {
          margin: 0 !important;
        }
      }
      div{

        cursor: pointer;
      }
      .volume {
        position: relative;
        cursor: pointer;
        padding-left: 0.2rem;
        img {
          width: 0.43rem;
          height: 0.45rem;
        }
        .volumeChild {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 1rem;
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
        width: 77%;

        display: flex;
        align-items: center;
         @media screen and (max-width: 1000px) {
           display: flex;
           align-items: center;
         }
      }
      div {
        width: 0.48rem;
        height: 0.49rem;
        //针对手机
        @media screen and (max-width: 1000px) {
        width: 0.24rem;
        height: 0.24rem;
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
