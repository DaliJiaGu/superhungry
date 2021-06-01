import Vue from 'vue'
import Router from 'vue-router'

import Meal from 'views/meal/Meal'
import MealGoods from 'views/meal/childComps/MealGoods'

// 声明使用插件
Vue.use(Router)

// const Home = () => import('../views/home/Home')
// const Category = () => import('../views/category/Categroy')
// const Profile = () => import('../views/profile/Profile')
// const Shopcart = () => import('../views/shopcart/Shopcart')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 所有路由
  routes: [
    {
  //     path: '/',
  //     component: Home
  //   },
  //   {
  //     path: '/home',
  //     component: Home
  //   }, {
  //     path: '/category',
  //     component: Category
  //   }, {
  //     path: '/profile',
  //     component: Profile
  //   }, {
  //     path: '/shopcart',
  //     component: Shopcart
  //   },
  // ],

      path: '/hungry/meal',
      component: Meal,
      // meal 下面的子路由，也就是meal里面的navbar对应的路由
      children: [
        // 这个是默认进去的就是goods这个路由对应的页面
        {
          path: '',
          redirect: '/hungry/meal/goods'
        },
        {
          path: '/hungry/meal/goods',
          component: MealGoods,
        },
      ]
    },
  ]
})
