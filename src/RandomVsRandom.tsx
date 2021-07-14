import React, { useState } from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove, } from "chess.js";

const Chess = require("chess.js");

const RandomVsRandom: React.FC = () => {
    const [chess] = useState<ChessInstance>(
        new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
    );

    const [fen, setFen] = useState(chess.fen());

    const handleMove = (move: ShortMove) => {
        while (chess.move(move)) {

                const moves = chess.moves();

                if (moves.length > 0) {
                    const computerMove = moves[Math.floor(Math.random() * moves.length)];
                    chess.move(computerMove);
                    setFen(chess.fen());
                }


            setFen(chess.fen());
        }
    };

    return (
        <div style= {boardsContainer}>
            <Chessboard
                position={fen}
                onDrop={(move) =>
                    handleMove({
                        from: move.sourceSquare,
                        to: move.targetSquare,
                        promotion: "q",
                    })
                }
            />
        </div>
    );
};

const boardsContainer = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100vw",
    marginTop: 30,
    marginBottom: 50
};

export default RandomVsRandom;