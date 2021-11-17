import { Card, TeamPosition } from 'shared/ui'
import { getScoreboard } from 'shared/queries'
import { wrapper } from 'shared/apollo.utils'

const Leaderboard = props => {
  const {
    loading,
    data: { scoreboard },
  } = props

  if (loading) return null

  return (
    <Card title="Leaderboard">
      {scoreboard &&
        [...scoreboard]
          .sort((a, b) => b.score - a.score)
          .map((team, idx) => (
            <TeamPosition
              key={team.name}
              position={idx + 1}
              name={team.name}
              points={team.score}
              unqualified={team.unqualified}
            />
          ))}
    </Card>
  )
}
export default wrapper(getScoreboard)(Leaderboard)
