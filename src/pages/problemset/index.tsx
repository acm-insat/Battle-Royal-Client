import { Card, FullButton, Button, Challenge } from 'shared/ui'
import { useEffect, useState } from 'react'
import { getProblems } from 'shared/queries'
import { wrapper } from 'shared/apollo.utils'

const Problemset = props => {
  const {
    loading,
    data: { problems },
  } = props

  if (loading) return <></>

  console.log(problems)

  return (
    <div>
      <div className="mt-8">
        <p className="text-white pl-3">Problemset</p>
      </div>

      {problems &&
        [...problems]
          ?.map(({ createdAt, ...content }) => ({
            ...content,
            createdAt: new Date(Number(createdAt)),
          }))
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((problem: any) => (
            <Challenge
              id={problem.id}
              key={problem.id}
              timeLeft={
                new Date().getTime() -
                (new Date(problem?.launched?.at).getTime() +
                  problem?.length * 60)
              }
              title={problem.title}
              state={problem?.launched?.isIt && !problem?.ended ? 'on' : 'off'}
              level={problem.type === 1 ? 'Easy' : 'Medium'}
              points={problem.score}
              shortdescription={problem.shorterContent}

              //           datecountdown,
              // secondstoend,
            />
          ))}
    </div>
  )
}
export default wrapper(getProblems)(Problemset)
