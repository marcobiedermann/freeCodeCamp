import factorialize from './factorialize';

describe('factorialize()', () => {
  it('factorialize(5) should return a number', () => {
    const expected = typeof factorialize(5);
    const actual = 'number';

    expect(expected).toBe(actual);
  });

  it('factorialize(5) should return 120', () => {
    const expected = factorialize(5);
    const actual = 120;

    expect(expected).toBe(actual);
  });

  it('factorialize(10) should return 3628800', () => {
    const expected = factorialize(10);
    const actual = 3628800;

    expect(expected).toBe(actual);
  });

  it('factorialize(20) should return 2432902008176640000', () => {
    const expected = factorialize(20);
    const actual = 2432902008176640000;

    expect(expected).toBe(actual);
  });

  it('factorialize(0) should return 1', () => {
    const expected = factorialize(0);
    const actual = 1;

    expect(expected).toBe(actual);
  });
});
