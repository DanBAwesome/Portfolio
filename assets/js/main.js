var nav = document.getElementById("navBar");
var imgPopup = document.getElementById("scrollText");
var imgScroll = document.getElementById("sites");
$(document).ready(
    function () {
        nav.addEventListener("click", navClick);
        if (window.innerWidth < 992) {
            imgScroll.addEventListener("scroll", checkScrollMobile, { once: true });
        }
    }
)

function navClick() {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    }
}

function checkScrollMobile() {
    var popupOpacity = imgPopup.style.opacity = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (popupOpacity <= 0) {
            clearInterval(id);
            imgPopup.style.opacity = 0;
        }
        else {
            popupOpacity -= 0.10
            imgPopup.style.opacity = popupOpacity; 
            console.log(imgPopup.style.opacity);
        }
    }

}