// variable to get current date and time
let now = moment();
console.log(now);
let date = moment().format("dddd, MMMM Do YYYY, h:mm a");

//var currentDay = document.getElementById("currentDay");
let $currentDay = $("#currentDay");

// Appends the current date to the date class 
$currentDay.text(date);

function hourTracker() {
    let currentHour = moment().hour();
    $(".time-block").each(function () {
        let hourSegments = parseInt($(this).attr("id").split("hour")[1]);

        if (hourSegments === currentHour) {
            $(this).addClass("present");
        }
        else if (hourSegments < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future")
        }
    })
}

//call function to track hour
hourTracker();












//=================================================================================================
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
$("#1 .description").val(localStorage.getItem('1'));
$("#2 .description").val(localStorage.getItem('2'));
$("#3 .description").val(localStorage.getItem('3'));
$("#4 .description").val(localStorage.getItem('4'));
$("#5 .description").val(localStorage.getItem('5'));