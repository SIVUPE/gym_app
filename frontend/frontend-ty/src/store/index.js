import { createStore } from 'vuex'
import axios from 'axios'
const renderURL = 'https://'

export default createStore({
  state: {
    users: null,
    products: null,
    loader: true,
    message: null
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
        const users = await axios.get('${renderURL}users')
  },
},
  modules: {
  }
})
