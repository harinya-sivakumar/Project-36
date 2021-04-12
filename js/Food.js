class Food {
    constructor(){
       this.foodStock = 0;
       this.image = loadImage("Images/Milk.png");
    }
    display(){
       var x=100;
       var y=80;

       imageMode(CENTER);
       image(this.image, 720, 220, 70, 70);

       if(this.foodStock!=0){
           for(var i=0; i<this.foodStock; i=i+1){
               if(i%10==0){
                   x=80;
                   y=y+50;
               }
               image(this.image, x,y,50,50);
               x=x+30; 
           }
           
       }

       

    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(food){
        this.foodStock = food;
        
    }
    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock - 1;
        }
    }
}
