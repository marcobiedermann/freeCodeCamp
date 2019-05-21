import convertToF from './convert-to-f';

describe('convertToF()', () => {
  it('convertToF(0) should return a number', () => {
    const expected = typeof convertToF(0);
    const actual = 'number';

    expect(expected).toBe(actual);
  });

  it('convertToF(-30) should return a value of -22', () => {
    const expected = convertToF(-30);
    const actual = -22;

    expect(expected).toBe(actual);
  });

  it('convertToF(-10) should return a value of 14', () => {
    const expected = convertToF(-10);
    const actual = 14;

    expect(expected).toBe(actual);
  });

  it('convertToF(0) should return a value of 32', () => {
    const expected = convertToF(0);
    const actual = 32;

    expect(expected).toBe(actual);
  });

  it('convertToF(20) should return a value of 68', () => {
    const expected = convertToF(20);
    const actual = 68;

    expect(expected).toBe(actual);
  });

  it('convertToF(20) should return a value of 86', () => {
    const expected = convertToF(30);
    const actual = 86;

    expect(expected).toBe(actual);
  });
});
