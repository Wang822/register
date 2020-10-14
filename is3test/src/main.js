// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import App from './App'
import VueRouter from 'vue-router'
import Cart from './components/Cart'
import Hello from './components/HelloWorld'
import Login from './components/Login'
import Register from './components/Register'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSession)
// Vue.use(VueAxios, axios)

// Vue.prototype.$http = axios

// 设置路由
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/register', component: Register },

  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
        <div id ="app">
          <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">一个电商网站</a>
              </div>
              <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li><router-link to="/">主页</router-link></li>
                  <li><router-link to="/cart">购物车</router-link></li>
                  <li><router-link to="/login">登录</router-link></li>
                  <li><router-link to="/register">注册</router-link></li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
          </nav>
          <router-view></router-view>
        </div>`
  // eslint-disable-next-line quotes
}).$mount("#app")
