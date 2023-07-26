// your code here...
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;
var cells = document.querySelectorAll(".cell");
var gmSta = document.querySelector(".game--status");
var resBtn = document.querySelector(".game--restart");
gmSta.innerHTML = "It's " + PLAYER_X + "'s turn";

cells.forEach(cell => cell.addEventListener("click",cellClick));

function cellClick(event){
const cell = event.target;
const cellNumber = cell.dataset.cellIndex;
if(turn === PLAYER_X){
    cell.innerText = PLAYER_X;
    gmSta.innerHTML = "It's " + PLAYER_O + "'s turn";
turn = PLAYER_O;
}else{
    cell.innerText = PLAYER_O;
    gmSta.innerHTML = "It's " + PLAYER_X + "'s turn";
turn = PLAYER_X;
}
}


resBtn.addEventListener('click',resetBoard);
function resetBoard(){
    cells.forEach(cell => cell.innerText = "");
    turn = PLAYER_X;
    gmSta.innerHTML = "It's " + PLAYER_X + "'s turn";

}
