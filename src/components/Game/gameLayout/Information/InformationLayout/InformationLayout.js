import styles from './InformationLayout.module.css';
import './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<div className={styles.status} id="status">
			{isDraw ? (
				<span className={styles.status}>Ничья</span>
			) : isGameEnded ? (
				<span className={styles.status}>Победа: {currentPlayer}</span>
			) : (
				<span className={styles.status}>Текущий ход: {currentPlayer}</span>
			)}
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
