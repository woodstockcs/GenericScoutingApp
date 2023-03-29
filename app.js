  // TODO:
  // make/fix high score counter(turn off for now)

  var teamNames = [
    // { num: 58, name: "The Riot Crew" },
    // { num: 61, name: "The Intimidators" },
    // { num: 69, name: "HYPER" },
    // { num: 78, name: "AIR STRIKE" },
    // { num: 88, name: "TJ2" },
    // { num: 95, name: "Grasshoppers" },
    { num: 97, name: "Bionic Beef" },
    { num: 125, name: "NUTRONs" },
    // { num: 126, name: "Gael Force" },
    // { num: 131, name: "Chaos" },
    // { num: 133, name: "B.E.R.T." },
    // { num: 138, name: "Entropy" },
     { num: 151, name: "Tough Techs" },
    // { num: 155, name: "The TechnoNuts" },
    // { num: 157, name: "AZTECHS" },
    //  { num: 166, name: "Chop Shop" },
    //  { num: 172, name: "Northern Force" },
    // { num: 175, name: "Buzz Robotics "},
    //  { num: 176, name: "Aces High" },
    // { num: 177, name: "Bobcat Robotics" },
    //  { num: 178, name: "The 2nd Law Enforcers" },
    //  { num: 181, name: "Birds of Prey" },
     { num: 190, name: "Gompei and the H.E.R.D." },
    // { num: 195, name: "CyberKnights" },
    // { num: 228, name: "GUS Robotics" },
    { num: 230, name: "Gaelhawks" },
    // { num: 236, name: "Techno-Ticks" },
    { num: 237, name: "Black Magic Robotics" },
    { num: 238, name: "Crusaders" },
    { num: 246, name: "Lobstah Bots" },
    // { num: 319, name: "Big Bad Bob" },
    // { num: 467, name: "Colonials" },
    // { num: 501, name: "Team 501 - The PowerKnights Robotics Team" },
    // { num: 509, name: "Red Storm" },
    // { num: 558, name: "Elm City Robo Squad" },
    // { num: 571, name: "Team Paragon" },
    // { num: 663, name: "Robonauts" },
    // { num: 716, name: "Who’sCTEKS" },
    // { num: 811, name: "Wild Cards" },
    // { num: 839, name: "Rosie Robotics" },
    // { num: 971, name: "Spartan Robotics" },
    // { num: 1027, name: "Mechatronic Maniacs" },
    // { num: 1058, name: "PVC Pirates" },
    // { num: 1071, name: "Team MAX" },
    // { num: 1073, name: "The Force Team" },
    // { num: 1099, name: "DiscoTechs" },
    // { num: 1153, name: "Timberwolves" },
    // { num: 1247, name: "Blood, Sweat, and Gears" },
    // { num: 1277, name: "The Robotomies" },
    // { num: 1307, name: "Robosaints" },
    // { num: 1474, name: "Titans" },
    // { num: 1512, name: "The Big Red" },
    // { num: 1517, name: "AMP'D UP" },
    // { num: 1519, name: "Mechanical Mayhem" },
    // { num: 1699, name: "Robocats" },
    // { num: 1729, name: "Inconceivable" },
    // { num: 1740, name: "Cyber Colonels" },
    { num: 1757, name: "Wolverines" },
    { num: 1761, name: "STEAMpunk Tigers" },
    // { num: 1768, name: "Nashoba Robotics" },
    // { num: 1831, name: "Screaming Eagles" },
    { num: 1922, name: "Oz-Ram" },
    // { num: 1965, name: "Firebirds" },
    // { num: 1991, name: "Dragons" },
    { num: 2067, name: "Apple Pi" },
    { num: 2084, name: "Robots by the C" },
    // { num: 2168, name: "Aluminum Falcons" },
    // { num: 2262, name: "Robo-Panthers" },
    // { num: 2342, name: "Team Phoenix" },
    // { num: 2370, name: "IBOTS" },
    // { num: 2423, name: "The KwarQs" },
    // { num: 2523, name: "Tech Storm" },
    // { num: 2648, name: "Infinite Loop" },
    // { num: 2712, name: "Power Surge 4-H Robotics" },
    { num: 2713, name: "iRaiders" },
    { num: 2876, name: "Devilbotz" },
    { num: 2877, name: "LigerBots" },
    // { num: 3146, name: "GRANBY GRUNTS" },
    // { num: 3182, name: "Athena’s Warriors" },
    // { num: 3205, name: "Patriots" },
    // { num: 3323, name: "Potential Energy" },
    // { num: 3451, name: "The ANOMALY" },
    { num: 3461, name: "Operating PEACCE Robotics" },
    // { num: 3464, name: "Sim-City" },
    { num: 3467, name: "Windham Windup" },
    // { num: 3566, name: "Gone Fishin’" },
    // { num: 3597, name: "Robo-Rangers" },
    // { num: 3609, name: "Duct Tape Dragons" },
    // { num: 3623, name: "TerrorBots" },
    // { num: 3654, name: "TechTiger" },
    { num: 4041, name: "Iron Tigers" },
    // { num: 4048, name: "Redshift" },
    // { num: 4097, name: "Devilbots" },
    { num: 4169, name: "Warrior Robotics" },
    { num: 4176, name: "Iron Tigers" },
    { num: 4311, name: "Swampscott Currents" },
    // { num: 4564, name: "Orange Chaos" },
    // { num: 4761, name: "The Roborockets" },
    // { num: 4905, name: "Andromeda One" },
    { num: 4909, name: "Bionics" },
    // { num: 4925, name: "The Resistance" },
    // { num: 4929, name: "Maroon Monsoon" },
    { num: 5000, name: "Hammerheads" },
    // { num: 5112, name: "The Gongoliers" },
    { num: 5347, name: "Gryphons" },
    // { num: 5422, name: "Stormgears FRC" },
    { num: 5459, name: "Ipswitch TIGERS" },
    // { num: 5491, name: "Hard Reset" },
    { num: 5494, name: "BizarBots Robotics" },
    { num: 5563, name: "Phalanx" },
    // { num: 5633, name: "Hyde Mecha Wolves" },
    { num: 5687, name: "The Outliers" },
    { num: 5735, name: "Control Freaks" },
    // { num: 5752, name: "Bevbotics" },
    // { num: 5813, name: "Morpheus" },
    // { num: 5846, name: "SouthCoast Corsairs" },
    // { num: 5902, name: "The Wire Clippers" },
    // { num: 6153, name: "The Blue Crew" },
    // { num: 6161, name: "Equilibrium" },
    { num: 6201, name: "The Highlanders" },
    // { num: 6328, name: "Mechanical Advantage" },
    // { num: 6329, name: "The Bucks’ Wrath" },
    // { num: 6367, name: "The ElectroLights" },
    // { num: 6529, name: "Beantown Blitz" },
    // { num: 6620, name: "The Northmengineers" },
    // { num: 6690, name: "MV roboPride" },
    // { num: 6691, name: "Torque" },
    // { num: 6723, name: "Mechanical Mounties" },
    { num: 6731, name: "Record Robotics" },
    // { num: 6762, name: "Oscats" },
    // { num: 6763, name: "FUSION" },
    { num: 6933, name: "Archytas" },
    // { num: 7127, name: "LongMetal" },
    // { num: 7133, name: "Steam Makers" },
    // { num: 7153, name: "Aetos Dios (Eagles of Zeus)" },
    // { num: 7314, name: "Tornadoes" },
    // { num: 7407, name: "Wired Boars" },
    // { num: 7416, name: "Northern Horizons" },
    // { num: 7674, name: "RaiderBots" },
    { num: 7795, name: "Norse Code" },
    { num: 7822, name: "General Robotics" },
    // { num: 7907, name: "Spartan Robotics" },
    // { num: 7913, name: "‘Bear'ly Functioning" },
    { num: 8013, name: "Boston Lions" },
    { num: 8023, name: "LRTC Androscoggin Argonauts" },
    // { num: 8046, name: "Laker Bots" },
    // { num: 8085, name: "MOJO" },
    // { num: 8544, name: "Reinforcement" },
    { num: 8567, name: "Team Ultraviolet" },
    // { num: 8604, name: "Alpha Centauri" },
    { num: 8626, name: "Cyber Sailors" },
    { num: 8708, name: "Ov3r1y K0mp13x" },
    { num: 8709, name: "Pathfinder Techs" },
    // { num: 8724, name: "Mayhem" },
    // { num: 8883, name: "Green Mountain Gears" },
    // { num: 8889, name: "Project W" },
    // { num: 9056, name: "Kents Hill Huskies 9056" },
    { num: 99999, name: "... OTHER ..." },
  ]

  let schedule = [
    {"matchNum":1,"teams":[6731,6933,5494,5563,125,190]},
{"matchNum":2,"teams":[4176,151,8023,8567,7822,5347]},
{"matchNum":3,"teams":[6201,1757,2067,2713,5459,4169]},
{"matchNum":4,"teams":[8626,238,3461,237,2084,5735]},
{"matchNum":5,"teams":[2877,8709,1761,4909,5687,97]},
{"matchNum":6,"teams":[4041,5000,8708,1922,4311,246]},
{"matchNum":7,"teams":[230,8013,125,3467,6933,7822]},
{"matchNum":8,"teams":[5347,2067,3461,1757,2084,8567]},
{"matchNum":9,"teams":[1761,8626,6731,5459,151,6201]},
{"matchNum":10,"teams":[8708,97,237,2713,5000,246]},
{"matchNum":11,"teams":[5563,4176,5735,5687,5494,4311]},
{"matchNum":12,"teams":[4169,1922,8709,238,230,190]},
{"matchNum":13,"teams":[8013,3467,2877,8023,4041,4909]},
{"matchNum":14,"teams":[5459,237,7822,97,2084,8626]},
{"matchNum":15,"teams":[8567,6933,4311,1761,3461,5000]},
{"matchNum":16,"teams":[238,1757,5687,1922,151,2713]},
{"matchNum":17,"teams":[8708,2877,5563,8023,4169,125]},
{"matchNum":18,"teams":[246,5494,230,6731,5347,8013]},
{"matchNum":19,"teams":[3467,2067,5735,8709,4176,4909]},
{"matchNum":20,"teams":[4041,190,6933,8626,6201,7822]},
{"matchNum":21,"teams":[5563,238,2084,1757,2877,151]},
{"matchNum":22,"teams":[1761,5687,1922,8023,8567,246]},
{"matchNum":23,"teams":[237,5494,4169,4311,5459,3467]},
{"matchNum":24,"teams":[125,5735,6731,5347,4041,2713]},
{"matchNum":25,"teams":[8709,230,5000,4176,2067,8013]},
{"matchNum":26,"teams":[3461,8708,4909,6201,97,190]},
{"matchNum":27,"teams":[246,5687,3467,1922,8626,6933]},
{"matchNum":28,"teams":[5459,4041,5494,151,1761,4169]},
{"matchNum":29,"teams":[2713,8023,2877,230,4176,6731]},
{"matchNum":30,"teams":[5563,8567,5000,5735,7822,97]},
{"matchNum":31,"teams":[2084,5347,8708,4311,8709,238]},
{"matchNum":32,"teams":[4909,6201,237,1757,3461,8013]},
{"matchNum":33,"teams":[190,8023,8626,2067,125,4041]},
{"matchNum":34,"teams":[7822,246,2877,5687,5735,2713]},
{"matchNum":35,"teams":[5459,8708,6731,5347,3467,8709]},
{"matchNum":36,"teams":[5000,4311,97,6201,230,2084]},
{"matchNum":37,"teams":[1922,4176,1757,6933,8013,1761]},
{"matchNum":38,"teams":[2067,190,5494,8567,237,238]},
{"matchNum":39,"teams":[125,3461,151,4909,4169,5563]},
{"matchNum":40,"teams":[4311,6731,6201,5000,5687,5459]},
{"matchNum":41,"teams":[7822,1922,8013,5735,8709,8626]},
{"matchNum":42,"teams":[2084,2713,6933,97,5494,8023]},
{"matchNum":43,"teams":[190,1757,5347,3461,5563,3467]},
{"matchNum":44,"teams":[4169,246,2067,125,237,4176]},
{"matchNum":45,"teams":[230,4909,8567,8708,1761,238]},
{"matchNum":46,"teams":[151,4041,8709,2877,6201,5494]},
{"matchNum":47,"teams":[5000,8023,3467,8626,5459,5563]},
{"matchNum":48,"teams":[97,2713,4176,190,1922,3461]},
{"matchNum":49,"teams":[4909,7822,2067,6731,246,1757]},
{"matchNum":50,"teams":[151,238,6933,5735,4311,230]},
{"matchNum":51,"teams":[4041,8013,2084,8708,4169,8567]},
{"matchNum":52,"teams":[125,1761,5347,5687,2877,237]},
{"matchNum":53,"teams":[246,6201,8709,5494,3461,7822]},
{"matchNum":54,"teams":[8626,4909,1757,238,5000,4176]},
{"matchNum":55,"teams":[8567,190,5735,230,5459,8023]},
{"matchNum":56,"teams":[2067,8708,151,6933,5347,2877]},
{"matchNum":57,"teams":[2084,125,4311,3467,6731,1922]},
{"matchNum":58,"teams":[4169,8013,5687,1761,97,5563]},
{"matchNum":59,"teams":[237,2713,230,4041,5735,1757]},
{"matchNum":60,"teams":[8709,8023,3461,5347,5000,151]},
{"matchNum":61,"teams":[238,1922,5459,246,4909,125]},
{"matchNum":62,"teams":[190,4311,1761,2877,8626,2067]},
{"matchNum":63,"teams":[7822,2084,5687,5494,8708,4176]},
{"matchNum":64,"teams":[6933,97,4169,6731,237,4041]},
{"matchNum":65,"teams":[8013,5563,6201,3467,2713,8567]},
{"matchNum":66,"teams":[2877,125,5459,3461,5735,246]},
{"matchNum":67,"teams":[5494,5347,1922,5000,190,4909]},
{"matchNum":68,"teams":[237,1757,1761,8023,7822,8708]},
{"matchNum":69,"teams":[4176,8567,6201,151,6731,2084]},
{"matchNum":70,"teams":[97,3467,4041,2713,2067,238]},
{"matchNum":71,"teams":[4169,230,8626,6933,8709,5687]},
{"matchNum":72,"teams":[4311,5563,5347,8013,246,190]},
{"matchNum":73,"teams":[4176,1761,5459,2084,2877,1922]},
{"matchNum":74,"teams":[5735,238,8023,6201,3467,8708]},
{"matchNum":75,"teams":[7822,6731,5000,3461,4169,4041]},
{"matchNum":76,"teams":[8709,8567,97,1757,6933,125]},
{"matchNum":77,"teams":[5687,151,230,2067,5563,237]},
{"matchNum":78,"teams":[5494,4909,2713,8013,8626,4311]}
  ];

let camera = true

let numOfMatches = 0;
let highScore = 0;
let hsTeam = "";

var matchNum = 1;
var matchCatch = 1;
var missedMatches = "";
var assignment = "";
let assignIndex = 0;
let matchReported = false

let autoPlaces = 0;
let confirmAuto = false
let droppedX = 635

let chargeVal = 0
let Alliance = {
  BLUE : true,
  RED : false
  }
t = Alliance.BLUE

let teamColor
// assignment.substring(0, assignment.indexOf(" ") + 1)
// TRUE is BLUE alliance
// FALSE is RED alliance

let mode = true
let erase = false
let parked = false
let taxied = false

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
let frameAllow = 100

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
  createCanvas(800,500)
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
  // console.log("please do smth")
  noStroke()
  fill(255);
  // rect(0,0,50,50)
  // fill(0)
  // textSize(14)
  // text(mouseX,25,25);
  // text(mouseY,25,35);
  
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

  if (autoPlaces > 2) checkAuto()

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
      drawDropped(r.cone)
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
      park = false
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
      confirmAuto = true
      if (autoCharge == 0) {autoCharge = 3}
      chargeVal = 0
    } else {
      mode = true;
      switchMode(mode);
    } rectMode(CORNER)
}
    // erase mode
    if (mouseX > 342 && mouseX < 408 && mouseY > 11 && mouseY < 50 && !r.cone && !r.cube) {
        erase = !erase
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
  // change color
  if (mouseX > 49 && mouseX < 142 && mouseY > 9 && mouseY < 35) {
    let ex = t
    t = !ex
  }
  // parking
  if (!mode && ((mouseX > 110 && mouseX < 180 && mouseY > 155 && mouseY < 360)||(mouseX > 565 && mouseX < 635 && mouseY > 155 && mouseY < 360))) {
    parked = !parked
    chargeVal = 0
    tempCharge = 0
  }

  // taxi
  if (mode) {
    if (mouseX > 258 && mouseX < 490 && mouseY > 55 && mouseY < 360) {
      taxied = !taxied
      chargeVal = 0
      tempCharge = 0
    }
  }

  // verify auto
  if (mouseX > 185 && mouseX < 295 && mouseY > 375 && mouseY < 425) {
    confirmAuto = true
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

  // erase
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
    fill (150)
    strokeWeight(2)
    t ? stroke(151,0,0) : stroke(0,0,151)
    rect(50,5,90,25,5)
    textSize(15)
    noStroke()
    fill(250)
    text("Switch Color", 95,23)

    // park
    if (!mode && parked) {
      fill(255,255,0,100)
      if (t) {
        rect(110,153,85,56)
        rect(110,209,74,96)
        rect(110,305,145,60)
      } else {
        rect(554,153,87,56)
        rect(565,209,75,96)
        rect(494,305,146,60)
      }
    }

    // taxi
    if (mode && taxied) {
      fill(255,255,0,100)
      if (t) {
        rect(258,101,117,263)
        rect(198,101,60,107)
        rect(316,52,59,49)
      } else {
        rect(377,101,115,263)
        rect(492,101,60,107)
        rect(377,52,58,49)
      }
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

function checkAuto() {
  if (confirmAuto) {
    fill(255)
    noStroke()
    rect(180,370,120,60)
  } else {
    fill(255,70,70)
    stroke(255,0,0)
    rect(185,375, 110,50,5)
    noStroke()
    fill(255)
    textSize(15)
    text("This seems high", 240,390)
    text("Should you", 240, 406)
    text("be in tele?", 240, 418)
  }
}

function drawDropped(type) {
  rectMode(CENTER)
  if (type) {
    fill(255,189,35)
    noStroke()
    ellipse(droppedX,35,9,9)
  } else {
    fill(163,61,255)
    noStroke()
    rect(droppedX,35,10,10,2)
  }
  droppedX -= 15
  rectMode(CORNER)
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
                    if (mode) autoPlaces --
                } else {
                this.kind != 0 ? this.state = this.kind : r.cone ? this.state = 1 : this.state = 2 
                r.cone = false
                r.cube = false
                if (mode) autoPlaces++
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


  $("#captureLink").click((e) => {
    setUpCoach()
    // $("#captureQrDataPage").addClass("d-block").removeClass("d-none");
    // $("#homePage").addClass("d-none").removeClass("d-block");
    // $("#captureTitle").html("Capture data from QR:");
    // startCamera()
    // field()
return false;
  });

  
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
    if (assignIndex == 6) {
      setUpCoach()
    } else {
      assignIndex > 2 ? t = true : t = false
    // console.log(assignment)
    if (assignment != "") {
      $("#titleAssign").html("You're assigned " + assignment);
    } else {
      $("#titleAssign").html("You have not been assigned a driver station");
    }
    } return false;
  });

  $("#pitLink").click((e) => {
    $("#pitReportPage").addClass("d-block").removeClass("d-none");
    $("#homePage").addClass("d-none").removeClass("d-block");
    return false;
  });

  // $("#toggleCamera").click((e) => {
  //   if (camera) {
  //     $("#QRcanvas").addClass("d-none").removeClass("d-block");
  //     closeQRCamera()
  //     $("#cameraMessage").html("Open Camera")
  //   } else {
  //     $("#QRcanvas").addClass("d-block").removeClass("d-none");
  //     startCamera()
  //     $("#cameraMessage").html("Close Camera")
  //   }
  //   camera = !camera
  //   return false;
  // });

  $(".homeClick").click((e) => {
    window.scroll(500,500)
    $("#metaPage").addClass("d-none").removeClass("d-block");
    $("#matchReportPage").addClass("d-none").removeClass("d-block");
    $("#pitReportPage").addClass("d-none").removeClass("d-block");
    $("#captureQrDataPage").addClass("d-none").removeClass("d-block");
    $("#homePage").addClass("d-block").removeClass("d-none");
    closeQRCamera();
    // console.log(missedMatches);
    // clearForm();
    clearPitForm();
    return false;
  });

  $(".reassignLink").click((e) => {
    $("#assignPage").addClass("d-block").removeClass("d-none");
    $("#coachAssign").addClass("d-none").removeClass("d-block")
    $("#homePage").addClass("d-none").removeClass("d-block");
    $("#captureQrDataPage").addClass("d-none").removeClass("d-block");
    closeQRCamera()
    assignment = "";
    $("#assignBox").val("");
    return false;
  });


  // coach page button stuff
  $("#mapButton").click((e) => {
    $("#mapPage").addClass("d-block").removeClass("d-none");
    $("#graphPage").addClass("d-none").removeClass("d-block");
    $("#tablePage").addClass("d-none").removeClass("d-block");
    $("#cameraPage").addClass("d-none").removeClass("d-block");
    $("#mapButton").addClass("btn-success").removeClass("btn-outline-success");
    $("#graphButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#tableButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#cameraButton").addClass("btn-outline-success").removeClass("btn-success");
    closeQRCamera()
    return false;
  });

  $("#graphButton").click((e) => {
    $("#mapPage").addClass("d-none").removeClass("d-block")
    $("#graphPage").addClass("d-block").removeClass("d-none")
    $("#tablePage").addClass("d-none").removeClass("d-block")
    $("#cameraPage").addClass("d-none").removeClass("d-block")
    $("#mapButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#graphButton").addClass("btn-success").removeClass("btn-outline-success");
    $("#tableButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#cameraButton").addClass("btn-outline-success").removeClass("btn-success");
    closeQRCamera()
    return false;
  });

  $("#tableButton").click((e) => {
    $("#mapPage").addClass("d-none").removeClass("d-block");
    $("#graphPage").addClass("d-none").removeClass("d-block");
    $("#tablePage").addClass("d-block").removeClass("d-none");
    $("#cameraPage").addClass("d-none").removeClass("d-block");
    $("#mapButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#graphButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#tableButton").addClass("btn-success").removeClass("btn-outline-success");
    $("#cameraButton").addClass("btn-outline-success").removeClass("btn-success");
    closeQRCamera()
    return false;
  });

  $("#cameraButton").click((e) => {
    $("#mapPage").addClass("d-none").removeClass("d-block");
    $("#graphPage").addClass("d-none").removeClass("d-block");
    $("#tablePage").addClass("d-none").removeClass("d-block");
    $("#cameraPage").addClass("d-block").removeClass("d-none");
    $("#mapButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#graphButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#tableButton").addClass("btn-outline-success").removeClass("btn-success");
    $("#cameraButton").addClass("btn-success").removeClass("btn-outline-success");
    startCamera()
    return false;
  });


  $("#verifyDataButton").click((e) => {

    $("#verifyStuff").addClass("d-none").removeClass("d-block");
    $("#actualReport").addClass("d-block").removeClass("d-none");
    // field();
    chargeVal = 0
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
    if (autoGrid == "") {autoGrid = "000000000000000000000000000"}
    t ? teamColor = "Blue" : teamColor = "Red"
    matchReported = true;
    console.log(teamColor)
    numOfMatches++;
    grid = saveGrid()
    charge = chargeVal
    if (charge == 0) {charge = 3}
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
      $("#match-scoutBox").val() + //11
      "," + 
      teamColor; //12

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

  $(".delete-button").click(function() {
    // Get the parent row of the clicked button
    var row = $(this).closest("tr");
  
    // Remove the row from the table
    row.remove();
  });

  $("#clearTableButton").click((e) => {
    console.log("row should be removed now...")
    $("#avgsDataTable tbody").append("")
    return false;
  });

  $(".removeRow").click((e) => {
    console.log("row should be removed now...")
    $("#avgsDataTable").html(" ")
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
    case "COACH":
      return 6;
      break;
    default:
      return 0;
      break;
  }
}

function clearForm() {
  // field variables
  taxied = false
  parked = false
  mode = true;
  autoGrid = ""
  grid = ""
  drop = 0
  charge = 0
  autoCharge = 0;
  chargeVal = 0
  tempCharge = 0
  autoPlaces = 0;
  for (let i = 0; i < 3; i ++) {
    for (let k = 0; k < 9; k ++) {
      lst[i][k].state = 0
      lst[i][k].can_click()
    }
}
assignIndex > 2 ? t = true : t = false

  console.log("it worked!");
  // draw();

  // html variables
  $("#defensePlayed").val("0");
  $("#defenseReceived").val("0");

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

////////////
// QR functionality v1
////////////

// var constraints;
// var imageCapture;
// var mediaStream;

// var canvas = document.querySelector('#captureCanvas');
// var img = document.querySelector('#captureImg');
// var video = document.querySelector('#captureVideo');
// var videoSelect = document.querySelector('select#captureVideoSource');
// videoSelect.onchange = getStream;

// function closeQRCamera() {
//   if (mediaStream) {
//     mediaStream.getTracks().forEach(track => {
//       track.stop();
//     });
//   }
// }

// // From the list of media devices available, set up the camera source <select>,
// // then get a video stream from the default camera source.
// function gotDevices(deviceInfos) {
//   for (var i = 0; i !== deviceInfos.length; ++i) {
//     var deviceInfo = deviceInfos[i];
//     console.log('Found media input or output device: ', deviceInfo);
//     var option = document.createElement('option');
//     option.value = deviceInfo.deviceId;
//     if (deviceInfo.kind === 'videoinput') {
//       option.text = deviceInfo.label || 'Camera ' + (videoSelect.length + 1);
//       videoSelect.appendChild(option);
//     }
//   }
// }

// // Get a video stream from the currently selected camera source.
// function getStream() {
//   closeQRCamera();
//   var videoSource = videoSelect.value;
//   constraints = {
//     video: {deviceId: videoSource ? {exact: videoSource} : undefined}
//   };
//   navigator.mediaDevices.getUserMedia(constraints)
//     .then(gotStream)
//     .catch(error => {
//       console.log('getUserMedia error: ', error);
//     });
// }

// // Display the stream from the currently selected camera source, and then
// // create an ImageCapture object, using the video from the stream.
// function gotStream(stream) {
//   console.log('getUserMedia() got stream: ', stream);
//   mediaStream = stream;
//   video.srcObject = stream;
//   video.classList.remove('hidden');
//   imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
//   getCapabilities();
// }

// // Get the PhotoCapabilities for the currently selected camera source.
// function getCapabilities() {
//   imageCapture.getPhotoCapabilities().then(function(capabilities) {
//     console.log('Camera capabilities:', capabilities);
//     if (capabilities.zoom.max > 0) {
//       zoomInput.min = capabilities.zoom.min;
//       zoomInput.max = capabilities.zoom.max;
//       zoomInput.value = capabilities.zoom.current;
//       zoomInput.classList.remove('hidden');
//     }
//   }).catch(function(error) {
//     console.log('getCapabilities() error: ', error);
//   });
// }

////////////
// QR functionality v2
////////////

var video = document.createElement("video");
var canvasElement = document.getElementById("QRcanvas");
var QRcanvas = canvasElement.getContext("2d");
var loadingMessage = document.getElementById("loadingMessage");
var outputContainer = document.getElementById("QRoutput");
var outputMessage = document.getElementById("outputMessage");
var outputData = document.getElementById("outputData");
var foundCode = false;
var data = [];

function drawLine(begin, end, color) {
  QRcanvas.beginPath();
  QRcanvas.moveTo(begin.x, begin.y);
  QRcanvas.lineTo(end.x, end.y);
  QRcanvas.lineWidth = 4;
  QRcanvas.strokeStyle = color;
  QRcanvas.stroke();
}

function tick() {
  loadingMessage.innerText = "⌛ Loading video...";
  if (outputContainer) {
    outputContainer.hidden = false;
  }
  
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    loadingMessage.hidden = true;
    canvasElement.hidden = false;
    outputContainer.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    QRcanvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = QRcanvas.getImageData(
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert"
    });
    if (code) {
      drawLine(
        code.location.topLeftCorner,
        code.location.topRightCorner,
        "#FF3B58"
      );
      drawLine(
        code.location.topRightCorner,
        code.location.bottomRightCorner,
        "#FF3B58"
      );
      drawLine(
        code.location.bottomRightCorner,
        code.location.bottomLeftCorner,
        "#FF3B58"
      );
      drawLine(
        code.location.bottomLeftCorner,
        code.location.topLeftCorner,
        "#FF3B58"
      );
      if (code.data.length > 0) {
        data = code.data.split(",");
        foundCode = true;
        // $("#actionButtons").removeClass("invisible");
        var parsed = "";
        console.log(data[0]);
        $("#outputMessage").html(data[0]);
        $('#exampleModal').modal('show');

        $("#outputMessage").html(code.data);

      }
    } else {
      // outputMessage.hidden = false;
      // outputData.parentElement.hidden = true; 
    }
  }
  if (!foundCode) requestAnimationFrame(tick);
}

function resetQR() {
  foundCode = false;
  $("#outputMessage").html("<i>Looking for a QR Code...</i>");
  $("#actionButtons").addClass("invisible");
  requestAnimationFrame(tick);
  closeQRCamera()
  startCamera()
}

function closeQRCamera() {
  if (video.srcObject) {
    // video.srcObject.stop();
    video.srcObject.getTracks().forEach(track => {
      track.stop();
    });
  }
}

$("#ignoreButton").click(e => {
  console.log("ignoring");
  e.preventDefault();
  resetQR();
});

$("#insertButton").click(e => {
  // console.log("WE WANT TO KEEP THIS.");
  e.preventDefault();
  resetQR();
  console.log(data)
  // outputContainer.innerHTML += makeRow(data[0]);
  $("#avgsDataTable tbody").append(makeRow(data[0]));
  $("#actionButtons").removeClass("invisible")
});


function deleteRow(button) {
  // Get the table row that contains the button
  var row = button.parentNode.parentNode;
  // Remove the row from the table
  row.parentNode.removeChild(row);
}

function makeRow(data) {
  let teamNum = data.substring(0,data.indexOf("*"))
  var newRow = ""
  newRow += 
      "<tr style='border-top: 2px solid black'><td>" +
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data.substring(0,data.indexOf("*")) + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += 
      data + "</td><td>"
      data = data.substring(data.indexOf("*")+1)
    newRow += "<button id='" + teamNum + "' class='btn btn-outline-danger btn-block mt-3 mb-3 delete-button p-1' onClick='deleteRow(this)'>X</button>"  
    newRow += "</td></tr>";
    console.log(newRow)
    return newRow
}

function startCamera() {
    // Get a list of available media input (and output) devices
    // then get a MediaStream for the currently selected input device
    // Use facingMode: environment to attemt to get the front camera on phones
navigator.mediaDevices
.getUserMedia({ video: { facingMode: "environment" } })
.then(function(stream) {
  video.srcObject = stream;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnimationFrame(tick);
});

}

function setUpCoach() {
  $("#mapPage").addClass("d-block").removeClass("d-none");
  $("#graphPage").addClass("d-none").removeClass("d-block");
  $("#tablePage").addClass("d-none").removeClass("d-block");
  $("#cameraPage").addClass("d-none").removeClass("d-block");
  $("#assignPage").addClass("d-none").removeClass("d-block");

  $("#captureQrDataPage").addClass("d-block").removeClass("d-none");
  $("#homePage").addClass("d-none").removeClass("d-block");
  $("#captureTitle").html("Capture data from QR:");
  $("#homeButton5").addClass("d-none").removeClass("d-block");
  $("#mapButton").addClass("btn-success").removeClass("btn-outline-success");
  $("#graphButton").addClass("btn-outline-success").removeClass("btn-success");
  $("#tableButton").addClass("btn-outline-success").removeClass("btn-success");
  $("#cameraButton").addClass("btn-outline-success").removeClass("btn-success");
  // startCamera()
  // field()
  return false;
}

// p5 section part 2 (fix this)
// instance mode

// let lines = [];
// let currentLine = [];
// let drawing = true;
// let undoStack = [];

// let drawButton, eraseButton, undoButton;
// let drawButtonColor, eraseButtonColor, undoButtonColor;
// let colorPicker;

// let b_charge = 0
// let r_charge = 0
// let cnv




const coachMap = (p) => {
  let lines = [];
let currentLine = [];
let drawing = true;
let undoStack = [];

let drawButton, eraseButton, undoButton;
let drawButtonColor, eraseButtonColor, undoButtonColor;
let colorPicker;

let b_charge = 0
let r_charge = 0


let canvas;

p.setup = () => {
  canvas = p.createCanvas(800, 400);
  // Disable scrolling with Apple Pencil
  canvas.elt.addEventListener("touchstart", handleTouchStart, false);
  canvas.elt.addEventListener("touchmove", handleTouchMove, false);

  // Rest of your setup code
  p.background(255);
  strokeCap(ROUND)

  drawButtonColor = p.color(0, 255, 0);
  eraseButtonColor = p.color(255, 0, 0);
  undoButtonColor = p.color(0, 0, 255);

  colorPicker = p.createColorPicker(p.color(0, 0, 0));
  colorPicker.position(100, 200);
};

p.draw = () => {
    p.background(255);
    p.noStroke()
    field();

    for (let line of lines) {
      p.stroke(line.color);
      p.strokeWeight(5);
      p.noFill();
      p.beginShape();
      for (let point of line.points) {
        p.vertex(point.x, point.y);
      }
      p.endShape();
    }

    // Draw buttons
    p.stroke(255)
    p.strokeWeight(1)
    p.fill(drawing ? drawButtonColor : 200);
    p.rect(235, 10, 80, 30, 3);
    p.fill(!drawing ? eraseButtonColor : 200);
    p.rect(335, 10, 80, 30, 3);
    p.fill(undoButtonColor);
    p.rect(435, 10, 80, 30, 3);
  
    // Draw button labels
    p.fill(255);
    p.textSize(16);
    p.textAlign(CENTER, CENTER);
    p.text('Draw', 275, 25);
    p.text('Erase', 375, 25);
    p.text('Undo', 475, 25);
};

p.touchStarted = () => {
  if (p.touches.length > 0 && p.touches[0].x > 100 && p.touches[0].y > 100) {
    if (drawing) {
      currentLine = {
        points: [],
        color: colorPicker.color(),
      };
      lines.push(currentLine);
    } else {
      eraseLine(p.touches[0].x, p.touches[0].y);
    }
  } else {
    checkButtons();
  }
};

p.touchMoved = () => {
  if (p.touches.length > 0 && p.touches[0].x > 100 && p.touches[0].y > 100 && drawing) {
    if (currentLine) {
      currentLine.points.push(p.createVector(p.touches[0].x, p.touches[0].y));
    }
  }
};

p.touchEnded = () => {
  currentLine = null;
};

function eraseLine(touchX, touchY) {
  for (let i = lines.length - 1; i >= 0; i--) {
    let line = lines[i];
    for (let point of line.points) {
      let d = p.dist(touchX, touchY, point.x, point.y);
      if (d < 10) {
        undoStack.push(lines.splice(i, 1)[0]);
        return;
      }
    }
  }
}

function checkButtons() {
  if (p.touches.length > 0) {
    let touchX = p.touches[0].x;
    let touchY = p.touches[0].y;

    if (touchX > 235 && touchX < 315 && touchY > 10 && touchY < 40) {
      drawing = true;
    } else if (touchX > 335 && touchX < 415 && touchY > 10 && touchY < 40) {
      drawing = false;
    } else if (touchX > 435 && touchX < 515 && touchY > 10 && touchY < 40) {
      undo();
    }
  }
}

function undo() {
  if (lines.length > 0) {
    undoStack.push(lines.pop());
  }
}

function handleTouchStart(evt) {
  if (evt.touches.length > 1) {
    // Multi-touch gesture, don't prevent default behavior
    return;
  }

  // Single touch, prevent scrolling
  evt.preventDefault();
}

function handleTouchMove(evt) {
  if (evt.touches.length > 1) {
    // Multi-touch gesture, don't prevent default behavior
    return;
  }

  // Single touch, prevent scrolling
  evt.preventDefault();
}

  function field() {
    
    p.push()
    p.translate(50,0)
    // noStroke();
    // fill(255);
    // rect(400, 200, 800, 700);
    
    // arena
    p.stroke(0);
    p.strokeWeight(4);
    p.fill(220);
    p.rectMode(CORNER)
    p.rect(50,50,652,316)
  
    p.strokeWeight(2);
    p.line(376, 50, 376, 366);
    
    // blue community
    p.stroke(0,0,200)
    p.line(104,150,104,366)
    
    p.line(196,150,196,209)
    p.line(196,209,256,209)
    p.line(256,209,256,366)
    b_charging_cell(b_charge)
    
    // scoring zones
    // blue
    scoring_zone(52)
    //red
    scoring_zone(660)
    
    // red community
    p.strokeWeight(2)
    p.stroke(200,0,0)
    p.line(646,150,646,366)
    
    p.line(553,150,553,209)
    p.line(553,209,493,209)
    p.line(493,209,493,366)
    r_charging_cell(r_charge)
    
    //red loading zones
    p.strokeWeight(2)
    p.stroke(200,0,0)
    p.line(315,50,315,100)
    p.line(196,100,196,150)
    p.line(315,100,196,100)
    
    //blue loading zone
    p.strokeWeight(2)
    p.stroke(0,0,200)
    p.line(437,50,437,100)
    p.line(553,100,553,150)
    p.line(437,100,553,100)
    
    
    // divider walls
    p.strokeWeight(6)
    p.stroke(0)
    p.line(51,150,195,150)
    p.line(554,150,700,150)
    
    p.pop()
  
  }
  
  function b_charging_cell(a){
    p.noStroke()
    // a == 0 for balanced
    // a == 1 for tilted toward driver station
    // a == 2 for tilted away from station
    
    p.fill(120)
    p.rect(184,209,72,96)
    p.fill(180)
    p.rect(196,209,48,96)
    if (a > 0){
      a == 1 ? p.rect(184,209,12,96) : p.rect(244,209,12,96)
    }
  }
  
  function r_charging_cell(a){
    p.noStroke()
    // a == 0 for balanced
    // a == 1 for tilted toward driver station
    // a == 2 for tilted away from station
    
    p.fill(120)
    p.rect(493,209,72,96)
    p.fill(180)
    p.rect(505,209,48,96)
    if (a > 0){
      a == 1 ? p.rect(553,209,12,96) : p.rect(493,209,12,96)
    }
  }
  
  function scoring_zone(x) {
    let color = true
    x < 60 ? color = true : color = false
    
    // color cells
    let w = 40
    p.noStroke()
    color? p.fill(0,0,151) : p.fill(151,0,0)
    p.rect(x,150,w,33)
    p.rect(x,201,w,24)
    p.rect(x,289,w,24)
    p.rect(x,331,w,33)
    
    // cooperatition cell
    p.fill(40)
    p.noStroke()
    p.rect(x,225,w,23)
    p.rect(x,266,w,23)
    
    // boz scoring zones
    p.fill(130)
    p.strokeWeight(2)
    p.stroke(167)
    p.rect(x,183,20,18)
    p.rect(x+20,183,20,18)
    p.rect(x,248,20,18)
    p.rect(x+20,248,20,18)
    p.rect(x,313,20,18)
    p.rect(x+20,313,20,18)
    
    // little wall line things
    p.strokeWeight(3.6)
    p.stroke(0)
    let pr
    color ? pr = x + 28 : pr = x - 15
    let a = pr + 25
    p.line(pr,155,a,155)
    p.line(pr,183,a,183)
    p.line(pr,202,a,202)
    p.line(pr,225,a,225)
    p.line(pr,248,a,248)
    p.line(pr,267,a,267)
    p.line(pr,290,a,290)
    p.line(pr,313,a,313)
    p.line(pr,332,a,332)
    p.line(pr,362,a,362)
    
    // cone pegs
    p.noStroke()
    let s
    color ? s = x + 8 : s = x + 13
    for(let i = 170; i < 360; i += 22) {
      p.ellipse(s,i,6,6)
      p.ellipse(s + 18,i,6,6)
      
    }
  }
};

new p5(coachMap, "coachCanvas")
