// JavaScript Document
console.log("Howdy!");
var aButton = document.querySelector(".aButton"); // hiermee zoek in de css naar de desbetreffende button
var menu = document.querySelector(".information"); // hiermee zoek in de css naar de desbetreffende blok .information
var buttonA = true;
const keyBoard = document.querySelector(".aButton"); // bron: https://www.youtube.com/watch?v=YUdc2szWz8Q

aButton.addEventListener("click", uitklap); // ik zet hiermee een event op mijn function. dus als ik klik op de button spreekt het function uitklap aan. 
aButton.addEventListener("click", textAdjust); // ik zet hiermee een event op mijn function. dus als ik klik op de button spreekt het function uitklap aan. 


function uitklap(){
    menu.classList.toggle('menuUitgeklapt'); //Hiermee kan ik mijn menu uitklappen en weer terug inklappen het toggels tussen de menu's, ik heb namelijk een extra class gemaakt op information.
}

function textAdjust(){
	
	if (buttonA == true) {
		aButton.textContent = "B";
		buttonA = false;
	}
	else {
		aButton.textContent = "A";
		buttonA = true;
	}
}




// function textAdjust(){
	
// 	if (buttonA == true || a.keyCode == 65) {
// 		aButton.textContent = "B";
// 		buttonA = false;
// 	}
// 	else (b.keyCode == 66) {
// 		aButton.textContent = "A";
// 		buttonA = true;
// 	}
// }
// keyBoard.addEventListener('keydown', a =>{
//     if (a.keyCode == 65){
//         key.classList.add('menuUitgeklapt'); // bron: https://stackoverflow.com/questions/59269523/keydown-event-triggering-classlist-remove-doesnt-work-if-the-key-is-pressed-too 
//     }
//     else (b.keyCode == 65){
//         key.classList.remove('menuUitgeklapt');
//     }
// })
