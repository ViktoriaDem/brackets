module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [],
      closingBrackets = [],
      sequence = [];
  bracketsConfig.forEach(element => {
    openingBrackets.push(element[0]);
    closingBrackets.push(element[1]);
  });
  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i]) && closingBrackets.includes(str[i])) {
      let counter = 0;
      sequence.forEach(el => {
        if (el === str[i]) { counter++; }
      });
      if (counter % 2 === 0) {
        sequence.push(str[i]);
      } else {
        let lastElem = sequence.pop();
        if (openingBrackets.indexOf(lastElem) !== closingBrackets.indexOf(str[i])) {
          return false;
        }
      }
      continue;
    }
    if (openingBrackets.includes(str[i])) {
      sequence.push(str[i]);
      continue;
    }
    if (sequence.length === 0) {
      return false;
    }
    if (closingBrackets.includes(str[i])) {
      let lastElem = sequence.pop();
      if (openingBrackets.indexOf(lastElem) !== closingBrackets.indexOf(str[i])) {
        return false;
      }
    }
  }
  return sequence.length === 0;
}
