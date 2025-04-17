'use client';

import React from "react";
import {useCounter1Reset, useCounter2} from "@/application/hooks/useCounter";
import {Button} from "@/ui/components/ui/button";

export const Counter2 = () => {
    const {count2, incr, decr} = useCounter2();
    const reset = useCounter1Reset()
    const [innerCount, setInnerCount] = React.useState(0);

    const incrLocalCount = () => void setInnerCount(count => count+1)

    return <div>
        <div className={'text-xl font-mono'}>
            Count2 from store: {String(count2)}  {'//'} LocalCount: {String(innerCount)}
        </div>
        <div className={'grid gap-1 grid-cols-2'}>
            <Button variant={'secondary'} onClick={incrLocalCount}>Increment local count</Button>
            <Button variant={'secondary'} onClick={incr}>Increment count2</Button>
            <Button variant={'secondary'} onClick={decr}>Decrement count2</Button>
            <Button variant={'secondary'} onClick={reset}>Reset count1</Button>
        </div>
    </div>
}