// recorridos inorder
// Izquierda- Nodo- Derecha

function BinarySearchTree(value){
	this.value = value;
	this.left = null;		
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
	if (value < this.value){ //guardamos valores a la izquierda
		if(this.left){
			this.left.insert(value)
		}
		else{
			this.left = new BinarySearchTree(value)
			//return value;
		}
	}
	else if (value > this.value){
		if(this.right){
			this.right.insert(value)
		}
		else{
			this.right = new BinarySearchTree(value)
		}
	}
}


BinarySearchTree.prototype.size = function(){
	if(!this.left && !this.right) return 1;
	if(this.left && !this.right) return 1 + this.left.size();
	if(!this.left && this.right) return 1 + this.right.size();
	if(this.left && this.right) return 1 + this.left.size() + this.right.size();

	//	let counter = 1;
	//	if(this.left) counter+= this.left.size()
	//	if(this.right) counter+= this.right.size()
	//	return counter;	

}

BinarySearchTree.prototype.contains = function(value){
	if(this.value === value) return true;
	if(value > this.value){
		if(!this.right) return false;
		return this.right.contains(value)
	}
	if(value < this.value){		
		if(!this.left) return false;
		return this.left.contains(value)
	}	
}

//------------------------------------------------------------


BinarySearchTree.prototype.depthFirtsForEach = function(cb, pedido){
	// pedido >>> 'in-order' --> Izquierda- Nodo- Derecha

	if (pedido === 'in-order' || pedido === undefined){
		if(this.left && this.left.depthFirtsForEach(cb,pedido));
		cb(this.value);
		if(this.right && this.right.depthFirtsForEach(cb,pedido));
		


	}

	// recorridos Pre-Order
// Nodo - Izquierda - derecha
	if (pedido === 'pre-order'){
		cb(this.value);
		if(this.left && this.left.depthFirtsForEach(cb,pedido));	
		if(this.right && this.right.depthFirtsForEach(cb,pedido));		
		
	}

	// recorridos Post-Order
//  Izquierda - derecha-- Nodo -
	if (pedido === 'post-order'){
		if(this.left && this.left.depthFirtsForEach(cb,pedido));	
		if(this.right && this.right.depthFirtsForEach(cb,pedido));
		cb(this.value);
		
	}
}



BinarySearchTree.prototype.breadthFirtsForEach = function(cb, array = []){
	if (this.left){
	array.push(this.left);
	}

	if (this.right){
		array.push(this.right);
	}

	cb(this.value);

	if(array.length > 0){
		array.shift().breadthFirtsForEach(cb, array)
	}
}

