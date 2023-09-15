document.getElementById("forMine").addEventListener("click", ()=>{
    let userNum = Number(prompt("Please enter a number to multiply by 1-10"));
    let answer = ""
    
    for(i = 1; i <= 10; i++) {
       answer += `${userNum} * ${i} = ${userNum * i} \n`
    } 
    document.getElementById("forMine").innerText = answer;
    //Needed for the line breaks to work (in my experience)
    })