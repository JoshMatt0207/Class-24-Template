class Boat{
    constructor(x,y,w,h,boatPos){
        //this.x=x
        //this.y=y
        this.w=w
        this.h=h
        this.boatPos = boatPos

        var opt={
            isStatic:true
        }
        this.boat=Bodies.rectangle(x,y,w,h,opt)
        World.add(world,this.boat)
        console.log(this.boat);
        this.boatimg=loadImage("assets/boat.png")
    }
display(){
    image(this.boatimg,this.boat.position.x,this.boat.position.y,this.w,this.h)
   

}
}