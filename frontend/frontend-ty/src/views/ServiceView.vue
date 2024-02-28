<!-- HTML -->
<template>
  <div class="services" w-100>
    <div
      class="services-description" style="display: flex; flex-direction: column; text-align: center;"
    >
      <h1 style="color: #f9ef23;">WHAT WE OFFER</h1>
      <p>We're committed to bringing you the best workout experience.</p>
    </div>
    <!-- IMAGES -->
    <div style="height: 350px; padding: 50px;" class="image-content">
      <!-- image 1 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/8jSDb8r/Non-Zero-Gravity-Activewear.jpg"
          style="
            width: 400px;
            height: 400px;
            display: flex;
            justify-content: center;
          "
          alt=""
        />
        <p class="text-container"><a href="#memberships">MEMBERSHIP</a></p>
      </div>

      <!-- image 2 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/7p70XFd/Gym-Background.jpg"
          style="width: 400px; height: 400px"
          alt=""
        />

        <p class="text-container"><a href="#classes">CLASSES</a></p>
      </div>

      <!-- image 3 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/pJwcG63/Magma-Sports-wear-Gym-Editorial-Shoot-6.jpg"
          style="width: 400px; height: 400px"
          alt=""
        />
        <p class="text-container"><a href="#merch">MERCH</a></p>
      </div>
    </div>

    <!-- Products -->
    <!-- Memberships -->
    <h1 style="margin-top: 150px;"><a id="memberships">Memberships</a></h1>
    <div>
      <div v-for="product in products"
          :key="product.prodID">
          <img :src="product.prodUrl" class="card-img-top" alt="..." />
        <div>
          <h5> {{ product.prodName }}</h5>
        </div>
      </div>
    </div>
    <!-- End of Memberships -->

    <!-- Classes -->
    <h1><a id="classes">Classes</a></h1>
    <div>
      <div v-for="product in products"
          :key="product.prodID">
        <img src="" alt="" />
        <div>
          <h5> {{ product.prodName }}</h5>
        </div>
      </div>
    </div>
    <!-- End of Classes -->

    <!-- Merch -->
    <h1><a id="merch">Nexus Merch</a></h1>
    <div>
      <div v-for="product in products"
          :key="product.prodID">
        <img src="" alt="" />
        <div>
          <h5> {{ product.prodName }}</h5>
        </div>
      </div>
    </div>
    <!-- End of Merch -->

    <!-- Old -->
    <!-- <div>
      <div v-if="products">
        <div
          class="card"
          style="width: 18rem"
          v-for="product in products"
          :key="product.prodID"
        >
          <img :src="product.prodUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  components: {},
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  // Calling Individual Products
  data() {
    return {
      products: [
        {
          "prodID": 1,
          "prodName": "Magma breathable T-shirt",
          "prodQuantity": 1,
          "prodAmount": 399.99,
          "prodUrl": "https://ibb.co/vqSp6cs"
        },
        {
          "prodID": 2,
            "prodName": "Man Dare 2b core stretch",
            "prodQuantity": 1,
            "prodAmount": 699.99,
            "prodUrl": "https://ibb.co/ngYhB23"
        }
      ]
    }
  }
};
</script>

<!-- CSS -->
<style scoped>
.services {
  background-color: #141414;
  color: white;
  /* overflow: auto; */
}

.services-description,
.image-content {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}

.image-content {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
}

.home-content {
  position: relative;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
</style>
