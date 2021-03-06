import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('@/views/index')
    },
    {
      path: '/hao123moe',
      name: 'hao123萌主页 - 只属于你的二次元主页_hao123上网导航',
      meta: {
        iconUrl: 'http://www.hao123.com/favicon.ico'
      },
      component: () => import('@/views/hao123moe')
    },
    {
      path: '/bilibili',
      name: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
      meta: {
        iconUrl: 'https://static.hdslb.com/images/favicon.ico'
      },
      component: () => import('@/views/bilibili')
    },
    {
      path: '/banciyuan',
      name: '我的首页 | 半次元-二次元爱好者社区',
      meta: {
        iconUrl: 'https://pubin.bcyimg.com/Image/favicon-334e2c1c68.ico?20140414'
      },
      component: () => import('@/views/banciyuan')
    }
  ]
})
