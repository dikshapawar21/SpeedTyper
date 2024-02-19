const select = document.querySelector("select");
const time = document.querySelector("#time");
const score = document.querySelector("#score");
const word = document.querySelector("#word");
const ip = document.querySelector("input");
const body = document.querySelector("body");
// const page2 = document.querySelector("link");

ip.focus();

let count = 0;

const wordsArray = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "house",
    "ice cream",
    "jazz",
    "kangaroo",
    "lemon",
    "mountain",
    "notebook",
    "orange",
    "pizza",
    "quasar",
    "rainbow",
    "sunset",
    "tiger",
    "umbrella",
    "violin",
    "watermelon",
    "xylophone",
    "yellow",
    "zebra",
    "ocean",
    "butterfly",
    "candle",
    "diamond",
    "fireworks",
    "globe",
    "harmony",
    "island",
    "jungle",
    "kite",
    "lighthouse",
    "magnolia",
    "nightingale",
    "oasis",
    "paradise",
    "quilt",
    "rocket",
    "sapphire",
    "treasure",
    "universe",
    "volcano",
    "whisper",
    "xylograph",
    "zeppelin",
];

const num = Math.floor(Math.random() * 50);
let text = wordsArray[num];
word.textContent = text;

function randomNum() {
    const num = Math.floor(Math.random() * 50);
    let text = wordsArray[num];
    word.textContent = text;
}

function myfunc() {
    ip.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if (word.textContent === ip.value) {
                count++;
                randomNum();
                ip.value = "";
                ip.focus();
                scorecount();
            }
        }
    });
}

function scorecount() {
    score.textContent = "Score: " + count;
}

// function displayTime(){
//     let timecount = 10;
//     time.textContent = "Time: " + timecount;
//     timecount --;
//     console.log(timecount);
// }

// let myinterval = setInterval(displayTime(),1000);
// function pageRelaod(){
//     setTimeout(myinterval(),10000);
//     location.reload();
//     `<link rel="stylesheet" href="page2.css">
//     <main><p>Your final score is: ${count}</p></main>
//     `;
//     const btn = document.createElement("button");
//     btn.textContent = "Reload";
//     btn.onclick = location.reload();
// }

myfunc();
// pageRelaod();

function countAndReload(durationInSeconds) {
    let counter = durationInSeconds;

    function displayTime() {
        time.innerHTML = `Time: ${counter}s`;
        counter--;

        if (counter < 0) {
            clearInterval(intervalId);
            body.innerHTML = `<body><p id="word">Time ran out <br>
            You typed ${count} words in 10s<br><br>Reload the page to play again
            </p>`
            body.style.textAlign = "center";
            body.style.position = "absolute";
            body.style.top = "40vh";
            body.style.left = "45vw";
            body.style.fontSize = "60px";
            // const btn = document.createElement("button");
            // btn.textContent = "Reload the page to play again";
            // btn.onclick = ()=>{location.reload()};
        }
    }
    displayTime(); // Initial display

    const intervalId = setInterval(displayTime, 1000); // Update every second
}

// Example: Count and reload after 10 seconds
countAndReload(10);
