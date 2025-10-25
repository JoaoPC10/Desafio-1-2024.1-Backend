//Questao 2 : conversao de Arabicos para Romanos
function convertToRoman(num) {
  let numerosRomanos ={M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}, romanoFinal='', numero;
    for(numero in numerosRomanos){
      while(num >= numerosRomanos[numero]){
        romanoFinal += numero;
        num -= numerosRomanos[numero];
      }
    }

 return romanoFinal;
}
console.log(convertToRoman());