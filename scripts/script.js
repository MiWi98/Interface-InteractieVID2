// JavaScript Document
console.log("Howdy!");
var aButton = document.querySelector(".aButton"); // hiermee zoek in de css naar de desbetreffende button
var menu = document.querySelector(".information"); // hiermee zoek in de css naar de desbetreffende blok .information


aButton.addEventListener("click", uitklap); // ik zet hiermee een event op mijn function. dus als ik klik op de button spreekt het function uitklap aan. 

function uitklap(){
    menu.classList.toggle('menuUitgeklapt'); //Hiermee kan ik mijn menu uitklappen en weer terug inklappen het toggels tussen de menu's, ik heb namelijk een extra class gemaakt op information.
}