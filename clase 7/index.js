 
// class Operaciones{



//     suma(a , b){
//         return a + b;
//     }

//     resta(a , b){
//         return a - b;
//     }

//     multiplicacion(a , b){
//         return a * b;
//     }

//     division(a , b){
//         return a / b;
//     }
// }

// let operar = new Operaciones();
// operar.suma(4, 8)
// operar.resta(6,9)

// class Gato{

//     color

//     sexo

//     nombre = 'aun no me pones nombre'

//     ronrronear(){
//        return 'ronronea tonto '+this.nombre
//     }

//     correr(){

//     }

//     irbano(){

//     }
// }

// let michi = new Gato();
// michi.color = 'blanca'
// michi.nombre = 'michi'
// michi.sexo = 'hembra'


// let africa = new Gato();
// africa.color = 'negro'
// africa.nombre = 'africa'
// africa.sexo = 'gay'

class Humano{
    constructor() {

    }
    caminar(){
        return 'Estoy caminando'
    }
}

class Mujer extends Humano{
  constructor(){
    super();
  }


}


class Hombre extends Humano{
    constructor(){
        super();
      alert('hola')
    }
  
}

let maritza = new Mujer();  
console.log(maritza.caminar())




