// function to play sound
function playSound(e) { //pass 'e' like event
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // assign audio[data-key] to variable
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // assign class 'key' to variable
    if(!audio) return; // not audio - not music
    audio.currentTime = 0; // how long audio playing
    audio.play(); // play audio
    key.classList.add('playing'); // we can add property 'playing' to all classes 'key' through property 'classList'
    }

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
        }

var keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);