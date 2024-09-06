export const checkWin = (field) => {
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
