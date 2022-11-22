function llamar() {
    segundo_llamado("Mochi")
}

function segundo_llamado(a) {
    alert(a)
}

function cuadrado(){
    let numero = document.getElementById('numero').value;
    // alert(numero * numero)    
    document.getElementById('numero').value = numero * numero
}

function blure(){
    document.getElementById('numero').style.background = 'blue'
    document.getElementById('numero').style.color = 'white'
}

function focuse() {
    document.getElementById('numero').style.background = 'red'
    document.getElementById('numero').style.color = 'pink'
}

function cambio(){
    
    if(document.getElementById('pais').style.background == 'red'){
        document.getElementById('pais').style.background = 'yellow'
    }else if(document.getElementById('pais').style.background == 'yellow'){
        document.getElementById('pais').style.background = 'green'
    }else{
        document.getElementById('pais').style.background = 'red'
    }
     
}

function triangulo(){
    document.getElementById('numero').style.background = 'violet'
}

function calculameesta(){
    document.getElementById('numero').style.background = 'orange'
}

function calculameestas2(){
    document.getElementById('numero').style.background = 'white'
}

