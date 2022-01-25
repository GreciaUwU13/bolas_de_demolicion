class Soporte {
    constructor (x, y, width, height){
        var options = {
            //se simulan las leyes de Newton
            isStatic: true,
        }
       this.body = Bodies.rectangle(x, y, width, height, options); //añades la figura al cuerpo junto con las opciones
       this.width = width; 
       this.height = height;
       World.add(world, this.body);//se añade al mundo
    }
    display(){
       //se muestran
       var P = this.body.position; 
       //var angle = this.body.angle;
       push();
       //translate (P.x, P.y);
       //rotate (angle);
       fill(19, 141, 117);//relleno de cajas 
       stroke(130, 224, 170);//color del borde
       strokeWeight(3);//grosor del borde, va sin comillas
       rect(P.x, P.y, this.width, this.height);//se añaden los parametros 
       rectMode(CENTER); //se situa en el centro
       pop();
    }
};