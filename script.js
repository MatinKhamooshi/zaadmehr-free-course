// Handle chapter toggles
const chapterToggles = document.querySelectorAll(".chapter-toggle");

chapterToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    const targetElem = e.target.parentElement;

    // Close all other chapter contents
    document.querySelectorAll(".chapter").forEach((chapter) => {
      chapter.classList.remove("active");
    });

    // Toggle current chapter content
    targetElem.classList.add("active");
  });
});

// Handle play button click
const playButton = document.querySelector(".play-button");
const video = document.querySelector("video.intro-video");

if (playButton) {
  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      video.classList.add("playing");
    } else {
      video.pause();
      video.classList.remove("playing");
    }
  });

  if (video && playButton) {
    video.addEventListener("play", function () {
      playButton.style.opacity = "1"; // در ابتدا نمایش داده شود
    });

    video.addEventListener("pause", function () {
      playButton.style.opacity = "1"; // هنگام توقف، دکمه را نمایش دهد
    });

    video.addEventListener("mouseover", function () {
      playButton.style.opacity = "1"; // وقتی موس روی ویدیو باشد، دکمه نمایش داده شود
    });

    video.addEventListener("mouseleave", function () {
      if (!video.paused) {
        playButton.style.opacity = "0"; // محو شدن دکمه اگر موس روی آن نبود
      }
    });

    playButton.addEventListener("mouseenter", function () {
      playButton.style.opacity = "1"; // اگر موس روی دکمه رفت، نمایش داده شود
    });

    playButton.addEventListener("mouseleave", function () {
      if (!video.paused) {
        playButton.style.opacity = "0"; // وقتی موس از روی دکمه خارج شد و ویدیو در حال پخش بود، محو شود
      }
    });
  }
}
