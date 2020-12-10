class Slingshot{

    constructor(pointA,pointB){

        var options = {

            pointA: pointA,
            pointB: pointB,
            length: 5,
            stiffness: 0.5
        }
        this.pointB = pointB
         this.sling = Matter.Constraint.create(options)
         World.add(world,this.sling)

         this.sling1 = loadImage("sprites/sling1.png");
         this.sling2 = loadImage("sprites/sling2.png");
         this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){

        this.sling.pointA = null;
    }

    display(){

        image(this.sling1,300,5);
        image(this.sling2,275,5);
        

if(this.sling.pointA){
var pointA = this.sling.pointA.position

var pointB = this.pointB
push()
if(pointA.x<300)
strokeWeight(10);
else
strokeWeight(5);

stroke("#321708");
line(pointA.x-20,pointA.y,pointB.x-15,pointB.y+30)
line(pointA.x-20,pointA.y,pointB.x+20,pointB.y+30)
image(this.sling3,pointA.x-30,pointA.y-10,15,30);
pop()
}
    }
}