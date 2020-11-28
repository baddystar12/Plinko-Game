class Division {
    constructor(x,y,width,height){
        var division_options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height, division_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(position.x, position.y, this.width, this.height);
    }
}
