import { OrderContextType } from './types'
import { createContext, useContext, useEffect, useState } from 'react'

import { newOrder as newOrderGQL, order as orderGQL, orders as ordersGQL } from 'lib/common-queries'
import { useQuery, useMutation } from 'lib/query-wrapper'

import { useNavigate } from 'react-router-dom'

export type { OrderContextType }

const OrderContext = createContext<any>({})

export const useOrder = () => {
    return useContext(OrderContext) as OrderContextType
}

export function OrderProvider({ children }: { children: any }) {
    let navigate = useNavigate()

    let newOrderRES = useMutation(newOrderGQL)
    let orderRES = useQuery(orderGQL)
    let ordersRES = useQuery(ordersGQL)

    let [newOrder, setNewOrder] = useState()
    let [order, setOrder] = useState()
    let [orders, setOrders] = useState()

    useEffect(() => {
        if (!newOrderRES.loading && newOrderRES.data) {
            setNewOrder(newOrderRES.data)
        }
    }, [newOrderRES.loading])

    useEffect(() => {
        if (!orderRES.loading && orderRES.data) {
            setOrder(orderRES.data)
        }
    }, [orderRES.loading])
    useEffect(() => {
        if (!ordersRES.loading && ordersRES.data) {
            setOrders(ordersRES.data)
        }
    }, [ordersRES.loading])

    return (
        <OrderContext.Provider
            value={{
                newOrder,
                newOrderGQL: newOrderRES,
                order,
                orders
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}
