const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  particle1 = new Particles(100, 100, 5);
  ground1 = new Ground(200, 790, 400, 20);
  for(var i = 10; i<width; i = i+100){
    divisions.push(new Division(i, 680, 5, 200));
  }
  for(var i = 10; i<width; i = i+90){
    plinkos.push(new Plinko(i, 435, 5));
  }
  for(var i = 10; i<width; i = i+90){
    plinkos.push(new Plinko(i, 470, 5));
  }
  for(var i = 10; i<width; i = i+90){
    plinkos.push(new Plinko(i, 505, 5));
  }
  for(var i = 10; i<width; i = i+90){
    plinkos.push(new Plinko(i, 540, 5));
  }
  for(var i = 5; i<width;){
    particles.push(new Particles(i, 10, 5));
  }
  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);
  for(var i = 0; i<divisions.length; i++){
  divisions[i].display();
  }
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-20, width/2+20),5, 5));
  }
  for(var i = 0; i<particles.length;i++){
    particles[i].display();
  }
  ground1.display();
  drawSprites();
}
