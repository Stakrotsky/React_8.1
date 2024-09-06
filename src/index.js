import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './components/Game/game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>,
);
