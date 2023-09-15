document.getElementById("whileMine").addEventListener("click", ()=>{
let attempts = 0;
let guess = 11;
let answer = Math.ceil(Math.random()*10);
let message = "Pick a number between 1 an 10!"

while (guess != answer){
    guess = Number(prompt(message));
    if(guess == answer)
    {
        whileMine.innerHTML = "That is ... correct!";
    }
    else{
        message = `Hmmm, that's not it. That's guess number ${++attempts}.\nPick a number between 1 an 10.`;
    }
}
})