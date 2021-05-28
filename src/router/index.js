import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Categroy')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/Shopcart')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    }, {
      path: '/category',
      component: Category
    }, {
      path: '/profile',
      component: Profile
    }, {
      path: '/shopcart',
      component: Shopcart
    },
  ],
})
