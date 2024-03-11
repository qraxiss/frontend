import text from '../../assets/images/logo/text.png'
import icon from '../../assets/images/logo/icon.svg'

import { Image } from 'react-bootstrap'

export function Text({ className = '', height = '' }: { className?: string; height?: string }) {
    return <Image src={text} className={className} height={height} />
}

export function Icon({ className }: { className: string }) {
    return <Image src={icon} className={className} />
}
