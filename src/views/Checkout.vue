<template>
  <div id="Checkout">
    <HeaderKeranjang />
    <BreadCrumbCheckout />
    <BannerCheckout />
    <Identitas />
    <PembayaranCheckout />
    <RingkasanBelanjaCheckout />
    <div class="container">
      <div class="col-lg-2 mt-5">
        <router-link to="/checkout2">
          <button type="button" class="btn btn-success">Bayar >></button>
        </router-link>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import HeaderKeranjang from "@/components/HeaderKeranjang.vue";
import BreadCrumbCheckout from "@/components/BreadCrumbCheckout.vue";
import BannerCheckout from "@/components/BannerCheckout.vue";
import Identitas from "@/components/Identitas.vue";
import PembayaranCheckout from "@/components/PembayaranCheckout.vue";
import RingkasanBelanjaCheckout from "@/components/RingkasanBelanjaCheckout.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Checkout",
  components: {
    HeaderKeranjang,
    BannerCheckout,
    BreadCrumbCheckout,
    Identitas,
    PembayaranCheckout,
    RingkasanBelanjaCheckout,
    Footer,
  },
};
</script>

<style>
</style>