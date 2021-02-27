// Initialize variable to keep track of turn
let turn = 'X';

// Make cells respond to click but updating the display value
const cells = document.querySelectorAll('.cell');
console.log(cells);
cells.forEach((cell) => {
	cell.addEventListener('click', () => {
		cell.textContent = turn;
		setTimeout(checkWin, 1);
		setTimeout(() => (turn = turn === 'X' ? 'O' : 'X'), 1);
	});
});

// Clear board
const clearBoard = () => {
	cells.forEach((cell) => {
		cell.textContent = '';
	});
};

// Check if anyone won the game
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const checkWin = () => {
	const cellArr = Array.from(cells);
	for (combination of winningCombinations) {
		first = cellArr[combination[0]].textContent;
		second = cellArr[combination[1]].textContent;
		third = cellArr[combination[2]].textContent;
		if (first !== '' && first === second && second === third) {
			alert(`Player ${turn} has won the game!`);
			clearBoard();
			break;
		}
	}
};
