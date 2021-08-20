
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(910, 800);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.1,
		friction:0.5,
		density:2,
	}
    ball = Bodies.circle(110,100,20,ball_options)
	World.add(world,ball)

	
	ground1=new Ground(width/2,600,width,20);
	leftSide= new Ground(680,540,20,140);
	rightSide= new Ground(880,540,20,140);
	ground2= new Ground(10,550,20,1080);
	ground3= new Ground(900,550,20,1080);
	

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	drawSprites();
    background(255);

    ellipse(ball.position.x,ball.position.y,20)
	
	ground1.show();
	leftSide.show();
    rightSide.show();
	ground2.show();
	ground3.show();
    keyPressed();
	textSize(20)
	fill(40)
	text("Press the up arrow key for the ball to move",295,300)
	Engine.update(engine);
	
	}
   


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.4,y:0.01});

	}
}


