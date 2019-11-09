import React from 'react';
import App from 'next/app';
import nprogress from 'nprogress';
import '../styles/index.css';
import { Router } from 'next/router';

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