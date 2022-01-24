// Getting current day with moment js
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// onClick event for save button
$(".saveBtn").on("click", function () {
    // Getting nearby values of the textarea
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    // saving in the local Storage
    localStorage.setItem(time, text);
});

// timeTracker function is used for tracking the current time and comparing with the block time
function timeTracker() {
    //get current time - hour.
    let timeNow = parseInt(moment().format("h"));
    console.log(timeNow)

    // loop over time blocks
    $(".time-block").each(function () {
        let blockTime = parseInt($(this).attr("id").split("hour")[1]);
    
        if (blockTime < timeNow) {
            $(".description").addClass("past");
            $(".description").removeClass("present");
            $(".description").removeClass("future");
        } 
        else if (blockTime === timeNow) {
            $(".description").removeClass("past");
            $(".description").addClass("present");
            $(".description").removeClass("future");
        } 
        else {
            $(".description").removeClass("past");
            $(".description").removeClass("present");
            $(".description").addClass("future");
        }
    }) 

    // Getting time and text from local storage to have everything saved in the description textarea
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
}

timeTracker();