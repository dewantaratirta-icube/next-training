import { ApolloClient, InMemoryCache, ApolloProvider, gql, useMutation, useQuery } from '@apollo/client';

import styles from '../styles/pico.min.css';
import '../styles/globals.css'
import Header from '/components/Header';
import Footer from '/components/Footer';

const apiUrl = `https://b2cdemo.getswift.asia/graphql`;
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}


export default MyApp
