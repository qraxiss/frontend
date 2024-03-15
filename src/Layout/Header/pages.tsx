import { Link } from 'react-router-dom'
import { items } from 'data/pages'

export function Pages() {
    return (
        <div className="pages">
            {items.map((item: any) => {
                if (item.items) {
                    return (
                        <div className="dropdown nav-item dropdown-hover" key={item.url}>
                            <Link
                                className="dropdown-toggle nav-link "
                                data-key="t-home"
                                to={item.url}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                    fontSize: '14px'
                                }}
                            >
                                {item.icon}
                                {(item.title as string).toUpperCase()}
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu">
                                {item.items.map((sub: any) => {
                                    if (sub.items) {
                                        return (
                                            <li className="dropdown dropdown-hover nav-item" key={sub.url}>
                                                <Link
                                                    to={sub.url}
                                                    className="nav-link dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    {sub.title}
                                                </Link>
                                                <ul className="dropdown-menu submenu">
                                                    {sub.items.map((subSubItem: any) => {
                                                        return (
                                                            <li key={subSubItem.url}>
                                                                <Link className="nav-link" to={subSubItem.url}>
                                                                    {subSubItem.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li className="nav-item" key={sub.url}>
                                                <Link to={sub.url} className="nav-link" data-key={sub.url}>
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    )
                } else {
                    return (
                        <div className="nav-item" key={item.url}>
                            <Link className={`nav-link ${item.title === 'Earn' ? 'earn' : ''}`} to={item.url} role="button">
                                {item.icon}
                                {(item.title as string).toUpperCase()}
                            </Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}
