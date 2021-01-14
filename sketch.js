var hours,minutes, seconds
var secondAngle,minuteAngle,hourAngle


function setup() {



  createCanvas(400,400);
  
}

function draw() {
  background("black");
translate (200,200)
   hours = hour()
   minutes = minute()
   seconds = second()
   secondAngle= map (seconds,0,60,0,360)
  minuteAngle= map (minutes,0,60,0,360)
  hourAngle= map (hours%12,0,12,0,360)
  push ()
  rotate (secondAngle)
  stroke ("green")
  strokeWeight (5)
  line (0,0,100,0)
  pop ()
push ()
rotate (minuteAngle)
stroke ("blue")
strokeWeight (5)
line (0,0,75,0)
pop ()
push ()
rotate(hourAngle)
stroke ("red")
strokeWeight (5)
line (0,0,50,0)
pop ()
noFill ()
stroke ("green")
arc (0,0,300,300,0,secondAngle)
stroke ("blue")
arc (0,0,270,270,0,minuteAngle)
stroke ("red")
arc (0,0,250,250,0,hourAngle)

}