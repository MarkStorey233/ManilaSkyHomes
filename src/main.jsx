import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Index from './Index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<HashRouter>
		<Index />
	</HashRouter>
);
