import React from 'react'
import { UserSection } from './user'
import { UserNav } from './nav'

const Account = () => {
    return (
        <React.Fragment>
            <section className="position-relative">
                <UserSection />
            </section>
            <section className="py-5">
                <UserNav />
            </section>
        </React.Fragment>
    )
}

export default Account
