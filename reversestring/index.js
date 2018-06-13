// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  str = str.toLowerCase().split(''); //Split string into charArray and split by empty space
  str = str.reverse(); //Reverse the charArray
  str = str.join([seperator = '']); //Join elements with no spaces
  return str;
}

module.exports = reverse;
