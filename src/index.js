const boxes = document.querySelectorAll('.box');
let clear = document.querySelector('#clear');
let winStatus = document.querySelector('#winStatus');
const x = '❌';
const o = '⭕';
const array = ['','','','','','','',''];
let continueGame = true;
let currentPlayer = x;
let players = 'Player1';
init();

export function add(a,b){
  return a+b;
}

export function init()  {
  boxes.forEach((box) => {
    box.addEventListener('click',boxCheck)
  });
  clear.addEventListener('click', restartGame);
}

export function boxCheck(e) {
  const id = e.target.id
  if(!continueGame){
    return;
  }
  if(!array[id]){
    debugger
    array[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    winner();
    changePlayer();

  };
}

export function changePlayer() {
  debugger
  players = players == 'Player1' ? 'Player2' : 'Player1';
  currentPlayer = currentPlayer == x ? o : x;
}

function winner(){
  let b0 = document.getElementById('0').innerHTML;
  let b1 = document.getElementById('1').innerHTML;
  let b2 = document.getElementById('2').innerHTML;
  let b3 = document.getElementById('3').innerHTML;
  let b4 = document.getElementById('4').innerHTML;
  let b5 = document.getElementById('5').innerHTML;
  let b6 = document.getElementById('6').innerHTML;
  let b7 = document.getElementById('7').innerHTML;
  let b8 = document.getElementById('8').innerHTML;
  if(b0 == b1 && b1==b2 && !b0==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b2 == b4 && b4==b6 && !b2==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b0==b4 && b4==b8 && !b0==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b3==b4 && b4==b5 && !b3==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b0==b3 && b3==b6 &&  !b6==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b2==b5 && b5==b8 && !b5==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b6==b7 && b7==b8 && !b7==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  if(b1==b4 && b4==b7&& !b1==""){
    debugger
    winStatus.innerHTML = `${players}==> winner`
    continueGame = false;
  }
  draw();
}

function restartGame()  {
  currentPlayer = x
  winStatus.textContent = `Start Now`;
  players = 'Player1'
  continueGame= true;
  boxes.forEach((box) => {
    box.innerText = ""
  });
  array.forEach(((a,i) => {
    array[i] = '';
  }))
}

function draw(){
  if(!array.includes('')){
    debugger
    winStatus.innerHTML = `Game Draw`
    continueGame = false;
  }
}