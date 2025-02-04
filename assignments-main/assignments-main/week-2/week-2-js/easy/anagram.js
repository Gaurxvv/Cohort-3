/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lcstr1 =str1.toLowerCase().split("").sort().join("");
  // const sorted1=arr1.join("")      //split //sort //join
  const lcstr2 =str2.toLowerCase().split("").sort().join("");
  // const arr2= lcstr2.split("");
  // arr2.sort()
  // const sorted2=arr2.join("")      //split //sort //join
 
  if(lcstr1== lcstr2){
    return true;}
    else{
      return false;
    }
}


module.exports = isAnagram;
