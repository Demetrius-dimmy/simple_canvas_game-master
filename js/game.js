// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 500;
document.body.appendChild(canvas);



// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";




// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Bomba image
var bombaReady = false;
var bombaImage = new Image();
bombaImage.onload = function () {
	bombaReady = true;
} 
   bombaImage.src = "images/bomba.png";
   
   // Estrela image
var estReady = false;
var estImage = new Image();
estImage.onload = function () {
	estReady = true;
} 
   estImage.src = "images/est.png";
   
   var carroReady = false;
var carroImage = new Image();
carroImage.onload = function () {
	carroReady = true;
};
carroImage.src = "images/.png";

var expReady = false;
var expImage = new Image();
expImage.onload = function () {
	expReady = true;
}      
// Game objects
var hero = {
	speed: 256 // movement in pixels per second
	
};


var monster = {
};
var monstersCaught = 0;

var bomba={};
var bombaCaught=0;

var est={};
var estCaught=0;

var carro={};

var exp={};




// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);




// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
	
	bomba.x = 62 + (Math.random() * (canvas.width - 64));
	bomba.y = 62 + (Math.random() * (canvas.height - 64));
	
	est.x = 82 + (Math.random() * (canvas.width - 64));
	est.y = 82 + (Math.random() * (canvas.height - 64));
	
	carro.x = 42 + (Math.random() * (canvas.width - 64));
	carro.y = 42 + (Math.random() * (canvas.height - 64));
	
	exp.x = 72 + (Math.random() * (canvas.width - 64));
	exp.y = 72 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier ;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}
	
	
	if (
		hero.x <= (carro.x + 32)
		&& carro.x <= (hero.x + 32)
		&& hero.y <= (carro.y + 82)
		&& carro.y <= (hero.y + 32)
		) {}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		
		SOM_TIRO.currentTime = 0.2;
   SOM_TIRO.play();
		++monstersCaught;
		reset();
	}
	
	// Are they touching? estrela
	if (
		hero.x <= (est.x + 32)
		&& est.x <= (hero.x + 32)
		&& hero.y <= (est.y + 32)
		&& est.y <= (hero.y + 32)
	) {
		hero={speed:600 };// movement in pixels per second
		sMins ="1" ;

		++estCaught;
		--monstersCaught;
		--bombaCaught;
		reset();
	}
	
		if (
		hero.x <= (bomba.x + 32)
		&& bomba.x <= (hero.x + 32)
		&& hero.y <= (bomba.y + 32)
		&& bomba.y <= (hero.y + 32)
	) {
		hero={speed:50 };// movement in pixels per second
		SOM_Bomba.currentTime = 0.2;
   SOM_Bomba.play();
   
		++bombaCaught;
		--monstersCaught;
		reset();
	}
};

function update() {
  if (keydown.left) {
    hero.x -= 50;
  }

  if (keydown.right) {
    hero.x += 50;
  }

  hero.x = hero.x.modifier(0, CANVAS_WIDTH - hero.width);
}



// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	
	if (bombaReady) {
		ctx.drawImage(bombaImage, bomba.x, bomba.y);
	}
	if (estReady) {
		ctx.drawImage(estImage, est.x, est.y);
	}
		if (carroReady) {
		ctx.drawImage(carroImage, carro.x, carro.y);
	}
	if (expReady) {
		ctx.drawImage(expImage, exp.x, exp.y);
	}
	
	

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monster caught: " + monstersCaught, 32, 62);
	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Bomba caught: " + bombaCaught, 32, 42);
	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Estrela caught: " + estCaught, 32, 82);
	
};





// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
