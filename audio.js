//? function controlling playback
let playPause = (audio, button,image) => {
    let isPlaying = false;
    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            image.style.filter = "invert(70%)";
        } else {
            audio.play();
            isPlaying = true;
            image.style.filter = "invert(100%)";
        }
    });
};
//? allows user to control slider
let volumeControl = (audio, volume) => {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
};

//? generates new audio
let audioGen = (src) => {
    return new Howl({
        src: [src],
        loop: true,
    });
};

//? generates volume properties for each sound
let volumeGen = (volume) => {
    volume.type = "range";
    volume.min = "0";
    volume.max = "1";
    volume.step = "0.01";
    volume.value = "1";
    volume.id = "volume";
};

//? container
let containerGen = (
    container,
    className,
    button,
    volume,
) => {
    container.classList.toggle(className);
    container.appendChild(button);
    container.appendChild(volume);
};

//? variable storage
const containersOne = document.querySelector(".containersOne");
const containersTwo = document.querySelector(".containersTwo");
const containerOne = document.createElement("div");
const containerTwo = document.createElement("div");
const containerThree = document.createElement("div");
const containerFour = document.createElement("div");
const containerFive = document.createElement("div");
const containerSix = document.createElement("div");
const iconOne = document.createElement("img");
const iconTwo = document.createElement("img");
const iconThree = document.createElement("img");
const iconFour = document.createElement("img");
const iconFive = document.createElement("img");
const iconSix = document.createElement("img");
const buttonOne = document.createElement("button");
const volumeOne = document.createElement("input");
const buttonTwo = document.createElement("button");
const volumeTwo = document.createElement("input");
const buttonThree = document.createElement("button");
const volumeThree = document.createElement("input");
const buttonFour = document.createElement("button");
const volumeFour = document.createElement("input");
const buttonFive = document.createElement("button");
const volumeFive = document.createElement("input");
const buttonSix = document.createElement("button");
const volumeSix = document.createElement("input");

//? icon storage
iconOne.src = "./img/flash.png";
iconOne.alt = "lightning";
buttonOne.appendChild(iconOne);
iconTwo.src = "./img/rainy.png";
iconTwo.alt = "rain";
buttonTwo.appendChild(iconTwo);
iconThree.src = "./img/wind.png";
iconThree.alt = "wind";
buttonThree.appendChild(iconThree);
iconFour.src = "./img/bowl.png";
iconFour.alt = "wind";
buttonFour.appendChild(iconFour);
iconFive.src = "./img/chimes.png";
iconFive.alt = "wind";
buttonFive.appendChild(iconFive);
iconSix.src = "./img/fireplace.png";
iconSix.alt = "wind";
buttonSix.appendChild(iconSix);

//? volume control storage
volumeGen(volumeOne);
volumeGen(volumeTwo);
volumeGen(volumeThree);
volumeGen(volumeFour);
volumeGen(volumeFive);
volumeGen(volumeSix);

//? container storage for containersOne
containerGen(
    containerOne,
    "containerOne",
    buttonOne,
    volumeOne,
);
containerGen(
    containerTwo,
    "containerTwo",
    buttonTwo,
    volumeTwo,
);
containerGen(
    containerThree,
    "containerThree",
    buttonThree,
    volumeThree,
);
containerGen(
    containerFour,
    "containerFour",
    buttonFour,
    volumeFour,
);
containerGen(
    containerFive,
    "containerFive",
    buttonFive,
    volumeFive,
);
containerGen(
    containerSix,
    "containerSix",
    buttonSix,
    volumeSix,
);

//? append storage for containersOne and ContainersTwo
containersOne.appendChild(containerOne);
containersOne.appendChild(containerTwo);
containersOne.appendChild(containerThree);
containersTwo.appendChild(containerFour);
containersTwo.appendChild(containerFive);
containersTwo.appendChild(containerSix);

//? audio 1 start
let one = audioGen("./audio/one-thunder.mp3");
playPause(one, buttonOne, iconOne);
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
let two = audioGen("./audio/two-rain.mp3");
playPause(two, buttonTwo, iconTwo);
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
let three = audioGen("./audio/three-wind.mp3");
playPause(three, buttonThree, iconThree);
volumeControl(three, volumeThree);
//?audio 3 end

//? audio 4 start
let four = audioGen("./audio/four-bowl.mp3");
playPause(four, buttonFour, iconFour);
volumeControl(four, volumeFour);
//?audio 4 end

//? audio 5 start
let five = audioGen("./audio/five-chimes.mp3");
playPause(five, buttonFive, iconFive);
volumeControl(five, volumeFive);
//?audio 5 end

//? audio 6 start
let six = audioGen("./audio/six-fireplace.mp3");
playPause(six, buttonSix, iconSix);
volumeControl(six, volumeSix);
//?audio 6 end