import { playPause, volumeControl, audioGen, volumeGen, containerGen} from './audio.global.js';

//? variable storage
const containers = document.querySelector(".containers");
const containerOne = document.createElement("div");
const containerTwo = document.createElement("div");
const containerThree = document.createElement("div");
const iconOne = document.createElement("img");
const iconTwo = document.createElement("img");
const iconThree = document.createElement("img");
const buttonOne = document.createElement("button");
const volumeOne = document.createElement("input");
const buttonTwo = document.createElement("button");
const volumeTwo = document.createElement("input");
const buttonThree = document.createElement("button");
const volumeThree = document.createElement("input");

//? icon storage
iconOne.src = "./img/bolt.png";
iconOne.alt = "lightning";
iconOne.style.opacity = "0.5";
buttonOne.appendChild(iconOne);
iconTwo.src = "./img/rain.png";
iconTwo.alt = "rain";
iconTwo.style.opacity = "0.5";
buttonTwo.appendChild(iconTwo);
iconThree.src = "./img/windy.png";
iconThree.alt = "wind";
iconThree.style.opacity = "0.5";
buttonThree.appendChild(iconThree);

//? volume control storage
volumeGen(volumeOne);
volumeGen(volumeTwo);
volumeGen(volumeThree);

//? container storage for under containers
containerGen(
    containerOne,
    "container",
    buttonOne,
    volumeOne,
);
containerGen(
    containerTwo,
    "container",
    buttonTwo,
    volumeTwo,
);
containerGen(
    containerThree,
    "container",
    buttonThree,
    volumeThree,
);

//? append storage for containersOne and ContainersTwo
containers.appendChild(containerOne);
containers.appendChild(containerTwo);
containers.appendChild(containerThree);

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