var mr,ms;

function setup() {
  createCanvas(800,400);
 mr = createSprite(400, 200, 80,30);
 mr.shapeColor="red"
 ms = createSprite(200,200,50,80);
 ms.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  if(mr.x-ms.x<mr.width/2+ms.width/2 && ms.x-mr.x<mr.width/2+ms.width/2 && mr.y-ms.y<mr.height/2+ms.height/2 && ms.y-mr.y<mr.height/2+ms.height/2){
    ms.shapeColor="blue"
    mr.shapeColor="blue"
  }
  else{
    mr.shapeColor="red"
    ms.shapeColor="red"
  }
  mr.y=World.mouseY
  mr.x=World.mouseX
  drawSprites();
}