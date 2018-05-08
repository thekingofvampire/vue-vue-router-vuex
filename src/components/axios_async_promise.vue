<template>
    <div style="padding-bottom:80px;">
        <h1>axios_async_promise</h1>
        <div class="axios_async_promise">
            <div class="container">
                <div class="title">ajax同步和异步请求</div>
                <div class="content" style="margin-left:20px;">
                    <div>
                        <button @click="syncload">同步请求</button>
                    </div>
                    <div style="margin-top:20px;">
                        <button @click="asyncload">异步请求</button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">axios的参数</div>
                <div class="content" style="margin-left:20px;">
                    <div style="float:left">
                        <pre>
get请求:
this.$http.get('/user?ID=12345')
    .then(function(response){
        console.log(response);
    })
    .catch(function(err){
        console.log(err);
    });
                        </pre>
                    </div>
                    <div style="float:left;margin-left:50px;">
                        <pre>
post请求:
this.$http.post('/user',{
        firstName:'Fred',
        lastName:'Flintstone'
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });
                        </pre>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="title">Promise--消除 callback hell 代码较为清晰</div>
                <div class="content" style="margin-left:20px;">
                    <div>
                        控制异步流程异步获取：{{arr}}
                    </div>
                    <div>
                        不控制异步流程异步获取：{{arr1}}
                    </div>
                </div>
            </div>
            <h3 style="padding:10px 0;">async控制异步流程(将异步操作用同步的写法来写)</h3>
            <div class="container">
                <div class="title">1、(1)async.auto<br/>(任务之间彼此独立，<br/>可以并行执行,<br/>但第三个必须等前两个执行完毕才执行)</div>
                <div class="content" style="margin-left:20px;">
                    <button @click='asyncAutoAll'>执行</button>
                    {{asyncAutoArrAll}}
                </div>
            </div>
            <div class="container">
                <div class="title">1、(2)async.auto<br/>(任务之间相互依赖，<br/>必须依次执行</div>
                <div class="content" style="margin-left:20px;">
                    <button @click='asyncAutoOrder'>执行</button>
                    {{asyncAutoArrOrder}}
                </div>
            </div>
            <div class="container">
                <div class="title">1、(3)async.autoInject<br/>(auto方法的语法糖，<br/>与auto类似但回调函数被作为参数<br/>传入下一个串行函数)</div>
                <div class="content" style="margin-left:20px;">
                    <button @click='asyncAutoInjectOrder'>执行</button>
                    {{asyncAutoInjectArrOrder}}
                </div>
            </div>
            <div class="container">
                <div class="title">2、(1)async.whilst<br/>(用可于异步调用的while)</div>
                <div class="content" style="margin-left:20px;">
                    <button @click='asyncWhilst'>执行</button>
                    {{asyncWhilstArr}}
                </div>
            </div>
            <div class="container">
                <div class="title">2、(2)async.doWhilst <br/>(后验证的异步while)</div>
                <div class="content" style="margin-left:20px;">
                    <button @click='asyncdoWhilst'>执行</button>
                    {{asyncdoWhilstArr}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                arr: [],
                name: "E g g",
                arr1: [],
                asyncAutoArrAll: [],
                asyncAutoArrOrder: [],
                asyncAutoInjectArrOrder: [],
                asyncWhilstArr: [],
                asyncdoWhilstArr: []
            };
        },
        methods: {
            requestP(url) {
                var me = this;
                return new Promise(function(resolve, reject) {
                    me.$http.get(url).then(response => {
                        resolve(response);
                    });
                });
            },
            ajaxload(async) {
                $.ajax({
                    type: "GET",
                    url: "../../static/data/data1.json",
                    async: async,
                    success: data => {
                        console.log("获取数据");
                    }
                });
                console.log("赋值");
            },
            syncload() {
                this.ajaxload(false);
            },
            asyncload() {
                this.ajaxload(true);
            },
            asyncAutoAll() {
                var me = this;
                me.asyncAutoArrAll = [];
                me.$async.auto({
                    getData: function(callback) {
                        setTimeout(() => {
                            console.log(1);
                            me.asyncAutoArrAll.push(1);
                            callback(null, 1);
                        }, 3000);
                    },
                    getAnotherData: function(callback) {
                        setTimeout(() => {
                            console.log(2);
                            me.asyncAutoArrAll.push(2);
                            callback(null, 2);
                        }, 1000);
                    },
                    printData: [
                        "getData",
                        "getAnotherData",
                        function(result, callback) {
                            console.log(3);
                            console.log(result);
                            me.asyncAutoArrAll.push(3);
                        }
                    ]
                });
            },
            asyncAutoOrder() {
                var me = this;
                me.asyncAutoArrOrder = [];
                me.$async.auto({
                    getData: function(callback) {
                        setTimeout(() => {
                            console.log(1);
                            me.asyncAutoArrOrder.push(1);
                            callback(null, 1);
                        }, 3000);
                    },
                    getAnotherData: [
                        "getData",
                        function(result, callback) {
                            setTimeout(() => {
                                console.log(2);
                                console.log(result);
                                me.asyncAutoArrOrder.push(2);
                                callback(null, 2);
                            }, 1000);
                        }
                    ],
                    printData: [
                        "getAnotherData",
                        function(result, callback) {
                            console.log(3);
                            console.log(result);
                            me.asyncAutoArrOrder.push(3);
                        }
                    ]
                });
            },
            asyncAutoInjectOrder() {
                var me = this;
                me.asyncAutoInjectArrOrder = [];
                me.$async.autoInject({
                    getData: function(callback) {
                        setTimeout(() => {
                            console.log(1);
                            me.asyncAutoInjectArrOrder.push(1);
                            callback(null, 1);
                        }, 3000);
                    },
                    getAnotherData: [
                        "getData",
                        function(getData, callback) {
                            setTimeout(() => {
                                console.log(2);
                                console.log("getData=>" + getData);
                                me.asyncAutoInjectArrOrder.push(2);
                                callback(null, 2);
                            }, 1000);
                        }
                    ],
                    printData: [
                        "getAnotherData",
                        function(getAnotherData, callback) {
                            console.log(3);
                            console.log("getAnotherData=>" + getAnotherData);
                            me.asyncAutoInjectArrOrder.push(3);
                        }
                    ]
                });
            },
            asyncWhilst() {
                var count = 0;
                var me = this;
                var arr = [];
                this.asyncWhilstArr = [];
                // 先执行判断，在执行回调
                this.$async.whilst(
                    () => {
                        console.log("执行");
                        return count < 5;
                    }, // 是否满足条件
                    callback => {
                        // 满足条件执行函数
                        count++;
                        setTimeout(() => {
                            console.log(count);
                            arr.push(count);
                            callback(null, count);
                        }, 1000);
                    },
                    (err, value) => {
                        // 不满足条件完成循环
                        console.log("result: " + count);
                        me.asyncWhilstArr = [...arr];
                        // me.asyncWhilstArr = arr;
                        console.log(me.asyncWhilstArr == arr);
                    }
                );
            },
            asyncdoWhilst() {
                var count = 0;
                var me = this;
                var arr = [];
                this.asyncdoWhilstArr = [];
                // 先执行回调函数  在执行判断
                this.$async.doWhilst(
                    callback => {
                        // 满足条件执行函数
                        count++;
                        setTimeout(() => {
                            console.log(count);
                            arr.push(count);
                            callback(null, count);
                        }, 1000);
                    },
                    () => {
                        console.log("执行");
                        return count < 5;
                    }, // 是否满足条件
                    (err, value) => {
                        // 不满足条件完成循环
                        console.log("result: " + count);
                        me.asyncdoWhilstArr = [...arr];
                        // me.asyncWhilstArr = arr;
                        console.log(me.asyncdoWhilstArr == arr);
                    }
                );
            }
        },
        created() {
            // 控制异步流程
            this.requestP("../../static/data/data1.json")
                .then(firstNameasync => {
                    this.arr.push(firstNameasync.data.firstName);
                    return this.requestP("../../static/data/data2.json");
                })
                .then(middleNameasync => {
                    this.arr.push(middleNameasync.data.middleName);
                    return this.requestP("../../static/data/data3.json");
                })
                .then(lastNameasync => {
                    this.arr.push(lastNameasync.data.lastName);
                });
            //不控制异步流程
            this.$http.get("../../static/data/data1.json").then(res => {
                this.arr1.push(res.data.firstName);
            });
            this.$http.get("../../static/data/data2.json").then(res => {
                this.arr1.push(res.data.middleName);
            });
            this.$http.get("../../static/data/data3.json").then(res => {
                this.arr1.push(res.data.lastName);
            });
        }
    };
</script>
<style lang="scss" scoped>
    .axios_async_promise {
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
            button {
                min-width: 100px;
                height: 50px;
            }
        }
    }
</style>

