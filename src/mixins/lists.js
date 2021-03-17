import { sleep, random } from '@/utils'

export default {
    data() {
        return {
            timer: null,
            isLoaded: false,
            // 下拉刷新 ==>
            isLoading: false,
            isRefresh: false,
            // <==下拉刷新
            // 列表数据 ==>
            page: 1,
            list: [],
            // <==列表数据
            // 滚动加载 ==>
            loadStatus: 'loadmore',
            isLock: false,
            loading: false,
            error: false,
            finished: false
            // <==滚动加载
        }
    },
    methods: {
        async onRefresh() {
            this.isRefresh = true
            this.page = 1
            await this.getList()
            this.isLoading = false
            this.$toast('刷新成功')
        },
        async getList() {
            if (this.isLock) return
            this.isLock = true
            // 异步更新数据
            this.timer = setTimeout(() => {
                this.$store.commit('global/routerLoading', true)
            }, 500)
            // 第一页时不显示loading
            if (this.page > 1) this.loading = true
            await sleep(random(300, 600))
            const { data, code } = await this.$api[this.api.method](this.api.url, { ...this.api.config, page: this.page })
            // 500毫秒内已经加载完成数据, 则清除定时器, 不再显示路由loading
            if (this.timer) clearTimeout(this.timer)
            this.$store.commit('global/routerLoading', false)
            this.isLoaded = true
            if (code === 200) {
                // 如果是下拉刷新, 则只保留当前数据
                if (this.isRefresh) {
                    this.list = [].concat(data.data)
                    this.isRefresh = false
                } else {
                    this.list = this.list.concat(data.data)
                }
                await this.$nextTick()
                // 加载状态结束
                this.loading = false
                // 数据全部加载完成
                if (data.last_page <= data.current_page) {
                    this.finished = true
                    this.loadStatus = 'nomore'
                } else {
                    this.loadStatus = 'loadmore'
                    this.page += 1
                }
                this.isLock = false
            } else {
                this.error = true
            }
        },
        reachBottom() {
            if (this.loadStatus === 'nomore' || this.loadStatus === 'loading') return
            this.loadStatus = 'loading'
            this.getList()
        },
        lazyLoading() {
            // 滚动到底部，再加载的处理事件
            const body = this.$refs.body
            const scrollTop = body.scrollTop
            const clientHeight = body.clientHeight
            const scrollHeight = body.scrollHeight
            if (scrollTop + clientHeight >= scrollHeight - 300) {
                this.reachBottom()
            }
        }
    }
}
