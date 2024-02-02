import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from './App';
import styled from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
`;

root.render(
  <React.StrictMode>
	<App />
	<BigButton as='a'>+++</BigButton>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
