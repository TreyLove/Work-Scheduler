let textInput
let textArray = ["", "", "", "", "", "", "", "", ""]
if (JSON.parse(localStorage.getItem("savedArray")) === null) {
    localStorage.setItem("savedArray", JSON.stringify(textArray));
}
else {
    textArray = JSON.parse(localStorage.getItem("savedArray"))
    let i = 0
    $("textarea").each(function () {
        $(this).html(textArray[i])
        i++
    })
}
$(".saveBtn").on("click", function (event) {
    textInput = $(this).siblings(".user-input").val()
    var textRow = parseInt(($(this).attr("id")))
    textArray[textRow] = textInput
    localStorage.setItem("savedArray", JSON.stringify(textArray))
})
function chartTime() {
    var currentTime = moment()
    var chartHour = parseInt(currentTime.format("HH"));

    $("textArea").each(function () {
        if (parseInt($(this).data("time")) === chartHour) {
            $(this).addClass("current")
        }
        if (parseInt($(this).data("time")) > chartHour) {
            $(this).addClass("later")
        }
        if (parseInt($(this).data("time")) < chartHour) {
            $(this).addClass("previous")
        }
    })
}
chartTime()
$("#currentDay").html("Today is " + moment().format("dddd, MMMM Do, YYYY."));

setInterval(() => {
    chartTime()
}, 60000);







