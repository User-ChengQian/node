function dateformat(time) {
    const dt = new Date(time)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())
    const yy = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const dd = padZero(dt.getSeconds())

    return `${y}-${m}-${d}  ${yy}:${mm}:${dd}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}
//将方法共享出去
module.exports = {
    dateformat
}