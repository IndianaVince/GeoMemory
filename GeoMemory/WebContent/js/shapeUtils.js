/*Renvoie les coord de la souris*/
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
    	x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
    	y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
    };
  }

function getImage(url) {
	var img = new Image();
	img.onload = function(){
		//console.log(img);
	}
	img.setAttribute('crossOrigin', 'anonymous');
	img.src = url;

	return img;
}


function displayRoundRect(context, tile, radius){
	var r = tile.getX() + tile.getWidth();
	var b = tile.getY() + tile.getHeight();

	context.beginPath();

	context.strokeStyle="green";
	context.lineWidth="1";

	context.fillStyle="#d6f7ca";


	context.moveTo(tile.getX()+radius, tile.getY());
	context.lineTo(r-radius, tile.getY());
	context.quadraticCurveTo(r, tile.getY(), r, tile.getY()+radius);

	context.lineTo(r, tile.getY()+tile.getHeight()-radius);
	context.quadraticCurveTo(r, b, r-radius, b);

	context.lineTo(tile.getX()+radius, b);
	context.quadraticCurveTo(tile.getX(), b, tile.getX(), b-radius);

	context.lineTo(tile.getX(), tile.getY()+radius);
	context.quadraticCurveTo(tile.getX(), tile.getY(), tile.getX()+radius, tile.getY());

	context.stroke();
	context.fill();

	/*Draws a given image to the context at the given position, scaling the image to the given width and height.*/
	context.drawImage(
		tile.getImgVisible(), 
		tile.getX(), 
		tile.getY() + tile.getHeight()/5, 
		tile.getWidth(), 
		tile.getWidth()
	);
}

function hideRoundRect(context, tile){
	context.clearRect(tile.getX() - 5, tile.getY() - 5 , tile.getWidth() + 10, tile.getHeight() + 10);
}