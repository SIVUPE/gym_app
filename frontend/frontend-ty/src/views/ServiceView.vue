<!-- HTML -->
<template>
  <div class="services" style="border: 10px solid orange;" w-100>
    <div class="services-description" style="border: 3px solid red; height: 100px;">
      <h1 style="color: #f9ef23">WHAT WE OFFER</h1>
      <p>We're committed to bringing you the best workout experience.</p>
    </div>
    <!-- IMAGES -->
    <div
      style="
        border: 1px solid yellow;
        height: 350px;
      "
      class="image-content"
    >
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
          <p class="text-container">MEMBERSHIP</p>
      </div>

      <!-- image 2 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/7p70XFd/Gym-Background.jpg"
          style="width: 400px; height: 400px"
          alt=""
         
        />
        
        <p class="text-container">CLASSES</p>
      </div>

      <!-- image 3 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/pJwcG63/Magma-Sports-wear-Gym-Editorial-Shoot-6.jpg"
          style="width: 400px; height: 400px"
          alt=""
          
        />
        <p class="text-container">MERCH</p>
      </div>
    </div>

    <!-- Products -->
   <div>
    <Card/>
   </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    // users() {
    //   return this.$store.state.users
    // },
    products() {
      return this.$store.state.products;
    },
    // products add here
  },
  mounted() {
    this.$store.dispatch("fetchProduct")
  },
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
.image-content  {
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
