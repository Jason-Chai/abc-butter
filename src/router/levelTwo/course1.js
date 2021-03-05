/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-21 14:02:03
 * @LastEditTime: 2019-09-22 14:12:55
 * @LastEditors: Please set LastEditors
 */
const drouter = [
    {
        path: '/course1page1',
        name: 'course1page1',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page1.vue'], resolve) },
      },
      {
        path: '/course1page2',
        name: 'course1page2',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page2'], resolve) },
      },{
        path: '/course1page3',
        name: 'course1page3',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page3'], resolve) },
      },{
        path: '/course1page4',
        name: 'course1page4',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page4'], resolve) },
      },{
        path: '/course1page5',
        name: 'course1page5',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page5'], resolve) },
      },{
        path: '/course1page6',
        name: 'course1page6',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page6'], resolve) },
      },{
        path: '/course1page7',
        name: 'course1page7',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page7'], resolve) },
      },{
        path: '/course1page8',
        name: 'course1page8',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page8'], resolve) },
      },{
        path: '/course1page9',
        name: 'course1page9',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page9'], resolve) },
      },{
        path: '/course1page10',
        name: 'course1page10',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course1/page10'], resolve) },
      }
]
export default drouter