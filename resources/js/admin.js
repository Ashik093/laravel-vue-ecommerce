require('./bootstrap');

window.Vue = require('vue').default;

import router from './admin/router';
import { store } from './common/store/store'

Vue.component('admin-master', require('./components/admin/adminMaster.vue').default);

const admin = new Vue({
    el: '#admin',
    router,
    store
});