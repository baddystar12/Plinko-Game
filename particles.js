class Particles {
    constructor(x,y,radius){
        var particles_options ={
            restitution: 0.8,
            isStatic:false
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y, radius, particles_options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}