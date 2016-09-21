import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'
import Vue from "vue"
import VueRouter from "vue-router"
import { indexRouter } from './router/index'
import index from './App'
import VueResource from 'vue-resource'

Vue.config.debug = true;
Vue.use(VueRouter)
Vue.use(VueResource);
var App = Vue.extend({});
var router = new VueRouter({
    history: true,
    saveScrollPosition: true
});
indexRouter(router)
router.start(App, '#app');
