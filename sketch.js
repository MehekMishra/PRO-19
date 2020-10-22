var ball,img,paddle;
function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(50,200,10,10);
  ball.addImage("ball",ballImage);
  ball.velocityX = 9;
  
  paddle = createSprite(350,200,10,80);
  paddle.addImage("paddle",paddleImage);
  
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  randomVelocity();
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y -10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y +10;
  }
  drawSprites();
  
}

function randomVelocity()
{
    ball.velocityY=random(4,-4); 
 
}

 

