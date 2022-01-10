$(function () {

    let scheduleList = localStorage.getItem("eventKeyStorage");
    if(scheduleList === null) {
        scheduleList = []
    }
    else {
        scheduleList = JSON.parse(scheduleList);
    }
    
    var eventText = $("#tacos textarea");

    var eventList = [];

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
        eventList[i].val(scheduleList[i]);
    }

    $(".saveBtn").click(function() {

        for (var i = 0; i < eventText.length; i++) {
            eventList[i] = $(eventText[i]).val();
        };

        localStorage.setItem("eventKeyStorage", JSON.stringify(eventList));
    });


});