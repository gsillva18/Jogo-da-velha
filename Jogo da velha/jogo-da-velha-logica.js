var contador = 1;
var vertical1 = "", vertical2 = "", vertical3 = "", horizontal1 = "", horizontal2 = "", horizontal3 = "",
 diagonal1 = "", diagonal2 = "";

/*Os métodos a baixo serão melhorados posteriormente com o andamento dos estudos em relação a JavaScript*/

function mudarH1(id){

    if (document.getElementById(id).innerHTML == ""){

        var resposta = "";

        if (contador == 1 | contador == 3 | contador == 5 | contador == 7 | contador == 9){
            resposta = "X";
            document.getElementById(id).innerHTML = resposta;
        } else {
            resposta = "O";
            document.getElementById(id).innerHTML = resposta;
        }
        adicionarResposta(id,resposta);
        contador ++;
        verificarGanhador(resposta);
    }
    
}

function adicionarResposta(id, valor){

    if (id == 1){
        vertical1 = vertical1 + valor;
        horizontal1 = horizontal1 + valor;
        diagonal1 = diagonal1 + valor;

    } else if (id == 2){
        vertical2 = vertical2 + valor;
        horizontal1 = horizontal1 + valor;

    } else if (id == 3){
        vertical3 = vertical3 + valor;
        horizontal1 = horizontal1 + valor;
        diagonal2 = diagonal2 + valor;
    } else if (id == 4){
        vertical1 = vertical1 + valor;
        horizontal2 = horizontal2 + valor;

    } else if (id == 5){
        vertical2 = vertical2 + valor;
        horizontal2 = horizontal2 + valor;
        diagonal1 = diagonal1 + valor;
        diagonal2 = diagonal2 + valor;

    } else if (id == 6){
        vertical3 = vertical3 + valor;
        horizontal2 = horizontal2 + valor;

    } else if (id == 7){
        vertical1 = vertical1 + valor;
        horizontal3 = horizontal3 + valor;
        diagonal2 = diagonal2 + valor;

    } else if (id == 8){
        vertical2 = vertical2 + valor;
        horizontal3 = horizontal3 + valor;

    } else if (id == 9){
        vertical3 = vertical3 + valor;
        horizontal3 = horizontal3 + valor;
        diagonal1 = diagonal1 + valor;
    }
}

function verificarGanhador(valor){

    if(vertical1 == "XXX" | vertical1 == "OOO" |vertical2 == "XXX" | vertical2 == "OOO" | vertical3 == "XXX" | vertical3 == "OOO" | 
    horizontal1 == "XXX" | horizontal1 == "OOO" | horizontal2 == "XXX" | horizontal2 == "OOO" | 
    horizontal3 == "XXX" | horizontal3 == "OOO" | diagonal1 == "XXX" | diagonal1 == "OOO" | diagonal2 == "XXX" | 
    diagonal2 == "OOO" ){

        alert("O vencedor foi " + valor);
        recaregarAPagina();
    }
}


function recaregarAPagina(){
    document.location.reload(true);
}
