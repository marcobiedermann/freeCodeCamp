function factorialize(num) {
  return num ? num * factorialize(num - 1) : 1;
}

export default factorialize;
