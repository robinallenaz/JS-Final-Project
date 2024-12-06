// Player class represents a player in the game
class Player {
    constructor(name) {
        this.name = name; // Player's name
        this.hand = []; // Player's hand of cards
        this.score = 0; // Player's score
    }

    // Plays the top card from the player's hand
    playCard() {
        return this.hand.shift(); // Remove and return the first card
    }

    // Increases the player's score by one
    addPoint() {
        this.score += 1; // Increment score
    }
}

module.exports = Player;
