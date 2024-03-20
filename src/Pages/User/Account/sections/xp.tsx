import { useEarn } from 'context/earn'
import { Nav } from 'react-bootstrap'

import { Tab } from 'react-bootstrap'

export function XpNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="xp-points" className="fs-15" role="presentation">
                <i className="bi bi-coin align-middle me-1"></i> XP Points
            </Nav.Link>
        </Nav.Item>
    )
}

export function XpTab() {
    let { xp } = useEarn()

    return (
        <Tab.Pane eventKey="xp-points">
            <div className="card">
                <div className="card-body">
                    <div className="xp-points">
                        <div className="text">
                            <div>Total</div>
                            <div>:</div>
                            <div>{xp}</div>
                        </div>

                        <div className="buttons">
                            <button className="btn btn-primary">Collect XP</button>
                            <button className="btn btn-secondary">EarnDocs</button>
                        </div>
                    </div>
                </div>
            </div>
        </Tab.Pane>
    )
}
