import repeatStringNumTimes from './repeat-string-num-times';

describe('repeatStringNumTimes()', () => {
  it('repeatStringNumTimes("*", 3) should return "***"', () => {
    const expected = repeatStringNumTimes('*', 3);
    const actual = '***';

    expect(expected).toBe(actual);
  });

  it('repeatStringNumTimes("abc", 3) should return "abcabcabc"', () => {
    const expected = repeatStringNumTimes('abc', 3);
    const actual = 'abcabcabc';

    expect(expected).toBe(actual);
  });

  it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc"', () => {
    const expected = repeatStringNumTimes('abc', 4);
    const actual = 'abcabcabcabc';

    expect(expected).toBe(actual);
  });

  it('repeatStringNumTimes("abc", 1) should return "abc"', () => {
    const expected = repeatStringNumTimes('abc', 1);
    const actual = 'abc';

    expect(expected).toBe(actual);
  });

  it('repeatStringNumTimes("*", 8) should return "********"', () => {
    const expected = repeatStringNumTimes('*', 8);
    const actual = '********';

    expect(expected).toBe(actual);
  });

  it('repeatStringNumTimes("abc", -2) should return ""', () => {
    const expected = repeatStringNumTimes('abc', -2);
    const actual = '';

    expect(expected).toBe(actual);
  });
});
