let textInput
let textArray = ["", "", "", "", "", "", "", "", ""]



if (JSON.parse(localStorage.getItem("savedArray")) === null) {
    localStorage.setItem("savedArray", JSON.stringify(textArray));

}

else {
    textArray = JSON.parse(localStorage.getItem("savedArray"))
    console.log(textArray)
    let i = 0
    $("textarea").each(function () {
        $(this).html(textArray[i])
        i++

    })

}

$(".saveBtn").on("click", function (event) {
    textInput = $(this).siblings(".user-input").val()
    //localStorage.setItem("storeInput", )
    var textRow = parseInt(($(this).attr("id")))
    //console.log(textRow)

    textArray[textRow] = textInput

    localStorage.setItem("savedArray", JSON.stringify(textArray))

    console.log(textArray)
    console.log(JSON.parse(localStorage.getItem("savedArray")))

})










