let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
let brick_x,brick_y,brick_width,brick_height;
var brick_visible=true;
function setup() {
  createCanvas(400, 400);
  background("black");
  paddle_width = 100;
  paddle_x = (width / 2) - (paddle_width / 2);
  // console.log(width)
  paddle_y = height - 20;
  paddle_height = 15;
  
  ball_diameter = 20;
  ball_dx =1;
  ball_dy = 2;
  paddle_dx = 3;
  ball_x = (width / 2) - (ball_diameter / 2);
  ball_y = (height / 20) - (ball_diameter / 2);
  brick_width = 30;
  brick_height = 20;
  spawn_brick()
  
}

function spawn_brick(){
    brick_x = Math.floor(Math.random() * (width - brick_width));
    brick_y = Math.floor(Math.random() * (height - brick_height));
    brick_visible = true;
}

function draw () {
  background("black");
  if (brick_visible) {
        if (ball_x > brick_x - brick_width/2 && ball_x < brick_x + brick_width && ball_y > brick_y - brick_height/2 && ball_y < brick_y + brick_height) {
            brick_visible = false;
            spawn_brick();
        }
    }
  
  if(ball_x + (ball_diameter / 2) > width || ball_x - (ball_diameter / 2) < 0) {
    ball_dx = -ball_dx;
  }
  if(ball_x > paddle_x  && ball_x < paddle_x + paddle_width && ball_y + (ball_diameter / 2) > height-paddle_height) 
     {
      ball_dy = -ball_dy;    
    }
  if (ball_y > height){
    ball_x = width/2
    ball_y = height/20
  }
   if(ball_y - (ball_diameter / 2) < 0) {
    ball_dy = -ball_dy;
  }

  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
  
  if (keyIsDown(LEFT_ARROW)) {
    paddle_x = paddle_x - paddle_dx;
  }
    if (keyIsDown(RIGHT_ARROW)) {
    paddle_x = paddle_x + paddle_dx;
  }
 // if((ball_x<paddle_x+paddle_width) && 
 //    (ball_x>paddle_x) && 
 //    (ball_y<paddle_y+(paddle_height / 2))  && 
 //    (ball_y>paddle_y)){
 //   ball_dy=-ball_dy;
 // }
  
 //   if((ball_x<paddle_x+paddle_width) && 
 //    (ball_x>paddle_x) && 
 //   ball_y + (ball_diameter/2) < (height-25)){
 //   ball_dy=-ball_dy;
 // }
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  if (brick_visible){
    rect(brick_x, brick_y, brick_width, brick_height);   
  }
  
}