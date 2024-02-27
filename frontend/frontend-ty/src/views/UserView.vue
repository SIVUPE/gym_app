<!-- UserView.vue -->
<template>
  <div>
    <h1>User View</h1>
    <RouterLink to="/admin">Products</RouterLink>
    <RouterLink to="/user">Users</RouterLink>
  </div>

    <table class="table" v-if="users" >
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Gender</th>
        <th scope="col">User Role</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.userID">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.emailAdd }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.userRole }}</td>
        <td><button class="btn btn-dark">Edit</button></td>
        <td><button class="btn btn-dark">Delete</button></td>
      </tr>
    </tbody>
  </table>

</template>

<script>


export default {
  components: {

  },
  computed: {
    users() {
      return this.$store.state.users
    },
    // products() {
    //   return this.$store.state.products;
    // },
    // products add here
  },
  mounted() {
    this.$store.dispatch("fetchUsers")
  },
};
</script>
