$(document).ready()
$function () {


    var currentHour = 12;

    var eventText = $("#tacos textarea");

    for (var i = 0; i < eventText.length; i++) {
        var currentTextElement = eventText[i];
        var reindexedHour = currentHour - 9;

        if (i === reindexedHour) {
            currentTextElement.classList.add("#present")
        } else if (i < reindexedHour) {
            currentTextElement.classList.add("#past")
        } else if (i > reindexedHour) {
            currentTextElement.classList.add("#future")
        }
    }





}