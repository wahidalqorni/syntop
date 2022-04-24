<template>
  <div id="DetailPembayaran">
    <div class="container">
      <div class="row mt-5">
        <h2>Detail Pembayaran</h2>
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
          <h5 class="text1 m-lg-3">
            <b>
              Lenovo <br />
              Thinkpad T490s</b
            >
          </h5>
          <h6 class="text1 m-lg-3">Harga : <span>Rp 21.000.000</span></h6>
        </div>

        <div class="col-lg-5"></div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              ><h5>Catatan</h5></label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Packing yang rapi ya!"
            />
          </div>
        </div>
        <div class="col">
          <h5>Pilih Pengiriman</h5>
          <div class="btn-group mt-2">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              JNE Reguler
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">JNE YES</a></li>
              <li><a class="dropdown-item" href="#">POS Kilat</a></li>
              <li><a class="dropdown-item" href="#">TIKI</a></li>
            </ul>
          </div>
          <p>Rp 20.000</p>
        </div>
      </div>
      <div class="row">
        <div class="col mt-5">
          <h5>Alamat Pengiriman</h5>
          <h6>Joko (089925618765)</h6>
          <p>Jalan indah I, Nomor E8, Palembang, Sumatera Selatan 30287</p>
        </div>
        <div class="col mt-5">
          <h5>Metode Pembayaran</h5>
          <div class="btn-group mt-2">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Transfer Bank
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">COD</a></li>
              <li><a class="dropdown-item" href="#">OVO</a></li>
              <li><a class="dropdown-item" href="#">Go Pay</a></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-lg-2">
              <img class="bsi mt-4" src="../assets/logo_bsi.png" alt="" />
            </div>
            <div class="col-lg-4 mt-4">
              Bank Syariah Indonesia <br />
              <h6>
                <b> 7129732xxx </b> <br />
                <b>a.n. Syntop Laptopindo</b>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPembayaran",
};
</script>

<style>
</style>