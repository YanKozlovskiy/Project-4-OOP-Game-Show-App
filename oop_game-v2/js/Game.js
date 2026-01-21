/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* 

Create the Game Class in the game.js File

Here we will define the Game class, which will be responsible for managing the game's state, logic, and interactions.

The class should include a constructor that initializes the following properties:

    missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
    phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
    activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.

The class should also have these methods:

    startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property.
    getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    handleInteraction(): this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
        Disable the selected letter’s onscreen keyboard button.
        If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
        If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
    removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
    gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.



*/


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('A Dime a Dozen'),
            new Phrase('Beat Around the Bush'),
            new Phrase('Better Late Than Never'),
            new Phrase('Bite the Bullet'),
            new Phrase('Break a Leg')
        ];
        this.activePhrase = null;
        this.takeInput = true;
    }
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    handleInteraction(button) {
        const letter = button.textContent;
        if (this.takeInput) {
            if (this.activePhrase.checkLetter(letter)) {
                correctSound.play();
                button.classList.add('chosen');
                button.classList.add('animated', 'flash');
                this.activePhrase.showMatchedLetter(letter);
                if (this.checkForWin()) {
                    this.gameOver();
                }
            } else {
                incorrectSound.play();
                button.classList.add('wrong');
                button.classList.add('animated', 'shake');
                this.removeLife();
            }
            button.disabled = true;
        }
    }
    removeLife() {
        this.missed += 1;
        const hearts = document.querySelectorAll('#scoreboard img');
        const index = hearts.length - this.missed;
        hearts[index].src = 'images/lostHeart.png';
        hearts[index].classList.add('animated', 'hinge');
        if (this.missed === 5) {
            this.takeInput = false;
            defeatSound.play();
            setTimeout(() => {
                this.gameOver();
            }, 2000);
        }
    }
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('#phrase ul li.hide');
        return hiddenLetters.length === 0;
    }
    gameOver() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        overlay.classList.remove('start');
        const gameOverMessage = document.getElementById('game-over-message');
        if (this.missed === 5 ) {
            overlay.classList.add('lose');
            overlay.classList.remove('win');
            gameOverMessage.textContent = 'Sorry, better luck next time!';
        } else {
            overlay.classList.remove('lose');
            overlay.classList.add('win');
            gameOverMessage.textContent = 'Congratulations, you won!';
            setTimeout(() => {
                victorySound.play();
            }, 500);
        }
        this.resetState();
    }
    resetState() {
        const keys = document.querySelectorAll('#qwerty button');
        keys.forEach(key => key.disabled = false);
        keys.forEach(key => key.classList.remove('chosen', 'wrong', 'animated', 'flash', 'shake'));
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
            heart.classList.remove('animated', 'hinge');
        });
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';
        this.activePhrase = null;
        this.missed = 0;
        this.takeInput = true;
    }
}
