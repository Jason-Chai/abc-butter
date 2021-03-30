<template>
  <div class="main">
    <div class="bg-div">
      <div class="con-left">
        <img :src="leftImg" />
      </div>
      <div class="con-right">
        <div class="menuBack" @click="menuBack">
          <img src="../assets/images/commonImg/menu/icon-back.png">
        </div>
        <div class="menuItem" @click="menuRouter(item.routerUrl,item.type)" v-for="(item,index) in list" :key="index"
          :class="item.type=='disable'?item.className+' disable':item.className">
          <img :src="item.imgUrl" />
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
        list: [{
            routerUrl: "day1",
            type: 'router',
            imgUrl: require("../assets/images/commonImg/menu/icon-day1.png"),
            className: "icon-day1",
            model:'Warmp',//1:Warmp up; 2:Introduction; 3:Presentation;4:Playtime;5:Closure
          },
          {
            routerUrl: "day2",
            type: 'router',
            imgUrl: require("../assets/images/commonImg/menu/icon-day2.png"),
            className: "icon-day2",
             model:'Introduction'
          },
          {
            routerUrl: "day3",
            type: 'router',
            imgUrl: require("../assets/images/commonImg/menu/icon-day3.png"),
            className: "icon-day3",
             model:'Presentation'
          },
          {
            routerUrl: "day4",
            type: 'router',
            imgUrl: require("../assets/images/commonImg/menu/icon-day4.png"),
            className: "icon-day4",
             model:'Playtime'
          },
          {
            routerUrl: "day5",
            type: 'router',
            imgUrl: require("../assets/images/commonImg/menu/icon-day5.png"),
            className: "icon-day5",
            model: 'Closure'            
          }, {
            routerUrl: "bookPdf",
            type: 'router',
            imgUrl: require("../assets/images/commonImg/menu/icon-ebook.png"),
            className: "icon-ebook"
          }, {
            routerUrl: "Teaching-Plan",
            type: 'download',
            imgUrl: require("../assets/images/commonImg/menu/icon-resoures.png"),
            className: "icon-resoures"
          }, {
            routerUrl: "videoPage",
            type: 'custom',
            imgUrl: require("../assets/images/commonImg/menu/icon-cartoon.png"),
            className: "icon-cartoon"
          }, {
            routerUrl: "videoPage2",
            type: 'disable',
            imgUrl: require("../assets/images/commonImg/menu/icon-class.png"),
            className: "icon-class"
          }
        ],
        step: 0,
        timer: null,
        count: 0,
        isPlaying: false,
        bg: "",
        animateNum: 100
      };
    },
    created() {
      // console.log("*****************", this.$route.query.id);
      let temp = this.$route.query.id;
      if (temp == undefined || temp == "" || temp == null) {
        temp = "L1Course10";
      }
    },
    watch: {},
    mounted() {
      // 鉴权
      if (this.checkAuth) {
        let res = localStorage.getItem('AuthRes');
        if (res.indexOf('Course') == -1) {
          this.list[0].type = 'disable'
          this.list[1].type = 'disable'
          this.list[2].type = 'disable'
          this.list[3].type = 'disable'
          this.list[4].type = 'disable'
        }
        if (res.indexOf('Pdf') == -1) {
          this.list[5].type = 'disable'
          this.list[7].type = 'disable'
        }
        if (res.indexOf('Download') == -1) {
          this.list[6].type = 'disable'
        }
        if (res.indexOf('Video') == -1) {
          this.list[8].type = 'disable'
        }
      }

      if(this.isMobile()){ //移动设备下禁止下载资源
        var isResoures = this.list.find((item)=>item.className == 'icon-resoures');
        if(isResoures){
          this.list[6].type = 'disable'
        }
      }
    },
    methods: {
      isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        return flag;
      },
      menuRouter(url, type) {
        // console.log(url);
        if (!this.$route.query.id) this.$route.query.id = 'L1Course10'
        if (type == 'router') {
          this.$router.replace({
            path: '/' + this.$route.query.id + url + 'Page1'
          })
        } else if (type == 'download') {
          var hostUrl = 'http://ebook.mtx.xdf.cn/static/pdf/'
          var fileName = this.$route.query.id + '-' + url + '.pdf'
          var link = document.createElement('a')
          link.href = hostUrl + this.$route.query.id + '-' + url + '.pdf'
          link.download = fileName
          link.target = "_blank"
          link.click()
        } else {
          this.$router.replace({
            path: '/' + this.$route.query.id + url
          })
        }
      },
      begin() {
        beginthis.$refs["bg1"].style.display = "none";
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
      menuBack() {
        // console.log(this.$route.query.id.substring(0,2));
        this.$router.replace({
          path: '/menuTwo?id=' + this.$route.query.id.substring(0, 2)
        })
      },
      MainClick() {},
    },
    computed: {
      leftImg: function() {
        return require('../assets/images/commonImg/menu/left-img-' + this.$route.query.id + '.png')
      },
    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/css/index";
  @rem: 128rem;

  .main {
    position: relative;
  }

  #stratMusic2 {
    display: none;
  }

  .bg-div {
    width: 1920/@rem;
    height: 1280/@rem;
    background: url("../assets/images/commonImg/menu/bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    .con-left {
      .pos-a(115, 134);
      .scale(544, 921);
    }

    .con-right {
      .menuBack {
        cursor: pointer;
        .pos-a(125, 1662, 3);
        .scale(118, 149);

        img {
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }

      .menuItem {
        position: absolute;
        .scale(122, 122);
        cursor: pointer;

        img {
          display: block;
          width: 100%;
        }

        &.disable {
          -webkit-filter: grayscale(100%);
          /* Chrome, Safari, Opera */
          filter: grayscale(100%);
          pointer-events: none;
        }

        &.icon-ebook {
          .pos-a(233, 1098)
        }

        &.icon-cartoon {
          .pos-a(388, 1098)
        }

        &.icon-day1 {
          .pos-a(542, 1098)
        }

        &.icon-day2 {
          .pos-a(542, 1239)
        }

        &.icon-day3 {
          .pos-a(542, 1380)
        }

        &.icon-day4 {
          .pos-a(542, 1521)
        }

        &.icon-day5 {
          .pos-a(542, 1662)
        }

        &.icon-resoures {
          .pos-a(697, 1098)
        }

        &.icon-class {
          .pos-a(851, 1296)
        }
      }
    }
  }
</style>
