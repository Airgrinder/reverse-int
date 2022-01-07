module.exports = function reverse(n) {
    if (n < 0) {
        return Array.from(String(Math.abs(n)), Number).reverse().join('')
    }
    return Array.from(String(n), Number).reverse().join('')
}
