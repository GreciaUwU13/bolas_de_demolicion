class Cajas {
    constructor (x, y, width, height){
        var options = {
            //se simulan las leyes de Newton
            restitution: 0.7, //restablecimiento de la caja 0.8
            friction: 20, //se desplaza 
            density: 0.04, //transparencia

        }
       this.body = Bodies.rectangle(x, y, width, height, options); //añades la figura al cuerpo
       this.width = width; 
       this.height = height;
       //this.Visiblity = 255;
       //this.image = loadImage("bloq.png");
       World.add(world, this.body);//se añade al mundo
    }
    display(){
       //se muestran
       var P = this.body.position; 
       var angle = this.body.angle;
       push();
       translate (P.x, P.y);
       rotate (angle);
       fill(19, 141, 117);//relleno de cajas 52, 73, 94
       stroke(130, 224, 170);//color del borde 19, 141, 117
       strokeWeight(5);//grosor del borde, va sin comillas
       rect(0, 0, this.width, this.height);//se añaden los parametros 
       rectMode(CENTER); //se situa en el centro
       /*scale(0.5); 
       imageMode (CENTER);
       image(this.image, 0, 0);*/
       pop();
    }
    /*score(){
        if(this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
    }*/

};