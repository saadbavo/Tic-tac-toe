const Gamboard = ( ()=> {
    let board =["", "", "", "", "", "", "", "", ""];
    
    const resetBoard = () => {
        board.fill("");
    };
    const placeMarker = (index, mark) => {
        if (index < 0 || index >= board.length || board[index] !== "") {
            throw new Error("Invalid move");
        }
        board[index] = mark;
    }
    const getBoard = () => board;
})();