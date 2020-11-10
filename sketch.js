var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1=createSprite(350,600,20,100)
	rect2=createSprite(450,600,20,100)
	rect3=createSprite(400,650,100,20)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 rect3 = Bodies.rectangle(390,650,100,20,{restitution:0,isStatic:true});
	World.add(world,rect3);

	rect2 = Bodies.rectangle(390,650,20,100,{restitution:0,isStatic:true});
	World.add(world,rect2);

	rect1 = Bodies.rectangle(390,650,20,100,{restitution:0,isStatic:true});
	World.add(world,rect1);


	Engine.run(engine);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) 
	{ Body.setStatic(packageBody, false); }
}



