var road, roadImg;
var car, carImg;
var edges;

function preload(){
  roadImg = loadImage("Images/Road.png");
  carImg = loadImage("Images/Car.png");
}

function setup() {
  createCanvas(800,800);
  road = createSprite(400, 200, 50, 50);
  road.addImage("road", roadImg);
  road.scale = 0.478;
  road.velocityY = 5;

  car = createSprite(400, 700, 50, 50);
  car.addImage("carRunning", carImg);
  car.scale = 0.3;

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  
  if(road.y > 400 ){
    road.y = 300;
   }

  car.collide(edges);

  drawSprites();
}