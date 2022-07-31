import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import ExampleComponent from './../components/ExampleComponent'



const routes = [
    { path: '/test', component: ExampleComponent },
]


const router = new VueRouter({
    mode: 'history',
    routes
})
export default router