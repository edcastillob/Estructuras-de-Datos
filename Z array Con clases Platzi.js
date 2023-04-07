//array
class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();
myArray.push("Jose");
myArray.push("Adriana");
myArray.push("Fernanda");
myArray.push("Delia");
myArray.get(1)
myArray.length