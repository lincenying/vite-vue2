<template>
    <div class="home-wrap is-tab" :class="$options.name">
        <div class="route-wrap">
            <van-tabs :sticky="true" :swipeable="true">
                <van-tab title="全部">
                    <van-pull-refresh v-model="list[0].refreshing" @refresh="onRefresh(0)">
                        <van-list v-model="list[0].loading" :finished="list[0].finished" @load="getList(0)">
                            <van-cell
                                v-for="item in list[0].items"
                                :key="`0_${item.c_id}}`"
                                :title="item.c_title"
                                is-link
                                :to="`/index/detail?id=${item.c_id}`"
                            />
                        </van-list>
                    </van-pull-refresh>
                </van-tab>

                <van-tab title="问答">
                    <van-pull-refresh v-model="list[1].refreshing" @refresh="onRefresh(1)">
                        <van-list v-model="list[1].loading" :finished="list[1].finished" @load="getList(1)">
                            <van-cell
                                v-for="item in list[1].items"
                                :key="`1_${item.c_id}}`"
                                :title="item.c_title"
                                is-link
                                :to="`/index/detail?id=${item.c_id}`"
                            />
                        </van-list>
                    </van-pull-refresh>
                </van-tab>

                <van-tab title="分享">
                    <van-pull-refresh v-model="list[2].refreshing" @refresh="onRefresh(2)">
                        <van-list v-model="list[2].loading" :finished="list[2].finished" @load="getList(2)">
                            <van-cell
                                v-for="item in list[2].items"
                                :key="`2_${item.c_id}}`"
                                :title="item.c_title"
                                is-link
                                :to="`/index/detail?id=${item.c_id}`"
                            />
                        </van-list>
                    </van-pull-refresh>
                </van-tab>

                <van-tab title="推荐">
                    <van-pull-refresh v-model="list[3].refreshing" @refresh="onRefresh(3)">
                        <van-list v-model="list[3].loading" :finished="list[3].finished" @load="getList(3)">
                            <van-cell
                                v-for="item in list[3].items"
                                :key="`3_${item.c_id}}`"
                                :title="item.c_title"
                                is-link
                                :to="`/index/detail?id=${item.c_id}`"
                            />
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import saveScroll from '@/mixins/save-scroll'
import tabLists from '@/mixins/tab-lists'

export default {
    // 如果需要记录滚动条位置, name必须设置, 且每个路由组件的name必须保证唯一性
    // name 统一设置成 `${页面文件名}-router`
    name: 'lists-router',
    components: {},
    mixins: [tabLists, saveScroll],
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Home'
    },
    data() {
        return {
            api: [
                { method: 'get', url: 'ajax/article-list', config: { perPage: 20, tab: '' } },
                { method: 'get', url: 'ajax/article-list', config: { perPage: 20, tab: 'ask' } },
                { method: 'get', url: 'ajax/article-list', config: { perPage: 20, tab: 'share' } },
                { method: 'get', url: 'ajax/article-list', config: { perPage: 20, tab: 'good' } }
            ]
        }
    },
    mounted() {},
    methods: {}
}
</script>
