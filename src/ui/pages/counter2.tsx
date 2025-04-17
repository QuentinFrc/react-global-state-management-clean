'use client';

import React from "react";
import {useIncrementCounter} from "@/application/hooks/useCounter";
import {Button} from "@/components/ui/button";

export const CounterIncrementViewer = () => {
    const {counterIncrementCount, incr} = useIncrementCounter();
    const [innerCount, setInnerCount] = React.useState(0);

    const incrLocalCount = () => void setInnerCount(count => count+1)

    return <div>
        <div className={'text-xl font-mono'}>
            {String(counterIncrementCount)} - {String(innerCount)}
        </div>
        <div className={'grid gap-1 grid-cols-2'}>
            <Button variant={'secondary'} onClick={incrLocalCount}>Increment local count</Button>
            <Button variant={'secondary'} onClick={incr}>Increment incremental counter</Button>
        </div>
    </div>
}