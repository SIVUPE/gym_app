<!-- Card.vue -->

<template>
    <div class="card" v-for="user in users" v-bind:key="user.userID" >
      <h2>{{ user.firstName }} {{ user.lastName }}</h2>
      <p>Email: {{ user.emailAdd }}</p>
      <p>Gender: {{ user.gender }}</p>
      <p>User Role: {{ user.userRole }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    computed: {
    users() {
        console.log(this.$store.state.users);
      return this.$store.state.users;
    },
    // products add here
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
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
  