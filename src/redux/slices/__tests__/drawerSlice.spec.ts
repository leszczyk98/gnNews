import reducer, { toggleDrawer, closeDrawer } from '../drawerSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ open: false })
})

test('handle toggleDrawer, value should be true', () => {
  expect(reducer(undefined, toggleDrawer())).toEqual({ open: true })
})

test('handle closeDrawer, value should be false', () => {
  const previousState = { open: true }

  expect(reducer(previousState, closeDrawer())).toEqual({ open: false })
})
