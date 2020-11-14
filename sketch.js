const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;
var yellowline;
var score;
var yellowline;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var turn = 0;


function preload(){
 
}
function setup() { 
  createCanvas(480,800);
  
  back = createSprite(240, 798, 480, 30);
  yellowline = createSprite(50, 450, 1000, 5);
  yellowline.shapeColor = "yellow";
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background(232, 255, 255 );
  
  if (frameCount % 10 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  fill("darkblue");
  textSize(20);
  text("SCORE: "+score,10,20);

  fill("darkblue");
  textSize(20);
  text("500 ",20,540);

  fill("darkblue");
  textSize(20);
  text("500 ",100,540);

  fill("darkblue");
  textSize(20);
  text("500 ",190,540);

  fill("darkblue");
  textSize(20);
  text("100 ",270,540);

  fill("darkblue");
  textSize(20);
  text("100 ",330,540);

  fill("darkblue");
  textSize(20);
  text("100 ",420,540);

  fill("darkblue");
  textSize(20);
  text("turns : "+turn,400,20);

}

