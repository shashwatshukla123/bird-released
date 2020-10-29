class slingshot {
    constructor(bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10  
        }
        this.pointB=pointB
        this.chain1=Constraint.create(options)
        World.add(world,this.chain1)
    }
    fly(){
      this.chain1.bodyA=null
    }
    display(){
      if(this.chain1.bodyA){
        line(this.chain1.bodyA.position.x,this.chain1.bodyA.position.y,this.pointB.x,this.pointB.y);
      }
    
    }
}