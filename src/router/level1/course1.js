const drouter = [
      {
        path: '/L1Course1Day1Page1',
        name: 'L1Course1Day1Page1',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day1/page1'], resolve) },
      },
      {
        path: '/L1Course1Day1Page2',
        name: 'L1Course1Day1Page2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day1/page2'], resolve) },
      },{
        path: '/L1Course1Day2Page1',
        name: 'L1Course1Day2Page1',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day2/page1'], resolve) },
      },
      {
        path: '/L1Course1Day2Page2',
        name: 'L1Course1Day2Page2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day2/page2'], resolve) },
      },{
        path: '/L1Course1Day3Page1',
        name: 'L1Course1Day3Page1',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day3/page1'], resolve) },
      },
      {
        path: '/L1Course1Day3Page2',
        name: 'L1Course1Day3Page2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day3/page2'], resolve) },
      },{
        path: '/L1Course1Day4Page1',
        name: 'L1Course1Day4Page1',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day4/page1'], resolve) },
      },
      {
        path: '/L1Course1Day4Page2',
        name: 'L1Course1Day4Page2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day4/page2'], resolve) },
      },
      {
        path: '/L1Course1Day4Page3',
        name: 'L1Course1Day4Page3',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day4/page3'], resolve) },
      },{
        path: '/L1Course1Day5Page1',
        name: 'L1Course1Day5Page1',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day5/page1'], resolve) },
      },
      {
        path: '/L1Course1Day5Page2',
        name: 'L1Course1Day5Page2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'course',
        },
        component: resolve => { require(['@/views/level1/course1/day5/page2'], resolve) },
      },{
        path: '/L1Course1bookPdfPage1',
        name: 'L1Course1bookPdfPage1',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'pdf',
        },
        component: resolve => { require(['@/views/level1/course1/bookPdf/page1'], resolve) },
      },{
        path: '/L1Course1bookPdfPage2',
        name: 'L1Course1bookPdfPage2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'pdf',
        },
        component: resolve => { require(['@/views/level1/course1/bookPdf/page2'], resolve) },
      },{
        path: '/L1Course1videoPage',
        name: 'L1Course1videoPage',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'video',
        },
        component: resolve => { require(['@/views/level1/course1/videoPage'], resolve) },
      },{
        path: '/L1Course1videoPage2',
        name: 'L1Course1videoPage2',
        meta: {
          title: 'Together',
          level: 'L1',
          type: 'video',
        },
        component: resolve => { require(['@/views/level1/course1/videoPage2'], resolve) },
      }
]
export default drouter
