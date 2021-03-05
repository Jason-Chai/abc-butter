<template>
  <div class="main">
    <img class="menuText" v-show="currentLevel===1" src="../assets/images/commonImg/menuTwo/level1.png">
    <img class="menuText" v-show="currentLevel===2" src="../assets/images/commonImg/menuTwo/level2.png">
    <img class="menuText" v-show="currentLevel===3" src="../assets/images/commonImg/menuTwo/level3.png">
    <img class="menuText" v-show="currentLevel===4" src="../assets/images/commonImg/menuTwo/level4.png">
    <router-link to="menu" class="menuBack" replace><img src="../assets/images/commonImg/menuTwo/menu-back.png"></router-link>
    <div class="menu">
      <div class="menuItem" @click="menuRouter(item.routerUrl)" v-for="(item,index) in currentPageData" :key="index">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- {{currentPage}} / {{pageNum}} -->
    <div class="page">
        <div :class="this.currentPage == 1 ? 'noPre-page': 'pre-page'" @click="prePage"></div>
        <div :class="this.currentPage == this.pageNum ? 'noNext-page': 'next-page'" @click="nextPage"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        currentLevel: 1,
        // 所有页面的数据
        totalPage: [],
        // 每页显示数量
        pageSize: 8,
        // 共几页
        pageNum: 2,
        // 当前显示的数据
        currentPageData: "",
        currentPage: 1,
        list: {
          listLevel1: [{
              routerUrl: 'Course1',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-1.png'),
              titleText: '课程一'
            },
            {
              routerUrl: 'Course2',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-2.png'),
              titleText: '课程二'
            },
            {
              routerUrl: 'Course3',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-3.png'),
              titleText: '课程三'
            },
            {
              routerUrl: 'Course4',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-4.png'),
              titleText: '课程四'
            },
            {
              routerUrl: 'Course5',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-5.png'),
              titleText: '课程五'
            },
            {
              routerUrl: 'Course6',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-6.png'),
              titleText: '课程六'
            },
            {
              routerUrl: 'Course7',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-7.png'),
              titleText: '课程七'
            },
            {
              routerUrl: 'Course8',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-8.png'),
              titleText: '课程八'
            },
            {
              routerUrl: 'Course9',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-9.png'),
              titleText: '课程九'
            }, {
              routerUrl: 'Course10',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-10.png'),
              titleText: '课程十'
            },
            {
              routerUrl: 'Course11',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-11.png'),
              titleText: '课程十一'
            },
            {
              routerUrl: 'Course12',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-12.png'),
              titleText: '课程十二'
            },
            {
              routerUrl: 'Course13',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-13.png'),
              titleText: '课程十三'
            },
            {
              routerUrl: 'Course14',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-14.png'),
              titleText: '课程十四'
            },
            {
              routerUrl: 'Course15',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-15.png'),
              titleText: '课程十五'
            }, {
              routerUrl: 'Course16',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img1-16.png'),
              titleText: '课程十六'
            }

          ],
          listLevel2: [{
              routerUrl: 'Course1',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-1.png'),
              titleText: '课程一'
            },
            {
              routerUrl: 'Course2',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-2.png'),
              titleText: '课程二'
            },
            {
              routerUrl: 'Course3',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-3.png'),
              titleText: '课程三'
            },
            {
              routerUrl: 'Course4',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-4.png'),
              titleText: '课程四'
            },
            {
              routerUrl: 'Course5',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-5.png'),
              titleText: '课程五'
            },
            {
              routerUrl: 'Course6',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-6.png'),
              titleText: '课程六'
            },
            {
              routerUrl: 'Course7',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-7.png'),
              titleText: '课程七'
            },
            {
              routerUrl: 'Course8',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-8.png'),
              titleText: '课程八'
            },
            {
              routerUrl: 'Course9',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-9.png'),
              titleText: '课程九'
            }, {
              routerUrl: 'Course10',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-10.png'),
              titleText: '课程十'
            },
            {
              routerUrl: 'Course11',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-11.png'),
              titleText: '课程十一'
            },
            {
              routerUrl: 'Course12',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-12.png'),
              titleText: '课程十二'
            },
            {
              routerUrl: 'Course13',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-13.png'),
              titleText: '课程十三'
            },
            {
              routerUrl: 'Course14',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-14.png'),
              titleText: '课程十四'
            },
            {
              routerUrl: 'Course15',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-15.png'),
              titleText: '课程十五'
            }, {
              routerUrl: 'Course16',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img2-16.png'),
              titleText: '课程十六'
            }

          ],
          listLevel3: [{
              routerUrl: 'Course1',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-1.png'),
              titleText: '课程一'
            },
            {
              routerUrl: 'Course2',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-2.png'),
              titleText: '课程二'
            },
            {
              routerUrl: 'Course3',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-3.png'),
              titleText: '课程三'
            },
            {
              routerUrl: 'Course4',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-4.png'),
              titleText: '课程四'
            },
            {
              routerUrl: 'Course5',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-5.png'),
              titleText: '课程五'
            },
            {
              routerUrl: 'Course6',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-6.png'),
              titleText: '课程六'
            },
            {
              routerUrl: 'Course7',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-7.png'),
              titleText: '课程七'
            },
            {
              routerUrl: 'Course8',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-8.png'),
              titleText: '课程八'
            },
            {
              routerUrl: 'Course9',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-9.png'),
              titleText: '课程九'
            }, {
              routerUrl: 'Course10',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-10.png'),
              titleText: '课程十'
            },
            {
              routerUrl: 'Course11',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-11.png'),
              titleText: '课程十一'
            },
            {
              routerUrl: 'Course12',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-12.png'),
              titleText: '课程十二'
            },
            {
              routerUrl: 'Course13',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-13.png'),
              titleText: '课程十三'
            },
            {
              routerUrl: 'Course14',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-14.png'),
              titleText: '课程十四'
            },
            {
              routerUrl: 'Course15',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-15.png'),
              titleText: '课程十五'
            }, {
              routerUrl: 'Course16',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img3-16.png'),
              titleText: '课程十六'
            }

          ],
          listLevel4: [{
              routerUrl: 'Course1',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-1.png'),
              titleText: '课程一'
            },
            {
              routerUrl: 'Course2',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-2.png'),
              titleText: '课程二'
            },
            {
              routerUrl: 'Course3',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-3.png'),
              titleText: '课程三'
            },
            {
              routerUrl: 'Course4',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-4.png'),
              titleText: '课程四'
            },
            {
              routerUrl: 'Course5',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-5.png'),
              titleText: '课程五'
            },
            {
              routerUrl: 'Course6',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-6.png'),
              titleText: '课程六'
            },
            {
              routerUrl: 'Course7',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-7.png'),
              titleText: '课程七'
            },
            {
              routerUrl: 'Course8',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-8.png'),
              titleText: '课程八'
            },
            {
              routerUrl: 'Course9',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-9.png'),
              titleText: '课程九'
            }, {
              routerUrl: 'Course10',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-10.png'),
              titleText: '课程十'
            },
            {
              routerUrl: 'Course11',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-11.png'),
              titleText: '课程十一'
            },
            {
              routerUrl: 'Course12',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-12.png'),
              titleText: '课程十二'
            },
            {
              routerUrl: 'Course13',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-13.png'),
              titleText: '课程十三'
            },
            {
              routerUrl: 'Course14',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-14.png'),
              titleText: '课程十四'
            },
            {
              routerUrl: 'Course15',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-15.png'),
              titleText: '课程十五'
            }, {
              routerUrl: 'Course16',
              imgUrl: require('../assets/images/commonImg/menuTwo/menu-img4-16.png'),
              titleText: '课程十六'
            }

          ],
        }
      }
    },
    mounted() {
      // this.pageNum = Math.ceil(this.list.length / this.pageSize) || 1;
      this.getCurrentPageData();
    },
    created() {
      let temp = this.$route.query.id;
      this.currentLevel = parseInt(temp.substring(1, 2));
      if (temp == undefined || temp == "" || temp == null) {
        temp = "L1Course9";
      }
    },
    methods: {
      menuRouter(url) {
        this.$router.replace({
          path: '/index?id=' + this.$route.query.id + url
        })
      },
      getCurrentPageData() {
        let begin = (this.currentPage - 1) * this.pageSize;
        let end = this.currentPage * this.pageSize;
        this.currentPageData = this.list['listLevel' + this.currentLevel].slice(begin, end);
      },
      nextPage() {
        if (this.currentPage == this.pageNum) return;
        this.currentPage++;
        this.getCurrentPageData();
      },
      prePage() {
        if (this.currentPage == 1) return;
        this.currentPage--;
        this.getCurrentPageData();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/index";
  @rem: 128rem;

  .main {
    width: 1920/@rem;
    height: 1280/@rem;
    background-image: url('../assets/images/commonImg/menuTwo/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .menuText {
    .pos-a(445, 78, 3);
    .scale(364, 265);
    display: block;
  }

  .menuBack {
    .pos-a(0, 1732, 3);
    .scale(118, 149);

    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }

  .menu {
    .pos-a(244, 460, 3);
    width: 994/@rem;
    height: 690/@rem;
    padding: 0 25/@rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    .menuItem {
      width: 223/@rem;
      height: 282/@rem;
      margin: 0 5/@rem 50/@rem;
      display: inline-block;
    }

    .menuItem img {
      width: 100%;
      height: 100%
    }
  }

  .page {
    position: absolute;
    .pos-a(945, 0, 3);
    width: 100%;
    height: 100/@rem;

    .pre-page,
    .noPre-page,
    .next-page,
    .noNext-page {
      width: 60/@rem;
      height: 91/@rem;
    }

    .pre-page {
      .pos-a(5, 890, 3);
      background: url(../assets/images/commonImg/menuTwo/menu-left.png) no-repeat;
      background-size: 100% 100%;
    }

    .noPre-page {
      .pos-a(5, 890, 3);
      background: url(../assets/images/commonImg/menuTwo/menu-left-no.png) no-repeat;
      background-size: 100% 100%;
    }

    .next-page {
      .pos-a(5, 966, 3);
      background: url(../assets/images/commonImg/menuTwo/menu-right.png) no-repeat;
      background-size: 100% 100%;
    }

    .noNext-page {
      .pos-a(5, 966, 3);
      background: url(../assets/images/commonImg/menuTwo/menu-right-no.png) no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
