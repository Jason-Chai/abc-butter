<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 17:53:48
 * @LastEditTime: 2019-09-29 19:05:37
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="main a_page_2">
    <div class="bg-div">
      <img class="animate-bg" src="../../../assets/images/bg2.jpg" />
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList" :titleCurr="3" :routerUrl="router"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="contentMain">
          <div class="content">
            <div class="right" ref="appleLetterListAa" @click="beginMusicAndEnd('Aa', 'Aa')">
              <!--<span>A</span>-->
              <!--<span>a</span>-->
              <img style="display:block;" src="../../../assets/images/page3/p3_Bb.png" alt="" />
            </div>
            <div class="left">
              <div class="each-pic pic1">
                <!-- <div :style="antMoreShow == false?'visibility:hidden;':''" ref="appleLetterListAntMore" @click="beginMusicAndEnd('antMore','AntMore')" class="more">I am an ant</div> -->
                <img ref="appleLetterListAnt" @click="beginMusicAndEnd('ant', 'Ant')" src="../../../assets/images/B/box1.png" alt />
                <img
                  :style="antMoreShow == false ? 'visibility:hidden;' : ''"
                  ref="appleLetterListAntMore"
                  @click="beginMusicAndEnd('antMore', 'AntMore')"
                  class="antMore"
                  src="../../../assets/images/B/box1-1.png"
                  alt
                />
              </div>
              <div class="each-pic pic2">
                <!-- <div :style="alligatorMoreShow == false?'visibility:hidden;':''" ref="appleLetterListAlligatorMore" @click="beginMusicAndEnd('alligatorMore','AlligatorMore')" class="more">I am an alligator</div> -->
                <img ref="appleLetterListAlligator" @click="beginMusicAndEnd('alligator', 'Alligator')" src="../../../assets/images/B/box2.png" alt />
                <img
                  :style="alligatorMoreShow == false ? 'visibility:hidden;' : ''"
                  ref="appleLetterListAlligatorMore"
                  @click="beginMusicAndEnd('alligatorMore', 'AlligatorMore')"
                  class="alligatorMore"
                  src="../../../assets/images/B/box2-2.png"
                  alt
                />
              </div>
              <div class="each-pic pic3">
                <img ref="appleLetterListApple" @click="beginMusicAndEnd('apple', 'Apple')" src="../../../assets/images/B/box3.png" alt />
                <img
                  :style="appleMoreShow == false ? 'visibility:hidden;' : ''"
                  ref="appleLetterListAppleMore"
                  @click="beginMusicAndEnd('appleMore', 'AppleMore')"
                  class="appleMore"
                  src="../../../assets/images/B/box3-3.png"
                  alt
                />
                <!-- <div :style="appleMoreShow == false?'visibility:hidden;':''"  ref="appleLetterListAppleMore" @click="beginMusicAndEnd('appleMore','AppleMore')" class="more">This is an apple</div> -->
              </div>
              <div class="each-pic pic4">
                <img ref="appleLetterListAX" @click="beginMusicAndEnd('ax', 'AX')" src="../../../assets/images/B/box4.png" alt />
                <img
                  :style="axMoreShow == false ? 'visibility:hidden;' : ''"
                  ref="appleLetterListAXMore"
                  @click="beginMusicAndEnd('axMore', 'AXMore')"
                  class="axMore"
                  src="../../../assets/images/B/box4-4.png"
                  alt
                />
                <!-- <div :style="axMoreShow == false?'visibility:hidden;':''"  ref="appleLetterListAXMore" @click="beginMusicAndEnd('axMore','AXMore')" class="more">This is an ax</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAudio from './VueAudio';
export default {
  name: '',
  components: {
    VueAudio
  },
  data() {
    return {
      value1: 50,
      audios: {
        url: './static/mp3/audio-b.mp3',
        controlList: 'noDownload noSpeed onlyOnePlaying'
      },
      playtime: {
        time: 68,
        randem: Math.random(1000)
      },
      router: 'course2page4',
      antMoreShow: false,
      alligatorMoreShow: false,
      appleMoreShow: false,
      axMoreShow: false,
      musicTimeList: {
        ant: {
          beginTime: 91.67,
          endTime: 2.99
        },
        antMore: {
          beginTime: 109.4,
          endTime: 4.8
        },
        alligator: {
          beginTime: 95.09,
          endTime: 3.15
        },
        alligatorMore: {
          beginTime: 114.5,
          endTime: 5.5
        },
        apple: {
          beginTime: 87.58,
          endTime: 3.11
        },
        appleMore: {
          beginTime: 104.43,
          endTime: 4.95
        },
        ax: {
          beginTime: 83.2,
          endTime: 3.707
        },
        axMore: {
          beginTime: 99.04,
          endTime: 4.91
        },
        Aa: {
          beginTime: 80.463,
          endTime: 1.5
        }
      },
      flag: false,
      timerList: []
    };
  },
  methods: {
    beginMusicAndEnd(item, index) {
      let that = this;
      that.clearTimer();

      console.log('传入的数据：', index);
      that[item + 'MoreShow'] = true;
      if (index != undefined) {
        that.$refs['appleLetterList' + index].style.animation = '';
        that.$refs['appleLetterList' + index].style.animationIterationCount = '';
        that.$refs['appleLetterList' + index].style.animation = 'flash 1s 0s both';
        that.$refs['appleLetterList' + index].style.opacity = '1';
        if (index == 'Aa') {
          that.timerList[5] = setTimeout(() => {
            that.$refs['appleLetterList' + index].style.opacity = '1';
            that.$refs['appleLetterList' + index].style.animation = 'zoomIn 0s 0s both';
          }, 1000);
          that.$refs['appleLetterList' + index].style.animationIterationCount = '1';
        } else {
          that.timerList[5] = setTimeout(() => {
            that.$refs['appleLetterList' + index].style.opacity = '1';
            that.$refs['appleLetterList' + index].style.animation = '';
          }, 3000);
          that.$refs['appleLetterList' + index].style.animationIterationCount = '3';
        }
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
    }
  },
  mounted() {
    let that = this;
    that.flag = true;
    that.timerList[0] = window.setTimeout(() => {
      that.$refs.audioss.startPlay();
      clearTimeout(that.timerList[0]);
      // that.clearTimer()
    }, 100);
    that.timerList[1] = window.setTimeout(() => {
      that.$refs.audioss.pausePlay();
      clearTimeout(that.timerList[1]);
      // that.clearTimer()
    }, 12876);
  }
};
</script>

<style lang="scss" scoped>
.ivu-slider-wrap {
  margin: 0.1rem 0 0 !important;
}

.bg-div {
  position: relative;
  width: 100%;
  top: 0;
  right: 0;

  .audio {
    width: 100%;
    height: 0.31rem;
    margin-bottom: 0.1rem;
    /* animation: fadeIn 1s 5.5s both; */
    /* opacity: 0; */
  }

  .animate-bg {
    opacity: 0;
    animation: fadeIn 1s both;
  }

  .page2-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .content {
    /*position: absolute;*/
    /*bottom: 1.95rem;*/
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 93%;
    margin: 1.2rem auto 0;
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0.3rem auto 0;
    }
  }

  .right {
    width: 3.57rem;
    height: 2.85rem;
    margin-right: 1.4rem;
    animation: zoomIn 1s 3s both;
    color: #f7931e;
    font-size: 2.85rem;
    img {
      width: 3.57rem;
    }
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 1.8rem;
      height: 1.42rem;
      font-size: 1.4rem;
      margin: 0 0.1rem 0 0.1rem;
      img {
        width: 1.8rem;
      }
    }

    span {
      display: inline-block;
    }
  }

  .left {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // width: 8rem;
    animation: zoomIn 2s 14s both;
    //针对手机
    @media screen and (max-width: 1000px) {
      justify-content: center;
      margin-top: 0.2rem;
    }
    .each-pic {
      & > img {
        width: 4.92rem;
        height: 3.1rem;
        margin: 0 auto;
        @media screen and (max-width: 1000px) {
          width: 2rem;
          height: 1.2rem;
          margin: 0 auto;
        }
      }
      cursor: pointer;
      width: 50%;
      height: auto;
      // opacity: 0;
      // animation: zoomIn 5s 2s both;
      img:last-child {
        width: 4.8rem;
        height: auto;
        padding: 0 0.1rem 0 0.1rem;
        @media screen and (max-width: 1000px) {
          width: 2.4rem;
        }
      }

      //针对手机
      @media screen and (max-width: 1000px) {
        width: 40%;
        height: auto;
      }
      //针对手机
    }
    .more {
      user-select: none;
      cursor: pointer;
      font-size: 0.48rem;
      color: #f7931e;
      font-weight: 500;
      text-align: center;
      line-height: 1.1;
      white-space: nowrap;
      // width: 2.94rem;
      // height: 0.47rem;
      margin: 0 auto;
      //针对手机
      @media screen and (max-width: 1000px) {
        font-size: 0.2rem;
        font-weight: 500;
        width: 1.47rem;
        height: 0.23rem;
      }
    }
    // .antMore {
    //   width: 2.94rem;
    //   height: 0.47rem;
    //   margin: 0 auto;
    //   //针对手机
    //   @media screen and (max-width: 1000px) {
    //     width: 1.47rem;
    //     height: 0.23rem;
    //   }
    // }
    // .alligatorMore {
    //   width: 2.94rem;
    //   height: 0.47rem;
    //   margin: 0 auto;
    //   //针对手机
    //   @media screen and (max-width: 1000px) {
    //     width: 1.47rem;
    //     height: 0.23rem;
    //   }
    // }
    // .appleMore {
    //   width: 2.94rem;
    //   height: 0.47rem;
    //   margin: 0 auto;
    //   //针对手机
    //   @media screen and (max-width: 1000px) {
    //     width: 1.47rem;
    //     height: 0.23rem;
    //   }
    // }
    // .axMore {
    //   width: 2.94rem;
    //   height: 0.47rem;
    //   margin: 0 auto;
    //   //针对手机
    //   @media screen and (max-width: 1000px) {
    //     width: 1.47rem;
    //     height: 0.23rem;
    //   }
    // }
    .pic1 {
      margin-top: 0.1rem;
      @media screen and (max-width: 1000px) {
        margin-top: 0.2rem;
      }
    }

    .pic2 {
      margin-top: 0.1rem;
      @media screen and (max-width: 1000px) {
        margin-top: 0.2rem;
      }
    }

    .pic3 {
      margin-top: 0.3rem;
      @media screen and (max-width: 1000px) {
        margin-top: 0.2rem;
      }
    }

    .pic4 {
      margin-top: 0.3rem;
      @media screen and (max-width: 1000px) {
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
