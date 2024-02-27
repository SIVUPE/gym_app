<!-- HTML -->
<template>
  <!-- Navigation Bar -->
  <Navigation v-if="!loading"/>
  <!-- End of Navigation Bar -->
  <router-view />
  <!-- <RouterView /> -->
  <!-- Footer -->
  <Footer/>
  <!-- Footer End -->
  <Loader/>
</template>

<!-- JAVASCRIPT -->
<script>
import Navigation from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";
import Membership from "@/components/Membership.vue";
import { RouterView } from "vue-router";

export default {
  name: "HomeView",
  components: {
    Navigation,
    Footer,
    Membership
},
};
</script>

<!-- CSS -->
<style></style>