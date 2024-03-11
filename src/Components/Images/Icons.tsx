import cart from '../../assets/images/icons/cart.png'
import wishlist from '../../assets/images/icons/wishlist.png'
import user from '../../assets/images/icons/user.png'

import { Image } from 'react-bootstrap'

export function Cart({className}: {className: string}){
    return <Image src={cart} className={className}/>
}

export function Wishlist({className}: {className: string}){
    return <Image src={wishlist} className={className}/>
}

export function User({className}: {className: string}){
    return <Image src={user} className={className}/>
}