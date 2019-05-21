import confirmEnding from './confirm-ending';

describe('confirmEnding()', () => {
  it('confirmEnding("Bastian", "n") should return true.', () => {
    const expected = confirmEnding('Bastian', 'n');
    const actual = true;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Congratulation", "on") should return true.', () => {
    const expected = confirmEnding('Congratulation', 'on');
    const actual = true;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Connor", "n") should return false.', () => {
    const expected = confirmEnding('Connor', 'n');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.', () => {
    const expected = confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("He has to give me a new name", "name") should return true.', () => {
    const expected = confirmEnding('He has to give me a new name', 'name');
    const actual = true;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Open sesame", "same") should return true.', () => {
    const expected = confirmEnding('Open sesame', 'same');
    const actual = true;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Open sesame", "pen") should return false.', () => {
    const expected = confirmEnding('Open sesame', 'pen');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Open sesame", "game") should return false.', () => {
    const expected = confirmEnding('Open sesame', 'game');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.', () => {
    const expected = confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');
    const actual = false;

    expect(expected).toBe(actual);
  });

  it('confirmEnding("Abstraction", "action") should return true.', () => {
    const expected = confirmEnding('Abstraction', 'action');
    const actual = true;

    expect(expected).toBe(actual);
  });
});
