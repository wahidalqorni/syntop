<template>
  <div id="TabelKeranjang">
    <div class="container">
      <div class="row text-center">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Produk</th>
              <th scope="col">Nama</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img src="../assets/t490s.png" alt="" /></th>
              <td>Lenovo Thinkpad T490s</td>
              <td>1</td>
              <td>Rp. 21.000.000</td>
              <td>
                <router-link to="/keranjangkosong">
                  <div class="btn btn-danger mt-auto">
                    <i class="fas fa-trash"></i> Hapus
                  </div>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row text-end mt-4">
        <h5>Total Harga : Rp 21.000.000</h5>
      </div>
      <div class="row mt-4">
        <div class="col text-end">
          <router-link to="/checkout">
            <button type="button" class="btn btn-success">Checkout</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabelKeranjang",
};
</script>

<style>
</style>