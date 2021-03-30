<template>
  <div class="main">
    <audio id="stratMusic2" preload="auto" hidden="true" height="100" width="100">
      <source :src="clickAudio" type="audio/mpeg" />
      <source :src="clickAudio" type="audio/ogg" />
      <embed height="50" width="100" :src="clickAudio" />
    </audio>
    <audio id="bgMusic" preload="auto" hidden="true" height="100" width="100">
      <source :src="bgMusicAudio" type="audio/mpeg" />
      <source :src="bgMusicAudio" type="audio/ogg" />
      <embed height="50" width="100" :src="bgMusicAudio" />
    </audio>
    <div class="mask" ref="btnMain">
      <div class="btn">
        <div class="btnOK" @click="start"></div>
      </div>
    </div>
    <img class="musicBtn" src="../assets/images/commonImg/musicBtn.png"/>
    <img class="menuText" src="../assets/images/commonImg/menuTitle.png" alt="">
    <div class="menu">
      <!-- <div class="menuItem menuItem4" @click="gohref('./Phonics/')" :class="!menuFlag.levelPhonics ? 'disable': ''">
        <img src="../assets/images/commonImg/level-p.png" alt="">

      </div> -->
      <div class="menuItem" @click="menuRouter(item.routerUrl)" v-for="(item,index) in list" :key="index" :class="!menuFlag['level'+(index+1)] ? 'menuItem'+index+' disable':'menuItem'+index">
        <!-- <img v-if="item == 1" :src="ImgTitle1" alt=""> -->
        <img :src="item.imgUrl" alt="">

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: '',
    data() {
      return {
        menuFlag:{
          levelPhonics: false,
          level1: false,
          level2: false,
          level3: false,
          level4: false,
        },
        clickAudio: "./static/mp3/click.mp3",
        bgMusicAudio: "./static/mp3/bgmusic.mp3",
        timerList: [],
        list: [{
            routerUrl: 'L1',
            imgUrl: require('../assets/images/commonImg/level-01.png')
          },
          {
            routerUrl: 'L2',
            imgUrl: require('../assets/images/commonImg/level-02.png')
          },
          {
            routerUrl: 'L3',
            imgUrl: require('../assets/images/commonImg/level-03.png')
          },
          {
            routerUrl: 'L4',
            imgUrl: require('../assets/images/commonImg/level-04.png')
          },
        ],
      }
    },
    methods: {
      menuRouter(url) {
        var audio = document.querySelector("#stratMusic2");
        audio.play();
        let that = this;
        that.timerList[0] = window.setTimeout(() => {
          that.$router.replace({
            path: '/menuTwo?id=' + url
          })
          that.fullscreen()
          clearTimeout(that.timerList[0]);
        }, 500);
      },
      start() {
        var audio = document.querySelector("#bgMusic");
        audio.play();
        this.$refs.btnMain.style.display= 'none';
        console.log(this.$refs.btnMain.style)
      },
      gohref(e) {
        var audio = document.querySelector("#stratMusic2");
        audio.play();
        let that = this;
        that.timerList[0] = window.setTimeout(() => {
          window.location.href = e
          that.fullscreen()
        }, 500);
      },
      // 点击level按钮，自动全屏
      fullscreen() {
        var element = document.documentElement; // 返回 html dom 中的root 节点 <html>
        // console.log(element);
        // 判断浏览器设备类型
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // 兼容火狐
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // 兼容谷歌
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // 兼容IE
          element.msRequestFullscreen();
        }
      }
    },
    created() {
      let LoginName = this.$route.query.LoginName
      let Sign = this.$route.query.Sign
      let Level = this.$route.query.Level
      let Res = this.$route.query.Res
      // console.log(Level, Res)
      let postData = {
        LoginName: LoginName,
        Sign: Sign,
        Level: Level,
        Res: Res
      }
      if (LoginName && Sign) {
        var that = this
        axios.get('http://activity.slinqueen.com:8976/check/API/APP/GetUserToken', {
            params: {
              ...postData,
            }
          })
          .then(function(res) {
            if (res.status == 200) {
              // console.log(res)
              if (res.data.code == 0) {
                // 登录成功，写入token
                that.$store.commit('changeLogin', {
                  Authorization: res.data.data.Token,
                  AuthLevel: res.data.data.Level,
                  AuthRes: res.data.data.Res,
                })
                // console.log(res.data.data.Level);
                let level = res.data.data.Level;
                level.indexOf('Phonics')!=-1 ? that.menuFlag.levelPhonics = true : that.menuFlag.levelPhonics;
                level.indexOf('L1')!=-1 ? that.menuFlag.level1 = true : that.menuFlag.level1;
                level.indexOf('L2')!=-1 ? that.menuFlag.level2 = true : that.menuFlag.level2;
                level.indexOf('L3')!=-1 ? that.menuFlag.level3 = true : that.menuFlag.level3;
                level.indexOf('L4')!=-1 ? that.menuFlag.level4 = true : that.menuFlag.level4;
                that.$router.replace('/');
              } else {
                // 登录失败，重新登录
                // alert(res.data.codeMsg)
                window.location.href = that.loginURL;
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    mounted() {
      let token = localStorage.getItem('Authorization');
      if(this.checkAuth && token) {
        let level = localStorage.getItem('AuthLevel');
        console.log(level);
        if (level.indexOf('Phonics')!=-1) {
          this.$set(this.menuFlag,'levelPhonics',true)
        }
        level.indexOf('Phonics')!=-1 ? this.menuFlag.levelPhonics = true : this.menuFlag.levelPhonics;
        level.indexOf('L1')!=-1 ? this.menuFlag.level1 = true : this.menuFlag.level1;
        level.indexOf('L2')!=-1 ? this.menuFlag.level2 = true : this.menuFlag.level2;
        level.indexOf('L3')!=-1 ? this.menuFlag.level3 = true : this.menuFlag.level3;
        level.indexOf('L4')!=-1 ? this.menuFlag.level4 = true : this.menuFlag.level4;
      } else if(!this.checkAuth) {
        this.menuFlag = {
          levelPhonics: true,
          level1: true,
          level2: true,
          level3: true,
          level4: true,
        }
      }

    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/index";
  @rem: 128rem;

  .main {
    margin: 0 auto;
    width: 1920/@rem;
    height: 1280/@rem;
    // background-image: url('../assets/images/commonImg/menuItemBg.png');
    // background-size: cover;
    background-repeat: no-repeat;
    //针对手机
    @media screen and (max-width: 1000px) {
      margin-top: -30/@rem !important;
      overflow-y: auto !important;
        // width: 1.28rem;
        // height: 0.37rem;
    }
  }
  .mask {
    width:100%;height:100%;
    background-color:rgba(0,0,0,0.75);
    z-index:10000;
    position: absolute;display:none;
    .btn {
      position: absolute;
      top:40%;left:50%;
      transform: translate(-200/@rem, -136/@rem) scale(1.3);
      .scale(400,272);
      background-image: url(../assets/images/commonImg/menu_btn.png);
      background-size: cover;
      .btnOK{
          .scale(110,51);
          .pos-a(195,138);
          cursor: pointer;
      }
    }
  }
  .musicBtn{
    .pos-a(56,105);
    .scale(110, 111);
  }
  .menuText {
    display: block;
    // margin: 0.2rem auto;
    width: 806/@rem;
    height: 155/@rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    //针对手机
    // @media screen and (max-width: 1000px) {
    //   margin-top: 0px !important;
    //     // width: 1.28rem;
    //     // height: 0.37rem;
    // }
  }

  .menu {
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/commonImg/menuItemBg.png');
    background-size: cover;
    // background-image: url('../assets/images/commonImg/menuListBg.png');
    // background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .menuItem {
    position: absolute;
    display: inline-block;
    .scale(264, 109);
    animation-fill-mode: forwards;
    &.disable {
      -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
      filter: grayscale(100%);
      animation-name:none !important;
      -webkit-animation-name:none !important;
      pointer-events: none;
    }
    &.menuItem0 {
      .pos-a(683, 323, 3);
      animation: scaleItem 4s ease-in-out 1S infinite alternate;
      -webkit-animation: scaleItem 4s ease-in-out 1S infinite alternate;
    }

    &.menuItem1 {
      .pos-a(939, 666, 3);
      animation: scaleItem 4s ease-in-out 1S infinite alternate;
      -webkit-animation: scaleItem 4s ease-in-out 1.5S infinite alternate;
    }

    &.menuItem2 {
      .pos-a(611, 1080, 3);
      animation: scaleItem 4s ease-in-out 1S infinite alternate;
      -webkit-animation: scaleItem 4s ease-in-out 1.3S infinite alternate;
    }

    &.menuItem3 {
      .pos-a(885, 1528, 3);
      animation: scaleItem 4s ease-in-out 1S infinite alternate;
      -webkit-animation: scaleItem 4s ease-in-out 1.8S infinite alternate;
    }

    // &.menuItem4 {
    //   .pos-a(216, 164, 3);
    //   animation: scaleItem 4s ease-in-out 1S infinite alternate;
    //   -webkit-animation: scaleItem 4s ease-in-out 2.5S infinite alternate;
    // }
  }

  .menuItem img {
    width: 100%;
    height: 100%
  }

  @keyframes scaleItem {
    0% {
      transform: scale(1, 1)
    }

    20% {
      transform: scale(0.95, 1)
    }

    40% {
      transform: scale(1.05, 1)
    }

    60% {
      transform: scale(1, 0.95)
    }

    80% {
      transform: scale(1, 1.05)
    }

    100% {
      transform: scale(1, 1)
    }
  }
</style>
