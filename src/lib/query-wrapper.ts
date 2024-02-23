import { useMutation as useMutationApollo, useQuery as useQueryApollo } from '@apollo/client'
import { DocumentNode, MutationHookOptions, QueryHookOptions } from '@apollo/client'

import config from 'config/config'
import { simplifyResponse } from './simplify-response'

export function handle(fn: CallableFunction) {
    return async (options: MutationHookOptions | QueryHookOptions) => {
        try {
            return await fn(options)
        } catch (err: any) {
            console.log(err)
        }
    }
}

export function useMutation(mutation: DocumentNode, options?: MutationHookOptions) {
    let jwt = localStorage.getItem('jwt')

    let [fn, { data, error, loading }] = useMutationApollo(mutation, {
        ...options,
        context: {
            headers: {
                Authorization: `Bearer ${!!jwt ? jwt : config.publicReadOnlyApiKey}`
            }
        }
    })

    if (!loading && !!data) {
        data = simplifyResponse(data)
    }

    return { data: data, error: error, loading: loading, fn: handle(fn) }
}

export function useQuery(query: DocumentNode, options?: QueryHookOptions) {
    let jwt = localStorage.getItem('jwt')
    let { data, error, loading, refetch } = useQueryApollo(query, {
        ...options,
        context: {
            headers: {
                Authorization: `Bearer ${!!jwt ? jwt : config.publicReadOnlyApiKey}`
            }
        }
    })

    console.log(error, data)
    if (!loading) {
        data = simplifyResponse(data)
    }

    return { data, loading, error, refetch }
}
