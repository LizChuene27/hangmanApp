# Hangman Game

Hangman is a classic word-guessing game implemented in React.js. The player needs to guess a hidden word by selecting individual letters. If a guessed letter is part of the word, it will be revealed in the correct position(s). However, for each incorrect guess, a part of the hangman's body is drawn. The player wins by guessing the word before the hangman is fully drawn.

![Hangman Gameplay](hangman-demo.gif)

## How to Play

1. Start the Hangman game by running the application.
2. A random word will be selected from a predefined list of words.
3. The word will be displayed as a series of underscores representing each letter.
4. Guess a letter by clicking on the corresponding letter button.
5. If the guessed letter is part of the word, it will be revealed in the correct position(s).
6. If the guessed letter is not part of the word, a part of the hangman's body will be drawn.
7. Keep guessing letters until you guess the word correctly or the hangman is fully drawn.
8. If you guess the word correctly before the hangman is complete, you win the game.
9. If the hangman is fully drawn before you guess the word, you lose the game.
10. After the game ends, you can restart by clicking the "Restart" button.
11. Click the "Help" button to view instructions on how to play the game.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Bootstrap: A UI library for styling and components.

## Project Structure

- `src/Hangman.js`: The main component that implements the Hangman game logic and UI.
- `src/hangman-state-X.gif` (X = 1 to 11): Hangman image states for each step of the game.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/hangman.git`
2. Navigate to the project directory: `cd hangman`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open `http://localhost:3000` in your web browser.

## Contributions

Contributions to the Hangman game project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Enjoy playing Hangman!

