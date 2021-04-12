var dog,sadDog,happyDog;
var feedDog, addFood;
var milk = 0;
var foodObj;
var feed, addFood;

var database;

var foodS;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food();

  
  feed = createButton("Feed the dog ");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);


  database.ref('food').on("value",function(data){
      foodS = data.val();
      foodObj.updateFoodStock(foodS);
  });
  

}

function draw() {
  background(46,139,87);

  foodObj.display();
  
  
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
  foodS++;

  database.ref('/').update({
    food:foodS
  })
}

function feedDog(){
  dog.addImage(happyDog);

  

  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }

  database.ref('/').update({
    food:foodS-1
  })
}