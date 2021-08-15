import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getHeader } from '../shared/utils'

const httpLink = createHttpLink({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
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
