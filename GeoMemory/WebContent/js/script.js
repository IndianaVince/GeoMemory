(function () {
	window.onload = function(){
		var LARGEUR_TUILE = 100;
		var HAUTEUR_TUILE = 140;
		var IMG_BACK = getImage("./img/leaf-green.png");
		
		var NUM_ROWS = 4;
		var NUM_COLS = 6;


		var tiles = [];
		
		/* 
		 * Creation d'un tableau contenant les coord en x et y de chaque tuile.
		 * Il servira à :
		 * - "distribuer" les coords à la création des tuiles
		 * - à savoir si la souris est sur une tuile ou sur un espace vide.
		 * 
		 */
		var coordTiles = [];
		
		for (var i = 0; i < NUM_COLS; i++) {
			for (var j = 0; j < NUM_ROWS; j++) {
				coordTiles.push(new Coord(
						i * (LARGEUR_TUILE + 20) + 20 ,
						j * (HAUTEUR_TUILE + 20) + 20 
					)
				);
			}
		}
		
		console.log(coordTiles[1].x);
		
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

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
		
		/*Initialisation tableau de tuiles*/

		
		for (var i = 0; i < coordTiles.length ; i++) {
							
				tiles.push(
					new Tile(
						coordTiles[i].x, 
						coordTiles[i].y, 
						LARGEUR_TUILE, 
						HAUTEUR_TUILE, 
						IMG_BACK,
						IMG_BACK // L'image de face viendra plus tard
					)
				);
			}
		
	//Placement de chaque image de faces[] dans 2 emplacements aléatoires de tiles[].
		for(var i=0 ; i < tiles.length/2 ; i++){
			for(var j=0 ; j < 2 ; j++){
				
				sortie=false;
				while( ! sortie){
					
					var alea = Math.floor(Math.random() * (tiles.length + 0));
					
					if( tiles[alea].imgFront == tiles[alea].imgBack ){
						//image de face pas encore modifiée
						tiles[alea].imgFront = faces[i];
						//console.log("Image n° "+i+" dans tuile n°"+alea)
						sortie=true;
					}
					
				}
			}
		}	
		
	
		/*Dessin des tuiles.*/
		for (var i = 0; i < tiles.length; i++) {
			displayRoundRect(
				ctx, 
				tiles[i], 
				6
			);
		}	

		/*A l'écoute du mouvement de la souris.*/
		canvas.addEventListener('mousemove', function(evt) {
		    var mousePos = getMousePos(canvas, evt);
		    
		    var message = 'Mouse position: ' + mousePos.x + ' - ' + mousePos.y;
		    console.log(message);
		}, false);

		/*tiles[6].retourner();
		hideRoundRect(ctx, tiles[6]);
		displayRoundRect(ctx, tiles[6], 6);*/
		
		
		
	}
	
})();