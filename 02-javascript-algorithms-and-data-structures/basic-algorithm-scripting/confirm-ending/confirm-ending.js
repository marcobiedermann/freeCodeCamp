// function confirmEnding(str, target) {
//   const strLength = str.length;
//   const targetLength = target.length;

//   for (let i = 1; i <= targetLength; i += 1) {
//     if (str[strLength - i] !== target[targetLength - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function confirmEnding(str, target) {
//   return str.substr(-target.length) === target;
// }

function confirmEnding(str, target) {
  return str.endsWith(target);
}

export default confirmEnding;
