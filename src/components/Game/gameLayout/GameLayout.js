import styles from './GameLayout.module.css';
import { FieldLayout } from './Field/FieldLayout/FieldLayout';
import { InformationLayout } from './Information/InformationLayout/InformationLayout';
import PropTypes from 'prop-types';

export const GameLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	onCellClick,
	resetGame,
}) => {
	return (
		<div className={styles.container}>
			<h2>Крестики-нолики</h2>
			<InformationLayout
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<FieldLayout field={field} onCellClick={onCellClick} />
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
