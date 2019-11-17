import App from 'next/app';
import { Router } from 'next/router';
import nprogress from 'nprogress';
import React from 'react';
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
		const { Component, pageProps }: any = this.props;
		return (
			<div>
				<Component {...pageProps} />
			</div>
		);
	}
}

export default MyApp;
