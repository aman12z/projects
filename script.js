let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(position) {
    if (board[position] === '') {
        board[position] = currentPlayer;
        document.getElementsByClassName('cell')[position].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            return;
        }
        if (checkDraw()) {
            document.getElementById('message').innerText = "It's a draw!";
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    for (let combo of winningCombos) {
        if (board[combo[0]] === currentPlayer &&
            board[combo[1]] === currentPlayer &&
            board[combo[2]] === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    document.getElementById('message').innerText = '';
}
