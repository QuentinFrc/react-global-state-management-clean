import {CounterState, CounterStore} from "@/domain/store";
import {createStore as createZustandStore} from "zustand/vanilla";

export const createZustandCounterStore = (
    initState: CounterState,
) => {
    return createZustandStore<CounterStore>()((set, get) => ({
        ...initState,
        setCount2: (value) => set({count2: value}),
        setCount1: (count) => set({count1: count}),
        getCount1: () => get().count1,
        getCount2: () => get().count2
    }))
}

export {useStore as useZustandStore} from 'zustand/react';