<template>
    <div class="home-detail-wrap">
        <van-nav-bar title="" left-text="返回" left-arrow fixed :border="false" @click-left="onClickLeft" class="fixed-center" />
        <div class="route-wrap">
            <van-skeleton v-if="!detail" title :row="4" class="mt-20px" />
            <div v-else class="article-content">
                <div class="title text-16px">{{ detail.c_title }}</div>
                <p class="date-time">{{ detail.c_posttime }}</p>
                <div class="content" v-html="detail.c_content"></div>
            </div>
            <div v-if="detail" class="replies">
                <van-panel v-for="(item, index) in detail.replies" :key="index" :title="item.author.loginname" :desc="item.create_at" status="">
                    <div v-html="item.content">内容</div>
                </van-panel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home-detail-router',
    metaInfo() {
        return {
            title: (this.detail && this.detail.title) || 'home-detail'
        }
    },
    data() {
        return {
            detail: null
        }
    },
    mounted() {
        this.getDetail()
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        async getDetail() {
            // this.$store.commit('global/routerLoading', true)
            const { code, data } = await this.$api.get('ajax/article-detail?id=' + this.$route.query.id, {})
            if (code === 200) {
                this.detail = data
            }
            // this.$store.commit('global/routerLoading', false)
        }
    }
}
</script>
