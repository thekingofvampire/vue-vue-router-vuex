<template>
    <div>
        <h1>这是vueRouter.js</h1>
        <div class="vueRouter">
            <div class="container">
                <div class="title">路由的跳转方法</div>
                <div class="content">
                    <p>{{jumpmethod1}}</p>
                    <p>{{jumpmethod2}}</p>
                    <p>{{jumpmethod3}}</p>
                    <p>{{jumpmethod4}}</p>
                    <p style="text-indent:75px;">{{jumpmethod5}}</p>
                    <p>{{jumpmethod6}}</p>
                    <p style="text-indent:75px;">{{jumpmethod7}}</p>
                    <p>{{jumpmethod8}}</p>
                </div>
            </div>
            <div class="container">
                <div class="title">路由的传参和动态路由</div>
                <div class="content">
                    <div>
                        两种传参 一种动态路由
                        <a href="https://jsfiddle.net/vampire/16x90u47/5/" target="_blank">Vue路由传参和动态路由</a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">路由的嵌套</div>
                <div class="content">
                    <div>
                        可以无限嵌套
                        <a href="https://jsfiddle.net/vampire/ts19Lk49/6/" target="_blank">路由嵌套</a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">Vue命名视图</div>
                <div class="content">
                    <div>
                        借助name属性
                        <a href="https://jsfiddle.net/vampire/xjtdzdhr/4/" target="_blank">试图命名</a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">Vue路由重定向</div>
                <div class="content">
                    <div>
                        路由重定向：redirect：' / 路由'
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">Vue路由别名</div>
                <div class="content">
                    <div>
                        alias: ' / 路由 '
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">Vue全局导航守卫两种</div>
                <div class="content">
                    <div>
                        router.beforeEach( ( to, from, next ) => { } )
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">Vue组件内的导航守卫</div>
                <div class="content">
                    <div>
                        beforeRouteEnter ( to, from, next ) { } <br/> beforeRouteUpdate ( to, from, next ) { } <br/> beforeRouteLeave ( to, from, next ) { }
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                jumpmethod1:
                    "第一种：< router-link to = ' / 路由'  > 路由跳转< / router-link >",
                jumpmethod2: "第二种：< a href = ' # / 路由' > 路由跳转 </a>",
                jumpmethod3:
                    "第三种：this.$router.go ( 0 刷新 / -1 后退 / 1 前进 /**数字 )",
                jumpmethod4:
                    '第四种：this.$router.push( path:" / $ { 变量 } " ,query : { } ) 或者',
                jumpmethod5: ` this.$router.push( name : '路由的name属性' ,params : { } )`,
                jumpmethod6:
                    '第五种：this.$router.replace( path:" / $ { 变量 } " ,query : { } ) 或者',
                jumpmethod7: ` this.$router.replace( name : '路由的name属性' ,params : { } )`,
                jumpmethod8:
                    "push 和 replace 的区别 : push会在 history 添加新纪录，replace则不会"
            };
        },
        beforeRouteEnter(to, from, next) {
            // to: Route: 即将要进入的目标 路由对象
            // from: Route: 当前导航正要离开的路由
            // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建

            //可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
            // 通过 `vm` 访问组件实例
            // console.log(" 进 入 之 前 定 时 2 s 进 入 ");
            // setTimeout(function() {
            //     next(vm => {
            //         // console.log(this);
            //     });
            // }, 2000);
            next();
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        },
        beforeRouteLeave(to, from, next) {
            var answer = confirm(
                "你可以借我5毛，因为我正好也有5毛，我们凑一块儿吧"
            );
            console.log(answer);
            if (answer) {
                next();
            }
        },
        mounted() {
            var p = 0,
                t = 0,
                me = this;
            // 判断上滚还是下滚
            $(window).scroll(function(e) {
                p = $(this).scrollTop();

                if (t <= p) {
                    //下滚
                } else {
                    //上滚
                }
                setTimeout(function() {
                    t = p;
                }, 0);
            });
        },
        watch: {}
    };
</script>
<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
    .vueRouter {
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
