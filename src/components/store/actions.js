const actions = {
    // CHANGECOUNT(context) {
    //     context.commit('CHANGECOUNT')
    // }
    //  使用ES2015 的 参数解构 来简化代码
    CHANGECOUNT_ACTION({ commit }) {
        return new Promise((resolve, reject) => {
            commit('CHANGECOUNT')
            resolve();
        })
    },
    CHANGECOUNTPAYLOAD_ACTION({ dispatch, commit }, addcount) {
        return dispatch('CHANGECOUNT_ACTION').then(() => {
            setTimeout(function () {
                commit('CHANGECOUNTPAYLOAD', addcount)
            }, 1000)
        })
    }
}
export default actions