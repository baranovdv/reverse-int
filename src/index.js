module.exports = function reverse (n) {
  //n = Math.abs(n)
  return +(Math.abs(n).toString().split('').reverse().join(''))
}
