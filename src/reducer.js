// reducer.js
const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	onCellClick: null,
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};

		case 'SET_FIELD':
			return {
				...state,
				field: payload,
			};

		case 'SET_GAME_ENDED':
			return {
				...state,
				isGameEnded: payload,
			};

		case 'SET_DRAW':
			return {
				...state,
				isDraw: payload,
			};

		case 'REGISTER_CELL_CLICK':
			return {
				...state,
				onCellClick: payload,
			};

		case 'RESTART_GAME':
			return {
				...initialState,
				onCellClick: state.onCellClick,
			};

		default:
			return state;
	}
};
