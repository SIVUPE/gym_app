<!-- Card.vue -->

<template>
  <div v-if="products">
    <div class="card" v-if="products">
      <div  v-for="product in products" :key="product.prodID">
        <h1> {{ product.prodName }}</h1>
      </div>
    </div>
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
  components: {

  },
  computed: {

    products(){
      return this.$store.state.products

    }
    // products add here
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    
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
