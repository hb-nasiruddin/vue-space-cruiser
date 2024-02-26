import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { API_ENDPOINT } from '@/config';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: API_ENDPOINT,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const dbClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default dbClient;
// import 'isomorphic-fetch';

// import { ApolloClient, createNetworkInterface } from 'apollo-client';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
// import { API_ENDPOINT } from '@/config/index';

// const networkInterface = createNetworkInterface({
//   uri: API_ENDPOINT,
// });

// const wsClient = new SubscriptionClient('ws://localhost:3020/subscriptions', {
//   reconnect: true,
// });

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient,
// );

// export const client = new ApolloClient({
//   networkInterface: networkInterfaceWithSubscriptions,
//   connectToDevTools: true,
// });

// export default client;
