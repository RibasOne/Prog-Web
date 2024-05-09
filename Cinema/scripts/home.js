let popup = document.getElementById("popup-screen");
let span = document.getElementsByClassName("close")[0];
let selectedMovie = null;

document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector(".slider");
    let sliderImgs = document.querySelectorAll(".slider img");
    let currentIdx = 0;

    setInterval(function() {
        currentIdx = (currentIdx + 1) % sliderImgs.length;
        slider.style.transform = "translateX(-" + (currentIdx * 100) + "%)";
    }, 2500);
});

function showMovieDetails(title, img, summary, time, duration, rooms){
    selectedMovie = {title, img, summary, time, duration, rooms};
    
    document.getElementById("title").innerHTML = title;
    document.getElementById("summary").innerHTML = summary;
    document.getElementById("schedule-container").innerHTML = time;
    document.getElementById("rooms").innerHTML = rooms;
    popup.classList.add("show-popup");
}

span.onclick = function() {
    popup.classList.remove("show-popup");
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.classList.remove("show-popup");
    }
}

document.getElementById("confirm-button").onclick = function() {
    if(selectedMovie){
        sessionStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    }
    window.location.href = "seats.html";
}