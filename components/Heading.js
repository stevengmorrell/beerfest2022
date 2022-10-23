import React from "react";
import Head from "next/head";

const Heading = () => {
  return (
    <Head>
      <title>West Bridgford Hockey Club Beer Festival 2022</title>
      <meta name='description' content='Beer Guide 2022' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/images/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/images/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/images/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  );
};

export default Heading;
