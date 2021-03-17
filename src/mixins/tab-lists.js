import { sleep, random } from '@/utils'

export default {
    data() {
        return {
            timer: null,
            // 列表数据 ==>
            list: [
                {
                    page: 1,
                    items: [],
                    refreshing: false,
                    loading: false,
                    error: false,
                    finished: false
                },
                {
                    page: 1,
                    items: [],
                    refreshing: false,
                    loading: false,
                    error: false,
                    finished: false
                },
                {
                    page: 1,
                    items: [],
                    refreshing: false,
                    loading: false,
                    error: false,
                    finished: false
                },
                {
                    page: 1,
                    items: [],
                    refreshing: false,
                    loading: false,
                    error: false,
                    finished: false
                }
            ]
            // <==列表数据
        }
    },
    methods: {
        async onRefresh(index) {
            this.list[index].refreshing = true
            this.list[index].page = 1
            await this.getList(index)
            this.list[index].refreshing = false
            this.$toast('刷新成功')
        },
        async getList(index) {
            const list = this.list[index]
            if (list.page === 1) {
                const body = document.querySelector('.' + this.$options.name)
                body.scrollTo(0, 0)
            }
            // 500毫秒显示路由loading
            this.timer = setTimeout(() => {
                this.$store.commit('global/routerLoading', true)
            }, 500)
            // 第一页直接用路由loading
            if (list.page === 1) {
                list.loading = false
            }
            // 异步更新数据
            const { method, url, config } = this.api[index]
            await sleep(random(300, 600))
            const { code, data } = await this.$api[method](url, { ...config, page: list.page })
            // 500毫秒内已经加载完成数据, 则清除定时器, 不再显示路由loading
            if (this.timer) clearTimeout(this.timer)
            this.$store.commit('global/routerLoading', false)
            if (code === 200) {
                // 如果是下拉刷新, 则只保留当前数据
                if (list.refreshing) {
                    list.items = [].concat(data.data)
                    list.refreshing = false
                } else {
                    list.items = list.items.concat(data.data)
                }
                await this.$nextTick()
                // 加载状态结束
                list.loading = false
                // 数据全部加载完成
                if (data.last_page <= data.current_page) {
                    list.finished = true
                } else {
                    list.page += 1
                }
            } else {
                list.error = true
            }
        }
    }
}
