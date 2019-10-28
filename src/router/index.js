import Vue from 'vue'
import VueRouter from 'vue-router'

/*Views... */
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Pictures from '../views/Pictures.vue'
import Customers from '../views/Customers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/pictures/:id',
    name: 'pictures',
    component: Pictures
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers
  }
 
] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
