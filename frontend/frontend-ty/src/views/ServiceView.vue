<!-- HTML -->
<template>
  <div class="services" w-100>
    <div
      class="services-description"
      style="display: flex; flex-direction: column; text-align: center"
    >
      <h1 style="color: #f9ef23">WHAT WE OFFER</h1>
      <p>We're committed to bringing you the best workout experience.</p>
    </div>
    <!-- IMAGES -->
    <div style="height: 350px; padding: 50px" class="image-content">
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
        <p class="text-container"><a href="#memberships">MEMBERSHIP</a></p>
      </div>

      <!-- image 2 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/7p70XFd/Gym-Background.jpg"
          style="width: 400px; height: 400px"
          alt=""
        />

        <p class="text-container"><a href="#classes">CLASSES</a></p>
      </div>

      <!-- image 3 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/pJwcG63/Magma-Sports-wear-Gym-Editorial-Shoot-6.jpg"
          style="width: 400px; height: 400px"
          alt=""
        />
        <p class="text-container"><a href="#merch">MERCH</a></p>
      </div>
    </div>

    <!-- Products -->
    <!-- Sorting, Filter, Search Bar -->
    <div
      style="
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 100px;
      "
    >
      <input type="text" v-model="searchTerm" placeholder="Search..." />
    </div>
    <!-- End of Search -->

    <!-- Memberships -->
    <div style="display: flex; flex-direction: column; text-align: center">
      <h1 style="margin-top: 150px; color: #f9ef23">
        <a id="memberships">Memberships</a>
      </h1>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        "
      >
        <div
          class="card-membership"
          style="border: 10px solid grey; border-radius: 7px"
          v-for="product in products"
          :key="product.prodID"
          :product="product"
          v-show="
            product.prodCategory === 'Services' &&
            (searchTerm === '' ||
              product.prodName.toLowerCase().includes(searchTerm.toLowerCase()))
          "
        >
          <div>
            <div>
              <h5>{{ product.prodName }}</h5>
              <p>R{{ product.prodAmount }}</p>
              <p>{{ product.prodDescrip }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Memberships -->

    <!-- Classes -->
    <div style="display: flex; flex-direction: column; text-align: center">
      <h1 style="margin-top: 150px; color: #f9ef23">
        <a id="memberships">CLASSES</a>
      </h1>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        "
      >
        <div
          class="card-classes"
          style="border: 10px solid grey; border-radius: 7px"
          v-for="product in products"
          :key="product.prodID"
          v-show="
            product.prodCategory === 'Classes' &&
            (searchTerm === '' ||
              product.prodName.toLowerCase().includes(searchTerm.toLowerCase()))
          "
        >
          <div>
            <img :src="product.prodUrl" class="card-img-top" alt="..." />
            <div>
              <h5>{{ product.prodName }}</h5>
              <p>R{{ product.prodAmount }}</p>
              <p>{{ product.prodDescrip }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Classes -->

    <!-- Merch -->
    <div style="display: flex; flex-direction: column; text-align: center">
      <h1 style="margin-top: 150px; color: #f9ef23">
        <a id="merch">OUR MERCH</a>
      </h1>
      <p>
        "Nexus Gym's merchandise stands out as the epitome of fitness fashion,
        seamlessly blending style and functionality. With cutting-edge designs
        and high-quality materials, Nexus Gym merch not only represents a
        commitment to a healthy lifestyle but also ensures that you look and
        feel your best during every workout, making it the top choice for
        fitness enthusiasts."
      </p>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        "
      >
      <router-link
        v-for="product in products"
        to="/singleview"
            :key="product.prodID"
            v-show="
              product.prodCategory === 'Products' &&
              (searchTerm === '' ||
                product.prodName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()))
            ">
          <div
            class="card"
          >
            <div>
              <h5 style="color: white; text-align: center">
                {{ product.prodName }}
              </h5>
              <img
                :src="product.prodUrl"
                class="card-img-top"
                alt="..."
                style="margin: 0 auto"
              />
              <p style="color: white; text-align: center">
                R{{ product.prodAmount }}
              </p>
              <div style="margin: 0 auto">
                <button
                  style="
                    background-color: #6d690b;
                    border-radius: 7px;
                    color: white;
                  "
                ></button>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- End of Merch -->
    </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  components: {},
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  // Calling Individual Products
  data() {
    return {
      searchTerm: "",
      products: [
        {
          prodID: 1,
          prodName: "Magma breathable T-shirt",
          prodQuantity: 1,
          prodAmount: 399.99,
          prodDescrip:
            "Magma's Short Sleeve is made with sweat-wicking and odor repelling fabric that keeps you dry and comfortable while you work out.",
          prodCategory: "Products",
          prodUrl:
            "https://i.ibb.co/pwScB1W/IMG-1083-scaled-6358f5c6-d5d6-4212-86c4-ecf40e226ee7-1000x.webp",
        },
        {
          prodID: 2,
          prodName: "Magma Jac Core Stretch",
          prodQuantity: 1,
          prodAmount: 699.99,
          prodDescrip:
            "This innovative material acts as a barrier against atmospheric bacteria that contribute to body odor, guaranteeing you remain dry and comfortable throughout your entire workout.",
          prodCategory: "Products",
          prodUrl:
            "https://i.ibb.co/8KfFb3z/IMG-0049-d25eebde-6da1-4cd1-97c2-334f08e6328a-590x.webp",
        },
        {
          prodID: 3,
          prodName: "Basic Access ",
          prodQuantity: 1,
          prodAmount: 250,
          prodDescrip:
            "It’s all about your personal wellness journey and the club you’ve chosen to belong to. A club membership allows you access to a single club.",
          prodCategory: "Services",
          prodUrl:
            "https://i.ibb.co/D5fbsxK/Nike-Training-Club-App-Home-Workouts-More.jpg",
        },
        {
          prodID: 4,
          prodName: "Premium Access",
          prodQuantity: 1,
          prodAmount: 220,
          prodDescrip:
            "If you’re on the move, a Premier membership is the one for you. It gives you full access to all clubs in South Africa.",
          prodCategory: "Services",
          prodUrl: "https://i.ibb.co/w4DJLHT/Fitness.jpg",
        },
        {
          prodID: 5,
          prodName: "Yoga",
          prodQuantity: 1,
          prodAmount: 300,
          prodDescrip:
            "Experience a rejuvenating yoga class at our gym, where skilled instructors guide participants through a harmonious blend of mindful movements and deep stretches, promoting physical well-being and mental tranquility in a supportive and inclusive environment. Whether you're a beginner or an experienced yogi, join us for a transformative session that enhances flexibility, builds strength, and fosters a sense of inner balance.",
          prodCategory: "Classes",
          prodUrl:
            "https://i.ibb.co/KbxpMt9/Magma-Sports-wear-Gym-Editorial-Shoot-7.jpg",
        },
        {
          prodID: 6,
          prodName: "Boxing",
          prodQuantity: 1,
          prodAmount: 320,
          prodDescrip:
            "Experience a dynamic and high-energy workout in our boxing class at the gym, where expert trainers guide you through a combination of cardio-intensive drills and skill-building techniques. Whether you're a beginner or seasoned boxer, this class provides a supportive environment for honing your boxing skills while boosting your overall fitness and endurance.",
          prodCategory: "Classes",
          prodUrl: "https://i.ibb.co/gmVwR54/Boxing-070.webp",
        },
      ],
    };
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
.image-content {
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

.card {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    10deg,
    rgb(0, 0, 0) 10%,
    rgba(249, 239, 35, 1) 80%
  );
  width: 436px;
  height: 501px;
  margin-bottom: 100px;
  margin-top: 50px;
}

.card-img-top {
  width: 268px;
  height: 326px;
  border-radius: 7px;
}
</style>
