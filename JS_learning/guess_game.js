let guess;
let count=0;
while(guess!=45){
    guess=prompt("Enter your guess: ");
    if(guess>45){
        console.log("Guess smaller");
    }
    else{
        console.log("Guess higher");
    }
    count++;
}
console.log(`You took ${count} tries.`);