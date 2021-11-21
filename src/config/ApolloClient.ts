import { split, ApolloClient, createHttpLink, InMemoryCache, concat } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context'
import { getHeader } from '../shared/helpers'

const httpLink = createHttpLink({
  uri: process.env.SNOWPACK_PUBLIC_BACKEND_URL,
})

const authLink = setContext((_, { headers }) => {
  return {
    ...getHeader(headers),
  }
})


// const wsLink = new WebSocketLink({
//   uri: `${process.env.SNOWPACK_PUBLIC_SOCKET_URL}`,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: `Bearer ${localStorage.getItem('token')}`,
//     },
//   }
// })

// const connectionLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// )

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  
})

export default client
