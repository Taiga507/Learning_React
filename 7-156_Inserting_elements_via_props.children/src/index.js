import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from './App';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

root.render(
	<React.StrictMode>
		<App />
		<BigButton as='a'>Отправить отчет</BigButton>
	</React.StrictMode>
);

reportWebVitals();