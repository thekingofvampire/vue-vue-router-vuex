<template>
    <div class="container">
        <div class="title">Vuex的核心概念—<br/>Getter的辅助函数<br/> -- mapGetters </div>
        <div class="content">
            将 store 中的 getter 映射到局部计算属性
            <!-- 搜索:<input type="text" v-model="inpval"> -->
            <br/>
            <br/>
            <div>{{item}}</div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {
                inpval: ""
            };
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
            // 本地计算属性
            bbb() {
                return 222;
            },
            // 使用对象展开运算符将此对象混入到外部对象中
            ...mapState([
                // 映射 this.count 为 store.state.count
                "count",
                "array",
                "obj"
            ]),
            ...mapGetters({
                item: "todos"
            })
        },
        created() {
            // console.log("河北".indexOf("河"));
        }
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
