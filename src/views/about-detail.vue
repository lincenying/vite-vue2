<template>
    <div class="about-detail-wrap">
        <van-nav-bar title="标题" left-text="返回" left-arrow fixed :border="false" @click-left="onClickLeft" class="fixed-center" />
        <div class="route-wrap">
            <div class="mt-10">
                <van-grid square>
                    <van-grid-item v-for="value in 28" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'about-detail-router',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'About Detail'
    },
    data() {
        return {}
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    }
}
</script>
