let b_charge = 0
let r_charge = 0
let Alliance = {
  BLUE : true,
  RED : false
}
t = Alliance.RED

let mode = true

let pomegranite

let r
let lst = []

// important data points

let autoGrid = ""

let grid = ""

function setup() {
  createCanvas(800, 700);
  background(255);
  textAlign(CENTER);
  rectMode(CENTER);
  strokeCap(SQUARE)
  r = new Robot(t)
  // TODO:
  // put grid into string for tele
  // gridify auto
  // erase mode
  // balancing thing
  // encoder/qr code

  // 2,3,5,6,8,10,11,13,14,16
  for (let i = 1; i <= 27; i++) {
    let type
    if (i > 18) {
        type = 0
    } else if (i == 2 || i == 3 || i == 5 || i == 6 || i == 8 || i == 9 || i == 11 || i == 12 || i == 14 || i == 15 || i == 17 || i == 18){
        type = 1
    } else {
        type = 2
    }  
    let g
    if (t) {    
        g = i > 18 ? 90 : i > 9 ? 50 : 70
    } else {
        g = i > 18 ? 640 : i > 9 ? 680 : 660
        g += 2
    }
    
    
    lst[i] = new Receptacle(g, 150+24*(i%9),type)
  }
  
  // var div = document.getElementById("drawing");
  // div.appendChild(canvas);
}

function draw() {
  // noLoop();
  noStroke()
  fill(255);
  rect(0,0,50,50)
  fill(0)
  textSize(14)
  text(mouseX,25,25);
  text(mouseY,25,35);
  
  field();
  push()
    scale(.8,.8)
    let x_piece
    !t ? x_piece = 76 : x_piece = 820
    draw_cube(x_piece,70)
    draw_cone(x_piece,125)
  pop()
  
  r.draw_robot()
  for (let i = 1; i <= 27; i++) {
    lst[i].draw_holder(mouseX,mouseY, 0)
    lst[i].can_click()
  }
}

function touchEnded(){
  // charging stations
  if (mouseY > 205 && mouseY < 310) {
    if (mouseX > 180 && mouseX < 260){
      if (mouseX >220) {
         b_charge == 1 ? b_charge = 0 : b_charge = 2
      } else {
        b_charge == 2 ? b_charge = 0 : b_charge = 1
      }
    } if (mouseX > 482 && mouseX < 562) {
      if (mouseX < 522){
        r_charge == 1 ? r_charge = 0 : r_charge = 2
      } else {
        r_charge == 2 ? r_charge = 0 : r_charge = 1
      }
    }
  }
  if (mouseX > 308 && mouseX < 442 && mouseY > 372 && mouseY < 427) {
    rectMode(CENTER)
    if (mouseX > 375) {
      mode = false;
      switchMode(mode);
    } else {
      mode = true;
      switchMode(mode);
    } rectMode(CORNER)
}
  
  // picking up from human player
  if (mouseY > 50 && mouseY < 142) {
    if (t) {
      if (mouseX > 650 && mouseX < 700) {
        if (mouseY > 99) {
          let temp = r.cone
          !r.cube ? r.cone = !temp : pomegranite = 0
        } else {
          let temp = r.cube
          !r.cone ? r.cube = !temp : pomegranite = 0
        }
      }
    } else {
      if (mouseX > 50 && mouseX < 100) {
        if (mouseY > 99) {
            let temp = r.cone
            !r.cube ? r.cone = !temp : pomegranite = 0
        } else {
            let temp = r.cube
            !r.cone ? r.cube = !temp : pomegranite = 0
        }
      }
    }
  }
  return true
  
}

function field() {
  // noStroke();
  // fill(255);
  // rect(400, 200, 800, 700);
  // arena
  rectMode(CENTER)
  switchMode(mode)
  stroke(0);
  strokeWeight(4);
  fill(220);
  rectMode(CORNER)
  rect(50,50,652,316)
  

  strokeWeight(2);
  line(376, 50, 376, 366);
  
  // blue community
  stroke(0,0,200)
  // line(104,150,104,366)
  
  line(196,150,196,209)
  line(196,209,256,209)
  line(256,209,256,366)
  b_charging_cell(b_charge)
  
  // scoring zones
  // blue
  // scoring_zone(52)
  //red
  // scoring_zone(660)
  
  // red community
  strokeWeight(2)
  stroke(200,0,0)
  // line(646,150,646,366)
  
  line(553,150,553,209)
  line(553,209,493,209)
  line(493,209,493,366)
  r_charging_cell(r_charge)
  
  //red loading zones
  strokeWeight(2)
  stroke(200,0,0)
  line(315,50,315,100)
  line(196,100,196,150)
  line(315,100,196,100)
  
  //blue loading zone
  strokeWeight(2)
  stroke(0,0,200)
  line(437,50,437,100)
  line(553,100,553,150)
  line(437,100,553,100)
  
  
  // divider walls
  strokeWeight(6)
  stroke(0)
  line(51,150,195,150)
  line(554,150,700,150)

}

function b_charging_cell(a){
  noStroke()
  // a == 0 for balanced
  // a == 1 for tilted toward driver station
  // a == 2 for tilted away from station
  
  fill(120)
  rect(184,209,72,96)
  fill(180)
  rect(196,209,48,96)
  if (a > 0){
    a == 1 ? rect(184,209,12,96) : rect(244,209,12,96)
  }
}

function r_charging_cell(a){
  noStroke()
  // a == 0 for balanced
  // a == 1 for tilted toward driver station
  // a == 2 for tilted away from station
  
  fill(120)
  rect(493,209,72,96)
  fill(180)
  rect(505,209,48,96)
  if (a > 0){
    a == 1 ? rect(553,209,12,96) : rect(493,209,12,96)
  }
}

function scoring_zone(x) {
  let color = true
  x < 60 ? color = true : color = false
  
  // color cells
  let w = 40
  noStroke()
  color? fill(0,0,151) : fill(151,0,0)
  rect(x,150,w,33)
  rect(x,201,w,24)
  rect(x,289,w,24)
  rect(x,331,w,33)
  
  // cooperatition cell
  fill(40)
  noStroke()
  rect(x,225,w,23)
  rect(x,266,w,23)
  
  // box scoring zones
//   fill(130)
//   strokeWeight(2)
//   stroke(167)
//   rect(x,183,20,18)
//   rect(x+20,183,20,18)
//   rect(x,248,20,18)
//   rect(x+20,248,20,18)
//   rect(x,313,20,18)
//   rect(x+20,313,20,18)
  
  // little wall line things
  strokeWeight(3.6)
  stroke(0)
  let p
  color ? p = x + 28 : p = x - 15
  let a = p + 25
  line(p,155,a,155)
  line(p,183,a,183)
  line(p,202,a,202)
  line(p,225,a,225)
  line(p,248,a,248)
  line(p,267,a,267)
  line(p,290,a,290)
  line(p,313,a,313)
  line(p,332,a,332)
  line(p,362,a,362)

  
  // cone pegs
  noStroke()
  let s
  color ? s = x + 8 : s = x + 13
  for(let i = 170; i < 360; i += 22) {
    ellipse(s,i,6,6)
    ellipse(s + 18,i,6,6)
    
  }
  
}

function draw_cube(x,y) {
  stroke(163,61,255)
  strokeWeight(3)
  //line(x+10, y+10, x+10, y+40)
  fill(130,15,245)
  rect(x,y,50,50,5)
  noStroke()
  fill(163,61,255)
  rect(x+10,y+10,30,30)
  stroke(163,61,255)
  strokeWeight(3)
  bezier(x+10,y+10,x+7,y+20,x+7,y+30,x+10,y+40)
  bezier(x+10,y+10,x+20,y+7,x+30,y+7,x+40,y+10)
  bezier(x+40,y+10,x+43,y+20,x+43,y+30,x+40,y+40)
  bezier(x+10,y+40,x+20,y+43,x+30,y+43,x+40,y+40)
}

function draw_cone(x,y) {
  stroke(255,189,35)
  strokeWeight(3)
  fill(255,150,0)
  rect(x,y,50,50,5)
  noStroke()
  fill(255,189,35)
  triangle(x+27,y+7,x+27,y+40,x+37,y+40)
  rect(x+23,y+7,4,33)
  triangle(x+23,y+7,x+23,y+40,x+14,y+40)
  rect(x+10,y+40,32,5)
  
}

function switchMode(x) {
    noStroke();
    fill(250);
    rect(375, 400, 145, 70);
  
    if (x) {
      strokeWeight(2);
      fill(150);
      rect(412, 400, 60, 55, 5);
      fill(50);
      stroke(124, 218, 124);
      rect(338, 400, 65, 60, 5);
      noStroke();
      fill(250);
      textSize(20);
      text("Auto", 338, 405);
      textSize(15);
      text("Teleop", 412, 405);
    } else {
      strokeWeight(2);
      fill(50);
      stroke(124, 218, 124);
      rect(412, 400, 65, 60, 5);
      noStroke();
      fill(150);
      rect(338, 400, 60, 55, 5);
      fill(250);
      textSize(15);
      text("Auto", 338, 405);
      textSize(20);
      text("Teleop", 412, 405);
      textSize(15);
    }
    return false;
}

function saveGrid(auton) {


}

class Robot {
  constructor (team) {
    this.cone = false
    this.cube = false
    this.alliance = team
    this.x = 420
    this.y = 265
  }
  
  draw_robot() {
    push()
    scale(.8,.8)
    noStroke()
  this.alliance ? fill(0,0,151) : fill(151,0,0)
  rect(this.x,this.y,100,100,10)
  fill(80)
  rect(this.x+10,this.y+10,80,80,1)
  fill(204,102,0)
  ellipse(this.x+16,this.y+16,6,6)
  fill(204,102,0,150)
  ellipse(this.x+16,this.y+16,8,8)
  fill(204,102,0,100)
  ellipse(this.x+16,this.y+16,10,10)
    
    if (this.cone) {
      draw_cone(this.x+25,this.y+25)
    }
    if (this.cube) {
      draw_cube(this.x+25,this.y+25)
    }
    pop()
  }
}

class Receptacle{
  
  constructor(x,y,kind) {
    // kind: 0 = both, 1 = cone, 2 = cube
    // state: 0 = empty, 1 = cone, 2 = cube
    this.kind = kind
    this.state = 0
    this.clickable = false
    this.x = x
    this.y = y
  }
  
 draw_holder(x,y,p) {

    if (t) {
        this.real_draw(2)
    }  else {
        // push()
        // scale(-1)
        this.real_draw(-2)
        // pop()
    }


    if (this.clickable) {
        
        if (x > this.x && x < this.x+20 && y > this.y && y < this.y+24) {

            if (mouseIsPressed == true) {
                this.kind != 0 ? this.state = this.kind : r.cone ? this.state = 1 : this.state = 2 
            }
        }
        } if (this.state == 1) {
                fill(255,189,35)
                noStroke()
                ellipse(this.x+10,this.y+12,9,9)
            }
            if (this.state == 2) {
                fill(163,61,255)
                noStroke()
                rect(this.x+5,this.y+7,10,10,2)
            }
  
     
}
can_click() {
    console.log(r.cone)
    if(r.cone) {
        if(this.kind == 0 || this.kind == 1) {
            this.clickable = true
        }
    } else if(r.cube) {
        if (this.kind == 0 || this.kind == 2) {
            this.clickable = true
        }
    }
    else {
        this.clickable = false
    }
    this.draw_holder()
}
real_draw(p) {
    let tempX = this.x + 10
    noStroke()
   if(this.kind == 0) {
       t ? stroke(0,0,200) : stroke(200,0,0)
       strokeWeight(2)
       line(tempX + 5*p, this.y,tempX + 5*p,this.y+24)
       strokeWeight(3)
       stroke(0)
       line(tempX + 5*p, this.y, tempX - 5*p, this.y)
   } if (this.kind == 1) {
        t ? fill(0,0,151) : fill(151,0,0)
       noStroke()
       rect(this.x+p, this.y, 20, 24)
       fill(130)
       ellipse(this.x+10, this.y + 12, 6,6)
   } if (this.kind == 2) {
       strokeWeight(2)
       stroke(200)
       noStroke()
       fill(130)
       rect(this.x+p,this.y,20,25)
   }

    
}
}
