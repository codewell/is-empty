const isEmpty = require('../src');

/**
 * Strings
 */
test('String "" - is empty', () => {
  expect(isEmpty(''))
    .toBe(true);
});

test('String " " - is not empty', () => {
  expect(isEmpty(' '))
    .toBe(false);
});

test('String "foo" - is not empty', () => {
  expect(isEmpty('foo'))
    .toBe(false);
});

/**
 * Arrays
 */
test('Array [] - is empty', () => {
  expect(isEmpty([]))
    .toBe(true);
});

test('Array ["foo"] - is not empty', () => {
  expect(isEmpty(['foo']))
    .toBe(false);
});

/**
 * Objects
 */
test('Object {} - is empty', () => {
  expect(isEmpty({}))
    .toBe(true);
});

test('Object {foo: "bar"}  - is not empty', () => {
  expect(isEmpty({ foo: 'bar' }))
    .toBe(false);
});

/**
 * Irrelevant values
 */
test('Number - throws', () => {
  expect(() => {
    isEmpty(0)
  }).toThrow();
});

test('true - throws', () => {
  expect(() => {
    isEmpty(true)
  }).toThrow();
});

test('false - throws', () => {
  expect(() => {
    isEmpty(false)
  }).toThrow();
});

test('null - throws', () => {
  expect(() => {
    isEmpty(null)
  }).toThrow();
});

test('undefined - throws', () => {
  expect(() => {
    isEmpty(undefined)
  }).toThrow();
});

test('function - throws', () => {
  expect(() => {
    isEmpty(() => { })
  }).toThrow();
});