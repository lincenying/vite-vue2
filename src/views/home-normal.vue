<template>
    <div class="home-normal-wrap is-tab" :class="$options.name" ref="body">
        <div class="route-wrap">
            <!-- <van-skeleton v-if="list.length === 0" title :row="4" class="mt-10px" /> -->
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="lists">
                    <div v-for="(item, index) in list" :key="index" class="item u-border-bottom">
                        <router-link class="text-14px" :to="`/index/detail?id=${item.c_id}`">{{ item.c_title }}</router-link>
                    </div>
                </div>
                <infinite-loading :identifier="identifier" @infinite="infiniteHandler" spinner="waveDots">
                    <div slot="no-results">
                        <van-empty description="空空如也" />
                    </div>
                    <div slot="no-more">
                        <van-divider>没有更多数据了</van-divider>
                    </div>
                    <div slot="error" slot-scope="{ trigger }">
                        <van-divider><span @click="trigger">加载错误, 点击重新加载</span></van-divider>
                    </div>
                </infinite-loading>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import saveScroll from '@/mixins/save-scroll'
import scrollLoad from '@/mixins/scroll-load'

export default {
    // 如果需要记录滚动条位置, name必须设置, 且每个路由组件的name必须保证唯一性
    // name 统一设置成 `${页面文件名}-router`
    name: 'home-normal-router',
    components: {
        InfiniteLoading
    },
    mixins: [scrollLoad, saveScroll],
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Home'
    },
    data() {
        return {
            api: {
                method: 'get',
                url: 'ajax/article-list',
                config: { perPage: 20 }
            }
        }
    },
    async mounted() {},
    beforeDestroy() {},
    methods: {}
}
</script>
