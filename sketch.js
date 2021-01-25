
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    stoneObj = new stone (210,430,30)
	mango1=new mango(1100,100,30);
	mango2=new mango(950,200,30);
	mango3=new mango(1000,300,30);
	mango4=new mango(1190,130,30);
	mango5=new mango(1115,190,30);
	mango6=new mango(1050,130,30);
	slingshot = new SlingShot(stoneObj.body,{x:200, y:100});
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  groundObject.display();
  slingshot.display();  
  
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
