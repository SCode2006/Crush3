class Stone{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var options = {
            isStatic: false
            
        };
        this.body = Bodies.circle(x,y,80,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,80);
    }
}