import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods.vue'
import Ratings from '@/components/ratings/ratings.vue'
import Seller from '@/components/seller/seller'

Vue.use(Router)

const routes = [
  { path: '/', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

export default new Router({
  routes,
  linkActiveClass: 'active'
})
