import cart from '../../assets/images/icons/cart.png'
import wishlist from '../../assets/images/icons/wishlist.png'
import user from '../../assets/images/icons/user.png'
import delivery from '../../assets/images/icons/delivery.png'
import collections from '../../assets/images/icons/collections.png'

import earn from '../../assets/images/icons/earn.svg'
import clothes from '../../assets/images/icons/clothes.svg'
import accessories from '../../assets/images/icons/accessories.svg'
import home from '../../assets/images/icons/home.svg'
import refill from '../../assets/images/icons/refill.svg'

import { Image } from 'react-bootstrap'

export function Cart({ className = '' }: { className?: string }) {
    return <Image src={cart} className={className} />
}

export function Wishlist({ className = '' }: { className?: string }) {
    return <Image src={wishlist} className={className} />
}

export function User({ className = '' }: { className?: string }) {
    return <Image src={user} className={className} />
}

export function Delivery({ className = '' }: { className?: string }) {
    return <Image src={delivery} className={className} />
}

export function Collections({ className = '' }: { className?: string }) {
    return <Image src={collections} className={className} />
}

export function Earn({ className = '' }: { className?: string }) {
    return <Image src={earn} className={className} />
}

export function Clothes({ className = '' }: { className?: string }) {
    return <Image src={clothes} className={className} />
}

export function Accessories({ className = '' }: { className?: string }) {
    return <Image src={accessories} className={className} />
}

export function Home({ className = '' }: { className?: string }) {
    return <Image src={home} className={className} />
}

export function Refill({ className = '' }: { className?: string }) {
    return <Image src={refill} className={className} />
}
