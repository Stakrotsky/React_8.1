import styles from './GameLayout.module.css';
import { FieldLayout } from './Field/FieldLayout/FieldLayout';
import { InformationLayout } from './Information/InformationLayout/InformationLayout';
import { store } from '../../../store';
import PropTypes from 'prop-types';

export const GameLayout = () => {
	const resetGame = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div className={styles.container}>
			<h2>Крестики-нолики</h2>
			<InformationLayout />
			<FieldLayout />
			<button className={styles['reset-button']} onClick={resetGame}>
				Начать с начала
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
	resetGame: PropTypes.func.isRequired,
};
