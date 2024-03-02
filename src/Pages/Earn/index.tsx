import LoginToEarn from './LoginToEarn'
import StayHereToEarn from './StayHereToEarn'
import NameService from './NameServices'
import TaskRewards from './SpinToEarn'

export default function Earn() {
    return (
        <div>
            <LoginToEarn />
            <hr />
            <StayHereToEarn />
            <hr />
            <NameService />
            <hr />
            <TaskRewards />
            <section className="section" />
        </div>
    )
}
