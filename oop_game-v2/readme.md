# Phrase Hunter Game
### Team Treehouse FSJS Techdegree - Project 4

An interactive, browser-based word guessing game built using Object-Oriented Programming (OOP) principles in JavaScript.

## 🎮 How to Play
* The game selects a random phrase for you to guess.
* Click the onscreen keyboard or use your physical keyboard to select letters.
* For every incorrect guess, you lose a heart. 
* Guess the phrase before you run out of 5 lives to win!

## 🚀 Custom Features & Style Changes
To make this project unique and exceed the basic requirements, I implemented the following:

### 🎨 Visual Enhancements (Animate.css)
* **Animations:** The project came with the [Animate.css](https://animate.style/) library.
* **Interactive Feedback:** * Correct guesses trigger a `animated flash` animation on the keyboard buttons.
  * Incorrect guesses trigger a `animated shake` animation to provide visual feedback.
* **About Effects:** The effects were implemented by adding and removing classes.

### 🔊 Audio Feedback (Howler.js)
* **Library:** Integrated [Howler.js](https://howlerjs.com/) for robust cross-browser audio support.
* **Sound Effects:** Different sounds are played based on player interaction. We have the following sounds:
                    `correctSound`, `incorrectSound`, `victorySound`, `defeatSound`

### ⌨️ Extended Functionality
* **Physical Keyboard Support:** Players can play the game using their actual keyboard (`a-z` keys) in addition to the onscreen UI buttons.

## 🛠️ Technical Implementation
* **OOP Design:** Logic is split between the `Game` class (managing state) and the `Phrase` class (managing the display).
And finally the app.js file contains event handlers that trigger the instantiation of those classes.
* **Event Delegation:** Used multiple event listeners. One for the mouse, and the other for the keyboard.
* **Dynamic Content:** The game resets the board, lives, and keyboard state dynamically without requiring a page refresh!

## 📂 Project Structure
* `js/app.js`: Initializes the Game class and handles event listeners.
* `js/Game.js`: Contains the `Game` class definition.
* `js/Phrase.js`: Contains the `Phrase` class definition.
* `css/`: Folder containing the project styling.
* `images/`: Folder containing heart icons.
* `readme.md`: This file.