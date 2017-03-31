function anagramChecker(str1, str2){
  if(str1.length !== str2.length || str1.length === 0) return false;
  if(str1.sort === str2.sort) return true;

}
console.log(anagramChecker('lemon', 'nemol'))
console.log(anagramChecker('pizza', 'apple'))
console.log(anagramChecker('purple,' 'elppur'))
console.log(anagramChecker('', 'help'));
