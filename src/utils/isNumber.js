function isNumber(value) {
  let type = typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]'
  return type && Number.isFinite(value)
}

export default isNumber
