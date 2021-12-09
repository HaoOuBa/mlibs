import { isQQ } from '../src/index';

test('isQQ(`1000`)', () => {
  expect(isQQ(`1000`)).toBe(false);
});

test('isQQ(`123456`)', () => {
  expect(isQQ(`123456`)).toBe(true);
});

test('isQQ(``)', () => {
  expect(isQQ(``)).toBe(false);
});