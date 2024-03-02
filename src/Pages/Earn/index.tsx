import LoginToEarn from './LoginToEarn'
import StayHereToEarn from './StayHereToEarn'
import NameService from './NameServices'
import SpinToEarn from './SpinToEarn'
import TaskRewards from './TaskRewards'

export default function Earn() {
    return (
        <div className="earn-page">
            <LoginToEarn />
            <hr />
            <StayHereToEarn />
            <hr />
            <NameService />
            <hr />
            <TaskRewards />
            <hr />
            <SpinToEarn />
            <section className="section" />
        </div>
    )
}
