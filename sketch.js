
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ball_options;
var groundObj, leftSide,rightSide;


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
	
		restitution: 0.3,
		
		density: 1.2
	}

	ball = Bodies.circle(100, 600, 15, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width / 2, 670, width, 20)
	leftSide  = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);

	groundObj.display();
	leftSide.display();
	rightSide.display();


	ellipse(ball.position.x,ball.position.y,15)

}

function keyPressed(){

if(keyCode==UP_ARROW){
	Body.applyForce(ball , ball.position, {x:50,y:-50});
}

}



