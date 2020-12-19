class Dustbin{
    constructor(x,y,w,h){
        var Dustbin_options={
          isStatic:true
        }
            this.Dustbin=Bodies.rectangle(x,y,w,h,Dustbin_options);
            World.add(world,this.Dustbin);
            this.width=w;
            this.height=h;
    }

    display(){
      var pos = this.Dustbin.position;
      var angle = this.Dustbin.angle;
      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("green");
      rect(0,0,this.width,this.height);
      pop();
    }
}