const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var base,wall1,wall2;
var jointPoint,link;
var rock1,rock2,rock3,rock4,rock5,rock6,rock7,rock8;
var zombie,bkgroundImg,zombieImg,chop;
function preload(){
  zombieImg = loadImage("./assets/zombie.png");
  bkgroundImg = loadImage("./assets/background.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;


  bridge = new Bridge(25,{x:150,y:height/2});

  base = new Base(width/2,height-5,width,10);
  wall1 = new Base(200,height/2,190,100);
  wall2 = new Base(width-200,height/2,190,100);

  link = new Link(bridge,wall2);

  rock1 = new Stone(width/2,(height/2)-700);
  rock2 = new Stone((width/2)-20,(height/2)-700);
  rock3 = new Stone((width/2)-30,(height/2)-700);
  rock4 = new Stone((width/2)-10,(height/2)-700);
  rock5 = new Stone((width/2)+25,(height/2)-700);
  rock6 = new Stone((width/2)+25,(height/2)-700);
  rock7 = new Stone((width/2)+15,(height/2)-700);
  rock8 = new Stone((width/2)+10,(height/2)-700);

  zombie = createSprite(width/2,height-110);
  zombie.addImage(zombieImg);
  zombie.scale = 0.1;
  zombie.velocityX = 10;
  if(zombie.x <= width*(4/5)){
    zombie.velocityX = -10;
  }
  if(zombie.x >= width/5){
    zombie.velocityX = 10;
  }
  if(collide(rock1,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock2,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock3,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock4,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock5,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock6,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock7,zombie)){
    zombie.velocityX = 0;
  }
  if(collide(rock8,zombie)){
    zombie.velocityX = 0;
  }
  chop = createImg('./assets/axe.png');
  chop.position(200,height/2);
  chop.size(50,50);
  chop.mouseClicked(handleButtonPress)

  frameRate(80);

}

function draw() {
  background(51);
  image(bkgroundImg,0,0,width,height);
  Engine.update(engine);
  drawSprites();

  bridge.show();
  base.display();
  wall1.display();
  wall2.display();
  rock1.display();
  rock2.display();
  rock3.display();
  rock4.display();
  rock5.display();
  rock6.display();
  rock7.display();
  rock8.display();

}

function handleButtonPress(){
  link.detatch();
  setTimeout(() => {
    bridge.break();
  }, 1500);
  
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,body);
               body = null;
               return true; 
            }
            else{
              return false;
            }
         }
}