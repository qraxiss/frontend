import { Row, Col, Container, Button } from 'react-bootstrap'

let data = [
    {
        title: 'Refer a friend',
        description: 'Invite your frinends to join Shopcek.',
        action: 'Invite Now'
    },
    {
        title: 'Follow Twitter',
        description: 'Follow Shopcek X account.',
        action: 'Follow Now'
    },
    {
        title: 'Join Telegram',
        description: 'Join Shopcek Official Telegram',
        action: 'Join Now'
    },
    {
        title: 'Join Discord',
        description: 'Join Shopcek Official Discord',
        action: 'Join Now'
    },
    {
        title: 'Shop Volume',
        description: 'You can earn XP from your max 5 orders per day.',
        action: 'Shop Now'
    },
    {
        title: 'App Download',
        description: 'Download our app PlayStore or AppStore',
        action: 'Download'
    },{
        title: 'Fill out The Form',
        description: 'Fill out the form completly',
        action: 'Fill it Now'
    },
    {
        title: 'Share Your Product',
        description: 'Send us the picture of the product you purchased!',
        action: 'Share Now'
    }
]

export function Task({ title, description, action }: { title: string; description: string; action: string }) {
    return (
        <div className="task" key={title}>
            <div className="text">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>

            <Button className="btn btn btn-primary">{action}</Button>
        </div>
    )
}

export default function TaskRewards() {
    return (
        <section className="section pb-0 task-rewards">
            <div className="top-container">
                <h1>Task Rewards</h1>
                <Row>
                    <Col>
                        {data.slice(0, 4).map((item) => {
                            return <Row>{Task(item)}</Row>
                        })}
                    </Col>

                    <Col>
                        {data.slice(4, 8).map((item) => {
                            return <Row>{Task(item)}</Row>
                        })}
                    </Col>
                </Row>
            </div>
        </section>
    )
}
