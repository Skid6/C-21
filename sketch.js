var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="green"
fixedRect.debug=true
 movingRect= createSprite(200, 200, 50, 50);
 movingRect.shapeColor="green"
 movingRect.debug=true

 Pen= createSprite(200, 200, 50, 50);
 Pen.shapeColor="green"
Pen.debug=true
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x)
  console.log(movingRect.width/2+fixedRect.width/2)
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
    Pen.shapeColor="green"
  }
  if(isTouching(movingRect,Pen)){
    Pen.shapeColor="red"
    movingRect.shapeColor="red"

  }
  drawSprites();
}
