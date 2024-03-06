import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderApollo } from '@apollo/client'
import config from 'config/config'

export const client = new ApolloClient({
    uri: config.serverUrl + '/graphql',
    cache: new InMemoryCache()
})


export function  ApolloProvider({children}: any){

    return <ApolloProviderApollo client={client}>
        {children}
    </ApolloProviderApollo>
}