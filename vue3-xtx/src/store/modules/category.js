/*
 * @LastEditTime: 2022-08-25 22:37:18
 */
import { findAllCategory } from '@/api/category'
import { topCategory } from '@/api/constants'

export default {
  namespaced: true,
  state () {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList ({ commit }) {
      const data = await findAllCategory()
      commit('setList', data.result)
    }
  }
}
