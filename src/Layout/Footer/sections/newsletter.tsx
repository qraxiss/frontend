import { Title } from '../title'
import { Section } from '../section'
import { Button, Form } from 'react-bootstrap'

export function Newsletter() {
    return (
        <Section>
            <Form className="subscribe-newsletter">
                <div className="title">
                    <Title title="Subscribe To Our" />
                    <Title title="Newsletter" />
                </div>
                <Form.Control type="email" id="email" name="email" placeholder="mail@shopcek.com" autoComplete="off" />
                <Button variant="primary" className="w-100" type="submit">
                    Subscribe
                </Button>
            </Form>
        </Section>
    )
}
