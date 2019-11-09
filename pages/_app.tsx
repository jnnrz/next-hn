import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Router } from 'next/router';
import nprogress from 'nprogress';
import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '../store/configureStore';
import '../styles/index.css';

Router.events.on('routeChangeStart', () => nprogress.start());
Router.events.on('routeChangeComplete', () => nprogress.done());
Router.events.on('routeChangeError', () => nprogress.done());

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
    }
    
		return { pageProps };
	}

	render() {
		const { Component, pageProps, store }: any = this.props;
		return (
			<div>
				<Provider store={store}>
					<PersistGate persistor={persistStore(store)}>
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
			</div>
		);
	}
}

export default compose(withRedux(configureStore))(MyApp);
