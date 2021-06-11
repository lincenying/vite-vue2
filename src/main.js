import 'url-search-params-polyfill'
import Vue from 'vue'
import Croppa from 'vue-croppa'
import { sync } from 'vuex-router-sync'

import '@/polyfill/toFixed'
import * as filters from '@/filters'
import globalPlugin from '@/plugin/global'
import vant from '@/plugin/vant'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import VueBus from './event-bus'

import App from './App.vue'

console.log('当前环境: ' + import.meta.env.VITE_APP_ENV)

Vue.use(Croppa)
Vue.use(VueBus)
Vue.use(vant)
Vue.use(globalPlugin)

const store = createStore()
const router = createRouter()
sync(store, router)
window.$$store = store

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const app = new Vue({
    name: 'Root',
    router,
    store,
    render: h => h(App)
})

app.$mount('#app')
