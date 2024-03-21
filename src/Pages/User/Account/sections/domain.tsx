import { Tab, Card, Table, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { useEarn } from 'context/earn'

export function DomainsNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="domains" className="fs-15" role="presentation">
                <i className="bi bi-bag align-middle me-1"></i> Domains
            </Nav.Link>
        </Nav.Item>
    )
}

export function DomainsTab() {
    let navigate = useNavigate()
    let { getDomainsByUser, chooseDomainRES } = useEarn()

    return (
        <Tab.Pane eventKey="domains">
            <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                <Card>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <Table className="fs-15 align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Username</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getDomainsByUser.map((item: any, inx: any) => {
                                        return (
                                            <tr>
                                                <td>{item.domain}</td>
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            chooseDomainRES.fn({
                                                                variables: {
                                                                    domain: item.domain
                                                                }
                                                            })
                                                        }}
                                                        className="btn btn-primary w-100"
                                                    >
                                                        Choose
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                        <div className="text-end mt-4">
                            <Link to={'/products-grid'} className="btn btn-hover btn-primary">
                                Continue Shopping <i className="ri-arrow-right-line align-middle ms-1"></i>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Tab.Pane>
    )
}
