const { expect } = require('@jest/globals')
const { strict } = require('yargs')
const stringrepeat = require('./script/stringrepeat.js')


test('String repeat', function () {
  expect(stringrepeat(4, 'Привет')).toEqual('ПриветПриветПриветПривет')

})

test('String testing', function () {
  expect(stringrepeat(4, '')).toBeDefined()

})
test('String testing', function () {
  expect(stringrepeat(0, '')).toBeFalsy()
}) 



