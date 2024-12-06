// Deck class represents a collection of 52 playing cards
const Card = require('./Card');

class Deck {
    constructor() {
        this.cards = []; // Array to hold the deck of cards
        const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']; // Possible suits
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']; // Possible values

        // Create a card for each suit and value
        for (const suit of suits) {
            for (const value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    // Shuffles the deck using Fisher-Yates algorithm
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards
        }
    }

    // Deals 26 cards to each player
    deal() {
        return [this.cards.slice(0, 26), this.cards.slice(26, 52)]; // Split deck into two hands
    }
}

module.exports = Deck;
