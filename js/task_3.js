function findLongestWord(string = "") {
  // Write code under this line
  let word = string.split(" ");
  let longestWord = "";

  for (const stringWord of word) {
    if (stringWord.length > longestWord.length) {
      longestWord = stringWord;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
