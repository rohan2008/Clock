function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  let h = hour();
text('Current hour:\n' + h, 5, 50);

let m = minute();
text('Current minute: \n' + m, 5, 50);

let s = second();
text('Current second: \n' + s, 5, 50);
}

sAngle = map(s,0,60,0,360);
hAngle = map(h,0,60,0,360);
mAngle = map(m,0,60,0,360);

stroke(255, 0, 0);
strokeWeight(7);
line(0,0,100,0);

push();
rotate(sAngle);
strokeWeight(7);
line(0,0,100,0);
pop();