
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBLS_COUNT ={
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
const SYMBLS_VALUES ={
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}
const deposit = () => {
    while(true){
    const depositAmount = prompt("Enter a depost amount:");
    const NumberDepositAmout = parseFloat(depositAmount);

    if(isNaN(NumberDepositAmout) || NumberDepositAmout <= 0){
        console.log("invalid number, please try again."); //if true 
    }else{
        return NumberDepositAmout; // else this
    }
}
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of line to bet on (1-3):");
        const NUmberOfLInes = parseFloat(lines);
    
        if(isNaN(NUmberOfLInes) || NUmberOfLInes <= 0 || NUmberOfLInes > 3){
            console.log("Invalid number of lines, try again."); //if true 
        }else{
            return NUmberOfLInes; // else this
        }
    }
}
const getBet = (balance, lines) =>{
    while(true){
        const bet = prompt("Enter the bet per line:");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance /  lines){
            console.log("Invalid bet, try again.");
        }else{
            return numberBet;
        }
    }
}
const spin = () =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBLS_COUNT)){
        for(let i = 0; i < count; i++ ){
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for ( let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random()* reelSymbols.length);
          const selectedSymbol = reelSymbols[randomIndex];
          reels[i].push(selectedSymbol);  // one is added 
          reelSymbols.splice(randomIndex, 1) // one is deleted to not be repeated. 
        }
    }
    return reels;
}

console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();


