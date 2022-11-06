let playButton = document.getElementById('bPlayPause');
let playButtonImage = document.getElementById('imgPlayPause');

let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;

let audioPlaying = false;
let currentTime = 0;

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');

let speed = 2.3;

let animation;

let audio = new Audio("assets/soundscape.mp3");

class Bubble{
  constructor(x, y, velX, velY){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

  changeVel(myVal){
    this.velX *= myVal;
    this.velY *= myVal;
  }

  move(){
    if(this.x >= width-0.3*height || this.x <= 0){
      this.velX = -1 * this.velX;
    }
    if(this.y >= 0.7*height || this.y <= 0){
      this.velY = -1 * this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
  }
}

let bubble1 = new Bubble(randInt(0,width-0.3*height),randInt(0,0.7*height),speed,speed);
let bubble2 = new Bubble(randInt(0,width-0.3*height),randInt(0,0.7*height),speed,-1*speed);
let bubble3 = new Bubble(randInt(0,width-0.3*height),randInt(0,0.7*height),-1*speed,-1*speed);

window.onload = function () {
  c2.style.visibility = "hidden";
  c3.style.visibility = "hidden";

  playButton.addEventListener("click", function(){
    if(!audioPlaying){
      audioPlaying = true;
      playButtonImage.src = "assets/pause.png";
      audio.play();
      c1.style.visibility = "visible";
      animation = setInterval(displayCharacters, 10);
    }else{
      audioPlaying = false;
      playButtonImage.src = "assets/play.png";
      audio.pause();
      clearInterval(animation);
    }
  });
}

function displayCharacters(){
  currentTime += 10;

  bubble1.move();
  bubble2.move();
  bubble3.move();

  c1.style.left = bubble1.x +'px';
  c1.style.top = bubble1.y +'px';

  c2.style.left = bubble2.x +'px';
  c2.style.top = bubble2.y +'px';

  c3.style.left = bubble3.x +'px';
  c3.style.top = bubble3.y +'px';

  if(currentTime == 12500){
    c2.style.visibility = "visible";
  }

  if(currentTime == 50000){
    c2.style.visibility = "hidden";
  }

  if(currentTime == 78000){
    c3.style.visibility = "visible";
  }

  if(currentTime == 88500){
    c3.style.visibility = "hidden";
  }

  if(currentTime == 104500){
    c3.src = "assets/davidOff.png";
    c3.style.visibility = "visible";
  }

  if(currentTime == 130000){
    c2.style.visibility = "visible";
  }

  if(currentTime == 136000){
    bubble1.changeVel(2);
    bubble2.changeVel(2);
    bubble3.changeVel(2);
  }

  if(currentTime == 142000){
    bubble1.changeVel(2);
    bubble2.changeVel(2);
    bubble3.changeVel(2);
  }

  if(currentTime == 143000){
    bubble1.changeVel(2);
    bubble2.changeVel(2);
    bubble3.changeVel(2);
  }

  if(currentTime == 145000){
    bubble1.changeVel(2);
    bubble2.changeVel(2);
    bubble3.changeVel(2);
  }

  if(currentTime == 148000){
    c1.style.visibility = "hidden";
    c2.style.visibility = "hidden";
    c3.style.visibility = "hidden";
    bubble1.changeVel(0.125);
    bubble2.changeVel(0.125);
    bubble3.changeVel(0.125);
  }

  if(currentTime == 208000){
    bubble1.changeVel(0.25);
    c1.style.visibility = "visible";
  }

  if(currentTime == 268750){
    c1.style.visibility = "hidden";
    clearInterval(animation);
    playButtonImage.src = "assets/reload.png";
    currentTime = 0;
    bubble1 = new Bubble(randInt(0,width-0.3*height),randInt(0,0.7*height),speed,speed);
    bubble2 = new Bubble(randInt(0,width-0.3*height),randInt(0,0.7*height),speed,-1*speed);
    bubble3 = new Bubble(randInt(0,width-0.3*height),randInt(0,0.7*height),-1*speed,-1*speed);
  }
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
