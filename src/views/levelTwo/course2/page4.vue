<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 19:49:14
 * @LastEditTime: 2019-09-27 20:37:20
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div class="main a_page_2">
    <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;" :src="curImg1" />
    <div class="bg-div">
      <div class="xiong"><img src="../../../assets/images/xiong/B/p4.png" alt /></div>
      <img class="animate-bg" src="../../../assets/images/bg2.jpg" />
      <div class="page2-content">
        <div class="audio">
          <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList" :routerUrl="router" :titleCurr="4" />
        </div>
        <div class="contentMain">
          <div class="content">
            <div class="content-main">
              <div class="center">
                <vuedraggable class="letterA " @end="end" v-model="appleLetter" :options="option" :move="move">
                  <transition-group>
                    <li
                      @click="beginMusicAndEnd(item.name, index)"
                      v-for="(item, index) in appleLetter"
                      :key="item.name"
                      :ref="'appleLetterList' + index"
                      :id="item.name"
                      :style="item.name == 'ccc' ? 'opacity:0;' : ''"
                    >
                      <span>{{ item.name }}</span>
                      <!-- {{index}}{{(item.name =='A')?'A':(item.name =='a')?'a':''}} -->
                    </li>
                  </transition-group>
                </vuedraggable>
              </div>
            </div>
          </div>
          <div class="curBottom">
            <div @click="beginMusicAndEnd('yellowk')" :class="blueAnimate ? 'redAnimate' : ''" class="left move">
              <vuedraggable class="curGreen" v-model="appleLetter2" :options="option2" :move="move">
                <transition-group>
                  <div :key="appleLetter2[0].name" :id="appleLetter2[0].name" class="move">
                    <img src="../../../assets/images/B/basket1.png" />

                    <li :class="'bg' + index" v-for="(item, index) in showAppleLetter" :key="item.name" :id="item.name">
                      <span>{{ item.name }}</span>
                      <!-- {{index}}{{(item.name =='A')?'A':(item.name =='a')?'a':''}} -->
                    </li>
                  </div>
                </transition-group>
              </vuedraggable>
            </div>
            <div :class="redAnimate ? 'redAnimate' : ''" class="right">
              <vuedraggable class="curRed" v-model="appleLetter1" :options="option" :move="move">
                <transition-group>
                  <div @click="beginMusicAndEnd('bluek')" :key="appleLetter1[0].name" :id="appleLetter1[0].name" class="move">
                    <img src="../../../assets/images/B/basket2.png" />
                    <li :class="'bg' + index" v-for="(item, index) in showAppleLetter1" :key="item.name" :id="item.name">
                      <span>{{ item.name }}</span>
                      <!-- {{index}}{{(item.name =='A')?'A':(item.name =='a')?'a':''}} -->
                    </li>
                  </div>
                </transition-group>
              </vuedraggable>
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
      value1: 50,
      audios: {
        url: './static/mp4/z2.mp3',
        controlList: 'noDownload noSpeed onlyOnePlaying'
      },
      playtime: {
        time: 120,
        randem: Math.random(1000)
      },
      router: 'course2page5',
      option: {
        group: {
          name: 'aaa',
          pull: 'clone'
        },
        filter: '.move',
        scroll: false,
        sort: false
      },
      option1: {
        filter: '.move',
        scroll: false,
        sortable: false
      },
      option2: {
        group: 'aaa',
        filter: '.move',
        scroll: false,
        sortable: false
      },

      appleLetter1: [
        {
          flag: 'true',
          name: 'red'
        }
      ],
      appleLetter2: [
        {
          flag: 'true',
          name: 'green'
        }
      ],
      appleLetter: [
        {
          flag: 'true',
          name: 'crab',
          cur: 1
        },
        {
          flag: 'true',
          name: 'boat'
        },
        {
          flag: 'true',
          name: 'bear'
        },
        {
          flag: 'true',
          name: 'box'
        },
        {
          flag: 'true',
          name: 'balloon'
        },
        {
          flag: 'true',
          name: 'cab',
          cur: 1
        },
        {
          flag: 'true',
          name: 'cub',
          cur: 1
        },
        {
          flag: 'true',
          name: 'web',
          cur: 1
        }
      ],
      tempLetter: [],
      isAppFlag: null,
      isOldIndex: null,
      redAnimate: false,
      blueAnimate: false,
      musicTimeList: {
        crab: {
          beginTime: 135.89,
          endTime: 1.13
        },
        boat: {
          beginTime: 138.59,
          endTime: 1.4
        },
        bear: {
          beginTime: 141.1,
          endTime: 1.5
        },
        box: {
          beginTime: 143.26,
          endTime: 1.5
        },
        balloon: {
          beginTime: 145.42,
          endTime: 1.55
        },
        cab: {
          beginTime: 152.25,
          endTime: 1.5
        },
        cub: {
          beginTime: 147.57,
          endTime: 1.5
        },
        web: {
          beginTime: 149.91,
          endTime: 1.5
        },
        blue: {
          beginTime: 179,
          endTime: 2
        },
        red: {
          beginTime: 187,
          endTime: 3
        },
        over: {
          beginTime: 154.5,
          endTime: 15.7
        },
        err: {
          beginTime: 196.83,
          endTime: 1.5
        },
        right: {
          beginTime: 195.03,
          endTime: 1.7
        },
        green: {
          beginTime: 180,
          endTime: 2
        },
        bluek: {
          beginTime: 168.37,
          endTime: 1
        },
        yellowk: {
          beginTime: 163.37,
          endTime: 1
        }
      },

      showAppleLetter: [],
      showAppleLetter1: [],
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
    // 如果拖拽完成
    appleLetter(val) {
      console.log(val);
    },
    appleLetter2(val) {
      this.showAppleLetter = [];
      for (var i = 0; i < this.appleLetter2.length; i++) {
        if (this.appleLetter2[i].name.substring(0, 1) == 'b') {
          this.showAppleLetter.push({
            name: this.appleLetter2[i].name
          });
        }
      }
      console.log(this.showAppleLetter, 'appleLetter2');
    },
    appleLetter1(val) {
      console.log(this.showAppleLetter1, 'appleLetter1');
      this.showAppleLetter1 = [];
      for (var i = 0; i < this.appleLetter1.length; i++) {
        if (this.appleLetter1[i].cur == 1) {
          this.showAppleLetter1.push({
            name: this.appleLetter1[i].name
          });
        }
      }
      console.log(this.showAppleLetter1, 'appleLetter2');
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

    // 烟花
    yh() {
      this.curImg1 = this.curImgList1[this.step1].url;
      this.step1++;

      if (this.step1 == 59) {
        window.clearInterval(this.timer1);
        this.isSHow = '';
      }
    },
    end(evt) {
      console.log(evt, 'end');
      var that = this;
      var TzTagName = evt.item.id;
      var TzTag = TzTagName.substring(0, 1);
      var oldIndex = evt.oldIndex;
      //console.log(oldIndex, "oldIndex",TzTag,'TzTag',evt.to.parentElement.className,'evt.to.parentElement.className');
      this.isOldIndex = oldIndex;
      this.isAppFlag = 3;
      var status = '';

      if (TzTag == 'b') {
        if (evt.to.parentElement.className == 'curGreen') {
          console.log('curOring');
          //成功A放入red
          status = 'right';
          // that.beginMusicAndEnd('right');
          this.appleLetter.splice(this.isOldIndex, 1, {
            flag: 'true',
            name: 'ccc'
          });
        } else {
          if (evt.to.parentElement.className == 'curRed') {
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
        if (TzTag != 'b') {
          if (evt.to.parentElement.className == 'curRed') {
            console.log('curBlue');
            status = 'right';
            this.appleLetter.splice(this.isOldIndex, 1, {
              flag: 'true',
              name: 'ccc'
            });
            //成功a放入green
            // that.beginMusicAndEnd('right');
          } else {
            if (evt.to.parentElement.className == 'curGreen') {
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
        console.log(this.appleLetter, '11111');
        // this.appleLetter[this.oldIndex] = { flag: "true", name: "A" };
        //this.appleLetter.splice(this.isOldIndex, 0,{ flag: "true", name: TzTagName },)
        // console.log(this.appleLetter,'22222');
        // console.log(this.appleLetter,'LLLL')
      } else if (this.isAppFlag == 2) {
        //this.appleLetter.splice(this.isOldIndex, 0, { flag: "true", name: TzTagName});
      }

      if (status != '') {
        that.beginMusicAndEnd(status);
      }
      console.log(this.appleLetter.length, '*********************');
      var appnum = 1;
      for (var i = 0; i < this.appleLetter.length; i++) {
        if (this.appleLetter[i].name == 'ccc') {
          appnum += 1;
        }
      }
      if (appnum == 9) {
        that.beginMusicAndEnd('over');
      }
    },
    move(evt, originalEvent) {
      // console.log(evt, originalEvent.oldIndex);
    },
    beginMusicAndEnd(item, index) {
      if (item == 'ccc') {
        return;
      }
      let that = this;
      that.clearTimer();
      console.log('传入的数据：', index);
      console.log(that.$refs['appleLetterList' + index]);
      // this.appleLetter.forEach((element,item) => {
      //   that.$refs['appleLetterList'+item][0].style.animation = ''
      // });
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
      if (item == 'over') {
        this.isSHow = 'isSHow';
        this.timer1 = setInterval(this.yh, 50);
      }
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
    that.timerList[1] = window.setTimeout(() => {
      that.redAnimate = true;
      clearTimeout(that.timerList[1]);
    }, 13000);
    that.timerList[2] = window.setTimeout(() => {
      that.blueAnimate = true;
      clearTimeout(that.timerList[2]);
    }, 7000);
    that.timerList[3] = window.setTimeout(() => {
      that.$refs.audioss.pausePlay();
      clearTimeout(that.timerList[3]);
    }, 16000);
  }
};
</script>

<style lang="scss" scoped>
.isSHow {
  display: block;
  left: 50% !important;
}

.curGreen,
.curRed {
  li {
    &.bg0 {
      top: 0.1rem;
      left: 0;
      z-index: 5;
    }

    &.bg1 {
      top: 0.2rem;
      left: 0;
      z-index: 4;
    }

    &.bg2 {
      top: 0.3rem;
      left: 0;
      z-index: 3;
    }

    &.bg3 {
      top: 0.4rem;
      left: 0;
      z-index: 2;
    }

    position: absolute;
    width: 2.22rem;
    height: 2.06rem;
    background: #fff;

    margin-left: 0.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.1rem;
    background: url('../../../assets/images/B/bee-bg.png') 100% 100% no-repeat;
    background-size: 100% 100%;

    //针对手机
    @media screen and (max-width: 1000px) {
      width: 0.8rem;
      height: 0.93rem;
      margin-left: 0.2rem;
    }

    span {
      color: #fff;
      font-size: 0.42rem;

      //针对手机
      @media screen and (max-width: 1000px) {
        font-size: 0.21rem;
      }
    }
  }
}

.xiong {
  position: absolute;
  bottom: 0.61rem;
  left: 0.67rem;
  width: 2.49rem;
  height: 5.42rem;
  animation: fadeInLeft 1s 1s both;
  opacity: 0;

  //针对手机
  @media screen and (max-width: 1000px) {
    width: 0.625rem;
    left: 0.25rem;
    height: 1.4rem;
    bottom: 0.1rem;
  }
}

.curBottom {
  display: flex;
  justify-content: center;
  width: 10rem;
  flex-flow: row;
  align-items: center;
  margin: 0 auto;

  //针对手机
  @media screen and (max-width: 1000px) {
    width: 60%;
  }

  .right {
    flex: 0.5;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .left {
    flex: 1.5;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  img {
    position: absolute !important;
    z-index: 10;
    width: 2.68rem;
    height: 2.86rem;

    //针对手机
    @media screen and (max-width: 1000px) {
      width: 1.24rem;
      height: 1.3rem;
    }
  }
}

.curGreen {
  position: relative;
}

.curRed {
  position: relative;
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

    img {
      width: 13.17rem;
      height: 0.29rem;
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
      margin: 0.4rem auto 0;
      min-height: 2.05rem;
    }

    .content-main {
      width: 90%;
      margin: 0 auto 0;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;

      .left img,
      .right img {
        width: 4.31rem;
        height: 3.51rem;
      }

      .center {
        .letterA {
          width: 10rem;
          min-height: 4.95rem;

          //针对手机
          @media screen and (max-width: 1000px) {
            width: 4rem;
            min-height: auto;
          }

          span {
            display: flex;
            margin-bottom: 0.1rem;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 0.5rem;

            //针对手机
            @media screen and (max-width: 1000px) {
              width: 4rem;
              min-height: auto;
              margin-bottom: 0;
              margin-top: 0.2rem;
            }
          }

          li {
            width: 2.22rem;
            height: 2.06rem;
            background: #fff;
            margin-left: 0.3rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.1rem;
            background: url('../../../assets/images/B/bee-bg.png') 100% 100% no-repeat;
            background-size: 100% 100%;

            //针对手机
            @media screen and (max-width: 1000px) {
              width: 0.8rem;
              height: 0.93rem;
              margin-left: 0.1rem;
            }

            span {
              color: #fff;
              font-size: 0.42rem;

              //针对手机
              @media screen and (max-width: 1000px) {
                font-size: 0.21rem;
              }
            }

            .letterA-A {
              width: 1.08rem;
              height: 1.42rem;
            }

            .letterA-aa {
              width: 0.94rem;
              height: 1.11rem;
            }

            &:nth-child(4n + 1) {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
