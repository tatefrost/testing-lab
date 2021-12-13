const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js');

test('Should return two', () => {
  expect(returnTwo()).toEqual(2)
})

test('Greeting', () => {
  expect(greeting("James")).toEqual(`Hello, James.`)
  expect(greeting('Jill')).toEqual('Hello, Jill.')
})


describe('Math functions', () => {
  test('Add should add numbers', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
  })
  test('Subtract should subtract nums', () => {
    expect(subtract(8, 5)).toEqual(3)
    expect(subtract(10, 8)).toEqual(2)
  })
  test('Multiply should multiply nums', () => {
    expect(multiply(1, 2)).toEqual(2)
    expect(multiply(5, 9)).toEqual(45)
  })
  test('Divide should divide nums', () => {
    expect(divide(10, 5)).toEqual(2)
    expect(divide(30, 3)).toEqual(10)
  })
})