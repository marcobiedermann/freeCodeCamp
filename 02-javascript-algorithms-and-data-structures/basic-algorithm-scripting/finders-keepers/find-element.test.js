import findElement from './find-element';

describe('findElement()', () => {
  it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', () => {
    const expected = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
    const actual = 8;

    expect(expected).toBe(actual);
  });

  it('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', () => {
    const expected = findElement([1, 3, 5, 9], num => num % 2 === 0);
    const actual = undefined;

    expect(expected).toBe(actual);
  });
});
