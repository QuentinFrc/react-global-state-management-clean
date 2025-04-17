import React from "react";
import {CounterActions, CounterState, CounterStore} from "@/domain/store";
import {StoreAPI, StoreStateAndActionsAPI} from "@/application/shared/store-utils";

const withNotifyListener = <T>(callback: (params: T) => void, listeners: Set<() => void>) => {
    return (params: T) => {
        callback(params);
        listeners.forEach((l) => l());
    }
}

export const createVanillaCounterStore = (
    initialState: CounterState
): StoreStateAndActionsAPI<CounterState, CounterActions> => {

    const listeners = new Set<() => void>();

    const state: CounterState & CounterActions = {
        ...initialState,
        getCount1: () => state.count1,
        getCount2: () => state.count2,
        setCount1: withNotifyListener((value) => {
            state.count1 = value;
        }, listeners),
        setCount2: withNotifyListener((value) => {
            state.count2 = value;
        }, listeners),
    };

    return {
        getState: () => state,
        subscribe: (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
    };
};

export const useVanillaStore = <S>(store: StoreAPI<CounterStore>, selector: (state: ReturnType<StoreAPI<CounterStore>['getState']>) => S) =>
    React.useSyncExternalStore(
        store.subscribe,
        () => selector(store.getState()),
        () => selector(store.getState())
    )