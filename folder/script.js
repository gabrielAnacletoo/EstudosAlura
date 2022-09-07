var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var res = document.getElementById('resultado');
    
    if (chute == numeroSecreto) {
        
        res.innerHTML = `Você Acertou o Numero Aleatório Foi ${numeroSecreto}`
        // alert("acertou")
    } else if (chute > 10 || chute < 0 ) {
        alert('você deve digitar um numero de 0 a 10!')
    }
    else {
        res.innerHTML = `Você Errou, o Numero Aleatório foi : ${numeroSecreto}` 
           // alert('você errou')
    }
 }
