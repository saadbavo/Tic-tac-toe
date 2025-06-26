const Gamboard = ( ()=> {
    let board =["", "", "", "", "", "", "", "", ""];
    
    const resetBoard = () => {
        board.fill("");
    };
    const placeMarker = (index, player) => {
        if (index < 0 || index >= board.length || board[index] !== "") {
            throw new Error("Invalid move");
        }
        board[index] = player.mark;
    }
    getBoard = () => board;
    return { resetBoard, placeMarker, getBoard };
})();

const player = (name, mark) => {
    return { name, mark };
};

const checkWinner = (board) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Return the mark of the winner
        }
        else if (board.every(cell => cell !== "")) {
        return "draw"; // Return "draw" if all cells are filled and no winner
    }
    }
    return null; // No winner yet
    
}

