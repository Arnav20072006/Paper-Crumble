
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;

function preload()
{
	
}

function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world  = engine.world;

	//Create the Bodies Here.
    paper  = new Paper(400,350,40);
    ground = new Ground(400,650,800,5);
	  }


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();

  drawSprites();

  
  
}



