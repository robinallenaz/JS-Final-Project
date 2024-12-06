// Card class represents a single playing card
// suit: the suit of the card (e.g., Spades)
// value: the rank of the card (e.g., 2, King)
class Card {
    constructor(suit, value) {
        this.suit = suit; // Assign suit
        this.value = value; // Assign value
    }

    // Returns the numeric value of the card for comparison
    getCardValue() {
        const faceCardValues = { 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14 };
        return faceCardValues[this.value] || this.value; // Use face card value or numeric value
    }
}

module.exports = Card;
