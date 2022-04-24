<template>
  <div id="landingPage">
    <Header />
    <Banner />
    <Kategori />
    <Slider />
    <Rekomendasi />
    <Aksesoris />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Kategori from "@/components/Kategori.vue";
import Slider from "@/components/Slider.vue";
import Rekomendasi from "@/components/Rekomendasi.vue";
import Aksesoris from "@/components/Aksesoris.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LandingPage",
  components: {
    Header,
    Banner,
    Kategori,
    Slider,
    Rekomendasi,
    Aksesoris,
    Footer,
  },
};
</script>

<style></style>
