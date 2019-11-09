import App from 'next/app';
import { Router } from 'next/router';
import nprogress from 'nprogress';
import React from 'react';
import '../styles/index.css';

Router.events.on('routeChangeStart', () => nprogress.start());
Router.events.on('routeChangeComplete', () => nprogress.done());
Router.events.on('routeChangeError', () => nprogress.done());

class MyApp extends App {

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;