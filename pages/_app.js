import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="DToEjOjAiHg7CrFxVg3Z2PuvpI9TroHIAyEJMaTe"
      serverUrl="https://xjjpebf6ctin.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
