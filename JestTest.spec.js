const { expect } = require('@jest/globals')
const Sum = require('./script/sum.js')


    test('Testing', () =>{
      expect(Sum([1,2,3,4])).toBe(10)
      expect(Sum([1,2,3,4])).toBeGreaterThan(9)
      expect(Sum([1,2,3,4])).toBeLessThan(19)
      expect(Sum([1,2,3,4])).not.toBe(0)
   
  })


