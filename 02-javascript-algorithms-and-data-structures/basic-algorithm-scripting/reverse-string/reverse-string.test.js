import reverseString from './reverse-string';

describe('reverseString()', () => {
  it('reverseString("hello") should return a string', () => {
    const expected = typeof reverseString('hello');
    const actual = 'string';

    expect(expected).toBe(actual);
  });

  it('reverseString("hello") should become "olleh"', () => {
    const expected = reverseString('hello');
    const actual = 'olleh';

    expect(expected).toBe(actual);
  });

  it('reverseString("Howdy") should become "ydwoH"', () => {
    const expected = reverseString('Howdy');
    const actual = 'ydwoH';

    expect(expected).toBe(actual);
  });

  it('reverseString("Greetings from Earth") should become "htraE morf sgniteerG"', () => {
    const expected = reverseString('Greetings from Earth');
    const actual = 'htraE morf sgniteerG';

    expect(expected).toBe(actual);
  });
});
