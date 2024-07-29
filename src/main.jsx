import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './Index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
		<Index />
	</Router>
);
