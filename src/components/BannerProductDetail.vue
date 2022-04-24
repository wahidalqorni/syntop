<template>
  <div id="BannerProductDetail">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 my-auto">
          <div class="background">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/t490s.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/mac.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/legion.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i class="fas fa-arrow-circle-left"></i>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i class="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-6 my-auto">
          <h2 class="text1">Lenovo Thinkpad T490s</h2>
          <h3>Harga : <span>Rp 21.000.000</span></h3>
          <br />
          <h6>Spesifikasi : <br /></h6>

          <h6 class="overflow">
            Processor Up to 8th Gen Intel® Core™ i5/i7 vPro™ <br />
            Operating System Windows 10 Pro <br />
            14" Antiglare Display FHD IPS (1920 x 1080, 250 nit) <br />
            FHD IPS touchscreen (1920 x 1080, 300 nit) <br />
            FHD IPS low power (1920 x 1080, 400 nit) <br />
            FHD IPS Privacy Guard (1920 x 1080, 400 nit) <br />
            Memory Up to 32GB <br />
            Battery Up to 20 hours* 57Wh, <br />
            Rapid Charge technology available with 65W AC <br />
            <br />
            Processor Up to 8th Gen Intel® Core™ i5/i7 vPro™ <br />
            Operating System Windows 10 Pro <br />
            14" Antiglare Display FHD IPS (1920 x 1080, 250 nit) <br />
            FHD IPS touchscreen (1920 x 1080, 300 nit) <br />
            FHD IPS low power (1920 x 1080, 400 nit) <br />
            FHD IPS Privacy Guard (1920 x 1080, 400 nit) <br />
            Memory Up to 32GB <br />
            Battery Up to 20 hours* 57Wh, <br />
            Rapid Charge technology available with 65W AC <br />
          </h6>
          <div class="row justify-content-between mt-4">
            
            <input type="number" min="1" placeholder="1">

            <div class="col">
              <div class="btn btn-danger keranjang">+ Keranjang</div>
            </div>
            <div class="col">
              <div class="btn btn-danger">Pesan Sekarang</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerProductDetail",
};
</script>

<style>

</style>

