import { Section } from '../section'
import { Pages } from '../pages'
import { Title } from '../title'

import { items as pageItems } from 'data/pages'

export function Categories() {
    return (
        <Section>
            <Title title="Categories" />
            <Pages items={pageItems} />
        </Section>
    )
}

export function Shopcek() {
    let items = [
        { url: '', title: 'Launch App' },
        { url: '', title: 'Docs' },
        { url: '', title: 'About Us' },
        { url: '', title: 'Partnership' },
        { url: '', title: 'Support' }
    ]

    return (
        <Section>
            <Title title="Shopcek" />
            <Pages items={items} />
        </Section>
    )
}


export function Misc() {
    let items = [
        { url: '', title: 'Brand' },
        { url: '', title: 'Careers' },
        { url: '', title: 'Terms of Services' },
        { url: '', title: 'Privacy Policy' }
    ]

    return (
        <Section>
            <Title title="Misc" />
            <Pages items={items} />
        </Section>
    )
}
