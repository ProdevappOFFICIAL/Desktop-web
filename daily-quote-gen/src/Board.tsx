import React, { useState } from 'react';

const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));

const Board: React.FC = () => {
    const [board, setBoard] = useState(initialBoard);
    const [selectedPiece, setSelectedPiece] = useState<{ x: number, y: number } | null>(null);

    const handleDotClick = (x: number, y: number) => {
        if (selectedPiece) {
            // Move piece to the clicked spot
            const newBoard = [...board];
            newBoard[selectedPiece.y][selectedPiece.x] = null;  // Clear the original spot
            newBoard[y][x] = 'piece';  // Place the piece in the new spot
            setBoard(newBoard);
            setSelectedPiece(null);
        } else if (board[y][x] === 'piece') {
            setSelectedPiece({ x, y });
        }
    };

    return (
        <div className="grid grid-cols-8 gap-0.5 w-80 h-80">
            {board.map((row, y) => (
                <div key={y} className="grid grid-cols-8">
                    {row.map((cell, x) => (
                        <div
                            key={x}
                            className={`w-10 h-10 flex items-center justify-center 
                            ${cell === 'piece' ? 'bg-black rounded-full' : 'bg-white border'} 
                            cursor-pointer`}
                            onClick={() => handleDotClick(x, y)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
