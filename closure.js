//Closure

//function moneyBox(coins){
//  let saveCoins =0;
//  saveCoins += coins;
//  console.log(`MoneyBox: $${saveCoins}`)
//}
//moneyBox(5);



function moneyBox(){
  let saveCoins =0;
  function countCoins(coins){
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}
let ahorroEdwar = new moneyBox();
ahorroEdwar(5);
ahorroEdwar(5);
ahorroEdwar(15);
console.log();

let ahorroKarl = new moneyBox();
ahorroKarl(15);
ahorroKarl(15);
ahorroKarl(15);





export function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }
    return firstNum;
  };
}
//sumWithClosure(2)(3);




function createPetList() {
   let petList=[];
  return function myPetList(pet){
    if (pet){
    petList.push(pet);
  }
  return petList;
  }
}

const myPetList = createPetList();
const mascotas = new createPetList();

mascotas("michi");

mascotas("firulais");

mascotas();

