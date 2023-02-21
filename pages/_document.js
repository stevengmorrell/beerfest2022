import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Beer Guide 2023' />
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
        <link rel='manifest' href='/manifest.json' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
        <meta name='theme-color' content='#FFC40A' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
