import { gql } from '@apollo/client'

export const getAllAnnouncements = gql`
{
    announcements {
        content
        createdAt
    }
}
`

export const loginTeam = gql`
mutation loginTeam($credentials: LoginInput!) {
  login(credentials: $credentials) 
}
` 

export const getMyData = gql`
{
    user: myData {
        id
        name
        score
        unqualified
        members {
            fullname
            isMember
        }
    }
}
`

export const getProblemById = gql`
  query GetProblem($problem: ID!) {
    problem(id: $problem) {
      id
        title
        content
        score
        type
        clarifications {
            content
            response
        }
}
}
` 
export const createQuestion = gql`
mutation CreateQuestion($problem: ID!, $content: String!) {
    askQuestion(problem: $problem, content: $content)
}
`