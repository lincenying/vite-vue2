/**
 * Created by lincenying on 18/7/20.
 */

/* eslint-disable no-extend-native */

Number.prototype.toFixed = function (n, toNumber) {
    if (n > 20 || n < 0) {
        throw new RangeError('toFixed() digits argument must be between 0 and 20')
    }
    const number = this
    if (isNaN(number) || number >= Math.pow(10, 21)) {
        return number.toString()
    }
    if (typeof n == 'undefined' || n === 0) {
        return Math.round(number).toString()
    }

    let result = number.toString()
    const arr = result.split('.')

    // 整数的情况
    if (arr.length < 2) {
        result += '.'
        for (let i = 0; i < n; i += 1) {
            result += '0'
        }
        return result
    }

    const integer = arr[0]
    const decimal = arr[1]
    if (decimal.length === n) {
        return result
    }
    if (decimal.length < n) {
        for (let i = 0; i < n - decimal.length; i += 1) {
            result += '0'
        }
        return result
    }
    result = integer + '.' + decimal.substr(0, n)
    const last = decimal.substr(n, 1)

    // 四舍五入，转换为整数再处理，避免浮点数精度的损失
    if (parseInt(last, 10) >= 5) {
        const x = Math.pow(10, n)
        result = (Math.round(parseFloat(result) * x) + 1) / x
        result = result.toFixed(n)
    }

    if (toNumber) return Number(result)
    return result
}

window.$$clg = data => {
    if (!data) return
    // 组件
    if (data._uid || data._uid === 0) {
        const tmp = {}
        tmp.data = data.$data
        tmp.computed = {}
        Object.keys(data._computedWatchers).forEach(item => {
            tmp.computed[item] = data[item]
        })
        tmp.prop = data.$props
        const $return = JSON.parse(JSON.stringify(tmp))
        console.log({
            ...$return,
            route: data.$route
        })
    } else {
        console.log(JSON.parse(JSON.stringify(data)))
    }
}
