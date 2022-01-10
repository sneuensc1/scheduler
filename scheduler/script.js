$(function () {

    var eventText = $("#tacos textarea");

    var eventListKey = "eventList";

    let today = new Date();

    let currentHour = today.getHours();

    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));


    for (var i = 0; i < eventText.length; i++) {
        var currentTextElement = eventText[i];
        var reindexedHour = currentHour - 9;

        if (i === reindexedHour) {
            currentTextElement.classList.add("present")
        } else if (i < reindexedHour) {
            currentTextElement.classList.add("past")
        } else if (i > reindexedHour) {
            currentTextElement.classList.add("future")
        }
    }

    $("saveBtn").click(function() {

    var eventList = [];

    for (var i = 0; i < eventText.length; i++) {
        eventList[i] = $(eventText[i]).val();
    };

    localStorage.setItem("eventKeyStorage", JSON,stringify("eventList"));
    });


});