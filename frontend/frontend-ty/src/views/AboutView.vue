<!-- HTML -->
<template>
  <div class="about">
    <div
      class="description"
      id="description"
      style="border: 1px solid #234643; margin-bottom: 100px;"
    >
      <div
        id="description-head"
        style="border: 1px solid"
      >
        <h1>ABOUT OUR FIT FAMILY</h1>
        <div
        id="description-text"
        style="border: 1px solid; padding-bottom: 20px"
      >
        <h3>
          Nexus was founded in 2024. <br />Since then, we have expanded to 3
          various locations nation wide
        </h3>
      </div>
      <!-- Services -->
      <router-link
        to="/services"
        class="nav-link"
        style="font-family: 'Manrope', sans-serif"
        >Our Merch
      </router-link>
      </div>
    </div>
    <!-- Images -->
    <div class="about-image">
      <div class="about-image1-div">
        <img
          class="about-images1"
          src="https://i.ibb.co/yNF4tFJ/Magma-Sports-wear-Gym-Editorial-Shoot.jpg"
          alt=""
        />
      </div>
      <div class="about-image1-div">
        <img
          class="about-images2"
          src="https://i.ibb.co/3p0m0gm/Magma-Sports-wear-Gym-Editorial-Shoot-2.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script></script>

<!-- CSS -->
<style>
/* Div Positioning */
.description,
.about-image {
  display: inline-block;
  width: 48%;
  margin-right: 2%;
  box-sizing: border-box;
}

#description-head {
  padding-left: 170px;
}

#description-text {
  padding-left: 170px;
}

.about {
  background-color: #141414;
}

.description h1 {
  color: #f9ef23;
  text-align: center;
  font-weight: 900;
  font-size: 85px;
}

.description h3 {
  color: white;
  text-align: center;
  font-size: 20px;
}

.nav-link {
  color: white;
  text-decoration: underline;
  font-size: xx-small;
  padding-left: 427px;
  margin-top: 15px;
}

.about-image div {
  width: 378px;
  margin-left: 170px;
}

.about-image1-div {
  width: 378px;
}

.about-images1 {
  width: 373px;
  height: 424px;
  padding: 5px;
  margin-top: 20px;
  border-radius: 7px;
}

.about-images2 {
  width: 373px;
  height: 424px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 7px;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
  .description h1 {
    color: #f9ef23;
    text-align: center;
    font-weight: 900;
  }

  .description h3 {
    color: white;
    text-align: center;
    font-size: small;
  }

  .nav-link {
    color: white;
    text-decoration: underline;
    font-size: xx-small;
    padding-left: 110px;
    margin-top: 15px;
  }

  .about-image {
    margin-top: 20px;
  }

  .about-images1 {
    width: 373px;
    height: 424px;
    padding: 20px;
    margin-left: 130px;
  }

  .about-images2 {
    width: 373px;
    height: 424px;
    padding: 20px;
    margin-left: 130px;
  }
}
</style>
