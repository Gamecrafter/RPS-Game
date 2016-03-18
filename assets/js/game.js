var games = 0;
var ties = 0;
var player = 0;
var computer = 0;
function play(choice1){
    var choice2 = random();
    var winner = "";
    if(choice1 === choice2) winner = "Nobody";
    else if(choice1 === "rock") winner = choice2 === "scissors" ? "You" : "Computer";
    else if(choice1 === "paper") winner = choice2 === "rock" ? "You" : "Computer";
    else if(choice1 === "scissors") winner = choice2 === "paper" ? "You" : "Computer";
    document.getElementById("result").innerHTML = "You chose "+choice1+", and the computer chose "+choice2+". "+winner+" won!";
    update(winner);
};
function random(){
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};
function update(winner){
    document.getElementById("games").innerHTML = ++games;
    switch(winner.toLowerCase()){
        case "you":
            document.getElementById("player").innerHTML = ++player;
            break;
        case "computer":
            document.getElementById("computer").innerHTML = ++computer;
            break;
        case "nobody":
            document.getElementById("ties").innerHTML = ++ties;
            break;
    }
}