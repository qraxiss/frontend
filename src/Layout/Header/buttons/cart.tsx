import { Button } from 'react-bootstrap'
import { useCart } from 'context/cart'
import { useEffect, useState } from 'react'

import { Cart as CartIcon } from 'Components/Images/Icons'

export function Cart(props: { handlecardShow: any }) {
    let { cartItems } = useCart()
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCartCount(cartItems.length)

        let subtotal = 0
        for (let i = 0; i < cartItems.length; i++) {
            subtotal += cartItems[i].product.price * cartItems[i].count
        }
        setTotalPrice(subtotal)
    }, [cartItems])

    return (
        <div
            className="topbar-head-dropdown ms-1 header-item"
            style={{
                cursor: 'pointer'
            }}
            onClick={props.handlecardShow}
        >
            <Button
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
            >
                {/* <i className="ph-shopping-cart fs-18"></i> */}
                <CartIcon className="rounded-circle header-profile-user" />
                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-primary">
                    {cartCount}
                </span>
            </Button>
            <h5
                className="text-secondary"
                style={{
                    paddingLeft: '15px',
                    marginBottom: '0px'
                }}
            >
                ${totalPrice}
            </h5>
        </div>
    )
}
