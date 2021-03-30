<template>
<div class="a_page_2">
    <div class="bg-div">
      <!-- <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer"/> -->
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
      <div class="page1-content">
        <div class="content">
              <div class="rollbox each-pic" v-for="(item,index) in cardList" :key="index"  @click="beginMusicAndEnd(item,index)" :class="{'box_rolling':item.isRolling}">
                  <!-- 前面div -->
                  <div class="rollbox_front">
                    <div class="contentbox">
                        <img src="../../../assets/images/commonImg/front.png"/>
                    </div>
                  </div>
                  <!-- 后面div -->
                  <div class="rollbox_behind">
                    <div class="contentbox">
                         <img :src="item.imgSrc" alt>
                    </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueAudio from "../../../components/cardMatchMenu";
// import {getDiscList} from 'api/course'
//直接进行引入api.js里面的方法 传参数 接受回调
//举例子
import { projectlist ,pagesList } from "../../../api/course.js"; // 导入我们的api接口


export default{
	name:'try',
  components: {
    VueAudio
  },
	data(){
		return{
			isClick: true,//是否可点击
      value1: 50,
      audios: {
        url: "./static/mp3/level1/level1-01.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
      rightAudios:'./static/mp3/music.mp3',
      errorAudios:'./static/mp3/click.mp3',
      playtime: {
        time: 0.5,
        randem: Math.random(1000),
        stopTime: 2.4
      },
      router: "course1page2",
      menuList:[//右侧菜单
          {
            routerUrl:'L1Course1Day1Page1',
            imgSrc:require('../../../assets/images/commonImg/menu/theme-vocan-menu-voca.png')
          },
          {
            routerUrl:'L1Course1Day1Page2',
            imgSrc:require('../../../assets/images/commonImg/menu/theme-vocan-menu-lookchoose.png')
          },
          {
            routerUrl:'index?id=L1Course1',
            imgSrc:require('../../../assets/images/commonImg/menu/theme-vocan-menu-back.png')
          }
      ],
      first_Item:'',//首次翻转Index
      oldRoll_Index:'',
      cardList:[{
          imgSrc:require('@/assets/images/level1/course1/day1-p1-img1.png'),
          beginTime:3,
          endTime:1.5,
          groupId:1,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p1-img2.png'),
          beginTime: 5.3,
          endTime: 1.5,
          groupId:2,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p1-img3.png'),
          beginTime: 7.8,
          endTime: 1.6,
          groupId:3,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p1-img4.png'),
          beginTime: 10.6,
          endTime: 1.4,
          groupId:4,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p2-img1.png'),
          beginTime: 5.3,
          endTime: 1.5,
          groupId:2,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p2-img2.png'),
           beginTime: 10.6,
           endTime: 1.4,
           groupId:4,
           isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p2-img3.png'),
          beginTime: 7.8,
          endTime: 1.6,
          groupId:3,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/day1-p2-img4.png'),
          beginTime:3,
          endTime:1.5,
          groupId:1,
          isRolling:false,
        },
      ],
      flag: false,
      timerList: [],
      deerStep: true
		}
	},
  created(){
     pagesList().then(res => {
       console.log(res);
     })
      //  projectlist(
      //  {
      //     name:"小坦克",
      //     password:"3485"
      //  }
      //  ).then(res => {
      //      console.log(res)
      //  });
  },
  methods:{
    beginMusicAndEnd(item, index) {
      
      let that = this;
      if(item.isRolling) return;
      that.cardList[index].isRolling = true;
      if(!!!that.first_Item){
        console.log('first')
        that.first_Item = item;
      }else{
          console.log(that.first_Item);
          if(item.groupId !=that.first_Item.groupId){
            console.log('不匹配')
            // that.audios.url = that.errorAudios;
            setTimeout(() => {
               // that.cardList[index].isRolling = false;
                that.first_Item.isRolling = false;
                that.cardList[index].isRolling = false;
                that.first_Item = '';
            }, 1000);
          }else{
            console.log('匹配');
            // that.audios.url = that.rightAudios;
            that.first_Item = '';
          }
      }
   
      this.playtime.randem = Math.random(1000);
      that.playtime.time = that.cardList[index].beginTime; 
      that.playtime.stopTime = that.cardList[index].endTime;
     
      that.flag = true;
      that.$refs.audioss.startPlay();
     
    },
    // _getDiscList() {
    //     if (!this.disc.dissid) {
    //       this.$router.push('/recommend')
    //       return
    //     }
    //     getDiscList(this.disc.dissid).then((res) => {
    //       if (res.code === ERR_OK) {
    //         this.songs = this._normalizeSongs(res.cdlist[0].songlist)
    //       }
    //     })
    // },
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    }
  }
}
</script>
<style lang='less' scoped>
@import "../../../assets/css/index";
@import "../../../assets/css/cardMatch";
@rem: 128rem;

.a_page_2 {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  .content{
    width: 1080/@rem !important;
    .each-pic{
      margin-right: 40/@rem;
      margin-bottom: 20/@rem;
    }
  }
}
</style>
