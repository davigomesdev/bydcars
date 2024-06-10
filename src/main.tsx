//style imports
import GlobalStyle from './presentation/styles/global.style';

//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//component imports
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
);
