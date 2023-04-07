//Global Scope
var fruta = 'Manzana';

function mostrarFruta(){
  console.log(fruta)
}
mostrarFruta();

function ciudad(){
  ciudad= 'San Felipe';
  console.log(ciudad)
}
ciudad()
console.log(ciudad)

//Local Scope
var fruta = 'Manzana';

function greeting(){
 let userName = 'Edwar'
  console.log(userName)
  if (userName === 'Edwar'){
    console.log(`Hello ${userName}! Welcome`)
  }else{
    console.log(`Hello ${userName}! Ud no es el usuario requerido`)
  }
}
greeting();


//Block Scope


function cars(){
if(true){
  // las variables funcionan dentro del bloque
  var carro1 = 'Toyota'  
  let carro2 = 'Ford'
  const carro3 = 'Chery'
  console.log(carro1);
}
}
cars();



