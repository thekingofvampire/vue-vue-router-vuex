// 筛选全局变量
const getters = {
    findCity: (state) => (cityName) => {
        var arr = [];
        // console.log(cityName)
        state.city.forEach((item, key) => {
            if (item.cityName.indexOf(cityName) > -1)
                arr.push(item);
        })
        return arr;
    },
    todos: (state) => {
        return state.selectarr.find(todo => todo.bool)
    }
}
export default getters