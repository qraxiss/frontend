import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import rootreducer from 'slices'

import { ApolloProvider } from 'lib/apollo-wrapper'
import { RainbowProvider } from 'lib/rainbow'
import { Context } from 'context'

import ScrollToTop from 'lib/auto-scroll'
const store = configureStore({ reducer: rootreducer, devTools: true })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
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
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
