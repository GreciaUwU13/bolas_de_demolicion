class Ground {
    constructor (x, y, width, height){
        var options = {
            isStatic: true
        }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width; 
       this.height = height;
       World.add(world, this.body);//se añade al mundo
    }
    display(){
       //se muestran
       var P = this.body.position; 
       rectMode(CENTER); //se situa en el centro
       fill("black");
       rect(P.x, P.y, this.width, this.height);//se añaden los parametros 
    }
};