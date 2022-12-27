// let prueba = new Object();

// // console.log(prueba)
// // console.log(typeof(prueba))

// let animales = new Object();

// animales = [{
//     id : 1,
//     nombre : 'Abeja',
//     tipo: 'Insecto',
//     color : [{ id : 1, nombre : 'Amarillo' } , { id : 2, nombre : 'Negro' }]
// },{
//     id : 2,
//     nombre : 'Aguila',
//     tipo: 'Ave',
//     color : [{ id : 1, nombre : 'Blanco' } , { id : 2, nombre : 'Cafe' }]
// },{
//     id : 3,
//     nombre : 'Avestruz',
//     tipo: 'Ave',
//     color : [{ id : 1, nombre : 'Blanco' } , { id : 2, nombre : 'Cafe' }]
// }]

// for(i =0; i <= animales.length -1; i++){
//     console.log(animales[i].nombre)
// }

// animales.forEach(( valor , clave) => {
//     if(valor.nombre == 'Avestruz'){
//         valor.color.forEach((k, j)=> {
//             console.log(k.nombre)
//         })
//     }
        
// });


// let rick = new Object();

// fetch('https://rickandmortyapi.com/api/character')
// .then(response => response.json())
// .then(response => {
//     rick = response.results
//     rick.forEach((valor , clave) => {
//         console.log(valor.name)
//     })
// });

let gatos = new Object();

gatos = [{
    nombre: 'Garfield',
    color: 'Naranja'
},{
    nombre: 'Miau',
    color: 'Blanco'
},{
    nombre: 'Luna',
    color: 'Negra'
},{
    nombre: 'Doraemon',
    color: 'Azul'
},{
    nombre: 'Feliz',
    color: 'Gris'
}]

gatos.forEach(element => {
    if (element.nombre.includes('l')){
        console.log ( element.color)
    }
    
});
























