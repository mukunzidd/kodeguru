import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
const fb = require('../firebaseConfig.js')
import './assets/scss/app.scss'

Vue.config.productionTip = false

// handle page reloads
let app
fb.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            store,
            router,
            render: h => h(App)
        })
    }
})