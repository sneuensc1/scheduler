$(function () {

    var eventText = $("#tacos textarea");

    let today = new Date();

    let currentHour = today.getHours();


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





});