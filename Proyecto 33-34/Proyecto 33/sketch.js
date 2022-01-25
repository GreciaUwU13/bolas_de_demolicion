/*Intenta derribar esta torre...si es que puedes. Aunque las condiciones aparenten ser perfectas aveces hay cosas 
en las que no devemos de confiar tanto. el trabajo siempre es mejor cuando se hace en equipo*/
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, piso, caja, bg;
var caja1, caja2, caja3, caja4, soport1, soport2;
var caja6, caja7, caja8, caja9, caja10;
var caja11, caja12, caja13, caja14;
var caja15, caja16, caja17, caja18, caja19, caja20;
var cuerda, cuerda1, cuerda2;
var balon, balon1, balon2;
var score = 0;

function preload(){
    bg = loadImage("ciudad.jpg");
}

function setup(){
    createCanvas(1300, 700); //windowWidth,windowHeight
    engine = Engine.create();
    world = engine.world;

    piso = new Ground(650, 670, 1300, 50);
    //primer piso
    caja = new Cajas(900, 400, 50, 50);
    caja1 = new Cajas(880, 400, 50, 50);
    caja2 = new Cajas(935, 400, 50, 50);
    caja3 = new Cajas(900, 400, 200, 30);
    //segundo piso
    caja7 = new Cajas(860, 350, 50, 50);
    caja8 = new Cajas(800, 350, 50, 50);
    caja9 = new Cajas(1000, 350, 50, 50);
    caja10 = new Cajas(935, 350, 50, 50); 
    caja6 = new Cajas(900, 350, 250, 30);
    //tercer piso
    caja19 = new Cajas(900, 250, 250, 30);
    caja15 = new Cajas(860, 250, 50, 50);
    caja16 = new Cajas(800, 250, 50, 50);
    caja17 = new Cajas(1000, 250, 50, 50);
    caja18 = new Cajas(935, 250, 50, 50); 
    //cuarto piso
    caja14 = new Cajas(900, 170, 200, 30);
    caja11 = new Cajas(900, 200, 50, 50);
    caja12 = new Cajas(830, 200, 50, 50);
    caja13 = new Cajas(940, 200, 50, 50);
    //base superior
    caja4 = new Cajas(900, 250, 350, 30);
    //cajas de soporte
    soport1 = new Soporte(900, 570, 60, 50);
    soport2 = new Soporte(900, 620, 60, 50);
    //última caja
    caja20 = new Cajas(900,150, 60, 50);

    balon = new Balon(100, 500, 50, 50);
    cuerda = new Cuerda(balon.body,{x:80,y:50}); /*se escribe diferente ya que la cuerda va
    a estar unida a la bola de demolición*/
    balon1 = new Balon(130, 300, 50, 50);
    cuerda1 = new Cuerda1(balon1.body,{x:330,y:50}); 

    balon2 = new Balon(390, 150, 50, 50);
    cuerda2 = new Cuerda2(balon2.body,{x:550,y:50}); 
}

function draw(){
    background(bg);//180
    Engine.update(engine);

    textSize(45);
    fill("white");
    text("Score  " + score, width-200, 60);
    
    piso.display();
    caja.display();
    caja1.display();
    caja2.display();
    caja3.display();

    caja4.display();

    soport1.display();
    soport2.display();

    caja6.display();

    caja7.display();
    caja8.display();
    caja9.display();
    caja10.display();

    caja11.display();
    caja12.display();
    caja13.display();
    caja14.display();

    caja15.display();
    caja16.display();
    caja17.display();
    caja18.display();
    caja19.display();
    caja20.display();

    balon.display();
    cuerda.display();

    balon1.display();
    cuerda1.display();

    balon2.display();
    cuerda2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(balon.body,{x:mouseX,y:mouseY}); /*con esta instrucción podemos mover la pelota
    con nuestro mouse*/
    Matter.Body.setPosition(balon1.body,{x:mouseX,y:mouseY});
    Matter.Body.setPosition(balon2.body,{x:mouseX,y:mouseY});
}/*
function mouseDragged1(){
    Matter.Body.setPosition(balon1.body,{x:mouseX,y:mouseY});
}
function mouseDragged2(){
    Matter.Body.setPosition(balon2.body,{x:mouseX,y:mouseY});
}*/

