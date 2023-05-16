const videoForm = document.getElementById("video-form");
const videoPlayer = document.getElementById("video-player");
const defaultVideoId = "EsWlu0olPQU";

videoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  videoPlayer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${defaultVideoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
