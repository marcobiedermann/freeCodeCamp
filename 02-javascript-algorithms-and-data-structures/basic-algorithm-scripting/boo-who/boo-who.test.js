import booWho from './boo-who';

describe('booWho()', () => {
  it('booWho(true) should return true.', () => {
    const expected = booWho(true);
    const actual = true;

    expect(expected).toBe(actual);
  });

  it('booWho(false) should return true.', () => {
    const expected = booWho(false);
    const actual = true;

    expect(expected).toBe(actual);
  });

  it('booWho([1, 2, 3]) should return false.', () => {
    const expected = booWho([1, 2, 3]);
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho([].slice) should return false.', () => {
    const expected = booWho([].slice);
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho({ "a": 1 }) should return false.', () => {
    const expected = booWho({ a: 1 });
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho(1) should return false.', () => {
    const expected = booWho(1);
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho(NaN) should return false.', () => {
    const expected = booWho(NaN);
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho("a") should return false.', () => {
    const expected = booWho('a');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho("true") should return false.', () => {
    const expected = booWho('true');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('booWho("false") should return false.', () => {
    const expected = booWho('false');
    const actual = false;

    expect(expected).toBe(actual);
  });
});
