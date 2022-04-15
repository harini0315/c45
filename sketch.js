var box;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26
function setup() {
  createCanvas(1000,640);
  box = createSprite(200,200,30,30);
  w1 = createSprite(10,320,10,612)
  w2 = createSprite(500,20,990,10)
  w3 = createSprite(990,320,10,612)
  w4 = createSprite(500,620,990,10)
  w5 = createSprite(150,200,10,150)
  w6 = createSprite(200,130,100,10)
  w7 = createSprite(500,130,260,10)
  w8 = createSprite(851,200,10,150)
  w9 = createSprite(806,130,100,10)
  w10 = createSprite(270,300,50,10)
  w11 = createSprite(730,300,50,10)
  w12 = createSprite(400,300,50,10)
  w13 = createSprite(600,300,50,10)
  w14 = createSprite(370,345,10,100) 
  w15 = createSprite(630,345,10,100)
  w16 = createSprite(500,400,270,10)
  w17 = createSprite(270,400,50,10)
  w18 = createSprite(730,400,50,10)
  w19 = createSprite(150,500,10,150)
  w20 = createSprite(851,500,10,150)
  w21 = createSprite(200,570,100,10)
  w22 = createSprite(806,570,100,10)
  w23 = createSprite(700,550,10,150)
  w24 = createSprite(300,550,10,150)
  w25 = createSprite(300,100,10,150)
  w26 = createSprite(700,100,10,150)
  w26.shapeColor = "red"

}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




