<template>
  <div class="main a_page_2">
    <img :class="isSHow" style="z-index: 200;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;" :src="curImg1" />
    <div class="bg-div">
      <img class="animate-bg" src="../../../assets/images/bg2.jpg" />
      <div class="audio"><VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList" :routerUrl="router" :titleCurr="2" /></div>
      <div class="page2-content">
        <div class="contentMain">
          <div class="content">
            <div class="content-main">
              <div @click="beginMusicAndEnd('red')" :class="redAnimate ? 'redAnimate' : ''" class="left">
                <vuedraggable class="curRed" v-model="appleLetter1" :options="option" :move="move">
                  <transition-group>
                    <div :key="appleLetter1[0].name" :id="appleLetter1[0].name" class="move">
                      <img src="../../../assets/images/B/bee1.png" />
                      <div v-for="(item, index) in showAppleLetter1" :key="item.name"><img :class="'bg' + index" class="letterA-A" :src="imageUrlA" /></div>
                    </div>
                  </transition-group>
                </vuedraggable>
              </div>

              <div class="center">
                <vuedraggable class="letterA " @end="end" v-model="appleLetter" :options="option" :move="move">
                  <transition-group>
                    <li
                      :style="item.flag ? 'opacity:1;' : 'opacity:0;'"
                      :class="item.name == 'A' ? 'letterA-A' : item.name == 'aa' ? 'letterA-aa' : 'letterA-A'"
                      v-for="(item, index) in appleLetter"
                      :key="'item.name' + index"
                      @click="beginMusicAndEnd(item.name, index)"
                      :ref="'appleLetterList' + index"
                      :id="item.name"
                    >
                      <!-- {{index}}{{(item.name =='A')?'A':(item.name =='a')?'a':''}} -->
                      <img
                        :ref="item.name + 'Animate'"
                        :class="item.name == 'A' ? 'letterA-A' : item.name == 'aa' ? 'letterA-aa' : ''"
                        :src="item.name == 'A' ? imageUrlA : item.name == 'aa' ? imageUrlAa : ''"
                      />
                    </li>
                  </transition-group>
                </vuedraggable>
              </div>
              <div @click="beginMusicAndEnd('green')" :class="blueAnimate ? 'redAnimate' : ''" class="right move">
                <vuedraggable class="curGreen" v-model="appleLetter2" :options="option2" :move="move">
                  <transition-group>
                    <div :key="appleLetter2[0].name" :id="appleLetter2[0].name" class="move">
                      <img src="../../../assets/images/B/bee2.png" />
                      <div v-for="(item, index) in showAppleLetter2" :key="item.name"><img :class="'bg' + index" :key="item.name" class="letterA-aa" :src="imageUrlAa" /></div>
                    </div>
                  </transition-group>
                </vuedraggable>
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
import vuedraggable from 'vuedraggable';

export default {
  name: '',
  components: {
    VueAudio,
    vuedraggable
  },
  data() {
    return {
      clickFlag: true,
      value1: 50,
      audios: {
        url: './static/mp3/audio-b.mp3',
        controlList: 'noDownload noSpeed onlyOnePlaying'
      },
      playtime: {
        time: 31,
        randem: Math.random(1000)
      },
      router: 'course2page3',
      option: {
        group: { name: 'aaa', pull: 'clone' },
        filter: '.move',
        pull: 'clone',
        sort: false
      },
      option1: {
        group: { name: 'aaa' },
        filter: '.move',
        sort: false
      },
      option2: {
        group: { name: 'aaa' },
        filter: '.move',
        sort: false
      },
      imageUrlA: require('../../../assets/images/B/B.png'),
      imageUrlAa: require('../../../assets/images/B/bb.png'),
      appleLetter1: [{ flag: 'true', name: 'red' }],
      appleLetter2: [{ flag: 'true', name: 'green' }],
      appleLetter: [
        { flag: 'true', name: 'A' },
        { flag: 'true', name: 'aa' },
        { flag: 'true', name: 'A' },
        { flag: 'true', name: 'aa' },
        { flag: 'true', name: 'A' },
        { flag: 'true', name: 'aa' },
        { flag: 'true', name: 'A' },
        { flag: 'true', name: 'aa' },
        { flag: 'true', name: 'A' }
      ],
      isAppFlag: null,
      isOldIndex: null,
      AAnimate: false,
      aaAnimate: false,
      redAnimate: false,
      blueAnimate: false,
      musicTimeList: {
        red: {
          beginTime: 36.8,
          endTime: 1.35
        },
        green: {
          beginTime: 41.86,
          endTime: 1.315
        },
        A: {
          beginTime: 24.46,
          endTime: 3
        },
        aa: {
          beginTime: 28.32,
          endTime: 2.389
        },
        err: {
          beginTime: 196.7,
          endTime: 1.5
        },
        right: {
          beginTime: 194.9,
          endTime: 1.6
        },
        over: {
          beginTime: 49.2,
          endTime: 14.84
        }
      },
      showAppleLetter1: [],
      initShowAppleLetter1: [],
      initShowAppleLetter2: [],
      showAppleLetter2: [],
      timerList: [],
      curImg1: './static/images/yh/yanhuab_00000.png',
      timer1: null,
      step1: 0,
      curImgList1: [
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00000.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00001.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00002.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00003.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00004.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00005.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00006.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00007.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00008.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00009.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00010.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00011.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00012.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00013.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00014.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00015.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00016.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00017.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00018.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00019.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00020.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00021.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00022.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00023.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00024.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00025.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00026.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00027.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00028.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00029.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00030.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00031.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00032.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00033.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00034.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00035.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00036.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00037.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00038.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00039.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00040.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00041.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00042.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00043.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00044.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00045.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00046.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00047.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00048.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00049.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00050.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00051.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00052.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00053.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00054.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00055.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00056.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00057.png' },
        { url: 'http://www.pivotal-china.com/mtx/img/yanhua/yanhuab_00058.png' }
      ],
      isSHow: '',
      count: 0
    };
  },
  watch: {
    count(val) {
      console.log(val);
    },
    // 如果拖拽完成
    appleLetter(val) {
      console.log(val);
    },
    appleLetter1(val) {
      console.log(val, 'appleLetter1');

      this.initShowAppleLetter1 = [];

      for (var i = 0; i < this.appleLetter1.length; i++) {
        if (this.appleLetter1[i].name === 'A') {
          this.initShowAppleLetter1.push({
            name: this.appleLetter1[i].name
          });
        }
      }
      if (this.initShowAppleLetter1.length != this.showAppleLetter1.length) {
        this.showAppleLetter1 = this.initShowAppleLetter1;
      }

      console.log(this.showAppleLetter1, 'showAppleLetter1');
    },
    appleLetter2(val) {
      console.log(val, 'appleLetter2');
      this.showAppleLetter2 = [];
      this.showAppleLetter1 = [];

      this.initShowAppleLetter2 = [];
      for (var i = 0; i < this.appleLetter2.length; i++) {
        if (this.appleLetter2[i].name === 'aa') {
          this.initShowAppleLetter2.push({
            name: this.appleLetter2[i].name
          });
        }
      }
      if (this.initShowAppleLetter2.length != this.showAppleLetter2.length) {
        this.showAppleLetter2 = this.initShowAppleLetter2;
      }
      console.log(this.showAppleLetter2, 'appleLetter2');
    }
  },
  methods: {
    //预加载
    preload: function() {
      for (let item of this.curImgList1) {
        console.log(item);
        let image = new Image();
        image.src = item.url;
        image.onload = () => {
          this.count++;
          console.log(this.count);
        };
      }
    },
    clickAnimate(item) {
      if (item == 'red') {
        this.redAnimate = true;
      } else this.blueAnimate = true;
    },

    end(evt) {
      console.log(evt, 'end');
      var that = this;
      var TzTag = evt.item.id;
      var oldIndex = evt.oldIndex;
      console.log(oldIndex, 'oldIndex');
      this.isOldIndex = oldIndex;
      this.isAppFlag = 3;
      var status = '';
      if (TzTag == 'A') {
        if (evt.to.parentElement.className == 'curRed') {
          console.log('curRed');
          //成功A放入red
          status = 'right';
          this.appleLetter.splice(this.isOldIndex, 1, { flag: 'false', name: 'bbb' });
          // that.beginMusicAndEnd('right');
        } else {
          if (evt.to.parentElement.className == 'curGreen') {
            console.log('errorRed');
            //index

            this.isAppFlag = 1;
            status = 'err';
            // that.beginMusicAndEnd('err');
          } else {
            console.log('其他');
          }
        }
      } else {
        if (TzTag == 'aa') {
          if (evt.to.parentElement.className == 'curGreen') {
            console.log('curGreen');
            status = 'right';
            this.appleLetter.splice(this.isOldIndex, 1, { flag: 'false', name: 'bbb' });
            //成功a放入green
            // that.beginMusicAndEnd('right');
          } else {
            if (evt.to.parentElement.className == 'curRed') {
              //index
              this.isAppFlag = 2;
              status = 'err';
              // that.beginMusicAndEnd('err');

              console.log('errorGreen');
            } else {
              console.log('其他');
            }
          }
        }
      }
      console.log(this.isAppFlag, 'this.isAppFlag');

      if (this.isAppFlag == 1) {
        //console.log(this.appleLetter, "11111");
        // this.appleLetter[this.oldIndex] = { flag: "true", name: "A" };
        //this.appleLetter.splice(this.isOldIndex, 1,{ flag: "false", name: "bbb" },)
        // console.log(this.appleLetter,'22222');
        // console.log(this.appleLetter,'LLLL')
      } else if (this.isAppFlag == 2) {
        //this.appleLetter.splice(this.isOldIndex, 1, { flag: "false", name: "ccc" });
      }

      if (status != '') {
        that.beginMusicAndEnd(status);
      }
      //console.log(this.appleLetter,'*********************');
      var appnum = 1;
      for (var i = 0; i < this.appleLetter.length; i++) {
        if (this.appleLetter[i].name == 'bbb') {
          appnum += 1;
        }
      }
      if (appnum == 10) {
        that.beginMusicAndEnd('over');
        this.isSHow = 'isSHow';
        this.timer1 = setInterval(this.yh, 60);
        that.clickFlag = false;
      }
    },
    // 烟花
    yh() {
      this.curImg1 = this.curImgList1[this.step1].url;
      this.step1++;

      if (this.step1 == 59) {
        window.clearInterval(this.timer1);
        this.isSHow = '';
      }
    },
    move(evt, originalEvent) {
      // console.log(evt, originalEvent.oldIndex);
    },
    beginMusicAndEnd(item, index) {
      let that = this;
      if (!that.clickFlag) return;
      that.clearTimer();
      // console.log("执行的定时器：", window.setTimeout);
      // console.log(
      //   "点击：",
      //   item,
      //   "开始时间：",
      //   this.musicTimeList[item].beginTime
      // );
      // console.log(
      //   "点击：",
      //   item,
      //   "开始时间：",
      //   this.musicTimeList[item].beginTime
      // );
      console.log('传入的数据：', index);
      if (index != undefined) {
        that.$refs['appleLetterList' + index][0].style.animation = 'flash 1s 0s both';
        that.timerList[5] = setTimeout(() => {
          that.$refs['appleLetterList' + index][0].style.animation = '';
        }, 1000);
      }
      this.playtime.randem = Math.random(1000);
      this.playtime.time = this.musicTimeList[item].beginTime;
      let stop = this.musicTimeList[item].endTime * 1000;
      // this.$refs.audios.startPlay();
      that.flag = true;
      that.timerList[4] = window.setTimeout(() => {
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
    this.preload();

    let that = this;
    that.timerList[0] = window.setTimeout(() => {
      that.$refs.audioss.startPlay();
      clearTimeout(that.timerList[0]);
    }, 100);
    that.timerList[4] = window.setTimeout(() => {
      // for(let i = 0; i<that.$refs.AAnimate.length; i++) {
      that.$refs.AAnimate[0].style.animation = 'bounceIn 1s both';
      // }
      clearTimeout(that.timerList[4]);
    }, 4000);
    that.timerList[1] = window.setTimeout(() => {
      that.redAnimate = true;
      clearTimeout(that.timerList[1]);
    }, 6000);

    that.timerList[5] = window.setTimeout(() => {
      // for(let i = 0; i<that.$refs.AAnimate.length; i++) {
      that.$refs.aaAnimate[0].style.animation = 'bounceIn 1s both';
      // }
      // that.$refs.aaAnimate.style.animation = 'bounceIn 1s both'
      clearTimeout(that.timerList[5]);
    }, 9000);
    that.timerList[2] = window.setTimeout(() => {
      that.blueAnimate = true;
      clearTimeout(that.timerList[2]);
    }, 10500);
    that.timerList[3] = window.setTimeout(() => {
      that.$refs.audioss.pausePlay();
      clearTimeout(that.timerList[3]);
    }, 13000);
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/css/AaCommon.scss';
.isSHow {
  display: block;
  left: 50% !important;
}
@keyframes opc {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.left {
  .letterA-A-select {
    animation: opc 0.8s;
  }
  .letterA-A {
    opacity: 0;
    animation: opc 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.04rem !important;
    height: 1.55rem !important;
    &.bg0 {
      left: 50%;
      top: 49%;
      transform: translate(-50%, -50%);
    }
    &.bg1 {
      left: 50%;
      top: 48%;
      transform: translate(-50%, -50%);
    }
    &.bg2 {
      left: 50%;
      top: 47%;
      transform: translate(-50%, -50%);
    }
    &.bg3 {
      left: 50%;
      top: 46%;
      transform: translate(-50%, -50%);
    }
    &.bg4 {
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 0.52rem !important;
      height: 0.775rem !important;
      &.bg0 {
        left: 50%;
        top: 49%;
        transform: translate(-50%, -50%);
      }
      &.bg1 {
        left: 50%;
        top: 48%;
        transform: translate(-50%, -50%);
      }
      &.bg2 {
        left: 50%;
        top: 47%;
        transform: translate(-50%, -50%);
      }
      &.bg3 {
        left: 50%;
        top: 46%;
        transform: translate(-50%, -50%);
      }
      &.bg4 {
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

.right {
  .letterA-aa {
    opacity: 0;
    animation: opc 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.04rem !important;
    height: 1.42rem !important;
    &.bg0 {
      left: 50%;
      top: 49%;
      transform: translate(-50%, -50%);
    }
    &.bg1 {
      left: 50%;
      top: 48%;
      transform: translate(-50%, -50%);
    }
    &.bg2 {
      left: 50%;
      top: 47%;
      transform: translate(-50%, -50%);
    }
    &.bg3 {
      left: 50%;
      top: 46%;
      transform: translate(-50%, -50%);
    }
    &.bg4 {
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 0.52rem !important;
      height: 0.775rem !important;
      &.bg0 {
        left: 50%;
        top: 49%;
        transform: translate(-50%, -50%);
      }
      &.bg1 {
        left: 50%;
        top: 48%;
        transform: translate(-50%, -50%);
      }
      &.bg2 {
        left: 50%;
        top: 47%;
        transform: translate(-50%, -50%);
      }
      &.bg3 {
        left: 50%;
        top: 46%;
        transform: translate(-50%, -50%);
      }
      &.bg4 {
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

.curGreen {
  position: relative;
  li {
    display: none !important;
  }
}
.curRed {
  position: relative;
  li {
    display: none !important;
  }
}
.opacityC {
  display: none !important;
}
.ivu-slider-wrap {
  margin: 0.1rem 0 0 !important;
}
.redAnimate {
  animation: bounceIn 1s both;
}
.AAnimate {
  animation: bounceIn 1s both;
}
.aaAnimate {
  animation: bounceIn 1s both;
}
//针对手机
@media screen and (max-width: 1000px) {
  .contentMain {
    width: 100%;
    height: 100%;
    display: flex;
  }
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
  }

  .page2-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .content-bottom {
    position: absolute;
    bottom: 0.84rem;
    text-align: center;
    margin: 0 auto;
    display: block;
    width: 13.17rem;
    left: 50%;
    margin-left: -6.59rem;
    //针对手机
    @media screen and (max-width: 1000px) {
      width: 100%;
      left: 0;
      margin-left: 0;
      bottom: 0.3rem;
    }
    img {
      width: 13.17rem;
      height: 0.29rem;
      //针对手机
      @media screen and (max-width: 1000px) {
        width: 95%;
        margin: 0 auto;
        height: 0.15rem;
      }
    }
  }

  .content {
    /*position: absolute;*/
    /*bottom: 1.95rem;*/
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 90%;
    margin: 1.2rem auto 0;

    //针对手机
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0 auto;
    }

    .content-main {
      width: 90%;
      margin: 0.9rem auto 0;
      display: flex;
      flex-flow: row;
      align-items: center;
      //针对手机
      @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 0.3rem auto 0 !important;
      }
      .left img,
      .right img {
        width: 4.3rem;
        height: 3.45rem;
        @media screen and (max-width: 1000px) {
          width: 1.5rem;
          height: auto;
        }
      }

      .center {
        .letterA {
          width: 7rem;
          //针对手机
          @media screen and (max-width: 1000px) {
            width: 2.7rem;
          }
          span {
            display: flex;
            margin-bottom: 0.1rem;
            flex-direction: row;
            justify-content: space;
            flex-wrap: wrap;
          }

          li {
            width: 2.13rem;
            height: 2.13rem;
            background: #fff;
            box-shadow: 10px 10px 10px #f1f1f1;
            border: 1px #000;
            margin-left: 0.3rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.1rem;
            //针对手机
            @media screen and (max-width: 1000px) {
              width: 0.8rem;
              height: 0.8rem;
              margin-left: 0.1rem;
            }

            &:nth-child(3n + 1) {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
