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