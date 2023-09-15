document.getElementById("doWhileMine").addEventListener("click", ()=>{
let setPassword = prompt("Please set a password");
let tryPass = "";
let message = "Please input your password."

do {
    tryPass = prompt(message);
    if(tryPass != setPassword)
    {
        message = "Please try again";
    }
} while (tryPass != setPassword)

doWhileMine.innerHTML = "Logging in.";
})