// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import Layout from "@/app/layout";
// import "../../public/css/globals.css"; // Adjust according to your global styles location

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
