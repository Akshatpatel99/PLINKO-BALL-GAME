const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var particles = [];
var divisions = [];

var ground, engine, world;

function setup() {
  
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground (240,790,480,20);

  for (var d = 0 ; d <= 480 ; d = d + 81){
    divisions.push(new Division (d,650,10,300));
  }
  
  for (var p = 40 ; p <= 480 ; p = p + 50){
    plinkos.push(new Plinko(p,75,10));
  }

  for (var p = 15 ; p <= 480 ; p = p + 50){
    plinkos.push(new Plinko(p,175,10));
  }

  for (var p = 40 ; p <= 480 ; p = p + 50){
    plinkos.push(new Plinko(p,275,10));
  }

  for (var p = 15 ; p <= 480 ; p = p + 50){
    plinkos.push(new Plinko(p,375,10));
  }
  
}

function draw(){

      Engine.update(engine);

      background("yellow");  

      if (frameCount % 60 === 0){

        particles.push(new Particle(random(190,281),10,10));

      }

      for (var a = 0 ; a < divisions.length ; a++){

        divisions[a].display();

      }

      for (var b = 0 ; b < plinkos.length ; b++){


        plinkos[b].display();
      }

      for (var c = 0 ; c < particles.length ; c++){
        particles[c].display();
      }



      ground.display();

}