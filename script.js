// variable to get current date and time
var now = moment();
console.log(now);
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
var currentDay = document.getElementById("currentDay");

currentDay.innerText = date;


// Time slots

var timeSlot