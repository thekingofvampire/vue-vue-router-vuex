<template>
    <div style="padding-bottom:80px;">
        <h1>这是vuex.js</h1>
        <div class="vueX">
            <div class="container">
                <div class="title">Vuex</div>
                <div class="content">
                    Vue.js 应用程序开发的状态管理模式
                </div>
            </div>
            <div class="container">
                <div class="title">Vuex的核心概念—state</div>
                <div class="content">
                    单一状态树(配合computed计算属性使用)：count : {{count}}
                    <br/>
                    <br/>
                    <ul>
                        <li v-for="(item,key) in arr" :key="key">{{item}}</li>
                    </ul>
                    <br/>
                    <br/>
                    <ul>
                        <li v-for="(item,key,index) in obj" :key="index">{{key}} : {{item}}</li>
                    </ul>
                </div>
            </div>
            <vuexChild></vuexChild>
            <div class="container">
                <div class="title">Vuex的核心概念—Getter</div>
                <div class="content">
                    从 store 中的 state 中派生出一些状态(对state中的状态进行筛选)
                    <br/>
                    <br/> 搜索:
                    <input type="text" v-model="inpval">
                    <div v-for="(item,key) in search" :key="key">{{item.cityName}}</div>
                </div>
            </div>
            <vuexChildSecond></vuexChildSecond>
            <div class="container">
                <div class="title">Vuex的核心概念—<br/>Mutation(同步操作)<br/>以及...mapMutations</div>
                <div class="content">更改 Vuex 的 store 中的状态， ...mapMutations将组件中的 methods 映射为 store.commit 调用，Mutation 必须是同步函数 <br/> count:{{count}}
                    <button @click="add" style="width:100px;height:50px;">不传参的点击</button>
                    <button @click="added(addcount)" style="width:100px;height:50px;">传参的点击</button>
                </div>
            </div>
            <div class="container">
                <div class="title">Vuex的核心概念—<br/>action(对mutation进行异步操作)<br/>以及...mapMutations</div>
                <div class="content">Action 类似于 mutation，不同在于： Action 提交的是 mutation，而不是直接变更状态。 Action 可以包含任意异步操作。
                    <div>
                        count:{{count}}
                        <button @click="add" style="width:100px;height:50px;">+</button>
                        <button @click="added(addcount)" style="width:100px;height:50px;">-</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapMutations, mapActions } from "vuex";
    import vuexChild from "./vuex-child.vue";
    import vuexChildSecond from "./vuex-childSecond.vue";
    export default {
        data() {
            return {
                inpval: "",
                addcount: { addcount: 5 }
            };
        },
        components: {
            vuexChild,
            vuexChildSecond
        },
        computed: {
            count: {
                get() {
                    return this.$store.state.count;
                }
            },
            arr: {
                get() {
                    return this.$store.state.array;
                }
            },
            obj: {
                get() {
                    return this.$store.state.obj;
                }
            },
            search: {
                get() {
                    if (!this.inpval) {
                        return [];
                    } else {
                        return this.$store.getters.findCity(this.inpval);
                    }
                }
            }
        },
        methods: {
            add() {
                this.$store.commit("CHANGECOUNT");
                // this.$store.dispatch("CHANGECOUNT_ACTION").then(() => {});
            },
            added() {
                // 一般情况下载荷应该是一个对象;
                // this.$store.commit("CHANGECOUNTPAYLOAD", this.addcount);
                // this.$store.commit({
                //     type: "CHANGECOUNTPAYLOAD",
                //     addcount: 1
                // });
                this.$store
                    .dispatch("CHANGECOUNTPAYLOAD_ACTION", this.addcount)
                    .then(() => {});
            }
            // 对象展开运算符
            // ...mapMutations({
            //     add: "CHANGECOUNT",
            //     added: "CHANGECOUNTPAYLOAD"
            // })
            // ...mapActions({
            //     add: "CHANGECOUNT_ACTION",
            //     added: "CHANGECOUNTPAYLOAD_ACTION"
            // })
        },
        created() {}
    };
</script>
<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
    .vueX {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        justify-content: center;
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
    }
</style>
