<template>
  <div id="KeranjangKosong">
    <HeaderKeranjang />
    <BreadCrumbKeranjang />
    <BannerKeranjangKosong />
    <Footer />
  </div>
</template>

<script>
import HeaderKeranjang from "@/components/HeaderKeranjang.vue";
import BreadCrumbKeranjang from "@/components/BreadCrumbKeranjang.vue";
import BannerKeranjangKosong from "@/components/BannerKeranjangKosong.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "KeranjangKosong",
  components: {
    HeaderKeranjang,
    BreadCrumbKeranjang,
    BannerKeranjangKosong,
    Footer,
    
  },
};
</script>

<style>
</style>

