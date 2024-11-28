let player1;
let player1Img;
let player2;
let player2Img;
let startButton;
let settingsButton;
let gameButton;
let exitButton;
let bgImage;
let courtImage;
let levelImage;
let settingsImage;
let level1;
let level2;
let level3;
let sound;
let ballImg;
let hoopImg;
let floor;
let map;

let player1Score = 0;
let player2Score = 0;
let ball;
let hoop;
let hoopWidth;
let hoopheight;
let state = 'LEVEL'
function preload(){
   player1Img = loadImage('Player Sprite.png')
   //player2Img = loadImage('Player Sprite.png')
	bgImage = loadImage('Menu.png')
    courtImage = loadImage('Courtredux.png')
    levelImage = loadImage('Game level.png')
    settingsImage = loadImage('Settings.png')
    
}


function setup() {
	createCanvas(1000, 700);
	displayMode('centered');
	world.gravity.y = 9.81
player1 = new Sprite(width/2,height/2,16,32)
player1.spriteSheet = player1Img;
player1.anis.frameDelay = 8;
player1.addAnis({
    stand: { row:0, frames:1},
    run : {row:1, frames: 3},
    jump: {row:1,frames:4},
    defend: {row:2,frames:3}
	

})
player1.changeAni('run')
//player1.ani.noLoop()
player2 = new Sprite(width/2,height/2,16,32)
player2.spriteSheet = player1Img;
player2.anis.frameDelay = 8;
player2.addAnis({ stand: { row:5, frames:1},
    run : {row:6, frames: 3},
    jump: {row:6,frames:4},
    defend: {row:7,frames:3}
})
//player2.changeAni(run)

player1.rotationLock= true
player1.visible = false
player2.visible = false
player1.anis.offset.x = 2;
	player1.anis.frameDelay = 8;
	player1.friction = 0;


floor = new Sprite(width /2, height -12,'s');
floor.visible = false;
floor.colour= 'red'

floor.w = 1000;
floor.h = 10
 







// Define ball
ball = new Sprite(400, 50, 20, 20);
ball.visible = false;  
ball.diameter = 15
ball.bounciness = 1
ball.y = 30


//allSprites.debug = true
 //Define hoop
hoop = new Sprite;
hoop.w= 10;
hoop.h= 200;
hoop.visible = false;  
//creating buttons and that 
startButton = createButton('Start Game');
    startButton.position(530, 360);
    startButton.mousePressed(startGame);

    settingsButton = createButton('Settings');
    settingsButton.position(530, 300);
    settingsButton.mousePressed(openSettings);

    gameButton = createButton('Game Level');
    gameButton.position(530, 250);
    gameButton.mousePressed(changeLevel);

    exitButton = createButton('Exit');
    exitButton.position(530, 200);
    exitButton.mousePressed(exitGame);
}

function draw() {
	
	// background(bgImage);
	if(state == 'GAME'){
	background(courtImage)
	controls()
	}
	if(state == 'LEVEL'){
		background(levelImage)
		allSprites.draw()
	}
	if (state == 'SETTINGS'){
		background()
	}
	if (state == 'EXIT'){
		background()
	}

	

	if (ball.collided(floor)) {
		ball.vel.y = -4.8;
	}
	
	if (kb.presses('a')) player1.changeAni('run');
	if (kb.presses('w')) player1.changeAni('jump');
	if (kb.presses('s')) player1.changeAni('stand');
	if (kb.presses('d')) player1.changeAni('defend');
	
	//player1.moveTowards(ball)
	
	//if (mouse.presses()) {
		//if (player1.joints[0]) player1.joints[0].remove();
		//else new GlueJoint(player1, ball);
	//}
	
}
	
	

function controls(){

	if(kb.pressing('a')){
		player1.vel.x -=0.1
	}
	else if(kb.pressing('d')){
		player1.vel.x +=0.1
	}
	else{
		if(player1.vel.x < 0){
		player1.vel.x +=0.1
		}
		else{
			player1.vel.x -=0.1
		}
	}

    if(kb.pressing('w')){
		player1.vel.y -=0.1
	}
	else if(kb.pressing('s')){
		player1.vel.y +=0.1

	}
	else{
		if(player1.vel.y < 0){
			player1.vel.y +=0.1
			}
			else{
				player1.vel.y -=0.1
			}
	}
}

	


function startGame(){
	
	state = 'GAME'
	background(courtImage);
	startButton.hide();
	settingsButton.hide();
	gameButton.hide();
	exitButton.hide();

	player1.visible = true
	player2.visible = true
	hoop.visible = true
	ball.visible = true


	}

function changeLevel(){
state = 'LEVEL'
background(levelImage);
startButton.hide();
settingsButton.hide();
gameButton.hide();
exitButton.hide();

	level1Button = createButton('Level 1');
	level1Button.position(530,200);
	level1Button.mousePressed(level1);
	
   level2Button = createButton('Level 2');
   level2Button .position(530,250);
   level2Button .mousePressed(level2);
	
	level3Button = createButton('Level 3');
	level3Button.position(530,300);
	level3Button.mousePressed(level3);


	
   
}
function openSettings(){
	state = 'SETTINGS'
background(settingsImage);
startButton.hide();
settingsButton.hide();
gameButton.hide();
exitButton.hide();
 




	
}

function exitGame(){}