<template>
    <div class="home-wrap is-tab" :class="$options.name">
        <div class="route-wrap">
            <!-- <van-skeleton v-if="list.length === 0" title :row="4" class="mt-10px" /> -->
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :immediate-check="false"
                    :finished="finished"
                    :error.sync="error"
                    loading-text="努力加载中"
                    finished-text="我也是有底线的"
                    error-text="请求失败，点击重新加载"
                    @load="getList"
                >
                    <van-cell
                        v-for="(item, index) in list"
                        :key="index + '_' + item.c_id"
                        :title="item.c_title"
                        is-link
                        :to="`/index/detail?id=${item.c_id}`"
                    />
                </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
import saveScroll from '@/mixins/save-scroll'
import lists from '@/mixins/lists'

export default {
    // 如果需要记录滚动条位置, name必须设置, 且每个路由组件的name必须保证唯一性
    // name 统一设置成 `${页面文件名}-router`
    name: 'home-router',
    components: {},
    mixins: [lists, saveScroll],
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
    mounted() {
        this.getList()
    },
    methods: {}
}
</script>
