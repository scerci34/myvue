/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('ders1', require('./components/Ders1.vue').default);
Vue.component('ders2', require('./components/Ders2If.vue').default);
Vue.component('ders3', require('./components/Ders3method.vue').default);
Vue.component('ders4', require('./components/Ders4.vue').default);
Vue.component('ders5', require('./components/Ders5.vue').default);
Vue.component('ders6', require('./components/DersClass.vue').default);
Vue.component('ders7', require('./components/FormValidation.vue').default);
Vue.component('watch', require('./components/Watch.vue').default);
Vue.component('formvalid', require('./components/FormValidationMetWatch.vue').default);




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
