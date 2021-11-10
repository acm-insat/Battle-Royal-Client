import { gql } from '@apollo/client'

export const queryData = (currency: any) => gql`
  query getSomeRates {
    someRates: rates(currency: "${currency}") {
      currency
    }
  }
`


export const register = gql`
mutation register($team: TeamInput!) {
  register(team: $team) {
    message,
    errors
  }
}
`