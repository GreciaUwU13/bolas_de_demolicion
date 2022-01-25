class Balon{
    constructor(x, y, width, height){
        var options = {
            retitution: 4,
            friction: 2,
            density: 2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);//se añade la forma al cuerpo
        this.width = width; //se establece que el ancho es width
        this.height = height; //se establece que el alto es height
        this.image = loadImage("esfera1.png");
        World.add(world, this.body); // se añade el cuerpo al mundo
    }

display(){
    var P = this.body.position; /*se crea esta variable que almacena la posición de nuestro 
    cuerpo para mayor comodidad al momento de registrarla, ya que así solo ponemos la P*/
    var angle = this.body.angle;
    push ();
    rotate(angle);
    translate(P.x, P.y);
    stroke("red");
    strokeWeight(4);
    ellipse(0, 0, this.width, this.height);//se añaden los parametros 
    ellipseMode(CENTER); //se situa en el centro
    fill("yellow");//relleno de cajas 
    scale(0.4);
    imageMode(CENTER);
	image(this.image, 0,0);
    pop();
}
};