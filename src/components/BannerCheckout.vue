<template>
  <div id="BannerCheckout">
    <div class="container">
      <div class="row mt-5">
        <div class="row">
          <h4><b> Barang yang dibeli</b></h4>
        </div>

        <div class="row justify-content-between mt-4">
          <div class="col-lg-3 my-auto">
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

          <div class="col-lg-4 my-auto">
            <h5 class="text1">
              <b> Lenovo <br />
              Thinkpad T490s</b>
            </h5>
            <h6>Harga : <span>Rp 21.000.000</span></h6>
            <div class="row justify-content-between">
              <input type="number" min="1" placeholder="1" />
            </div>
            <div class="form-floating mt-4">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
              <label for="floatingTextarea2">Tulis catatan untuk barang ini.....</label>
            </div>
          </div>

          <div class="col-lg-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerCheckout",
};
</script>

<style>
</style>