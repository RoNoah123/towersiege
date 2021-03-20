const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(390, 300, 250, 10);
    platform2 = new Ground(700, 200, 200, 10);
    Block1 = new Box(300, 275, 30, 40);
    Block2 = new Box(330, 275, 30, 40);
    Block3 = new Box(360, 275, 30, 40);
    Block4 = new Box(390, 275, 30, 40);
    Block5 = new Box(420, 275, 30, 40);
    Block6 = new Box(450, 275, 30, 40);
    Block7 = new Box(480, 275, 30, 40);
    Block8 = new Box(330, 235, 30, 40);
    Block9 = new Box(360, 235, 30, 40);
    Block10 = new Box(390, 235, 30, 40);
    Block11 = new Box(420, 235, 30, 40);
    Block12 = new Box(450, 235, 30, 40);
    Block13 = new Box(360, 195, 30, 40);
    Block14 = new Box(390, 195, 30, 40);
    Block15 = new Box(420, 195, 30, 40);
    Block16 = new Box(390, 155, 30, 40);

    Block25 = new Box(640, 175, 30, 40);
    Block17 = new Box(670, 175, 30, 40);
    Block18 = new Box(700, 175, 30, 40);
    Block19 = new Box(730, 175, 30, 40);
    Block20 = new Box(760, 175, 30, 40);
    Block21 = new Box(670, 135, 30, 40);
    Block22 = new Box(700, 135, 30, 40);
    Block23 = new Box(730, 135, 30, 40);
    Block24 = new Box(700, 95, 30, 40);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    platform1.display();
    platform2.display();
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();
    Block17.display();
    Block18.display();
    Block19.display();
    Block20.display();
    Block21.display();
    Block22.display();
    Block23.display();
    Block24.display();
    Block25.display();
    bird.display();
    slingshot.display();
  

}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}