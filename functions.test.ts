const {shuffleArray} = require('./utils')

const newArr=[1,2,3,4,5,6]

describe('shuffleArray should', () => {
    test('shuffleArray returns something', () => {
        expect(shuffleArray(newArr)).toHaveReturned()
    });
    test('length of arrCopy is the same', () => {
        expect(shuffleArray(newArr).length).toEqual(newArr.length)
    })
})