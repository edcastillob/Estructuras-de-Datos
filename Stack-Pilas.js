class Stack{
	constructor(){
		this.top = null;		
	}

push(element){ // agregar elementos
	let node = new Node(element, this.top);	
	this.top = node;
	}

pop(){	// eliminar el ultimo elemento ingresado
	let element = this.top; //si se quiere mostrar el elemento borrado
	if (!this.top) return null;
	this.top = this.top.prev;	
	return element; // retornamos el elemento borrado
	}

peek(){ // devuelve el ultimo ingresado
	let peek = this.top;
	return peek;
	}
isEmpty(){// devuelve si la pila esta vacia?	
	return !this.top;
	}

print(){ // imprimir mis nodos
		let aux = this.top;
		while(aux){
			console.log(aux.data);
			aux = aux.prev			
		}
	}

longt(){ // imprimir cantidad de nodos
		let counter =0;
		let aux = this.top;
		while(aux){
			counter++
			aux = aux.prev			
		}	
	return counter;		
	}

hasElement(element){ //verifica si el elemento esta en la pila
	let aux = this.top;
		while(aux !== null && aux.data !== element){			
			aux = aux.prev	
			}	
	return aux !== null;			
}

}


class Node{
	constructor(element, prev){
		this.data = element;
		this.prev = prev;
	}
}

let myStack = new Stack();





