import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state;
	const listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			const index = listeners.indexOf(listener);
			listeners.splice(index, 1);
		};
	};

	dispatch({});

	return { dispatch, getState, subscribe };
};

export const store = createStore(appReducer);
