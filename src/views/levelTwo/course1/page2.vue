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
      <div class="page2-content">
        <div class="content">
              <div class="content-match-base">
                    <div v-for="(item,index) in cardBaseList" :key="index" @click="beginMusicAndEnd(item,index,1)" class="each-pic">
                        <span class="itemBg">{{item.name}}</span>
                    </div>
              </div>
              <div class="content-match-cardList">
                  <div class="contentbox each-pic" v-for="(item,index) in cardList" :key="index"  @click="beginMusicAndEnd(item,index,2)">
                      <div v-if="!item.isRolling">
                          <span class="item-text">{{item.name}}</span>
                          <div class="item-img" >
                              <img src="../../../assets/images/commonImg/beike.png"/>
                          </div>
                      </div>
                        <div class="item-img item-img2" v-if="item.isRolling">
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
import VueAudio from "../../../components/shellHuntMenu";

export default{
	name:'try',
  components: {
    VueAudio
  },
	data(){
		return{
			isRolling:false,
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
      router: "course1page3",
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
      cardBaseList:[{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img3.png'),
          beginTime: 7.8,
          endTime: 1.6,
          name: "a",
          groupId:3,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img1.png'),
          beginTime:3,
          endTime:1.5,
          name: "b",
          groupId:1,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img2.png'),
          beginTime: 5.3,
          endTime: 1.5,
          name: "c",
          groupId:2,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img4.png'),
          beginTime: 10.6,
          endTime: 1.4,
          name:"d",
          groupId:4,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img4.png'),
          beginTime: 10.6,
          endTime: 1.4,
          name:"b",
          groupId:5,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img4.png'),
          beginTime: 10.6,
          endTime: 1.4,
          name:"a",
          groupId:6,
          isRolling:false,
        }
      ],
      cardList:[{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 5.3,
          endTime: 1.5,
          name:"Ant",
          groupId:2,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime:3,
          endTime:1.5,
          name:"Ant",
          groupId:1,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 7.8,
          endTime: 1.6,
          name:"bear",
          groupId:3,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 10.6,
          endTime: 1.4,
          name:"Apple",
          groupId:4,
          isRolling:false,
      },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 10.6,
          endTime: 1.4,
          name:"ant",
          groupId:5,
          isRolling:false,
      },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 10.6,
          endTime: 1.4,
          name:"Bee",
          groupId:6,
          isRolling:false,
      }],
      flag: false,
      isRight: false,
      timerList: [],
      deerStep: true
		}
	},
  watch: {
      // cardList:{
      //   handler:function(newVal,oldVal){
      //     console.log(newVal)
      //     this.cardList = newVal;
      //   },
      //   deep: true
      // },
      // cardBaseList:{
      //   handler:function(newVal,oldVal){
      //     console.log(newVal)
      //     this.cardBaseList = newVal;
      //   },
      //   deep: true
      // }
  },
  methods:{
    beginMusicAndEnd(item,index,type){
        let that = this;
        if(type==1){// 类型1  一是播放当前音频  二是匹对看否正确
            if(that.first_Item){
                // console.log('匹对中')
                if(item.groupId != that.first_Item.groupId){
                    console.log('不匹配')
                    // that.audios.url = that.errorAudios;
                    setTimeout(() => {
                        that.cardList[index].isRolling = false;
                        that.first_Item = '';
                    }, 1000);
                  }else{
                    console.log('匹配');
                    // that.audios.url = that.rightAudios;
                    that.isRight = true;
                    // that.
                    that.first_Item = '';
                  }
            }else{
              console.log('播放音频1')
            }
        }else if(type==2){//类型2   一是播放音频 二是翻转动画
            if(item.isRolling) return;
           
            if(!!!that.first_Item){
              console.log("first");
              that.first_Item = item;
              that.cardList[index].isRolling = true;
            }else{
              if(item!= that.first_Item){
                 console.log("请选择匹配项")
              }else{
                 console.log("播放音频2")
              }
             
            }
        }

        // if(that.isRight){

        // }
    },
    playAudio(item){
        let that = this;
        this.playtime.randem = Math.random(1000);
        that.playtime.time = item.beginTime; 
        that.playtime.stopTime = item.endTime;
     
        that.flag = true;
        that.$refs.audioss.startPlay();
    },
    // beginMusicAndEnd(item,index){
    //   let that = this;
    //   that.cardBaseList[index].isRolling = true;
   
    //   this.playtime.randem = Math.random(1000);
    //   that.playtime.time = that.cardList[index].beginTime; 
    //   that.playtime.stopTime = that.cardList[index].endTime;
     
    //   that.flag = true;
    //   that.$refs.audioss.startPlay();
    // },
    // beginMusicAndEndB(item, index) {
    //   let that = this;
    //   if(item.isRolling) return;
    //   that.cardList[index].isRolling = true;
    //   if(!!!that.first_Item){
    //     console.log('first')
    //     that.first_Item = item;
    //   }else{
    //       console.log(that.first_Item);
    //       if(item.groupId !=that.first_Item.groupId){
    //         console.log('不匹配')
    //         // that.audios.url = that.errorAudios;
    //         setTimeout(() => {
    //            // that.cardList[index].isRolling = false;
    //             that.first_Item.isRolling = false;
    //             that.cardList[index].isRolling = false;
    //             that.first_Item = '';
    //         }, 1000);
    //       }else{
    //         console.log('匹配');
    //         // that.audios.url = that.rightAudios;
    //         that.first_Item = '';
    //       }
    //   }
    //   this.playtime.randem = Math.random(1000);
    //   that.playtime.time = that.cardBaseList[index].beginTime; 
    //   that.playtime.stopTime = that.cardBaseList[index].endTime;
     
    //   that.flag = true;
    //   that.$refs.audioss.startPlay();
     
    // },
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    },
    shuffle(arr) {
      // var i = arr.length, t, j;
     for (let i = 1; i < arr.length; i++) {
          const random = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[random]] = [arr[random], arr[i]];
      }
      console.log(arr);
      return arr;
    }
  },
  mounted(){
    // console.log('mounted');
    var that = this;
    
    that.cardList.sort(function () { 
      return Math.random() - 0.5; 
    }); 
    that.cardBaseList.sort(function () { 
      return Math.random() - 0.5; 
    }); 

    // console.log(that.cardList);
    // console.log(that.cardBaseList);
  },
}
</script>
<style lang='less' scoped>
@import "../../../assets/css/index";
@import "../../../assets/css/shellHunt";
@rem: 128rem;

.a_page_2 {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  .content{
    width: 1280/@rem !important;
    .content-match-base,.content-match-cardList{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      justify-content: space-around;
      // .each-pic{
      //     width: 265/@rem !important;
      // }
      .itemBg{
         width: 93/@rem;
         height: 93/@rem;
         line-height: 93/@rem;
         display: block;
         background: url('../../../assets/images/commonImg/hunt1.png') no-repeat;
         background-size: cover;
         font-size: 40/@rem;
         text-align: center;
         color: #fff;
      }
      img{
        display: inline-block;
        width: 100%;
      }
    }
    .content-match-base{
      .each-pic:nth-child(2n){
        margin-top: 50/@rem;
      }
    }
    .content-match-cardList{
      margin-top: 190/@rem;
      height: 247/@rem;
    }
  }
}
.contentbox{
    position: relative;
    width: 200/@rem;
    height: 210/@rem;
    color: #fff;
    font-size: 32/@rem;
    text-align: center;
    .item-text{
      width: 100%;
      display: inline-block;
      text-align: center;
    }
    .item-img{
        position: absolute;
        bottom: 10/@rem;
        left: 10/@rem;
        width: 175/@rem;
        height: 110/@rem;
    }
    .item-img2{
        width: 175/@rem;
        height: 189/@rem;
    }
}
</style>
