const modal = document.getElementById("videoModal");
const video = document.getElementById("videoPlayer");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".play-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const videoSrc = btn.dataset.video;

        video.src = videoSrc;

        modal.style.display = "flex";

        video.play();
    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    video.pause();
    video.currentTime = 0;

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

        video.pause();
        video.currentTime = 0;
    }

});