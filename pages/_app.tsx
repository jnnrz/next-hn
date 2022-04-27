import App, { AppProps } from "next/app";
import { Router } from "next/router";
import nprogress from "nprogress";
import React from "react";
import "../styles/index.css";

Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

const NextHNApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default NextHNApp;
