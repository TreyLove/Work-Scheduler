let textInput
let textArray = ["", "", "", "", "", "", "", "", ""]        // set an empty array for each text box on the webpage
if (JSON.parse(localStorage.getItem("savedArray")) === null) {
    localStorage.setItem("savedArray", JSON.stringify(textArray));    // if nothing is saved on the local storage then set savedArray to text array
}
else {
    textArray = JSON.parse(localStorage.getItem("savedArray")) // else make the text of each text area equal the whats in the saved array
    let i = 0
    $("textarea").each(function () {
        $(this).html(textArray[i])
        i++
    })
}
$(".saveBtn").on("click", function (event) {                        // sets each button to save what is in it's sibling textarea./
    textInput = $(this).siblings(".user-input").val()
    var textRow = parseInt(($(this).attr("id")))
    textArray[textRow] = textInput
    localStorage.setItem("savedArray", JSON.stringify(textArray))
})
function chartTime() {                                          // this function adds moment.js and allows me to display the day at then top of the webpage and dynamically
    var currentTime = moment()                                  // change the background color of the text boxes to reflect the time.
    var chartHour = parseInt(currentTime.format("HH"));

    $("textArea").each(function () {
        if (parseInt($(this).data("time")) === chartHour) {
            $(this).attr("class", 'user-input current')
        }
        if (parseInt($(this).data("time")) > chartHour) {
            $(this).attr("class", 'user-input later')
        }
        if (parseInt($(this).data("time")) < chartHour) {
            $(this).attr("class", 'user-input previous')
        }
    })
}
chartTime()
$("#currentDay").html("Today is " + moment().format("dddd, MMMM Do, YYYY."));
setInterval(() => {                                  // this allows the colors on the chart to update every minute
    chartTime()
}, 60000);







