<template>
    <div class="container">
        <div class="title">Vuex的核心概念—<br/>state的辅助函数<br/> -- mapState</div>
        <div class="content">
            将 store 中的 getter 映射到局部计算属性
            <br/> count : {{count}} + {{bbb}}
            <br/>
            <br/> mapStatearray
            <br/>
            <ul>
                <li v-for="(item,key) in array" :key="key">{{item}}</li>
            </ul>
            <br/>
            <br/> mapStateobj
            <br/>
            <ul>
                <li v-for="(item,key,index) in obj" :key="index">{{key}} : {{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        data() {
            return {};
        },
        // computed: mapState({
        //     // 箭头函数可使代码更简练
        //     count: state => state.count,
        //     array: state => state.array,
        //     obj: state => state.obj
        // }),
        // 当需要计算的属性 和全局状态一样
        // [
        // // 映射 this.count 为 store.state.count
        // "count",
        // "array",
        // "obj"
        // ]
        computed: {
            bbb() {
                return 222;
            },
            // 使用对象展开运算符将此对象混入到外部对象中
            ...mapState([
                // 映射 this.count 为 store.state.count
                "count",
                "array",
                "obj"
            ])
        },
        created() {}
    };
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        font-size: 25px;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        .title {
            min-width: 300px;
            align-self: flex-start;
            font-size: 22px;
            color: #333;
        }
        .content {
            font-size: 18px;
            color: #888;
            text-align: left;
            letter-spacing: 1px;
        }
    }
</style>
