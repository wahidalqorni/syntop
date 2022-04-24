import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import ListProduct from '../views/ListProduct.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import Latihan  from '../views/Latihan.vue'
import KeranjangKosong from '../views/KeranjangKosong.vue'
import Checkout from '../views/Checkout.vue'
import Checkout2 from '../views/Checkout2.vue'

const routes = [
  {
    path: '/latihan',
    name: 'Latihan',
    component: Latihan
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/', //ini adalah induk karena setelah slice ga ada kata atau huruf apappun untuk alamat webnya
    name: 'LandingPage',
    component: LandingPage
  },

  {
    path: '/listproduct', //ini adalah anak alamat web yang ditulis di browser
    name: 'ListProduct',
    component: ListProduct
  },

  {
    path: '/productdetail', //ini adalah anak alamat web yang ditulis di browser
    name: 'ProductDetail',
    component: ProductDetail
  },

  {
    path: '/keranjang', //ini adalah anak alamat web yang ditulis di browser
    name: 'Keranjang',
    component: Keranjang
  },
  
  {
    path: '/keranjangkosong', //ini adalah anak alamat web yang ditulis di browser
    name: 'KeranjangKosong',
    component: KeranjangKosong
  },

  {
    path: '/checkout', //ini adalah anak alamat web yang ditulis di browser
    name: 'Checkout',
    component: Checkout
  },

  {
    path: '/checkout2', //ini adalah anak alamat web yang ditulis di browser
    name: 'Checkout2',
    component: Checkout2
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
