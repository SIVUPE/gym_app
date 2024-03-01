<template>
  <div 
  class="productView" w-100
  v-if="product">
  <div class="card">
    <img class="card-img-top" :src="product.prodUrl" alt="Product Image">
  </div>
    <div class="product-description">
    <h1 style="color: yellow">{{ product.prodName }}</h1>
    <p style="color: white">Description: {{ product.prodDescrip }}</p>
    <h1 style="color: white">Quantity: {{ product.prodQuantity }}x</h1>
    <button>
      <router-link
        to="/services"
        class="service-link"
        style="font-family: 'Manrope', sans-serif; "
        >Back To Services
      </router-link>
    </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  computed: {
    product() {
      const prodID = parseInt(this.$route.params.id);
      return this.$store.state.products.find(product => product.prodID === prodID) || null;
    },
  },
  mounted() {
    if (!this.$store.state.products.length) {
      this.$store.dispatch("fetchProducts");
    }
  },
};
</script>

<style scoped>

.product-description {
  margin-top: 100px; margin-left: 100px; width: 300px
}
.productView {
  background-color: #141414;
  display: flex; justify-content: space-evenly
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
  width: 350px;
  height: 400px;
  border-radius: 7px;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
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
  width: 300px;
    height: 300px;
  border-radius: 7px;
}

.card div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .productView {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>