  // TODO:
  // make/fix high score counter(turn off for now)
  // framecount
  //  global var for current framecount of button press
  // delay variable, on button press wait delay variable frame counts

  var teamNames = [
    // { num: 58, name: "The Riot Crew" },
   // { num: 61, name: "The Intimidators" },
    // { num: 69, name: "HYPER" },
    // { num: 78, name: "AIR STRIKE" },
    // { num: 88, name: "TJ2" },
    { num: 95, name: "Grasshoppers" },
    // { num: 97, name: "Bionic Beef" },
    // { num: 125, name: "NUTRONs" },
 //   { num: 126, name: "Gael Force" },
     { num: 131, name: "Chaos" },
    // { num: 133, name: "B.E.R.T." },
     { num: 138, name: "Entropy" },
     { num: 151, name: "Tough Techs" },
    // { num: 155, name: "The TechnoNuts" },
    // { num: 157, name: "AZTECHS" },
 //   { num: 166, name: "Chop Shop" },
 //   { num: 172, name: "Northern Force" },
    // { num: 175, name: "Buzz Robotics "},
//    { num: 176, name: "Aces High" },
    // { num: 177, name: "Bobcat Robotics" },
    //  { num: 178, name: "The 2nd Law Enforcers" },
    //  { num: 181, name: "Birds of Prey" },
    //  { num: 190, name: "Gompei and the H.E.R.D." },
//    { num: 195, name: "CyberKnights" },
 //   { num: 228, name: "GUS Robotics" },
    // { num: 230, name: "Gaelhawks" },
    // { num: 236, name: "Techno-Ticks" },
//    { num: 237, name: "Black Magic Robotics" },
    { num: 238, name: "Crusaders" },
    // { num: 319, name: "Big Bad Bob" },
    { num: 467, name: "Colonials" },
     { num: 501, name: "Team 501 - The PowerKnights Robotics Team" },
 //   { num: 509, name: "Red Storm" },
//    { num: 558, name: "Elm City Robo Squad" },
    // { num: 571, name: "Team Paragon" },
    { num: 663, name: "Robonauts" },
    // { num: 716, name: "Who’sCTEKS" },
     { num: 811, name: "Wild Cards" },
    //  { num: 839, name: "Rosie Robotics" },
    //  { num: 971, name: "Spartan Robotics" },
//    { num: 1027, name: "Mechatronic Maniacs" },
      { num: 1058, name: "PVC Pirates" },
    // { num: 1071, name: "Team MAX" },
    { num: 1073, name: "The Force Team" },
//    { num: 1099, name: "DiscoTechs" },
    // { num: 1153, name: "Timberwolves" },
{ num: 1247, name: "Blood, Sweat, and Gears" },
{ num: 1277, name: "The Robotomies" },
    { num: 1307, name: "Robosaints" },
    // { num: 1474, name: "Titans" },
      { num: 1512, name: "The Big Red" },
    // { num: 1517, name: "AMP'D UP" },
    //  { num: 1519, name: "Mechanical Mayhem" },
    //  { num: 1699, name: "Robocats" },
    // { num: 1729, name: "Inconceivable" },
    // { num: 1740, name: "Cyber Colonels" },
    // { num: 1757, name: "Wolverines" },
    // { num: 1761, name: "STEAMpunk Tigers" },
//    { num: 1768, name: "Nashoba Robotics" },
     { num: 1831, name: "Screaming Eagles" },
     { num: 1922, name: "Oz-Ram" },
    // { num: 1965, name: "Firebirds" },
  //  { num: 1991, name: "Dragons" },
 //   { num: 2067, name: "Apple Pi" },
    // { num: 2084, name: "Robots by the C" },
    // { num: 2168, name: "Aluminum Falcons" },
    // { num: 2262, name: "Robo-Panthers" },
    // { num: 2342, name: "Team Phoenix" },
    // { num: 2370, name: "IBOTS" },
    // { num: 2423, name: "The KwarQs" },
    // { num: 2523, name: "Tech Storm" },
//    { num: 2648, name: "Infinite Loop" },
    // { num: 2712, name: "Power Surge 4-H Robotics" },
//    { num: 2713, name: "iRaiders" },
{ num: 2876, name: "Devilbotz" },
//    { num: 2877, name: "LigerBots" },
  //  { num: 3146, name: "GRANBY GRUNTS" },
 //   { num: 3182, name: "Athena’s Warriors" },
    // { num: 3205, name: "Patriots" },
    // { num: 3323, name: "Potential Energy" },
{ num: 3451, name: "The ANOMALY" },
//    { num: 3461, name: "Operating PEACCE Robotics" },
    // { num: 3464, name: "Sim-City" },
     { num: 3467, name: "Windham Windup" },
     { num: 3566, name: "Gone Fishin’" },
{ num: 3597, name: "Robo-Rangers" },
    // { num: 3609, name: "Duct Tape Dragons" },
    // { num: 3623, name: "TerrorBots" },
    // { num: 3654, name: "TechTiger" },
     { num: 4041, name: "Iron Tigers" },
    // { num: 4048, name: "Redshift" },
    // { num: 4097, name: "Devilbots" },
    // { num: 4176, name: "Iron Tigers" },
    // { num: 4311, name: "Swampscott Currents" },
     { num: 4564, name: "Orange Chaos" },
     { num: 4761, name: "The Roborockets" },
    // { num: 4905, name: "Andromeda One" },
    // { num: 4909, name: "Bionics" },
{ num: 4925, name: "The Resistance" },
    // { num: 4929, name: "Maroon Monsoon" },
    // { num: 5000, name: "Hammerheads" },
//    { num: 5112, name: "The Gongoliers" },
    // { num: 5347, name: "Gryphons" },
    // { num: 5422, name: "Stormgears FRC" },
     { num: 5491, name: "Hard Reset" },
//    { num: 5494, name: "BizarBots Robotics" },
    // { num: 5563, name: "Phalanx" },
    // { num: 5633, name: "Hyde Mecha Wolves" },
    { num: 5687, name: "The Outliers" },
    // { num: 5735, name: "Control Freaks" },
    // { num: 5752, name: "Bevbotics" },
    // { num: 5813, name: "Morpheus" },
  //  { num: 5846, name: "SouthCoast Corsairs" },
     { num: 5902, name: "The Wire Clippers" },
//    { num: 6153, name: "The Blue Crew" },
     { num: 6161, name: "Equilibrium" },
  //  { num: 6201, name: "The Highlanders" },
    // { num: 6328, name: "Mechanical Advantage" },
//    { num: 6329, name: "The Bucks’ Wrath" },
    // { num: 6367, name: "The ElectroLights" },
    // { num: 6529, name: "Beantown Blitz" },
    // { num: 6620, name: "The Northmengineers" },
    { num: 6690, name: "MV roboPride" },
    // { num: 6691, name: "Torque" },
    // { num: 6723, name: "Mechanical Mounties" },
{ num: 6762, name: "Oscats" },
     { num: 6763, name: "FUSION" },
    { num: 6933, name: "Archytas" },
    // { num: 7127, name: "LongMetal" },
    // { num: 7133, name: "Steam Makers" },
  //  { num: 7153, name: "Aetos Dios (Eagles of Zeus)" },
{ num: 7314, name: "Tornadoes" },
    // { num: 7407, name: "Wired Boars" },
    // { num: 7416, name: "Northern Horizons" },
    // { num: 7674, name: "RaiderBots" },
    // { num: 7822, name: "General Robotics" },
    // { num: 7907, name: "Spartan Robotics" },
     { num: 7913, name: "‘Bear'ly Functioning" },
    // { num: 8013, name: "Boston Lions" },
    { num: 8023, name: "LRTC Androscoggin Argonauts" },
//    { num: 8046, name: "Laker Bots" },
    // { num: 8085, name: "MOJO" },
    // { num: 8544, name: "Reinforcement" },
    // { num: 8604, name: "Alpha Centauri" },
    // { num: 8626, name: "Cyber Sailors of Scituate MA" },
{ num: 8708, name: "Ov3r1y K0mp13x" },
    // { num: 8709, name: "Pathfinder Techs" },
     { num: 8724, name: "Mayhem" },
    // { num: 8883, name: "Green Mountain Gears" },
//    { num: 8889, name: "Project W" },
{ num: 9056, name: "Kents Hill Huskies 9056" },
//    { num: 99999, name: "... OTHER ..." },

  ]

  let schedule = [
    {"matchNum":1,"teams":[5902,663,7913,1831,4761,1058]},
{"matchNum":2,"teams":[1307,8023,501,6690,2876,1277]},
{"matchNum":3,"teams":[3467,4925,467,1073,8708,6161]},
{"matchNum":4,"teams":[238,5491,151,3597,3566,811]},
{"matchNum":5,"teams":[1247,95,5687,1512,6762,6933]},
{"matchNum":6,"teams":[4564,7314,3451,8724,6763,4041]},
{"matchNum":7,"teams":[501,1922,8708,1831,138,131]},
{"matchNum":8,"teams":[2876,4761,8023,811,238,1073]},
{"matchNum":9,"teams":[663,1058,4925,3467,5491,6690]},
{"matchNum":10,"teams":[3451,151,7913,1307,6933,4564]},
{"matchNum":11,"teams":[1277,5687,6161,7314,3597,6762]},
{"matchNum":12,"teams":[138,1512,6763,5902,95,467]},
{"matchNum":13,"teams":[3566,8724,131,1922,1247,4041]},
{"matchNum":14,"teams":[8708,4761,3467,1058,8023,5491]},
{"matchNum":15,"teams":[6933,5687,3597,4564,811,2876]},
{"matchNum":16,"teams":[6161,238,4925,1512,3451,501]},
{"matchNum":17,"teams":[6763,663,7314,138,1247,5902]},
{"matchNum":18,"teams":[6762,1831,1073,467,4041,1307]},
{"matchNum":19,"teams":[131,1922,151,8724,7913,1277]},
{"matchNum":20,"teams":[3566,3451,4761,95,6690,1512]},
{"matchNum":21,"teams":[4564,8708,1247,3597,2876,663]},
{"matchNum":22,"teams":[4925,5687,8023,238,1307,1058]},
{"matchNum":23,"teams":[6161,131,6763,7314,5902,8724]},
{"matchNum":24,"teams":[4041,95,5491,151,1073,6690]},
{"matchNum":25,"teams":[467,501,6762,1922,811,7913]},
{"matchNum":26,"teams":[138,6933,3467,3566,1831,1277]},
{"matchNum":27,"teams":[8023,3597,1512,3451,1307,8724]},
{"matchNum":28,"teams":[2876,131,238,4761,151,663]},
{"matchNum":29,"teams":[7913,1058,8708,7314,6161,95]},
{"matchNum":30,"teams":[811,1831,6763,1247,4925,1277]},
{"matchNum":31,"teams":[5902,6690,4564,5491,467,1922]},
{"matchNum":32,"teams":[3566,6762,3467,5687,501,138]},
{"matchNum":33,"teams":[1073,663,4041,6933,6161,8724]},
{"matchNum":34,"teams":[8708,95,3451,1831,8023,151]},
{"matchNum":35,"teams":[1247,6763,238,7913,467,4761]},
{"matchNum":36,"teams":[1922,1277,3597,6690,1307,4925]},
{"matchNum":37,"teams":[6762,811,138,3467,1058,4041]},
{"matchNum":38,"teams":[4564,1512,5491,131,7314,501]},
{"matchNum":39,"teams":[1073,6933,2876,5687,3566,5902]},
{"matchNum":40,"teams":[6161,7913,1831,3597,4761,6690]},
{"matchNum":41,"teams":[4925,151,95,663,6762,8724]},
{"matchNum":42,"teams":[1512,811,1058,1277,131,4564]},
{"matchNum":43,"teams":[1073,138,1922,238,7314,5687]},
{"matchNum":44,"teams":[1247,3467,2876,6933,5491,3451]},
{"matchNum":45,"teams":[8023,467,6763,501,4041,3566]},
{"matchNum":46,"teams":[1307,5902,811,8724,8708,3597]},
{"matchNum":47,"teams":[663,238,6690,5687,1512,7913]},
{"matchNum":48,"teams":[4761,1073,7314,1922,4564,3467]},
{"matchNum":49,"teams":[131,1058,467,501,4925,6933]},
{"matchNum":50,"teams":[5491,5902,1831,8023,3451,6762]},
{"matchNum":51,"teams":[138,3566,1307,151,6161,1247]},
{"matchNum":52,"teams":[8708,4041,2876,6763,1277,95]},
{"matchNum":53,"teams":[7913,3597,131,3467,1073,1512]},
{"matchNum":54,"teams":[5491,8724,4925,1831,4564,5687]},
{"matchNum":55,"teams":[6161,1922,1307,663,8023,811]},
{"matchNum":56,"teams":[4761,4041,138,2876,3451,467]},
{"matchNum":57,"teams":[6690,3566,7314,6762,1247,1058]},
{"matchNum":58,"teams":[5902,1277,6933,95,501,238]},
{"matchNum":59,"teams":[151,8708,811,6763,1073,3597]},
{"matchNum":60,"teams":[5687,5491,663,467,138,6161]},
{"matchNum":61,"teams":[4041,7913,7314,4925,2876,3566]},
{"matchNum":62,"teams":[1277,3467,8023,131,5902,3451]},
{"matchNum":63,"teams":[1058,151,501,4761,1512,1922]},
{"matchNum":64,"teams":[95,1307,1831,6762,6763,4564]},
{"matchNum":65,"teams":[6690,8724,1247,6933,238,8708]},
{"matchNum":66,"teams":[3451,3597,138,4925,7913,1073]},
{"matchNum":67,"teams":[501,3467,5902,4041,5687,151]},
{"matchNum":68,"teams":[1307,1277,6762,5491,131,4761]},
{"matchNum":69,"teams":[238,4564,3566,8708,1831,663]},
{"matchNum":70,"teams":[7314,1247,6933,95,1922,8023]},
{"matchNum":71,"teams":[8724,467,1512,1058,2876,6161]},
{"matchNum":72,"teams":[6763,6690,5687,811,3467,131]},
{"matchNum":73,"teams":[4041,6762,5902,7913,138,238]},
{"matchNum":74,"teams":[1277,501,1073,3451,663,1247]},
{"matchNum":75,"teams":[3597,4564,95,8023,6161,3566]},
{"matchNum":76,"teams":[1058,8724,1922,2876,6763,5491]},
{"matchNum":77,"teams":[467,6690,1831,151,7314,1307]},
{"matchNum":78,"teams":[811,6933,4761,1512,4925,8708]}
  ];

let numOfMatches = 0;
let highScore = 0;
let hsTeam = "";

var matchNum = 1;
var matchCatch = 1;
var missedMatches = "";
var assignment = "";
let assignIndex = 0;
let matchReported = false

let chargeVal = 0
let Alliance = {
  BLUE : true,
  RED : false
}
t = Alliance.BLUE

// let teamColor
// assignment.substring(0, assignment.indexOf(" ") + 1)

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
let lastFrame
let frameAllow = 10

// important data points

// string of 27 numbers(see key)
// 0 == empty, 1 == cone, 2 === cube
let autoGrid = ""
let grid = ""

let drop = 0

// 0 == no charge, 1 == on unbalanced, 2 == on balanced
let autoCharge = 0
let charge = 0

function setup() {

  cnv = createCanvas(800, 500);
  cnv.touchEnded(handleFieldTouch);
  background(255);
  textAlign(CENTER);
  rectMode(CENTER);
  strokeCap(SQUARE)
  lastFrame = millis()
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
    // console.log("ran")

}

function draw() {
  console.log("please do smth")
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
  r.alliance = t
  r.draw_robot()

  let val1
  let val2
    if (t) {
        val1 = 50
        for (let i = 0; i < 3; i ++) {
        val2 = 150
        for (let k = 0; k < 9; k ++) {
            lst[i][k].x = val1
            lst[i][k].y = val2
            val2 += 24
        }
        val1 += 20
    } 
  } else {
        val1 = 642
        for (let i = 2; i >= 0; i --) {
            val2 = 150
            for (let k = 0; k < 9; k ++) {
                lst[i][k].x = val1
                lst[i][k].y = val2
                val2 += 24
            }
            val1 += 20
        }

      }
  for (let i = 0; i < 3; i ++) {
      for (let k = 0; k < 9; k ++) {
        lst[i][k].draw_holder(mouseX,mouseY, 0)
        lst[i][k].can_click()
      }
  }
}

function eraseStuff() {
  chargeVal = 0;
  // wait(100)
  erase = false
}

function handleFieldTouch(){
  if ((mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 500) && (millis() - lastFrame) > frameAllow) {
    lastFrame = millis()
    // drop button
  if (r.cone || r.cube) {
    if (mouseX > 645 && mouseX < 710 && mouseY > 2 && mouseY < 40) {
      r.cube = false
      r.cone = false
      drop ++
    }
  }
    // charging stations
  if (mouseY > 205 && mouseY < 310) {
    if (mouseX > 180 && mouseX < 260){
      if (mouseX < 205) {
         chargeVal == -1 ? chargeVal = 0 : chargeVal = 1
      } else if (mouseX > 235){
        chargeVal == 1 ? chargeVal = 0 : chargeVal = -1
      } else {
        erase ? eraseStuff() : chargeVal = 2
      }
    } if (mouseX > 482 && mouseX < 562) {
      if (mouseX < 507){
        chargeVal == 1 ? chargeVal = 0 : chargeVal = -1
      } else if (mouseX > 537){
        chargeVal == -1 ? chargeVal = 0 : chargeVal = 1
      } else {
        erase ? eraseStuff() : chargeVal = 2
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
    if (mouseX > 342 && mouseX < 408 && mouseY > 11 && mouseY < 50 && !r.cone && !r.cube) {
        erase = true
    } else if (erase && (mouseX > 50 && mouseX < 342) || (mouseX > 409 && mouseX < 645) && (mouseY > 2 && mouseY < 45)) {
      erase = false
    }
  let tempThing
  // picking up from human player
  if (mouseY > 50 && mouseY < 142) {
    if (t) {
      if (mouseX > 650 && mouseX < 700) {
        if (mouseY > 99) {
          tempThing = r.cone
          !r.cube ? r.cone = !tempThing : pomegranite = 0
        } else {
          tempThing = r.cube
          !r.cone ? r.cube = !tempThing : pomegranite = 0
        }
      }
    } else {
      if (mouseX > 50 && mouseX < 100) {
        if (mouseY > 99) {
          tempThing = r.cone
          !r.cube ? r.cone = !tempThing : pomegranite = 0
        } else {
          tempThing = r.cube
          !r.cone ? r.cube = !tempThing : pomegranite = 0
        }
      }
    }
  }
  return true
  } return false
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

  t ? b_charging_cell(chargeVal) : r_charging_cell(chargeVal)
  
  // blue community
  stroke(0,0,200)
  strokeWeight(2)
  // line(104,150,104,366)
  
  line(196,150,196,209)
  line(196,209,256,209)
  line(256,209,256,366)
  

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

  // drop
  if (r.cone || r.cube) {
    strokeWeight(2)
    stroke(151)
    fill(50)
    rect(647,2,56,46,5)
    fill(250)
    noStroke()
    textSize(18)
    text("Drop", 675,30)
  } else {

    noStroke()
    fill(255)
    rect(645,1,59,47)
    fill(150)
    rect(650,5,50,40,5)
    fill(250)
    noStroke()
    textSize(15)
    text("Drop", 675,30)
  }

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

  // change color


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
  // console.log("console works!")
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
       stroke(0,0,0)
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

function chooseColor(a) {
  console.log(a)
}

console.log("sneaky easter egg:)")

$(document).ready(() =>{
  // console.log("smth wokred")

  loadLocalTeams();

  // $("#metaLink").click((e) => {
  //   $("#metaPage").addClass("d-block").removeClass("d-none");
  //   $("#homePage").addClass("d-none").removeClass("d-block");
  //   $("#metaTitle").html("Recap data for " + assignment + ":");
  //   $("#matchesScoutedDiv").html(numOfMatches);
  //   $("#highScoreDiv").html("Team: " + hsTeam + " - Score: " + highScore);
  //   $("#matchesMissedDiv").html(missedMatches);
  //   return false;
  // });

  $("#matchLink").click((e) => {
    $("#matchReportPage").addClass("d-block").removeClass("d-none");
    $("#homePage").addClass("d-none").removeClass("d-block");
    $("#matchBox").val(matchNum);
    let current = schedule[matchNum - 1];
    console.log(current.teams[assignIndex]);
    $('#teamBox option[value="0"]').prop("selected", false);
    $('#teamBox option[value="' + current.teams[assignIndex] + '"]').prop(
      "selected",
      true
    );
    return false;
  });

  $("#homePageLink").click((e) => {
    $("#assignPage").addClass("d-none").removeClass("d-block");
    $("#homePage").addClass("d-block").removeClass("d-none");
    assignment = $("#assignBox").val();
    missedMatches = assignment + ": ";
    assignIndex = defineAssignment(assignment);
    assignIndex > 2 ? t = true : t = false
    // console.log(assignment)
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
    matchReported = true;
    numOfMatches++;
    grid = saveGrid()
    charge = chargeVal
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
      drop + //7
      "," +
      aggressionValue + //8
      "," +
      Date.now() + //9
      "," +
      decodeNote($("#match-notesBox").val()) + //10
      "," +
      $("#match-scoutBox").val(); //11

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

  $(".upMatch").click((e) => {
    // window.scroll(500,500)
    $("#matchModal").modal("hide");
    // increaseMatchNum()
    matchReported ? increaseMatchNum() : false;
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
  drop = 0
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

function loadLocalTeams() {
  $.each(teamNames, function (i, item) {
    $("#teamBox").append(
      $("<option>", {
        value: item.num,
        text: item.num + ": " + item.name,
      })
    );
    $("#numBox").append(
      $("<option>", {
        value: item.num,
        text: item.num + ": " + item.name,
      })
    );
  });
}
