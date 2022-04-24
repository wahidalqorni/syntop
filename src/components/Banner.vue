<template>
  <div id="Banner">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 content1">
          <h2 class="text1">Laptop <span> Masa Depan </span></h2>
          <h6>
            Layar 14 inc bezel tipis dengan resolusi display 4K <br />
            panel IPS dan touchscreen.
          </h6>
          <router-link to="keranjang">
            <div class="btn btn-danger ml-auto">
              <i class="fas fa-cart-plus"></i> Keranjang
            </div>
          </router-link>

        </div>

        <div class="col-lg-5">
          <router-link to="/productdetail"
            ><img class="banner" src="../assets/banner.png"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
</style>