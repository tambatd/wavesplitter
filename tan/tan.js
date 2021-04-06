var x = 0;
var y = 0;

function setup() {
  createCanvas(500,500);
  frameRate(60);
  angleMode(RADIANS);

    background(0);
//Grid Setup
  /*
  for (i = 0; i < 2000; i=i+100){
    stroke(color(random(255), random(204), random(255))); 
    line(0, i, 2000, i);
    stroke(color(random(255), random(204), random(255))); 
    line(i, 0, i, 2000);
    }
*/
}


function draw() {
  translate(width*.5,height*.5);
  //background(255);
  //for (i = 0; i < 50; i++){
    
    noStroke();
    fill(color(random(255), random(204), random(255))); 
    //circle((tan(x/40)*y), (sin(y/40)*x), 10);
    fill(color(random(255), random(204), random(255))); 
    //circle((-atan(x/40)*y), (-cos(y/40)*x), 10);
    
    //circle((-tan(x/40)*y), (-sin(y/40)*x), 10);
        stroke(color(random(255), random(204), random(255))); 
    line((-atan(x/40)*y),(sin(x/40)*y),(-cos(x/40)*y),(atan(x/40)*y));

    //line((-tan(x/40)*y),(sin(x/40)*y),(-cos(x/40)*y),(tan(x/40)*y));
    //line((cos(x/40)*y),(-cos(x/40)*y),(cos(x/40)*y),(cos(x/40)*y));
    //quad((cos(x/40)*y),(cos(x/40)*y),(tan(x/40)*y),(arc(x/40)*y),(-cos(x/40)*y),(-cos(x/40)*y),(cos(x/40)*y),(cos(x/40)*y));
    //quad((atan(x/40)*y),(cos(x/40)*y),(tan(x/40)*y),(-arc(x/40)*y),(-cos(x/40)*y),(-cos(x/40)*y),(cos(x/40)*y),(cos(x/40)*y));

    x+=0.5;
    y+=0.5;
//}
}
