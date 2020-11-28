class Plinko {
    constructor(x,y,radius){
        var plinko_options ={
            isStatic:true,
            density:1,
            friction:0.5
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y, this.radius/2, plinko_options);
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(position.x, position.y,this.radius, this.radius);
    }
}
