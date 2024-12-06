# Automated Card Game: WAR

This project is an automated version of the classic card game WAR, designed for two players.

## Game Overview
- **Players**: 2
- **Deck**: Standard 52-card deck
- **Objective**: Play cards in rounds; the player with the higher card wins the round and earns a point. The player with the most points at the end of the game wins.

## Classes and Structure

### Card
- Represents a single playing card with a `suit` and `value`.
- Method: `getCardValue()` returns the numeric value of the card for comparison.

### Deck
- Represents a collection of 52 playing cards.
- Methods: `shuffle()` to randomize the deck, `deal()` to distribute cards to players.

### Player
- Represents a player with a `name`, `hand` of cards, and `score`.
- Methods: `playCard()` to play a card, `addPoint()` to increase the score.

### Game
- Manages the game logic, including starting the game, playing rounds, and determining the winner.
- Methods: `startGame()`, `playRound()`, `determineWinner()`, `playGame()`.

## How to Run the Game
1. Ensure you have Node.js installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Run the game using the following command:
   ```bash
   node Game.js
   ```

## Expected Output
- The game will display each round's results in the console, including the cards played and the winner of each round.
- At the end of the game, the final score and the overall winner will be announced.

## Notes
- This version of the game does not handle ties beyond awarding zero points to both players.