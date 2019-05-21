function findLongestWordLength(str) {
  const longestWord = str
    .split(' ')
    .reduce((prev, current) => (current.length > prev.length ? current : prev));

  return longestWord.length;
}

export default findLongestWordLength;
