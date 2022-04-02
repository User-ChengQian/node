function gettime(time) {
    var td = new Date(time)
    const YY = td.getFullYear()
    const MM = zero(td.getMonth() + 1)
    const DD = zero(td.getDate())
    const hh = zero(td.getHours())
    const mm = zero(td.getMinutes())
    const ss = zero(td.getSeconds())

    return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`

}
//补零函数
function zero(n) {
    return n > 9 ? n : '0' + n;
}
module.exports = {
    gettime
}