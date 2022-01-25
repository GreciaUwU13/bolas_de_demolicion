class Cuerda1{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA, //se define lo que es bodyA
            pointB: pointB, //y se usan como opciones que nos servirán más adelante 
            stiffnes: 2.2, //rigidez de la cuerda
            lenght: 250, //largo de la cuerda
        }
        this.pointB = pointB //se le dice a la computadora que el punto b  es el punto b
        this.cuerda = Constraint.create(options); //se crean las condiciones para la cuerda y se añaden las opciones
        //this.image = loadImage("cadena.png");
        World.add(world, this.cuerda); //añado la cuerda al mundo
    }
    attach(body) {
        this.cuerda.bodyA = body;
      }
    
      fly() {
        this.cuerda.bodyA = null;
      }

    display(){
        if(this.cuerda.bodyA){
        var pointA = this.cuerda.bodyA.position; //se usa un nuevo punto que junte el cuerpo A y la cuerda
        var pointB = this.pointB; //el punto b sigue siendo el mismo
        push ();
        stroke("gray"); //añade color 48,22,8
        strokeWeight(15); //se define el ancho de la cuerda
        line(pointB.x, pointB.y, pointA.x, pointA.y); /*se crea la line con las condiciones usando las 
        variables previamente creadas*/
       /* ImageMode(CENTER);
        image(this.image, 0, 0, this.cuerda, this.bodyA);*/
        pop ();
    }}
};