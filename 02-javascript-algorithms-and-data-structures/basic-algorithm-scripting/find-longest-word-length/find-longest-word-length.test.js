import findLongestWordLength from './find-longest-word-length';

describe('findLongestWordLength()', () => {
  it('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number', () => {
    const expected = typeof findLongestWordLength('The quick brown fox jumped over the lazy dog');
    const actual = 'number';

    expect(expected).toBe(actual);
  });

  it('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6', () => {
    const expected = findLongestWordLength('The quick brown fox jumped over the lazy dog');
    const actual = 6;

    expect(expected).toBe(actual);
  });

  it('findLongestWordLength("May the force be with you") should return 5', () => {
    const expected = findLongestWordLength('May the force be with you');
    const actual = 5;

    expect(expected).toBe(actual);
  });

  it('findLongestWordLength("Google do a barrel roll") should return 6', () => {
    const expected = findLongestWordLength('Google do a barrel roll');
    const actual = 6;

    expect(expected).toBe(actual);
  });

  it('findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8', () => {
    const expected = findLongestWordLength('What is the average airspeed velocity of an unladen swallow');
    const actual = 8;

    expect(expected).toBe(actual);
  });

  it('findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19', () => {
    const expected = findLongestWordLength('What if we try a super-long word such as otorhinolaryngology');
    const actual = 19;

    expect(expected).toBe(actual);
  });
});
