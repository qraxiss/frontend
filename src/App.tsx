import React from 'react'

import './assets/scss/themes.scss'

//imoprt Route
import Route from './Routes/Index'

import { client } from 'lib/apollo-wrapper'
import { ApolloProvider } from '@apollo/client'

function App() {
    return (
        <React.Fragment>
            <Route />
        </React.Fragment>
    )
}

export default App
