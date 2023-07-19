// script.js
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 橫向
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縱向
        [0, 4, 8], [2, 4, 6] // 對角線
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }

    return false;
}

function handleClick(index) {
    if (cells[index].textContent === '' && !checkWinner()) {
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`${currentPlayer} wins!`);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

for (const cell of cells) {
    cell.addEventListener('click', () => handleClick(Array.from(cells).indexOf(cell)));
}