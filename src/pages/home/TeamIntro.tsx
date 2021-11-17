import { Team, Card } from 'shared/ui'

const TeamIntro = props => {
  const { name, score, unqualified, members } = props
  return (
    <div>
      <div className="flex-grow-0 w-80 mx-auto">
        <div className="mt-5">
          <h1 className="text-2xl">{name}</h1>

          {unqualified ? (
            <h3 className="text-red-600">DISQUALIFIED TEAM</h3>
          ) : (
            <h3 className="text-green-600">QUALIFIED TEAM</h3>
          )}
          <div className="text-xl text-green-300"></div>
          <br />
          <div className="flex gap-x-2 mb-5">
            <h2>Registered Members</h2>
          </div>

          {members.map(({ fullname, isMember }) => (
            <Team key={fullname} name={fullname} acm={isMember} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamIntro
