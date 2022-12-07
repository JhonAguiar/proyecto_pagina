function boton(){
    let a = document.getElementById('entrada').value
    sessionStorage.setItem('Entrada', a)
    sessionStorage.setItem('Apellido','Aguiar')
}

function cerrar(){
    //localStorage.removeItem('Entrada')
    sessionStorage.clear()
}