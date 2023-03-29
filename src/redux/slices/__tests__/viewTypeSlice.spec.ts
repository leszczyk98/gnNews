import reducer, { changeType } from '../viewTypeSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ value: 'list' })
})

test('changeType works', () => {
  expect(reducer(undefined, changeType('grid'))).toEqual({ value: 'grid' })
})
