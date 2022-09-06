var nome = prompt("Digite Seu Nome")
var input = document.getElementById('bemvindo');
input.innerHTML = `Bem vindo ${nome} digite suas notas:`

  function calcular() {
    var pb1 = parseFloat(document.getElementById('pb1').value);
    var pb2 = parseFloat(document.getElementById('pb2').value);
    var pb3 = parseFloat(document.getElementById('pb3').value);
    var pb4 = parseFloat(document.getElementById('pb4').value);

   
    var media = (pb1 + pb2 + pb3 + pb4);
    var mediafinal = media / 3;
    var res = document.getElementById('resultado');
     var final = mediafinal.toFixed(1);

   if(mediafinal >= 7) {
    
 res.innerHTML = `Nota Final ${final}, ${nome} Você foi <font color="green">Aprovado</font>!`;
 } else { 
  res.innerHTML = `Nota Final ${final}, ${nome} Você foi  <font color="red">Reprovado</font>!`;
 }

    
}
