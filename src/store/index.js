import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers : []
  },
  mutations: {
    fillCustomers(state,customersAction){
      state.customers = customersAction
    }
  },
  actions: {
    getCustomers: async function({commit}){
      let datos = await axios.get('https://strack.solistica.com/CDPServices/api/collections/customers/584/operativeunit');//('https://mindicador.cl/api/dolar/01-10-2019'); 
      console.log(datos.data.data);
      const customersArray = await datos.data.data;
      commit('fillCustomers',customersArray);
    }
  },
  modules: {
  }
});
