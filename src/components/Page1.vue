<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 03:01:08
 * @LastEditTime: 2019-09-26 17:57:17
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div class="main">
    <div class="bg-div">
      <div class="canvas">
        <div class="canvasMain">
         <div :class="AAbounceIn2 == true&&AbounceIn == true?'AAbounceIn2':''">
           <img ref="appleLetterListA" @click="beginMusicAndEnd('A','A')"  class="thisIsA" :class="AbounceIn == true?'AbounceIn':''" src="../assets/images/pL/pageA.png" alt />
           </div>
          <div :class="aasbounceIn2 == true&&abounceIns == true?'aasbounceIn2':''">
            <img ref="appleLetterListaa" @click="beginMusicAndEnd('aa','aa')"  class="thisIsA1" :class="abounceIns == true?'abounceIns':''" src="../assets/images/pL/pageaa.png" alt />
            </div>
        </div>
      </div>
      <img class="bg" src="../assets/images/page1Bg.png" />
      <div class="audio">
        <VueAudio
          ref="audios"
          :audioCurrentTime="playtime"
          :theUrl="audios.url"
          :theControlList="audios.controlList"
          :routerUrl="router"
          :titleCurr="1"
        />
      </div>
      <div class="xiong">
        <img src="../assets/images/xiong/A/p1.png" alt />
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
      //视频隐藏
      isShowVideo: "isShowVideo",
      audios: {
        url: "./static/mp4/z2.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
      playtime: {
        time: 11.6,
        randem: Math.random(1000)
      },
      router: "apage2",
      AbounceIn: false,
      AAbounceIn2: false,
      abounceIns: false,
      aasbounceIn2: false,
      musicTimeList:{
        A: {
        beginTime: 26.5,
        endTime: 2.5
        },
        aa: {
        beginTime: 29.1,
        endTime: 2.8
        },
      },
      timerList:[]
    };
  },
  mounted() {
    let that = this;
    let playTime = window.setTimeout(() => {
      that.$refs.audios.startPlay();
      clearTimeout(playTime)
    }, 100);
    this.timerList[0] = window.setTimeout(() => {
      that.AbounceIn = true;
      //console.log('第一次执行大A', that.AbounceIn)
      clearTimeout(this.timerList[0])
    }, 6000);
    this.timerList[1] = window.setTimeout(() => {
      that.AAbounceIn2 = true;
      //console.log('第二次执行大A', that.AAbounceIn2)
      clearTimeout(this.timerList[1])
    }, 16250);
    this.timerList[2] = window.setTimeout(() => {
      that.abounceIns = true;
      //console.log('第一次执行小A', that.abounceIns)
      clearTimeout(this.timerList[2])
    }, 10450);
    this.timerList[3] = window.setTimeout(() => {
      that.aasbounceIn2 = true;
      //console.log('第二次执行小A', that.aasbounceIn2)
      clearTimeout(this.timerList[3])
    }, 18600);
    let stopTime = window.setTimeout(() => {
      that.$refs.audios.pausePlay();
      clearTimeout(stopTime)
    }, 20380);
  },
  methods: {
    onPlayerEnded(a) {
      this.isShowVideo = "isShowVideo1";
    },
    beginMusicAndEnd(item,index) {
      let that = this;
      that.clearTimer();
      //console.log('传入的数据：', index)
      if(index != undefined) {
        if(index == 'A') {
          clearTimeout(this.timerList[1])
        } else {
          clearTimeout(this.timerList[3])
        }
        this.AbounceIn = false;
        this.abounceIns = false;
        that.$refs.appleLetterListA.style.opacity = '1'
        that.$refs.appleLetterListaa.style.opacity = '1'
        that.$refs['appleLetterList'+index].style.animation = 'flash 1s 0s both'
        that.timerList[0] = setTimeout(() => {
          that.$refs['appleLetterList'+index].style.animation = ''
          // that.clearTimer();
        }, 1000);

      }
      this.playtime.randem = Math.random(1000);
      this.playtime.time = this.musicTimeList[item].beginTime;
      let stop = this.musicTimeList[item].endTime * 1000;
      // this.$refs.audios.startPlay();
      that.flag = true;
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audios.pausePlay();
        that.clearTimer();
      }, stop);
    },

    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/css/AaCommon.scss';
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
  width: 14.88rem;
  height: 7.71rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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
    //针对手机
    @media screen and (max-width: 1000px) {
      width: auto;
      height: auto;
    }
  top: 13%;
  left: 50%;
  transform: translate(-50%,0);
  /*background-image: url("../assets/images/scendBg.png");*/
  background-size: 100% 100%;
  display: flex;
  justify-items: center;
  z-index: 3;
  padding: 0.5rem;
  box-sizing: border-box;
}
.AbounceIn{
    opacity: 0;
  animation: fadeInDown 1s both;
}
.abounceIns {
    opacity: 0;
  animation: fadeInDown 1s both;
}
.AAbounceIn2 {
  animation: flash 1s both;
}
.aasbounceIn2{
  animation: flash 1s both;
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
  .thisIsA {
    cursor: pointer;
    width: 3.23rem;
    height: 4rem;
    margin-top:-1rem;
    margin-right: -0.7rem;
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 1.615rem;
      height: 2rem;
      margin-top:-0.5rem;
    }
    display: block;
    opacity: 0;
  }
  .thisIsA1 {
    cursor: pointer;
    width: 3.23rem;
    height: 4rem;
    margin-top:-1rem;
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 1.615rem;
      height: 2rem;
      margin-top:-0.5rem;
    }
    opacity: 0;
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
    width: 3.8rem;
    height: 4rem;
    z-index: 5;
    //针对手机
    @media screen and (max-width: 1000px) {
        width: 1rem;
        left: 0.25rem;
        height: 1.4rem;
        bottom: 0.1rem;
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
