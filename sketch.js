var bg,bgImg,bgImg1;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg1,zombieImg2,zombieImg3;
var bats,batsImg;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  bgImg1 = loadImage("assets/ciudad.jpeg");

  zombieImg1 = loadImage("assets/zombie.png");
  batsImg = loadAnimation("assets/bat/bat1.png");

  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1;
  

//creating the player sprite
 player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

    //creando sprites para representar la vida sobrante
    heart1 = createSprite(displayWidth-150,40,20,20)
    heart1.visible = false
     heart1.addImage("heart1",heart1Img)
     heart1.scale = 0.4
 
     heart2 = createSprite(displayWidth-100,40,20,20)
     heart2.visible = false
     heart2.addImage("heart2",heart2Img)
     heart2.scale = 0.4
 
     heart3 = createSprite(displayWidth-150,40,20,20)
     heart3.addImage("heart3",heart3Img)
     heart3.scale = 0.4

      //creando un grupo para los zombis
    zombieGroup = new Group();


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

//destruir al zombi cuando el jugador lo toca
if(zombieGroup.isTouching(player)){
 

  for(var i=0;i<zombieGroup.length;i++){     
       
   if(zombieGroup[i].isTouching(player)){
        zombieGroup[i].destroy()
        } 
  }
 }

spawnZombies();
spawnBats();

drawSprites();

}

function spawnZombies(){
  if(frameCount %60 === 0){
    zombie= createSprite(random(1000,1300),random(300,600),40,40);
    zombie.velocityX= -3;
    zombie.addImage(zombieImg1);
    zombie.scale= 0.15;
    zombie.setCollider("rectangle",0,0,100,120);
    zombie.debug = true;
    zombie.lifetime= 380;
  }
  
}

function spawnBats(){
  if(frameCount %70 === 0){
    bats= createSprite(random(1000,1300),random(50,200),40,40);
    bats.velocityX= -5;
    bats.addImage(batsImg);
    bats.scale= 0.15;
    bats.setCollider("rectangle",0,0,100,80);
    bats.debug = true;
    bats.lifetime= 380;
  }
  
}


 


