$(function () {

    //get events from local storage. USed if to set schedule to an empty list if null so there is always a list
    let scheduleList = localStorage.getItem("eventKeyStorage");
    if(scheduleList === null) {
        scheduleList = []
    }
    else {
        scheduleList = JSON.parse(scheduleList);
    };
    
    //pulls all the textareas
    var eventText = $("#tacos textarea");

    //pulls the current date and time when the page opens
    let today = new Date();

    let currentHour = today.getHours();

    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    //loop to set add classes as past, present, future
    for (var i = 0; i < eventText.length; i++) {
        var currentTextElement = eventText[i];
        var reindexedHour = currentHour - 9;

        //adding classes to the textarea to reflect past, present, or future
        if (i === reindexedHour) {
            currentTextElement.classList.add("present");
        } else if (i < reindexedHour) {
            currentTextElement.classList.add("past");
        } else if (i > reindexedHour) {
            currentTextElement.classList.add("future");
        }
        //if var i is less than the scheduleList.length, this will input the value of scheduleList to the textareas
        if (i < scheduleList.length) {
            $(eventText[i]).val(scheduleList[i]);  
        }
    }

    //save events in calendar to local storage
    $(".saveBtn").click(function() {
        //creates an empty list
        var eventList = [];

        //creates a key for setItem
        var eventListKey = "eventList";
        //setting calendar events into a list
        for (var i = 0; i < eventText.length; i++) {
            eventList[i] = $(eventText[i]).val();
        };
        //save to local storage
        localStorage.setItem("eventKeyStorage", JSON.stringify(eventList));
    });
});