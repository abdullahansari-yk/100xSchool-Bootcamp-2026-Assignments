/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// solition 1 : using object
function isAnagram(str1, str2) {
  //   str1 = str1.toLowerCase().replace(/\s/g, "");
  str1 = str1.toLowerCase().replaceAll(" ", "");
  //   str2 = str2.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  //   console.log(str1 + " " + str2);

  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}
console.log(isAnagram("aab", "baa"));

// solution2:using split, sort and join
function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  let sortedStr1 = str1.toLowerCase().split("").sort().join();
  let sortedStr2 = str2.toLowerCase().split("").sort().join();
//   console.log(sortedStr1);
//   console.log(sortedStr2);

  return sortedStr1 === sortedStr2;
}
console.log(isAnagram2("aab", "aba"));
