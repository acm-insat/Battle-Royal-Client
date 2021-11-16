const TeamIntro = props => {
  const { name, score, unqualified, members } = props
  return (
    <div>
      {name} <br />
      {score} <br />
      {members.map(({ fullname, isMember }) => (
        <h1>
          {fullname} {isMember && ' - ACM MEMBER'}
        </h1>
      ))}
      {unqualified ? 'You are Unqualified' : 'Keep Going'}
    </div>
  )
}

export default TeamIntro
