import ls from 'store2'

export default {
    activated() {
        if (this.$options.name) {
            const body = document.querySelector('.' + this.$options.name)
            const scrollTop = ls.get(this.$route.fullPath) || 0
            body.scrollTo(0, scrollTop)
            ls.remove(this.$route.fullPath)
        }
    },
    beforeRouteLeave(to, from, next) {
        const body = document.querySelector('.body')
        ls.set(from.fullPath, body.scrollTop || 0)
        next()
    }
}
