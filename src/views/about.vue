<template>
    <div class="about-wrap is-tab" :class="$options.name">
        <div class="route-wrap">
            <div class="">
                <van-cell-group>
                    <van-cell icon="points" title="我的积分" is-link to="/about/detail" />
                    <van-cell icon="gold-coin-o" title="我的优惠券" is-link to="/about/detail" />
                    <van-cell icon="gift-o" title="我的头像" is-link to="/avatar" />
                </van-cell-group>
            </div>
            <div class="mt-10px">
                <van-cell-group>
                    <van-field value="输入框已禁用" label="用户名" left-icon="contact" />
                    <van-field value="输入框已禁用" label="密码" left-icon="browsing-history-o" />
                </van-cell-group>
            </div>
            <div class="mt-10px">
                <van-button plain hairline type="primary" size="small">细边框按钮</van-button>
                <van-button loading type="primary" size="small" />
                <van-button loading type="primary" size="small" loading-type="spinner" />
                <van-button loading type="danger" size="small" loading-text="加载中..." />
            </div>
            <div class="mt-10px">
                <van-image width="5rem" height="5rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="mt-10px">
                <van-button type="primary" size="small" @click="showPopup"> 展示弹出层 </van-button>
                {{ dateText }}
            </div>
            <div class="mt-10px">
                <van-button type="primary" size="small" @click="handleToast">加载提示</van-button>
            </div>
            <div class="mt-10px">
                <van-button type="primary" size="small" @click="previewShow = true">图片预览</van-button>
                <van-image-preview v-model="previewShow" :images="images"></van-image-preview>
            </div>
            <div class="mt-10px">
                <van-button type="primary" size="small" @click="dialogShow = true">组件调用Dialog</van-button>
                <van-button type="primary" size="small" @click="handleDialog">全局调用Dialog</van-button>
            </div>
            <div class="mt-10px">
                <van-panel title="标题" desc="描述信息" status="状态">
                    <div>内容</div>
                    <div slot="footer">
                        <van-button size="small">按钮</van-button>
                        <van-button size="small" type="danger">按钮</van-button>
                    </div>
                </van-panel>
            </div>
            <div class="mt-10px">
                <van-panel title="标题" desc="描述信息" status="状态">
                    <div>内容</div>
                    <div slot="footer">
                        <van-button size="small">按钮</van-button>
                        <van-button size="small" type="danger">按钮</van-button>
                    </div>
                </van-panel>
            </div>
            <div class="mt-10px">
                <van-panel title="标题" desc="描述信息" status="状态">
                    <div>内容</div>
                    <div slot="footer">
                        <van-button size="small">按钮</van-button>
                        <van-button size="small" type="danger">按钮</van-button>
                    </div>
                </van-panel>
            </div>
            <!-- slot 插槽示例 -->
            <img-list :img-arr="images">
                <template v-slot:default="props">
                    <!-- {{ props }} -->
                    <van-image width="120" height="120" :src="props.item" />
                </template>
            </img-list>
            <!-- <div class="mt-10px">
                <van-count-down :time="100000000" format="DD 天 HH 时 mm 分 ss 秒" />
                <van-count-down :time="100000000" format="HH 时 mm 分 ss 秒" />
            </div> -->
            <van-popup v-model="show" position="bottom" class="fixed-center" :style="{ height: '40%' }">
                <van-datetime-picker v-model="currentDate" type="date" @confirm="dateChange" @cancel="show = false" />
            </van-popup>
            <van-dialog v-model="dialogShow" :before-close="dialogBeforeClose" title="标题" show-cancel-button>
                <img src="https://img.yzcdn.cn/vant/apple-3.jpg" :style="`max-width: 100%;`" />
            </van-dialog>
        </div>
    </div>
</template>
<script>
import { UTC2Date } from '@/utils'
import saveScroll from '@/mixins/save-scroll'
import imgList from './_img-list.vue'

export default {
    // 如果需要记录滚动条位置, name必须设置, 且每个路由组件的name必须保证唯一性
    name: 'about-router',
    components: {
        imgList
    },
    mixins: [saveScroll],
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'About'
    },
    data() {
        return {
            show: false,
            currentDate: new Date(),
            dateText: '',
            previewShow: false,
            images: [
                'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
            ],
            dialogShow: false
        }
    },
    methods: {
        showPopup() {
            this.show = true
        },
        dateChange(val) {
            this.dateText = UTC2Date(val, 'y-m-d h:i:s')
            this.show = false
        },
        handleToast() {
            const toast1 = this.$toast.loading({
                duration: 0,
                mask: true,
                message: '加载中...'
            })
            setTimeout(() => {
                toast1.clear()
            }, 3000)
        },
        dialogBeforeClose(action, done) {
            console.log(action)
            if (action === 'confirm') {
                setTimeout(done, 1000)
            } else {
                done()
            }
        },
        handleDialog() {
            this.$dialog
                .confirm({
                    title: '提示',
                    message: '代码是写出来给人看的，附带能在机器上运行'
                })
                .then(() => {
                    this.$toast('click confirm')
                })
                .catch(() => {
                    this.$toast('click cancel')
                })
        }
    }
}
</script>
