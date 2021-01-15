var bg,bgImg;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var invisible;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    tomImg1 = loadImage("tomOne.png");
    tomImg2 = loadAnimation("tomTwo.png","tomThree.png");
    tomImg3 = loadImage("tomFour.png");
    jerryImg1 = loadImage("jerryOne.png");
    jerryImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3 = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(1000,800);
    bg.addImage(bgImg);

    tom = createSprite(800,600);
    tom.addImage(tomImg1);

    jerry = createSprite(200,600);
    jerry.addImage(jerryImg1);

    invisible = createSprite(500,610,1000,10)
    invisible.visible = false;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    tom.collide(jerry);
    tom.collide(invisible);
    jerry.collide(invisible);
    if(tom.x - jerry.x < (tom.width/2 + jerry.width/2)){
        tom.addImage(tomImg3);
        tom.changeImage(tomImg3);
        jerry.addImage(jerryImg3);
        jerry.changeImage(jerryImg3);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyPressed(LEFT_ARROW)){
      tom.velocityX = -2;
     tom.addAnimation("tommoving",tomImg2);
     tom.changeAnimation("tommoving");
     jerry.addAnimation("jerrymoving",jerryImg2);
     jerry.changeAnimation("jerrymoving");
  }

}
