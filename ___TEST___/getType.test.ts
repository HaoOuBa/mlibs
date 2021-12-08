import getType from '../src/type/getType';

test('getType(data)', () => {
  expect(getType(null)).toBe('null');
});