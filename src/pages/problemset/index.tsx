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
        <p className="text-white pl-3">Problems Count: {}</p>
      </div>

      {problems
        ?.sort(
          (a: any, b: any) =>
            new Date(Number(a.createdAt) - Number(b.createdAt))
        )
        .map(problem => (
          <Challenge
            id={problem.id}
            key={problem.id}
            timeLeft={
              new Date().getTime() - (problem?.launched?.at + problem?.length)
            }
            title={problem.title}
            state={problem?.launched?.isIt && !problem?.ended ? 'on' : 'off'}
            level={problem.type === 1 ? 'Easy' : 'Medium'}
            points={problem.score}
            shortdescription={problem.shorterContent}
          />
        ))}
    </div>
  )
}
export default wrapper(getProblems)(Problemset)
