/*
	Il s'agit de l'ensemble des tuiles.
	Cette classe affichera et retournera les tiles
	
	tiles : tableau de Tile
*/
var faces = [
			getImage("./img/leafers-seed.png"),
			getImage("./img/leafers-seedling.png"),
			getImage("./img/leafers-sapling.png"),
			getImage("./img/leafers-tree.png"),
			getImage("./img/leafers-ultimate.png"),
			getImage("./img/marcimus.png"),
			getImage("./img/mr-pants.png"),
			getImage("./img/mr-pink.png"),
			getImage("./img/old-spice-man.png"),
			getImage("./img/robot_female_1.png"),
			getImage("./img/piceratops-tree.png"),
			getImage("./img/orange-juice-squid.png")
		];
		
var Board = function(tiles) {
    var k = 0
	for (var i = 0; i < NUM_COLS; i++) {
		
		for (var j = 0; j < NUM_ROWS; j++) {
			
			//Ramène les indices i et j au même plan que le tableau faces.
			//if ((i*NUM_ROWS + j) % 2 == 0){k++;}
			
			tiles.push(
				new Tile(
					i * (LARGEUR_TUILE + 20) + 20, 
					j * (HAUTEUR_TUILE + 20) + 20, 
					LARGEUR_TUILE, 
					HAUTEUR_TUILE, 
					IMG_BACK,
					IMG_BACK // L'image de face viendra plus tard
				)
			);
			
		}
	}
};

