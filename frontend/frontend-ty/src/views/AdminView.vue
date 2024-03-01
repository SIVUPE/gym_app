<!-- AdminView.vue -->
<template>
  <div>
    <h1>Admin View</h1>
  </div>
  <button class="btn">
    <RouterLink to="/admin">Products</RouterLink>
  </button>
  <button class="btn">
    <RouterLink to="/user">Users</RouterLink>
  </button> 
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
        <th scope="row"><img :src="product.prodUrl" alt="Admin" width="100rem" class="prod-img" /></th>
        <td>{{ product.prodName }}</td>
        <td>{{ product.prodAmount }}</td>
        <td></td>
        <td><button class="btn btn-warning" ><i class="bi bi-box-arrow-up-right"></i>96</button></td>
          <td><button class="btn btn-warning" @click="postProduct"><i class="bi bi-bag-plus-fill">#$</i></button></td>
          <td><button class="btn btn-warning" @click="deleteProduct(product.prodID)" ><i class="bi bi-trash3-fill"></i>delete</button></td>
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
    deleteProduct: function (prodID) {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.$store.dispatch('delProd', { prodID })
        .then(() => {
          window.alert('Product has been deleted.');
        })
        .catch((error) => {
          console.error('Error deleting product', error);
          window.alert('Error deleting product. Please try again.');
        });
    }
  },
  postProduct: function () {
    const newProduct = {
      prodName: prodName.value,
      quantity: quantity.value,
      amount: amount.value,
      prodUrl: prodUrl.value
    };

    this.$store.dispatch('postProduct', newProduct)
      .then(() => {
        clearFields();
        window.alert('Product has been added.');
      })
      .catch((error) => {
        console.error('Error adding product', error);
        window.alert('Error adding product. Please try again.');
      });
  },
},
  };
  
</script>

<style>
/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
.btn{
  background-color: yellow;
}
}
</style>
