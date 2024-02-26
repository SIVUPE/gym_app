<!-- HTML -->
<template>
  <div class="services">
    <!-- Styling Heading -->
    <div class="services-description">
      <h1
        style="
          border: 1px solid white;
          color: #f9ef23;
          height: 100px;
          /* width: 700px; */
          display: flex;
          justify-content: center;
          /* margin-left: 360px; */
        "
      >
        WHAT WE OFFER
      </h1>
      <p
        style="
          color: white;
          border: 1px solid white;
          display: flex;
          justify-content: center;
        "
      >
        We're committed to bringing you the best workout experience.
      </p>
    </div>
    <!-- IMAGES -->
    <div
      style="
        border: 1px solid yellow;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      "
      class="image-content"
    >
      <!-- image 1 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/8jSDb8r/Non-Zero-Gravity-Activewear.jpg"
          style="
            width: 300px;
            height: 300px;
            display: flex;
            justify-content: center;
          "
          alt=""
        />

        <button>
          <p class="text-container">MEMBERSHIP</p>
        </button>
      </div>

      <!-- image 2 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/7p70XFd/Gym-Background.jpg"
          style="width: 300px; height: 300px"
          alt=""
         
        />
        
        <p class="text-container">CLASSES</p>
      </div>

      <!-- image 3 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/pJwcG63/Magma-Sports-wear-Gym-Editorial-Shoot-6.jpg"
          style="width: 300px; height: 300px"
          alt=""
          
        />
        <p class="text-container">MERCH</p>
      </div>
    </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>

export default {

};
</script>

<!-- CSS -->
<style scoped>
.services-description,
.image-content {
  display: flex;
  flex-direction: column;
}
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
