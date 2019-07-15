import truncateString from './truncate-string';

describe('truncateString()', () => {
  it('truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".', () => {
    const expected = truncateString('A-tisket a-tasket A green and yellow basket', 8);
    const actual = 'A-tisket...';

    expect(expected).toBe(actual);
  });

  it('truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".', () => {
    const expected = truncateString('Peter Piper picked a peck of pickled peppers', 11);
    const actual = 'Peter Piper...';

    expect(expected).toBe(actual);
  });

  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".', () => {
    const expected = truncateString(
      'A-tisket a-tasket A green and yellow basket',
      'A-tisket a-tasket A green and yellow basket'.length,
    );
    const actual = 'A-tisket a-tasket A green and yellow basket';

    expect(expected).toBe(actual);
  });

  it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".', () => {
    const expected = truncateString(
      'A-tisket a-tasket A green and yellow basket',
      'A-tisket a-tasket A green and yellow basket'.length + 2,
    );
    const actual = 'A-tisket a-tasket A green and yellow basket';

    expect(expected).toBe(actual);
  });

  it('truncateString("A-", 1) should return "A...".', () => {
    const expected = truncateString('A-', 1);
    const actual = 'A...';

    expect(expected).toBe(actual);
  });

  it('truncateString("Absolutely Longer", 2) should return "Ab...".', () => {
    const expected = truncateString('Absolutely Longer', 2);
    const actual = 'Ab...';

    expect(expected).toBe(actual);
  });
});
