var contador = 1;

function mudarH1(id){

    if(document.getElementById(id).innerHTML == ""){

        if(contador == 1 | contador == 3 | contador == 5 | contador == 7 | contador == 9){
            document.getElementById(id).innerHTML = 'X';
        }else{
            document.getElementById(id).innerHTML = 'O';
        }
        contador ++;
    }
    
}

function recaregarAPagina(){
    document.location.reload(true);
}
