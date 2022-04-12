const { test, expect } = require('@jest/globals')
const removeChar = require('./script/removeChar.js')

test('Testing', function () {
  expect(removeChar('eloquent')).toEqual('loquen')

})
test('Char contains letter', function () {
  expect(removeChar('house')).toContain("o")

})


