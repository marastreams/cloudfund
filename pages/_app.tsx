import '../styles/globals.css'
import { StateContextProvider } from '../context';
import type { AppProps } from 'next/app'
import { Layout } from '../components';
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const desiredChainId = ChainId.BinanceSmartChainTestnet

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <StateContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContextProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
