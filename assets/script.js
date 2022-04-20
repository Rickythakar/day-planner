$(document).ready(function(){
// variable to get current date and time
let now = moment();
//console.log(now);
let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

//document.getElementById("#currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm a");
let $currentDay = $("#currentDay");
// Appends the current date to the date class 
$currentDay.text(date);
let update = function(){
    document.getElementById('currentDay').innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}
setInterval(update, 1000);

// Function to track the current hour using moment js and to add a class to an item according to time of day
function hourTracker() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function () {
        let hourSegments = parseInt($(this).attr("id").split("-")[1]);
        if (currentHour < hourSegments) {
            $(this).addClass("past");
        }
        else if (currentHour === hourSegments) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future")
        }
    });
};
//call function to track hour
hourTracker();

// Create a function that responds to the save button and saves the data from the text area to local storage
// event for clicking on save button 
$('.saveBtn').on("click", function () {
    let textData = $(this).siblings(".description").val();
    let hour = $(this).parent().attr("id");
    localStorage.setItem(hour, textData);
});

//Get data from local storage
$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#21 .description").val(localStorage.getItem('17'));
})