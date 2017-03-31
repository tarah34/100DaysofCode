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

//Using the DOM to collect info and report it in footer.
var msg = "<p><b>Page title: </b>" + document.title + "<br />";
msg += "<b>Page address: </b>" + document.URL + "<br />";
msg += "<b>Last modified: </b>" + document.lastModified + "</p>";

var el = document.getElementById('pageinfo');
el.innerHTML = msg;
