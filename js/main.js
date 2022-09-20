const wilder = {
    id: 1222,
    firstname: "John",
    lastname: "Doe",
    hobby: "Tv show"
}

// hello

function displayWilder() {
    const wilderArea = document.querySelector("#wilderArea")
    const wilderLine = `Hello ${wilder.firstname} ${wilder.lastname} you ar a fan of ${wilder.hobby}`
    wilderArea.innerHTML = wilderLine
}

document.querySelector("#wilderAction").addEventListener("click", function() {
    displayWilder()
})



