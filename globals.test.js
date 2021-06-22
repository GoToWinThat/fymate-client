import { chunk, isNotUndefinedOrEmpty } from "./globals";



it('chunking correctly', () => {
  const result = chunk([1, 2, 3], 1)
  expect(result.length).toBe(3)
});

it('isNotUndefinedOrEmpty on valid string', () => {
  expect(isNotUndefinedOrEmpty("hehe")).toBe(true);
});

it('isNotUndefinedOrEmpty on undefined', () => {
  expect(isNotUndefinedOrEmpty(undefined)).toBe(false);
});

it('isNotUndefinedOrEmpty on null', () => {
  expect(isNotUndefinedOrEmpty(null)).toBe(false);
});

it('isNotUndefinedOrEmpty on empty', () => {
  expect(isNotUndefinedOrEmpty("")).toBe(false);
});