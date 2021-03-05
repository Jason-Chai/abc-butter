import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    AuthLevel: localStorage.getItem('AuthLevel') ? localStorage.getItem('AuthLevel') : '',
    AuthRes: localStorage.getItem('AuthRes') ? localStorage.getItem('AuthRes') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
      state.AuthLevel = user.AuthLevel;
      localStorage.setItem('AuthLevel', user.AuthLevel);
      state.AuthRes = user.AuthRes;
      localStorage.setItem('AuthRes', user.AuthRes);
    }
  }
})

export default store
