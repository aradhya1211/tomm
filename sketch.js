var tom_Running, tom1Image,tom2Image,tom3Image,tom4Image , tomFinal ;
var jerry_Teasing , jerry1Image, jerry2Image ,jerry3Image, jerry4Image  ;  
var background , backgroundImage;

function preload() {

jerry_Teasing = loadAnimation("jerryTwo.png","jerryThree.png");
jerry1Image = loadImage("jerryOne.png");
jerry2Image = loadImage("jerryTwo.png");
jerry3Image = loadImage("jerryThree.png");
jerry4Image = loadImage("jerryFour.png");

tom_Running = loadAnimation("tomTwo.png","tomThree.png");
tomFinal = loadImage("tomFour.png");
tom1Image = loadImage("tomOne.png");
tom2Image = loadImage("tomTwo.png");
tom3Image = loadImage("tomThree.png");
tom4Image = loadImage("tomFour.png");

backgroundImage = loadImage("garden.png");
 }
function setup(){
  createCanvas(800,800);
  
  background = createSprite(400,400);
  background.addImage(backgroundImage);
  background.scale = 1;

  tom = createSprite(600,650);
  tom.addImage(tom1Image);
  tom.scale = 0.1;

  jerry = createSprite(200,650);
  jerry.addImage(jerry1Image);
  jerry.scale = 0.1 ; 


}

function draw() {


    //Write condition here to evalute if tom and jerry collide
 if(tom.x - jerry.x < (tom.width - jerry.width)/2){
     tom.setVelocityX(0);
     tom.addAnimation("tomFinal",tom4Image);
     tom.changeAnimation("tomFinal");
     
    
      }


    drawSprites();
    stroke("black");
    text(mouseX + ',' + mouseY,400,450);
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    jerry.addAnimation("jerry_Teasing",jerry2Image,jerry3Image);
    jerry.changeAnimation("jerry_Teasing");
    tom.addAnimation("tom_Running",tom2Image ,tom3Image);
    tom.changeAnimation("tom_Running");
}

}
