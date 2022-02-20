function firstReverse(str) {
  let splitString = str.split('');
  let reverse = splitString.reverse();
  let newPhrase = reverse.join('');
  return newPhrase;
}


console.log(firstReverse('I love code'))