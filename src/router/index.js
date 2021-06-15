/* eslint-disable no-inline-comments */
import Vue from 'vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Meta)

// eslint-disable-next-line func-style
const scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    }
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash

        if (document.querySelector(to.hash)) {
            return position
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false
    }

    return new Promise(resolve => {
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // coords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }

        // wait for the out transition to complete (if necessary)
        this.app.$root.$once('triggerScroll', () => {
            // if the resolved position is falsy or an empty object,
            // will retain current scroll position.
            resolve(position)
        })
    })
}

export function createRouter() {
    const router = new VueRouter({
        mode: 'hash',
        scrollBehavior,
        routes: [
            {
                path: '/',
                redirect: '/index'
            },
            {
                name: 'index',
                path: '/index',
                component: () => import(/* webpackChunkName: "chunk-index" */ '@/views/home.vue'),
                meta: { title: '首页', index: 1 }
            },
            {
                name: 'home-normal',
                path: '/home-normal',
                component: () => import(/* webpackChunkName: "chunk-index" */ '@/views/home-normal.vue'),
                meta: { title: '首页2', index: 1 }
            },
            {
                name: 'lists',
                path: '/lists',
                component: () => import(/* webpackChunkName: "chunk-index" */ '@/views/lists.vue'),
                meta: { title: '列表', index: 1 }
            },
            {
                name: 'index-detail',
                path: '/index/detail',
                component: () => import(/* webpackChunkName: "chunk-index" */ '@/views/home-detail.vue'),
                meta: { title: '详情', index: 2 }
            },
            {
                name: 'about',
                path: '/about',
                component: () => import(/* webpackChunkName: "chunk-about" */ '@/views/about.vue'),
                meta: { title: '关于', index: 1 }
            },
            {
                name: 'about-detail',
                path: '/about/detail',
                component: () => import(/* webpackChunkName: "chunk-about" */ '@/views/about-detail.vue'),
                meta: { title: '关于', index: 2 }
            },
            {
                name: 'avatar',
                path: '/avatar',
                component: () => import(/* webpackChunkName: "chunk-about" */ '@/views/avatar.vue'),
                meta: { title: '头像', index: 2 }
            },

            { path: '*', redirect: '/' }
        ]
    })
    return router
}
