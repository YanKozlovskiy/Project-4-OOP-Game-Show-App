/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* 
Update the app.js File

Here we will include event listeners, enabling user interaction with the game, as well as instantiate a new instance of the Game class to initiate the game's functionality.

    Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.

    Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.

*/

let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

// Exceeds expectations: 

// Add Keyboard Functionality
document.addEventListener('keyup', (event) => {
    const rawKey = event.key.toLowerCase();

    if (rawKey.length === 1 && rawKey >= 'a' && rawKey <= 'z') {
        const keyboardButtons = document.querySelectorAll('#qwerty button');

        keyboardButtons.forEach(button => {
            if (button.textContent === rawKey && !button.disabled) {
                game.handleInteraction(button);
            }
        });
    }
});


// Add Animations
/* the animations are going to be handled in the Game.js class since the project comes with animate.css preinstalled */




// Add sound effects
const incorrectSound = new Howl({
    src: ['https://free-sound-effects.net/mp3/03/free-sound-1674744630.mp3']
});

const correctSound = new Howl({
    src: ['https://free-sound-effects.net/mp3/03/free-sound-1674878277.mp3']
});

const victorySound = new Howl({
    src: ['https://free-sound-effects.net/mp3/03/free-sound-1675199174.mp3']
});

const defeatSound = new Howl({
    src: ['https://free-sound-effects.net/mp3/03/free-sound-1674761563.mp3']
});