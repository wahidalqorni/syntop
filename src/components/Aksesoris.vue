<template>
  <div id="Aksesoris">
    <div class="container">
      <!-- ini row tulisan aksesoris dan mata -->
      <div class="row mt-5">
        <div class="col">
          <h2>Accesories</h2>
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
      <!-- ini row 3 kartunya -->
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-3" style="max-width: 100%">
            <div class="row g-0">
              <div class="col-md-4 my-auto">
                <img
                  src="../assets/ssd_icon.png"
                  class="img-fluid p-3 rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8 my-4">
                <div class="card-body">
                  <h5 class="card-title">Bikin Laptopmu Tambah Kenceng!</h5>
                  <p class="card-text">
                    Keterangan Lanjutan, Keterangan Lanjutan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mb-3" style="max-width: 395px">
            <div class="row g-0">
              <div class="col-md-4 my-auto">
                <img
                  src="../assets/ram_icon.png"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8 my-4">
                <div class="card-body">
                  <h5 class="card-title">Multitasking makin lancar!</h5>
                  <p class="card-text">
                    Keterangan Lanjutan, Keterangan Lanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mb-3" style="max-width: 100%">
            <div class="row g-0">
              <div class="col-md-4 my-auto">
                <img
                  src="../assets/game_icon.png"
                  class="img-fluid pt-2 rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8 my-4">
                <div class="card-body pt-4">
                  <h5 class="card-title">Jadilah Pro Player!</h5>
                  <p class="card-text">
                    Keterangan Lanjutan, Keterangan Lanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aksesoris",
};
</script>

<style>
</style>