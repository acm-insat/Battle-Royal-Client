import { Card, Button, Announcement, Team } from 'shared/ui'
import Countdown from 'react-countdown'
import React from 'react'

const Home = () => {
  const isLoggedIn = false
  const twentyfourhours=24*3600*1000
  const startDate=Date.now() //PBR start date
  const [teamsCount, setTeamsCount] = React.useState(0)
  React.useEffect(()=>{
    setTeamsCount(document.getElementsByClassName("flex my-2").length)
  },[teamsCount])
  return (
    <div className="flex gap-x-8 w-full">
      <div className="flex-grow">
      <Card title="">
        <div className="text-center text-xl -mt-4 mb-6">
          Welcome to the ACM'S BATTLE ROYALE<br/>2nd Edition<br/>
          {!isLoggedIn && <><br/>

          <div className="">
            <Button contained href="/register">Register Your Team Now</Button>
          </div>
            
            </>
          }
          <br/>Event will start/end in <Countdown key={startDate+twentyfourhours} date={startDate+twentyfourhours} /></div>
        <br/><h2>News &amp; Announcements</h2><br/>
        <div className="content mx-auto">
    <Announcement flair="new" title="Big news ipsum dolor sit amet consectetur" />
    <Announcement flair="info" flaircolor="primary-4" title="Small News ipsum dolor sit amet consectetur" />
      
      
    </div>

      </Card>
      </div>
      <div className="flex-grow-0 w-80">
      <Card title="">
        <div className="flex gap-x-2">
        <h2>Active Teams</h2>
        <span className={"bg-white text-black tracking-wide text-xs w-auto inline-block rounded-full py-1 px-2 uppercase"}>{teamsCount}</span>
        </div>
        <br/>
        <Team name="Linus Tech Tips"/>
        <Team name="Tech Linked"/>
        <Team name="Tech Quickie"/>
        <Team name="Short Circuit"/>
        <Team name="Channel Super Fun"/>
        <Team name="LMG Clips"/>
        <Team name="Linus Cat Tips"/>
      </Card>
      </div>
    </div>
  )
}

export default Home
