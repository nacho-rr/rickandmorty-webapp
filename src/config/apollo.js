import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql/'
});

export default client;