// JavaScript Document
console.log("Howdy!");
var alleABButtons = document.querySelectorAll(".aButton"); // alle ABButtons

var menu; // hier steede de information section instoppen die relevant is
var ABButton; // hier steede de ABButton instoppen die relevant is
// var buttonA = true;



// alle ABButtons gaan luisteren naar kliks
alleABButtons.forEach(alleABButton => {
    alleABButton.addEventListener("click", ABButtonGeklikt);
});


// deze functie uitvoeren als er op een ABButtin is geklikt
function ABButtonGeklikt(event) {
    // this is de ABButton waarop geklikt is
    // die in de variabele stoppen
    ABButton = this;
    // hier zoeken naar de parent van de button die voldoet aan "section.information"
    // die ook opslaan in de variabele
    menu = ABButton.closest("section.information");

    // dan de uitklap functie uitvoeren
    uitklap();
}


// menu opene dicht met A en B toets
document.addEventListener('keydown', event => {
    if (event.code == "KeyA"){
        // de relevante section.information opzoeken
        // met behulp van de huidigePos variabele
        // de gevonden section opslaan in de variabele
        menu = document.querySelector("ol > li:nth-of-type(" + huidigePos + ") .information");
        // in de gevonden section.information zoeken naar de ABButtton
        // die button opslaan in de variabele
        ABButton = menu.querySelector("button.aButton");

        // Als het menu uitgeklapt is 
        if (menu.classList.contains('menuUitgeklapt')) {
            //do nothing';
        }
        // Als het menu dicht is 
        else {
            uitklap();
        }
    }

    else if (event.code == "KeyB"){
        menu = document.querySelector("ol > li:nth-of-type(" + huidigePos + ") .information");
        ABButton = menu.querySelector("button.aButton");

        if (menu.classList.contains('menuUitgeklapt')) {
            uitklap();
        } else {
            // do nothing
        }
    }
});


function uitklap(){
    // menu is nu open - dan dicht
    if (menu.classList.contains('menuUitgeklapt')) {
        ABButton.textContent = "A";
        menu.classList.remove('menuUitgeklapt');
    } 
    // menu is nu dicht - dan open
    else {
        ABButton.textContent = "B";
        menu.classList.add('menuUitgeklapt');
    }
     //Hiermee kan ik mijn menu uitklappen en weer terug inklappen het toggels tussen de menu's, ik heb namelijk een extra class gemaakt op information.
}







/* LI's heen en weer */
var naarRechtsButton = document.querySelector("nav button:last-of-type");
var naarLinksButton = document.querySelector("nav button:first-of-type");
var huidigePos = 1;

naarRechtsButton.addEventListener("click", naarRechts);
naarLinksButton.addEventListener("click", naarLinks);

function naarRechts() {
    huidigePos = huidigePos + 1;

    var nieuweLi = document.querySelector("ol > li:nth-of-type(" + huidigePos + ")");

    nieuweLi.scrollIntoView({behavior: "smooth"});
}

function naarLinks() {
    huidigePos = huidigePos - 1;

    var nieuweLi = document.querySelector("ol > li:nth-of-type(" + huidigePos + ")");

    nieuweLi.scrollIntoView({behavior: "smooth"});
}


/* pijltjes toetsen heen en weer */
document.addEventListener('keydown', event => {
    if (event.code == "ArrowLeft"){
        event.preventDefault();
        naarLinks(); // bron: https://stackoverflow.com/questions/59269523/keydown-event-triggering-classlist-remove-doesnt-work-if-the-key-is-pressed-too 
    }
    else if (event.code == "ArrowRight"){
        event.preventDefault();
        naarRechts(); // bron: https://stackoverflow.com/questions/59269523/keydown-event-triggering-classlist-remove-doesnt-work-if-the-key-is-pressed-too 
    }
});


/* Start scherm */
var startScherm = document.querySelector("aside");
var startButton = document.querySelector("aside button");

startButton.addEventListener("click", starten);

function starten() {
    startScherm.classList.add("gestart"); //hiermee zet je de class .gestart wat gedefineerd staat in de css erop.
}


/* AUDIO COIN */
var audioConsole1 = document.querySelector("ol li:nth-of-type(1) > img");
audioConsole1.addEventListener("mouseover", playAudio);
audioConsole1.addEventListener("mouseleave", stopAudio);

var audioConsole2 = document.querySelector("ol li:nth-of-type(2) > img");
audioConsole2.addEventListener("mouseover", playAudio);
audioConsole2.addEventListener("mouseleave", stopAudio);

var audioConsole3 = document.querySelector("ol li:nth-of-type(3) > img");
audioConsole3.addEventListener("mouseover", playAudio);
audioConsole3.addEventListener("mouseleave", stopAudio);

var audioConsole4 = document.querySelector("ol li:nth-of-type(4) > img");
audioConsole4.addEventListener("mouseover", playAudio);
audioConsole4.addEventListener("mouseleave", stopAudio);

var audioConsole5 = document.querySelector("ol li:nth-of-type(5) > img");
audioConsole5.addEventListener("mouseover", playAudio);
audioConsole5.addEventListener("mouseleave", stopAudio);

var audioConsole6 = document.querySelector("ol li:nth-of-type(6) > img");
audioConsole6.addEventListener("mouseover", playAudio);
audioConsole6.addEventListener("mouseleave", stopAudio);

var audioConsole6 = document.querySelector("ol li:nth-of-type(6) > img");
audioConsole6.addEventListener("mouseover", playAudio);
audioConsole6.addEventListener("mouseleave", stopAudio);

var audioConsole7 = document.querySelector("ol li:nth-of-type(7) > img");
audioConsole7.addEventListener("mouseover", playAudio);
audioConsole7.addEventListener("mouseleave", stopAudio);

var audioConsole8 = document.querySelector("ol li:nth-of-type(8) > img");
audioConsole8.addEventListener("mouseover", playAudio);
audioConsole8.addEventListener("mouseleave", stopAudio);

var audioConsole9 = document.querySelector("ol li:nth-of-type(9) > img");
audioConsole9.addEventListener("mouseover", playAudio);
audioConsole9.addEventListener("mouseleave", stopAudio);

var audio = document.querySelector("audio");

function playAudio() {
    audio.play();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}


//  var startSound = document.querySelector(".start-screen");
//  startSound.addEventListener("DOMContentLoaded", playintro);
//  startSound.addEventListener("unload", stopintro);

//  function playintro() {
//     startSound.play();
// }

/* Ink Splash */
// var inkSplash = document.querySelector("body  img");
// var blooper = document.querySelector("ol li section.information > img");

// blooper.addEventListener("click", splat);

// function splat(){
//     blooper.classList.add(".ink-Splash");
// }