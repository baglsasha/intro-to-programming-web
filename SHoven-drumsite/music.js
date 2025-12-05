let crash = document.getElementById("crash");
let kick = document.getElementById("kick");
let snare = document.getElementById("snare");
let tom1 = document.getElementById("tom1");
let tom2 = document.getElementById("tom2");
let tom3 = document.getElementById("tom3");
let tom4 = document.getElementById("tom4");

crash.addEventListener('click', playCrash);
kick.addEventListener('click', playKick);
snare.addEventListener('click', playSnare);
tom1.addEventListener('click', playTom1);
tom2.addEventListener('click', playTom2);
tom3.addEventListener('click', playTom3);
tom4.addEventListener('click', playTom4);

function playCrash() {
    let Crash = new Audio("assets/sounds/crash.mp3");
	Crash.play();
}

function playKick() {
    let Kick = new Audio("assets/sounds/kick-bass.mp3");
	Kick.play();
}

function playSnare() {
    let Snare = new Audio("assets/sounds/snare.mp3");
	Snare.play();
}

function playTom1() {
    let Tom1 = new Audio("assets/sounds/tom-1.mp3");
	Tom1.play();
}

function playTom2() {
    let Tom2 = new Audio("assets/sounds/tom-2.mp3");
	Tom2.play();
}

function playTom3() {
    let Tom3 = new Audio("assets/sounds/tom-3.mp3");
	Tom3.play();
}

function playTom4() {
    let Tom4 = new Audio("assets/sounds/tom-4.mp3");
	Tom4.play();
}