<template>
  <div class="main">
    <img  style="width:100%;height:auto"  class="bg"
      src="../assets/images/commonImg/page2bg.png"
      alt
    />
    <div class="xiong">
      <div class="bg-qiang" v-if="levelNum != ''">
        <div class="jiaozheng">
        <img v-if='levelNum == 1' :src="curImg1" alt />
        <img v-if='levelNum == 2' :src="curImg2" alt />
        <img v-if='levelNum == 3' :src="curImg3" alt />
        <img v-if='levelNum == 4' :src="curImg4" alt />
        <img v-if='levelNum == 5' :src="curImg5" alt />
        <img v-if='levelNum == 6' :src="curImg6" alt />
        <img v-if='levelNum == 7' :src="curImg7" alt />
        <img v-if='levelNum == 8' :src="curImg8" alt />
        <img v-if='levelNum == 9' :src="curImg9" alt />
        <img v-if='levelNum == 10' :src="curImg10" alt />
        <img v-if='levelNum == 11' :src="curImg11" alt />
        <img v-if='levelNum == 12' :src="curImg12" alt />
        <img v-if='levelNum == 13' :src="curImg13" alt />
        <img v-if='levelNum == 14' :src="curImg14" alt />
        <img v-if='levelNum == 15' :src="curImg15" alt />
        <img v-if='levelNum == 16' :src="curImg16" alt />
        <img v-if='levelNum == 17' :src="curImg17" alt />
        </div>
      </div>
    </div>
    <audio id="stratMusic2" preload="auto" loop hidden="true" height="100" width="100">
      <source :src="bgmusic" type="audio/mpeg" />
      <source :src="bgmusic" type="audio/ogg" />
      <embed height="50" width="100" :src="bgmusic" />
    </audio>
    <div class="start" :id="id">
      <audio id="stratMusic" controls height="100" width="100">
        <source :src="curClickMp3" type="audio/mpeg" />
        <source :src="curClickMp3" type="audio/ogg" />
        <embed height="50" width="100" :src="curClickMp3" />
      </audio>
      <div @click="go" class="start-button"></div>
    </div>
    <div ref="bg1" class="bgA"></div>
    <div ref="bg2" class="animateBg">
      <div ref="showReady" class="animateIndex content">
        <!-- <img src="../assets/images/readyText.png" /> -->
        <img
          @click="begin"
          ref="readyBtn"
          class="btn btn2"
          src="../assets/images/commonImg/readyBtn.png"
        />
      </div>
      <div ref="readyShow" class="animateIndex jdt">
        <div class="mainAnimate">
          <div style="height:1.6rem">
            <img ref="ready" class="progress" src="../assets/images/ready.png" />
          </div>
          <img
            style="visibility:hidden"
            class="btn"
            src="../assets/images/commonImg/readyBtn.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      bgmusic: "./static/mp3/bgmusic.mp3",
      curClickMp3: "./static/mp3/click.mp3",
      mainHeight: "",
      id: "show",
      step: 0,
      levelNum: 0,
      timer: null,
      count: 0,
      isPlaying: false,
      bg: "",
      // curImg1: require("@/assets/images/commonImg/level2Index1Title.png"),
      // curImg2: require("@/assets/images/commonImg/level2Index2Title.png"),
      // curImg3: require("@/assets/images/commonImg/level2Index3Title.png"),
      // curImg4: require("@/assets/images/commonImg/level2Index4Title.png"),
      // curImg5: require("@/assets/images/commonImg/level2Index5Title.png"),
      // curImg6: require("@/assets/images/commonImg/level2Index6Title.png"),
      // curImg7: require("@/assets/images/commonImg/level2Index7Title.png"),
      // curImg8: require("@/assets/images/commonImg/level2Index8Title.png"),
      // curImg9: require("@/assets/images/commonImg/level2Index9Title.png"),
      // curImg10: require("@/assets/images/commonImg/level2Index10Title.png"),
      // curImg11: require("@/assets/images/commonImg/level2Index11Title.png"),
      // curImg12: require("@/assets/images/commonImg/level2Index12Title.png"),
      // curImg13: require("@/assets/images/commonImg/level2Index13Title.png"),
      // curImg14: require("@/assets/images/commonImg/level2Index14Title.png"),
      // curImg15: require("@/assets/images/commonImg/level2Index15Title.png"),
      // curImg16: require("@/assets/images/commonImg/level2Index16Title.png"),
      // curImg17: require("@/assets/images/commonImg/level2Index17Title.png"),
      animateNum: 100
    };
  },
  created() {
    //console.log("*****************", this.$route.query.id);
    let temp = this.$route.query.id;
    if (temp == undefined || temp == "" || temp == null) {
      temp = "a";
    }else {
        this.levelNum = temp
    }
    // this.bg = this[temp.toLowerCase() + "Bg"];
    // this.MainClick();
    window.setTimeout(() => {
      this.id = "shake";
    }, 4000);
  },
  watch: {
    count(val) {
      //console.log(val);
      if (val == 59) {
        this.timer = setInterval(this.xiongZz, 60);
      }
    }
  },
  mounted() {
    let animateTime = setInterval(() => {
      this.animateNum -= 1;
      if (this.animateNum == 0) {
        this.$refs["showReady"].style.display = "block";
        this.$refs["ready"].style.display = "none";
        this.$refs["readyShow"].style.display = "none";
        this.$refs["readyBtn"].style.visibility = "visible";
        clearInterval(animateTime);
      }
      this.$refs["ready"].style.width = this.animateNum + "%";
    }, 40);
    //预加载
    // this.preload();
  },
  methods: {
    begin() {
      this.$refs["bg1"].style.display = "none";
      this.$refs["bg2"].style.display = "none";
      var audio = document.querySelector("#stratMusic2");
      audio.play();
    },
    toggle(params) {
      var audio2 = document.querySelector("#stratMusic2");
      if (audio2.paused) {
        audio2.paused = false;
        audio2.play();
      }
    },
    MainClick() {},
    go() {
      var audio = document.querySelector("#stratMusic");
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
      }
      let go = setTimeout(() => {
        this.$router.replace({
          path: "/" + "course" + this.$route.query.id + "page1"
        });
        clearTimeout(go);
      }, 500);
    },
    play() {
      var audio = document.querySelector("#stratMusic");
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
      }
    },
    stop() {
      var audio = document.querySelector("#stratMusic");
      if (this.isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      }
    },
    // //预加载
    // preload: function() {
    //   for (let item of this.curImgList) {
    //     // console.log(item)
    //     let image = new Image();
    //     image.src = item.url;
    //     image.onload = () => {
    //       this.count++;
    //       console.log(this.count);
    //     };
    //   }
    // },
    // xiongZz() {
    //   this.curImg = this.curImgList[this.step].url;
    //   this.step++;
    //   // console.log(this.step)
    //   if (this.step == 59) {
    //     this.step = 0;
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/index";
@rem: 128rem;

.main {
  position: relative;
  top: 0;
  right: 0;
}
#stratMusic,#stratMusic2 {
  display: none;
}

.bg {
  opacity: 0;
  animation: fadeIn 1s both;
}
#show {
  animation: fadeIn 1s 2s both;
  opacity: 0;
}
#shake {
  animation: jackInTheBox 3s ease-out 0s infinite alternate-reverse;
}
.xiong {
  animation: fadeInLeft 1s 1s both;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  .bg-qiang {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -15%);
    width: 12.73rem;
    height: 4.87rem;
    // background: url("../assets/images/commonImg/bg_qiang.png") center
    //   center no-repeat;
    // background-size: 100% 100%;
    &::after{
      position: relative;
    }
    .jiaozheng{
        position: absolute;
        top: 1rem;
        right: 1.2rem;
        height: 0;
        
        width: 9rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 70%;
        
       
    }
  }
  //针对手机
  @media screen and (max-width: 1000px) {
    img {
      width: 1.25rem;
      height: 2.7rem;
    }
  }
}

.start {
  position: fixed;
  bottom: 60/@rem;
  width: 100%;
  .start-button {
    width: 347/@rem;
    height: 126/@rem;
    background: url("../assets/images/commonImg/startBtn.png") center
      center no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;

    font-size: 0.18rem;
    display: block;
    text-align: center;
    line-height: 0.65rem;
    margin: 0 auto;
  }
}

.bgA {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.8;
}
.animateBg {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/images/commonImg/indexAnimate.png") center
    center no-repeat;
  background-size: 100% 100%;
  .animateIndex {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 37%;
    .mainAnimate {
      width: 100%;
      position: relative;
    }
    .btn {
      visibility: hidden;
      width: 2.6rem;
      height: auto;
      margin: 0 auto;
      @media screen and (max-width: 1000px) {
        width: 1.3rem;
      }
    }
    .btn2 {
      margin: 3.5rem auto 0;
    }
  }

  .content {
    // display: none;
  }
}
.progress {
  height: 1.6rem;
  width: 100%;
  float: right;
  @media screen and (max-width: 1000px) {
    height: 0.8rem;
  }
}
</style>
