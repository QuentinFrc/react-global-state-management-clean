'use client';

import React from "react";
import {CounterActions, CounterState} from "@/domain/store";
import {StoreApiContextType} from "@/application/shared/store-utils";

export const defaultInitState: CounterState = {
    count1: 0,
    count2: 0,
};

export const CounterStoreAPIContext = React.createContext<StoreApiContextType<CounterState, CounterActions> | undefined>(
    undefined,
)

export const CounterStoreAPIProvider = ({children, storeApi}: React.PropsWithChildren<{
    storeApi: StoreApiContextType<CounterState, CounterActions>
}>) => {
    return <CounterStoreAPIContext.Provider value={storeApi}>
        {children}
    </CounterStoreAPIContext.Provider>
}