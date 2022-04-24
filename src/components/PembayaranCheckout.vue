<template>
  <div id="PembayaranCheckout">
    <div class="container">
      <div class="row mt-5">
        <div class="row">
          <div class="col-lg-5">
            <h6><b> Pilih Pembayaran </b></h6>
            <div class="btn-group mt-3" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Transfer Bank
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><a class="dropdown-item" href="#">Bayar di tempat</a></li>
                <li><a class="dropdown-item" href="#">Go Pay</a></li>
                <li><a class="dropdown-item" href="#">OVO</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <h6><b> Pilih Pengiriman </b></h6>
            <div class="btn-group mt-3" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                JNE Reguler
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li><a class="dropdown-item" href="#">JNE YES</a></li>
                <li><a class="dropdown-item" href="#">POS</a></li>
                <li><a class="dropdown-item" href="#">TIKI</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1">
            <img class="bsi mt-4" src="../assets/logo_bsi.png" alt="" />
          </div>
          <div class="col-lg-4 mt-4">
            Bank Syariah Indonesia <br />
            <h6>
              <b> 7129732xxx </b> <br>
              <b>a.n. Syntop Laptopindo</b>
            </h6>
          </div>
          <div class="col-lg-2 mt-4">
              Rp 20.000.000
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PembayaranCheckout",
};
</script>

<style>
</style>