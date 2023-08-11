import checkPhone from '../main';

test('test phone ', () => {
  expect(checkPhone('+73425689')).toBe('+73425689');
});
test('test phone with 8', () => {
  expect(checkPhone('89159452645')).toBe('+79159452645');
});
test('test phone with space', () => {
  expect(checkPhone('+7 915 945 26 45')).toBe('+79159452645');
});
test('test phone with brackets', () => {
  expect(checkPhone('+7 (915)9452645')).toBe('+79159452645');
});
test('test phone with brackets and spaces', () => {
  expect(checkPhone('+7 (915)945 26 45')).toBe('+79159452645');
});
test('test chinese phone', () => {
  expect(checkPhone('+86 000 000 0000')).toBe('+860000000000');
});

// test.each([
//   ['name', new Validator('jhfwklweg'), true],
//   ['wrong name', new Validator('jhfhgрваловд'), false],
//   ['name with "-" ', new Validator('jhfwklwe--g'), true],
//   ['name with "_"', new Validator('jhfwklwe__g'), true],
//   ['name with number', new Validator('jhfwklwe4__g'), true],
//   ['name with all', new Validator('jhf53-wklwe4__g'), true],
//   ['name start with "-"', new Validator('-jhf53-wklwe4__g'), false],
//   ['name start with "_"', new Validator('_jhf53-wklwe4__g'), false],
//   ['name start with number', new Validator('8jhf53-wklwe4__g'), false],
//   ['name end with "-"', new Validator('jhf53-wklwe4__g-'), false],
//   ['name end with "_"', new Validator('jhf53-wklwe4__g_'), false],
//   ['name end with number', new Validator('jhf53-wklwe4__g42'), false],
//   ['name with 3+ number', new Validator('abc4242bca'), false],
// ])(
//   ('test %s '),
//   (testName, name, expected) => {
//     expect(name.validateUsername()).toBe(expected);
//   },
// );
