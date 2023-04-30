//? Provides button click functionality for all audio files
let playPause = (audio, button) => {
    if (audio.paused) {
        audio.play();
        button.textContent = "Pause";
    } else {
        audio.pause();
        button.textContent = "Play";
    }
};
//? sets audio volume slider to our range input value
let volume = (audio, volume) => {
    audio.volume = volume.value;
};

//?? audio 1 start
const leaves = document.getElementById("leaves");
const volumeLeaves = document.getElementById("volumeLeaves");
const buttonLeaves = document.getElementById("buttonLeaves");

buttonLeaves.addEventListener("click", function () {
    playPause(leaves, buttonLeaves);
});

volumeLeaves.addEventListener("input", function () {
    volume(leaves, volumeLeaves);
});
//? audio 1 end

//? audio 2 start
const rain = document.getElementById("rain");
const volumeRain = document.getElementById("volumeRain");
const buttonRain = document.getElementById("buttonRain");

buttonRain.addEventListener("click", function () {
    playPause(rain, buttonRain);
});

volumeRain.addEventListener("input", function () {
    volume(rain, volumeRain);
});
//?audio 2 end
