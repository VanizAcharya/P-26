
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine , world;
var paperball;

function preload()
{
	
}

function setup() {
	var canvas =createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground =Bodies.rectangle(100,670,100,10)
  World.add(world,ground)

  
}


function draw() {
	background(0);
	rectMode(CENTER);
  
  Engine.update(engine);
  ground.display()
    
  drawSprites();
 
}



