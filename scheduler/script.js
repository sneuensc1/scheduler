$(function () {

    //get events from local storage
    let scheduleList = localStorage.getItem("eventKeyStorage");
    if(scheduleList === null) {
        scheduleList = []
    }
    else {
        scheduleList = JSON.parse(scheduleList);
    }
    
    var eventText = $("#tacos textarea");

    var eventListKey = "eventList";

    //set the date and time
    let today = new Date();

    let currentHour = today.getHours();

    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    //loop to set the indexes to match the current hour and to load the stored events
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
        if (i < scheduleList.length) {
            $(eventText[i]).val(scheduleList[i]);  
        }
    }

    //save events in calendar to local storage
    $(".saveBtn").click(function() {

        var eventList = [];

        for (var i = 0; i < eventText.length; i++) {
            eventList[i] = $(eventText[i]).val();
        };

        localStorage.setItem("eventKeyStorage", JSON.stringify(eventList));
    });
});