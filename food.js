class food{
    constructor(
        
    ){
       
       
       this.lastfed;
       
        this.img=loadImage("Milk.png");
    }
    
   
    
    
    deductFood(x) {
        if(x <= 0) {
            x = 0;
          } else {
            x--;
          }
        database.ref("/").update({
            Food: x
        })
      }
   


display(){
    
    var x=80,y=300;
    
    imageMode(CENTER);
    //image(this.img,720,420,70,70);

  if(foodS!=0){
      for (var i=0;i<foodS;i++){
   if(i%10===0){
       x=80;
       y=y+50;
   }
   image(this.img,x,y,50,50);
   x=x+30;
      }
  }




}
}