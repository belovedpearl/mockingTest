// function buttonClick() {
//     document.getElementById("par").innerHTML = "You Clicked";
// }

// module.exports = buttonClick;

let game = {
    score : 0,
    currentGame : [],
    playerMoves : [],
    choices : []
}

module.exports = { game }   //curly braces used around game cos we will be exporting more than one function from the file