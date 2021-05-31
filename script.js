var jsfncin = function(reserve) {
  this.visible = true;
  this.plcmnt = distance + 950;
  bodies[reserve].style.left = String(obstacles[1].plcmnt - distance) + "px";
  bodies[reserve].style.display = 'block';
  if (distance >= 30000) {
    this.type = Math.floor(Math.random() * 9)
  } else {
    this.type = Math.floor(Math.random() * 6)
  };
  if (this.type <= 7) {
    bodies[reserve].style.top = '368px'
  } else {
    if (this.type == 8) {
      bodies[reserve].style.top = '288px'
    } else {
      bodies[reserve].style.top = '268px'
    };
  };
};
var obstacles = [{"plcmnt":-100,"type":0,"visible":false,"spwn":jsfncin},{"plcmnt":-100,"type":0,"visible":false,"spwn":jsfncin},{"plcmnt":-100,"type":0,"visible":false,"spwn":jsfncin}];
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
  setTimeout(spawn, 1000 / (speed / 2) + (5 * 100));
};

speeds();
move();
spawn();
score();