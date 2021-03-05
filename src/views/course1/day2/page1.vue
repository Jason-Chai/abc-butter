<template>
  <div class="level2-main">
    <img
      :class="isSHow"
      style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1"
    >
    <img class="animate-bg" src="../../../assets/images/commonImg/anibg5.png">
    <div class="div-bg">
      <div class="audio">
        <VueAudio
          ref="audioss"
          :audioCurrentTime="playtime"
          :theUrl="audios.url"
          :theControlList="audios.controlList"
          :titleCurr="1"
          :routerUrl="router"  :menuList="menuList"
        ></VueAudio>
      </div>

      <div class="page2-content">
        <div class="content">
          <span class="item item1" ref="text1"></span>
          <span class="item item2" :class="{active:activeIndex==0}" ref="text2"></span>
          <span class="item item3" :class="{active:activeIndex==1}" ref="text3"></span>
          <span class="item item4" :class="{active:activeIndex==2}" ref="text4"></span>
          <span class="item item5" :class="{active:activeIndex==3}" ref="text5"></span>
          <span class="item item6" :class="{active:activeIndex==4}" ref="text6"></span>
        </div>
        <div class="content-right">
          <span class="page5Play" @click="beginMusicAndEnd('play',0)"></span>
          <span class="page5Play" @click="beginMusicAndEnd('play',1)"></span>
          <span class="page5Play" @click="isShowVideo=true"></span>
        </div>
        <div class="content-video" v-show="isShowVideo">
          <video-player
            class="video-player"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
          <div class="close" @click="isShowVideo=false">x</div>
        </div>
      </div>
      <!-- <div class="page5-left">
        <div @click="beginMusicAndEnd('play')" class="page5Play"></div>
      </div>-->
    </div>
  </div>
</template>
<script>
// import VueAudio from "./VueAudio";
import VueAudio from "../../../components/letSingMenu";
import vuedraggable from "vuedraggable";
import { videoPlayer } from "vue-video-player";

export default {
  name: "",
  components: {
    VueAudio,
    vuedraggable,
    videoPlayer
  },
  data() {
    return {
      timer1: null,
      step1: 0,
      isSHow: "",
      curImg1: "./static/images/a/a_00000.png",
      value1: 50,
      audiosMusicUrlDefault: "./static/mp3/level1/level1-09.mp3",
      audios: {
        url: "./static/mp3/level1/level1-09.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
       menuList:[//右侧菜单
          {
            routerUrl:'course1day2Page1',
            imgSrc:require('../../../assets/images/Vocabulary.png')
          },
          {
            routerUrl:'course1day2Page2',
            imgSrc:require('../../../assets/images/Look.png')
          }, 
          {
            routerUrl:'course1day2Page3',
            imgSrc:require('../../../assets/images/Look.png')
          },{
             routerUrl:'index',
             imgSrc:require('../../../assets/images/MenuText.png')
          }
        ],
      playtime: {
        time: 49.3,
        randem: Math.random(1000)
      },

      router: "/course1day2Page2",
      // musicTimeList: {
      //   play: {
      //     beginTime: 0,
      //     endTime: 31
      //   }
      // },
      flag: false,
      timerList: [],
      activeIndex: -1,
      songItem: [],
      songList: [
        {
          songTime: [
            {
              id: "songItem1",
              beginTime: 8
            },
            {
              id: "songItem2",
              beginTime: 13
            },
            {
              id: "songItem3",
              beginTime: 17
            },
            {
              id: "songItem4",
              beginTime: 19
            },
            {
              id: "songItem5",
              beginTime: 22
            }
          ],
          audiosMusicUrl: "./static/mp3/level1/level1-09-song.mp3",
          beginTime: 0, //歌曲开始时间
          endTime: 31, //歌曲结束时间
          endLyric: 25 //歌词结束时间
        },
        {
          songTime: [
            {
              id: "songItem1",
              beginTime: 8
            },
            {
              id: "songItem2",
              beginTime: 13
            },
            {
              id: "songItem3",
              beginTime: 17
            },
            {
              id: "songItem4",
              beginTime: 19
            },
            {
              id: "songItem5",
              beginTime: 22
            }
          ],
          audiosMusicUrl: "./static/mp3/level1/level1-09-song.mp3",
          beginTime: 0,
          endTime: 31,
          endLyric: 25
        }
      ],
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "./static/mp4/LuQ.mp4" //你的视频地址（必填）
          }
        ],
        poster: "", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //controlBar: {
        //timeDivider: true,
        //durationDisplay: true,
        //remainingTimeDisplay: false,
        //fullscreenToggle: true  //全屏按钮
        //}
      },
      isShowVideo: false
    };
  },
  methods: {
    beginMusicAndEnd(item, index) {
      let that = this;
      let mSongList = this.songList[index];
      //console.log(mSongList);
      this.audios.url = this.songList[index].audiosMusicUrl;
      if (item == "play") {
        that.$refs.audioss.getplay();
        for (var song = 0; song < mSongList.songTime.length; song++) {
          that.timerList[song] = window.setTimeout(
            pos => {
              that.activeIndex = pos;
            },
            mSongList.songTime[song].beginTime * 1000,
            song
          );
        }
      }
      this.playtime.randem = Math.random(1000);
      this.playtime.time = this.songList[index].beginTime;
      let stop = mSongList.endTime * 1000;
      let stopLyric = mSongList.endLyric * 1000;
      that.timerList[mSongList.songTime.length] = window.setTimeout(() => {
        that.activeIndex = -1;
      }, stopLyric);
      that.timerList[mSongList.songTime.length + 1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        that.clearTimer();
      }, stop);
    },
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    }
  },
  mounted() {
    let that = this;
    that.flag = true;
    that.timerList[0] = window.setTimeout(() => {
      that.$refs.audioss.startPlay();
      clearTimeout(that.timerList[0]);
    }, 100);
    that.timerList[1] = window.setTimeout(() => {
      that.$refs.audioss.pausePlay();
      clearTimeout(that.timerList[1]);
    }, 6500);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/index";
@rem: 128rem;

.sortable-chosen.sortable-ghost {
  display: none !important;
}

.isSHow {
  display: block;
  left: 50% !important;
}

.level2-main {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .audio {
    width: 100%;
    height: 0.31rem;
    margin-bottom: 0.1rem;
    /* animation: fadeIn 1s 5.5s both; */
    /* opacity: 0; */
  }

  .animate-bg {
    .scale(397, 561);
    .pos-a(416, 0, 3);
    opacity: 0;
    animation: fadeIn 1s both;
  }

  .div-bg {
    position: relative;
    width: 100%;
    width: 100%;
    height: 100%;
    background: url("../../../assets/images/commonImg/page9bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    & > img {
      display: block;
      width: 100%;
    }

    .page2-content {
      position: absolute;
      width: 1692 / @rem;
      height: 734 / @rem;
      top: 200 / @r;
      left: 50%;
      transform: translateX(-50%);
      background: url("../../../assets/images/commonImg/photoKuang3.png")
        no-repeat;
      background-size: cover;
    }

    .content {
      position: absolute;
      width: 818 / @rem;
      height: 525 / @rem;
      left: 393 / @rem;
      top: 10%;

      .item {
        width: 425 / @rem;
        height: 60 / @rem;
        display: block;
        margin-top: 10 / @rem;
        background: url("../../../assets/images/level1/course9/sText2.png") no-repeat;
        background-size: 850 / @rem 419 / @rem;

        &.item1 {
          height: 80 / @rem;
          background-position: 0 0 / @rem;
          margin-top: 56 / @rem;
        }

        &.item2 {
          background-position: 0 -96 / @rem;
        }

        &.item3 {
          background-position: 0 -168 / @rem;
        }

        &.item4 {
          background-position: 0 -242 / @rem;
        }

        &.item5 {
          background-position: 0 -308 / @rem;
        }

        &.item6 {
          background-position: 0 -380 / @rem;
        }

        &.active {
          background-position-x: -425 / @rem;
        }

        img {
          width: 100%;
          display: block;
        }
      }
    }

    .content-right {
      position: absolute;
      top: 80 / @rem;
      right: 184 / @rem;

      span {
        width: 218 / @rem;
        height: 182 / @rem;
        display: block;
      }
    }
    .content-video {
      width: 100%;
      position: absolute;
      width: 1300 / @rem;
      top: 4%;
      left: 250 / @rem;
      background-color: #000;
      .video-player {
        background-color: #000;
      }
      .close {
        position: absolute;
        right: 20 / @rem;
        top: 5 / @rem;
      }
    }
  }
}
</style>
