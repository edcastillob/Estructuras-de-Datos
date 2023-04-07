
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
 remove(index){
        if( !this.getTheIndex(index) ){
            console.log("Este nodo no existe.")     
            }

        if (index === 0){
            this.head = this.head.next
            this.length-- 
            returnthis
        }

        let previousPoiner =  this.getTheIndex(index - 1)
        let nextPointer =  this.getTheIndex(index + 1 )
        previousPoiner.next = nextPointer
        this.length--
        return this;
    }
}

let myLinkedList = new MySinglyLinkedList(1);