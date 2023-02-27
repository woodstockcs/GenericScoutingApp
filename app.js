  // TODO:
  // make match scout page
  // make decoder
  // make/fix high score counter(turn off for now)
  // add teams and schedule functionality
  // encoder/qr code for matches



let numOfMatches = 0;
let highScore = 0;
let hsTeam = "";

var matchNum = 1;
var matchCatch = 1;
var missedMatches = "";
var assignment = "";
let assignIndex = 0;

let chargeVal = 0
let Alliance = {
  BLUE : true,
  RED : false
}
t = Alliance.RED

let mode = true
let erase = false

let pomegranite

let r
// let lst = []

let col = 3;
let row = 9;
let lst = new Array(col);
for (let i = 0; i < col; i++) {
  lst[i] = new Array(row); 
}

let tempCharge
// important data points

// string of 27 numbers(see key)
// 0 == empty, 1 == cone, 2 === cube
let autoGrid = ""
let grid = ""

// 0 == no charge, 1 == on unbalanced, 2 == on balanced
let autoCharge = 0
let charge = 0

function setup() {

  cnv = createCanvas(800, 500);
  // cnv.touchEnded(handleFieldTouch);
  background(255);
  textAlign(CENTER);
  rectMode(CENTER);
  strokeCap(SQUARE)
  r = new Robot(t)


  let val1
  let val2
  let tempKind
    if (t) {
        val1 = 50
        for (let i = 0; i < 3; i ++) {
        val2 = 150
        for (let k = 0; k < 9; k ++) {

            if (i == 2) {
                tempKind = 0
            } else if (k == 0 || k == 2 || k == 3 || k == 5 || k == 6 || k == 8) {
                tempKind = 1
            } else {
                tempKind = 2
            }

            lst[i][k] = new Receptacle(val1, val2, tempKind)
            val2 += 24
        }
        val1 += 20
    } } else {
        val1 = 682
        for (let i = 2; i >= 0; i --) {
            val2 = 150
            for (let k = 0; k < 9; k ++) {
                if (i == 0) {
                    tempKind = 0
                } else if (k == 0 || k == 2 || k == 3 || k == 5 || k == 6 || k == 8) {
                    tempKind = 1
                } else {
                    tempKind = 2
                }
                lst[i][k] = new Receptacle(val1, val2, tempKind)
                val2 += 24
            }
            val1 -= 20
        }
    } 
    
    var div = document.getElementById("drawing");
    div.appendChild(canvas);
    console.log("ran")

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


  for (let i = 0; i < 3; i ++) {
      for (let k = 0; k < 9; k ++) {
        lst[i][k].draw_holder(mouseX,mouseY, 0)
        lst[i][k].can_click()
      }
  }
}

function touchEnded(){
  // charging stations
  if (mouseY > 205 && mouseY < 310) {
    if (mouseX > 180 && mouseX < 260){
      if (mouseX < 205) {
         chargeVal == -1 ? chargeVal = 0 : chargeVal = 1
      } else if (mouseX > 235){
        chargeVal == 1 ? chargeVal = 0 : chargeVal = -1
      } else {
        chargeVal == 2 ? chargeVal = 0 : chargeVal = 2
      }
    } if (mouseX > 482 && mouseX < 562) {
      if (mouseX < 507){
        chargeVal == 1 ? chargeVal = 0 : chargeVal = -1
      } else if (mouseX > 537){
        chargeVal == -1 ? chargeVal = 0 : chargeVal = 1
      } else {
        chargeVal == 2 ? chargeVal = 0 : chargeVal = 2
      }
    }
  }
  // change modes
  if (mouseX > 308 && mouseX < 442 && mouseY > 372 && mouseY < 427) {
    rectMode(CENTER)
    if (mouseX > 375) {
      mode = false;
      switchMode(mode);
      autoGrid = saveGrid()
      autoCharge = tempCharge
      chargeVal = 0
    } else {
      mode = true;
      switchMode(mode);
    } rectMode(CORNER)
}
    // erase mode
    if (mouseX > 342 && mouseX < 408 && mouseY > 11 && mouseY < 40) {
        erase = true
    }
  
  // picking up from human player
  if (mouseY > 50 && mouseY < 142) {
    if (t) {
      if (mouseX > 650 && mouseX < 700) {
        if (mouseY > 99) {
          !r.cube ? r.cone = true : pomegranite = 0
        } else {
          !r.cone ? r.cube = true : pomegranite = 0
        }
      }
    } else {
      if (mouseX > 50 && mouseX < 100) {
        if (mouseY > 99) {
            !r.cube ? r.cone = true : pomegranite = 0
        } else {
            !r.cone ? r.cube = true : pomegranite = 0
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
  
  t ? b_charging_cell(chargeVal) : r_charging_cell(chargeVal)

  // red community
  strokeWeight(2)
  stroke(200,0,0)
  // line(646,150,646,366)
  
  line(553,150,553,209)
  line(553,209,493,209)
  line(493,209,493,366)
  
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

  // erase button options
  noStroke()
  fill(255)
  rect(340,10,75,35)

  if (!erase) {
      noStroke()
      fill(150)
      rect(345,12,60,31,5)
      fill(250)
      textSize(15)
      text("Erase", 375,32)
  } else {
      strokeWeight(2)
      stroke(151,0,0)
      fill(50)
      rect(343,11,64,33,5)
      textSize(18)
      fill(250)
      noStroke()
      text("Erase", 375,33)
  }

}

function b_charging_cell(a){
  tempCharge = 0
  noStroke()
  // a == -1 for tilted away from station
  // a == 0 for untouched
  // a == 1 for tilted toward driver station
  // a == 2 balanced
  
  fill(120)
  rect(184,209,72,96)
  fill(180)
  rect(196,209,48,96)
  if (a != 0 && a != 2){
    a == 1 ? rect(184,209,12,96) : rect(244,209,12,96)
    tempCharge = 1
  } if (a == 2) {
    tempCharge = 2
    stroke(0,0,151)
    strokeWeight(5)
    rect(206,219,28,76)
  }
}

function r_charging_cell(a){
  tempCharge = 0
  noStroke()
  // a == -1 for tilted away from station
  // a == 0 for untouched
  // a == 1 for tilted toward driver station
  // a == 2 balanced
  
  fill(120)
  rect(493,209,72,96)
  fill(180)
  rect(505,209,48,96)
  if (a != 0 && a != 2){
    a == 1 ? rect(553,209,12,96) : rect(493,209,12,96)
    tempCharge = 1
  } if (a == 2) {
    tempCharge = 2
    stroke(151,0,0)
    strokeWeight(5)
    rect(515,219,28,76)
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

function saveGrid() {
    let str = ""
    let littleVal
    for (let i = 0; i < 3; i ++) {
        for (let k = 0; k < 9; k ++) {
            littleVal = lst[i][k].state
            str += littleVal
        }
    }
    return str
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

        this.real_draw(-2)
    }


    if (this.clickable || erase) {
        
        if (x > this.x && x < this.x+20 && y > this.y && y < this.y+24) {

            if (mouseIsPressed == true) {
                if (erase) {
                    this.state = 0
                    erase = false
                } else {
                this.kind != 0 ? this.state = this.kind : r.cone ? this.state = 1 : this.state = 2 
                r.cone = false
                r.cube = false
        }
        } }
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

console.log("hi")

$(document).ready(() =>{
  // console.log("smth wokred")

  $("#metaLink").click((e) => {
    $("#metaPage").addClass("d-block").removeClass("d-none");
    $("#homePage").addClass("d-none").removeClass("d-block");
    $("#metaTitle").html("Recap data for " + assignment + ":");
    $("#matchesScoutedDiv").html(numOfMatches);
    $("#highScoreDiv").html("Team: " + hsTeam + " - Score: " + highScore);
    $("#matchesMissedDiv").html(missedMatches);
    return false;
  });

  $("#matchLink").click((e) => {
    $("#matchReportPage").addClass("d-block").removeClass("d-none");
    $("#homePage").addClass("d-none").removeClass("d-block");
    $("#matchBox").val(matchNum);
    // let current = schedule[matchNum - 1];
    // // console.log(current.teams[assignIndex]);
    // $('#teamBox option[value="0"]').prop("selected", false);
    // $('#teamBox option[value="' + current.teams[assignIndex] + '"]').prop(
    //   "selected",
    //   true
    // );
    return false;
  });

  $("#homePageLink").click((e) => {
    $("#assignPage").addClass("d-none").removeClass("d-block");
    $("#homePage").addClass("d-block").removeClass("d-none");
    assignment = $("#assignBox").val();
    missedMatches = assignment + ": ";
    assignIndex = defineAssignment(assignment);
    $("#titleAssign").html("You're assigned " + assignment);
    return false;
  });

  $("#pitLink").click((e) => {
    $("#pitReportPage").addClass("d-block").removeClass("d-none");
    $("#homePage").addClass("d-none").removeClass("d-block");
    return false;
  });

  $(".homeClick").click((e) => {
    window.scroll(500,500)
    $("#metaPage").addClass("d-none").removeClass("d-block");
    $("#matchReportPage").addClass("d-none").removeClass("d-block");
    $("#pitReportPage").addClass("d-none").removeClass("d-block");
    $("#homePage").addClass("d-block").removeClass("d-none");
    // console.log(missedMatches);
    // clearForm();
    clearPitForm();
    return false;
  });

  $("#reassignLink").click((e) => {
    $("#assignPage").addClass("d-block").removeClass("d-none");
    $("#homePage").addClass("d-none").removeClass("d-block");
    assignment = "";
    $("#assignBox").val("");
    return false;
  });

  $("#verifyDataButton").click((e) => {

    $("#verifyStuff").addClass("d-none").removeClass("d-block");
    $("#actualReport").addClass("d-block").removeClass("d-none");
    // field();
    return false;
  });

  $("#match-resetFormButton").click((e) => {
    e.preventDefault();
    clearForm();
    console.log(matchNum);
    return false;
  });

  $("#match-clearFormButton").click((e) => {
    e.preventDefault();
    clearForm();
    $("#matchModal").modal("hide");
    console.log(matchNum);
    return false;
  });

  $("#match-createQr").click((e) => {
    // matchReported = true;
    // numOfMatches++;
    // checkHS();
    console.log("just happened");
    $("#matchModal").modal("show");
    $("#matchModalLabel").html(
      "QR data for match " +
        $("#matchBox").val() +
        ", team " +
        $("#teamBox").val()
    );

    // console.log(Date.now());
    // console.log(typeof(Date.now()));
    e.preventDefault();
    let aggressionValue = 0;
    $('input[name="aggression_checkbox"]:checked').each(function () {
      aggressionValue += parseInt(this.value);
    });
    $("#match-qrcode").html("");

    let qrtext =
      "match," +
      $("#matchBox").val() + //1
      "," +
      $("#teamBox").val() + //2
      "," +
      autoGrid + //3
      "," +
      autoCharge + //4
      "," +
      grid + //5
      "," +
      charge + //6
      "," +
      aggressionValue + //7
      "," +
      Date.now() + //8
      "," +
      decodeNote($("#match-notesBox").val()) + //9
      "," +
      $("#match-scoutBox").val(); //10

    // generate qr code - new library
    QrCreator.render(
      {
        text: qrtext,
        radius: 0, // 0.0 to 0.5
        ecLevel: "H", // L, M, Q, H
        fill: "#000000", // foreground color
        background: "#ffffff", // color or null for transparent
        size: 256, // in pixels
      },
      document.querySelector("#match-qrcode")
    );

    $("#endButtons").removeClass("invisible");

    // window.scrollTo({ top: 1000, behavior: "smooth" });
  });

  $("#createQr").click((e) => {
    $("#pitModalLabel").html("QR pit data for team " + $("#numBox").val());
    $("#qrcode").html("");
    e.preventDefault();
    let pieceAbilityValue = 0;
    $('input[name="piece_ability_checkbox"]:checked').each(function () {
      pieceAbilityValue += parseInt(this.value);
    });
    let gridHeightValue = 0;
    $('input[name="grid_height_checkbox"]:checked').each(function () {
      gridHeightValue += parseInt(this.value);
    });
    let chargeValue = 0;
    $('input[name="charge_radio"]:checked').each(function () {
      chargeValue += parseInt(this.value);
    });

    // console.log(shooterDistanceValue);
    // console.log($("#notesBox").val());

    let qrtext =
      "pit," + //0
      $("#numBox").val() + //1
      "," +
      $("#weightBox").val() + //2
      "," +
      pieceAbilityValue + //3
      "," +
      gridHeightValue + //4
      "," +
      chargeValue + //5
      "," +
      $('input[name="drive_train_radio"]:checked').val() + //6
      "," +
      decodeNote($("#autoPathBox").val()) +  //7
      "," +
      decodeNote($("#driveHoursBox").val()) +  //8
      "," +
      Date.now() + //9
      "," +
      $("#pit-scoutBox").val() + //10
      "," +
      decodeNote($("#notesBox").val()); //11

    // generate qr code - new library
  

    QrCreator.render(
      {
        text: qrtext,
        radius: 0, // 0.0 to 0.5
        ecLevel: "H", // L, M, Q, H
        fill: "#000000", // foreground color
        background: "#ffffff", // color or null for transparent
        size: 256, // in pixels
      },
      document.querySelector("#qrcode")
    );


    $("#endStuff").addClass("d-block").removeClass("d-none");
  });

  $(".closePitModal").click((e) => {
    $("#pitModal").modal("hide");
    return false;
  });

  $("#clearFormButton").click((e) => {
    // e.preventDefault();
    clearPitForm();
    $("#endStuff").addClass("d-none").removeClass("d-block");
    return false;
  });



  // define a generic Ajax error handler:
  // http://api.jquery.com/ajaxerror/
  $(document).ajaxError(() => {
    $("#status").html("Error: unknown ajaxError!");
  });
});

function decodeNote(n) {
  for (let i = 0; i < n.length - 1; i++) {
    if (n.substring(i, i + 1) == "," || n.substring(i, i + 1) == '"') {
      n = n.substring(0, i) + " -" + n.substring(i + 1, n.length);
    }
  }
  return n;
}

function increaseMatchNum() {
  matchNum = $("#matchBox").val();
  matchNum++;
  matchCatch++;
  while (matchCatch < matchNum) {
    missedMatches += (matchCatch - 1).toString() + ", ";
    matchCatch++;
  }
  $("#matchBox").val(matchNum);
  console.log(missedMatches);
  let current = schedule[matchNum - 1];
  $('#teamBox option[value="0"]').prop("selected", false);
  $('#teamBox option[value="' + current.teams[assignIndex] + '"]').prop(
    "selected",
    true
  );
  console.log(current.teams[assignIndex]);
}

function clearPitForm() {
  $("#qrcode").html("");
  // $("#endStuff").addClass("d-none").removeClass("d-block");
  $('#numBox option[value="0"]').prop("selected", true);
  $("#weightBox").val("");
  $(".charge").removeClass("active");
  $(".pieces").removeClass("active");
  $(".gridHeight").removeClass("active");
  $(".driveTrain").removeClass("active");
  $("#autoPathBox").val("");
  $("#driveHoursBox").val("");
  $("#notesBox").val("");
  $("#pit-the-section-with-questions")
    .addClass("d-block")
    .removeClass("d-none");
}

function checkHS() {
  let tempHS = HHA * 4 + LHA * 2 + HHT * 2 + LHT + climb + 2;
  if (tempHS > highScore) {
    highScore = tempHS;
    hsTeam = $("#teamBox").val();
  }
}

function defineAssignment(x) {
  let t = x.toUpperCase();
  switch (t) {
    case "RED 1":
      return 0;
      break;
    case "RED 2":
      return 1;
      break;
    case "RED 3":
      return 2;
      break;
    case "BLUE 1":
      return 3;
      break;
    case "BLUE 2":
      return 4;
      break;
    case "BLUE 3":
      return 5;
      break;
    default:
      return 0;
      break;
  }
}

function clearForm() {
  // field variables
  mode = true;
  autoGrid = ""
  grid = ""
  charge = 0
  autoCharge = 0;
  chargeVal = 0
  tempCharge = 0
  for (let i = 0; i < 3; i ++) {
    for (let k = 0; k < 9; k ++) {
      lst[i][k].state = 0
      lst[i][k].can_click()
    }
}

  console.log("it worked!");
  // draw();

  // html variables
  $("#match-notesBox").val("");
  $("#match-qrcode").html("");


  $(".aggression").removeClass("active");
  // $('#teamBox option[value="0"]').prop("selected", true);

  $("#verifyStuff").addClass("d-block").removeClass("d-none");
  $("#actualReport").addClass("d-none").removeClass("d-block");

  $("#endButtons").addClass("invisible");
}

