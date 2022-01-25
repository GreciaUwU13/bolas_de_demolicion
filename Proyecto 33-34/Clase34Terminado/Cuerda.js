class Cuerda {
   constructor(bodyA, pointB){ 
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        lenght:250,
    };

    this.pointB = pointB;
    this.cuerda = Constraint.create(options);
    World.add(world,this.cuerda);
}

display(){
        var pointA = this.cuerda.bodyA;
        var pointB = this.pointB;
        push();
        stroke("red"); //48,22,8
        strokeWeight(3);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
}
