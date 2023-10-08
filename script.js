let form = document.getElementById("form")
let btnEnter = document.getElementById("btnEnter")
let btnClose = document.getElementById("btnClose")

btnEnter.addEventListener("click", openForm)
btnClose.addEventListener("click", closeForm)

function openForm() {
    form.style.top = "50%"
}

function closeForm() {
    form.style.top = "-50%"
}