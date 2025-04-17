'use client';

import Link from "next/link";
import {Button} from "@/ui/components/ui/button";
import {createZustandCounterStore, useZustandStore} from "@/infrastructure/zustand-counter.store";
import {CounterStoreProvider} from "@/application/contexts/counter-store.provider";
import {Counter1} from "@/ui/pages/Counter1";
import {Counter2} from "@/ui/pages/Counter2";
import {Counter1Viewer} from "@/ui/pages/Counter1Viewer";
import {CounterStoreAPIProvider} from "@/application/counter-store";
import React from "react";
import {createVanillaCounterStore, useVanillaStore} from "@/infrastructure/vanilla-counter.store";

export default function Home() {
    const [resetKey, setResetKey] = React.useState(0)
    return (
        <div
            className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Button onClick={() => setResetKey(key => key+1)}>
                Reset (local counters)
            </Button>
            <div className="grid gap-24">
                <div className={'space-y-6'}>
                    <div className={'flex justify-between pb-4 border-b'}>
                        <h2 className={'font-medium text-xl'}>Zustand store</h2>
                        <Button asChild><Link href={'/zustand-store'}>Zustand Store</Link></Button>
                    </div>
                    <CounterStoreAPIProvider storeApi={{
                        createStore: createZustandCounterStore,
                        useStore: useZustandStore
                    }}>
                        <CounterStoreProvider>
                            <div className="space-y-8 *:space-y-2 *:border *:p-4 *:rounded" key={resetKey}>
                                <Counter1/>
                                <Counter2/>
                                <Counter1Viewer/>
                            </div>
                        </CounterStoreProvider>
                    </CounterStoreAPIProvider>
                </div>
                <hr/>
                <div className={'space-y-6'}>
                    <div className={'flex justify-between pb-4 border-b'}>
                        <h2 className={'font-medium text-xl'}>Vanilla store</h2>
                        <Button asChild><Link href={'/vanilla-store'}>Vanilla Store</Link></Button>
                    </div>
                    <CounterStoreAPIProvider storeApi={{
                        createStore: createVanillaCounterStore,
                        useStore: useVanillaStore
                    }}>
                        <CounterStoreProvider>
                            <div className="space-y-8 *:space-y-2 *:border *:p-4 *:rounded">
                                <Counter1/>
                                <Counter2/>
                                <Counter1Viewer/>
                            </div>
                        </CounterStoreProvider>
                    </CounterStoreAPIProvider>
                </div>
            </div>
        </div>
    );
}
