<!-- Card.vue -->

<template>
  <div v-if="products">
    <!-- <div class="card" style="width: 18rem" v-for="product in products" :key="product.prodID">
      <img :src="product.prodUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
    <!-- Old -->
    <!-- <div class="card" v-if="products">
      <div v-for="product in products" :key="product.prodID">
        <img :src="product.prodUrl" alt="Admin" />
        <h1>{{ product.prodName }}</h1>
      </div>
    </div> -->
    <table class="table" v-if="products">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody v-for="product in products" :key="product.prodID">
    <tr>
      <th scope="row"><img :src="product.prodUrl" alt="Admin"> </th>
      <td>{{ product.prodName }}</td>
      <td>{{ product.prodAmount }}</td>
      <td></td>
      <td><button class="btn btn-dark"> Edit</button></td>
      <td><button class="btn btn-dark"> delete</button></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    products() {
      return this.$store.state.products;
    },
    // products add here
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
