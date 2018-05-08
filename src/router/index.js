import Vue from 'vue'
import Router from 'vue-router'
import vuejs from '@/components/vuejs'
import vueRouter from '@/components/vueRouterjs'
import vuex from '@/components/vuex'
import axios_async_promise from '@/components/axios_async_promise'
import $ from 'jquery'
// 懒加载 方法一
// const vuejs = resolve => require(['@/components/vuejs'], resolve)
// const vueRouter = resolve => require(['@/components/vueRouterjs'], resolve)
// const vuex = resolve => require(['@/components/vuex'], resolve)
// const axios_async_promise = resolve => require(['@/components/axios_async_promise'], resolve)

// 懒加载 方法二
// const vuejs = () => import('@/components/vuejs')
// const vueRouter = () => import('@/components/vueRouterjs')
// const vuex = () => import(*/ '@/components/vuex')
// const axios_async_promise = () => import(*/ '@/components/axios_async_promise')


Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			redirect: '/vue',
			meta: {
				required: true
			}
		},
		{
			path: '/vue',
			name: 'vuejs',
			component: vuejs,
			// alias: '/vueRouter'
		},
		{
			path: '/vueRouter',
			name: 'vueRouter',
			component: vueRouter
		},
		{
			path: '/vuex',
			name: 'vuex',
			component: vuex
		},
		{
			path: '/axios',
			name: 'axios_async_promise',
			component: axios_async_promise
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// console.log('to++')
		// console.log(to)
		console.log('savedPosition+++')
		console.log(savedPosition)
		if (to.fullPath == '/vue')
			return { x: 0, y: 0 }
	}
})
/*
const nextRoute = ['', '', ''];
router.beforeEach((to, from, next) => {
	// to: Route: 即将要进入的目标 路由对象
	// from: Route: 当前导航正要离开的路由
	// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
	// 判断是否登录
	// console.log('to');
	// console.log(to);
	// console.log('from');
	// console.log(from);
	// console.log('next');
	// console.log(next);
	if (nextRoute.indexOf(to.name)) {
		if (isLogin) {
			next()
		} else {
			router.push({ path: 'login' })
		}
	}
	next();
})
*/
export default router