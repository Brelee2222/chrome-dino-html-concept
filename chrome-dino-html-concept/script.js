var dnsprt = 0
var sprt = {
  "Idle":"/chrome-dino-html-concept/dino.png",
  "RunL":"/chrome-dino-html-concept/dinorunl.png",
  "RunR":"/chrome-dino-html-concept/dinorunr.png"
};
var death = false
var sided = true
var dnh = 0
var dnmvmntdt = {
  "a":1,
  "JumpHeight":40,
  "h":0,
  "distance":0,
  "sp":0.2,
  "quadratics":function() {
    this.h = Math.abs(Math.sqrt(4*(this.a*this.JumpHeight)));
  }
};
dnmvmntdt.quadratics()
console.log(dnmvmntdt.h)
var jsfncin = function(reserve) {
  this.visible = true;
  this.plcmnt = distance + 950;
  bodies[reserve].style.left = String(obstacles[1].plcmnt - distance) + "px";
  bodies[reserve].style.display = 'block';
  if (distance >= 30000) {
    this.type = Math.floor(Math.random() * 10)
  } else {
    this.type = Math.floor(Math.random() * 6)
  };
  if (this.type <= 7) {
    bodies[reserve].style.top = '368px'
  } else {
    if (this.type == 8) {
      bodies[reserve].style.top = '288px'
    } else {
      bodies[reserve].style.top = '238px'
    };
  };
};
var obstacles = [{"plcmnt":-100,"type":0,"visible":false,"spwn":jsfncin,"hitbox":[]},{"plcmnt":-100,"type":0,"visible":false,"spwn":jsfncin,"hitbox":[]},{"plcmnt":-100,"type":0,"visible":false,"spwn":jsfncin,"hitbox":[]}];
var bodies = [document.getElementById('obstcl1'),document.getElementById('obstcl2'),document.getElementById('obstcl3')]
var obsimg = [document.getElementById('obstclrnd1'), document.getElementById('obstclrnd2'), document.getElementById('obstclrnd3')]
var speed = 1
var distance = 0
var obstclspwrt = 0.80
function speeds() {
  speed +=1;
  setTimeout(speeds, speed*180);
};
function move() {
  if (dnh < 0) {dnh = 0;};
  if (obstacles[0].plcmnt - distance < 0) {
    obstacles[0].visible = false
  };
  if (obstacles[1].plcmnt - distance < 0) {
    obstacles[1].visible = false
  };
  if (obstacles[2].plcmnt - distance < 0) {
    obstacles[2].visible = false
  };
  if (obstacles[0].visible) {
    bodies[0].style.left = String(obstacles[0].plcmnt - distance) + "px";
  } else {
    bodies[0].style.display = 'none';
  };
  if (obstacles[1].visible) {
    bodies[1].style.left = String(obstacles[1].plcmnt - distance) + "px";
  } else {
    bodies[1].style.display = 'none';
  };
  if (obstacles[2].visible) {
    bodies[2].style.left = String(obstacles[2].plcmnt - distance) + "px";
  } else {
    bodies[2].style.display = 'none';
  };
  if (dnmvmntdt.distance <= 2*dnmvmntdt.h) {
    setTimeout(dnjmp,100);
  } else {
    dnh = 0
  };
  setTimeout(move,1)
};
function score() {
  distance +=speed
  setTimeout(score,10);
};
function spawn() {
  if (Math.random() <= obstclspwrt) {
    var reserve = -1
    if (!(obstacles[2].visible)) {
      reserve = 2
    };
    if (!(obstacles[1].visible)) {
      reserve = 1
    };
    if (!(obstacles[0].visible)) {
      reserve = 0
    };
    if (reserve + 1) {
      obstacles[reserve].spwn(reserve);
    };
  };
  setTimeout(spawn, 10 * speed + 1000);
};
function dnjmp() {
  dnh = -Math.pow(dnmvmntdt.a*(dnmvmntdt.distance - dnmvmntdt.h),2) + 4*(dnmvmntdt.JumpHeight);
  dnmvmntdt.distance +=dnmvmntdt.sp
};
document.onkeydown = function key(event) {if (dnh <= 0) {
  dnmvmntdt.distance = 1;
  dnjmp
}};
function dnps() {
  if (dnh < 0) {dnh = 0;};
  document.getElementById('dn').style.top = String(374 - dnh) + 'px'
  
  setTimeout(dnps,10);
};
function dnanimation() {
 if (sided) {
  document.getElementById('dnsprt').src = sprt.RunL;
 } else {
   document.getElementById('dnsprt').src = sprt.RunR;
 };
 if (dnh > 0) {
  document.getElementById('dnsprt').src = sprt.Idle;
 };
 setTimeout(dnanimation,10)
};
function changesided() {
  sided = !sided;
  setTimeout(changesided,500);
};
speeds();
move();
spawn();
score();
dnps();
changesided();
dnanimation();