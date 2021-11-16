import { Card } from 'shared/ui'
import Announcements from './Announcements'
import TeamIntro from './TeamIntro'

const Home = props => {
  const { user } = props

  return (
    <div className="flex gap-x-8 w-full">
      <div className="flex-grow">
        <Card title="">
          <div className="text-center text-xl -mt-4 mb-6">
            Welcome to the ACM'S BATTLE ROYALE
            <br />
            1st Edition
            <br />
            {user && <TeamIntro {...user} />}
            <br />
          </div>
          <br />

          <Announcements />
        </Card>
      </div>
      {/* <div className="flex-grow-0 w-80">
      <Card title="">
        <div className="-mt-5">
      <h1 className="text-2xl">Linus Tech Tips</h1>
        <div className="flex gap-x-2">
        <h2>Active Team Members</h2>
        <span className={"bg-white text-black tracking-wide text-xs w-auto inline-block rounded-full py-1 px-2 uppercase"}>{teamsCount}</span>
        </div>
        <br/>
        <Team name="Linus Sebastian" active="true"/>
        <Team name="Madison Reeve" active="true"/>
        <Team name="Nicholas Plouffe" active="false"/>
        <Team name="Anthony Young" active="true"/>
        <Team name="Alex Clark" active="false"/>
        <Team name="Riley Murdock" active="true"/>
        </div>
      </Card>
      </div> */}
    </div>
  )
}

export default Home
