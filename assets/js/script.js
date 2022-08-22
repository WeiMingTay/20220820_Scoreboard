// Namen ändern

function changeHomeName() {
  let HomeName = prompt("Change Home Name to", "Hamburg Towers");
  if (HomeName != null) {
    document.getElementById("nameHome").innerText = HomeName;
  }
}
function changeAwayName() {
  let AwayName = prompt("Change Away Name to", "Chicago");
  if (AwayName != null) {
    document.getElementById("nameAway").innerText = AwayName;
  }
}

// =========================================

// Freiwürfe
function pointHome1() {
  let einenPunkt = Number(document.getElementById("scoreHome").innerHTML);

  einenPunkt += 1;

  document.getElementById("scoreHome").innerHTML = einenPunkt;
}
function pointAway1() {
  let einenPunkt = Number(document.getElementById("scoreAway").innerHTML);
  einenPunkt += 1;

  document.getElementById("scoreAway").innerHTML = einenPunkt;
}

// =================

// 2 Punkt Wurf
function pointHome2() {
  var zweiPunkte = Number(document.getElementById("scoreHome").innerHTML);
  zweiPunkte += 2;

  document.getElementById("scoreHome").innerHTML = zweiPunkte;
}
function pointAway2() {
  var zweiPunkte = Number(document.getElementById("scoreAway").innerHTML);
  zweiPunkte += 2;

  document.getElementById("scoreAway").innerHTML = zweiPunkte;
}

// =================

// 3 Punkt Wurf
function pointHome3() {
  var dreiPunkte = Number(document.getElementById("scoreHome").innerHTML);
  dreiPunkte += 3;

  document.getElementById("scoreHome").innerHTML = dreiPunkte;
}
function pointAway3() {
  var dreiPunkte = Number(document.getElementById("scoreAway").innerHTML);
  dreiPunkte += 3;

  document.getElementById("scoreAway").innerHTML = dreiPunkte;
}

// =========================================

// Reset
function reset() {
  document.getElementById("scoreHome").innerHTML = 0;
  document.getElementById("scoreAway").innerHTML = 0;

  document.getElementById("nameHome").innerHTML = "Home";
  document.getElementById("nameAway").innerHTML = "Away";
}

// =========================================

//Team Logos
/* function changeHomeImg() {
  document.getElementById("homeLogo").style.display = "block";
}

function changeAwayImg() {
    document.getElementById("awayLogo").style.display = "block";
  } */