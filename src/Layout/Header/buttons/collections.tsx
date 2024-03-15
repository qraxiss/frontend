import { Collections as CollectionsIcon } from 'Components/Images/Icons'

export function Collections() {
    return (
        <div className="d-flex align-items-center nav-item">
            <div className="collections">
                <CollectionsIcon className="hamburger icon" />
                <div>
                    <h6 className="text-primary">COLLECTIONS</h6>
                </div>
            </div>
        </div>
    )
}
