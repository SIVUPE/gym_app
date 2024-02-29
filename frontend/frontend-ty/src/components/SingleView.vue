<template>
<div v-if="products">
    <div v-for="product in products" :key="product.prodID">
    <img :src="product.prodUrl">
    <h1>{{ product.prodID }}</h1> 
    <h1>{{ product.prodName }}</h1>
    <h1>{{ product.prodAmount }}</h1>
    </div>
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