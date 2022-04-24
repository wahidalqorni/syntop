<template>
  <div id="Checkout2">
    <HeaderKeranjang />
    <BreadCrumbCheckout />
    <div class="container mt-3">
      *Ini halaman terakhir dari proses belanjamu. Pastikan semua sudah benar,
      ya. :)
    </div>
    <DetailPembayaran />
    <RingkasanBelanjaCheckout />

    
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mt-5">
          <router-link to="/checkout2">
            <button type="button" class="btn btn-success">
              Upload Bukti Bayar >>
            </button>
          </router-link>
        </div>
        <div class="col-lg-2 mt-5">
          <button
            type="button"
            class="btn btn-outline-secondary"
            style="color: red"
            data-bs-toggle="modal"
            data-bs-target="#batalkanPesananModal"
          >
            Batalkan Pesanan
          </button>
          <!-- ini adalah modal -->
          <div
            class="modal fade"
            id="batalkanPesananModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content ">
                <div class="row justify-content-center">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Yakin Mau Membatalkan Pesanan?
                  </h5>
                </div>

                <div class="row">
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                  <div class="col">
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-7">
          <p>
            *pastikan kamu telah melakukan pembayaran sebelum mengklik tombol
            Upload bukti Pembayaran.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderKeranjang from "@/components/HeaderKeranjang.vue";
import BreadCrumbCheckout from "@/components/BreadCrumbCheckout.vue";
import Footer from "@/components/Footer.vue";
import DetailPembayaran from "@/components/DetailPembayaran.vue";
import RingkasanBelanjaCheckout from "@/components/RingkasanBelanjaCheckout.vue";

export default {
  name: "Checkout2",
  components: {
    HeaderKeranjang,
    BreadCrumbCheckout,
    Footer,
    DetailPembayaran,
    RingkasanBelanjaCheckout,
  },
};
</script>

<style>
</style>