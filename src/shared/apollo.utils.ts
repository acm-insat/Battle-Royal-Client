import { graphql } from '@apollo/client/react/hoc'
import client from '../config/ApolloClient'

export const wrapper = (query: any) => graphql(query)

export const clear = () => client.resetStore()
