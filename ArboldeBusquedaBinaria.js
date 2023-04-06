// Este es el código usado para arbol de busqueda binaria los valores
// menores a this.root se van a ir colocando del lado left y los mayores
// al this.root irán al lado derecho, partimos de la referencia que:
// lado izquiero y lado derecho se evaluará para cada nodo= arbol en este ejemplo
// una vez ingresado al arbol o nodo evaluaremos la condicio "< left" ó "right > "

function BinarySearchTree(value){
	this.root = value;
	this.left = null;		
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
	if (value < this.root){ //guardamos valores a la izquierda
		if(this.left){
			this.left.insert(value)
		}
		else{
			this.left = new BinarySearchTree(value)
		}
	}
	else if (value > this.root){
		if(this.right){
			this.right.insert(value)
		}
		else{
			this.right = new BinarySearchTree(value)
		}
	}
}

const miArbolito = new BinarySearchTree(5)

