
// Freiwürfe
function pointHome1() {
  var einenPunkt = Number(document.getElementById("scoreHome").innerHTML);
  einenPunkt += 1;

  document.getElementById("scoreHome").innerHTML = einenPunkt;
}
function pointAway1() {
  var einenPunkt = Number(document.getElementById("scoreAway").innerHTML);
  einenPunkt += 1;

  document.getElementById("scoreAway").innerHTML = einenPunkt;
}

// =================

// 2 Punkt Wurf
function pointHome2() {
  var einenPunkt = Number(document.getElementById("scoreHome").innerHTML);
  einenPunkt += 2;

  document.getElementById("scoreHome").innerHTML = einenPunkt;
}
function pointAway2() {
  var einenPunkt = Number(document.getElementById("scoreAway").innerHTML);
  einenPunkt += 2;

  document.getElementById("scoreAway").innerHTML = einenPunkt;
}

// =================

// 3 Punkt Wurf
function pointHome3() {
  var einenPunkt = Number(document.getElementById("scoreHome").innerHTML);
  einenPunkt += 3;

  document.getElementById("scoreHome").innerHTML = einenPunkt;
}
function pointAway3() {
  var einenPunkt = Number(document.getElementById("scoreAway").innerHTML);
  einenPunkt += 3;

  document.getElementById("scoreAway").innerHTML = einenPunkt;
}

// =========================================

// Reset
function reset() {
    document.getElementById("scoreHome").innerHTML = 0;

    document.getElementById("scoreAway").innerHTML = 0;
}
