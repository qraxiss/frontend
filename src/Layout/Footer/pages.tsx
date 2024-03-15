import { Link } from 'react-router-dom'

export function Pages({ items }: { items: any[] }) {
    return items.map((item) => {
        return (
            <ul className="list-unstyled footer-link" key={item.url}>
                <li>
                    <Link to={item.url}>{item.title}</Link>
                </li>
            </ul>
        )
    })
}
