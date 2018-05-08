const moduleb = {
    // ...
    state: {
        // ...
    },
    actions: {
        // state 当前的   rootState根节点
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    },
    getters: {
        // state 当前的   rootState根节点
        sumWithRootCount(state, getters, rootState) {
            return state.count + rootState.count
        }
    }
}
export default moduleb