<template>
  <div id="BreadCrumb">
    <div class="container">
      <div class="row home">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item home2">
              <i class="fas fa-home"> </i> Home
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              List Produk
            </li>
          </ol>
        </nav>
      </div>

      <div class="row mt-2">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cari Laptop apa?"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span class="input-group-text" id="basic-addon1"
            ><i class="fas fa-search"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
};
</script>

<style>
</style>