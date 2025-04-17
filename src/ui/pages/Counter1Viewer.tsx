'use client';

import React from "react";
import {useCounter} from "@/application/hooks/useCounter";
import {Button} from "@/ui/components/ui/button";

export const Counter1Viewer = () => {
    const {count} = useCounter();
    const [innerCount, setInnerCount] = React.useState(0);

    const incrLocalCount = () => void setInnerCount(count => count + 1)

    return (
        <div>
            <div className={'text-xl font-mono'}>
                Count1 from store: {String(count)} {'//'} LocalCount: {String(innerCount)}
            </div>
            <div className={'grid gap-1 grid-cols-3'}>
                <Button variant={'secondary'} onClick={incrLocalCount}>Increment local count</Button>
            </div>
        </div>
    )
}