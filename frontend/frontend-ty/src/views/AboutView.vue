<!-- HTML -->
<template>
  <div class="about">
    <div class="description" id="description">
      <div id="description-head">
        <h1>ABOUT OUR FIT FAMILY</h1>
        <!-- Description Text -->
        <div id="description-text">
          <h3>
            Nexus was founded in 2024. Since then, we have expanded to 3 various
            locations nation wide
          </h3>
        </div>
        <!-- Services -->
        <div class="router-link" id="routerLink">
          <router-link to="/services" class="nav-link">Our Merch </router-link>
        </div>
      </div>
    </div>
    <!-- Images -->
    <div class="about-image" id="about-image">
      <div class="about-image1-div" id="about-image1-div">
        <img
          class="about-images1"
          src="https://i.ibb.co/yNF4tFJ/Magma-Sports-wear-Gym-Editorial-Shoot.jpg"
          alt=""
        />
      </div>
      <div class="about-image1-div" id="about-image1-div">
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
  height: 1000px;
  margin-right: 2%;
  box-sizing: border-box;
}

.description {
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#description-head {
  height: 300px;
  margin-left: 100px;
  width: 700px;
  margin-bottom: 400px;
  padding-top: 10px;
}

#description-text {
  width: 700px;
  height: 90px;
  margin-top: 150px;
}
.router-link {
  width: 500px;
  height: 10px;
  padding-top: 90px;
}

.about {
  background-color: #141414;
  display: flex;
}

/* heading */
.description h1 {
  color: #f9ef23;
  font-weight: 900;
  font-size: 100px;
}

.description h3 {
  color: white;
  text-align: center;
  font-size: 30px;
}

.nav-link {
  color: white;
  text-decoration: underline;
  font-size: medium;
}

.about-image div {
  width: 378px;
  margin-left: 100px;
}

.about-image1-div {
  width: 378px;
}

.about-images1 {
  width: 500px;
  height: 480px;
  padding: 5px;
  /* margin-top: 90px; */
  border-radius: 7px;
}

.about-images2 {
  width: 500px;
  height: 480px;
  padding: 5px;
  /* margin-bottom: 20px; */
  border-radius: 7px;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
  .about {
    display: inline-block;
    overflow: hidden;
  }

  .about div {
    width: 391px;
    height: 200px;
  }

  #description {
    height: 100px;
  }

  #description-head {
    height: 70px;
    width: 200px;
    margin-top: 400px;
  }

  #description-text {
    height: 30px;
    width: 200px;
    margin-top: auto;
}

  #routerLink {
    height: 40px;
    padding-top: 5px;
    padding-left: 10px;
}

  .description h1 {
    color: #f9ef23;
    text-align: center;
    /* font-weight: 900; */
    font-size: xx-small;
    /* margin-right: 500px; */
    margin-top: none;
  }

  .description h3 {
    color: white;
    /* text-align: center; */
    font-size: xx-small;
  }

  .nav-link {
    color: white;
    text-decoration: underline;
    font-size: xx-small;
  }

  .about-image {
    margin-top: 10px;
    
  }

  #about-image {
    min-height: 382px;
    overflow-x: hidden;
  }

  #about-image1-div {
    width: 200px;
    height: 200px;
    margin-left: 100px;
  }

  .about-images1 {
    width: 200px;
    height: 200px;
    padding: 1px;
    display: inline;
  }

  .about-images2 {
    width: 200px;
    height: 200px;
    padding: 1px;
    display: inline;
    margin-top: 20px;
  }

  .description,
  .about-image {
    height: 1000px;
    margin-right: 2%;
    box-sizing: border-box;
  }
}
</style>
