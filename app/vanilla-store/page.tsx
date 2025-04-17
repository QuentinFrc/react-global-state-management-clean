'use client';

import React from "react";

import {Counter1} from "@/ui/pages/Counter1";
import {Counter1Viewer} from "@/ui/pages/Counter1Viewer";
import {Counter2} from "@/ui/pages/Counter2";

import {CounterStoreProvider} from "@/application/contexts/counter-store.provider";
import {CounterStoreAPIProvider} from "@/application/counter-store";

import {createVanillaCounterStore, useVanillaStore} from "@/infrastructure/vanilla-counter.store";

export default function VanillaStorePage() {
    return (
        <CounterStoreAPIProvider storeApi={{
            createStore: createVanillaCounterStore,
            useStore: useVanillaStore
        }}>
            <CounterStoreProvider>
                <Counter1/>
                <Counter2/>
                <Counter1Viewer/>
            </CounterStoreProvider>
        </CounterStoreAPIProvider>
    )
}