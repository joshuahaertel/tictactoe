class ChocolateChip {

}

class Cookie {
    chocolateChips: ChocolateChip[]

    constructor(chocolateChips: ChocolateChip[] = [
        new ChocolateChip(),
        new ChocolateChip(),
        new ChocolateChip(),
    ]) {
        this.chocolateChips = chocolateChips
    }

}

const kevinsCookie = new Cookie([
    new ChocolateChip(),
])
console.log("Kevin has " + kevinsCookie.chocolateChips.length)
const jacobsCookie = new Cookie()
console.log("Jacob has " + jacobsCookie.chocolateChips.length)
const broHaertelsCookie = jacobsCookie
new Cookie()
let victorsCookie = new Cookie()
// Jacob did something wrong and lost his cookie privileges
// His cookie now belongs to Victor
victorsCookie = jacobsCookie
