var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var rect1;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1=new BallClass(100,100,50);
	rect1=new DustBinClass(200,500,90);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  rect1.display();
  drawSprites();
 
}



