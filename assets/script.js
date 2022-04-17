// variable to get current date and time
var now = moment();
console.log(now);
var date = moment().format("dddd, MMMM Do YYYY, h:mm a");

//var currentDay = document.getElementById("currentDay");
var $currentDay = $("#currentDay")


// currentDay.innerText = date;
$currentDay.text(date)

// var timeBlockElements = document.querySelectorAll(".time-block")
var $timeBlockElements = $(".time-block")
console.log($timeBlockElements)



var setTimeClass = function ($arrayOfTimeBlocks) {
    //for (let index = 0; index < arrayOfTimeBlocks.length; index++) {
    //     const element = arrayOfTimeBlocks[index];
    //     console.log(element); }
    $arrayOfTimeBlocks.each(function (index) {
        console.log(this);
        var $currentTimeBlock = $(this);
        //var timeBlockHour = parseInt($currentTimeBlock.attr("id"));
        var timeBlockHour = $currentTimeBlock.attr("id");
        var currentHour = moment();
    
        var timeBlockMoment = moment(timeBlockHour)
        console.log(timeBlockMoment.format("ha"))
            if (currentHour.isSame(moment(timeBlockHour))) {
            $currentTimeBlock.addClass("present")
        } 
        
        //else if (currentHour > timeBlockHour) {
          //  $currentTimeBlock.addClass("past")
        //}
    });
};
setTimeClass($timeBlockElements)


//Adds the specified class(es) to each element in the set of matched elements.
//.addClass()

//Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.
//.data()

