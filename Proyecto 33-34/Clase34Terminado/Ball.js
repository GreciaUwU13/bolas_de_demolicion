class Ball {
    constructor (x, y, width, angle){
    var options = {
        density:1,
        frictionAir: 0.005
    };
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);
}

display(){
    var p = this.body.position;
    var angle = this.body.angle;
    push();
    translate(p.x, p.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("grey");
    ellipse(0,0, this.width, this.height);
    pop();
}
}