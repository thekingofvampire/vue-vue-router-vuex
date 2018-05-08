<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <ul class="footnav">
            <li>
                <router-link to="/vue" active-class="active">vue.js</router-link>
            </li>
            <li>
                <router-link to="/vueRouter" active-class="active">vue-router.js</router-link>
            </li>
            <li>
                <router-link to="/vuex" active-class="active">vux.js</router-link>
            </li>
            <li>
                <router-link to="/axios" active-class="active">axios.js以及async异步加载和Promise</router-link>
            </li>
        </ul>
        <keep-alive :include="keepAlive">
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                keepAlive: "keepAlive"
            };
        },
        watch: {
            // $route(to, from) {
            //     console.log("to");
            //     console.log(to.meta);
            //     console.log("from");
            //     console.log(from);
            // }
        }
    };
</script>

<style lang="scss" scoped  type="text/css">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        overflow: hidden;
        .footnav {
            width: 1200px;
            margin: 0 auto;
            display: table;
            list-style: none;
            li {
                display: table-cell;
                a {
                    display: block;
                    width: 80%;
                    margin: 0 auto;
                    text-decoration: none;
                    color: #888;
                    line-height: 80px;
                    font-size: 20px;
                }
                .active {
                    color: #ff5000;
                }
            }
        }
    }
</style>
