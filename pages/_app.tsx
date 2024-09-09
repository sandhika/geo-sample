import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import dynamic from 'next/dynamic';
import { theme } from '../theme';

import RootLayout from '../components/Layout/Layout';

const ReduxProvider = dynamic(() => import('@/store/redux-provider'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Tracking Sinar Wijaya Group Sample</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
        <ReduxProvider>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
        </ReduxProvider>
    </MantineProvider>
  );
}
