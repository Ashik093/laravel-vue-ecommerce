import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

import adminMaster from './../components/admin/adminMaster.vue'



const routes = [
    { path: '/admin', component: adminMaster },
]


const router = new VueRouter({
    mode: 'history',
    routes
})
export default router