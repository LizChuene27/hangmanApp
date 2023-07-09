import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Hangman = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const words = ['apple', 'banana', 'cherry', 'dragon', 'elephant', 'flamingo']; // Array of words for the game

  useEffect(() => {
    // Select a random word from the words array and set it as the current word
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
  }, []);

  useEffect(() => {
    // Check for a win condition whenever the guessedLetters state changes
    if (gameStarted) {
      checkWon();
    }
  }, [guessedLetters]);

  const handleLetterGuess = (letter) => {
    // Handle user letter guess and update the game state accordingly
    if (!gameOver && !guessedLetters.includes(letter)) {
      const updatedLetters = [...guessedLetters, letter];
      setGuessedLetters(updatedLetters);

      if (!word.includes(letter)) {
        setRemainingGuesses(remainingGuesses - 1);
      }

      checkGameOver();
      setGameStarted(true);
    }
  };

  const checkGameOver = () => {
    // Check if the game is over (out of guesses)
    if (remainingGuesses === 0) {
      setGameOver(true);
    }
  };

  const checkWon = () => {
    // Check if the player has won the game
    const remainingLetters = [...new Set(word)].filter(
      (letter) => !guessedLetters.includes(letter)
    );

    if (remainingLetters.length === 0) {
      setGameOver(true);
      setWon(true);
    }
  };

  const renderWord = () => {
    // Render the word to be guessed, showing guessed letters and placeholders for unknown letters
    return word
      .split('')
      .map((letter, index) =>
        guessedLetters.includes(letter) ? (
          <span key={index}>{letter}</span>
        ) : (
          <span key={index}>_</span>
        )
      );
  };

  const renderAlphabet = () => {
    // Render the alphabet buttons for letter selection
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return alphabet.map((letter) => (
      <Button
        key={letter}
        onClick={() => handleLetterGuess(letter)}
        disabled={guessedLetters.includes(letter) || gameOver}
      >
        {letter}
      </Button>
    ));
  };

  const restartGame = () => {
    // Restart the game by resetting all game-related state variables
    setGuessedLetters([]);
    setRemainingGuesses(6);
    setGameOver(false);
    setWon(false);
    setGameStarted(false);

    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
  };

  const helpTooltip = (
    // Tooltip content for the help button
    <Tooltip id="help-tooltip">
      This is a Hangman game by Liz. Try to guess the word by selecting letters. You have {remainingGuesses} guesses remaining.
    </Tooltip>
  );

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Hangman</h1>
          {!gameOver && <p>Remaining Guesses: {remainingGuesses}</p>}
          <div className="word">{renderWord()}</div>
          <div className="alphabet">{renderAlphabet()}</div>
          {gameStarted && gameOver && (
            <Alert variant={won ? 'success' : 'danger'}>
              {won ? 'Congratulations! You won!' : 'Game Over. You lost!'}
              <Button variant="primary" onClick={restartGame}>
                Restart
              </Button>
            </Alert>
          )}
          <div className="help">
            <OverlayTrigger placement="bottom" overlay={helpTooltip}>
              <Button variant="info" onClick={() => setShowHelp(!showHelp)}>
                Help
              </Button>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hangman;
