function truncateString(str, num) {
  if (str.length > num) {
    return `${str.substring(0, num)}...`;
  }

  return str;
}

export default truncateString;
