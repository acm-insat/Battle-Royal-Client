import { Card, FullButton, Button, Challenge, SubmissionRow } from 'shared/ui'
import React, { useEffect, useState } from 'react'
import NewWindow from 'react-new-window'
import { getMySubmissions } from 'shared/queries'
import { wrapper } from 'shared/apollo.utils'

const formatSubmissionsList = submissions =>
  submissions &&
  [...submissions]
    .sort((a, b) => b.createdAt - a.createdAt)
    .map(({ createdAt, ...data }) => ({
      ...data,
      createdAt: new Date(Number(createdAt)),
    }))

const getLanguageById = id => {
  return {
    71: 'Python',
    54: 'C++',
    62: 'Java',
    50: 'C',
  }[id]
}

const Submissions = props => {
  const {
    loading,
    data: { submissions },
  } = props

  if (loading) return null

  //   console.log(
  //     submissions &&
  //       [...submissions]
  //         .sort((a, b) => b.createdAt - a.createdAt)
  //         .map(({ createdAt, ...data }) => ({
  //           data,
  //           createdAt: new Date(Number(createdAt)),
  //         }))
  //   )

  return (
    <Card title="Submissions">
      <div className="mt-8">
        <p className="text-white pl-3">
          Submissions Count: {submissions?.length}
        </p>
      </div>

      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-500 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-dark-2 bg-dark-2">
                    TIME
                  </th>
                  <th className="text-white px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-dark-2 bg-dark-2">
                    PROBLEM
                  </th>
                  <th className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-dark-2 bg-dark-2">
                    LANG
                  </th>
                  <th className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-dark-2 bg-dark-2">
                    CODE
                  </th>
                  <th className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-dark-2 bg-dark-2">
                    STATUS
                  </th>
                </tr>
              </thead>

              <tbody className="bg-dark-3">
                {formatSubmissionsList(submissions)?.map((sub, idx) => (
                  <SubmissionRow
                    key={idx}
                    time={sub.createdAt.toLocaleString('en-US', {
                      hour12: false,
                    })}
                    problem={sub.problem.title}
                    lang={getLanguageById(sub.language_id)}
                    code={sub.source_code}
                    status={sub.response ? sub.response : 'Pending'}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  )
}
export default wrapper(getMySubmissions)(Submissions)
