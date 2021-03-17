/**
 * Created by lincenying on 18/7/20.
 */

/* eslint-disable no-extend-native */

// 深克隆
Object.prototype.deepClone = function () {
    const obj = this
    if (typeof obj !== 'object') return
    const newObj = obj instanceof Array ? [] : {}
    for (const key in obj) {
        // eslint-disable-next-line
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? obj[key].deepClone() : obj[key]
        }
    }
    return newObj
}
