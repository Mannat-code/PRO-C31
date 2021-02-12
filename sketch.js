const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boundry1
var boundry2
var boundry3
var boundry4

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;



function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;

  GROUND = new Ground(300,780,580,10);
  boundry1= new Ground(300,793,600,10);
  boundry2 = new Ground(5,300,10,1000);
  boundry3 = new Ground(300,5,600,10);
  boundry4= new Ground(595,300,10,1000);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-60, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,475));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);


  

  fill(255);
  GROUND.display();
  fill("brown");
 
  boundry1.display();
  boundry2.display();
  boundry3.display();
  boundry4.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(260, 340), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}