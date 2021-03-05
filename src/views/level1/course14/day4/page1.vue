<template>
  <div class="a_page_2">
    <div class="bg-div">
      <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer"/>
      <div class="audio">
        <VueAudio
          ref="audioss"
          :audioCurrentTime="playtime"
          :theUrl="audios.url"
          :theControlList="audios.controlList"
          :titleCurr="2"
          :routerUrl="router"
          :menuList="menuList"
        ></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content">
          <div ref="word1" @click="beginMusicAndEnd('word1', 1)" class="each-pic pic1">
            <img src="../../../../assets/images/level1/course14/day4-p1-img1.png" alt>
          </div>
          <div ref="word2" @click="beginMusicAndEnd('word2', 2)" class="each-pic pic2">
            <img src="../../../../assets/images/level1/course14/day4-p1-img2.png" alt>
          </div>
          <div ref="word3" @click="beginMusicAndEnd('word3', 3)" class="each-pic pic3">
            <img src="../../../../assets/images/level1/course14/day4-p1-img3.png" alt>
          </div>
          <div ref="word4" @click="beginMusicAndEnd('word4', 4)" class="each-pic pic4">
            <img src="../../../../assets/images/level1/course14/day4-p1-img4.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAudio from "../../../../components/vocabularyMenu";
export default {
  name: "",
  components: {
    VueAudio
  },
  data() {
    return {
      value1: 50,
      audios: {
        url: "./static/mp3/level1/level1-14.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
      menuList:[//右侧菜单
          {
            routerUrl:'L1Course14Day4Page1',
            imgSrc:require('../../../../assets/images/commonImg/menu/theme-voca-menu-voca.png')
          },
          {
            routerUrl:'L1Course14Day4Page2',
            imgSrc:require('../../../../assets/images/commonImg/menu/theme-voca-menu-lookorder.png')
          },
          {
            routerUrl: 'index?id=L1Course14',
            imgSrc:require('../../../../assets/images/commonImg/menu/theme-voca-menu-back.png')
          }
      ],
      playtime: {
        time: 162.5,
        randem: Math.random(1000),
           stopTime: 2.7
      },
      router: "L1Course14Day4Page2",
      antMoreShow: false,
      alligatorMoreShow: false,
      appleMoreShow: false,
      axMoreShow: false,
      musicTimeList: {
        word1: {
          beginTime: 167.1,
          endTime: 1.3
        },
        word2: {
          beginTime: 169.9,
          endTime: 2.1
        },
        word3: {
          beginTime: 172.9,
          endTime: 1.8
        },
        word4: {
          beginTime: 175.3,
          endTime: 2.1
        }
      },
      flag: false,
      timerList: [],
      deerStep: true
    };
  },
  methods: {
    beginMusicAndEnd(item, index) {
      let that = this;
      that.clearTimer();

      //console.log("传入的数据：", index);
      that[item + "MoreShow"] = true;
      if (index != undefined) {
        that.$refs["word" + index].style.animation = "";
        let tempTimer = window.setTimeout(() => {
          that.$refs["word" + index].style.animation = "fadeIn 1s 0s both";
          window.clearTimeout(tempTimer);
        }, 10);

        // that.$refs["right" + index].style.opacity = "1";
      }
      this.playtime.randem = Math.random(1000);
       that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
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
    }, 2700);
    that.$refs.deer.addEventListener("animationend", function() {
      that.deerStep = false;
      let deerTime = window.setTimeout(() => {
        that.deerStep = true;
        window.clearTimeout(deerTime);
      }, 5000);
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../../../assets/css/index";
@import "../../../../assets/css/vocabulary";
@rem: 128rem;

.a_page_2 {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

</style>
