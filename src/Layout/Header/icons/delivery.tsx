import { Delivery as DeliveryIcon } from "Components/Images/Icons"

export function Delivery() {
    return (
        <div className="d-flex align-items-center nav-item" style={{ fontSize: '14px', textAlign: 'right' }}>
            <div className="delivery">
                <h6 className="text-secondary">WORLDWIDE</h6>
                <h6 className="text-primary">FREE SHIPPING</h6>
            </div>
            <DeliveryIcon className="header-profile-user" />
        </div>
    )
}