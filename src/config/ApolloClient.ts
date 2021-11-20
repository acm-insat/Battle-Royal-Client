import { split, ApolloClient, createHttpLink, InMemoryCache, concat } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
  
})

export default client
