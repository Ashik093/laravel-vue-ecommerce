import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Home from './../components/public/Home.vue'
import UserLogin from './../components/public/auth/UserLogin'
import UserRegister from './../components/public/auth/UserRegister'


const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/user-login', component: UserLogin, name: 'UserLogin' },
    { path: '/user-register', component: UserRegister, name: 'UserRegister' },
]


const router = new VueRouter({
    mode: 'history',
    routes
})
export default router