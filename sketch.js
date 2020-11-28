const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  particle1 = new Particles(100, 100, 5);
  plinko1 = new Plinko(100, 35, 5);
  plinko2 = new Plinko(100, 70, 5);
  plinko3 = new Plinko(100, 105, 5);
  plinko4 = new Plinko(100, 140, 5);
  plinko5 = new Plinko(200, 35,5);
  plinko6 = new Plinko(200, 70,5);
  plinko7 = new Plinko(200, 105,5);
  plinko8 = new Plinko(200, 140,5);
  plinko9 = new Plinko(300, 35,5);
  plinko10 = new Plinko(300, 70,5);
  plinko11 = new Plinko(300, 105,5);
  plinko12 = new Plinko(300, 140,5);
  plinko13 = new Plinko(400, 35,5);
  plinko14 = new Plinko(400, 70,5);
  plinko15 = new Plinko(400, 105,5);
  plinko16 = new Plinko(400, 140,5);
  plinko17 = new Plinko(500, 35,5);
  plinko18 = new Plinko(500, 70,5);
  plinko19 = new Plinko(500, 105,5);
  plinko20 = new Plinko(500, 140,5);
  plinko21 = new Plinko(600, 35, 5);
  plinko22 = new Plinko(600, 70, 5);
  plinko23 = new Plinko(600, 105, 5);
  plinko24 = new Plinko(600, 140, 5);
  plinko25 = new Plinko(700, 35,5);
  plinko26 = new Plinko(700, 70,5);
  plinko27 = new Plinko(700, 105,5);
  plinko28 = new Plinko(700, 140,5);
  ground1 = new Ground(400, 390, 800, 20);
  division1 = new Division(100, 280, 5, 200);
  division2 = new Division(200, 280,5, 200 );
  division3 = new Division(300, 280,5,200);
  division4 = new Division(400, 280, 5, 200);
  division5 = new Division(500, 280, 5,200);
  division6 = new Division(600, 280, 5, 200);
  division7 = new Division(700, 280, 5, 200);
  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);
  particle1.display();
  plinko1.display();
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  drawSprites();
}

for(var j =40; j<=width; j=j+100){
  plinkos.push(new Plinko(j,35));
}
for(var j = 15; j<=width - 10; j=j+100){
  plinkos.push(new Plinko(j, 70));
}
