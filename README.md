# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 推荐使用cnpm

公司老大要求写一个关于vue的简单的教程，然后花了三天的时间把vue官网有从头到尾看了一遍，写了这个demo，里面也有很多我自己对API的理解和例子，希望有帮助

    vuejs路由
    这个页面有很多基础的API，就不一一赘述了。也是最基础的一些API，很多的全局指令在里面都会有相对应的例子


    vueRouter
    几种路由跳转的方式，以及路由的别名，meta属性，还有路由的生命周期（emmm 可能不叫生命周期 哈哈），
    每个生命周期都有具体的例子，以及最重要的路由传参，几种方式的传参各有利弊。


    vuex
    全局状态管理，我觉得最变态的就是这个，尤其是关于mutation以及action，我也花了很长的时间去想怎么去区分mutation只执行同步，action执行异步，
    最后绞尽脑汁写出了一个例子。


## 介绍可能极简，但是代码量其实也一般般，哦，对了，还有transition 路由的动画这个暂时没有写，其实也是可以在路由的生命周期来判断，突然想起来应该是叫守卫导航，组件内的和全局的两种。都有具体的例子。如果觉得对您有帮助，请不要吝啬，随手给一个star，万分感谢
