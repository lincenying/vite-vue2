import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            global
        },
        getters: {
            ['route'](state) {
                return state.route
            }
        }
    })
}
