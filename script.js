

var displayCurrent = document.getElementById("currentDay")
var todayDateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");

function loadCurrent() {
displayCurrent.innerHTML = todayDateTime
}
loadCurrent();

$("currentDay").html(todayDateTime);

$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

// color change
function timeTracker() {
    var beginningTime = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime < beginningTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === beginningTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
timeTracker();
let interval = setInterval (timeTracker, 30000);

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
})