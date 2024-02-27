import { createStore } from 'vuex'
import axios from 'axios'
const renderURL = 'https://gym-app-8i2h.onrender.com/'


export default createStore({
  state: {
    users: null,
    products: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.user = value
    }
  },
  actions: {
    async fetchUsers({commit}) {
        const res = await axios.get('https://gym-app-8i2h.onrender.com/')
  },
},
  modules: {
  }
})
