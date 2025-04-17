'use client'

import React from 'react'

import {CounterActions, CounterState} from '@/domain/store'
import {
    CounterStoreAPIContext,
    defaultInitState,
} from "@/application/counter-store";
import {StoreAPI, StoreApiContextType} from "@/application/shared/store-utils";

export const CounterStoreContext = React.createContext<ReturnType<StoreApiContextType<CounterState, CounterActions>['createStore']> | undefined>(
    undefined,
)

export type CounterStoreProviderProps = React.PropsWithChildren

export const CounterStoreProvider = ({
                                         children,
                                     }: CounterStoreProviderProps) => {
    const storeRef = React.useRef<ReturnType<StoreApiContextType<CounterState, CounterActions>['createStore']> | null>(null)
    const createStore = useCounterApiStore()

    if (storeRef.current === null) {
        storeRef.current = createStore()
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
            {children}
        </CounterStoreContext.Provider>
    )
}

export const useCounterApiStore = () => {
    const counterStoreApiContext = React.useContext(CounterStoreAPIContext)

    if (!counterStoreApiContext) {
        throw new Error(`useCounterApiStore must be used within useCounterApiStoreProvider`)
    }

    return () => counterStoreApiContext.createStore(defaultInitState)
}

export const useCounterStore = <S, >(
    selector: (state: ReturnType<StoreAPI<CounterState & CounterActions>['getState']>) => S
): S => {
    const counterStoreApiContext = React.useContext(CounterStoreAPIContext)
    const storeContext = React.useContext(CounterStoreContext)

    if (!counterStoreApiContext || !storeContext) {
        throw new Error(`useCounterApiStore must be used within useCounterApiStoreProvider`)
    }

    return counterStoreApiContext.useStore(storeContext, selector)
}