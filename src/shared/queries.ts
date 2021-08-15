import { gql } from '@apollo/client'

export const queryData = (currency: any) => gql`
  query getSomeRates {
    someRates: rates(currency: "${currency}") {
      currency
    }
  }
`
