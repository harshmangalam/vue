import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:{},
    country:[],
    countryData:{},
    loading:false
  },
  mutations: {
    SET_DATA(state,data){
      state.data = data
    },
    SET_LOADING(state,data){
      state.loading = data
    },
    SET_COUNTRY(state,data){
      state.country = data
    },
    SET_COUNTRY_DATA(state,data){
      state.countryData= data
    }
  },
  actions: {
    async fetchData({commit}){
      const response = await axios.get("https://covid19.mathdro.id/api")
      const {data:{confirmed,recovered,deaths}} = response
      commit("SET_DATA",{confirmed,recovered,deaths})
    },
    async countryDetail({commit},country){
      const response = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
      commit('SET_LOADING',false)
      commit("SET_COUNTRY_DATA",response.data)

    },
    async fetchCountry({commit}){
      const response = await axios.get(`https://covid19.mathdro.id/api/countries`)
      commit('SET_COUNTRY',response.data.countries)
    },
  },
  modules: {}
});
