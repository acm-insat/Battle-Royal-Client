import { Card } from 'shared/ui'
import { useAuth } from '../../config/auth.context'
import Announcements from './Announcements'
import TeamIntro from './TeamIntro'

const Home = props => {
  const { user } = props

  const { isAuth } = useAuth()

  return (
    <div className="flex gap-x-8 w-full">
      <div className="flex-grow">
        <Card title="">
          <div className="text-center text-xl -mt-4 mb-6">
            Welcome to the ACM'S BATTLE ROYALE
            <br />
            1st Edition
            <br />
            <br />
          </div>
          <br />

          <Announcements />
        </Card>
      </div>
      {user && (
        <div className="flex-grow w-80">
          <TeamIntro {...user} />
        </div>
      )}
    </div>
  )
}

export default Home
