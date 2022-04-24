<template>
  <div id="listProduct">
      <Header/>
      <BreadCrumb/>
      <Kategori/>
      <Teratas/>
      <DaftarLaptop/>
      <Aksesoris2/>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import Kategori from '@/components/Kategori.vue'
import Teratas from '@/components/Teratas.vue'
import DaftarLaptop from '@/components/DaftarLaptop.vue'
import Aksesoris2 from '@/components/Aksesoris2.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'ListProduct',
    components:{
      Header,
      BreadCrumb,
      Kategori,
      Teratas,
      DaftarLaptop,
      Aksesoris2,
      Footer,

    }
}
</script>

<style>

</style>