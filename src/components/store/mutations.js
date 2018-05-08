const mutations = {
    CHANGECOUNT(state) {
        state.count++;
        // console.log($)
        // setTimeout(() => {
        //     state.count++
        // }, 2000)
    },
    CHANGECOUNTPAYLOAD(state, payload) {
        state.count -= payload.addcount;
        // setTimeout(() => {
        //     state.count -= payload.addcount;
        // })
    },
}
export default mutations