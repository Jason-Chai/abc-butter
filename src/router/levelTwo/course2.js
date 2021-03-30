/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-21 14:02:03
 * @LastEditTime: 2019-09-22 14:12:55
 * @LastEditors: Please set LastEditors
 */
const drouter = [
    {
        path: '/course2page1',
        name: 'course2page1',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course2/page1.vue'], resolve) },
      },
      {
        path: '/course2page2',
        name: 'course2page2',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course2/page2'], resolve) },
      },{
        path: '/course2page3',
        name: 'course2page3',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course2/page3'], resolve) },
      },{
        path: '/course2page4',
        name: 'course2page4',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course2/page4'], resolve) },
      },{
        path: '/course2page5',
        name: 'course2page5',
        meta: {
          title: 'Short Vowel A',
        },
        component: resolve => { require(['@/views/levelTwo/course2/page5'], resolve) },
      }
]
export default drouter