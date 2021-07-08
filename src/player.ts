class Player {
    symbol: TTTSymbol

    constructor(symbol: TTTSymbol) {
        this.symbol = symbol
    }

    play(symbol: TTTSymbol): TTTSymbol {
        return symbol
    }
}

const playerOne = new Player(TTTSymbol.X)
const playerTwo = new Player(TTTSymbol.O)
