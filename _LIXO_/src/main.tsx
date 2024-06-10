import React from 'react';
import ReactDOM from 'react-dom/client';

import { config } from './wagmi.ts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { Buffer } from 'buffer';

import GlobalStyle from './shared/styles/global.style';
import App from './app.tsx';

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<App />
			</QueryClientProvider>
		</WagmiProvider>
	</React.StrictMode>,
);
