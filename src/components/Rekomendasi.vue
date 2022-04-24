<template>
  <div id="Rekomendasi">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h2>Rekomendasi</h2>
          <hr
            style="
              width: 80px;
              height: 2px;
              margin-left: 20px;
              border: 1px solid #ea0a0a;
              border-radius: 5px;
            "
          />
        </div>
        <div class="col-lg-2 text-end">
          <h6><i class="fas fa-eye"></i> <span> Lihat Semua</span></h6>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3" v-for="lp in listproduct.data" :key="lp.id">
          <div class="card shadow-sm" style="width: 100%">
            <img :src="lp.gambar" class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h6 class="card-title fw-bold">{{ lp.merk.merk_product }} {{ lp.nama_product }} </h6>
              <p class="card-text">
                Rp {{ Number(lp.harga).toLocaleString()  }}
              </p>
              
              <a href="#productdetail" class="btn btn-danger">+ Keranjang</a>
            </div>
          </div>
        </div>

      </div>

      <hr
            style="
              width: 100%;
              height: 2px;
              margin-top: 100px;
              border: 2px solid #C4C4C4;
              border-radius: 5px;
            "
          />

      
    </div>
  </div>
</template>

<script>
// panggil library axios untuk bisa berkomunikasi dengan API yg telah dibuat
import axios from "axios";

export default {
  name: "Rekomendasi",

  // siapkan variabel
  data(){
    return {
      listproduct : [], //tipe array
      response : {} //tipe json
    };
  },

  // siapkan fungsi
  methods: {
    // fungsi untuk menset data yg didapatkan dari API
    setData(dataAPI) {
      this.listproduct = dataAPI;
    },

    // fungsi untuk merequest data API
    async getListProduct() {
      try {
        this.response = await axios.get('http://127.0.0.1:8000/api/product-rekomendasi');
        console.log(this.response);

        // jika datany telah berhasil didapatkan
        // maka masukkan hasilnya ke dalam fungsi setData(dataAPI)
        this.setData(this.response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },

  // memanggil apa-apa saat component pertama kali diakses
  mounted() {
    this.getListProduct();
  }

};
</script>

<style>
</style>