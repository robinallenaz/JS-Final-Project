// Game class manages the overall game logic
const Deck = require('./Deck');
const Player = require('./Player');

class Game {
    /**
     * Initializes a new game with a deck and two players.
     */
    constructor() {
        this.deck = new Deck(); // Initialize a new deck
        this.player1 = new Player('Player 1'); // Create Player 1
        this.player2 = new Player('Player 2'); // Create Player 2
    }

    /**
     * Starts the game by shuffling and dealing cards.
     */
    startGame() {
        this.deck.shuffle(); // Shuffle the deck
        const [hand1, hand2] = this.deck.deal(); // Deal cards to players
        this.player1.hand = hand1; // Assign hand to Player 1
        this.player2.hand = hand2; // Assign hand to Player 2
    }

    /**
     * Plays all rounds of the game.
     */
    playRound() {
        for (let i = 0; i < 26; i++) { // 26 rounds
            const card1 = this.player1.playCard(); // Player 1 plays a card
            const card2 = this.player2.playCard(); // Player 2 plays a card
            console.log(`${this.player1.name} plays ${card1.value} of ${card1.suit}`);
            console.log(`${this.player2.name} plays ${card2.value} of ${card2.suit}`);

            // Compare card values to determine round winner
            if (card1.getCardValue() > card2.getCardValue()) {
                this.player1.addPoint(); // Player 1 wins the round
                console.log(`${this.player1.name} wins the round!`);
            } else if (card1.getCardValue() < card2.getCardValue()) {
                this.player2.addPoint(); // Player 2 wins the round
                console.log(`${this.player2.name} wins the round!`);
            } else {
                console.log('This round is a tie!'); // Tie round
            }
        }
    }

    /**
     * Determines the winner based on scores.
     */
    determineWinner() {
        console.log(`Final Score: ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}`);
        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} wins the game!`); // Player 1 wins
        } else if (this.player1.score < this.player2.score) {
            console.log(`${this.player2.name} wins the game!`); // Player 2 wins
        } else {
            console.log('The game is a tie!'); // Game is a tie
        }
    }

    /**
     * Runs the entire game.
     */
    playGame() {
        this.startGame(); // Start the game
        this.playRound(); // Play all rounds
        this.determineWinner(); // Determine the winner
    }
}

module.exports = Game;

// Create a new game instance and play the game
const game = new Game();
game.playGame();
