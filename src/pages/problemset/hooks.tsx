import { getProblemById } from 'shared/queries'
import { useParams, Redirect } from 'react-router'
import { useQuery } from '@apollo/client'

export const useProblem = () => {
  const { id } = useParams<any>()
  const { loading, error, data } = useQuery(getProblemById, {
    variables: { problem: id },
  })

  return {
    loading,
    data,
    error: (!loading && !data?.problem) || error,
  }
}
