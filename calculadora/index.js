var numero1;
var operacion;
var numero2;


function capturar1(){
    let a = document.getElementById('pantalla').value
    if(a == 0){
        document.getElementById('pantalla').value = ''
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 1
}

function capturar2(){
    let a = document.getElementById('pantalla').value
    if (a == 0){
        document.getElementById('pantalla').value = ''
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 2 
}

function capturar3() {
    let a = document.getElementById('pantalla').value
    if(a == 0){
        document.getElementById('pantalla').value = ''
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 3
}


function capturar4(){
    let a = document.getElementById('pantalla').value
    if(a == 0){
        document.getElementById('pantalla').value = '';
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 4
}

function capturar5(){
    let a  = document.getElementById('pantalla').value
    if (a == 0){
        document.getElementById('pantalla').value = ''
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 5
}

function capturar6(){
    let a = document.getElementById('pantalla').value
    if (a == 0){
        document.getElementById('pantalla').value = '';
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value  + 6
}

function capturar7(){
    let a = document.getElementById('pantalla').value
    if ( a == 0 ) {
        document.getElementById('pantalla').value = '';
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 7; 
}

function capturar8() {
    let a = document.getElementById('pantalla').value
    if(a == 0){
        document.getElementById('pantalla').value = ''
    }
    document.getElementById('pantalla').value =  document.getElementById('pantalla').value + 8
}

function capturar9(){
    let a = document.getElementById('pantalla').value
    if(a == 0){
        document.getElementById('pantalla').value = ''
    }
    document.getElementById('pantalla').value = document.getElementById('pantalla').value + 9 
}

function capturar0(){
    let a = document.getElementById('pantalla').value
    if (a == 0){
        document.getElementById('pantalla').value = 0;
    }else{
        document.getElementById('pantalla').value += 0;
    }
}

function Limpiar(){
    document.getElementById('pantalla').value = 0;
}

function sumar(){
   numero1 = parseInt(document.getElementById('pantalla').value)
   operacion = '+'
   document.getElementById('pantalla').value = 0;
}

function restar(){
    numero1 = parseInt(document.getElementById('pantalla').value)
    operacion = '-'
    document.getElementById('pantalla').value = 0;
}

function dividir(){
    numero1 = parseInt(document.getElementById('pantalla').value)
    operacion = '/'
    document.getElementById('pantalla').value = 0;
}
function multiplicar(){
    numero1 = parseInt(document.getElementById('pantalla').value)
    operacion = '*'
    document.getElementById('pantalla').value = 0;
}

function igual(){
    numero2 = parseInt(document.getElementById('pantalla').value)
    if(operacion == '+'){
        document.getElementById('pantalla').value = numero2 + numero1;
    }else if(operacion == '-'){
        document.getElementById('pantalla').value = numero1 - numero2;   
    }else if(operacion == '/'){
        document.getElementById('pantalla').value = numero1 / numero2;
    }else if(operacion == '*'){
        document.getElementById('pantalla').value = numero1 * numero2;

    }
}