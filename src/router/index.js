/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-17 13:48:46
 * @LastEditTime: 2019-09-27 20:04:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'

import testCourse from './levelTwo/course1'
import l1course1 from './level1/course1'
import l1course2 from './level1/course2'
import l1course3 from './level1/course3'
import l1course4 from './level1/course4'
import l1course5 from './level1/course5'
import l1course6 from './level1/course6'
import l1course7 from './level1/course7'
import l1course8 from './level1/course8'
import l1course9 from './level1/course9'
import l1course10 from './level1/course10'
import l1course11 from './level1/course11'
import l1course12 from './level1/course12'
import l1course13 from './level1/course13'
import l1course14 from './level1/course14'
import l1course15 from './level1/course15'
import l1course16 from './level1/course16'


Vue.use(Router)
let NODE_ENV = process.env.NODE_ENV;
let mode = '';
mode = NODE_ENV == 'production' ? 'history' : 'hash';
//console.log(process.env)

export default new Router({
  linkActiveClass: "active",
  mode: 'history',
  //base:'/sjp2p/',
  routes: [
    {
      path: '/',
      name: '默认',
      redirect: '/menu',
    },
    {
      path: '/index',
      name: '主页',
      meta: {
        title: 'Welcome to Happy Vill!',
        level: '',
        type: '',
      },
      component: resolve => { require(['@/views/Index'], resolve) },
    },
    {
      path: '/indexTwo',
      name: '/indexTwo',
      meta: {
        title: 'Welcome to Happy Vill!',
        level: '',
        type: '',
      },
      component: resolve => { require(['@/views/indexLevelTwo'], resolve) },
    }, {
      path: '/menu',
      name: '/menu',
      meta: {
        title: 'Welcome to Happy Vill!',
        level: '',
        type: '',
      },
      component: resolve => { require(['@/views/menu'], resolve) },
    },{
      path: '/menuTwo',
      name: '/menuTwo',
      meta: {
        title: 'Welcome to Happy Vill!',
        level: '',
        type: '',
      },
      component: resolve => { require(['@/views/menuLevelTwo'], resolve) },
    },
    ...testCourse,
    ...l1course1,
    ...l1course2,
    ...l1course3,
    ...l1course4,
    ...l1course5,
    ...l1course6,
    ...l1course7,
    ...l1course8,
    ...l1course9,
    ...l1course10,
    ...l1course11,
    ...l1course12,
    ...l1course13,
    ...l1course14,
    ...l1course15,
    ...l1course16
  ]
})
