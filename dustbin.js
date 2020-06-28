class DustBinClass{
    constructor(x, y,angle) {
        var options = {
            'restitution':0.8,
            'friction':2.5,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y,10,50,angle,options);
        
        Matter.Body.setAngle (this.body.angle);

        this.width=10;
        this.height=50;

        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height,this.body.angle)
        
        var angle=this.body.angle;

        push();
        
            translate(this.body.position.x, this.body.position.y);

            angleMode(DEGREES);

            rotate(angle);
            rectMode(CENTER);

            fill("brown");
            rect(0, 0, this.width, this.height);

            pop();
      }
}