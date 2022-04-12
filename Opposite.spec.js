const { expect } = require('@jest/globals')
const opposite = require('./script/opposite.js')


    test('Testing', () =>{
      expect(opposite(4)).toBe(-4)
      expect(opposite(-9)).toBe(9)
      expect(opposite(9)).toBeTruthy()
      expect(opposite(9)).not.toBeFalsy()
   
  })
