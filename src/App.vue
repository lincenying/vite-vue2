<template>
    <div id="app" class="wrap">
        <transition
            v-if="!$$global.globalLoading"
            :name="transitionName"
            @before-enter="handleBeforeEnter"
            @after-enter="handleAfterEnter"
            @after-leave="handleAfterLeave"
        >
            <keep-alive :include="cacheComponents">
                <router-view class="body"></router-view>
            </keep-alive>
        </transition>
        <van-tabbar route :border="false" class="fixed-center">
            <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/home-normal" icon="home-o">首页2</van-tabbar-item>
            <van-tabbar-item replace to="/lists" icon="home-o">列表</van-tabbar-item>
            <van-tabbar-item replace to="/about" icon="search">关于</van-tabbar-item>
        </van-tabbar>
        <div v-if="$$global.globalLoading" class="global-loading">
            <van-loading type="spinner" size="32px" />
        </div>
        <div v-if="$$global.routerLoading" class="router-loading">
            <van-loading type="spinner" size="32px" color="#1989fa" />
        </div>
    </div>
</template>
<script>
import '@/assets/scss/style.scss'
import 'vue-croppa/dist/vue-croppa.css'

export default {
    name: 'app-root',
    data() {
        return {
            transitionName: 'fade',
            // 需要缓存的路由组件 name
            cacheComponents: 'home-router,home-normal-router,lists-router,about-router'
        }
    },
    watch: {
        $route(to, from) {
            // 同级路由切换或者打开的第一个页面, 使用 fade 切换动画
            // 打开子级路由, 使用 slide-left 切换动画
            // 子级路由返回, 使用 slide-right 切换动画
            if (!from.meta.index || to.meta.index === from.meta.index) {
                this.transitionName = 'fade'
            } else if (to.meta.index > from.meta.index) {
                this.transitionName = 'slide-left'
            } else {
                this.transitionName = 'slide-right'
            }
        }
    },
    created() {
        setTimeout(() => {
            this.$store.commit('global/globalLoading', false)
        }, 1500)
    },
    methods: {
        handleBeforeEnter() {
            this.$store.commit('global/setPageSwitching', true)
        },
        handleAfterEnter() {
            this.$store.commit('global/setPageSwitching', false)
        },
        handleAfterLeave() {
            this.$root.$emit('triggerScroll')
        }
    }
}
</script>
