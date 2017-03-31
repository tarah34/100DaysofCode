//Create custom greeting dependent on time of day.
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}
var greet = document.getElementById('greeting');
greet.textContent = greeting;
// Do I have to create the variable greet?  Or can I just write:
// document.getElementById('greeting').textContent = greeting; ?


//Play, Pause, Restart Buttons as functions/JS
//(Must delete "controls" attribute from <audio> element?)
function play1() {
  var audio1 = document.getElementById("trombone-audio");
  audio1.play();
}
function play2() {
  var audio2 = document.getElementById("trombone-audio2");
  audio2.play();
}
function play3() {
  var audio3 = document.getElementById("trombone-audio3");
  audio3.play();
}



//Runtime and Duration functions
function totalTime() {
  var T = document.getElementById("trombone-audio").duration;
  document.getElementById("duration").innerHTML = T;
}


//Using the DOM to collect info and report it in footer.
var msg = "<p><b>Page title: </b>" + document.title + "<br />";
msg += "<b>Page address: </b>" + document.URL + "<br />";
msg += "<b>Last modified: </b>" + document.lastModified + "</p>";

var el = document.getElementById('pageinfo');
el.innerHTML = msg;
