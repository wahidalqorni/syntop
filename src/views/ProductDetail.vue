<template>
  <div id="productDetail">
      <Header/>
      <BreadCrumbProductDetail/>
      <BannerProductDetail/>
      <Rekomendasi2/>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BreadCrumbProductDetail from '@/components/BreadCrumbProductDetail.vue'
import BannerProductDetail from '@/components/BannerProductDetail.vue'
import Rekomendasi2 from '@/components/Rekomendasi2.vue'
import Footer from '@/components/Footer.vue'


export default {
    name:'ProductDetail',
    components:{
      Header,
      BreadCrumbProductDetail,
      BannerProductDetail,
      Rekomendasi2,
      Footer,
    
    }
}
</script>

<style>

</style>