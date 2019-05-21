// function repeatStringNumTimes(str, num) {
//   let repeatedString = '';

//   for (let i = 0; i < num; i += 1) {
//     repeatedString += str;
//   }

//   return repeatedString;
// }

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

export default repeatStringNumTimes;
