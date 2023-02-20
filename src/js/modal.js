const modal = document.getElementById("modal");
const video = document.getElementById("video");
const openModal = document.getElementById("u-open-modal");
const closeModal = document.getElementById("u-close-modal");

openModal.addEventListener("click", (e) => {
    modal.setAttribute("active", "");
    document.body.style.overflow = "hidden";

    e.preventDefault();
});

closeModal.addEventListener("click", (e) => {
    modal.removeAttribute("active", "");
    document.body.style.overflow = null;
    video.pause();
    video.load();

    e.preventDefault();
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.removeAttribute("active", "");
        document.body.style.overflow = null;
        video.pause();
        video.load();
    }

    e.preventDefault();
});
