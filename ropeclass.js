class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope)
        
    }
    

    display(){
        fill("white")
        line(Bob.body.position.x,Bob.body.position.y,Rod.body.position.x,Rod.body.position.y)
    }

}