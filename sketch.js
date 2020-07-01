var wall, car;

var speed,weight;

var deformation;

function setup() {
  createCanvas(2000,800);
  wall = createSprite(1300, 400, 60, height/2);
  //wall.debug = true;
  car = createSprite(100,400,80,40);
  car.shapeColor = "green";
  //car.debug = true;

  speed = random(55,90);  
  weight = random(400,1500);

  car.velocityX = speed;

  wall.shapeColor = 80,80,80; 
}

function draw() {
  background(100,50,20);  
  
  if(wall.x - car.x < 100){
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)*22500;
  }

 

  if(deformation <100){
    car.shapeColor = "green";
  }

  if(deformation >100){
    car.shapeColor = "red";
  }
  drawSprites();
}

