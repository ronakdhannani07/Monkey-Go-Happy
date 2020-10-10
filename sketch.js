
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground,groundI;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundI = loadImage("download.png");
}



function setup() {

bananaGroup = new Group();
obstaceGroup = new Group();
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);  
monkey.scale = 0.1;
//monkey Group not required monkey are not spawned with frames it has to be there in all frames   
}


function draw() {
background("cyan"); 


  
  //console.log (monkey.y)
if(gameState === PLAY){
  
  ground = createSprite(200,380,400,10);    
  ground.addImage("ground",groundI);
   ground.velocityX = -4; 
  if(ground.x<200){
    ground.x = ground.width /2;
  }
  
  if(keyDown("space") && monkey.y > 298 ){
                                           
     monkey.velocityY = -15;  
  }
  ba();  
  ob();  
  
  if(bananaGroup.isTouching(monkey)){
    score = score+1;
    bananaGroup.destroyEach();   
  }
}
 
monkey.velocityY = monkey.velocityY + 0.8;   

drawSprites();
  
text("Score : "+score,280,20);

if(obstaceGroup.isTouching(monkey)){

gameState = END;

obstaceGroup.destroyEach();  
     
}  
  
monkey.collide(ground);
}

function ob() {
  
if(frameCount%100 === 0 ){
 obstacle = createSprite(400,300,20,20); 
 obstacle.velocityX = -10;  
 obstacle.addImage(obstaceImage);  
 obstacle.scale = 0.2; 
 obstacle.lifetime = 45;
 obstaceGroup.add(obstacle); 
  
}  
}

function ba() {
 if(frameCount%80 === 0  ){ 
 banana = createSprite(400,300,20,20);
 banana.addImage(bananaImage); 
 banana.velocityX = -10;
 banana.scale = 0.1;
 banana.y = Math.round(random(150,250))
 bananaGroup.add(banana);  
   
 }
 }




