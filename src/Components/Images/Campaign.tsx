import campaign1 from '../../assets/images/campaigns/campaign1.png'
import campaign2 from '../../assets/images/campaigns/campaign2.png'
import campaign3 from '../../assets/images/campaigns/campaign3.png'
import campaign4 from '../../assets/images/campaigns/campaign4.png'
import campaign5 from '../../assets/images/campaigns/campaign5.png'

import { Image } from 'react-bootstrap'


export function Campaign1({className}: {className: string}){
    return <Image src={campaign1} className={className}/>
}

export function Campaign2({className}: {className: string}){
    return <Image src={campaign2} className={className}/>
}

export function Campaign3({className}: {className: string}){
    return <Image src={campaign3} className={className}/>
}

export function Campaign4({className}: {className: string}){
    return <Image src={campaign4} className={className}/>
}

export function Campaign5({className}: {className: string}){
    return <Image src={campaign5} className={className}/>
}