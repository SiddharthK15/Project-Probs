const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(200,400,40)
bob2 = new Bob(240,400,40)
bob3 = new Bob(280,400,40)
bob4 = new Bob(320,400,40)
bob5 = new Bob(360,400,40)

rod = new Rod(280,250,200,20)

rope1 = new Rope(bob1.body,rod.body,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rod.display();
  rope1.display();

  drawSprites();
 
}



