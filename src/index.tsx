import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { ApolloProvider } from 'lib/apollo-wrapper'
import { RainbowProvider } from 'lib/rainbow'
import { Context } from 'context'

import ScrollToTop from 'lib/auto-scroll'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.Fragment>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <RainbowProvider>
                <ApolloProvider>
                    <ScrollToTop />
                    <Context>
                        <App />
                    </Context>
                </ApolloProvider>
            </RainbowProvider>
        </BrowserRouter>
    </React.Fragment>
)

reportWebVitals()
