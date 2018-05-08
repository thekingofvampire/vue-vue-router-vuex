<template>
	<div>
		<h1>这是vue.js</h1>
		<div class="demo" style="max-height:650px;overflow:auto">
			<ul>
				<li>
					<h4>数据初始化data</h4>
					<div v-text="initData" class="initData"></div>
				</li>
				<li>
					<h4>父组件往子组件传参,子组件用props接受参数</h4>
					<div v-text="props" class="initData"></div>
				</li>
				<li>
					<h4>方法methods</h4>
					<div class="initData">
						<div class="computed">{{initNumber}}</div>
						<button @click="addNum">+</button>
					</div>
					<div class="resultNumcomputed" v-text="initNumbercomputed"></div>
				</li>
				<li>
					<h4>计算属性computed</h4>
					<div class="initData">
						<div class="result">{{resultNum}}</div>
					</div>
					<div class="resultNumcomputed" v-text="resultNumcomputed"></div>
				</li>
				<li>
					<h4>监听属性watch</h4>
					<div class="initData">
						<div class="computed">{{watchNum}}</div>
					</div>
					<div class="resultNumcomputed" v-text="Numwatch"></div>
				</li>
				<li>
					<h4>v-text</h4>
					<div v-text="htmlval" class="initData"></div>
				</li>
				<li>
					<h4>v-html</h4>
					<div v-html="htmlval" class="initData"></div>
				</li>
				<li>
					<h4>v-model</h4>
					<div class="initData">
						<input type="text" v-model="initNumber">
					</div>
				</li>
				<li>
					<h4>v-show</h4>
					<button @click="Vshow = !Vshow">显示隐藏</button>
					<div class="initData">
						<div class="box" v-show="Vshow"></div>
					</div>
				</li>
				<li>
					<h4>v-if</h4>
					<button @click="Vif = !Vif">显示隐藏</button>
					<div class="initData">
						<div class="box" v-if="Vif"></div>
					</div>
				</li>
				<li>
					<h4>
						v-if和v-else
					</h4>
					<button @click="Velse = !Velse">显示隐藏</button>
					<div class="initData">
						<div class="box" v-if="Velse"></div>
						<div class="elsebox" v-else></div>
					</div>
				</li>
				<li>
					<h4>对象的v-for</h4>
					<div class="initData">
						<div v-for="(item,key,index) in objitems" :key="key" style="display:inlien-block;margin-right:30px;">key:{{key}} === item:{{item}} === index:{{index}}</div>
					</div>
				</li>
				<li>
					<h4>数组的v-for</h4>
					<div class="initData">
						<div v-for="(item,key) in arritems" :key="key" style="display:inlien-block;margin-right:30px;">key:{{key}} === item:{{item}}</div>
					</div>
				</li>
				<li>
					<h4>v-on绑定事件,缩写 @</h4>
					<div class="initData">
						<p style="color:#000">修饰符</p>
						<div>阻止冒泡
							<span style="color:#000;">　@click.stop</span>
						</div>
						<div>阻止默认行为
							<span style="color:#000;">　@click.prevent</span>
						</div>
						<div>串联修饰符
							<span style="color:#000;">　@click.stop.prevent</span>
						</div>
						<div>键修饰符，键别名
							<span style="color:#000;">　@keyup.enter</span>
						</div>
						<div>点击回调只会触发一次
							<span style="color:#000;">　v-on:click.once</span>
						</div>
						<div>对象语法 (2.4.0+)
							<span style="color:#000;">　v-on="{ mousedown: doThis, mouseup: doThat }"</span>
						</div>
					</div>
				</li>
				<li>
					<h4>v-bind　缩写 ：</h4>
					<div class="initData">
						<img src="../../static/微信图片_20180503151654.png" alt="">
					</div>
				</li>
				<li>
					<h4>v-once</h4>
					<div class="initData">
						只渲染组件或者元素一次 之后会被视为静态内容跳过不在渲染
					</div>
				</li>
				<li>
					<h4>v-cloak</h4>
					<div class="initData">
						<div style="width:50px;height:50px;background:#bcd" v-cloak></div>
					</div>
				</li>
				<li>
					<h4>过滤器</h4>
					<div class="initData">
						<input type="text" v-model="filterdata">
						<div>{{filterdata | upcase}}</div>
					</div>
				</li>
				<li>
					<h4>生命周期</h4>
					<div class="initData">
						<a href="https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90" target="_blank">组件的生命周期</a>
					</div>
				</li>
				<li>
					<h4>this.$nextTick()</h4>
					<div class="initData">
						在页面dom加载完毕之后进行dom的操作 类似于setTimeout
					</div>
				</li>
				<li>
					<h4>this.$set( target, key, value )</h4>
					<div class="initData">
						数据（数组，对象）的响应式改变
					</div>
				</li>
				<li>
					<h4>全局组件注册</h4>
					<div class="initData">
						import my-component from '../*/*my-component'<br/> <br/>Vue.component('my-component', my-component)
					</div>
				</li>
				<li>
					<h4>父子组件传参</h4>
					<div class="initData">{{dataprops}}<br/>子组件通过props接受参数：props:['color']<br/>子组件向父组件发送值 this.$emit( ' update : color ' , #000 )
					</div>
				</li>
				<li>
					<h4>当前组件事件监听</h4>
					<div class="initData">
						this.$on('test', function (msg) { console.log(msg) }) <br/> this.$emit('test', 'hi')
					</div>
				</li>
				<li>
					<h4>slot插槽<br/>(不仅仅限于纯文本，也可以是html)</h4>
					<div class="initData">
						<slotCom>
							<h1 slot="aaa">这是父组件插进去的内容</h1>
						</slotCom>
					</div>
				</li>
				<li>
					<h4>slot插槽<br/>(slot的name属性)</h4>
					<div class="initData">
						<p v-text="slotdetail1"></p>
						<p v-text="slotdetail2"></p>
						<p v-text="slotdetail3"></p>
					</div>
				</li>
				<li>
					<h4>路由懒加载</h4>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import slotCom from "./slot/slot";
	export default {
	    name: "keepAlive",
	    components: {
	        slotCom
	    },
	    data() {
	        return {
	            initData: `export  default { data ( ) { return { initNumber : "" } } }`,
	            props: `父组件传参：<demo :color="color" :width="width"></demo> 子组件接受参数：['color','width']或者是{ color : String , width : Number } （对象形式的接受参数可以对接受的参数进行校验）`,
	            initNumber: 1,
	            resultNumcomputed: `computed: { resultNum() { return this.initNumber; } },`,
	            initNumbercomputed: `methods: { addNum( ) { this.initNumber++; } },`,
	            watchNum: "",
	            Numwatch: `watch: { initNumber ( )  { this.watchNum = this.initNumber; } },`,
	            htmlval: "<h1>vue</h1>",
	            Vshow: false,
	            Vif: false,
	            Velse: false,
	            objitems: {
	                firstName: "John",
	                lastName: "Doe",
	                age: 30
	            },
	            arritems: ["John", "Doe", "30"],
	            onceNum: 1,
	            filterdata: "",
	            dataprops: "父组件:<aaa :color.sync='#fff'></aaa>",
	            slotdetail1:
	                "引入的组件：<template><div>我是插槽组件<slot name='aaa'></slot></div></template>",
	            slotdetail2:
	                '本组件:<slotCom><h1 slot="aaa">这是父组件插进去的内容</h1></slotCom>',
	            slotdetail3:
	                "只有当name属性与slot的值相等的时候才可以被插入到引入的组件当中去"
	        };
	    },
	    filters: {
	        upcase(value) {
	            if (!value) return "";
	            value = value.toString();
	            return value.charAt(0).toUpperCase() + value.slice(1);
	        }
	    },
	    computed: {
	        resultNum() {
	            return this.initNumber;
	        }
	    },
	    methods: {
	        addNum() {
	            this.initNumber++;
	        },
	        addOnceNum() {
	            this.onceNum++;
	        }
	    },
	    watch: {
	        initNumber: {
	            handler() {
	                this.watchNum = this.initNumber;
	            }
	        },
	        // immediate: true
	        deep: true
	    },
	    created() {
	        console.log("vue正在加载");
	    },
	    mounted() {
	        console.log("vue加载完毕");
	    }
	};
</script>
<style lang="scss" scoped>
	$width: 100%;
	[v-cloak] {
	    display: none;
	}
	h1 {
	    text-align: center;
	}
	.demo {
	    width: 1200px;
	    margin: 0 auto;
	    padding-bottom: 60px;
	    letter-spacing: 1px;
	    h2 {
	        text-align: left;
	        line-height: 60px;
	        border-bottom: 1px solid #ccc;
	        // color: #888;
	    }
	    ul {
	        color: #888;
	        li {
	            display: flex;
	            flex-flow: row;
	            justify-content: flex-start;
	            min-height: 60px;
	            // line-height: 60px;
	            padding-top: 10px;
	            border-bottom: 1px solid #ccc;
	            h4 {
	                // width: $width/4;
	                min-width: 330px;
	                text-align: left;
	                line-height: 25px;
	            }
	            .initData {
	                text-align: left;
	                .computed {
	                    display: inline-block;
	                }
	                .result {
	                    display: inline-block;
	                }
	                .box {
	                    width: 100px;
	                    height: 100px;
	                    background: #aaa;
	                }
	                .elsebox {
	                    width: 100px;
	                    height: 100px;
	                    background: #acd;
	                }
	            }
	            .resultNumcomputed {
	                margin-left: 20px;
	            }
	            button {
	                width: 60px;
	                height: 30px;
	            }
	        }
	    }
	}
	.model {
	    width: 100%;
	    position: fixed;
	    top: 0;
	    background: rgba(0, 0, 0, 0.5);
	}
</style>
