<!-- HTML -->
<template>
  <div class="services" w-100 style="overflow: none;">
    <Loader v-if="loading" />
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
          alt=""
        />
        <p class="text-container"><a href="#memberships">MEMBERSHIP</a></p>
      </div>

      <!-- image 2 -->
      <div class="home-content">
        <img src="https://i.ibb.co/7p70XFd/Gym-Background.jpg" alt="" />

        <p class="text-container"><a href="#classes">CLASSES</a></p>
      </div>

      <!-- image 3 -->
      <div class="home-content">
        <img
          src="https://i.ibb.co/pJwcG63/Magma-Sports-wear-Gym-Editorial-Shoot-6.jpg"
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
      <!-- Search Bar -->
      <input type="text" v-model="searchTerm" placeholder="Search..." />
    </div>
    <!-- End of Search -->

    <!-- Memberships -->
    <div class="services-div">
      <h1 style="margin-top: 150px; color: #f9ef23">
        <a id="memberships">MEMBERSHIPS</a>
      </h1>
      <div class="memberships">
        <router-link
          style="text-decoration: none"
          v-for="product in products"
          :to="'/singleview/products/' + product.prodID"
          :key="product.prodID"
          v-show="
            product.prodCategory === 'Services' &&
            (searchTerm === '' ||
              product.prodName.toLowerCase().includes(searchTerm.toLowerCase()))
          "
        >
          <div class="card-membership">
            <div class="card-membership-descrip">
              <div>
                <h5 style="color: #f9ef23">{{ product.prodName }}</h5>
                <p style="color: white">R{{ product.prodAmount }}</p>
                <h3 style="color: white">{{ product.prodDescrip }}</h3>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- End of Memberships -->

    <!-- Classes -->
    <div class="services-div">
      <h1 style="margin-top: 150px; color: #f9ef23">
        <a id="class">CLASSES</a>
      </h1>
      <div class="class">
        <router-link
          style="text-decoration: none"
          v-for="product in products"
          :to="'/singleview/products/' + product.prodID"
          :key="product.prodID"
          v-show="
            product.prodCategory === 'Classes' &&
            (searchTerm === '' ||
              product.prodName.toLowerCase().includes(searchTerm.toLowerCase()))
          "
        >
          <div
            class="card-classes"
            style="border: 10px solid grey; border-radius: 7px; padding: 10px;"
          >
            <div>
              <img :src="product.prodUrl" class="card-img-top" alt="..." />
              <div>
                <h5 style="color: yellow">{{ product.prodName }}</h5>
                <p style="color: white">R{{ product.prodAmount }}</p>
                <p style="color: white">{{ product.prodDescrip }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- End of Classes -->

    <!-- Merch -->
    <div class="merch">
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
      <div class="merch-div">
        <router-link
          v-for="product in products"
          :to="'/singleview/products/' + product.prodID"
          :key="product.prodID"
          v-show="
            product.prodCategory === 'Products' &&
            (searchTerm === '' ||
              product.prodName.toLowerCase().includes(searchTerm.toLowerCase()))
          "
        >
          <div class="card">
            <div>
              <h5
                style="
                  color: white;
                  text-align: center;
                  margin-top: 50px;
                  text-decoration: none;
                "
              >
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
import Loader from "@/components/Loader.vue";

export default {
  name: "ServiceView",
  components: {
    Loader,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },

  // Calling Individual Products
  data() {
    return {
      searchTerm: "",
      selectedCategory: "",
      loading: true,
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
h1 {
  font-size: 80px;
  margin-bottom: 20px;
  font-weight: 1000;
}

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
  margin-top: 10px;
  justify-content: space-between;
}

.image-content img {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  border-radius: 7px;
}

input {
  border-radius: 7px;
  width: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
}

.services-div {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.class {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.memberships {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.merch-div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

.card-membership {
  border: 5px solid lightgray;
  border-radius: 7px;
  display: flex;
  justify-content: space-evenly;
  width: 500px;
}

.card-img-top {
  width: 268px;
  height: 326px;
  border-radius: 7px;
}

.merch {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.home-content:hover img {
  filter: brightness(70%);
  transition: filter 0.3s ease;
  border-radius: 7px;
}

.home-content:hover .text-container {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
  .image-content img {
    width: 200px;
    height: 200px;
  }

  .image-content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-left: 50px;
  }

  a {
    margin-left: 0px;
  }

  input {
    border-radius: 7px;
    width: 200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 300px;
  }

  .services-div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  #memberships {
    font-size: large;
  }

  .memberships {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .card-membership {
    width: 300px;
    margin-left: 50px;
  }

  .card-membership h3 {
    font-size: xx-small;
    padding: none;
  }

  .card-membership-descrip {
    padding: none;
    width: 0 auto;
  }

  #class {
    font-size: large;
  }

  .class {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  #merch {
    font-size: large;
  }

  .merch-div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .card div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .card {
    width: 300px;
    margin-left: 50px;
  }

  .card img {
    width: 300px;
    height: 300px;
  }
}
</style>
