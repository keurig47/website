import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../containers/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <title>David Keimig</title>
          <meta name="description" content="David Keimig's Personal Website" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
