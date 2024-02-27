<!-- HTML -->
<template>
  <div class="services" style="display: flex; border: 10px solid orange;">
    <div>
      <h1 style="color: #f9ef23">WHAT WE OFFER</h1>
      <p>We're committed to bringing you the best workout experience.</p>
    </div>
    <!-- IMAGES -->
    <div class="image-content">
      <!-- image 1 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/8jSDb8r/Non-Zero-Gravity-Activewear.jpg"
          style="width: 100px; height: 100px"
          alt=""
        />
        <p class="text-container">MEMBERSHIPS</p>
      </div>

      <!-- image 2 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/7p70XFd/Gym-Background.jpg"
          style="width: 100px; height: 100px"
          alt=""
        />
        <p class="text-container">CLASSES</p>
      </div>

      <!-- image 3 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/pJwcG63/Magma-Sports-wear-Gym-Editorial-Shoot-6.jpg"
          style="width: 100px; height: 100px"
          alt=""
        />
        <p class="text-container">MERCH</p>
      </div>
    </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script></script>

<!-- CSS -->
<style scoped>
.services {
  background-color: #141414;
}

.image-content {
  display: flex;
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
