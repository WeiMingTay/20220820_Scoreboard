// Namen ändern

function changeHomeName() {
  let HomeName = prompt("Change Home Name to", "Hamburg Towers");
  document.getElementById("nameHome").innerText = HomeName;
  
}
function changeAwayName() {
  let AwayName = prompt("Change Away Name to", "Chicago");
    document.getElementById("nameAway").innerText = AwayName;
}

// =========================================

// Variablen
let scoreHome = 0

// Freiwürfe
function pointHome1() {
  scoreHome += 1;
  document.getElementById("scoreHome").innerHTML = scoreHome;
}
function pointAway1() {
  let einenPunkt = Number(document.getElementById("scoreAway").innerHTML);
  einenPunkt += 1;

  document.getElementById("scoreAway").innerHTML = einenPunkt;
}

// =================

// 2 Punkt Wurf
function pointHome2() {
  scoreHome += 2;
  document.getElementById("scoreHome").innerHTML = scoreHome;
}
function pointAway2() {
  var zweiPunkte = Number(document.getElementById("scoreAway").innerHTML);
  zweiPunkte += 2;

  document.getElementById("scoreAway").innerHTML = zweiPunkte;
}

// =================

// 3 Punkt Wurf
function pointHome3() {
  scoreHome += 3;
  document.getElementById("scoreHome").innerHTML = scoreHome;
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

  // =========================================

  fliesstext.innerHTML = `hier ist Fließtext mit Variablen... Spiel ${scoreHome} gegen ${nameAway}!`