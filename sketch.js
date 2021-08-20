/*var gameState = "opening";
var logo;
var change;
var change1;
var bg;
var claire;

var bullet;
var platform;;

var platform2;

var zombie;
var bulletGrp
var zombieGrp
var score=0;
var timer=1100;
var magazine=55;
var resetButton;*/
var about
var gamestate="wait"
var player,invisibleground;

function preload() {
    nextimg = loadImage("change.gif");
    logoimg=loadImage("openingimage.gif")
    aboutimg=loadImage("about.png")
    bgaboutimg=loadImage("bgabout1.jpg")
    backimg=loadImage("back.gif")
    level1img=loadImage("level1.png")
    playerimg=loadImage("girlReady.gif")
    playerrunning=loadImage("girlRunning.gif")
    playerback=loadImage("girlReverse.gif")
                            
}

function setup() {
  
    createCanvas(windowWidth,windowHeight)


    aboutbackground=createSprite(windowWidth/2,windowHeight/2,width+100,height)
    aboutbackground.addImage(bgaboutimg)
    aboutbackground.visible=false
 // aboutbackground.scale=1.25


 invisibleground=createSprite(windowWidth/2,windowHeight-30,windowWidth,10)


 level1=createSprite(windowWidth/2,70)
    level1.addImage(level1img)
      level1.scale=1.15
    level1.visible=false
    level1.velocityX=-1
    level1.x=width/2


    next = createSprite(width-100,height-80,20,20);
    next.addImage(nextimg)
   next.scale=0.5
    
   
   back = createSprite(width-80,80,20,20);
   back.addImage(backimg)
  back.scale=0.5

    platform2=createSprite(68,400,1000,5)
    platform=createSprite(200,280,1000,5)

    platform.visible=false;
    platform2.visible=false;
    
    logo = createSprite(width/2,height/2);
    logo.addImage(logoimg)
    logo.scale= 2

    about=createSprite(80,80,20,20)
    about.addImage(aboutimg)

    player=createSprite(100,height-150)
    player.addImage(playerimg)
    player.scale=0.85
    player.visible=false
    

    about.visible=false
    logo.visible=false
    next.visible=false
    back.visible=false
    aboutbackground.visible=false
   // bulletGrp=createGroup();
 //zombieGrp=createGroup()
}

function draw() {


   
    if (gamestate==="wait"){
        background(0)
        about.visible=true
        logo.visible=true
        next.visible=true
        
    }
    else if (gamestate==="level1"){
        background(0)
        about.visible=false
        logo.visible=false
        next.visible=false
        aboutbackground.visible=false
        back.visible=true

        level1.visible=true

        if(level1.x<level1.width/4){
            level1.x=level1.width/2
        }
    
}

    if( mousePressedOver(about)){
        gamestate="info"
        
        /*aboutbackground.visible=true
        about.visible=false
        logo.visible=false
        next.visible=true*/
    }

    if( mousePressedOver(next)){
        gamestate="next"}

        if( mousePressedOver(back)){
            gamestate="back"}
   
    drawSprites();

    if (gamestate==="info"){
        aboutbackground.visible=true
            about.visible=false
            logo.visible=false
            next.visible=true
            back.visible=true
            fill("yellow");
     textSize(50);
     stroke(0)
     strokeWeight(5)
     
     text("Hi! You have come as a Saviour to US",width/4,90);
     
     textSize(35);
     stroke(0)
     strokeWeight(5)
     text("Follow the below  mentioned instructions to HELP US from these Zombies ...",100,150);
     

     fill("blue");
     textSize(35);
     text("-Use 'Right arrow' to run forward.",200,250);
     textSize(35);
     text("-Use 'Left arrow' to run backward.",200,300);
     textSize(35);
     text("-Use 'Up/Down' to move UP or Down",200,350);

     textSize(35);
     text("-Use 'Space' to shoot ",200,400);
     
     
     textSize(50);
     fill("red");
     stroke(0)
     strokeWeight(5)
     text("Don't let zombies enter the city.",200,200);


        }


        if( mousePressedOver(back)){
            gamestate="wait"
            background(0)
            about.visible=true
            logo.visible=true
            next.visible=true
            aboutbackground.visible=false
            back.visible=false
        }



        if( mousePressedOver(next)){
            gamestate="level1"
            background(0)
            about.visible=false
            logo.visible=false
            next.visible=false
            aboutbackground.visible=false
            back.visible=true

            level1.visible=true
            player.visible=true

        }  
        if (keyDown("RIGHT_ARROW")){
    
            player.x=player.x+2
            player.addImage(playerrunning)
        }

        if (keyDown("LEFT_ARROW")){
    
            player.x=player.x-2
            player.addImage(playerback)

            
        }

        if (keyDown("space")){
            player.velocityY=-8
            player.addImage(playerback)
            //player.velocityY= player.velocityY +0.8
        }
        
        


        if( mousePressedOver(back)){
            gamestate="wait"
            background(0)
            about.visible=true
            logo.visible=true
            next.visible=true
            aboutbackground.visible=false
            back.visible=false
            level1.visible=false
            player.visible=false
        }
}


