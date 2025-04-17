'use client';

import React from "react";

import {Counter1} from "@/ui/pages/Counter1";
import {Counter1Viewer} from "@/ui/pages/Counter1Viewer";
import {Counter2} from "@/ui/pages/Counter2";

import {CounterStoreAPIProvider} from "@/application/counter-store";
import {CounterStoreProvider} from "@/application/contexts/counter-store.provider";

import {createZustandCounterStore, useZustandStore} from "@/infrastructure/zustand-counter.store";

export default function ZustandStorePage() {
    return (
        <CounterStoreAPIProvider storeApi={{
            createStore: createZustandCounterStore,
            useStore: useZustandStore
        }}>
            <CounterStoreProvider>
                <Counter1/>
                <Counter2/>
                <Counter1Viewer/>
            </CounterStoreProvider>
        </CounterStoreAPIProvider>
    )
}