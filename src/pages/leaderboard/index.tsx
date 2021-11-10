import { Card, FullButton, Input, Error, TeamPosition } from 'shared/ui'
const Leaderboard = () => {
return (
    <Card title="Leaderboard">
        <TeamPosition position="1" name="LinusTechTips" points="1000" rounds="10"/>
        <TeamPosition position="2" name="TechLinked" points="900" rounds="9"/>
        <TeamPosition position="3" name="TechQuickie" points="800" rounds="8"/>
        <TeamPosition position="4" name="ShortCircuit" points="700" rounds="7"/>
        <TeamPosition position="5" name="ChannelSuperFun" points="600" rounds="6"/>
        <TeamPosition position="6" name="LMGClips" points="500" rounds="5"/>
        <TeamPosition position="7" name="LinusCatTips" points="400" rounds="4"/>

    </Card>
)
}
export default Leaderboard