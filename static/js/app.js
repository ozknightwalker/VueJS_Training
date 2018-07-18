import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css';

Vue.use(VueRouter);
Vue.use(VueMaterial);

new Vue({
    el: '#app',
    components: { 
        'App': () => import('./views/App.vue')
    },
    template: '<App/>'
});