export type CounterState = {
    count1: number;
    count2: number;
}

export type CounterActions = {
    setCount1: (value: number) => void;
    getCount1: () => number;
    setCount2: (value: number) => void;
    getCount2: () => number;
}

export type CounterStore = CounterState & CounterActions

