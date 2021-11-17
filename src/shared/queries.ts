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
        length
        launched {
            isIt
            at
        }
        ended
        id
}
}
` 
export const createQuestion = gql`
mutation CreateQuestion($problem: ID!, $content: String!) {
    askQuestion(problem: $problem, content: $content)
}
`

export const getScoreboard = gql`
{
    scoreboard {
        name
        score
        unqualified
    }
}
`


export const getProblems = gql`
{
    problems {
        id
        title
        content
        score
        type
        length
        launched {
            isIt
            at
        }
        ended
    }
}
`

export const getMySubmissions = gql`
{
    submissions {
        id
        problem {
            title
        }
        response
        source_code
        language_id
        score
        createdAt
    }
}
`

export const submitSolution = gql`
mutation SubmitSolution($submission: SubmissionInput!) {
    submitSolution(submission: $submission)
}
`