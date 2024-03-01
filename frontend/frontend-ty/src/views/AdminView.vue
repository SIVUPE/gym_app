<!-- AdminView.vue -->
<template>
  <div>
    <h1>Admin View</h1>
  </div>
  <RouterLink to="/admin">Products</RouterLink>
  <RouterLink to="/user">Users</RouterLink>
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
        <th scope="row"><img :src="product.prodUrl" alt="Admin" /></th>
        <td>{{ product.prodName }}</td>
        <td>{{ product.prodAmount }}</td>
        <td></td>
        <td><button class="btn btn-dark" @click="updateUser(product)">Update</button></td>
          <td><button class="btn btn-dark" @click="addUser()">Add</button></td>
          <td><button class="btn btn-dark" @click="deleteUser(product)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  components: {},
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    updateUser(product) {
    
      this.$store.dispatch('updateProduct', product);
    },
    addUser() {
     
      // this.$store.dispatch('createProduct', { '' });
    },
    deleteUser(product) {
      
      this.$store.dispatch('deleteUser', product);
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
