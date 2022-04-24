<template>
  <div id="BreadCrumbCheckout">
    <div class="container">
      <div class="row home">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
             <i class="fas fa-arrow-circle-left mt-3"></i>
          </button>
        </div>

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item home2">
              <h5>Checkout</h5>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbCheckout",
};
</script>

<style>
</style>