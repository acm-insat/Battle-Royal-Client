import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
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
  cache: new InMemoryCache(),
})

export default client
