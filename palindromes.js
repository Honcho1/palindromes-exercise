const palindromes = function (palindrome) {
  const processedString = palindrome.toLowerCase().replace(/[^a-z]/g, "");

  return processedString.split("").reverse().join("") == processedString;
};
