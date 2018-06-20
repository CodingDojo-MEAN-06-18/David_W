class DeckOfCards {
    constructor(){
        this.deck = []
    }
    makeDeck() {
        this.deck = []
        const cards = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
        const suits = ["Diamonds","Hearts","Spades","Clubs"]

        for (const suit of suits){
            for(const card of cards){
                this.deck.push(`${card} of ${suit}`);
            }
        }

        return this
    }
    reset(){
        var reset_Deck = new DeckOfCards();
        return reset_Deck.makeDeck()
    }

    shuffle(){
        var cards_left = this.deck.length, temp, index;

        // While there remain elements to shuffle…
        while (cards_left) {
            // Pick a remaining element in the array
            index = Math.floor(Math.random() * cards_left--);
        
            // And swap it with the current element that was just found
            temp = this.deck[cards_left];
            this.deck[cards_left] = this.deck[index];
            this.deck[index] = temp;
            // each iteration should push the shuffeled card to the back until they are all shuffled
        }
    
        return this;
        }
    }

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new DeckOfCards();
console.log(deck1.makeDeck().shuffle())

// const player2 = new Player("Ronnel");
// player2.draw(deck1);
// console.log(player2);
// console.log(deck1);



