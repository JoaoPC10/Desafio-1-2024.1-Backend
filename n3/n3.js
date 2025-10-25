function rot13(str) {
  let resultadoInsano='';
  for(let letra in str){
    var numeroLetra = str[letra].charCodeAt();
    if(numeroLetra>=65 && numeroLetra <=77){
      resultadoInsano += String.fromCharCode(numeroLetra+13);
    }
    if(numeroLetra>=78 && numeroLetra <=90){
      resultadoInsano += String.fromCharCode(numeroLetra-13);
    }
    if(numeroLetra>90 || numeroLetra<65)
      resultadoInsano += str[letra];
  }
  return resultadoInsano;
}

console.log(rot13("SERR PBQR PNZC"));