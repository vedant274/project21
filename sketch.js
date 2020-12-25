var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round((22,83));
  bullet = createSprite(50, 200, 20, 10);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
  bullet.shapeColor = ("black");
  bullet.velocityX = speed;
 
}

function draw() {
  background(255,255,255); 
  hasCollided();
  if(hasCollided(bullet, wall))
  {
      bullet.velocityX=0;
      var damage = Math.round(0.5 * weight * speed * speed /(thickness * thickness * thickness))
 
      if(damage >10)
      {
          wall.shapeColor = color(255,0,0);
          textSize(20);
          stroke("blue");
          fill("red");
          text("Bullet weight:",670,170);
          text(weight,800,170);
          text("Bullet Speed:",670,200 );
          text (speed, 800,200);
          text("Damage:",670,230);
          text(damage,800,230);
          text("Safety Grade: Not OK",670,260);
    }
    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
      textSize(20);
          stroke("blue");
          fill("red");
          text("Bullet weight:",670,170);
          text(weight,800,170);
          text("Bullet Speed:",670,200 );
          text (speed, 800,200);
          text("Damage:",670,230);
          text(damage,800,230);
          text("Safety Grade: OK",670,260);;
    }
  }
  drawSprites();
}

function hasCollided()
{
   bulletRightEdge=bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
       return true
   }
   return false;
}