import {useCounterStore} from "@/application/contexts/counter-store.provider";

export const useCounter = () => {
    const count = useCounterStore(store => store.count1);
    const setCount = useCounterStore(store => store.setCount1);
    const getCount = useCounterStore(store => store.getCount1);


    return {
        count, incr: () => setCount(getCount() + 1), decr: () => setCount(getCount() - 1)
    }
}

export const useCounter2 = () => {
    const count2 = useCounterStore(store => store.count2);
    const setCount2 = useCounterStore(store => store.setCount2);
    const getCount2 = useCounterStore(store => store.getCount2);

    return {
        count2,
        incr: () => setCount2(getCount2() + 1),
        decr: () => setCount2(getCount2() - 1)
    }
}

export const useCounter1Reset = () => {
   const setCounter1 = useCounterStore(store => store.setCount1);

   return () => setCounter1(0)
}