// JavaScript Document
console.log("Howdy!");
var alleABButtons = document.querySelectorAll(".aButton"); // alle ABButtons

var menu; // hier steede de information section instoppen die relevant is
var ABButton; // hier steede de ABButton instoppen die relevant is
// var buttonA = true;
var audio = new Audio('../../coin.mp3');




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