const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinko1
var particle1


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  particle1 = new Particles(100, 100, 20);
  plinko1 = new Plinko(200, 200, 20);
  Engine.run(engine);
}

function draw() {
  background("#13babd");  
  Engine.update(engine);
  particle1.display();
  plinko1.display();
  drawSprites();
}