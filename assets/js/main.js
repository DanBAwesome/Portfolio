var nav = document.getElementById("navBar");
$(document).ready(
    function () {
        nav.addEventListener("click", navClick)
    }
)

function navClick() {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show")
    }
}