require('./bootstrap');

window.Vue = require('vue').default;
import router from './public/router';

Vue.component('public-master', require('./components/public/publicMaster.vue').default);


const app = new Vue({
    el: '#app',
    router,
    data: {
        test: "This is testing"
    }
});