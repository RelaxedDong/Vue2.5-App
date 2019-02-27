import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state: state,
  // 省略步骤
  // 1. this.$store.dispatch('citychanged', value)
  // 2. actions: {
  //   citychanged (ctx, cityname) {
  //     ctx.commit('citychanged', cityname)
  //   }
  // },
  mutations: mutations
})
