import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
// import AuthenticateUser from '@/service/AuthenticateUser'
const baseURL = 'https://gym-app-8i2h.onrender.com/'
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    selectProduct: null,
  },
  getters: {
    setSelectProduct: (state) => {
      return state.products.find((product) => product.id === state.selectedProduct);
    }
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
    selectProduct ({ commit}, prodID) {
      commit('selectProduct', prodID)
    }
  },
  actions: {
    async register(context, payload) {
      try{
        let {data} = (await axios.post(`${baseURL}users/register`, payload)).data
        if(data) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 4000
          })
          //
          router.push({name: 'login'})
        }
      }catch(e) {
        sweet({
          title: 'Registration Error!',
          text: 'Registration Incomplete',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchUsers(context) {
      try{
        let {results} = (await axios.get(`${baseURL}` + `users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Retrieving All Users Error!',
          text: 'Users Not Found',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchUser(context, payload) {
      try{
        let {result} = (await axios.get(`${baseURL}users/${payload.id}`)).data
        if(result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving Specific User Error!',
            text: 'User Not Found',
            icon: "info",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'Retrieving Specific User Error!',
          text: 'User Does Not Exist',
          icon: "error",
          timer: 4000
        })
      }
    },
    async updateUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${baseURL}users/update/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'User Update Successful',
            text: msg,
            icon: "success",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'User Update Error!',
          text: 'User Update Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
    async deleteUser(context, payload) {
      try{
        let {msg} = await axios.delete(`${baseURL}users/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'User Removed Successfully',
            text: msg,
            icon: "success",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'User Removal Error!',
          text: 'Deleting User Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
    async login(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${baseURL}users/login`, payload)).data
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          msg, token, result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Great Seeing You Again,
          ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'Login Error',
            text: msg,
            icon: "info",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'Login Error',
          text: 'Try Again, Nexus Gym Wants You!',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchProducts(context) {
      try{
        let {results} =
        (await axios.get(`${baseURL}products`)).data
        if(results) {
          context.commit('setProducts', results)
        }
      }catch(e) {
        sweet({
          title: 'Product Retrieval Error!',
          text: 'Product Retrieval Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
    async fetchProduct(context, payload) {
      try{
        let {result} = (await axios.get(`${baseURL}products/${payload.id}`)).data
        if(result) {
          context.commit('setProduct', result)
        }else {
          sweet({
            title: 'Product Single View Error!',
            text: 'Product Single View Unsuccessful',
            icon: "info",
            timer: 4000
          })
        }
      }catch(e) {
        sweet({
          title: 'Product Single View Error!',
          text: 'Product Single View Unsuccessful',
          icon: "error",
          timer: 4000
        })
      }
    },
  },
  modules: {
  }
})