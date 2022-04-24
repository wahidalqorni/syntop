<template>
  <div id="HeaderKeranjang">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-body">
      <div class="container">
        <a class="navbar-brand" href="#">
          <router-link to="/"><img class="logo-syntop" src="../assets/logo.png" /></router-link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active mt-auto" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link mt-auto" href="#listproduct">
                Laptop & Accesories
            </a>
            <a class="nav-link2 mt-auto" href="#keranjang">
              <div class="btn btn-danger mt-auto">
                Kembali
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderKeranjang",
};
</script>

<style scoped>
</style>