import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleb from './modules/modules1'
import moduleA from './modules/modules2'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 全局状态
    state,
    // 筛选全局状态
    getters,
    // 更改全局状态
    mutations,
    // 异步操作mutation
    actions,
    // store 分割成模块
    modules: {
        moduleA,
        moduleb
    },
    // 严格模式  确保只有mutation更改了state的值
    strict: process.env.NODE_ENV !== 'production'
})
export default store;