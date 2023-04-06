class Nodo{           //Clase para crear el nodo
	constructor(data){
		this.data = data;	  //Este será los datos a guardar	
		this.next = null;	  //Sera la cola del nodo		
	}
}

//new Nodo(8);  //forma de crear el nodo

class LinkenList{
	constructor(){
		this.head = null;
		this.size=1;		
	}

	// agregar elementos

	push(data){
		let nodo = new Nodo(data)
		if (this.head == null){
			this.head = nodo;			
		} 
		else{
			this.last.next = nodo;
			this.size++;
		}		
		this.last = nodo;
	}

	print(){ // imprimir los nodos
		//puntero = aux
		let  aux = this.head
		while(aux){
			console.log(aux); //si quiero imp solo la data y no el nodo completo ==> console.log(aux.data);
			aux = aux.next;
		}
	}
	length(){ // tamaño de los nodos
		//puntero = aux
		let  aux = this.head
		let length = 0;
		while(aux){			
			aux = aux.next;
			console.log(length); 
		}
		return aux
	}
	getLastElement(){ // buscar el ultimo nodo
		let aux = this.head;
		if (!aux) return 0
		while(aux.next){
			aux = aux.next
		}
		return aux;
	}   

	getLastElementByIndex(index){
		let aux = this.head;
		let actualIndex = 0;

		while(aux != null && actualIndex != index){
			aux = aux.next
			actualIndex++
		}
		return aux;
	}

	find(element){
		let aux = this.head;
		while(aux != null && aux.data != element){
			aux = aux.next;
		}
		return aux;
	}

	delete(element){
		let aux = this.head;
		if (aux == null) return null;
		if (aux.data == element){this.head = aux.next 
			return element}
		while(aux.next.data != element){
			aux = aux.next.next
		}
		aux.next = aux.next.next;
	}
	
}



let myList = new LinkenList ()
myList.push(1);
myList.push(4);
myList.push(6);
myList.push(8);
