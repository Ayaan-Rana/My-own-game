
var sunBody,sun;

var easyButton,mediumButton,hardButton;
var easyButtonI,mediumButtonI,hardButtonI;

var gameState="select"

var easyLVL1,easyLVL2,easyLVL3,easyLVL4,easyLVL5;
var mediumLVL1,mediumLVL2,mediumLVL3,mediumLVL4,mediumLVL5;
var sunImage;
var bg,bg2,bg2I,bg3,bg4,winSCRN,continue2;
var morty;

var eggI,egg2I,eggCI;

var ans,screenI,screen2I

function preload(){
    easyButtonI=loadImage("Images/EasyButton.png")
    mediumButtonI=loadImage("Images/MediumImage.png")
    hardButtonI=loadImage("Images/HardButton.png")
    sunImage=loadImage("Images/Sun.png");
    bgI= loadImage("Images/Barn.jpg")
    bg2I=loadImage("Images/Chicken.jpg")
    eggI=loadImage("Images/Egg.png")
    egg2I=loadImage("Images/CrackedEgg.png")
    eggCI=loadImage("Images/EggC.png")
    bg3=loadImage("Images/PartyBackground.png")
    morty=loadImage("Images/Morty.png")
    screenI=loadImage("Images/victoryScreen.jpg")
    screen2I=loadImage("Images/mediumWin.jpg")
    cn2=loadImage("Images/quitButton.png")
    bg4=loadImage("Images/Trivia.png")
    winSCRN=loadImage("Images/Victory2.jpg")
    continue2=loadImage("Images/Continue2.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight-4);
    background("white")
    
    easyButton=createSprite(width/2,300)
    easyButton.addImage(easyButtonI)
    easyButton.scale=(0.3)

    mediumButton=createSprite(width/2,450)
    mediumButton.addImage(mediumButtonI)
    mediumButton.scale=(0.3)

    hardButton=createSprite(width/2,600)
    hardButton.addImage(hardButtonI)
    hardButton.scale=(0.3);

    easyLVL1=createSprite(150,200,50,50);
    easyLVL1.visible= false;

    boy=createSprite(250,400,20,20)
    screen=createSprite(800,600,450,450)
    screen.addImage(screenI)
    continueButton=createSprite(800,687,170,50)
    restartButton=createSprite(800,735,130,35)
    boy.visible=false;
    screen.visible=false;
    continueButton.visible=false;
    restartButton.visible=false;

    screen2=createSprite(600,300,400,400)
    screen2.shapeColor="white";
    screen2.addImage(screen2I);
    screen2.scale=0.6
    continueButton2=createSprite(100,530,40,20)
    screen2.visible=false;
    continueButton2.visible=false;

    
    sun=createSprite(100,150,50,50);
       sun.addImage(sunImage);
       sun.scale=0.4;
       sun.visible= false;
    
    egg1=createSprite(135,600,20,20)
    egg1.addImage(eggI)
    egg1.scale=0.2;
    egg1.visible=false;

    egg2=createSprite(350,600,20,20)
    egg2.addImage(eggI)
    egg2.scale=0.2;
    egg2.visible=false;

    egg3=createSprite(550,600,20,20)
    egg3.addImage(eggI)
    egg3.scale=0.2;
    egg3.visible=false;

    egg4=createSprite(750,600,20,20)
    egg4.addImage(eggI)
    egg4.scale=0.2;
    egg4.visible=false;

    egg5=createSprite(950,600,20,20)
    egg5.addImage(eggI)
    egg5.scale=0.2;
    egg5.visible=false;

    egg6=createSprite(150,370,20,20)
    egg6.visible=false;
    egg7=createSprite(400,370,20,20)
    egg7.visible=false;
    egg8=createSprite(600,390,20,20)
    egg8.visible=false;
    egg9=createSprite(800,370,20,20)
    egg9.visible=false;
    egg10=createSprite(1000,370,20,20)
    egg10.visible=false;

        congrats=createSprite(600,400,20,20)
        congrats.scale=2
        congrats.addImage(winSCRN)
        congrats.visible=false;

        continueButton3=createSprite(600,550,20,20)
        continueButton3.addImage(continue2)
        continueButton3.scale=0.5
        continueButton3.visible=false;

    input= createInput();
    input.position(300,200)
    
    hardInput=createButton("Submit")
    hardInput.position(300,300);

    
    
    input.hide();
    hardInput.hide();
    

}

function draw(){
    background(255);
    textSize(60)
    

    // if(gameState ==="select"){
    //     input.hide();
    //     hardInput.hide();
    // }


    
   
    //select page
    if( gameState ==="select"){

        fill("black")
        text("Quiz Game",width/2-130,70);

        congrats.visible=false;
        continueButton3.visible=false;
        easyButton.visible=true;
        mediumButton.visible=true;
        hardButton.visible=true;
        boy.visible=false;
        screen.visible=false;
        continueButton.visible=false;
        restartButton.visible=false;
        sun.visible= false;
        screen2.visible=false;
        continueButton2.visible=false;

        if(mousePressedOver(easyButton)){
            gameState="easy"
        }
        
        if(mousePressedOver(mediumButton) ){
            gameState="medium"
        }

        if(mousePressedOver(hardButton) ){
            gameState="hard"
        }

    }

    //gamestate easy
    if(gameState==="easy"){
        background(bgI);
        fill("black")
        textSize(30);
        stroke("red")
        text("Wake up the child in the barn",300,30);

        easyButton.visible=false;
        mediumButton.visible=false;
        hardButton.visible=false;
        sun.visible= true;

        boy.addImage(morty)
        boy.scale=0.25
       
       

    if(keyDown(RIGHT_ARROW)){
        sun.x= sun.x+10;
    }

    

if(mousePressedOver(continueButton)){
    gameState="select"
}

if(mousePressedOver(restartButton)){
    gameState="easy"
}
    }


    
//gamestate medium
if(gameState==="medium"){
    background(bg2I)
    mediumButton.visible=false;
    easyButton.visible=false;
    hardButton.visible=false; 

    fill("black")

    fill("black")
    text("Which one has the chicken inside?",250,400)

    egg1.visible=true;
    egg2.visible=true;
    egg3.visible=true;
    egg4.visible=true;
    egg5.visible=true;

    if(mousePressedOver(egg1)){
        egg1.addImage(egg2I)
        egg1.scale=0.1;
    }
    if(mousePressedOver(egg2)){
        egg2.addImage(egg2I)
        egg2.scale=0.1;
    }
    if(mousePressedOver(egg4)){
        egg4.addImage(egg2I)
        egg4.scale=0.1;
    }
    if(mousePressedOver(egg5)){
        egg5.addImage(egg2I)
        egg5.scale=0.1;
    }
    if(mousePressedOver(egg3) && gameState==="medium"){
        egg3.addImage(eggCI)
        egg3.scale=0.3;
        screen2.visible=true;
        continueButton2.visible=true;
        continueButton2.addImage(cn2)
        egg1.destroy();
        egg2.destroy();
        egg3.destroy();
        egg4.destroy();
        egg5.destroy();
        egg6.visible=true;
        egg6.addImage(egg2I)
        egg6.scale=0.1;
        egg7.visible=true;
        egg7.addImage(egg2I)
        egg7.scale=0.1;
        egg8.visible=true;
        egg8.addImage(eggCI)
        egg8.scale=0.4;
        egg9.visible=true;
        egg9.addImage(egg2I)
        egg9.scale=0.1;
        egg10.visible=true;
        egg10.addImage(egg2I)
        egg10.scale=0.1;
        
    }
    if(mousePressedOver(continueButton2)){
        gameState="select"
        egg1.visible=false;
        egg2.visible=false;
        egg3.visible=false;
        egg4.visible=false;
        egg5.visible=false;
        egg6.visible=false
        egg7.visible=false;
        egg8.visible=false;
        egg9.visible=false;
        egg10.visible=false;
    }
    
}
    
   //gamestate hard
    if(gameState==="hard"){
        background(bg4)
        easyButton.visible=false;
        mediumButton.visible=false;
        hardButton.visible=false;

        fill("white")
        textSize(19)
        text("I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",200,150)
        
        
        input.show();
        hardInput.show();

    hardInput.mousePressed(function(){
         ans= input.value();

        
    })

    if(ans==="map"){
            
        
        gameState="win"
       
    }

    if(ans==="Map"){
            
        
        gameState="win"
       
    }

       
    }

   

    
    drawSprites();

    

    if(gameState==="win"){
        background(bg3);
        input.hide();
        hardInput.hide();
       
        
        congrats.visible=true;
        continueButton3.visible=true;

        if(mousePressedOver(continueButton3) && gameState==="win"){
            gameState="select"
            congrats.visible=false;
            continueButton3.visible=false;
        }
        if(mousePressedOver(continueButton3) && gameState==="hard"){
            gameState="select"
            congrats.visible=false;
            continueButton3.visible=false;
        }
    }

    if(sun.x>700 && gameState==="easy"){
        boy.visible=true;
        screen.visible=true
        // restartButton.visible=true
        // continueButton.visible=true;
    }
    

    

    
}