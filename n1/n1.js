function palindrome(str) {
  let strLimpa = str.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  let strInvertida = strLimpa.split("").reverse().join("");
  if (strLimpa === strInvertida) {
    return true;
  }
  return false; 
}
palindrome("eye");