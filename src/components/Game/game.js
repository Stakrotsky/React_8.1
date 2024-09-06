import { useState } from 'react';
import { GameLayout } from './gameLayout/GameLayout';
import PropTypes from 'prop-types';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const onCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = field.slice();
		newField[index] = currentPlayer;
		setField(newField);

		const isWinningMove = checkWin(newField);
		const isBoardFull = newField.every((cell) => cell);

		if (isWinningMove) {
			setIsGameEnded(true);
		} else if (isBoardFull) {
			setIsDraw(true);
			setIsGameEnded(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	const checkWin = (field) => {
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

		return winningCombinations.some((combination) => {
			const [a, b, c] = combination;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
			onCellClick={onCellClick}
			resetGame={resetGame}
		/>
	);
};

Game.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
};
