<template>
  <div id="Identitas">
    <div class="container">
      <div class="row mt-5">
        <div class="row mt-4">
          <div class="col-lg-7 mt-5">
            <h4><b> Pengiriman dan Pembayaran</b></h4>
            <br />
            <h5><b> Lengkapi detail Alamat</b></h5>
            <br />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                ><b> Nama Lengkap</b></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=". . . ."
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                ><b> Nomor HP</b></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=". . . ."
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                ><b> Kota & Kecamatan</b></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=". . . ."
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Alamat Lengkap</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder=". . . ."
              ></textarea>
            </div>
          </div>
          <div class="col-lg-5 mt-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Identitas",
};
</script>

<style>
</style>