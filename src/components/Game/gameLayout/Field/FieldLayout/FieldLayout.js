import styles from './FieldLayout.module.css';
import './FieldLayout.module.css';
import PropTypes from 'prop-types';
import { store } from '../../../../../store';

export const FieldLayout = () => {
	const { field } = store.getState();

	const handleCellClick = (index) => {
		const { onCellClick } = store.getState();
		if (onCellClick) {
			onCellClick(index);
		}
	};

	return (
		<div className={styles.board} id="board">
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
