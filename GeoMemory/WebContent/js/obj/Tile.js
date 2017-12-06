/*
	x : coordonnées en x
	y : coordonnées en y
	width : largeur de la carte
	height : longueur de la carte
	imgBack : Dos de la carte (visible quand retournée)
	imgFront : Devant de la carte (invisible quand retournée)
*/

var Tile = function(x, y, width, height, imgBack, imgFront) {
    this.x = x;
    this.y = y;
    this.width = width;
	this.height = height;
	this.imgBack = imgBack;
	this.imgFront = imgFront;
	this.imgVisible = imgFront;
};

Tile.prototype.getX  = function() {
	return this.x;
}

Tile.prototype.getY  = function() {
	return this.y;
}

Tile.prototype.getWidth  = function() {
	return this.width;
}

Tile.prototype.getHeight  = function() {
	return this.height;
}

Tile.prototype.getImgVisible  = function() {
	return this.imgVisible;
}

Tile.prototype.retourner  = function() {
	
	if(this.imgVisible == this.imgBack){
		this.imgVisible = this.imgFront;
		console.log("imgFront visible !")
	}else if (this.imgVisible == this.imgFront){
		this.imgVisible = this.imgBack;
		console.log("imgBack visible !")
	}
}