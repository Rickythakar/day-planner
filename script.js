// variable to get current date and time
var now = moment();
console.log(now);
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
var currentDay = document.getElementById("currentDay");
currentDay.innerText = date;


var timeBlockElements = document.querySelectorAll(".time-block")
console.log(timeBlockElements)

var setTimeClass = function(arrayOfTimeBlocks) {
    for (let index = 0; index < arrayOfTimeBlocks.length; index++) {
        const element = arrayOfTimeBlocks[index];
        console.log(element);
        if index == 
    }
};
setTimeClass(timeBlockElements)