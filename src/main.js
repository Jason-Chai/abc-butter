/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 15:00:04
 * @LastEditTime: 2019-08-30 21:40:14
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import iView from './iView';
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';


import 'reset-css'
import "babel-polyfill"
import './assets/css/common.css';
import './assets/css/animate.css';
import VideoPlayer from 'vue-video-player'


require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
import util from './libs/utils';


Vue.config.productionTip = false
Vue.prototype.util = util;

// 鉴权开关 & 跳转路径
const loginURL = 'https://www.kindercloud.net/sys/#/login/'
const checkAuth = false
Vue.prototype.loginURL = loginURL;
Vue.prototype.checkAuth = checkAuth;


//iView 模块管理
/**
 * 按需循环挂在iView
 */
Object.keys(iView).forEach(key => {
  Vue.component(key, iView[key]);
});
// 自定义过滤器
Vue.filter('mySubstring', function(value, num) {
  if (!value) return ''
  if (value.length > 25) {
    value = value.substring(0, num) + '...'
  }
  return value
})
Vue.filter('fmoney', function(s, num) {
  if (s == undefined || s == '' || s == null) {
    return "0.00";
  }
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
  let l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
})


// 根据路由meta设置title标签

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  iView.LoadingBar.start();
  if (!checkAuth || to.path === '/menu') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    console.log(token)
    if (token === 'null' || token === '') {
      alert('登录凭证过期,请重新登录');
      window.location.href = loginURL
    } else {
      var level = to.meta.level ? to.meta.level : '';
      var res = to.meta.type ? to.meta.type : '';
      axios.get('http://activity.slinqueen.com:8976/check/API/APP/GetUserState', {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'token': token
          },
          params: {
            level: level,
            res: res
          }
        })
        .then(function(res) {
          console.log(res)
          if (res.data.code == 0) {
            next();
          } else {
            alert(res.data.codeMsg);
            window.location.href = loginURL
          }
        })
        .catch(function(error) {
          alert('网络错误,请重新登录');
          window.location.href = loginURL
        });
    }
  }
})
router.afterEach(route => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
  // 回到顶部
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
