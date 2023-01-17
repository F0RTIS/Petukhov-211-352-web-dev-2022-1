'use strict';

let turn = 0;
let gameOver = 0;

function initBoard() {
	let elem = document.getElementById('board');
	for (let i = 0; i < 9; i++) {
		let cell = document.createElement('div');
		cell.className = 'cell';
		elem.append(cell);
	}
	return elem;
}

function checkAvailableSteps() {

}

function findWinner() {

}

function clickHandler(event) {
	if (gameOver == 1) {
		alert('Игра завершена, начните новую игру.');
		return;
	}
	if (event.target.innerHTML != '' ) {
		alert('Эта клетка уже занята!');
		return;
	}

	event.target.innerHTML = turn == 0 ? 'X' : 'O';
	turn = (turn + 1) % 2;

	let winner = findWinner();
	if (winner || !checkAvailableSteps) {
		alert(winner ? `${winner} одержал победу!` : 'Ничья!');
		gameOver = 1;

	}
}

window.onload = function () {
	let board = initBoard();
	let cells = document.querySelectorAll('.cell');
	for (let cell of cells) {
		cell.onclick = clickHandler;
	}
};
