function nombre(e,i,f){
    return e*i+f;
}

/*
crear un boton q calcule si es par o impar!
*/

function numero(e){
    
    if(e % 2 == 0){
        return  String ="par"
    }else{
        return String = "impar"
    }
}


/*
    definir una funcion que calcule el numero de caracteres ingresados!

*/

function caracter(){

    let palabra = document.getElementById('caracteres').value
    
    return palabra.length;

}