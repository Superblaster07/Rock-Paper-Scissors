let user = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");


const compGen = () => {
    const moves = ["rock","paper","scissors"]
    let x = Math.floor(Math.random()*3);
    let comp1 = moves[x];
    return comp1;
}
let reboot;

const Revert = () => {
    document.querySelector(".inside-msg").innerText = "Pick Your Choice";
    clearRe();
};

const draw = () => {
    document.querySelector(".inside-msg").innerText = "Draw";
    reboot = setTimeout(Revert, 1000); // Use setTimeout instead of setInterval for a single call
};

const clearRe = () => {
    clearTimeout(reboot); // Clear the timeout if it's set
};

const gameplay = (userIn) => {
    let x = userIn;
    let y = compGen();
    console.log(x,y);
    if (x == y){
        draw();
    }else if(x == "rock" && y == "scissors" || x == "scissors" && y == "paper" || x == "paper" && y == "rock"){
        user++;
    }else if(y == "rock" && x == "scissors" || y == "scissors" && x == "paper" || y == "paper" && x == "rock"){
        comp++;
    }
    document.querySelector("#user-score").innerText = user;
    document.querySelector("#comp-score").innerText = comp;
}




choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userIn = choice.getAttribute("id");
        gameplay(userIn);
    })
})

