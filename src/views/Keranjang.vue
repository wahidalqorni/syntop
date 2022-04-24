<template>
  <div id="Keranjang">
    <HeaderKeranjang/>
    <BreadCrumbKeranjang/>
    <TabelKeranjang/>
    <Footer/>
      
  </div>
</template>

<script>
import HeaderKeranjang from '@/components/HeaderKeranjang.vue'
import BreadCrumbKeranjang from '@/components/BreadCrumbKeranjang.vue'
import TabelKeranjang from '@/components/TabelKeranjang.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'Keranjang',
    components:{
      HeaderKeranjang,
      BreadCrumbKeranjang,
      TabelKeranjang,
      Footer,
      
    }
}
</script>

<style>

</style>