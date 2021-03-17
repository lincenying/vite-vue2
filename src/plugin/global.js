import api from '@/api'
import { is, isempty, oc, tranformStr, UTC2Date, deepClone, deepMerge } from '@/utils'

function install(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.prototype.$api = api
    Vue.prototype.$oc = oc
    Vue.prototype.$is = is
    Vue.prototype.$empty = isempty
    Vue.prototype.$clone = deepClone
    Vue.prototype.$merge = deepMerge
    Vue.mixin({
        computed: {
            $$global() {
                return oc(this.$store, 'state.global')
            }
        },
        mounted() {
            const blackComponents = ['router-link', 'keep-alive', 'transition-group']
            const componentName = this._isVue ? this.$options.name || this.$options._componentTag : this.name
            if (componentName && componentName.indexOf('-') > 0 && componentName.indexOf('van-') < 0 && !blackComponents.includes(componentName)) {
                console.log(`%c[${UTC2Date(null, 'y-m-d h:i:s.v')}] ${componentName} Mounted`, 'color: green')
                window[`$$${tranformStr(componentName)}`] = this
            }
        },
        methods: {
            handleGoUrl(url) {
                window.location.href = url
            }
        }
    })
}
export default {
    install
}
