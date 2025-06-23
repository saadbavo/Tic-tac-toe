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
}
const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");