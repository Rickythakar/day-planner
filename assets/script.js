// variable to get current date and time
var now = moment();
console.log(now);
var date = moment().format("dddd, MMMM Do YYYY, h:mm a");

//var currentDay = document.getElementById("currentDay");
var $currentDay = $("#currentDay");

// Appends the current date to the date class 
// can also be written as 
//currentDay.innerText = date;
$currentDay.text(date);

// var timeBlockElements = document.querySelectorAll(".time-block")
var $timeBlockElements = $(".time-block");
console.log($timeBlockElements);
var setTimeClass = function ($arrayOfTimeBlocks) {
    //for (let index = 0; index < arrayOfTimeBlocks.length; index++) {
    //     const element = arrayOfTimeBlocks[index];
    //     console.log(element); }
    $arrayOfTimeBlocks.each(function (index) {
        // console.log(this);
        var $currentTimeBlock = $(this);
        var timeBlockHour = parseInt($currentTimeBlock.attr("id"));
        var currentHour = moment().hours();

        // var timeBlockMoment = moment(timeBlockHour)
        // console.log(timeBlockMoment.format("ha"))
        //     if (currentHour.isSame(moment(timeBlockHour))) {
        //     $currentTimeBlock.addClass("present")
        // } 
        //else if (currentHour > timeBlockHour) {
        //  $currentTimeBlock.addClass("past")
        //}
    });
};

//Call set time function 
setTimeClass($timeBlockElements);


// Create a function that responds to the save button and saves the data from the text area to local storage
//event for clicking on save button 
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